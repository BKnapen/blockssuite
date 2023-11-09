<?php
if ( ! function_exists( 'courses_type' ) ):
    function courses_type() {
           register_post_type(
            'courses',
               // WordPress CPT Options Start
               array(
                   'labels' => array(
                       'name' => __( 'Cursussen' ),
                       'singular_name' => __( 'Cursus' )
                   ),
                   'has_archive' => true,
                   'public' => true,
                   'rewrite' => array(
                    'slug' => 'courses'
                ),
                   'excerpt', 
                'comments',
                'taxonomies' => array(
                    'courses_categories', 
                    'courses_tag'
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
    
        register_taxonomy( 'courses_categories', 
            array('courses'), 
            array(
                'hierarchical' => true, 
                'label' => 'Categories', 
                'show_in_rest' =>  true,
                'singular_label' => 'Category', 
                'rewrite' => array( 
                    'slug' => 'courses_categories', 
                    'with_front'=> false 
                )
            )
        );
    
        register_taxonomy('courses_tag', 
            'courses', 
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
            'courses_categories', 
            'courses' 
        );
    }

endif;

add_action( 'init', 'courses_type' );
?>