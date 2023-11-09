<?php
	function save_user_profile_fields($user_id){
    	# again do this only if you can
    	if(!current_user_can('manage_options'))
        	return false;

    	# save my custom field
		if(isset($_POST['company'])):
    		update_user_meta($user_id, 'company', $_POST['company']);
		endif;
		if(isset($_POST['page_id'])):
			$pages = array();
			$pageid = $_POST['page_id'];
			$sharer = $_POST['page_sharer'];
			$start_date = $_POST['page_start_date'];
			$end_date = $_POST['page_end_date'];
			$status = $_POST['page_status'];
			$emotion = $_POST['page_feedback_emotion'];
			$description = $_POST['page_feedback_description'];

			foreach( $pageid as $key => $page ):
				array_push(
					$pages,
					array(
						'ID' => $page,
						'sharer' => $sharer[$key],
						'start_date' => $start_date[$key],
						'end_date' => $end_date[$key],
						'status' =>  intval($status[$key]),
						'results' => $results[$key],
						'feedback' => array(
							'emotion' => $emotion[$key],
							'description' => json_encode($description[$key])
						)
					)			  
				);
			endforeach;
			update_user_meta($user_id, 'pages', addslashes(json_encode($pages, true)));
		endif;
	}
	add_action('user_register', 'save_user_profile_fields');
	add_action('profile_update', 'save_user_profile_fields');
?>