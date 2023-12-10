<?php
	if ( ! function_exists( 'webkompanen_support' ) ) :

		/**
		 * Sets up theme defaults and registers support for various WordPress features.
		 *
	 	 * @since Webkompanen 1.0
	 	 *
	 	 * @return void
	 	 */
		function webkompanen_support() {
			$url = untrailingslashit( get_template_directory_uri( __FILE__ ) );
			// Add support for block styles.
			add_theme_support( 'wp-block-styles' );

			// Enqueue editor styles.
			add_editor_style( $url . '/editor.css' );
			//add_editor_style( $url . '/ardosz.css' );

		}

		add_action( 'after_setup_theme', 'webkompanen_support', 999 );

	endif;
?>