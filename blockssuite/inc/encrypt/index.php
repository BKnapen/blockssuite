<?php
	defined( 'ABSPATH' ) || exit;

	$includes = array(
		'encrypt'
	);

	foreach ( $includes as $include ) {
		include_once themedir . '/inc/encrypt/php/' . $include . '.php';
	}
?>