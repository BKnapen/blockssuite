<?php
	if ( ! function_exists( 'webkompanen_blocks_editor_assets' ) ) :
		function webkompanen_blocks_editor_assets(){
			$url = untrailingslashit( get_template_directory_uri( __FILE__ ) );
			$path = untrailingslashit( get_template_directory( __FILE__ ) );
    		// Scripts.
			wp_register_script(
				'webkompanen-blocks-js', // Handle.
				$url . '/assets/build/index.js',
				array( 'wp-blocks', 'wp-editor', 'wp-components', 'wp-i18n', 'wp-element', 'wp-plugins', 'wp-edit-post', 'wp-edit-site' ),
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
	
	
			global $pagenow;
			
			if ( 'post.php' === $pagenow && isset($_GET['post']) && 'keesz' === get_post_type( $_GET['post'] ) ):
				wp_enqueue_style(
        			'webkompanen-style-css', // Handle.
        			$url . '/keesz.css',
					array( 'wp-edit-blocks' ),
					filemtime($path. '/keesz.css')
    			);
			elseif ( 'post.php' === $pagenow && isset($_GET['post']) && 'verzuimweg' === get_post_type( $_GET['post'] ) ):
				wp_enqueue_style(
        			'webkompanen-style-css', // Handle.
        			$url . '/verzuimweg.css',
					array( 'wp-edit-blocks' ),
					filemtime($path. '/verzuimweg.css')
    			);
			elseif ( 'post.php' === $pagenow && isset($_GET['post']) && 'tulpenfonds' === get_post_type( $_GET['post'] ) ):
				wp_enqueue_style(
        			'webkompanen-style-css', // Handle.
        			$url . '/tulpenfonds.css',
					array( 'wp-edit-blocks' ),
					filemtime($path. '/tulpenfonds.css')
    			);
			elseif ( 'post.php' === $pagenow && isset($_GET['post']) && 'ardosz' === get_post_type( $_GET['post'] ) ):
				wp_enqueue_style(
        			'webkompanen-style-css', // Handle.
        			$url . '/ardosz-editor.css',
					array( 'wp-edit-blocks' ),
					filemtime($path. '/ardosz-editor.css')
    			);
			else:
				wp_enqueue_style(
        			'webkompanen-style-css', // Handle.
        			$url . '/assets/css/editor.css',
					array( 'wp-edit-blocks' ),
					filemtime($path. '/assets/css/editor.css')
    			);
    		endif;
			
			
				
			wp_enqueue_style(
        		'webkompanen-index-css', // Handle.
        		$url . '/assets/build/index.css',
				array( 'wp-edit-blocks' ),
				filemtime($path. '/assets/build/index.css')
    		);
	
    		// Styles.
    		/*wp_enqueue_style(
        		'my-custom-block-editor-css', // Handle.
        		$url . '/build/editor.css',
        		array( 'wp-edit-blocks' )
    		);*/
		} // End function my_custom_block_editor_assets().
	endif;

	// Hook: Editor assets.
	add_action( 'enqueue_block_editor_assets', 'webkompanen_blocks_editor_assets' );
?>