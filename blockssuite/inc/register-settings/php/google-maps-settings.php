<?php
	function register_webkompanen_google_maps_settings() {
    	register_setting(
        	'general',
        	'googleMapsAPIKey',
        	array(
            	'type'              => 'string',
            	'show_in_rest'      => true,
            	'sanitize_callback' => 'sanitize_text_field',
        	)
    	);
	}

	add_action( 'admin_init',    'register_webkompanen_google_maps_settings' );
	add_action( 'rest_api_init', 'register_webkompanen_google_maps_settings' );
?>