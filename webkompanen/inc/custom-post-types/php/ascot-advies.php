<?php
	if ( ! function_exists( 'ascot_advies_post_type' ) ):
		function ascot_advies_post_type() {
   			register_post_type(
				'ascot_advies',
       			// WordPress CPT Options Start
       			array(
           			'labels' => array(
               			'name' => __( 'Ascot advies' ),
               			'singular_name' => __( 'Ascot advies' )
           			),
           			'has_archive' => true,
           			'public' => true,
           			'rewrite' => array(
						'slug' => 'ascot-advies'
					),
           			'excerpt', 
					'comments',
					'taxonomies' => array(
						'ascotadvies_tag',
						'ascotadvies_categories'
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
		
			register_taxonomy( 'ascotadvies_categories', 
				array('ascot_advies'), 
				array(
        			'hierarchical' => true, 
        			'label' => 'Categories', 
					'show_in_rest' =>  true,
        			'singular_label' => 'Category', 
        			'rewrite' => array( 
						'slug' => 'ascotadvies_categories', 
						'with_front'=> false 
					)
        		)
    		);
	
			register_taxonomy('ascotadvies_tag', 
				'ascot_advies', 
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
				'ascotadvies_categories', 
				'ascot_advies' 
			); // Better be
		}
	endif;
	if(get_option('showAscotAdviesCustomPost') == true):
		add_action( 'init', 'ascot_advies_post_type' );
	endif;
?>