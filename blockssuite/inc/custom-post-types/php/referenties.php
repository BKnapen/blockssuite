<?php
if ( ! function_exists( 'referenties_type' ) ):
    function referenties_type() {
           register_post_type(
            'referenties',
               // WordPress CPT Options Start
               array(
                   'labels' => array(
                       'name' => __( 'Referenties' ),
                       'singular_name' => __( 'Referentie' )
                   ),
                   'has_archive' => true,
                   'public' => true,
                   'rewrite' => array(
                    'slug' => 'referenties'
                ),
                   'excerpt', 
                'comments',
                'taxonomies' => array(
                    'referenties_categories', 
                    'referenties_tag'
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
    
        register_taxonomy( 'referenties_categories', 
            array('referenties'), 
            array(
                'hierarchical' => true, 
                'label' => 'Categories', 
                'show_in_rest' =>  true,
                'singular_label' => 'Category', 
                'rewrite' => array( 
                    'slug' => 'referenties_categories', 
                    'with_front'=> false 
                )
            )
        );
    
        register_taxonomy('referenties_tag', 
            'referenties', 
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
            'referenties_categories', 
            'referenties' 
        );
    }

endif;

add_action( 'init', 'referenties_type' );
?>