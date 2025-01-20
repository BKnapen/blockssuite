const { __ } = wp.i18n;
import { startOfMinute, format, set, setHours, setMonth } from 'date-fns';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { PluginDocumentSettingPanel } from '@wordpress/editor';
import { select, dispatch, subscribe, useSelect, withSelect, withDispatch, useDispatch  } from '@wordpress/data';
import {
	render,
	Component,
	Fragment,
	useState
} from '@wordpress/element';
import { useEntityProp } from '@wordpress/core-data';
import { useBlockProps } from '@wordpress/block-editor';
import { compose } from '@wordpress/compose';
import { PanelRow, ToggleControl, TextControl, TextareaControl, Button, PanelBody, DateTimePicker, DatePicker, TimePicker, __experimentalText as Text, Flex, FlexItem, FlexBlock, __experimentalInputControl as InputControl, __experimentalSpacer as Spacer, CheckboxControl, Modal } from '@wordpress/components';
import { InputChangeCallback } from '@wordpress/components/src/input-control/types';
import { InputState } from '@wordpress/components/src/input-control/reducer/state';
import {
	Input,
	BackdropUI,
} from '@wordpress/components/src/input-control/styles/input-control-styles';
import {
	COMMIT,
	InputAction,
	PRESS_DOWN,
	PRESS_UP,
} from '@wordpress/components/src/input-control/reducer/actions';
import initPlugin from '../../utils/init-register-plugin'

const name = 'meta-fields-course';
    
