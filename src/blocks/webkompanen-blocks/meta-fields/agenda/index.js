const { __ } = wp.i18n;
import { PluginDocumentSettingPanel } from '@wordpress/edit-post';
import { select, dispatch, subscribe, useSelect, withSelect, withDispatch, useDispatch  } from '@wordpress/data';
import {
	render,
	Component,
	Fragment,
	useState
} from '@wordpress/element';
import { useEntityProp } from '@wordpress/core-data';
import { 
    __experimentalLinkControl as LinkControl,
	__experimentalLinkControlSearchInput as LinkControlSearchInput,
    useBlockProps,
    MediaUpload, 
	MediaUploadCheck
} from '@wordpress/block-editor';
import {
    TextControl, 
    DateTimePicker,
	ToggleControl,
	TextareaControl,
	PanelBody,
    FocalPointPicker,
	PanelRow,
	CheckboxControl,
	SelectControl,
	ColorPicker,
	Popover,
	IconButton,
	ButtonGroup,
	Button,
	ResponsiveWrapper,
	ColorPalette,
	__experimentalInputControl as InputControl,
    __experimentalSpacer as Spacer,
	__experimentalBoxControl as BoxControl,
    __experimentalText as Text,
	Toolbar
} from '@wordpress/components';
import { compose } from '@wordpress/compose';

import initPlugin from '../../utils/init-register-plugin'

import '../../styles/editor.scss';

const name = 'meta-fields-agenda';

