<?php
	// Exit if accessed directly.
	defined( 'ABSPATH' ) || exit;

	$includes = array(
		'check-user-admin-access'
	);

	foreach ( $includes as $include ) {
		include_once themedir . '/inc/check-user-admin-access/php/' . $include . '.php';
	}
?>