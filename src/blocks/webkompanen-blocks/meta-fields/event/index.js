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
import { useBlockProps } from '@wordpress/block-editor';
import { compose } from '@wordpress/compose';
import { PanelRow, TextControl, Button, PanelBody, DateTimePicker } from '@wordpress/components';

import initPlugin from '../../utils/init-register-plugin'

const name = 'meta-fields-event';

const EventMetaFields = () => {
        
    const [ artistPanel, setArtistPanel ] = useState(false);
    const [ focusField, setFocusField ] = useState(false);

    //const blockProps = useBlockProps();

    const postType = useSelect(
        ( select ) => select( 'core/editor' ).getCurrentPostType(),
        []
    );

    console.log('postType');

    const [ metadata, setMeta ] = useEntityProp( 'postType', postType, 'meta' );

    if ( 'events' !== postType ) return null;  

    const { 
        meta, 
        event_name, 
        event_start_date, 
        event_location_name, 
        event_location_same_as, 
        event_location_address, 
        event_ticket_price,
        event_ticket_url,
        event_location_price_currency,
        event_performers
    } = useSelect( select => {
        const meta = select( 'core/editor' ).getEditedPostAttribute( 'meta' );
		const event_name = select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ 'event_name' ];
		const event_start_date = select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ 'event_start_date' ];
		const event_location_name = select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ 'event_location_name' ];
        const event_location_same_as = select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ 'event_location_same_as' ];
        const event_location_address = select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ 'event_location_address' ];
        const event_ticket_url = select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ 'event_ticket_url' ];
        const event_ticket_price = select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ 'event_ticket_price' ];
        const event_location_price_currency = select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ 'event_location_price_currency' ];
        const event_performers = select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ 'event_performers' ];

		return {
			meta: meta,
			event_name: event_name,
			event_start_date: event_start_date,
			event_location_name: event_location_name,
            event_location_same_as: event_location_same_as,
            event_location_address: event_location_address,
            event_ticket_url: event_ticket_url,
            event_ticket_price: event_ticket_price,
            event_location_price_currency: event_location_price_currency,
            event_performers: event_performers
		}
	})

    const { editPost } = useDispatch( 'core/editor', [ 
        event_name, 
        event_start_date, 
        event_location_name, 
        event_location_same_as, 
        event_location_address, 
        event_ticket_price,
        event_ticket_url,
        event_location_price_currency,
        event_performers
    ] )

    const removeLineupHandeler = (requestItem) =>{
        if(event_performers){
            let artists = []

            event_performers.map(
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

            //setMeta( { ...meta, event_performers: artists } );

            editPost( 
                { 
                    meta: { 
                        event_performers: artists
                    } 
                } 
            )
        }
    }
    const changeLineupHandeler = (requestField, requestItem, requestValue) =>{
        artistPanel !== Number(requestItem) ? setArtistPanel(Number(requestItem)) : ''
        focusField !== requestField ? setFocusField(requestField) : ''
        //this.setState( { openArtistPanel: Number(requestItem) } )
        if(event_performers){
            let artists = []

            event_performers.map(
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

            //setMeta( { ...meta, event_performers: artists } );

            editPost( 
                { 
                    meta: { 
                        event_performers: artists
                    } 
                } 
            )
        }
    }
    const lineupHandeler = () =>{
        if(event_performers){
            //const metaFieldValue = meta[ 'myguten_meta_block_field' ];

            //let artists = event_performers

            let artists = []

            event_performers.map(
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

            //setMeta( { ...meta, event_performers: artists } );

            editPost( 
                { 
                    meta: { 
                        event_performers: artists
                    } 
                } 
            )
        }

    }
    
    const LineupOutput = (props) =>{

        console.log(event_performers)
        console.log(metadata)
        console.log(props)
        console.log(props.artistPanel)
        console.log('props.artistPanel')
        console.log('props.focusField')
        var lineup = [];
        if(event_performers){
            for(var i=0; i<event_performers.length; i++){
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
                                        value={event_performers[i].artistname} 
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
                                        value={event_performers[i].artistsite} 
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
                                        value={event_performers[i].artistfacebook} 
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
                                        value={event_performers[i].artisttwitter} 
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
                                        value={event_performers[i].artistinstagram} 
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
                                        value={event_performers[i].artisttiktok} 
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
                                        value={event_performers[i].artistspotify} 
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
                                        value={event_performers[i].artistimusic} 
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
                                        value={event_performers[i].artistbeatport} 
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
                                        value={event_performers[i].artistsoundcloud} 
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

                if(i === event_performers.length-1){
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
            title="Event gegevens"
            className="custom-panel-1"
        >
            <TextControl
                label="Naam"
                value={ event_name }
                onChange={ ( newValue ) =>
                    editPost( { 
                        meta: { 
                            event_name: newValue
                    } 
                } )
                }
            />
            <DateTimePicker
                label="Startdatum"
	            currentDate={ event_start_date ? event_start_date : new Date() }
	            onChange={ ( date ) => 
                    editPost( { 
                        meta: { 
                            event_start_date: date
                        } 
                    } )
                }
	            // is12Hour
            />
        </PluginDocumentSettingPanel>
        <PluginDocumentSettingPanel
            name="custom-panel-2"
            title="Event locatie gegevens"
            className="custom-panel-2"
        >
            <TextControl
                label="Naam"
                value={ event_location_name }
                onChange={ ( newValue ) =>
                    editPost( { 
                        meta: { 
                            event_location_name: newValue
                        } 
                    } )
                }
            />
            <TextControl
                label="Website"
                value={ event_location_same_as }
                onChange={ ( newValue ) =>
                    editPost( { 
                        meta: { 
                            event_location_same_as: newValue
                        } 
                    } )
                }
            />
            <TextControl
                label="Adres"
                value={ event_location_address }
                onChange={ ( newValue ) =>
                    editPost( { 
                        meta: { 
                            event_location_address: newValue
                        } 
                    } )
                }
            />
        </PluginDocumentSettingPanel>
        <PluginDocumentSettingPanel
            name="custom-panel-3"
            title="Kaart verkoop"
            className="custom-panel-3"
        >
            <TextControl
                label="Online voorverkoop"
                value={ event_ticket_url }
                onChange={ ( newValue ) =>
                    editPost( { 
                        meta: { 
                            event_ticket_url: newValue
                        } 
                    } )
                }
            />
            <TextControl
                label="Prijs"
                value={ event_ticket_price }
                onChange={ ( newValue ) =>
                    editPost( { 
                        meta: { 
                            event_ticket_price: newValue
                        } 
                    } )
                }
            />
            <TextControl
                label="Munteenheid/ valuta"
                value={ event_location_price_currency }
                onChange={ ( newValue ) =>
                    editPost( { 
                        meta: { 
                            event_location_price_currency: newValue
                        } 
                    } )
                }
            />
        </PluginDocumentSettingPanel>
        <PluginDocumentSettingPanel
            name="custom-panel-4"
            title="Lineup"
            className="custom-panel-4"
        >
            <LineupOutput artistPanel={artistPanel} focusField={focusField} />
            <Button 
                isPrimary
                onClick={
                    ()=>{ lineupHandeler(artistPanel, focusField) }
                }
            >
                Voeg artiest toe
            </Button>
        </PluginDocumentSettingPanel>
        </>
    )
}

export const settings = {
	render: EventMetaFields,
    icon: 'palmtree'
}

export const init = () => initPlugin({
	name,
	settings
})