<?php
	if ( ! function_exists( 'webkompanen_add_block_category' ) ) :
		function webkompanen_add_block_category( $block_categories, $block_editor_context ) {
	
    		return array_merge(
        		$block_categories,
        		array(
            		array(
						'slug'  => 'webkompanen-blocks/navigation',
						'title' => __( 'Navigatie', 'text-domain' ),
                		'icon'  => null,
            		),
            		array(
						'slug'  => 'webkompanen-blocks/media',
						'title' => __( 'Media', 'text-domain' ),
                		'icon'  => null,
            		),
            		array(
						'slug'  => 'webkompanen-blocks/forms',
						'title' => __( 'Forms', 'text-domain' ),
                		'icon'  => null,
            		),
            		array(
						'slug'  => 'webkompanen-blocks/carousel',
						'title' => __( 'Carousel', 'text-domain' ),
                		'icon'  => null,
            		),
            		array(
						'slug'  => 'webkompanen-blocks/text',
						'title' => __( 'Text', 'text-domain' ),
                		'icon'  => null,
            		),
            		array(
						'slug'  => 'webkompanen-blocks/layout',
						'title' => __( 'Layout', 'text-domain' ),
                		'icon'  => null,
            		),
            		array(
						'slug'  => 'webkompanen-blocks/components',
						'title' => __( 'Components', 'text-domain' ),
                		'icon'  => null,
            		),
            		array(
						'slug'  => 'webkompanen/components',
						'title' => __( 'Components', 'text-domain' ),
                		'icon'  => null,
            		),
            		array(
						'slug'  => 'webkompanen-blocks/content',
						'title' => __( 'Content', 'text-domain' ),
                		'icon'  => null,
            		),
            		array(
						'slug'  => 'webkompanen-blocks/embed',
						'title' => __( 'Embed', 'text-domain' ),
                		'icon'  => null,
            		),
            		array(
						'slug'  => 'webkompanen-blocks/querys',
						'title' => __( 'Query\'s', 'text-domain' ),
                		'icon'  => null,
            		),
            		array(
						'slug'  => 'webkompanen-blocks/security',
						'title' => __( 'security', 'text-domain' ),
                		'icon'  => null,
            		),
            		array(
						'slug'  => 'webkompanen-blocks/user',
						'title' => __( 'gebruiker', 'text-domain' ),
                		'icon'  => null,
            		),
            		array(
						'slug'  => 'webkompanen-blocks',
						'title' => __( 'webkompanen blocks', 'text-domain' ),
                		'icon'  => null,
            		),
            		array(
						'slug'  => 'webkompanen-blocks',
						'title' => __( 'forms', 'text-domain' ),
                		'icon'  => null,
            		),
        		)
    		);
		}
	endif;

	add_filter( 'block_categories_all', 'webkompanen_add_block_category', 10, 2 );
?>