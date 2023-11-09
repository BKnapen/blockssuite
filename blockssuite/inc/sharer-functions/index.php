<?php
	// Exit if accessed directly.
	defined( 'ABSPATH' ) || exit;

	$includes = array(
		'invitation-email',
		'new-training-email',
		'new-user-email'
	);

	foreach ( $includes as $include ) {
		include_once themedir . '/inc/sharer-functions/php/' . $include . '.php';
	}
?>