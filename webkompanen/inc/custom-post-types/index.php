<?php
	// Exit if accessed directly.
	defined( 'ABSPATH' ) || exit;

	$includes = array(
		'courses',
		'reviews',
		'agenda',
		'events',
		'galleries',
		'referenties'
		//'acture',
		//'acture-freelance-solutions',
		//'acture-subsidies',
		//'acture-verzekeringen',
		//'ardosz',
		//'ascot-advies',
		//'keesz',
		//'tulpenfonds',
		//'verzuimweg'
	);

	foreach ( $includes as $include ) {
		include_once themedir . '/inc/custom-post-types/php/' . $include . '.php';
	}
?>