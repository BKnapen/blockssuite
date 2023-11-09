<?php
	// Exit if accessed directly.
	defined( 'ABSPATH' ) || exit;

	$includes = array(
		'preload-webfonts'
	);

	foreach ( $includes as $include ) {
		include_once themedir . '/inc/preload-webfonts/php/' . $include . '.php';
	}
?>