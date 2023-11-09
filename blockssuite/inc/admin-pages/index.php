<?php
	// Exit if accessed directly.
	defined( 'ABSPATH' ) || exit;

	$includes = array(
		'settings'
	);

	foreach ( $includes as $include ) {
		include_once themedir . '/inc/admin-pages/php/' . $include . '.php';
	}
?>