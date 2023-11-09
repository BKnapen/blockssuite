<?php
	// Exit if accessed directly.
	defined( 'ABSPATH' ) || exit;

	$includes = array(
		'lostpassword',
		'password-reset-after',
		'password-reset',
		'signin'
	);

	foreach ( $includes as $include ) {
		include_once themedir . '/inc/actions/php/' . $include . '.php';
	}
?>