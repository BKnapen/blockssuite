<?php
	// Exit if accessed directly.
	defined( 'ABSPATH' ) || exit;

	$includes = array(
		'trainingen'
	);

	foreach ( $includes as $include ) {
		include_once themedir . '/inc/meta-boxxes/php/' . $include . '.php';
	}
?>