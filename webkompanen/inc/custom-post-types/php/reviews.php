<?php
if ( ! function_exists( 'reviews_type' ) ):
    function reviews_type() {
           register_post_type(
            'reviews',
               // WordPress CPT Options Start
               array(
                   'labels' => array(
                       'name' => __( 'Reviews' ),
                       'singular_name' => __( 'Review' )
                   ),
                   'has_archive' => true,
                   'public' => true,
                   'rewrite' => array(
                    'slug' => 'reviews'
                ),
                   'excerpt', 
                'comments',
                'taxonomies' => array(
                    'reviews_categories', 
                    'reviews_tag'
                ),
                'show_in_rest' => true,
                'supports' => array( 
                    'title', 
                    'editor', 
                    'author', 
                    'thumbnail', 
                    'excerpt', 
                    'comments',
                    'custom-fields'
                )

            )
        );
    
        register_taxonomy( 'reviews_categories', 
            array('reviews'), 
            array(
                'hierarchical' => true, 
                'label' => 'Categories', 
                'show_in_rest' =>  true,
                'singular_label' => 'Category', 
                'rewrite' => array( 
                    'slug' => 'reviews_categories', 
                    'with_front'=> false 
                )
            )
        );
    
        register_taxonomy('reviews_tag', 
            'reviews', 
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
            'reviews_categories', 
            'reviews' 
        );
    }

endif;

if(get_option('showReviewsCustomPost') == true):
    add_action( 'init', 'reviews_type' );
endif;
?>