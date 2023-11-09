<?php
	// Exit if accessed directly.
	defined( 'ABSPATH' ) || exit;

	$includes = array(
		'email-settings',
		'gtm-settings',
		'google-maps-settings'
	);

	foreach ( $includes as $include ) {
		include_once themedir . '/inc/register-settings/php/' . $include . '.php';
	}
?>