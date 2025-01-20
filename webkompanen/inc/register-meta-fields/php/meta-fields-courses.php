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
            'object_subtype' => 'courses',
            'type' => 'string',
            'show_in_rest' => true,
            'single' => true
        )
    );
    register_meta( 
        'post', 
        'course_first_lesson_free', 
        array(
            'object_subtype' => 'courses',
            'type' => 'boolean',
            'show_in_rest' => true,
            'single' => true
        )
    );
    register_meta( 
        'post', 
        'hide_course_duration', 
        array(
            'object_subtype' => 'courses',
            'type' => 'boolean',
            'show_in_rest' => true,
            'single' => true
        )
    );
    register_meta( 
        'post', 
        'course_show_as_weekly', 
        array(
            'object_subtype' => 'courses',
            'type' => 'boolean',
            'show_in_rest' => true,
            'single' => true
        )
    );
    register_meta( 
        'post', 
        'course_show_as_monthly', 
        array(
            'object_subtype' => 'courses',
            'type' => 'boolean',
            'show_in_rest' => true,
            'single' => true
        )
    );
    register_meta( 
        'post', 
        'course_name', 
        array(
            'object_subtype' => 'courses',
            'type' => 'string',
            'show_in_rest' => true,
            'single' => true
        )
    );
    register_meta( 
        'post', 
        'course_description', 
        array(
            'object_subtype' => 'courses',
            'type' => 'string',
            'show_in_rest' => true,
            'single' => true
        )
    );
    register_meta( 
        'post', 
        'course_door_time', 
        array(
            'object_subtype' => 'courses',
            'type' => 'string',
            'show_in_rest' => true,
            'single' => true
        )
    );
    register_meta( 
        'post', 
        'course_course_mode', 
        array(
            'object_subtype' => 'courses',
            'type' => 'string',
            'show_in_rest' => true,
            'single' => true
        )
    );
    register_meta( 
        'post', 
        'course_course_workload', 
        array(
            'object_subtype' => 'courses',
            'type' => 'string',
            'show_in_rest' => true,
            'single' => true
        )
    );
    register_meta( 
        'post', 
        'course_duration', 
        array(
            'object_subtype' => 'courses',
            'type' => 'string',
            'show_in_rest' => true,
            'single' => true
        )
    );
    register_meta( 
        'post', 
        'course_les_method', 
        array(
            'object_subtype' => 'courses',
            'type' => 'string',
            'show_in_rest' => true,
            'single' => true
        )
    );
    register_meta( 
        'post', 
        'course_minimum_attendee_capacity', 
        array(
            'object_subtype' => 'courses',
            'type' => 'string',
            'show_in_rest' => true,
            'single' => true
        )
    );
    register_meta( 
        'post', 
        'course_maximum_attendee_capacity', 
        array(
            'object_subtype' => 'courses',
            'type' => 'string',
            'show_in_rest' => true,
            'single' => true
        )
    );
    register_meta( 
        'post', 
        'course_start_date', 
        array(
            'object_subtype' => 'courses',
            'type' => 'string',
            'show_in_rest' => true,
            'single' => true
        )
    );
    register_meta( 
        'post', 
        'course_end_date', 
        array(
            'object_subtype' => 'courses',
            'type' => 'string',
            'show_in_rest' => true,
            'single' => true
        )
    );
    register_meta( 
        'post', 
        'course_start_time', 
        array(
            'object_subtype' => 'courses',
            'type' => 'string',
            'show_in_rest' => true,
            'single' => true
        )
    );
    register_meta( 
        'post', 
        'course_end_time', 
        array(
            'object_subtype' => 'courses',
            'type' => 'string',
            'show_in_rest' => true,
            'single' => true
        )
    );
    register_meta( 
        'post', 
        'course_location_name', 
        array(
            'object_subtype' => 'courses',
            'type' => 'string',
            'show_in_rest' => true,
            'single' => true
        )
    );
    register_meta( 
        'post', 
        'course_location_same_as', 
        array(
            'object_subtype' => 'courses',
            'type' => 'string',
            'show_in_rest' => true,
            'single' => true
        )
    );
    register_meta( 
        'post', 
        'course_location_address', 
        array(
            'object_subtype' => 'courses',
            'type' => 'string',
            'show_in_rest' => true,
            'single' => true
        )
    );
    register_meta( 
        'post', 
        'course_days', 
        array(
            'object_subtype' => 'courses',
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
            'object_subtype' => 'courses',
            'type' => 'string',
            'show_in_rest' => true,
            'single' => true
        )
    );
    register_meta( 
        'post', 
        'course_url', 
        array(
            'object_subtype' => 'courses',
            'type' => 'string',
            'show_in_rest' => true,
            'single' => true
        )
    );
    register_meta( 
        'post', 
        'course_price_currency', 
        array(
            'object_subtype' => 'courses',
            'type' => 'string',
            'show_in_rest' => true,
            'single' => true
        )
    );
    register_meta( 
        'post', 
        'course_certificate', 
        array(
            'object_subtype' => 'courses',
            'type' => 'string',
            'show_in_rest' => true,
            'single' => true
        )
    );
    register_meta( 
        'post', 
        'course_study_load', 
        array(
            'object_subtype' => 'courses',
            'type' => 'string',
            'show_in_rest' => true,
            'single' => true
        )
    );
    register_meta( 
        'post', 
        'course_entry_requirements', 
        array(
            'object_subtype' => 'courses',
            'type' => 'string',
            'show_in_rest' => true,
            'single' => true
        )
    );
    register_meta( 
        'post', 
        'course_target_audience', 
        array(
            'object_subtype' => 'courses',
            'type' => 'string',
            'show_in_rest' => true,
            'single' => true
        )
    );
    
    register_meta( 
        'post', 
        'course_event_schedule', 
        array(
            'object_subtype' => 'courses',
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