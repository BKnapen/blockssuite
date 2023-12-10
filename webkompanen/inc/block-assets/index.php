<?php
	// Exit if accessed directly.
	defined( 'ABSPATH' ) || exit;

	$includes = array(
		'block-assets'
	);

	foreach ( $includes as $include ) {
		include_once themedir . '/inc/block-assets/php/' . $include . '.php';
	}
?>