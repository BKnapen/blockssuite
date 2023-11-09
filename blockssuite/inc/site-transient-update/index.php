<?php
	// Exit if accessed directly.
	defined( 'ABSPATH' ) || exit;

	$includes = array(
		'site-transient-update'
	);

	foreach ( $includes as $include ) {
		include_once themedir . '/inc/site-transient-update/php/' . $include . '.php';
	}
?>