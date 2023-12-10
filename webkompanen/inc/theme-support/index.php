<?php
	// Exit if accessed directly.
	defined( 'ABSPATH' ) || exit;

	$includes = array(
		'theme-support'
	);

	foreach ( $includes as $include ) {
		include_once themedir . '/inc/theme-support/php/' . $include . '.php';
	}
?>