<?php
// register custom meta tag field
function webkompanen_post_meta_fields_events() {
    register_meta( 
        'post', 
        'event_name', 
        array(
            'object_subtype' => 'events',
            'type' => 'string',
            'show_in_rest' => true,
            'single' => true
        )
    );
    register_meta( 
        'post', 
        'event_start_date', 
        array(
            'object_subtype' => 'events',
            'type' => 'string',
            'show_in_rest' => true,
            'single' => true
        )
    );
    register_meta( 
        'post', 
        'event_location_name', 
        array(
            'object_subtype' => 'events',
            'type' => 'string',
            'show_in_rest' => true,
            'single' => true
        )
    );
    register_meta( 
        'post', 
        'event_location_same_as', 
        array(
            'object_subtype' => 'events',
            'type' => 'string',
            'show_in_rest' => true,
            'single' => true
        )
    );
    register_meta( 
        'post', 
        'event_location_address', 
        array(
            'object_subtype' => 'events',
            'type' => 'string',
            'show_in_rest' => true,
            'single' => true
        )
    );
    register_meta( 
        'post', 
        'event_ticket_price', 
        array(
            'object_subtype' => 'events',
            'type' => 'string',
            'show_in_rest' => true,
            'single' => true
        )
    );
    register_meta( 
        'post', 
        'event_ticket_url', 
        array(
            'object_subtype' => 'events',
            'type' => 'string',
            'show_in_rest' => true,
            'single' => true
        )
    );
    register_meta( 
        'post', 
        'event_location_price_currency', 
        array(
            'object_subtype' => 'events',
            'type' => 'string',
            'show_in_rest' => true,
            'single' => true
        )
    );
    
    register_meta( 
        'post', 
        'event_performers', 
        array(
            'object_subtype' => 'events',
            'type' => 'array',
            'show_in_rest' => array(
                 'schema' => array(
                    'items' => array(
                        'type' => 'object',
                        'properties' => array(
                             'artistname' => array(
                                 'type' => 'string'
                             ),
                             'artistsite' => array(
                                 'type'   => 'string'
                             ),
                             'artistfacebook' => array(
                                 'type' => 'string'
                             ),
                             'artisttwitter' => array(
                                 'type' => 'string'
                             ),
                             'artistinstagram' => array(
                                 'type' => 'string'
                             ),
                             'artisttiktok' => array(
                                 'type' => 'string'
                             ),
                             'artistspotify' => array(
                                 'type' => 'string'
                             ),
                             'artistimusic' => array(
                                 'type' => 'string'
                             ),
                             'artistbeatport' => array(
                                 'type' => 'string'
                             ),
                             'artistsoundcloud' => array(
                                 'type' => 'string'
                             ),
                        ),
                     ),
                 ),
             ),
            'single' => true
        )
    );
}
add_action( 'init', 'webkompanen_post_meta_fields_events' );
?>