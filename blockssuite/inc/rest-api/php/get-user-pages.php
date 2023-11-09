<?php
	// Exit if accessed directly.
	defined( 'ABSPATH' ) || exit;

	//encrypt('encrypt', $users[$x][1], $usertokens[$x][2], 'test')
	//decrypt('decrypt', $results[$i]->emergencyemailaddress, $results[$i]->token, 'test');

	add_action('rest_api_init', function() {
		register_rest_route('pages/v1', '/get/', array(
    		'methods' => 'POST',
    		'callback' => 'getpages',
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
	function getpages(WP_REST_Request $request){
		if(isset($request['post_id']) && isset($request['user_id']) && isset($request['type'])):
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
			if($user_check && $request['type'] == 'description'):
				$pages = json_decode($user_check->pages, true);
	
				$positionid = array_search($request['post_id'], array_column($pages, 'ID'));
				$data->positionid = $positionid;
		
				if(is_numeric($positionid)):
					$data->description = nl2br(json_decode($pages[$positionid]['feedback']['description']));
		
					
					$data->pages = $pages;
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