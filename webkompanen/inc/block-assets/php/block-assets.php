<?php
	if ( ! function_exists( 'webkompanen_blocks_assets' ) ) :
		function webkompanen_blocks_assets(){
			$url = untrailingslashit( get_template_directory_uri( __FILE__ ) );
			$path = untrailingslashit( get_template_directory( __FILE__ ) );
			//wp-blocks', 'wp-editor', 'wp-components', 'wp-i18n', 'wp-element
			
			global $pagenow;
			global $post;
			
			if ( 'post.php' === $pagenow && isset($_GET['post']) && 'keesz' === get_post_type( $_GET['post'] ) || isset($post->ID) && 'keesz' === get_post_type( $post->ID ) ):
				wp_enqueue_style(
        			'webkompanen-blocks-style-css', // Handle.
        			$url . '/keesz.css',
					'front-end',
					filemtime($path. '/keesz.css')
    			);
			
			elseif ( 'post.php' === $pagenow && isset($_GET['post']) && 'verzuimweg' === get_post_type( $_GET['post'] ) || isset($post->ID) && 'verzuimweg' === get_post_type( $post->ID ) ):
				wp_enqueue_style(
        			'webkompanen-blocks-style-css', // Handle.
        			$url . '/verzuimweg.css',
					'front-end',
					filemtime($path. '/verzuimweg.css')
    			);
			elseif ( 'post.php' === $pagenow && isset($_GET['post']) && 'tulpenfonds' === get_post_type( $_GET['post'] ) || isset($post->ID) && 'tulpenfonds' === get_post_type( $post->ID ) ):
				wp_enqueue_style(
        			'webkompanen-blocks-style-css', // Handle.
        			$url . '/tulpenfonds.css',
					'front-end',
					filemtime($path. '/tulpenfonds.css')
    			);
			elseif ( 'post.php' === $pagenow && isset($_GET['post']) && 'ardosz' === get_post_type( $_GET['post'] ) || isset($post->ID) && 'ardosz' === get_post_type( $post->ID ) ):
				wp_enqueue_style(
        			'webkompanen-blocks-style-css', // Handle.
        			$url . '/ardosz.css',
					'front-end',
					filemtime($path. '/ardosz.css')
    			);
			else:
				wp_enqueue_style(
        			'webkompanen-blocks-style-css', // Handle.
        			$url . '/assets/css/editor.css',
					'front-end',
					filemtime($path. '/assets/css/editor.css')
    			);
				wp_enqueue_style(
        			'webkompanen-blocks-style-css', // Handle.
        			$url . '/style.css',
					'front-end',
					filemtime($path. '/style.css')
    			);
    		endif;
		}
	endif;

	// Hook: Frontend assets.
	add_action( 'enqueue_block_assets', 'webkompanen_blocks_assets' );
?>