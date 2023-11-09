<?php
	// Exit if accessed directly.
	defined( 'ABSPATH' ) || exit;

	$includes = array(
		'settings'
	);

	foreach ( $includes as $include ) {
		include_once themedir . '/inc/admin-menu/php/' . $include . '.php';
	}
?>