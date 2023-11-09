<?php
	if ( ! function_exists( 'cw_post_type' ) ) :
		function cw_post_type() {
   			register_post_type(
				'portfolio',
       			// WordPress CPT Options Start
       			array(
           			'labels' => array(
               			'name' => __( 'Portfolio' ),
               			'singular_name' => __( 'Portfolio' )
           			),
           			'has_archive' => true,
           			'public' => true,
           			'rewrite' => array(
						'slug' => 'portfolio'
					),
           			'excerpt', 
					'comments',
					'taxonomies' => array(
						'post_tag',
						'category'
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
		
			register_taxonomy( 'categories', 
				array('portfolio'), 
				array(
        			'hierarchical' => true, 
        			'label' => 'Categories', 
        			'singular_label' => 'Category', 
        			'rewrite' => array( 
						'slug' => 'categories', 
						'with_front'=> false 
				)
        	)
    	);

    	register_taxonomy_for_object_type( 
			'categories', 
			'portfolio' 
		); // Better be safe than sorry
	}
	endif;
	add_action( 'init', 'cw_post_type' );
?>