<?php
	if ( ! function_exists( 'webkompanen_admin_scripts' ) ) :

		/**
	 	 * Enqueue editor styles.
	 	 *
	 	 * @since Webkompanen 1.0
	 	 *
	 	 * @return void
	 	 */
		function webkompanen_admin_scripts() {

			// Add styles inline.
			//wp_add_inline_style( 'wp-block-library', webkompanen_get_font_face_styles() );

		}

	endif;

	add_action( 'admin_init', 'webkompanen_admin_scripts' );
?>