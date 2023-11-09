<?php
	if ( ! function_exists( 'keesz_post_type' ) ):
		function keesz_post_type() {
   			register_post_type(
				'keesz',
       			// WordPress CPT Options Start
       			array(
           			'labels' => array(
               			'name' => __( 'Keesz' ),
               			'singular_name' => __( 'Keesz' )
           			),
           			'has_archive' => true,
           			'public' => true,
           			'rewrite' => array(
						'slug' => 'keesz'
					),
           			'excerpt', 
					'comments',
					'taxonomies' => array(
						'keesz_tag',
						'keesz_categories'
					),
					'show_in_rest' => true,
					'supports' => array( 
						'title', 
						'editor', 
						'author', 
						'thumbnail', 
						'excerpt', 
						'comments' 
					)

				)
			);
		
			register_taxonomy( 'keesz_categories', 
				array('keesz'), 
				array(
        			'hierarchical' => true, 
        			'label' => 'Categories', 
					'show_in_rest' =>  true,
        			'singular_label' => 'Category', 
        			'rewrite' => array( 
						'slug' => 'keesz_categories', 
						'with_front'=> false 
					)
        		)
    		);
	
			register_taxonomy('keesz_tag', 
				'keesz', 
				array(
    				'hierarchical' => false, 
					'show_in_rest' =>  true,
    				'label' => "Tags", 
    				'singular_name' => "tag", 
    				'rewrite' => true, 
    				'query_var' => true
    			)
			);

    		register_taxonomy_for_object_type( 
				'keesz_categories', 
				'keesz' 
			); // Better be
		}
	endif;
	add_action( 'init', 'keesz_post_type' );
?>