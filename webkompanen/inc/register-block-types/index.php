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
		'page-list',
		'reset-password-form',
		'reset-password'
	);

	foreach ( $includes as $include ) {
		include_once themedir . '/inc/register-block-types/php/' . $include . '.php';
	}
?>