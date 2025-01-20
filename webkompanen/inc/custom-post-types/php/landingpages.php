<?php
if ( ! function_exists( 'landingpage_type' ) ):
    function landingpage_type() {
           register_post_type(
            'landingpage',
               // WordPress CPT Options Start
               array(
                   'labels' => array(
                       'name' => __( 'Landingpage' ),
                       'singular_name' => __( 'Landingpage' )
                   ),
                   'has_archive' => true,
                   'public' => true,
                   'rewrite' => array(
                    'slug' => ''
                ),
                   'excerpt', 
                'comments',
                'taxonomies' => array(
                    'landingpage_categories', 
                    'landingpage_tag'
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
    
        register_taxonomy( 'landingpage_categories', 
            array('landingpage'), 
            array(
                'hierarchical' => true, 
                'label' => 'Categories', 
                'show_in_rest' =>  true,
                'singular_label' => 'Category', 
                'rewrite' => array( 
                    'slug' => 'landingpage_categories', 
                    'with_front'=> false 
                )
            )
        );
    
        register_taxonomy('landingpage_tag', 
            'landingpage', 
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
            'landingpage_categories', 
            'landingpage' 
        );
    }

endif;

if(get_option('showLandingpagesCustomPost') == true):
    add_action( 'init', 'landingpage_type' );
endif;
?>