<?php
	if ( ! function_exists( 'acture_subsidies_post_type' ) ):
		function acture_subsidies_post_type() {
   			register_post_type(
				'acture_subsidies',
       			// WordPress CPT Options Start
       			array(
           			'labels' => array(
               			'name' => __( 'Acture subsidies' ),
               			'singular_name' => __( 'Acture subsidies' )
           			),
           			'has_archive' => true,
           			'public' => true,
           			'rewrite' => array(
						'slug' => 'acture-subsidies'
					),
           			'excerpt', 
					'comments',
					'taxonomies' => array(
						'acturesubsidies_tag',
						'acturesubsidies_categories'
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
		
			register_taxonomy( 'acturesubsidies_categories',
				array('acture_subsidies'), 
				array(
        			'hierarchical' => true, 
        			'label' => 'Categories', 
					'show_in_rest' =>  true,
        			'singular_label' => 'Category', 
        			'rewrite' => array( 
						'slug' => 'acturesubsidies_categories', 
						'with_front'=> false 
					)
        		)
    		);
	
			register_taxonomy('acturesubsidies_tag', 
				'acture_subsidies', 
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
				'acturesubsidies_categories', 
				'acture_subsidies' 
			); // Better be
		}
	endif;
add_action( 'init', 'acture_subsidies_post_type' );
?>