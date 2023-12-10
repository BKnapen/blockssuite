<?php
	// Exit if accessed directly.
	defined( 'ABSPATH' ) || exit;

	$includes = array(
		'enqueue-admin-scripts'
	);

	foreach ( $includes as $include ) {
		include_once themedir . '/inc/enqueue-admin-scripts/php/' . $include . '.php';
	}
?>