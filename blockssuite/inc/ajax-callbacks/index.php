<?php
	// Exit if accessed directly.
	defined( 'ABSPATH' ) || exit;

	$includes = array(
		'submit-forms'
	);

	foreach ( $includes as $include ) {
		include_once themedir . '/inc/ajax-callbacks/php/' . $include . '.php';
	}
?>