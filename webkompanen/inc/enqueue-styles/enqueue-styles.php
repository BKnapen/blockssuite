<?php
	if ( ! function_exists( 'webkompanen_styles' ) ) :

		/**
	 	 * Enqueue styles.
	 	 *
	 	 * @since Webkompanen 1.0
	 	 *
	 	 * @return void
	 	 */
		function webkompanen_styles() {
		
			$url = untrailingslashit( get_template_directory_uri( __FILE__ ) );
			$path = untrailingslashit( get_template_directory( __FILE__ ) );
			// Register theme stylesheet.
			$theme_version = wp_get_theme()->get( 'Version' );
		
			wp_register_style(
				'webkompanen-style',
				$url. '/style.css',
				array(),
				filemtime($path. '/style.css')
			);

			// Add styles inline.
			wp_add_inline_style( 'webkompanen-style', webkompanen_get_font_face_styles() );

			// Enqueue theme stylesheet.
			wp_enqueue_style( 'webkompanen-style' );
		
		
			wp_register_script(
				'bootstrap-script',
				$url. '/assets/js/bootstrap.js',
				array(),
				filemtime($path. '/assets/js/bootstrap.js'),
				true
			);
		
			wp_enqueue_script( 'bootstrap-script' );
		
			wp_localize_script(
				'bootstrap-script', 
				'bootstrap', 
				array(
					'ajax_url' => admin_url( 'admin-ajax.php' ),
					'assetsurl' => $url
				)
			);
		
			wp_enqueue_script( 'password-strength-meter' );
		
			wp_localize_script( 'password-strength-meter', 
				'pwsL10n', 
				array(
					'empty' => __( 'Strength indicator' ),
					'short' => __( 'Very weak' ),
					'bad' => __( 'Weak' ),
					'good' => _x( 'Medium', 'password strength' ),
					'strong' => __( 'Strong' ),
					'mismatch' => __( 'Mismatch' )
				)
			);
		
			wp_register_script(
				'custom-script',
				$url. '/assets/js/custom.js',
				array(),
				filemtime($path. '/assets/js/custom.js'),
				true
			);
		
			wp_enqueue_script( 'custom-script' );

		}

	endif;

	add_action( 'wp_enqueue_scripts', 'webkompanen_styles' );
?>