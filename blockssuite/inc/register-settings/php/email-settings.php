<?php
	function register_webkompanen_email_settings() {
    	register_setting(
        	'general',
        	'phpmailerHost',
        	array(
            	'type'              => 'string',
            	'show_in_rest'      => true,
            	'sanitize_callback' => 'sanitize_text_field',
        	)
    	);
		register_setting(
        	'general',
        	'phpmailerSMTPAuth',
        	array(
            	'type'              => 'boolean',
            	'show_in_rest'      => true,
            	'sanitize_callback' => 'sanitize_text_field',
        	)
    	);
		register_setting(
        	'general',
        	'phpmailerPort',
        	array(
            	'type'              => 'number',
            	'show_in_rest'      => true,
            	'sanitize_callback' => 'sanitize_text_field',
        	)
    	);
		register_setting(
        	'general',
        	'phpmailerUsername',
        	array(
            	'type'              => 'string',
            	'show_in_rest'      => true,
            	'sanitize_callback' => 'sanitize_text_field',
        	)
    	);
		register_setting(
        	'general',
        	'phpmailerPassword',
        	array(
            	'type'              => 'string',
            	'show_in_rest'      => true,
            	'sanitize_callback' => 'sanitize_text_field',
        	)
    	);
		register_setting(
        	'general',
        	'phpmailerFrom',
        	array(
            	'type'              => 'string',
            	'show_in_rest'      => true,
            	'sanitize_callback' => 'sanitize_text_field',
        	)
    	);
		register_setting(
        	'general',
        	'phpmailerFromName',
        	array(
            	'type'              => 'string',
            	'show_in_rest'      => true,
            	'sanitize_callback' => 'sanitize_text_field',
        	)
    	);
		register_setting(
        	'general',
        	'phpmailerIsHTML',
        	array(
            	'type'              => 'boolean',
            	'show_in_rest'      => true,
            	'sanitize_callback' => 'sanitize_text_field',
        	)
    	);
		register_setting(
        	'general',
        	'phpmailerSMTPSecure',
        	array(
            	'type'              => 'string',
            	'show_in_rest'      => true,
            	'sanitize_callback' => 'sanitize_text_field',
        	)
    	);
		register_setting(
        	'general',
        	'phpmailerSMTPAutoTLS',
        	array(
            	'type'              => 'boolean',
            	'show_in_rest'      => true,
            	'sanitize_callback' => 'sanitize_text_field',
        	)
    	);
		register_setting(
        	'general',
        	'phpmailerSender',
        	array(
            	'type'              => 'string',
            	'show_in_rest'      => true,
            	'sanitize_callback' => 'sanitize_text_field',
        	)
    	);
	}

	add_action( 'admin_init',    'register_webkompanen_email_settings' );
	add_action( 'rest_api_init', 'register_webkompanen_email_settings' );
?>