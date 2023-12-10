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
		
			$user_check = get_user_by( 
				'email',
				$request['email']
			);
		
			$data->user_check = $user_check;
		
			if(!$user_check):
				$pages = array();
				
				$activation_key = wp_generate_password(20, false);
				$activation_key_hashed = time() . ':' . wp_hash_password( $activation_key );
				
				array_push(
					$pages,
					array(
						'ID' => $request['post_id'],
						'sharer' => $request['user_id'],
						'start_date' => $wp_date,
						'end_date' => $date_time->format('Y-m-d H:i:s'),
						'status' => 0,
						'results' => '',
						'feedback' => array(
							'emotion' => '',
							'description' => ''
						)
					)			  
				);
		
				$insert_user = wp_insert_user(
					array(
						//'ID' => '' //int User ID. If supplied, the user will be updated.
						'user_pass' => $activation_key, //string The plain-text user password.
						'user_login' => trim($request['email']), //string The user's login username.
						'user_nicename' => trim($request['first_name']).' '.trim($request['last_name']),  //string The URL-friendly user name.
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
							'pages' => addslashes(json_encode($pages, true)),
							//'token' => $token,
							'start_date' => $wp_date,
							'end_date' => $date_time->format('Y-m-d H:i:s')
						)
					)
				);
		
				if ( ! is_wp_error( $insert_user ) ):
					$data->user_id = $insert_user;
					$data->success = true;
					new_user_email(trim($request['first_name']), trim($request['last_name']), trim($request['email']), $activation_key, $request['post_id']);
				else:
					$data->success = false;
				endif;
			else:
				$data->user_exit = true;
				$pages = json_decode($user_check->pages, true);
				$data->pages = json_decode($user_check->pages, true);
				$page_exit = wp_filter_object_list(
					$pages, 
					['ID' => $request['post_id']]
				);
		
				if(empty($page_exit)):
		
					$data->page_already_exit = false;
		
					array_push(
						$pages,
						array(
							'ID' => $request['post_id'],
							'sharer' => $request['user_id'],
							'start_date' => $wp_date,
							'end_date' => $date_time->format('Y-m-d H:i:s'),
							'status' => 0,
							'results' => '',
							'feedback' => array(
								'emotion' => '',
								'description' => ''
							)
						)			  
					);
		
					$data->user_id = 'not created';
		
					$update_user = wp_update_user(
						array(
							'ID' => $user_check->ID, //int User ID. If supplied, the user will be updated.
							'meta_input' => array(
								'pages' => addslashes(json_encode($pages, true))
							)
						)
					);
		
					if ( ! is_wp_error( $update_user ) ):
						$data->user_id = $update_user;
						$data->success = true;
						new_training_email(trim($request['first_name']), trim($request['last_name']), trim($request['email']), $request['post_id']);
					else:
						$data->success = false;
					endif;
				else:
					$data->page_already_exit = true;
				endif;
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