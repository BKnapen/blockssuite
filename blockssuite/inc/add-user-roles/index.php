<?php
	// Exit if accessed directly.
	defined( 'ABSPATH' ) || exit;

	$includes = array(
		'acture-freelance-solutions-user',
		'acture-subsidies-user',
		'acture-user',
		'acture-verzekeringen-user',
		'ardosz-user',
		'ascot-advies',
		'keesz-user',
		'tulpenfonds-user',
		'verzuimweg-user'
	);

	foreach ( $includes as $include ) {
		include_once themedir . '/inc/add-user-roles/php/' . $include . '.php';
	}
?>