<?php
	function save_user_profile_fields($user_id){
    	# again do this only if you can
    	if(!current_user_can('manage_options'))
        	return false;

    	# save my custom field
		if(isset($_POST['company'])):
    		update_user_meta($user_id, 'company', $_POST['company']);
		endif;
	}
	add_action('user_register', 'save_user_profile_fields');
	add_action('profile_update', 'save_user_profile_fields');
?>