<?php
	// Exit if accessed directly.
	defined( 'ABSPATH' ) || exit;

	$includes = array(
		'add-blockcategories'
	);

	foreach ( $includes as $include ) {
		include_once themedir . '/inc/block-categories/php/' . $include . '.php';
	}
?>