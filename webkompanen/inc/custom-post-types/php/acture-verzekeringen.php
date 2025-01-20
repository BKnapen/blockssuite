<?php
	if ( ! function_exists( 'acture_verzekeringen_post_type' ) ):
		function acture_verzekeringen_post_type() {
   			register_post_type(
				'acture_verzekeringen',
       			// WordPress CPT Options Start
       			array(
           			'labels' => array(
               			'name' => __( 'Acture verzekeringen' ),
               			'singular_name' => __( 'Acture verzekeringen' )
           			),
           			'has_archive' => true,
           			'public' => true,
           			'rewrite' => array(
						'slug' => 'acture-verzekeringen'
					),
           			'excerpt', 
					'comments',
					'taxonomies' => array(
						'actureverzekeringen_tag',
						'actureverzekeringen_categories'
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
		
			register_taxonomy( 'actureverzekeringen_categories',
				array('acture_verzekeringen'), 
				array(
        			'hierarchical' => true, 
        			'label' => 'Categories', 
					'show_in_rest' =>  true,
        			'singular_label' => 'Category', 
        			'rewrite' => array( 
						'slug' => 'actureverzekeringen_categories', 
						'with_front'=> false 
					)
        		)
    		);
	
			register_taxonomy('actureverzekeringen_tag', 
				'acture_verzekeringen', 
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
				'actureverzekeringen_categories', 
				'acture_verzekeringen' 
			); // Better be
		}
	endif;
	if(get_option('showActureVerzekeringenCustomPost') == true):
		add_action( 'init', 'acture_verzekeringen_post_type' );
	endif;
?>