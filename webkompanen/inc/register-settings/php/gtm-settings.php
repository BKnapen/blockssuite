<?php
	function register_webkompanen_gtm_settings() {
    	register_setting(
        	'general',
        	'googleGTMId',
        	array(
            	'type'              => 'string',
            	'show_in_rest'      => true,
            	'sanitize_callback' => 'sanitize_text_field',
        	)
    	);
	}

	add_action( 'admin_init',    'register_webkompanen_gtm_settings' );
	add_action( 'rest_api_init', 'register_webkompanen_gtm_settings' );
?>