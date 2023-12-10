<?php
	// Exit if accessed directly.
	defined( 'ABSPATH' ) || exit;

	$includes = array(
		'sharer',
		'sharer-results'
	);

	foreach ( $includes as $include ) {
		include_once themedir . '/inc/create-tables/php/' . $include . '.php';
	}
?>