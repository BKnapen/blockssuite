<?php
function check_user_admin_access(){
	if ( is_admin() ):
		$user = wp_get_current_user();
		if ( in_array( 'ardosz_user', (array) $user->roles ) ):
    		$redirect_url = home_url('my-account');

			wp_redirect($redirect_url);
		endif;
	endif;
}
add_action( 'init', 'check_user_admin_access');
?>