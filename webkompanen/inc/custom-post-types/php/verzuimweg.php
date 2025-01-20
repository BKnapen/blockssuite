<?php
	if ( ! function_exists( 'verzuimweg_post_type' ) ):
		function verzuimweg_post_type() {
   			register_post_type(
				'verzuimweg',
       			// WordPress CPT Options Start
       			array(
           			'labels' => array(
               			'name' => __( 'VerzuimWeg' ),
               			'singular_name' => __( 'VerzuimWeg' )
           			),
           			'has_archive' => true,
           			'public' => true,
           			'rewrite' => array(
						'slug' => 'verzuimweg'
					),
           			'excerpt', 
					'comments',
					'taxonomies' => array(
						'verzuimweg_tag',
						'verzuimweg_categories'
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
		
			register_taxonomy( 'verzuimweg_categories', 
				array('verzuimweg'), 
				array(
        			'hierarchical' => true, 
        			'label' => 'Categories', 
					'show_in_rest' =>  true,
        			'singular_label' => 'Category', 
        			'rewrite' => array( 
						'slug' => 'verzuimweg_categories', 
						'with_front'=> false 
					)
        		)
    		);
	
			register_taxonomy('verzuimweg_tag', 
				'verzuimweg', 
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
				'verzuimweg_categories', 
				'verzuimweg' 
			); // Better be
		}
	endif;
	if(get_option('showVerzuimwegCustomPost') == true):
		add_action( 'init', 'verzuimweg_post_type' );
	endif;
?>