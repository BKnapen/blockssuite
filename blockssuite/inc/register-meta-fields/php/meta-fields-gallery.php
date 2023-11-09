<?php
// register custom meta tag field
function webkompanen_post_meta_fields_gallery() {
    register_meta( 
        'post', 
        'gallerie_location', 
        array(
            'type' => 'string',
            'show_in_rest' => true,
            'single' => true
        )
    );
    register_meta( 
        'post', 
        'gallerie_edition', 
        array(
            'type' => 'string',
            'show_in_rest' => true,
            'single' => true
        )
    );
}
add_action( 'init', 'webkompanen_post_meta_fields_gallery' );
?>