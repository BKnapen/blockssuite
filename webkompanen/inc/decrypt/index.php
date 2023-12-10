<?php
	defined( 'ABSPATH' ) || exit;

	$includes = array(
		'decrypt'
	);

	foreach ( $includes as $include ) {
		include_once themedir . '/inc/decrypt/php/' . $include . '.php';
	}
?>