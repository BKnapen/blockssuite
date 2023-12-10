<?php
	// Exit if accessed directly.
	defined( 'ABSPATH' ) || exit;

	function admin_menu_settings() {
		global $admin_menu_settings;
 
		// add settings page
		$admin_menu_settings =
		add_menu_page(
    		__( 'page', 'trainingen' ),
        	__( 'Instellingen', 'trainingen' ),
        	'manage_options',
        	'settings-admin',
        	'settings_admin',
			'dashicons-admin-generic',
        	3
    	);
		
		//add_action('load-'.$admin_menu_settings.'', 'admin_menu_settings_screen_options');
	}

	add_action( 'admin_menu', 'admin_menu_settings', 1);

?>