<?php
    add_action('after_setup_theme','webkompanen_translate_theme');

    function webkompanen_translate_theme() {
        load_theme_textdomain( 
            'webkompanen', 
            themedir . '/languages' 
        );

        $locale = get_locale();
        $locale_file = themedir . '/languages/' .$locale. '.php';

        if ( is_readable( $locale_file ) ): 
            require_once( $locale_file );
        endif;
    }
?>