<?php
	if ( ! function_exists( 'webkompanen_editor_styles' ) ) :

		/**
	 	 * Enqueue editor styles.
	 	 *
	 	 * @since Webkompanen 1.0
	 	 *
	 	 * @return void
	 	 */
		function webkompanen_editor_styles() {

			// Add styles inline.
			wp_add_inline_style( 'wp-block-library', webkompanen_get_font_face_styles() );

		}

	endif;

	add_action( 'admin_init', 'webkompanen_editor_styles' );

	if ( ! function_exists( 'webkompanen_admin_styles' ) ) :

		/**
	 	 * Enqueue editor styles.
	 	 *
	 	 * @since Webkompanen 1.0
	 	 *
	 	 * @return void
	 	 */
		function webkompanen_admin_styles() {
			$url = untrailingslashit( get_template_directory_uri( __FILE__ ) );
			$path = untrailingslashit( get_template_directory( __FILE__ ) );
			
			
			wp_register_style(
				'fontawesome-style',
				$url. '/style.css',
				array(),
				filemtime($path. '/fontawesome.css')
			);

			// Enqueue theme stylesheet.
			wp_enqueue_style( 'fontawesome-style' );
		}

	endif;

	add_action( 'admin_enqueue_scripts', 'webkompanen_admin_styles' );
?>