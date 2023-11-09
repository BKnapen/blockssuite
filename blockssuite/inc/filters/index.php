<?php
	// Exit if accessed directly.
	defined( 'ABSPATH' ) || exit;

	$includes = array(
		'invited-user-email',
		'new-user-notification-email',
		'password-change-email',
		'retrieve-password-message',
		'show-admin-bar'
	);

	foreach ( $includes as $include ) {
		include_once themedir . '/inc/filters/php/' . $include . '.php';
	}
?>