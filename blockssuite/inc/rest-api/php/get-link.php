<?php
	// Exit if accessed directly.
	defined( 'ABSPATH' ) || exit;

	add_action('rest_api_init', function() {
		register_rest_route('share/v1', '/check/(?P<key>[a-zA-Z\d]+)', array(
    		'methods' => 'GET',
    		'callback' => 'getlink',
    		'args' => array(
      			'key' => array(
        			'validate_callback' => function($param, $request, $key) {
          				return  $param ;
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

	//https://developer.wordpress.org/rest-api/using-the-rest-api/authentication/



	//header('Access-Control-Allow-Origin: https://www.webkompanen.nl ');

	function getlink(WP_REST_Request $request){
		global $wpdb;
		//global $dbselectclubs;
		/* %s – string (value is escaped and wrapped in quotes)
		 * %d – integer
		 * %f – float
		 * %% – % sign
	 	*/
		
		if(isset($request['key'])):
			$response = new \stdClass();
			$data = new \stdClass();
			$data->status = 201;
			$data->message = 'Route gevonden die overeenkomt met de URL en aanvraagmethode';
			$data->accesskey = $request['key'];
			
			global $wpdb;
		/*$sql = "SELECT sharer.id AS id, sharer.sharer AS sharer, sharer.pageid AS pageid, sharer.first_name AS first_name, sharer.last_name AS last_name, sharer.email AS email, sharer.start_date AS start_date, sharer.end_date AS end_date, sharer.access_key AS access_key, sharer.status AS status, sharerresults.results AS results FROM `mVcN3ugY_sharer` AS sharer INNER JOIN `mVcN3ugY_sharer_results` AS sharerresults ON sharerresults.sharerid = sharer.id AND sharerresults.pageid = sharer.pageid WHERE `access_key` = \'225c41bcd93acd798fe9dd5eadf1711cc574a24c6b0a752812d337b4c01f589ef663d21f302a2bfa7c2ad65b27ccba5294912359e6a4f5a5e28d1d18c4aa73e0\'\n"

    . "ORDER BY sharer.id\n"

    . "LIMIT 1;";*/
			$dbselect = $wpdb->get_results(
				$wpdb->prepare(
					"SELECT 
						sharer.id AS id, 
						sharer.sharer AS sharer, 
						sharer.pageid AS pageid, 
						sharer.first_name AS first_name, 
						sharer.last_name AS last_name, 
						sharer.email AS email, 
						sharer.start_date AS start_date, 
						sharer.end_date AS end_date, 
						sharer.access_key AS access_key, 
						sharerresults.results AS results 
							FROM `".$wpdb->prefix."sharer` AS sharer
								INNER JOIN `".$wpdb->prefix."sharer_results` AS sharerresults
								ON sharerresults.sharerid = sharer.id AND sharerresults.pageid = sharer.pageid
									WHERE sharer.access_key = %s
										ORDER BY sharer.id ASC
											LIMIT %d", '225c41bcd93acd798fe9dd5eadf1711cc574a24c6b0a752812d337b4c01f589ef663d21f302a2bfa7c2ad65b27ccba5294912359e6a4f5a5e28d1d18c4aa73e0', 1
				)
			);
		
			if(!empty($dbselect)):
				$data->status = 201;
				$resultdata = array();
				foreach ($dbselect as $result):
		
                	//$user_id = wp_insert_user($default_newuser);
                    $key = $result->access_key;
		
					//auth, secure_auth, logged_in, nonce
					$data->wp_hash = wp_hash($key, 'nonce');
					$data->wp_hash_secure_auth = wp_hash($key, 'secure_auth');
					
					$activation_key = wp_generate_password(20, false);
					$activation_key_hashed = time() . ':' . wp_hash_password( $activation_key );
					$data->activation_key = $activation_key;
					$data->activation_key_hashed = $activation_key_hashed;
					$data->wp_hash_password = wp_hash_password(wp_hash($key, 'nonce'));
					$wp_hash_password = wp_hash_password(wp_hash($key, 'nonce'));
					$wp_hash = wp_hash($key, 'nonce');
					$data->wp_check_password = wp_check_password( $wp_hash, $wp_hash_password);
		
		
					/*
					$newuser = array(
                    	'user_pass' =>  $wp_hasher->HashPassword( $key ),
                       	'user_login' => $result->email,
                     	'user_email' => $result->email,
                      	'user_nicename' => $result->first_name.$result->last_name,
                     	'display_name'  => $result->first_name,
                     	'nickname'      => $result->first_name,
                      	'first_name' => $result->first_name,
                    	'last_name' => $result->last_name,
    					'role' => 'subscriber'
                  	);
		
					$user_id = wp_insert_user($newuser);
		
					$request_id = wp_insert_post( array(
						'post_author'   => $user_id,
						'post_name'     => $action_name,
						'post_title'    => $emaildata,
						'post_content'  => wp_json_encode( $request_data ),
						'post_status'   => 'request-pending',
						'post_type'     => 'user_request',
						'post_date'     => current_time( 'mysql', false ),
						'post_date_gmt' => current_time( 'mysql', true ),
					), true );
					$key = wp_generate_user_request_key( $request_id );
					
                    $hashed = time() . ':' . $wp_hasher->HashPassword( $key );
                    $user_login = $user_data->user_login;
                    $wpdb->update( 
                    	'wp_users', 
                        array( 
                       		'user_activation_key' => $hashed 
                       	), 
                       	array( 
							'ID' => $user_id 
						), 
                      	array( 
                      		'%s'    // value1
                      	), 
                     	array( 
							'%d' 
						) 
                  	);
						
					$activation_linl  = add_query_arg( 
						array(
							'action'=> 'confirmaction',
							'request_id'=> $request_id,
							'confirm_key' => $key,
        				), 
						site_url( 'wp-login.php' ) 
					);
					*/
                    //do_action( 'retrieve_password_key', $user_data->user_login, $key );
		
					array_push($resultdata,
						array(
							'first_name' => decrypt('decrypt', $result->first_name, $result->access_key, $result->start_date),
							'last_name' => decrypt('decrypt', $result->last_name, $result->access_key, $result->start_date),
							'email' => decrypt('decrypt', $result->email, $result->access_key, $result->start_date)
						)
					);
				
				endforeach;
				$data->resultdata = $resultdata;
			else:
				$data->status = 404;
	
				$response->code = 'rest_no_route';
				$response->message = 'Geen route gevonden die overeenkomt met de URL en aanvraagmethode test.';
			endif;
		
			
			//$data->status = 201;
			//$response->message = 'Route gevonden die overeenkomt met de URL en aanvraagmethode test.';
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