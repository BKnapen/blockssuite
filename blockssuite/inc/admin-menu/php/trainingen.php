<?php
	// Exit if accessed directly.
	defined( 'ABSPATH' ) || exit;

	function admin_menu_trainingen() {
		global $admin_menu_trainingen;
 
		// add settings page
		$admin_menu_trainingen =
		add_menu_page(
    		__( 'page', 'trainingen' ),
        	__( 'Trainingen', 'trainingen' ),
        	'manage_options',
        	'trainingen-admin',
        	'trainingen_admin',
			'dashicons-welcome-learn-more',
        	3
    	);
		
		add_action('load-'.$admin_menu_trainingen.'', 'admin_menu_trainingen_screen_options');
	}

	add_action( 'admin_menu', 'admin_menu_trainingen', 1);

	function admin_menu_trainingen_screen_options() {
 
		global $admin_menu_trainingen;
 
		$screen = get_current_screen();
 
		// get out of here if we are not on our settings page
		if(!is_object($screen) || $screen->id != $admin_menu_trainingen):
			return;
		endif;
 
		$args = array(
			'label' => __('Resultaten per pagina', 'trainingen'),
			'default' => 25,
			'option' => 'trainingen_per_page'
		);
		
		add_screen_option( 'per_page', $args );
	}
	function set_admin_menu_trainingen_screen_options($status, $option, $value) {
		if ( 'trainingen_per_page' == $option ):
			return $value;
		endif;
	}

	add_filter('set-screen-option', 'set_admin_menu_trainingen_screen_options', 10, 3)
?>