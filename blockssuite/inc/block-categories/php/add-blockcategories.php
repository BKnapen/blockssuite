<?php
	if ( ! function_exists( 'webkompanen_add_block_category' ) ) :
		function webkompanen_add_block_category( $block_categories, $block_editor_context ) {
	
    		return array_merge(
        		$block_categories,
        		array(
            		array(
						'slug'  => 'webkompanen/navigation',
						'title' => __( 'Navigatie', 'text-domain' ),
                		'icon'  => null,
            		),
            		array(
						'slug'  => 'webkompanen/carousel',
						'title' => __( 'Carousel', 'text-domain' ),
                		'icon'  => null,
            		),
            		array(
						'slug'  => 'webkompanen/text',
						'title' => __( 'Text', 'text-domain' ),
                		'icon'  => null,
            		),
            		array(
						'slug'  => 'webkompanen/layout',
						'title' => __( 'Layout', 'text-domain' ),
                		'icon'  => null,
            		),
            		array(
						'slug'  => 'webkompanen/components',
						'title' => __( 'Components', 'text-domain' ),
                		'icon'  => null,
            		),
            		array(
						'slug'  => 'webkompanen/content',
						'title' => __( 'Content', 'text-domain' ),
                		'icon'  => null,
            		),
            		array(
						'slug'  => 'webkompanen/embed',
						'title' => __( 'Embed', 'text-domain' ),
                		'icon'  => null,
            		),
            		array(
						'slug'  => 'webkompanen/querys',
						'title' => __( 'Query\'s', 'text-domain' ),
                		'icon'  => null,
            		),
            		array(
						'slug'  => 'webkompanen/security',
						'title' => __( 'security', 'text-domain' ),
                		'icon'  => null,
            		),
            		array(
						'slug'  => 'webkompanen/user',
						'title' => __( 'gebruiker', 'text-domain' ),
                		'icon'  => null,
            		),
            		array(
						'slug'  => 'webkompanen',
						'title' => __( 'webkompanen blocks', 'text-domain' ),
                		'icon'  => null,
            		),
            		array(
						'slug'  => 'webkompanen',
						'title' => __( 'forms', 'text-domain' ),
                		'icon'  => null,
            		),
        		)
    		);
		}
	endif;

	add_filter( 'block_categories_all', 'webkompanen_add_block_category', 10, 2 );
?>