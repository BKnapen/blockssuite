<?php
	// Exit if accessed directly.
	defined( 'ABSPATH' ) || exit;

	$includes = array(
		'email-sender',
		'send-smtp-email'
	);

	foreach ( $includes as $include ) {
		include_once themedir . '/inc/email-settings/php/' . $include . '.php';
	}
?>