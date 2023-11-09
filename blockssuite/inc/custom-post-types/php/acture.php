<?php
	if ( ! function_exists( 'acture_post_type' ) ):
		function acture_post_type() {
   			register_post_type(
				'acture',
       			// WordPress CPT Options Start
       			array(
           			'labels' => array(
               			'name' => __( 'Acture' ),
               			'singular_name' => __( 'Acture' )
           			),
           			'has_archive' => true,
           			'public' => true,
           			'rewrite' => array(
						'slug' => 'acture'
					),
           			'excerpt', 
					'comments',
					'taxonomies' => array(
						'acture_categories', 
						'acture_tag'
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
		
			register_taxonomy( 'acture_categories', 
				array('acture'), 
				array(
        			'hierarchical' => true, 
        			'label' => 'Categories', 
					'show_in_rest' =>  true,
        			'singular_label' => 'Category', 
        			'rewrite' => array( 
						'slug' => 'acture_categories', 
						'with_front'=> false 
					)
        		)
    		);
		
			register_taxonomy('acture_tag', 
				'acture', 
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
				'acture_categories', 
				'acture' 
			);
		}

	endif;

	add_action( 'init', 'acture_post_type' );
?>