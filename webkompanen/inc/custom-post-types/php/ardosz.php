<?php
	if ( ! function_exists( 'ardosz_post_type' ) ):
		function ardosz_post_type() {
   			register_post_type(
				'ardosz',
       			// WordPress CPT Options Start
       			array(
           			'labels' => array(
               			'name' => __( 'ArdoSZ' ),
               			'singular_name' => __( 'ArdoSZ' )
           			),
           			'has_archive' => true,
           			'public' => true,
           			'rewrite' => array(
						'slug' => 'ardosz'
					),
           			'excerpt', 
					'comments',
					'taxonomies' => array(
						'ardosz_tag',
						'ardosz_categories'
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
		
			register_taxonomy( 'ardosz_categories', 
				array('ardosz'), 
				array(
        			'hierarchical' => true, 
        			'label' => 'Categories', 
					'show_in_rest' =>  true,
        			'singular_label' => 'Category', 
        			'rewrite' => array( 
						'slug' => 'ardosz_categories', 
						'with_front'=> false 
					)
        		)
    		);
	
			register_taxonomy('ardosz_tag', 
				'ardosz', 
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
				'ardosz_categories', 
				'ardosz' 
			); // Better be
		}
	endif;
	if(get_option('showArdoszCustomPost') == true):
		add_action( 'init', 'ardosz_post_type' );
	endif;
?>