const AgendaMetaFields = () => {
        
    const [ artistPanel, setArtistPanel ] = useState(false);
    const [ focusField, setFocusField ] = useState(false);

    //const blockProps = useBlockProps();

    const postType = useSelect(
        ( select ) => select( 'core/editor' ).getCurrentPostType(),
        []
    );

    console.log('postType');

    const [ metadata, setMeta ] = useEntityProp( 'postType', postType, 'meta' );

    if ( 'agenda' !== postType ) return null;  

    const { 
        meta, 
        agenda_link, 
        agenda_name, 
        agenda_start_date, 
        agenda_end_date, 
        agenda_location_name, 
        agenda_location_same_as, 
        agenda_location_address, 
        agenda_ticket_price,
        agenda_ticket_url,
        agenda_location_price_currency,
        agenda_performers,
        agenda_image_id,
        agenda_image_url,
        agenda_image_alt,
        agenda_image_height,
        agenda_image_width,
        agenda_image,
        agenda_button_text,
        agenda_focalpoint,
        agenda_weekly_event
    } = useSelect( select => {
        const meta = select( 'core/editor' ).getEditedPostAttribute( 'meta' );
		const agenda_link = select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ 'agenda_link' ];
		const agenda_name = select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ 'agenda_name' ];
		const agenda_start_date = select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ 'agenda_start_date' ];
		const agenda_end_date = select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ 'agenda_end_date' ];
		const agenda_location_name = select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ 'agenda_location_name' ];
        const agenda_location_same_as = select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ 'agenda_location_same_as' ];
        const agenda_location_address = select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ 'agenda_location_address' ];
        const agenda_ticket_url = select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ 'agenda_ticket_url' ];
        const agenda_ticket_price = select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ 'agenda_ticket_price' ];
        const agenda_location_price_currency = select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ 'agenda_location_price_currency' ];
        const agenda_performers = select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ 'agenda_performers' ];
        const agenda_image_id = select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ 'agenda_image_id' ];
        const agenda_image_url = select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ 'agenda_image_url' ];
        const agenda_image_alt = select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ 'agenda_image_alt' ];
        const agenda_image_height = select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ 'agenda_image_height' ];
        const agenda_image_width = select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ 'agenda_image_width' ];
        const agenda_image = select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ 'agenda_image' ];
        const agenda_button_text = select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ 'agenda_button_text' ];
        const agenda_focalpoint = select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ 'agenda_focalpoint' ];
        const agenda_weekly_event = select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ 'agenda_weekly_event' ];

		return {
			meta: meta,
			agenda_link: agenda_link,
			agenda_name: agenda_name,
			agenda_start_date: agenda_start_date,
			agenda_end_date: agenda_end_date,
			agenda_location_name: agenda_location_name,
            agenda_location_same_as: agenda_location_same_as,
            agenda_location_address: agenda_location_address,
            agenda_ticket_url: agenda_ticket_url,
            agenda_ticket_price: agenda_ticket_price,
            agenda_location_price_currency: agenda_location_price_currency,
            agenda_performers: agenda_performers,
            agenda_image_id: agenda_image_id,
            agenda_image_url: agenda_image_url,
            agenda_image_alt: agenda_image_alt,
            agenda_image_height: agenda_image_height,
            agenda_image_width: agenda_image_width,
            agenda_image: agenda_image,
            agenda_button_text: agenda_button_text,
            agenda_focalpoint: agenda_focalpoint,
            agenda_weekly_event: agenda_weekly_event
		}
	})

    const { editPost } = useDispatch( 'core/editor', [ 
        agenda_link, 
        agenda_name, 
        agenda_start_date, 
        agenda_end_date, 
        agenda_location_name, 
        agenda_location_same_as, 
        agenda_location_address, 
        agenda_ticket_price,
        agenda_ticket_url,
        agenda_location_price_currency,
        agenda_performers,
        agenda_image_id,
        agenda_image_url,
        agenda_image_alt,
        agenda_image_height,
        agenda_image_width,
        agenda_image,
        agenda_button_text,
        agenda_focalpoint,
        agenda_weekly_event
    ] )

    const removeLineupHandeler = (requestItem) =>{
        if(agenda_performers){
            let artists = []

            agenda_performers.map(
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

            console.log(artists)

            console.log('requestItem')
            console.log(requestItem)

            //setMeta( { ...meta, agenda_performers: artists } );

            editPost( 
                { 
                    meta: { 
                        agenda_performers: artists
                    } 
                } 
            )
        }
    }
    const changeLineupHandeler = (requestField, requestItem, requestValue) =>{
        artistPanel !== Number(requestItem) ? setArtistPanel(Number(requestItem)) : ''
        focusField !== requestField ? setFocusField(requestField) : ''
        //this.setState( { openArtistPanel: Number(requestItem) } )
        if(agenda_performers){
            
            let artists = []

            agenda_performers.map(
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

            console.log(artists)

            console.log('requestItem')
            console.log(requestItem)

            //setMeta( { ...meta, agenda_performers: artists } );

            editPost( 
                { 
                    meta: { 
                        agenda_performers: artists
                    } 
                } 
            )
        }
    }
    const lineupHandeler = () =>{
        if(agenda_performers){
            //const metaFieldValue = meta[ 'myguten_meta_block_field' ];

            //let artists = agenda_performers

            let artists = []

            agenda_performers.map(
                (performer, index) => {
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
                    })
                }
            )


            artists.push({
                artistname:'',
                artistsite:'',
                artistfacebook:'',
                artisttwitter:'',
                artistinstagram:'',
                artisttiktok:'',
                artistspotify:'',
                artistimusic:'',
                artistbeatport:'',
                artistsoundcloud:''
            })

            console.log(artists)

            //setMeta( { ...meta, agenda_performers: artists } );

            editPost( 
                { 
                    meta: { 
                        agenda_performers: artists
                    } 
                } 
            )
        }

    }

    /* image: imageInfo Media selector */
	const onSelectMedia = (imageInfo) => {
        
        console.log(agenda_image)
        console.log(imageInfo)


        let image = []

        image.push({
            id:imageInfo.id,
            url:imageInfo.url,
            alt:imageInfo.alt,
            height:imageInfo.height,
            width:imageInfo.width
        })


        console.log(image)

        editPost( { 
            meta: { 
                agenda_image: image
            } 
        } )
	}
		
	/* Removers */	
	const removeMedia = () => {
        
        let image = []

        /*image.push({
            id:-1,
            url:'',
            alt:'',
            height:-1,
            width:-1
        })*/

        editPost( { 
            meta: { 
                agenda_image: image
            } 
        } )
	}
    
    const LineupOutput = (props) =>{

        console.log(agenda_performers)
        console.log(metadata)
        console.log(props)
        console.log(props.artistPanel)
        console.log('props.artistPanel')
        console.log('props.focusField')
        var lineup = [];
        if(agenda_performers){
            for(var i=0; i<agenda_performers.length; i++){
                lineup.push(
                    <PanelBody
                        name={`artist-panel-${i}`}
                        data-artist={i}
                        className={`artist-panel-${i}`}
					    title={__('Artiest '+(i+1)+'', 'awp')}
                        initialOpen={ artistPanel === i ? true : false }
                        onToggle={
                            (e)=>{
                                console.log(e)
                            }
                        }
			        >
                        <div
                            className='row'
                        >
                            <div
                                className='col-12'
                            >
                                <a 
                                    href="#" 
                                    data-artist={`${i}`} 
                                    style={
                                        {
                                            color:'red'
                                        }
                                    }
                                    onClick={
                                        (e)=>{
                                            removeLineupHandeler(e.target.getAttribute('data-artist'))
                                        }
                                    } 
                                >
                                    Verwijder artiest
                                </a>
                                <div class="form-floating mb-3">
                                    <input 
                                        autoFocus={ Number(props.artistPanel) === i && props.focusField == 'artistname' ? true : false}
                                        type="text" 
                                        class="form-control" 
                                        id={`artistname${i}`} 
                                        value={agenda_performers[i].artistname} 
                                        placeholder="Naam"
                                        data-artist={`${i}`} 
                                        onChange={
                                            (e)=>{
                                                changeLineupHandeler('artistname', e.target.getAttribute('data-artist'), e.target.value)
                                            }
                                        }
                                    />
                                    <label for={`artistname${i}`}>Naam</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input 
                                        autoFocus={ Number(props.artistPanel) === i && props.focusField == 'artistsite' ? true : false}
                                        type="text" 
                                        class="form-control" 
                                        id={`artistsite${i}`} 
                                        value={agenda_performers[i].artistsite} 
                                        placeholder="Website"
                                        data-artist={`${i}`} 
                                        onChange={
                                            (e)=>{
                                                changeLineupHandeler('artistsite', e.target.getAttribute('data-artist'), e.target.value)
                                            }
                                        }
                                    />
                                    <label for={`artistsite${i}`}>Website</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input 
                                        autoFocus={ Number(props.artistPanel) === i && props.focusField == 'artistfacebook' ? true : false}
                                        type="text" 
                                        class="form-control" 
                                        id={`artistfacebook${i}`}  
                                        value={agenda_performers[i].artistfacebook} 
                                        placeholder="Facebook"
                                        data-artist={`${i}`} 
                                        onChange={
                                            (e)=>{
                                                changeLineupHandeler('artistfacebook', e.target.getAttribute('data-artist'), e.target.value)
                                            }
                                        }
                                    />
                                    <label for={`artistfacebook${i}`}>Facebook</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input 
                                        autoFocus={ Number(props.artistPanel) === i && props.focusField == 'artisttwitter' ? true : false}
                                        type="text" 
                                        class="form-control" 
                                        id={`artisttwitter${i}`}  
                                        value={agenda_performers[i].artisttwitter} 
                                        placeholder="Twitter"
                                        data-artist={`${i}`} 
                                        onChange={
                                            (e)=>{
                                                changeLineupHandeler('artisttwitter', e.target.getAttribute('data-artist'), e.target.value)
                                            }
                                        }
                                    />
                                    <label for={`artisttwitter${i}`}>Twitter</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input 
                                        autoFocus={ Number(props.artistPanel) === i && props.focusField == 'artistinstagram' ? true : false}
                                        type="text" 
                                        class="form-control" 
                                        id={`artistinstagram${i}`}  
                                        value={agenda_performers[i].artistinstagram} 
                                        placeholder="Instagram"
                                        data-artist={`${i}`} 
                                        onChange={
                                            (e)=>{
                                                changeLineupHandeler('artistinstagram', e.target.getAttribute('data-artist'), e.target.value)
                                            }
                                        }
                                    />
                                    <label for={`artistinstagram${i}`}>Instagram</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input 
                                        autoFocus={ Number(props.artistPanel) === i && props.focusField == 'artisttiktok' ? true : false}
                                        type="text" 
                                        class="form-control" 
                                        id={`artisttiktok${i}`} 
                                        value={agenda_performers[i].artisttiktok} 
                                        placeholder="Tiktok"
                                        data-artist={`${i}`} 
                                        onChange={
                                            (e)=>{
                                                changeLineupHandeler('artisttiktok', e.target.getAttribute('data-artist'), e.target.value)
                                            }
                                        }
                                    />
                                    <label for={`artisttiktok${i}`}>Tiktok</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input 
                                        autoFocus={ Number(props.artistPanel) === i && props.focusField == 'artistspotify' ? true : false}
                                        type="text" 
                                        class="form-control" 
                                        id={`artistspotify${i}`} 
                                        value={agenda_performers[i].artistspotify} 
                                        placeholder="Spotify"
                                        data-artist={`${i}`} 
                                        onChange={
                                            (e)=>{
                                                changeLineupHandeler('artistspotify', e.target.getAttribute('data-artist'), e.target.value)
                                            }
                                        }
                                    />
                                    <label for={`artistspotify${i}`}>Spotify</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input 
                                        autoFocus={ Number(props.artistPanel) === i && props.focusField == 'artistimusic' ? true : false}
                                        type="text" 
                                        class="form-control" 
                                        id={`artistimusic${i}`} 
                                        value={agenda_performers[i].artistimusic} 
                                        placeholder="iMusic"
                                        data-artist={`${i}`} 
                                        onChange={
                                            (e)=>{
                                                changeLineupHandeler('artistimusic', e.target.getAttribute('data-artist'), e.target.value)
                                            }
                                        }
                                    />
                                    <label for={`artistimusic${i}`}>iMusic</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input 
                                        autoFocus={ Number(props.artistPanel) === i && props.focusField == 'artistbeatport' ? true : false}
                                        type="text" 
                                        class="form-control" 
                                        id={`artistbeatport${i}`} 
                                        value={agenda_performers[i].artistbeatport} 
                                        placeholder="Beatport"
                                        data-artist={`${i}`} 
                                        onChange={
                                            (e)=>{
                                                changeLineupHandeler('artistbeatport', e.target.getAttribute('data-artist'), e.target.value)
                                            }
                                        }
                                    />
                                    <label for={`artistbeatport${i}`}>Beatport</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input 
                                        autoFocus={ Number(props.artistPanel) === i && props.focusField == 'artistsoundcloud' ? true : false}
                                        type="text" 
                                        class="form-control" 
                                        id={`artistsoundcloud${i}`} 
                                        value={agenda_performers[i].artistsoundcloud} 
                                        placeholder="Soundcloud"
                                        data-artist={`${i}`} 
                                        onChange={
                                            (e)=>{
                                                changeLineupHandeler('artistsoundcloud', e.target.getAttribute('data-artist'), e.target.value)
                                            }
                                        }
                                    />
                                    <label for={`artistsoundcloud${i}`}>Soundcloud</label>
                                </div>
                            </div>
                        </div>
                    </PanelBody>
                )

                if(i === agenda_performers.length-1){
                    return(
                        <>
                            { lineup }
                        </>
                    )
                }
            }
        }
        
    }

    return(
        <>
        <PluginDocumentSettingPanel
            name="custom-panel-1"
            title="Agenda overzicht afbeeling"
            className="custom-panel-1"
        >
            <MediaUploadCheck>
			    <MediaUpload
					onSelect={onSelectMedia}
					value={ agenda_image.length > 0 ? agenda_image[0].id : null}
					allowedTypes={ ['image'] }
					render={
			  		    ({open}) => (
						    <Button 
							    className={
                                    agenda_image.length > 0 ? (
								        ( agenda_image[0].url === '' ||  agenda_image[0].url === undefined ) ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview'
                                    ) : 'editor-post-featured-image__toggle'
								}
								onClick={
								    open
								}
							>
							    {
                                    agenda_image.length > 0? (
							            (agenda_image[0].url === '' ||  agenda_image[0].url) === undefined ? __('Choose an image', 'awp') : ''
                                    ) : __('Choose an image', 'awp')
							    }
							    {
                                    agenda_image.length > 0 ? (
								        (agenda_image[0].url !== '' && agenda_image[0].url !== undefined) ? ( 
						                    <ResponsiveWrapper
									            naturalWidth={ agenda_image[0].width }
										        naturalHeight={ agenda_image[0].height }
									        >
									            <img 
										            src={ agenda_image[0].url }
										        />
									        </ResponsiveWrapper>
								        )
								        : ''
                                    ) : '' 
						        }
							</Button>
						)
					}
				/>
            </MediaUploadCheck>
            {
                 agenda_image.length > 0 ? (
			        (agenda_image[0].url !== '' && agenda_image[0].url !== undefined) ? (
							
				        <MediaUploadCheck>
					        <MediaUpload
						        title={__('Replace image', 'awp')}
							    value={agenda_image[0].id}
							    onSelect={onSelectMedia}
							    allowedTypes={['image']}
							    render={
							        ({open}) => (
								        <Button 
									        onClick={
										        open
										    }
										    isDefault 
										    //isLarge
									    >
									        {__('Replace image', 'awp')}
									    </Button>
								    )
							    }
						    />
					    </MediaUploadCheck>
				    ) : ''
                ) : ''
			}
			{
                agenda_image.length > 0 ? (
			        (agenda_image[0].url !== '' && agenda_image[0].url !== undefined) ? ( 
				        <MediaUploadCheck>
					        <Button 
                                onClick={removeMedia} 
                                isLink 
                                isDestructive>{__('Remove image', 'awp')}
						    </Button>
				        </MediaUploadCheck>
			        ) : ''
                ) : ''
			}
			{
                agenda_image.length > 0 ? (
			        (agenda_image[0].url !== '' && agenda_image[0].url !== undefined) ? ( 
				        <>
                            <FocalPointPicker
                                url={ agenda_image[0].url }
                                value={agenda_focalpoint[0]}
                                onChange={ ( focalPoint ) => 
                                    editPost( { 
                                        meta: { 
                                            agenda_focalpoint: [
                                                {
                                                    x:focalPoint.x,
                                                    y:focalPoint.y
                                                }
                                            ]
                                    } 
                                } )
                                }
                            />
                        </>
			        ) : ''
                ) : ''
			}
            {
                agenda_focalpoint.length > 0 && agenda_image.length > 0 ? (
                    <div>
                    <p>Voorbeeld header afbeelding</p>
                    <img 
                        src={agenda_image[0].url } 
                        style={ 
                            {
                                objectPosition: `${ agenda_focalpoint[0].x * 100 }% ${ agenda_focalpoint[0].y * 100 }%`,
                                aspectRatio: `465/166`,
                                objectFit: `cover`
                            } 
                        } 
                    />
                    <p>Voorbeeld overzichtpagina</p>
                    <img 
                        src={agenda_image[0].url } 
                        style={ 
                            {
                                objectPosition: `${ agenda_focalpoint[0].x * 100 }% ${ agenda_focalpoint[0].y * 100 }%`,
                                aspectRatio: `1/1`,
                                objectFit: `cover`
                            } 
                        } 
                    />
                    </div>
                ) : (
                    agenda_image.length > 0 ? (
                        <div>
                        <p>Voorbeeld header afbeelding</p>
                        <img 
                            src={agenda_image[0].url } 
                            style={ 
                                {
                                    objectPosition: `50% 50%`,
                                    aspectRatio: `465/166`,
                                    objectFit: `cover`
                                } 
                            } 
                        />
                        <p>Voorbeeld overzichtpagina</p>
                        <img 
                            src={agenda_image[0].url } 
                            style={ 
                                {
                                    objectPosition: `${ agenda_focalpoint[0].x * 100 }% ${ agenda_focalpoint[0].y * 100 }%`,
                                    aspectRatio: `1/1`,
                                    objectFit: `cover`
                                } 
                            } 
                        />
                        </div>
                    ) : ''
                )
            }

        </PluginDocumentSettingPanel>
        <PluginDocumentSettingPanel
            name="custom-panel-1"
            title="Agenda item gegevens"
            className="custom-panel-1"
        >
            <TextControl
                label="Titel agenda item"
                value={ agenda_name }
                onChange={ ( newValue ) =>
                    editPost( { 
                        meta: { 
                            agenda_name: newValue
                    } 
                } )
                }
            />
            <ToggleControl
	            label={__('Wekelijks evenement')}
	            help={ 
                    agenda_weekly_event ? 'Ja' : 'Nee'
                }
	            checked={ agenda_weekly_event }
	            onChange={ (e) =>
                    editPost( { 
                        meta: { 
                            agenda_weekly_event: ! agenda_weekly_event
                    }
                })
                }
            />
            <Spacer
                marginY='5'
            >
                <Text variant="label">Startdatum</Text>
            </Spacer>
            <DateTimePicker
	            currentDate={ agenda_start_date ? agenda_start_date : new Date() }
	            onChange={ ( date ) => 
                    editPost( { 
                        meta: { 
                            agenda_start_date: date
                        } 
                    } )
                }
	            // is12Hour
            />
            <Spacer
                marginY='5'
            >
                <Text variant="label">Einddatum</Text>
            </Spacer>
            <DateTimePicker
	            currentDate={ agenda_end_date ? agenda_end_date : new Date() }
	            onChange={ ( date ) => 
                    editPost( { 
                        meta: { 
                            agenda_end_date: date
                        } 
                    } )
                }
	            // is12Hour
            />
            <TextControl
                label="Prijs"
                value={ agenda_ticket_price }
                onChange={ ( newValue ) =>
                    editPost( { 
                        meta: { 
                            agenda_ticket_price: newValue
                        } 
                    } )
                }
            />
            <TextControl
                label="Naam locatie"
                value={ agenda_location_name }
                onChange={ ( newValue ) =>
                    editPost( { 
                        meta: { 
                            agenda_location_name: newValue
                        } 
                    } )
                }
            />
            <TextControl
                label="Website locatie"
                value={ agenda_location_same_as }
                onChange={ ( newValue ) =>
                    editPost( { 
                        meta: { 
                            agenda_location_same_as: newValue
                        } 
                    } )
                }
            />
            <TextControl
                label="Adres"
                value={ agenda_location_address }
                onChange={ ( newValue ) =>
                    editPost( { 
                        meta: { 
                            agenda_location_address: newValue
                        } 
                    } )
                }
            />
            <TextControl
                label="Button tekst"
                value={ agenda_button_text }
                onChange={ ( newValue ) =>
                    editPost( { 
                        meta: { 
                            agenda_button_text: newValue
                        } 
                    } )
                }
            />
            <div
                className='custom-link-control'
            >
			<LinkControl
				searchInputPlaceholder="Button link..."
				value={ agenda_link.length > 0 ? agenda_link[0] : '' }
				settings={[]}
				onChange={ 
					( newPost ) => {
                        console.log(newPost)
                        console.log('newPost')
                        let link = []
                        if(newPost.type == 'mailto'){
                            link.push({
                                id: newPost.id & Number(newPost.id) ? newPost.id : Number(Date.now()),
                                kind: newPost.kind ? newPost.kind : 'custom-mailto',
                                title: newPost.title ? newPost.title : null,
							    type: newPost.type ? newPost.type : null,
							    url: newPost.url ? newPost.url : null
                            })
                        }
                        else if(newPost.type == 'url'){
                            link.push({
                                id: newPost.id && Number(newPost.id) ? newPost.id : Number(Date.now()),
                                kind: newPost.kind ? newPost.kind : 'custom-url',
                                title: newPost.title ? newPost.title : null,
							    type: newPost.type ? newPost.type : null,
							    url: newPost.url ? newPost.url : null
                            })
                        }
                        else{
                            link.push({
                                id: newPost.id ? newPost.id : Number(Date.now()),
                                kind: newPost.kind ? newPost.kind : 'custom-link',
                                title: newPost.title ? newPost.title : null,
							    type: newPost.type ? newPost.type : null,
							    url: newPost.url ? newPost.url : null
                            })
                        }

                        editPost( { 
                            meta: { 
                                agenda_link: link
                            } 
                        } ) 
                        }
				}
				withCreateSuggestion={false}
				createSuggestion={ 
					(inputValue) => {
                        console.log(inputValue)
                        console.log('inputValue')
                        let link = []
                        link.push({
							id: Number(Date.now()),
                            kind: "custumurl",
                            title: inputValue,
							type: "custom-url",
							url: inputValue
                        })
                        editPost( { 
                            meta: { 
                                agenda_link: link
                            } 
                        } )
                    }
				}
				noDirectEntry={false}
				suggestionsQuery={ {
					type: 'post',
					subtype: 'courses',
				} }
				createSuggestionButtonText={ 
					(newValue) => `${__("New:")} ${newValue}` 
				}
			>
			</LinkControl>
			</div>
        </PluginDocumentSettingPanel>
        </>
    )
}

export const settings = {
	render: AgendaMetaFields,
    icon: 'palmtree'
}

export const init = () => initPlugin({
	name,
	settings
})