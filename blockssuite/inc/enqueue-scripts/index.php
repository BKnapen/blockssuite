<?php
	// Exit if accessed directly.
	defined( 'ABSPATH' ) || exit;

	$includes = array(
		'enqueue-scripts'
	);

	foreach ( $includes as $include ) {
		include_once themedir . '/inc/enqueue-scripts/php/' . $include . '.php';
	}
?>