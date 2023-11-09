<?php
if ( ! function_exists( 'agenda_type' ) ):
    function agenda_type() {
           register_post_type(
            'agenda',
               // WordPress CPT Options Start
               array(
                   'labels' => array(
                       'name' => __( 'Agenda' ),
                       'singular_name' => __( 'Agenda' )
                   ),
                   'has_archive' => true,
                   'public' => true,
                   'rewrite' => array(
                    'slug' => 'agenda'
                ),
                   'excerpt', 
                'comments',
                'taxonomies' => array(
                    'agenda_categories', 
                    'agenda_tag'
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
    
        register_taxonomy( 'agenda_categories', 
            array('agenda'), 
            array(
                'hierarchical' => true, 
                'label' => 'Categories', 
                'show_in_rest' =>  true,
                'singular_label' => 'Category', 
                'rewrite' => array( 
                    'slug' => 'agenda_categories', 
                    'with_front'=> false 
                )
            )
        );
    
        register_taxonomy('agenda_tag', 
            'agenda', 
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
            'agenda_categories', 
            'agenda' 
        );
    }

endif;

if(get_option('showAgendaCustomPost') == true):
    add_action( 'init', 'agenda_type' );
endif;
?>