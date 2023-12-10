<?php
	// Exit if accessed directly.
	defined( 'ABSPATH' ) || exit;

	//encrypt('encrypt', $users[$x][1], $usertokens[$x][2], 'test')
	//decrypt('decrypt', $results[$i]->emergencyemailaddress, $results[$i]->token, 'test');

	add_action('rest_api_init', function() {
		register_rest_route('share/v1', '/new/', array(
    		'methods' => 'POST',
    		'callback' => 'createlink',
    		'args' => array(
      			'first_name' => array(
        			'validate_callback' => function($param, $request, $key) {
          				return  $request['first_name'];
        			}
      			),
      			'last_name' => array(
        			'validate_callback' => function($param, $request, $key) {
          				return  $request['last_name'];
        			}
      			),
      			'email' => array(
        			'validate_callback' => function($param, $request, $key) {
          				return  $request['email'];
        			}
      			),
      			'post_id' => array(
        			'validate_callback' => function($param, $request, $key) {
          				return  is_numeric($request['post_id']);
        			}
      			),
      			'user_id' => array(
        			'validate_callback' => function($param, $request, $key) {
          				return  is_numeric($request['user_id']);
        			}
      			),
    		),
    		'permission_callback' => function($request) {
				$authorization = $request->get_header('authorization');
				if($authorization != ''):
					$authorizationarray = explode('Basic ', $authorization);
					if(count($authorizationarray) == 2):
        				$credentialsarray = explode(':', base64_decode($authorizationarray[1]));
						if(count($credentialsarray) == 2):
							$user = wp_authenticate_application_password(null, ''.$credentialsarray[0].'', ''.$credentialsarray[1].'');
							if(isset($user->ID)):
          						return  true;
							else:
								return false;
							endif;
						else:
							return false;
						endif;
					else:
						return false;
					endif;
				else:
					return false;
				endif;
        	}
		)
	);
	});

	function createlink(WP_REST_Request $request){
		global $wpdb;
		
		if(isset($request['first_name']) && isset($request['last_name']) && isset($request['post_id']) && isset($request['user_id'])):
			$response = new \stdClass();
			$data = new \stdClass();
			$data->status = 201;
			$data->message = 'Route gevonden die overeenkomt met de URL en aanvraagmethode';
			
			$data->user_exit = false;
			$wp_date = wp_date('Y-m-d H:i:s');
			$date_time = new DateTime($wp_date);
			$date_time->add(new DateInterval('P14D')); // P14D P12M P24M 1Y means a period of 60 days
			
			$first_name_hash = wp_hash($request['first_name'], 'nonce');
			$last_name_hash = wp_hash($request['first_name'], 'nonce');
			$email_hash = wp_hash($request['email'], 'nonce');
			$token = $first_name_hash.'::'.$last_name_hash.'::'.$email_hash;
		
			$dbselect = $wpdb->get_results(
				$wpdb->prepare(
					"SELECT 
						sharer.id AS id,
						sharer.pages AS pages,
						sharer.token AS token
							FROM `".$wpdb->prefix."sharer` AS sharer
								WHERE sharer.token LIKE %s
									ORDER BY sharer.id ASC
										LIMIT %d", '%'.$email_hash.'%', 1
				)
			);
		
			/*$result = wp_create_user(
				'johndoe', 
				'passwordgoeshere', 
				'john.doe@example.com'
			);*/
		
			$user_check = get_user_by( 
				'email',
				$request['email']
			);
		
			$data->user_check = $user_check;
		
			if(!$user_check):
				$pages = array();
				array_push(
					$pages,
					array(
						'ID' => $request['post_id'],
						'sharer' => $request['user_id'],
						'start_date' => $wp_date,
						'end_date' => $date_time->format('Y-m-d H:i:s'),
						'results' => '',
						'feedback' => array(
							'emotion' => '',
							'description' => ''
						)
					)			  
				);
				//sanitize_title()
				$user_nickname = remove_accents( trim($request['first_name']).' '.trim($request['last_name']) );
				$user_nickname = normalize_whitespace( $user_nickname );
				$user_nickname = preg_replace('/[\W]+/', '', $user_nickname);
		
				$insert_user = wp_insert_user(
					array(
						//'ID' => '' //int User ID. If supplied, the user will be updated.
						'user_pass' => 'testje', //string The plain-text user password.
						'user_login' => trim($request['email']), //string The user's login username.
						'user_nicename' => $user_nickname,  //string The URL-friendly user name.
						//'user_url' => '',//string The user URL.
						'user_email' => trim($request['email']), //string The user email address.
						'display_name' => trim($request['first_name']).' '.trim($request['last_name']), //string The user's display name. Default is the user's username.
						'nickname' => trim($request['first_name']).' '.trim($request['last_name']), //string The user's nickname. Default is the user's username.
						'first_name' => trim($request['first_name']), //string The user's first name. For new users, will be used to build the first part of the user's display name if $display_name is not specified.
						'last_name' => ($request['last_name']), //string The user's last name. For new users, will be used to build the second part of the user's display name if $display_name is not specified.
						'description' => '',//string The user's biographical description.
						'show_admin_bar_front' => 'false',//string Whether to display the Admin Bar for the user on the site's front end. Accepts 'true' or 'false' as a string literal, not boolean. Default 'true'.
						'role' => 'ardosz_user', //string User's role.
						'meta_input' => array(
							'company' => 'ArdoSZ',
							'pages' => json_encode($pages, true),
							'token' => $token,
							'start_date' => $wp_date,
							'end_date' => $date_time->format('Y-m-d H:i:s')
						)
					)
				);
		
				if ( ! is_wp_error( $insert_user ) ):
					$data->user_id = $insert_user;
				else:
					$data->user_id = 'not created';
				endif;
			endif;
		
			if(empty($dbselect)):
				$access_key = $request['user_id'];
				$access_key .= $request['post_id'];
				$access_key .= $request['first_name'];
				$access_key .= $request['last_name'];
				$access_key .= $request['email'];
				$access_key .= $wp_date;
				$access_key .= $date_time->format('Y-m-d H:i:s');
				$access_key .= 0;
		
		
				$access_key = hash('sha512', $access_key);
		
				$first_name = encrypt('encrypt', $request['first_name'], wp_salt($request['first_name'], 'nonce'), wp_hash($request['first_name'], 'nonce'));
				$last_name = encrypt('encrypt', $request['last_name'], wp_salt($request['last_name'], 'nonce'), wp_hash($request['first_name'], 'nonce'));
				$email = encrypt('encrypt', $request['email'], wp_salt($request['email'], 'nonce'), wp_hash($request['email'], 'nonce'));
				$token = $first_name_hash.'::'.$last_name_hash.'::'.$email_hash;
			
				$page = array(
					'ID' => $request['post_id'],
					'sharer' => $request['user_id'],
					'start_date' => $wp_date,
					'end_date' => $date_time->format('Y-m-d H:i:s'),
					'results' => '',
					'feedback' => array(
						'emotion' => '',
						'description' => ''
					)
				);
				$pages = array();
		
				array_push(
					$pages,
					array(
						'ID' => $request['post_id'],
						'sharer' => $request['user_id'],
						'start_date' => $wp_date,
						'end_date' => $date_time->format('Y-m-d H:i:s'),
						'results' => '',
						'feedback' => array(
							'emotion' => '',
							'description' => ''
						)
					)			  
				);
		
				$pages = json_encode($pages, true);
		
				$activation_key = wp_generate_password(20, false);
				$activation_key_hashed = time() . ':' . wp_hash_password( $activation_key );
		
				$dbinsertsharer = $wpdb->query(
					$wpdb->prepare(
						"INSERT INTO 
							`".$wpdb->prefix."sharer` (
								sharer,
								pageid,
								pages,
								first_name,
								last_name,
								email,
								start_date,
								end_date,
								access_key,
								activation_key,
								token,
								status
							)
						VALUES  (
							'%d',
							'%d',
							'%s',
							'%s',
							'%s',
							'%s',
							'%s',
							'%s',
							'%s',
							'%s',
							'%s',
							'%d'
						)", 
						$request['user_id'],
						$request['post_id'],
						$pages,
						$first_name,
						$last_name,
						$email,
						$wp_date,
						$date_time->format('Y-m-d H:i:s'),
						$access_key,
						$activation_key_hashed,
						$token,
						0
					)
				);
		
				$dbinsertsharerresults = $wpdb->query(
					$wpdb->prepare(
						"INSERT INTO 
							`".$wpdb->prefix."sharer_results` (
								sharerid,
								pageid
							)
						VALUES  (
							'%d',
							'%d'
						)", 
						$wpdb->insert_id,
						$request['post_id']
					)
				);
	
				if($dbinsertsharer):
					$data->sharer = true;
					if($dbinsertsharerresults):
						$data->sharerresults = true;
						$data->first_name = $request['first_name'];
						$data->last_name = $request['last_name'];
						$data->activation_key = $activation_key;
						$data->email = $request['email'];
		
						sharer_invitation_email($request['first_name'], $request['last_name'], $request['email'], $activation_key);
					else:
						$data->sharerresults = false;
						$data->last_error = $wpdb->last_error;
					endif;
				else:
					$data->sharer = false;
					$data->last_error = $wpdb->last_error;
				endif;
			else:
				$pages = json_decode($dbselect[0]->pages, true);

				$page_exit = wp_filter_object_list(
					json_decode($dbselect[0]->pages, true), 
					['ID' => $request['post_id']]
				);
		
				if(empty($page_exit)):
					array_push(
						$pages,
						array(
							'ID' => $request['post_id'],
							'sharer' => $request['user_id'],
							'start_date' => $wp_date,
							'end_date' => $date_time->format('Y-m-d H:i:s'),
							'results' => '',
							'feedback' => array(
								'emotion' => '',
								'description' => ''
							)
						)			  
					);
		
					$pages = json_encode($pages, true);
		
					$dbupdatesharer = $wpdb->query(
						$wpdb->prepare(
							"UPDATE `".$wpdb->prefix."sharer`
								SET pages = %s
							WHERE id = %d",
							$pages,
							$dbselect[0]->id
						)
					);
				
					if($dbupdatesharer):
						$data->update = true;
						sharer_new_training_email($request['first_name'], $request['last_name'], $request['email']);
					else:	
						$data->update = false;
						$data->last_error = $wpdb->last_error;	
					endif;
				endif;
		
				$data->page_exit = $page_exit;
				$data->pages = $pages;
				$data->user_exit = true;
			endif;
			
			$response = $data;
		else:
			$response = new \stdClass();
			$data = new \stdClass();
			
			$data->status = 404;
	
			$response->code = 'rest_no_route';
			$response->message = 'Geen route gevonden die overeenkomt met de URL en aanvraagmethode test.';
		endif;

		return rest_ensure_response($response);
	}
?>