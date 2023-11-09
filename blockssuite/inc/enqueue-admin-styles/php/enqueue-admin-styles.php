<?php
	// Exit if accessed directly.
	defined( 'ABSPATH' ) || exit;

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
			
			if(isset($_GET['page']) && $_GET['page'] == 'settings-admin'):
    			wp_enqueue_style( 'wp-edit-blocks' );//wp-block-library

				//add_action( 'admin_enqueue_scripts', 'enqueue_admin_assets' );
			endif;
			
			wp_register_style(
				'backend-style',
				$url. '/assets/css/backend.css',
				array(),
				filemtime($path. '/assets/css/backend.css')
			);

			// Enqueue theme stylesheet.
			wp_enqueue_style( 'backend-style' );
			
			if(isset($_GET['page']) && $_GET['page'] == 'trainingen-admin'):
			
				wp_admin_css( 'dashboard' );
			
    			wp_register_style(
    				'toastui-chart',
        			$url.'/assets/css/toastui-chart.min.css',
        			'',
        			filemtime($path.'/assets/css/toastui-chart.min.css'),
        			'all'
				);
	
				wp_enqueue_style('toastui-chart');
			endif;
		}

	endif;

	add_action( 'admin_enqueue_scripts', 'webkompanen_admin_styles' );
?>