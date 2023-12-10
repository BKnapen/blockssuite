const { __ } = wp.i18n;
import { startOfMinute, format, set, setHours, setMonth } from 'date-fns';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { PluginDocumentSettingPanel } from '@wordpress/edit-post';
import { select, dispatch, subscribe, useSelect, withSelect, withDispatch, useDispatch  } from '@wordpress/data';
import {
	render,
	Component,
	Fragment,
	useState
} from '@wordpress/element';
import { useEntityProp } from '@wordpress/core-data';
import { useBlockProps, __experimentalLinkControl as LinkControl, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
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

const name = 'meta-fields-video-training';
    
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

    if ( 'ardosz' !== postType ) return null;  
    let videoUrl;
    const { 
        meta, 
        video_training_name,
        video_training_videos
    } = useSelect( select => {
        const meta = select( 'core/editor' ).getEditedPostAttribute( 'meta' );
		const video_training_name = select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ 'video_training_name' ];
		const video_training_videos = select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ 'video_training_videos' ];
        

		return {
			meta: meta,
			video_training_name: video_training_name,
			video_training_videos: video_training_videos
		}
	})

    const { editPost } = useDispatch( 'core/editor', [ 
			video_training_name,
			video_training_videos
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
        if(video_training_performers){
            let artists = []

            video_training_performers.map(
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

            //setMeta( { ...meta, video_training_performers: artists } );

            editPost( 
                { 
                    meta: { 
                        video_training_performers: artists
                    } 
                } 
            )
        }
    }

    const changeLineupHandeler = (requestField, requestItem, requestValue) =>{
        artistPanel !== Number(requestItem) ? setArtistPanel(Number(requestItem)) : ''
        focusField !== requestField ? setFocusField(requestField) : ''
        //this.setState( { openArtistPanel: Number(requestItem) } )
        if(video_training_performers){
            let artists = []

            video_training_performers.map(
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

            //setMeta( { ...meta, video_training_performers: artists } );

            editPost( 
                { 
                    meta: { 
                        video_training_performers: artists
                    } 
                } 
            )
        }
    }

    console.log('video_training_videos')
    console.log(video_training_videos)

    	
	/* Media selector */
	const onSelectMedia = (videoInfo) => {
        console.log(videoInfo)
        if(video_training_videos){
            let videos = []

            video_training_videos.map(
                (video, index) => {
                    videos.push({
                        id:video.id,
                        title:video.title,
                        description:video.description,
                        caption:video.caption,
                        url:video.url,
                        fileLength:video.fileLength,
                        videoquiz:video.videoquiz
                    })
                }
            )


            videos.push({
                id:videoInfo.id,
                title:videoInfo.title,
                description:videoInfo.description,
                caption:videoInfo.caption,
                url:videoInfo.url,
                fileLength:videoInfo.fileLength,
                videoquiz:[{
                    question:'test vraag',
                    options:[
                        {
                            option:'test 1',
                            answer: false
                        },
                        {
                            option:'test 2',
                            answer: false
                        },
                        {
                            option:'test 3',
                            answer: true
                        }
                    ]
                }]
            })

            editPost( 
                { 
                    meta: { 
                        video_training_videos: videos
                    } 
                } 
            )
        }
        else{
            let videos = []

            videos.push({
                id:videoInfo.id,
                title:videoInfo.title,
                description:videoInfo.description,
                caption:videoInfo.caption,
                url:videoInfo.url,
                fileLength:videoInfo.fileLength,
                videoquiz:[{
                    question:'test vraag',
                    options:[
                        {
                            option:'test 1',
                            answer: false
                        },
                        {
                            option:'test 2',
                            answer: false
                        },
                        {
                            option:'test 3',
                            answer: true
                        }
                    ]
                }]
            })

            editPost( 
                { 
                    meta: { 
                        video_training_videos: videos
                    } 
                } 
            )

        }
	}
		
	/* Removers */
		
	const removeMedia = () => {
	}



    return(
        <>
        {
            //checkCourseDays()
        }
        {modalOpen &&
            <Modal
                focusOnMount //focus on the first element in the modal
                shouldCloseOnEsc
                shouldCloseOnClickOutside
                isFullScreen
                overlayClassName="my-extra-modal-overlay-class"
                title={__('Video en vragen', 'webkompanen')}
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
                            <Text variant="body">{__('Video')}</Text>
                        </Spacer>
                        <div>
				            <div className="editor-post-featured-video">
					            <MediaUploadCheck>
						            <MediaUpload
							            onSelect={onSelectMedia}
							            value={''}
							            allowedTypes={ ['video', 'mp4', 'mov'] }
							            render={
			  					            ({open}) => (
									            <Button 
										            className={
											            (videoUrl === '' ||  videoUrl === undefined) ? 'editor-post-featured-video__toggle' : 'editor-post-featured-video__preview h-auto ratio ratio-16x9'
										            }
										            onClick={
											            open
										            }
									            >
										            {
											            (videoUrl === '' ||  videoUrl) === undefined ? __('Choose an video', 'webkompanen') : ''
										            }
										            {
											            (videoUrl !== '' && videoUrl !== undefined) ? ( 
						            			            <ResponsiveWrapper
													            className="w-100 ratio ratio-16x9"
									    		            >
									    			            <video> 
														            <source
															            src={ videoUrl }
															            type="video/mp4"
														            />
													            </video>
									    		            </ResponsiveWrapper>
											            )
													    : ''
						            	            }
									            </Button>
								            )
							            }
						            />
					            </MediaUploadCheck>
					            {
						            (videoUrl !== '' && videoUrl !== undefined) ? (
							            <MediaUploadCheck>
								            <MediaUpload
									            title={__('Replace video', 'webkompanen')}
									            value={''}
									            onSelect={onSelectMedia}
									            allowedTypes={['video']}
									            render={
										            ({open}) => (
											            <Button 
												            onClick={
													            open
												            }
												            isDefault 
												            //isLarge
											            >
												            {__('Replace video', 'webkompanen')}
											            </Button>
										            )
									            }
								            />
							            </MediaUploadCheck>
						            ) : ''
					            }
					            {
						            (videoUrl !== '' && videoUrl !== undefined) ? ( 
							            <MediaUploadCheck>
								            <Button onClick={removeMedia} isLink isDestructive>{__('Remove video', 'webkompanen')}
								            </Button>
							            </MediaUploadCheck>
						            ) : ''
					            }
				            </div>
			            </div>
                    </FlexItem>
                </Flex>
                <Flex
	                gap={25}
	                align="center"
	                justify="flex-center"
                >
                    <FlexItem>
                        <Spacer
                            marginY="5"
                        >
                            <Text variant="body">{__('Vragen')}</Text>
                        </Spacer>
                    </FlexItem>
                </Flex>
            </Modal>
        }
        <PluginDocumentSettingPanel
            name="custom-panel-1"
            title={__('Course info', 'webkompanen')}
            className="custom-panel-1"
        >
            <TextControl
                label={__('Course name', 'webkompanen')}
                value={ video_training_name }
                onChange={ ( newValue ) =>
                    editPost( { 
                        meta: { 
                            video_training_name: newValue
                    } 
                } )
                }
            />
        </PluginDocumentSettingPanel>
        <PluginDocumentSettingPanel
            name="custom-panel-2"
            title={__('Videos', 'webkompanen')}
            className="custom-panel-2"
        >
            <MediaUpload
                onSelect={(media) => {
                    onSelectMedia(media)
                }}
                multiple={false}
                render={({ open }) => (
                    <>
                        <Button 
                            isPrimary
                            onClick={open}
                        >
                            {__('Voeg video toe', 'webkompanen')}
                        </Button>
                    </>
                )}
            />
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