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
			$url = untrailingslashit( get_template_directory_uri( __FILE__ ) );
			$path = untrailingslashit( get_template_directory( __FILE__ ) );
			
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

			// Add styles inline.
			//wp_add_inline_style( 'wp-block-library', webkompanen_get_font_face_styles() );
			
			if(isset($_GET['page']) && $_GET['page'] == 'settings-admin' || 'post.php' === $pagenow && isset($_GET['page']) && get_post_type( $_GET['post'] ) === 'vacature'):
				wp_register_script(
					'webkompanen-blocks-js', // Handle.
					$url . '/assets/build/index.js',
					array( 'wp-api', 'wp-blocks', 'wp-editor', 'wp-components', 'wp-i18n', 'wp-element', 'wp-plugins', 'wp-edit-post', 'wp-edit-site' ),
					filemtime($path. '/assets/build/index.js'), 
					false 
	 			);
	
				wp_enqueue_script( 'webkompanen-blocks-js' );
			
				wp_localize_script(
					'webkompanen-blocks-js', 
					'webkompanenblocks', 
					array(
						'ajax_url' => admin_url( 'admin-ajax.php' ),
						'assetsurl' => $url
					)
				);
			endif;
			
			if(isset($_GET['page']) && $_GET['page'] == 'trainingen-admin'):
				
				wp_enqueue_script( 'dashboard' );
			
    			wp_register_script(
    				'toastui-chart',
        			$url.'/assets/js/toastui/toastui-chart.min.js',
        			'',
        			filemtime($path.'/assets/js/toastui/toastui-chart.min.js'),
        			true
				);
	
				wp_enqueue_script('toastui-chart');
	
				wp_localize_script(
    				'toastui-chart',
    				'toastui_chart',
    				array(
        				'ajax_url' => admin_url( 'admin-ajax.php' ),
        				'nonce'    => wp_create_nonce( 'prize-distribution' ),
    				)
				);
			endif;
			
			wp_register_script(
				'google-maps-head-js',
				'https://maps.googleapis.com/maps/api/js?key='.get_option( 'googleMapsAPIKey' ).'&libraries=places&callback=initMap', // Handle.
				array(),
				'', 
				false 
	 		);
		
			wp_enqueue_script( 'google-maps-head-js' );
			
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
			
			
			wp_localize_script(
				'custom-script', 
				'custom', 
				array(
					'user_firstname' => $user_firstname,
					'user_lastname' => $user_lastname,
					'nonce' => wp_create_nonce('sharer_rest'),
					'user_id' => $user_id,
					'post_id' => $post_id
				)
			);

		}

	endif;
	add_action( 'admin_enqueue_scripts', 'webkompanen_admin_scripts' );
	//add_action( 'admin_init', 'webkompanen_admin_scripts' );
?>