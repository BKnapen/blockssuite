<?php
// register custom meta tag field
/*
            course_courseWorkload,
            
*/
function webkompanen_post_meta_fields_courses() {
    register_meta( 
        'post', 
        'course_price_per_lesson', 
        array(
            'type' => 'string',
            'show_in_rest' => true,
            'single' => true
        )
    );
    register_meta( 
        'post', 
        'course_first_lesson_free', 
        array(
            'type' => 'boolean',
            'show_in_rest' => true,
            'single' => true
        )
    );
    register_meta( 
        'post', 
        'hide_course_duration', 
        array(
            'type' => 'boolean',
            'show_in_rest' => true,
            'single' => true
        )
    );
    register_meta( 
        'post', 
        'course_show_as_weekly', 
        array(
            'type' => 'boolean',
            'show_in_rest' => true,
            'single' => true
        )
    );
    register_meta( 
        'post', 
        'course_show_as_monthly', 
        array(
            'type' => 'boolean',
            'show_in_rest' => true,
            'single' => true
        )
    );
    register_meta( 
        'post', 
        'course_name', 
        array(
            'type' => 'string',
            'show_in_rest' => true,
            'single' => true
        )
    );
    register_meta( 
        'post', 
        'course_description', 
        array(
            'type' => 'string',
            'show_in_rest' => true,
            'single' => true
        )
    );
    register_meta( 
        'post', 
        'course_door_time', 
        array(
            'type' => 'string',
            'show_in_rest' => true,
            'single' => true
        )
    );
    register_meta( 
        'post', 
        'course_course_mode', 
        array(
            'type' => 'string',
            'show_in_rest' => true,
            'single' => true
        )
    );
    register_meta( 
        'post', 
        'course_course_workload', 
        array(
            'type' => 'string',
            'show_in_rest' => true,
            'single' => true
        )
    );
    register_meta( 
        'post', 
        'course_duration', 
        array(
            'type' => 'string',
            'show_in_rest' => true,
            'single' => true
        )
    );
    register_meta( 
        'post', 
        'course_les_method', 
        array(
            'type' => 'string',
            'show_in_rest' => true,
            'single' => true
        )
    );
    register_meta( 
        'post', 
        'course_minimum_attendee_capacity', 
        array(
            'type' => 'string',
            'show_in_rest' => true,
            'single' => true
        )
    );
    register_meta( 
        'post', 
        'course_maximum_attendee_capacity', 
        array(
            'type' => 'string',
            'show_in_rest' => true,
            'single' => true
        )
    );
    register_meta( 
        'post', 
        'course_start_date', 
        array(
            'type' => 'string',
            'show_in_rest' => true,
            'single' => true
        )
    );
    register_meta( 
        'post', 
        'course_end_date', 
        array(
            'type' => 'string',
            'show_in_rest' => true,
            'single' => true
        )
    );
    register_meta( 
        'post', 
        'course_start_time', 
        array(
            'type' => 'string',
            'show_in_rest' => true,
            'single' => true
        )
    );
    register_meta( 
        'post', 
        'course_end_time', 
        array(
            'type' => 'string',
            'show_in_rest' => true,
            'single' => true
        )
    );
    register_meta( 
        'post', 
        'course_location_name', 
        array(
            'type' => 'string',
            'show_in_rest' => true,
            'single' => true
        )
    );
    register_meta( 
        'post', 
        'course_location_same_as', 
        array(
            'type' => 'string',
            'show_in_rest' => true,
            'single' => true
        )
    );
    register_meta( 
        'post', 
        'course_location_address', 
        array(
            'type' => 'string',
            'show_in_rest' => true,
            'single' => true
        )
    );
    register_meta( 
        'post', 
        'course_days', 
        array(
            'type' => 'array',
			'show_in_rest' => array(
        		'schema' => array(
            		'type'  => 'array',
            		'items' => array(
                		'type' => 'boolean',
            		),
        		),
    		),
            'single' => true
        )
    );
    register_meta( 
        'post', 
        'course_price', 
        array(
            'type' => 'string',
            'show_in_rest' => true,
            'single' => true
        )
    );
    register_meta( 
        'post', 
        'course_url', 
        array(
            'type' => 'string',
            'show_in_rest' => true,
            'single' => true
        )
    );
    register_meta( 
        'post', 
        'course_price_currency', 
        array(
            'type' => 'string',
            'show_in_rest' => true,
            'single' => true
        )
    );
    register_meta( 
        'post', 
        'course_certificate', 
        array(
            'type' => 'string',
            'show_in_rest' => true,
            'single' => true
        )
    );
    register_meta( 
        'post', 
        'course_study_load', 
        array(
            'type' => 'string',
            'show_in_rest' => true,
            'single' => true
        )
    );
    register_meta( 
        'post', 
        'course_entry_requirements', 
        array(
            'type' => 'string',
            'show_in_rest' => true,
            'single' => true
        )
    );
    register_meta( 
        'post', 
        'course_target_audience', 
        array(
            'type' => 'string',
            'show_in_rest' => true,
            'single' => true
        )
    );
    
    register_meta( 
        'post', 
        'course_event_schedule', 
        array(
            'type' => 'array',
            'show_in_rest' => array(
                 'schema' => array(
                    'items' => array(
                        'type' => 'object',
                        'properties' => array(
                             'startdate' => array(
                                 'type' => 'string'
                             ),
                             'enddate' => array(
                                 'type'   => 'string'
                             ),
                             'starttime' => array(
                                 'type' => 'string'
                             ),
                             'endtime' => array(
                                 'type' => 'string'
                             )
                        ),
                     ),
                 ),
             ),
            'single' => true
        )
    );
}
add_action( 'init', 'webkompanen_post_meta_fields_courses' );
?>