<?php
	if ( ! function_exists( 'tulpenfonds_post_type' ) ):
		function tulpenfonds_post_type() {
   			register_post_type(
				'tulpenfonds',
       			// WordPress CPT Options Start
       			array(
           			'labels' => array(
               			'name' => __( 'Tulpenfonds' ),
               			'singular_name' => __( 'Tulpenfonds' )
           			),
           			'has_archive' => true,
           			'public' => true,
           			'rewrite' => array(
						'slug' => 'tulpenfonds'
					),
           			'excerpt', 
					'comments',
					'taxonomies' => array(
						'tulpenfonds_tag',
						'tulpenfonds_categories'
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
		
			register_taxonomy( 'tulpenfonds_categories', 
				array('tulpenfonds'), 
				array(
        			'hierarchical' => true, 
        			'label' => 'Categories', 
					'show_in_rest' =>  true,
        			'singular_label' => 'Category', 
        			'rewrite' => array( 
						'slug' => 'tulpenfonds_categories', 
						'with_front'=> false 
					)
        		)
    		);
	
			register_taxonomy('tulpenfonds_tag', 
				'tulpenfonds', 
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
				'tulpenfonds_categories', 
				'tulpenfonds' 
			); // Better be
		}
	endif;
	add_action( 'init', 'tulpenfonds_post_type' );
?>