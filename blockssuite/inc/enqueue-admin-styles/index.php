<?php
	// Exit if accessed directly.
	defined( 'ABSPATH' ) || exit;

	$includes = array(
		'enqueue-admin-styles'
	);

	foreach ( $includes as $include ) {
		include_once themedir . '/inc/enqueue-admin-styles/php/' . $include . '.php';
	}
?>