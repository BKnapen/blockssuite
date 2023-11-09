<?php
	function password_reset_action($user){
    	$subject  = "Password changed";
    	$message = __('Someone changed the password for the following account:') . '<br>';
    	$message  = '<p>Hi ' . ucfirst( $user->data->first_name ) . ',</p>';
    	$message .= network_home_url( '/' ) . '<br>';
    	$message .= sprintf(__('Username: %s'), $user->data->user_login) . '<br>';

   		wp_mail( $user->data->user_email, $subject, $message ); // TODO
	}
	add_action('password_reset', 'password_reset_action');
?>