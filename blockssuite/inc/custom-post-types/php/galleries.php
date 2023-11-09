<?php
if ( ! function_exists( 'galleries_type' ) ):
    function galleries_type() {
           register_post_type(
            'galleries',
               // WordPress CPT Options Start
               array(
                   'labels' => array(
                       'name' => __( 'Galleries' ),
                       'singular_name' => __( 'Galleries' )
                   ),
                   'has_archive' => true,
                   'public' => true,
                   'rewrite' => array(
                    'slug' => 'galleries'
                ),
                   'excerpt', 
                'comments',
                'taxonomies' => array(
                    'galleries_categories', 
                    'galleries_tag'
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
    
        register_taxonomy( 'galleries_categories', 
            array('galleries'), 
            array(
                'hierarchical' => true, 
                'label' => 'Categories', 
                'show_in_rest' =>  true,
                'singular_label' => 'Category', 
                'rewrite' => array( 
                    'slug' => 'galleries_categories', 
                    'with_front'=> false 
                )
            )
        );
    
        register_taxonomy('galleries_tag', 
            'galleries', 
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
            'galleries_categories', 
            'galleries' 
        );
    }

endif;

add_action( 'init', 'galleries_type' );
?>