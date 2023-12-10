<?php
	function tf_check_user_role( $roles ) {
    	/*@ Check user logged-in */
    	if ( is_user_logged_in() ) :
        	/*@ Get current logged-in user data */
        	$user = wp_get_current_user();
        	/*@ Fetch only roles */
        	$currentUserRoles = $user->roles;
        	/*@ Intersect both array to check any matching value */
        	$isMatching = array_intersect( $currentUserRoles, $roles);
        	$response = false;
        	/*@ If any role matched then return true */
        	if ( !empty($isMatching) ) :
            	$response = true;        
        	endif;
        	return $response;
    	endif;
	}
	$roles = [ 'customer', 'subscriber', 'ardosz_user', 'acture_user', 'verzuimweg_user', 'keesz_user', 'ascot_advies_user', 'tulpenfonds_user', 'acture_subsidies_user', 'acture_verzekeringen_user', 'acture_freelance_solutions_user' ];

	if ( tf_check_user_role($roles) ) :
    	add_filter('show_admin_bar', '__return_false');
	endif;
?>