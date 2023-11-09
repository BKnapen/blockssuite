<?php
	// Exit if accessed directly.
	defined( 'ABSPATH' ) || exit;

	$includes = array(
		'meta-fields-courses',
		'meta-fields-agenda',
		'meta-fields-events',
		'meta-fields-gallery',
	);

	foreach ( $includes as $include ) {
		include_once themedir . '/inc/register-meta-fields/php/' . $include . '.php';
	}
?>