const CourseMetaFields = () => {
        
    const [ artistPanel, setArtistPanel ] = useState(false);
    const [ focusField, setFocusField ] = useState(false);
    const [ beginTimeHours, setBeginTimeHours ] = useState(0);
    const [ beginTimeMinutes, setBeginTimeMinutes ] = useState(0);
    const [ endTimeHours, setEndTimeHours ] = useState(0);
    const [ endTimeMinutes, setEndTimeMinutes ] = useState(0);
    const [ modalOpen, setModalOpen ] = useState(false);

    const openModal = () => setModalOpen( true );
    const closeModal = () => setModalOpen( false );

    //const blockProps = useBlockProps();

    const postType = useSelect(
        ( select ) => select( 'core/editor' ).getCurrentPostType(),
        []
    );

    const [ metadata, setMeta ] = useEntityProp( 'postType', postType, 'meta' );

    if ( 'courses' !== postType ) return null;  

    const { 
        meta, 
        course_name, 
        course_start_date, 
        course_end_date, 
        course_start_time, 
        course_end_time, 
        course_days, 
        course_price, 
        course_les_method, 
        course_certificate, 
        course_study_load, 
        course_entry_requirements, 
        course_target_audience, 
        course_location_name, 
        course_location_same_as, 
        course_location_address,
        course_minimum_attendee_capacity,
        course_maximum_attendee_capacity,
        course_door_time,
        course_duration,
        hide_course_duration,
        course_course_mode,
        course_course_workload,
        course_event_schedule,
        course_description,
        course_show_as_weekly,
        course_show_as_monthly,
        course_price_per_lesson,
        course_first_lesson_free
    } = useSelect( select => {
        const meta = select( 'core/editor' ).getEditedPostAttribute( 'meta' );
		const course_name = select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ 'course_name' ];
		const course_start_date = select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ 'course_start_date' ];
		const course_end_date = select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ 'course_end_date' ];
		const course_start_time = select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ 'course_start_time' ];
		const course_end_time = select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ 'course_end_time' ];
		const course_days = select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ 'course_days' ];
		const course_price = select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ 'course_price' ];
		const course_les_method = select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ 'course_les_method' ];
		const course_certificate = select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ 'course_certificate' ];
		const course_study_load = select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ 'course_study_load' ];
		const course_entry_requirements = select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ 'course_entry_requirements' ];
		const course_target_audience = select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ 'course_target_audience' ];
		const course_location_name = select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ 'course_location_name' ];
		const course_location_same_as = select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ 'course_location_same_as' ];
		const course_location_address = select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ 'course_location_address' ];
        const course_minimum_attendee_capacity = select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ 'course_minimum_attendee_capacity' ];
        const course_maximum_attendee_capacity = select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ 'course_maximum_attendee_capacity' ];
        const course_door_time = select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ 'course_door_time' ];
        const course_duration = select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ 'course_duration' ];
        const hide_course_duration = select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ 'hide_course_duration' ];
        const course_course_mode = select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ 'course_course_mode' ];
        const course_course_workload = select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ 'course_course_workload' ];
        const course_event_schedule = select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ 'course_event_schedule' ];
        const course_description = select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ 'course_description' ];
        const course_show_as_weekly = select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ 'course_show_as_weekly' ];
        const course_show_as_monthly = select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ 'course_show_as_monthly' ];
        const course_price_per_lesson = select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ 'course_price_per_lesson' ];
        const course_first_lesson_free = select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ 'course_first_lesson_free' ];
        

		return {
			meta: meta,
			course_name: course_name,
			course_start_date: course_start_date,
			course_end_date: course_end_date,
			course_start_time: course_start_time,
			course_end_time: course_end_time,
			course_days: course_days,
			course_price: course_price,
			course_les_method: course_les_method,
			course_certificate: course_certificate,
			course_study_load: course_study_load,
			course_entry_requirements: course_entry_requirements,
			course_target_audience: course_target_audience,
			course_location_name: course_location_name,
            course_location_same_as: course_location_same_as,
            course_location_address: course_location_address,
            course_minimum_attendee_capacity: course_minimum_attendee_capacity,
            course_maximum_attendee_capacity: course_maximum_attendee_capacity,
            course_door_time: course_door_time,
            course_duration: course_duration,
            hide_course_duration: hide_course_duration,
            course_course_mode: course_course_mode,
            course_course_workload: course_course_workload,
            course_event_schedule: course_event_schedule,
            course_description: course_description,
            course_show_as_weekly: course_show_as_weekly,
            course_show_as_monthly: course_show_as_monthly,
            course_price_per_lesson: course_price_per_lesson,
            course_first_lesson_free: course_first_lesson_free
		}
	})

    const { editPost } = useDispatch( 'core/editor', [ 
			course_name,
			course_start_date,
			course_end_date,
			course_start_time,
			course_end_time,
			course_days,
			course_price,
			course_les_method,
			course_certificate,
			course_study_load,
			course_entry_requirements,
			course_target_audience,
			course_location_name,
            course_location_same_as,
            course_location_address,
            course_minimum_attendee_capacity,
            course_maximum_attendee_capacity,
            course_door_time,
            course_duration,
            course_course_mode,
            course_course_workload,
            course_event_schedule,
            course_description,
            course_show_as_weekly,
            course_show_as_monthly,
            course_price_per_lesson,
            course_first_lesson_free
    ] )

    const buildPadInputStateReducer = ( requestNumber ) =>  {
        return ( InputState, InputAction ) => {
            const nextState = { ...state };
            if (
                action.type === COMMIT ||
                action.type === PRESS_UP ||
                action.type === PRESS_DOWN
            ) {
                if ( nextState.value !== undefined ) {
                    nextState.value = nextState.value
                        .toString()
                        .padStart( pad, '0' );
                }
            }
            return nextState;
        };
    }

    const removeLineupHandeler = (requestItem) =>{
        if(course_performers){
            let artists = []

            course_performers.map(
                (performer, index) => {
                    index !== Number(requestItem) ? 
                    artists.push({
                        artistname:performer.artistname,
                        artistsite:performer.artistsite,
                        artistfacebook:performer.artistfacebook,
                        artisttwitter:performer.artisttwitter,
                        artistinstagram:performer.artistinstagram,
                        artisttiktok:performer.artisttiktok,
                        artistspotify:performer.artistspotify,
                        artistimusic:performer.artistimusic,
                        artistbeatport:performer.artistbeatport,
                        artistsoundcloud:performer.artistsoundcloud
                    }):''
                }
            )

            //setMeta( { ...meta, course_performers: artists } );

            editPost( 
                { 
                    meta: { 
                        course_performers: artists
                    } 
                } 
            )
        }
    }

    const changeLineupHandeler = (requestField, requestItem, requestValue) =>{
        artistPanel !== Number(requestItem) ? setArtistPanel(Number(requestItem)) : ''
        focusField !== requestField ? setFocusField(requestField) : ''
        //this.setState( { openArtistPanel: Number(requestItem) } )
        if(course_performers){
            let artists = []

            course_performers.map(
                (performer, index) => {
                    index !== Number(requestItem) ? 
                    artists.push({
                        artistname:performer.artistname,
                        artistsite:performer.artistsite,
                        artistfacebook:performer.artistfacebook,
                        artisttwitter:performer.artisttwitter,
                        artistinstagram:performer.artistinstagram,
                        artisttiktok:performer.artisttiktok,
                        artistspotify:performer.artistspotify,
                        artistimusic:performer.artistimusic,
                        artistbeatport:performer.artistbeatport,
                        artistsoundcloud:performer.artistsoundcloud
                    }):
                    artists.push({
                        artistname:requestField == 'artistname' ? requestValue : performer.artistname,
                        artistsite:requestField == 'artistsite' ? requestValue : performer.artistsite,
                        artistfacebook:requestField == 'artistfacebook' ? requestValue : performer.artistfacebook,
                        artisttwitter:requestField == 'artisttwitter' ? requestValue : performer.artisttwitter,
                        artistinstagram:requestField == 'artistinstagram' ? requestValue : performer.artistinstagram,
                        artisttiktok:requestField == 'artisttiktok' ? requestValue : performer.artisttiktok,
                        artistspotify:requestField == 'artistspotify' ? requestValue : performer.artistspotify,
                        artistimusic:requestField == 'artistimusic' ? requestValue : performer.artistimusic,
                        artistbeatport:requestField == 'artistbeatport' ? requestValue : performer.artistbeatport,
                        artistsoundcloud:requestField == 'artistsoundcloud' ? requestValue : performer.artistsoundcloud
                    })
                }
            )

            //setMeta( { ...meta, course_performers: artists } );

            editPost( 
                { 
                    meta: { 
                        course_performers: artists
                    } 
                } 
            )
        }
    }

    const cursusEditHandeler = (requestItem) => {
        setModalOpen(requestItem)
    }
    const cursusRemoveHandeler = (requestItem) => {
        if(course_event_schedule){
            let schedule = []

            course_event_schedule.map(
                (eventschedule, index) => {
                    if(Number(index) !== Number(requestItem)){
                        schedule.push({
                            startdate:eventschedule.startdate,
                            enddate:eventschedule.enddate,
                            starttime:eventschedule.starttime,
                            endtime:eventschedule.endtime
                        })
                    }
                }
            )

            editPost( 
                { 
                    meta: { 
                        course_event_schedule: schedule
                    } 
                } 
            )
        }
    }

    const cursusDataHandeler = () =>{
        if(course_event_schedule){
            let schedule = []

            course_event_schedule.map(
                (eventschedule, index) => {
                    schedule.push({
                        startdate:eventschedule.startdate,
                        enddate:eventschedule.enddate,
                        starttime:eventschedule.starttime,
                        endtime:eventschedule.endtime
                    })
                }
            )

            schedule.push({
                startdate:format( new Date(), "yyyy-MM-dd'T'HH:mm:ss" ),
                enddate:format( new Date(), "yyyy-MM-dd'T'HH:mm:ss" ),
                starttime:format( new Date(), "yyyy-MM-dd'T'HH:mm:ss" ),
                endtime:format( new Date(), "yyyy-MM-dd'T'HH:mm:ss" )
            })

            editPost( 
                { 
                    meta: { 
                        course_event_schedule: schedule
                    } 
                } 
            )

            setModalOpen(''+schedule.length-1+'')
        }
        else{
            let schedule = []

            schedule.push({
                startdate:format( new Date(), "yyyy-MM-dd'T'HH:mm:ss" ),
                enddate:format( new Date(), "yyyy-MM-dd'T'HH:mm:ss" ),
                starttime:format( new Date(), "yyyy-MM-dd'T'HH:mm:ss" ),
                endtime:format( new Date(), "yyyy-MM-dd'T'HH:mm:ss" )
            })

            editPost( 
                { 
                    meta: { 
                        course_event_schedule: schedule
                    } 
                } 
            )

            setModalOpen(''+schedule.length-1+'')
        }
    }

    const checkCourseDays = (props) =>{
        if(course_days.length === 0){
            editPost( { 
                meta: { 
                    course_days: [
                        false,
                        false,
                        false,
                        false,
                        false,
                        false,
                        false
                    ]
                }
            } )
        }
    }

    const CoursesDataOutput = (props) =>{
        if(course_event_schedule){
            let schedule = []
            course_event_schedule.map(
                (eventschedule, index) => {
                    schedule.push(
                        <div className='mb-2'>
                            <span>
                                {format( new Date(eventschedule.startdate), 'dd-MM-yyyy' )} - {format( new Date(eventschedule.enddate), 'dd-MM-yyyy' )}
                            </span>
                            <br/>
                            <a 
                                href="#" 
                                data-schedule={index}
                                onClick={
                                    (e)=>{
                                        e.preventDefault()
                                        e.stopPropagation()
                                        cursusEditHandeler(e.target.getAttribute('data-schedule'))
                                    }
                                }
                            >
                                <i data-schedule={index} class="fs-5 fa-solid fa-pen"></i>
                            </a>
                            <a 
                                href="#" 
                                data-schedule={index}
                                onClick={
                                    (e)=>{
                                        e.preventDefault()
                                        e.stopPropagation()
                                        cursusRemoveHandeler(e.target.getAttribute('data-schedule'))
                                    }
                                }
                            >
                                <i data-schedule={index} className="fs-5 fa-solid fa-circle-xmark"></i>
                            </a>
                        </div>
                    )
                }
            )

            return(
                <>
                    { schedule }
                </>
            )
        }
        else{
        }
    }

    return(
        <>
        {
            checkCourseDays()
        }
        {modalOpen &&
            <Modal
                focusOnMount //focus on the first element in the modal
                shouldCloseOnEsc
                shouldCloseOnClickOutside
                isFullScreen
                overlayClassName="my-extra-modal-overlay-class"
                title={__('Course dates and times', 'webkompanen')}
                onRequestClose={ closeModal }
            >
                <Flex
	                gap={25}
	                align="center"
	                justify="flex-center"
                >
                    <FlexItem>
                        <Spacer
                            marginY="5"
                        >
                            <Text variant="body">{__('Start date', 'webkompanen')} {modalOpen}</Text>
                        </Spacer>
                        <DatePicker
                            label={__('Start date', 'webkompanen')}
	                        currentDate={ course_event_schedule[modalOpen] ? course_event_schedule[modalOpen].startdate : new Date() }
	                        onChange={ 
                                ( date ) => {
                                    // 1. Make a shallow copy of the items
    		                        var items = [...course_event_schedule];
    		
                                    // 2. Make a shallow copy of the item you want to mutate
    		                        var item = {...items[Number(modalOpen)]};
    		                    
                                    // 3. Replace the property you're intested in
    		                        item.startdate = date
			
                                    // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's 	why we made a copy first
    		                        items[Number(modalOpen)] = item;

                                    editPost( { 
                                        meta: { 
                                            course_event_schedule: items
                                        } 
                                    } )
                                }
                            }
	                        // is12Hour
                        />
                        <Spacer
                            marginY="5"
                        >
                            <Text variant="body">{__('Start time', 'webkompanen')}</Text>
                        </Spacer>
                        <Flex
                            gap={2}
                            align="center"
                            justify="flex-start"
                        >
                            <FlexItem>
                                <InputControl
                                    style={
                                        {
                                            paddingRight: 0,
                                            borderRight: 0,
                                            borderTopRightRadius: 0,
                                            borderBottomRightRadius: 0
                                        }
                                    }
                                    hideLabelFromVision
                                    label={__('HH', 'webkompanen')}
                                    labelPosition="top"
                                    value={format( course_event_schedule[modalOpen] ? new Date(course_event_schedule[modalOpen].startdate) : new Date(), 'HH' )}
                                    step="1"
                                    min="0"
                                    max="23"
                                    type="number"
                                    maxLength="2"
                                    isPressEnterToChange
                                    onChange={ 
                                        ( nextValue ) => { 
                                            // 1. Make a shallow copy of the items
    		                                var items = [...course_event_schedule];
    		
                                            // 2. Make a shallow copy of the item you want to mutate
    		                                var item = {...items[Number(modalOpen)]};
    		                    
                                            // 3. Replace the property you're intested in 11-13
                                            item.startdate = ''+item.startdate.slice(0,10)+'T'+nextValue+':'+item.startdate.slice(14,16)+':00'
    		                                item.starttime = ''+item.startdate.slice(0,10)+'T'+nextValue+':'+item.startdate.slice(14,16)+':00'
			
                                            // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's 	why we made a copy first
    		                                items[Number(modalOpen)] = item;

                                            setBeginTimeHours(Number(nextValue))

                                            editPost( { 
                                                meta: { 
                                                    course_event_schedule: items
                                                } 
                                            } )
                                        } 
                                    }
                                    __unstableStateReducer={ 
                                        (e)=>{
            
                                            const nextState = { ...e };
            
                                            nextState.value = nextState.value.toString().padStart( 2, '0' )
            
                                            return nextState;
                                        } 
                                    }
                                />
                            </FlexItem>
                            <FlexItem>
                                <Text variant="body">{__(':', 'webkompanen')}</Text>
                            </FlexItem>
                            <FlexItem>
                                <InputControl
                                    style={
                                        {
                                            paddingLeft: 0,
                                            borderLeft: 0,
                                            borderTopLeftRadius: 0,
                                            borderBottomLeftRadius: 0
                                        }
                                    }
                                    hideLabelFromVision
                                    label={__('MM', 'webkompanen')}
                                    labelPosition="top"
                                    value={format( course_event_schedule[modalOpen] ? new Date(course_event_schedule[modalOpen].startdate) : new Date(), 'mm' )}
                                    step="1"
                                    min="0"
                                    max="59"
                                    type="number"
                                    maxLength="2"
                                    isPressEnterToChange
                                    onChange={ 
                                        ( nextValue ) => { 
                                            // 1. Make a shallow copy of the items
    		                                var items = [...course_event_schedule];
    		
                                            // 2. Make a shallow copy of the item you want to mutate
    		                                var item = {...items[Number(modalOpen)]};
    		                    
                                            // 3. Replace the property you're intested in 11-13
                                            item.startdate = ''+item.startdate.slice(0,10)+'T'+item.startdate.slice(11,13)+':'+nextValue+':00'
    		                                item.starttime = ''+item.startdate.slice(0,10)+'T'+item.startdate.slice(11,13)+':'+nextValue+':00'
			
                                            // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's 	why we made a copy first
    		                                items[Number(modalOpen)] = item;

                                            setBeginTimeMinutes(Number(nextValue))

                                            editPost( { 
                                                meta: { 
                                                    course_event_schedule: items
                                                } 
                                            } )
                                        } 
                                    }
                                    __unstableStateReducer={ 
                                        (e)=>{
            
                                            const nextState = { ...e };
            
                                            nextState.value = nextState.value.toString().padStart( 2, '0' )
            
                                            return nextState;
                                        } 
                                    }
                                />
                            </FlexItem>
                        </Flex>
                    </FlexItem>
                    <FlexItem>
                        <Spacer
                            marginY="5"
                        >
                            <Text variant="body">{__('End date')}</Text>
                        </Spacer>
                        <DatePicker
                            label={__('End date', 'webkompanen')}
	                        currentDate={ course_event_schedule[modalOpen] ? course_event_schedule[modalOpen].enddate : new Date() }
	                        onChange={ 
                                ( date ) => {

                                    // 1. Make a shallow copy of the items
    		                        var items = [...course_event_schedule];
    		
                                    // 2. Make a shallow copy of the item you want to mutate
    		                        var item = {...items[Number(modalOpen)]};
    		                    
                                    // 3. Replace the property you're intested in
    		                        item.enddate = date
			
                                    // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's 	why we made a copy first
    		                        items[Number(modalOpen)] = item;


                                    editPost( { 
                                        meta: { 
                                            course_event_schedule: items
                                        } 
                                    }) 
                                }
                            }
	                        // is12Hour
                        />
                        <Spacer
                            marginY="5"
                        >
                            <Text variant="body">{__('End date')}</Text>
                        </Spacer>
                        <Flex
                            gap={2}
                            align="center"
                            justify="flex-start"
                        >
                            <FlexItem>
                                <InputControl
                                    hideLabelFromVision
                                    label={__('HH', 'webkompanen')}
                                    labelPosition="top"
                                    value={format( course_event_schedule[modalOpen] ? new Date(course_event_schedule[modalOpen].enddate) : new Date(), 'HH' )}
                                    step="1"
                                    min="0"
                                    max="23"
                                    type="number"
                                    maxLength="2"
                                    isPressEnterToChange
                                    onChange={ 
                                        ( nextValue ) => {
                                            // 1. Make a shallow copy of the items
    		                                var items = [...course_event_schedule];
    		
                                            // 2. Make a shallow copy of the item you want to mutate
    		                                var item = {...items[Number(modalOpen)]};

    		                                // 3. Replace the property you're intested in 11-13
                                            item.enddate = ''+item.enddate.slice(0,10)+'T'+nextValue+':'+item.enddate.slice(14,16)+':00'
                                            item.endtime = ''+item.enddate.slice(0,10)+'T'+nextValue+':'+item.enddate.slice(14,16)+':00'
			
                                            // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's 	why we made a copy first
    		                                items[Number(modalOpen)] = item;

                                            setEndTimeHours(Number(nextValue))

                                            editPost( { 
                                                meta: { 
                                                    course_event_schedule: items
                                                } 
                                            } )
                                        }
                                    }
                                    __unstableStateReducer={ 
                                        (e)=>{
            
                                            const nextState = { ...e };
            
                                            nextState.value = nextState.value.toString().padStart( 2, '0' )
            
                                            return nextState;
                                        } 
                                    }
                                />
                            </FlexItem>
                            <FlexItem>
                                <Text variant="body">{__(':', 'webkompanen')}</Text>
                            </FlexItem>
                            <FlexItem>
                                <InputControl
                                    hideLabelFromVision
                                    label={__('MM', 'webkompanen')}
                                    labelPosition="top"
                                    value={format( course_event_schedule[modalOpen] ? new Date(course_event_schedule[modalOpen].enddate) : new Date(), 'mm' )}
                                    step="1"
                                    min="0"
                                    max="59"
                                    type="number"
                                    maxLength="2"
                                    isPressEnterToChange
                                    onChange={ 
                                        ( nextValue ) => {
                                            // 1. Make a shallow copy of the items
    		                                var items = [...course_event_schedule];
    		
                                            // 2. Make a shallow copy of the item you want to mutate
    		                                var item = {...items[Number(modalOpen)]};

    		                                // 3. Replace the property you're intested in 11-13
                                            item.enddate = ''+item.enddate.slice(0,10)+'T'+item.enddate.slice(11,13)+':'+nextValue+':00'
                                            item.endtime = ''+item.enddate.slice(0,10)+'T'+item.enddate.slice(11,13)+':'+nextValue+':00'
			
                                            // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's 	why we made a copy first
    		                                items[Number(modalOpen)] = item;

                                            setEndTimeMinutes(Number(nextValue))

                                            editPost( { 
                                                meta: { 
                                                    course_event_schedule: items
                                                } 
                                            } )
                                        }
                                    }
                                    __unstableStateReducer={ 
                                        (e)=>{
            
                                            const nextState = { ...e };
            
                                            nextState.value = nextState.value.toString().padStart( 2, '0' )
            
                                            return nextState;
                                        } 
                                    }
                                />
                            </FlexItem>
                        </Flex>
                    </FlexItem>
                </Flex>
            </Modal>
        }
        <PluginDocumentSettingPanel
            name="custom-panel-1"
            title={__('Course details')}
            className="custom-panel-1"
        >
            <TextControl
                label={__('Course name', 'webkompanen')}
                value={ course_name }
                onChange={ ( newValue ) =>
                    editPost( { 
                        meta: { 
                            course_name: newValue
                    } 
                } )
                }
            />
            <TextControl
                label={__('Price', 'webkompanen')}
                value={ course_price }
                onChange={ ( newValue ) =>
                    editPost( { 
                        meta: { 
                            course_price: newValue
                    } 
                } )
                }
            />
            <TextControl
                label={__('Price per lesson', 'webkompanen')}
                value={ course_price_per_lesson }
                onChange={ ( newValue ) =>
                    editPost( { 
                        meta: { 
                            course_price_per_lesson: newValue
                    } 
                } )
                }
            />
            <TextareaControl
	            label={__('Study load', 'webkompanen')}
	            rows={4}
	            value={ course_study_load }
	            onChange={ ( newValue ) =>
                    editPost( { 
                        meta: { 
                            course_study_load: newValue
                    } 
                } )
                }
            />
            <TextareaControl
	            label={__('Target audience', 'webkompanen')}
	            rows={4}
	            value={ course_target_audience }
	            onChange={ ( newValue ) =>
                    editPost( { 
                        meta: { 
                            course_target_audience: newValue
                    } 
                } )
                }
            />
            <TextareaControl
	            label={__('Entry requirements', 'webkompanen')}
	            rows={4}
	            value={ course_entry_requirements }
	            onChange={ ( newValue ) =>
                    editPost( { 
                        meta: { 
                            course_entry_requirements: newValue
                    } 
                } )
                }
            />
            <TextareaControl
	            label={__('Les method', 'webkompanen')}
	            rows={4}
	            value={ course_les_method }
	            onChange={ ( newValue ) =>
                    editPost( { 
                        meta: { 
                            course_les_method: newValue
                    } 
                } )
                }
            />
            <TextareaControl
	            label={__('Certificate/ diploma', 'webkompanen')}
	            rows={4}
	            value={ course_certificate }
	            onChange={ ( newValue ) =>
                    editPost( { 
                        meta: { 
                            course_certificate: newValue
                    } 
                } )
                }
            />
            <Spacer
                marginY="5"
            >
                <Text variant="body">{__('Course days', 'webkompanen')}</Text>
            </Spacer>
            <Flex
	            gap={2}
	            align="center"
	            justify="flex-start"
            >
	            <FlexItem>
                    <CheckboxControl
	                    label={__('Mo', 'webkompanen')}
	                    checked={ course_days[1] }
                        onChange={
                            (e)=>{
                                editPost( { 
                                    meta: { 
                                        course_days: [
                                            course_days[0],
                                            ! course_days[1],
                                            course_days[2],
                                            course_days[3],
                                            course_days[4],
                                            course_days[5],
                                            course_days[6]
                                        ]
                                    }
                                } ) 
                            }
                        }
                    />
                </FlexItem>
	            <FlexItem>
                    <CheckboxControl
	                    label={__('Tu', 'webkompanen')}
	                    checked={ course_days[2] }
                        onChange={
                            (e)=>{
                                editPost( { 
                                    meta: { 
                                        course_days: [
                                            course_days[0],
                                            course_days[1],
                                            ! course_days[2],
                                            course_days[3],
                                            course_days[4],
                                            course_days[5],
                                            course_days[6]
                                        ]
                                    }
                                } ) 
                            }
                        }
                    />
                </FlexItem>
	            <FlexItem>
                    <CheckboxControl
	                    label={__('We', 'webkompanen')}
	                    checked={ course_days[3] }
                        onChange={
                            (e)=>{
                                editPost( { 
                                    meta: { 
                                        course_days: [
                                            course_days[0],
                                            course_days[1],
                                            course_days[2],
                                            ! course_days[3],
                                            course_days[4],
                                            course_days[5],
                                            course_days[6]
                                        ]
                                    }
                                } ) 
                            }
                        }
                    />
                </FlexItem>
	            <FlexItem>
                    <CheckboxControl
	                    label={__('Th', 'webkompanen')}
	                    checked={ course_days[4] }
                        onChange={
                            (e)=>{
                                editPost( { 
                                    meta: { 
                                        course_days: [
                                            course_days[0],
                                            course_days[1],
                                            course_days[2],
                                            course_days[3],
                                            ! course_days[4],
                                            course_days[5],
                                            course_days[6]
                                        ]
                                    }
                                } ) 
                            }
                        }
                    />
                </FlexItem>
	            <FlexItem>
                    <CheckboxControl
	                    label={__('Fr', 'webkompanen')}
	                    checked={ course_days[5] }
                        onChange={
                            (e)=>{
                                editPost( { 
                                    meta: { 
                                        course_days: [
                                            course_days[0],
                                            course_days[1],
                                            course_days[2],
                                            course_days[3],
                                            course_days[4],
                                            ! course_days[5],
                                            course_days[6]
                                        ]
                                    }
                                } ) 
                            }
                        }
                    />
                </FlexItem>
	            <FlexItem>
                    <CheckboxControl
	                    label={__('Sa', 'webkompanen')}
	                    checked={ course_days[6] }
                        onChange={
                            (e)=>{
                                editPost( { 
                                    meta: { 
                                        course_days: [
                                            course_days[0],
                                            course_days[1],
                                            course_days[2],
                                            course_days[3],
                                            course_days[4],
                                            course_days[5],
                                            ! course_days[6]
                                        ]
                                    }
                                } ) 
                            }
                        }
                    />
                </FlexItem>
	            <FlexItem>
                    <CheckboxControl
	                    label={__('Su', 'webkompanen')}
	                    checked={ course_days[0] }
                        onChange={
                            (e)=>{
                                editPost( { 
                                    meta: { 
                                        course_days: [
                                            ! course_days[0],
                                            course_days[1],
                                            course_days[2],
                                            course_days[3],
                                            course_days[4],
                                            course_days[5],
                                            course_days[6]
                                        ]
                                    }
                                } ) 
                            }
                        }
                    />
                </FlexItem>
            </Flex>
            <TextControl
                label={__('Course duration (number of weeks)', 'webkompanen')}
                value={ course_duration }
                onChange={ ( newValue ) =>
                    editPost( { 
                        meta: { 
                            course_duration: newValue
                    } 
                } )
                }
            />
            <ToggleControl
	            label={__('Hide course duration', 'webkompanen')}
	            help={ 
                    course_show_as_weekly ? __('Yes', 'webkompanen') : __('No', 'webkompanen')
                }
	            checked={ hide_course_duration }
	            onChange={ (e) =>
                    editPost( { 
                        meta: { 
                            hide_course_duration: ! hide_course_duration
                    }
                })
                }
            />
            <TextControl
                label={__('Minimum number of attendees', 'webkompanen')}
                value={ course_minimum_attendee_capacity }
                onChange={ ( newValue ) =>
                    editPost( { 
                        meta: { 
                            course_minimum_attendee_capacity: newValue
                    } 
                } )
                }
            />
            <TextControl
                label={__('Maximum number of attendees', 'webkompanen')}
                value={ course_maximum_attendee_capacity }
                onChange={ ( newValue ) =>
                    editPost( { 
                        meta: { 
                            course_maximum_attendee_capacity: newValue
                    } 
                } )
                }
            />
            <ToggleControl
	            label={__('Show as weekly', 'webkompanen')}
	            help={ 
                    course_show_as_weekly ? __('Yes', 'webkompanen') : __('No', 'webkompanen')
                }
	            checked={ course_show_as_weekly }
	            onChange={ (e) =>
                    editPost( { 
                        meta: { 
                            course_show_as_weekly: ! course_show_as_weekly
                    }
                })
                }
            />
            <ToggleControl
	            label={__('Show as monthly', 'webkompanen')}
	            help={ 
                    course_show_as_monthly ? __('Yes', 'webkompanen') : __('No', 'webkompanen')
                }
	            checked={ course_show_as_monthly }
	            onChange={ (e) =>
                    editPost( { 
                        meta: { 
                            course_show_as_monthly: ! course_show_as_monthly
                    }
                })
                }
            />
            <ToggleControl
                label={__('First lesson free', 'webkompanen')}
                help={ 
                    course_first_lesson_free ? __('Yes', 'webkompanen') : __('No', 'webkompanen')
                }
                checked={ course_first_lesson_free }
                onChange={ (e) =>
                    editPost( { 
                        meta: { 
                            course_first_lesson_free: ! course_first_lesson_free
                    }
                })
                }
            />
        </PluginDocumentSettingPanel>
        <PluginDocumentSettingPanel
            name="custom-panel-2"
            title={__('Course dates', 'webkompanen')}
            className="custom-panel-2"
        >
            <CoursesDataOutput/>
            <Button 
                isPrimary
                onClick={
                    ()=>{ cursusDataHandeler() }
                }
            >
                {__('Add course date', 'webkompanen')}
            </Button>
        </PluginDocumentSettingPanel>
        </>
    )
}

export const settings = {
	render: CourseMetaFields,
    icon: 'palmtree'
}

export const init = () => initPlugin({
	name,
	settings
})