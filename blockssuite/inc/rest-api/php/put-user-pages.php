<?php
	// Exit if accessed directly.
	defined( 'ABSPATH' ) || exit;

	//encrypt('encrypt', $users[$x][1], $usertokens[$x][2], 'test')
	//decrypt('decrypt', $results[$i]->emergencyemailaddress, $results[$i]->token, 'test');

	add_action('rest_api_init', function() {
		register_rest_route('pages/v1', '/update/', array(
    		'methods' => 'POST',
    		'callback' => 'updatelink',
    		'args' => array(
      			'type' => array(
        			'validate_callback' => function($param, $request, $key) {
          				return  $request['type'];
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
      			)
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
	function updatelink(WP_REST_Request $request){
		if(isset($request['post_id']) && isset($request['user_id']) && isset($request['status']) && isset($request['type']) || isset($request['post_id']) && isset($request['user_id']) && isset($request['emotion']) && isset($request['type']) || isset($request['post_id']) && isset($request['user_id']) && isset($request['description']) && isset($request['type'])):
			global $wpdb;
			$response = new \stdClass();
			$data = new \stdClass();
			$data->status = 201;
			$data->message = 'Route gevonden die overeenkomt met de URL en aanvraagmethode';
			
			$user_check = get_user_by( 
				'id',
				$request['user_id']
			);
		
			$data->user = $user_check;
			$data->post_id = $request['post_id'];
			$data->originalpages = json_decode($user_check->pages, true);
			$data->type = $request['type'];
			if($user_check && $request['type'] == 'emotion'):
				$pages = json_decode($user_check->pages, true);
	
				$positionid = array_search($request['post_id'], array_column($pages, 'ID'));
				$data->positionid = $positionid;
		
				if(is_numeric($positionid)):
					$pages[$positionid]['feedback']['emotion'] = $request['emotion'];
		
					$update_user = wp_update_user(
						array(
							'ID' => $user_check->ID, //int User ID. If supplied, the user will be updated.
							'meta_input' => array(
								'pages' => addslashes(json_encode($pages, true))
							)
						)
					);
					
					$data->pages = $pages;
		
					if ( ! is_wp_error( $update_user ) ):
						$data->user_id = $update_user;
						$data->success = true;
						$data->update = true;
						//new_training_email(trim($request['first_name']), trim($request['last_name']), trim($request['email']), $request['post_id']);
					else:
						$data->success = false;
						$data->update = false;
					endif;
				endif;
			elseif($user_check && $request['type'] == 'description'):
				$pages = json_decode($user_check->pages, true);
	
				$positionid = array_search($request['post_id'], array_column($pages, 'ID'));
				$data->positionid = $positionid;
		
				if(is_numeric($positionid)):
					$pages[$positionid]['feedback']['description'] = json_encode($request['description']);
		
					$update_user = wp_update_user(
						array(
							'ID' => $user_check->ID, //int User ID. If supplied, the user will be updated.
							'meta_input' => array(
								'pages' => addslashes(json_encode($pages, true))
							)
						)
					);
					
					$data->pages = $pages;
		
					if ( ! is_wp_error( $update_user ) ):
						$data->user_id = $update_user;
						$data->success = true;
						$data->update = true;
						//new_training_email(trim($request['first_name']), trim($request['last_name']), trim($request['email']), $request['post_id']);
					else:
						$data->success = false;
						$data->update = false;
					endif;
				endif;
			elseif($user_check && $request['type'] == 'status'):
				$pages = json_decode($user_check->pages, true);
	
				$positionid = array_search($request['post_id'], array_column($pages, 'ID'));
				$data->positionid = $positionid;
		
				if(is_numeric($positionid)):
					$pages[$positionid]['status'] = $request['status'];
						
					$update_user = wp_update_user(
						array(
							'ID' => $user_check->ID, //int User ID. If supplied, the user will be updated.
							'meta_input' => array(
								'pages' => addslashes(json_encode($pages, true))
							)
						)
					);
					
					$data->pages = $pages;
		
					if ( ! is_wp_error( $update_user ) ):
						$data->user_id = $update_user;
						$data->success = true;
						$data->update = true;
						//new_training_email(trim($request['first_name']), trim($request['last_name']), trim($request['email']), $request['post_id']);
					else:
						$data->success = false;
						$data->update = false;
					endif;
				else:
					$data->success = false;
				endif;
			else:
				$data->success = false;
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