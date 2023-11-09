<?php
	// Exit if accessed directly.
	defined( 'ABSPATH' ) || exit;

	$includes = array(
		'save-user-profile-fields',
		'user-profile-fields'
	);

	foreach ( $includes as $include ) {
		include_once themedir . '/inc/user-profile-fields/php/' . $include . '.php';
	}
?>