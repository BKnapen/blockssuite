<?php
// register custom meta tag field
function webkompanen_post_meta_fields_agenda() {
	register_meta( 
        'post', 
        'agenda_focalpoint', 
        array(
            'type' => 'array',
            'show_in_rest' => array(
                 'schema' => array(
                    'items' => array(
                        'type' => 'object',
                        'properties' => array(
							'x' => array(
                                 'type' => 'number'
                             ),
                             'y' => array(
                                 'type' => 'number'
                             )
                        ),
                     ),
                 ),
             ),
            'single' => true
        )
    );
	register_meta( 
        'post', 
        'agenda_link', 
        array(
            'type' => 'array',
            'show_in_rest' => array(
                 'schema' => array(
                    'items' => array(
                        'type' => 'object',
                        'properties' => array(
							'id' => array(
                                 'type' => 'number'
                             ),
                             'kind' => array(
                                 'type' => 'string'
                             ),
                             'title' => array(
                                 'type'   => 'string'
                             ),
                             'type' => array(
                                 'type' => 'string'
                             ),
                             'url' => array(
                                 'type' => 'string'
                             )
                        ),
                     ),
                 ),
             ),
            'single' => true
        )
    );
	register_meta( 
        'post', 
        'agenda_image', 
        array(
            'type' => 'array',
            'show_in_rest' => array(
                 'schema' => array(
                    'items' => array(
                        'type' => 'object',
                        'properties' => array(
                             'id' => array(
                                 'type' => 'number'
                             ),
                             'url' => array(
                                 'type'   => 'string'
                             ),
                             'alt' => array(
                                 'type' => 'string'
                             ),
                             'height' => array(
                                 'type' => 'number'
                             ),
                             'width' => array(
                                 'type' => 'number'
                             ),
                        ),
                     ),
                 ),
             ),
            'single' => true
        )
    );
	//agenda_link_url
    register_meta( 
        'post', 
        'agenda_link_url', 
        array(
            'type' => 'string',
            'show_in_rest' => true,
            'single' => true
        )
    );
    register_meta( 
        'post', 
        'agenda_weekly_event', 
        array(
            'type' => 'boolean',
            'show_in_rest' => true,
            'single' => true
        )
    );
    register_meta( 
        'post', 
        'agenda_button_text', 
        array(
            'type' => 'string',
            'show_in_rest' => true,
            'single' => true
        )
    );
    register_meta( 
        'post', 
        'agenda_image_id', 
        array(
            'type' => 'number',
            'show_in_rest' => true,
            'single' => true
        )
    );
    register_meta( 
        'post', 
        'agenda_image_url', 
        array(
            'type' => 'string',
            'show_in_rest' => true,
            'single' => true
        )
    );
    register_meta( 
        'post', 
        'agenda_image_alt', 
        array(
            'type' => 'string',
            'show_in_rest' => true,
            'single' => true
        )
    );
    register_meta( 
        'post', 
        'agenda_image_height', 
        array(
            'type' => 'number',
            'show_in_rest' => true,
            'single' => true
        )
    );
    register_meta( 
        'post', 
        'agenda_image_width', 
        array(
            'type' => 'number',
            'show_in_rest' => true,
            'single' => true
        )
    );
    register_meta( 
        'post', 
        'agenda_name', 
        array(
            'type' => 'string',
            'show_in_rest' => true,
            'single' => true
        )
    );
    register_meta( 
        'post', 
        'agenda_start_date', 
        array(
            'type' => 'string',
            'show_in_rest' => true,
            'single' => true
        )
    );
    register_meta( 
        'post', 
        'agenda_end_date', 
        array(
            'type' => 'string',
            'show_in_rest' => true,
            'single' => true
        )
    );
    register_meta( 
        'post', 
        'agenda_location_name', 
        array(
            'type' => 'string',
            'show_in_rest' => true,
            'single' => true
        )
    );
    register_meta( 
        'post', 
        'agenda_location_same_as', 
        array(
            'type' => 'string',
            'show_in_rest' => true,
            'single' => true
        )
    );
    register_meta( 
        'post', 
        'agenda_location_address', 
        array(
            'type' => 'string',
            'show_in_rest' => true,
            'single' => true
        )
    );
    register_meta( 
        'post', 
        'agenda_ticket_price', 
        array(
            'type' => 'string',
            'show_in_rest' => true,
            'single' => true
        )
    );
    register_meta( 
        'post', 
        'agenda_ticket_url', 
        array(
            'type' => 'string',
            'show_in_rest' => true,
            'single' => true
        )
    );
    register_meta( 
        'post', 
        'agenda_location_price_currency', 
        array(
            'type' => 'string',
            'show_in_rest' => true,
            'single' => true
        )
    );
    
    register_meta( 
        'post', 
        'agenda_performers', 
        array(
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
add_action( 'init', 'webkompanen_post_meta_fields_agenda' );
?>