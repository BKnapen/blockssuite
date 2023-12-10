<?php
	// Exit if accessed directly.
	defined( 'ABSPATH' ) || exit;

	$includes = array(
		'font-face-styles'
	);

	foreach ( $includes as $include ) {
		include_once themedir . '/inc/font-face-styles/php/' . $include . '.php';
	}
?>