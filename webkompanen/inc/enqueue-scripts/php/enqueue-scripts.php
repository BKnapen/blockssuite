<?php
	if ( ! function_exists( 'webkompanen_scripts' ) ) :

		/**
	 	 * Enqueue styles.
	 	 *
	 	 * @since Webkompanen 1.0
	 	 *
	 	 * @return void
	 	 */
		function webkompanen_scripts() {
		
			$url = untrailingslashit( get_template_directory_uri( __FILE__ ) );
			$path = untrailingslashit( get_template_directory( __FILE__ ) );
			// Register theme stylesheet.
			$theme_version = wp_get_theme()->get( 'Version' );
			$current_user = wp_get_current_user();
			
			if(!empty($current_user)):
				$user_login = $current_user->user_login;
				$user_email = $current_user->user_email;
				$user_firstname = $current_user->user_firstname;
				$user_lastname = $current_user->user_lastname;
				$display_name = $current_user->display_name;
				$user_id = $current_user->ID;
			else:
				$user_login = '';
				$user_email = '';
				$user_firstname = '';
				$user_lastname = '';
				$display_name = '';
				$user_id = '';
			endif;
    		
			global $pagenow;
			global $post;
			
			if(isset($post->ID)):
				$post_id = $post->ID;
			else:
				$post_id = '';
			endif;
		
			wp_register_script(
				'bootstrap-script',
				$url. '/assets/js/bootstrap.bundle.js',
				array(),
				filemtime($path. '/assets/js/bootstrap.bundle.js'),
				true
			);
		
			wp_enqueue_script( 'bootstrap-script' );
		
			wp_localize_script(
				'bootstrap-script', 
				'bootstrap', 
				array(
					'ajax_url' => admin_url( 'admin-ajax.php' ),
					'assetsurl' => $url,
					'user_firstname' => $user_firstname,
					'user_lastname' => $user_lastname,
					'user_id' => $user_id,
					'post_id' => $post_id
				)
			);
			
			wp_register_script(
				'custom-aos',
				$url. '/assets/js/aos.js',
				array(),
				filemtime($path. '/assets/js/aos.js'),
				true
			);
		
			wp_enqueue_script( 'custom-aos' );
		
			wp_register_script(
				'custom-script',
				$url. '/assets/js/custom.js',
				array(),
				filemtime($path. '/assets/js/custom.js'),
				true
			);
		
			wp_enqueue_script( 'custom-script' );
			
			wp_register_script(
				'gtm-script',
				$url. '/assets/js/gtm.js',
				array(),
				filemtime($path. '/assets/js/gtm.js'),
				false
			);
		
			//wp_enqueue_script( 'gtm-script' );
			
			wp_localize_script(
				'gtm-script', 
				'gtm', 
				array(
					'id' => get_option( 'googleGTMId' )
				)
			);
			
			wp_localize_script(
				'custom-script', 
				'custom', 
				array(
					'ajax_url' => admin_url( 'admin-ajax.php' ),
					'user_firstname' => $user_firstname,
					'user_lastname' => $user_lastname,
					'nonce' => wp_create_nonce('sharer_rest'),
					'user_id' => $user_id,
					'post_id' => $post_id
				)
			);
		
			wp_enqueue_script( 'password-strength-meter' );
		
			wp_localize_script( 
				'password-strength-meter', 
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
				'google-maps-js',
				'https://maps.googleapis.com/maps/api/js?key='.get_option( 'googleMapsAPIKey' ).'&libraries=places&callback=initMap', // Handle.
				array(),
				'', 
				true 
	 		);
		
			wp_enqueue_script( 'google-maps-js' );

		}

	endif;

	add_action( 'wp_enqueue_scripts', 'webkompanen_scripts' );
?>