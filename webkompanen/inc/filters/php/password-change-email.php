<?php
	function custom_password_change_email( $change_mail, $user, $userdata ) {
    	// Call Change Email to HTML function
    	$message = "<p>Test HTML email".$user->data->user_login."</p>";
    	$message .= "<p>Test HTML email".$userdata->data->user_login."</p>";

    	$change_mail[ 'message' ] = $message;
    	$change_mail[ 'subject' ] = 'My new email subject';

    	return $change_mail;
	}
	add_filter('password_change_email', 'custom_password_change_email', 10, 3);
?>