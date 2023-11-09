<?php
if ( ! function_exists( 'events_type' ) ):
    function events_type() {
           register_post_type(
            'events',
               // WordPress CPT Options Start
               array(
                   'labels' => array(
                       'name' => __( 'Events' ),
                       'singular_name' => __( 'Events' )
                   ),
                   'has_archive' => true,
                   'public' => true,
                   'rewrite' => array(
                    'slug' => 'events'
                ),
                   'excerpt', 
                'comments',
                'taxonomies' => array(
                    'events_categories', 
                    'events_tag'
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
    
        register_taxonomy( 'events_categories', 
            array('events'), 
            array(
                'hierarchical' => true, 
                'label' => 'Categories', 
                'show_in_rest' =>  true,
                'singular_label' => 'Category', 
                'rewrite' => array( 
                    'slug' => 'events_categories', 
                    'with_front'=> false 
                )
            )
        );
    
        register_taxonomy('events_tag', 
            'events', 
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
            'events_categories', 
            'events' 
        );
    }

endif;

add_action( 'init', 'events_type' );
?>