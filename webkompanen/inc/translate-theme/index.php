<?php
	// Exit if accessed directly.
	defined( 'ABSPATH' ) || exit;

	$includes = array(
		'translate-theme'
	);

	foreach ( $includes as $include ) {
		include_once themedir . '/inc/translate-theme/php/' . $include . '.php';
	}
?>