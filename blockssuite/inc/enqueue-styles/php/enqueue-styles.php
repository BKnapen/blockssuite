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
    		
			if ( 'post.php' === $pagenow && isset($_GET['post']) && 'keesz' === get_post_type( $_GET['post'] )  || isset($post->ID) && 'keesz' === get_post_type( $post->ID ) ):
				wp_register_style(
					'webkompanen-style',
					$url. '/keezs.css',
					array(),
					filemtime($path. '/keesz.css')
				);

				// Add styles inline.
				wp_add_inline_style( 'webkompanen-style', webkompanen_get_font_face_styles() );

				// Enqueue theme stylesheet.
				wp_enqueue_style( 'webkompanen-style' );
			elseif ( 'post.php' === $pagenow && isset($_GET['post']) && 'verzuimweg' === get_post_type( $_GET['post'] )  || isset($post->ID) && 'verzuimweg' === get_post_type( $post->ID ) ):
				wp_register_style(
					'webkompanen-style',
					$url. '/verzuimweg.css',
					array(),
					filemtime($path. '/verzuimweg.css')
				);

				// Add styles inline.
				wp_add_inline_style( 'webkompanen-style', webkompanen_get_font_face_styles() );

				// Enqueue theme stylesheet.
				wp_enqueue_style( 'webkompanen-style' );
			elseif ( 'post.php' === $pagenow && isset($_GET['post']) && 'tulpenfonds' === get_post_type( $_GET['post'] )  || isset($post->ID) && 'tulpenfonds' === get_post_type( $post->ID ) ):
				wp_register_style(
					'webkompanen-style',
					$url. '/tulpenfonds.css',
					array(),
					filemtime($path. '/tulpenfonds.css')
				);

				// Add styles inline.
				wp_add_inline_style( 'webkompanen-style', webkompanen_get_font_face_styles() );

				// Enqueue theme stylesheet.
				wp_enqueue_style( 'webkompanen-style' );
			elseif ( 'post.php' === $pagenow && isset($_GET['post']) && 'ardosz' === get_post_type( $_GET['post'] )  || isset($post->ID) && 'ardosz' === get_post_type( $post->ID ) ):
				wp_register_style(
					'webkompanen-style',
					$url. '/ardosz.css',
					array(),
					filemtime($path. '/ardosz.css')
				);

				// Add styles inline.
				wp_add_inline_style( 'webkompanen-style', webkompanen_get_font_face_styles() );

				// Enqueue theme stylesheet.
				wp_enqueue_style( 'webkompanen-style' );
			else:
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
    		endif;
		}

	endif;

	add_action( 'wp_enqueue_scripts', 'webkompanen_styles' );
?>