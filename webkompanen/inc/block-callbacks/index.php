<?php
	// Exit if accessed directly.
	defined( 'ABSPATH' ) || exit;

	$includes = array(
		'courses',
		'courses-overview',
		'agenda-overview',
		'reviews',
		'referenties',
		'login-modal',
		'portfolio',
		'reset-password-modal',
		'reset-password-request-modal',
		'woocommerce-add-to-cart-button'
	);

	foreach ( $includes as $include ) {
		include_once themedir . '/inc/block-callbacks/php/' . $include . '.php';
	}
?>