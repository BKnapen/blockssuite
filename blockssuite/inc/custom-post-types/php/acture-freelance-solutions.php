<?php
	if ( ! function_exists('acture_freelancesolutions_post_type' ) ):
		function acture_freelancesolutions_post_type() {
   			register_post_type(
				'acture_freelance',
       			// WordPress CPT Options Start
       			array(
           			'labels' => array(
               			'name' => __( 'Acture freelance solutions' ),
               			'singular_name' => __( 'Acture freelance solutions' )
           			),
           			'has_archive' => true,
           			'public' => true,
           			'rewrite' => array(
						'slug' => 'acture-freelance-solutions'
					),
           			'excerpt', 
					'comments',
					'taxonomies' => array(
						'acturefreelance_categories', 
						'acturefreelance_tag'
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
		
			register_taxonomy( 'acturefreelance_categories', 
				array(
					'acture_freelance'
				), 
				array(
        			'hierarchical' => true, 
        			'label' => 'Categories', 
					'show_in_rest' =>  true,
        			'singular_label' => 'Category', 
        			'rewrite' => array( 
						'slug' => 'acturefreelance_categories', 
						'with_front'=> false 
					)
        		)
    		);
	
			register_taxonomy('acturefreelance_tag', 
				'acture_freelance', 
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
				'acturefreelance_categories', 
				'acture_freelance' 
			); // Better be
		}
	endif;
		
	add_action( 'init', 'acture_freelancesolutions_post_type' );
?>