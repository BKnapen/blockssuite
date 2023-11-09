<?php
	function register_webkompanen_custom_post_settings() {
		register_setting(
        	'general',
        	'showAgendaCustomPost',
        	array(
            	'type'              => 'boolean',
            	'show_in_rest'      => true,
            	'sanitize_callback' => 'sanitize_text_field',
        	)
    	);
		register_setting(
        	'general',
        	'showCoursesCustomPost',
        	array(
            	'type'              => 'boolean',
            	'show_in_rest'      => true,
            	'sanitize_callback' => 'sanitize_text_field',
        	)
    	);
		register_setting(
        	'general',
        	'showEventsCustomPost',
        	array(
            	'type'              => 'boolean',
            	'show_in_rest'      => true,
            	'sanitize_callback' => 'sanitize_text_field',
        	)
    	);
		register_setting(
        	'general',
        	'showGalleriesCustomPost',
        	array(
            	'type'              => 'boolean',
            	'show_in_rest'      => true,
            	'sanitize_callback' => 'sanitize_text_field',
        	)
    	);
		register_setting(
        	'general',
        	'showPortfolioCustomPost',
        	array(
            	'type'              => 'boolean',
            	'show_in_rest'      => true,
            	'sanitize_callback' => 'sanitize_text_field',
        	)
    	);
		register_setting(
        	'general',
        	'showReferentiesCustomPost',
        	array(
            	'type'              => 'boolean',
            	'show_in_rest'      => true,
            	'sanitize_callback' => 'sanitize_text_field',
        	)
    	);
		register_setting(
        	'general',
        	'showReviewsCustomPost',
        	array(
            	'type'              => 'boolean',
            	'show_in_rest'      => true,
            	'sanitize_callback' => 'sanitize_text_field',
        	)
    	);
	}

	add_action( 'admin_init',    'register_webkompanen_custom_post_settings' );
	add_action( 'rest_api_init', 'register_webkompanen_custom_post_settings' );
?>