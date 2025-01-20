/**
 * WordPress dependencies
 */
import { PluginDocumentSettingPanel } from '@wordpress/editor';
import { Wrapper, Status } from '@googlemaps/react-wrapper';
import { GoogleMap, useLoadScript, Marker, Autocomplete as AutocompleteNormal, useJsApiLoader } from '@react-google-maps/api';
import Autocomplete from 'react-google-autocomplete';
import { React, useEffect, useRef, ReactElement, useMemo } from "react";
import ReactDOM from "react-dom";
import {
	registerBlockType
	
} from '@wordpress/blocks';

import { 
	useSelect, useDispatch, withSelect
} from '@wordpress/data';

import { 
	sprintf, __ 
} from '@wordpress/i18n';

import {
	__experimentalLinkControl as LinkControl,
	InnerBlocks,
	useBlockProps,
	BlockControls,
	MediaUpload, 
	MediaUploadCheck,
	InspectorControls,
	RichText,
	PanelColorSettings,
	withColors,
	useInnerBlocksProps,
	getColorClassName,
	store as blockEditorStore
	
} from '@wordpress/block-editor';

import {
	link
} from '@wordpress/icons';

import {
	useState,
	Fragment,
	RawHTML
} from '@wordpress/element';

import {
	__experimentalInputControl as InputControl,
	ToggleControl,
	PanelBody,
	PanelRow,
	CheckboxControl,
	SelectControl,
	ColorPicker,
	Popover,
	IconButton,
	Button,
	ButtonGroup,
	ResponsiveWrapper,
	Toolbar
} from '@wordpress/components';

/*function HeaderEdit( props ) {*/
const googleMapsEdit = (props) => {
	const {
		attributes,
		setAttributes,
		className,
		clientId
	} = props;
	let autocomplete = null

	//https://codesandbox.io/s/react-google-maps-api-multiple-markers-infowindow-forked-dpueyy?file=/src/App.js:165-231
	//https://maps.googleapis.com/maps/api/staticmap?size=512x512&maptype=roadmap\&markers=size:mid%7Ccolor:red%7C62.107733,-145.541936&key=YOUR_API_KEY
	const [searchResult, setSearchResult] = useState("Result: none");

	const selectedBlock = useSelect(
		( select ) => select( 'core/block-editor' ).getSelectedBlock()
	  );
	
	  useEffect( () => {
		console.log( selectedBlock );
		console.log( 'selectedBlock' );
	  }, [ selectedBlock ] );

	const siteinfo = useSelect( ( select ) =>
		select('core').getSite()
	);

    if ( ! attributes.blockId ) {
        setAttributes( { blockId: clientId } );
    }

	const ALLOWED_BLOCKS = [ 
		'webkompanen/paragraph',
		'webkompanen/div',
		'webkompanen/image',
		'webkompanen/heading',
		'webkompanen/blockquote',
		'webkompanen/ul',
		'webkompanen/ol',
		'webkompanen/youtube'
	]
	
	const hasInnerBlocks = useSelect( ( select ) =>
		select( blockEditorStore ).getBlocks( clientId ).length > 0,
		[ clientId ]
	);

	const classes = attributes.classes ? attributes.classes : ''
	const mapwidth = attributes.mapwidth ? attributes.mapwidth : '100%'
	const mapheight = attributes.mapheight ? attributes.mapheight : '400px'
	const maplatitude = attributes.latitude ? attributes.latitude : '51.3638725'
	const maplongitude = attributes.longitude ? attributes.longitude : '5.3228256'
	const mapzoom = attributes.zoom ? attributes.zoom : 17

	let blockClasses = 'googlemaps';

	blockClasses += classes != null && classes != '' ? ' '+classes : ''
	blockClasses += attributes.height != null && attributes.height != '' ? ' '+attributes.height : ''
	blockClasses += attributes.viewheight != null && attributes.viewheight != '' ? ' '+attributes.viewheight : ''
	blockClasses += attributes.width != null && attributes.width != '' ? ' '+attributes.width : ''

	blockClasses = blockClasses.replace(/^\s+|\s+$/gm,'');
	blockClasses = blockClasses.replace(/\s+\s+/gm,' ');
	blockClasses = blockClasses == '' ? null : blockClasses
	
	const blockProps = useBlockProps( { className: blockClasses } );
	//https://wordpress.stackexchange.com/questions/367932/create-a-custom-render-appender-button-to-add-inner-blocks
	const innerBlocksProps = useInnerBlocksProps(
			{ ...blockProps },{ 
			allowedBlocks: ALLOWED_BLOCKS,
			renderAppender: hasInnerBlocks ? InnerBlocks.BlockListAppender : InnerBlocks.ButtonBlockAppender,
			orientation: 'vertical',
			templateLock: false
	}
    );


    const removeMarkerHandeler = (requestItem) =>{
		console.log('requestItem')
		console.log('removeMarkerHandeler')
        if(attributes.locations){
            let locations = []

            attributes.locations.map(
                (location, index) => {
                    index !== Number(requestItem) ? 
                    locations.push({
                        latitude:Number(location.latitude),
                        longitude:Number(location.longitude)
                    }):''
                }
            )

            setAttributes({
				locations: locations 
			}) 
        }
    }
	const changeMarker = (requestLat, requestLng, requestItem) =>{
		attributes.locationPanel !== Number(requestItem) ? setAttributes({
			locationPanel: Number(requestItem) 
		}) : null
		
		if(attributes.locations){
			let locations = []

			attributes.locations.map(
                (location, index) => {
                    index !== Number(requestItem) ? 
                    locations.push({
                        latitude:Number(location.latitude),
                        longitude:Number(location.longitude)
                    }):
                    locations.push({
                        latitude:Number(requestLat),
                        longitude:Number(requestLng)
                    })
                }
            )

			setAttributes({
				locations: locations 
			}) 
		}
	}
	
	const changeMarkerHandelerNew = (requestField, requestItem, requestValue) =>{

        //locationPanel !== Number(requestItem) ? setArtistPanel(Number(requestItem)) : ''
        //focusField !== requestField ? setFocusField(requestField) : ''
        //this.setState( { openArtistPanel: Number(requestItem) } )
        if(attributes.locations){
            
            let locations = []

            attributes.locations.map(
                (location, index) => {
                    index !== Number(requestItem) ? 
                    locations.push({
                        latitude:Number(location.latitude),
                        longitude:Number(location.longitude)
                    }):
                    locations.push({
                        latitude:requestField == 'latitude' ? Number(requestValue) : Number(location.latitude),
                        longitude:requestField == 'longitude' ? Number(requestValue) : Number(location.longitude)
                    })
                }
            )

            //console.log(artists)

            //console.log('requestItem')
            //console.log(requestItem)

            //setMeta( { ...meta, agenda_performers: artists } );

            setAttributes({
				locations: locations 
			}) 
        }
    }
	
    const changeMarkerHandeler = (requestField, requestItem, requestValue) =>{
		attributes.locationPanel !== Number(requestItem) ? setAttributes({
			locationPanel: Number(requestItem) 
		}) : null
		attributes.focusField !== requestField ? setAttributes({
			focusField: requestField 
		}) : null

        //locationPanel !== Number(requestItem) ? setArtistPanel(Number(requestItem)) : ''
        //focusField !== requestField ? setFocusField(requestField) : ''
        //this.setState( { openArtistPanel: Number(requestItem) } )
        if(attributes.locations){
            
            let locations = []

            attributes.locations.map(
                (location, index) => {
                    index !== Number(requestItem) ? 
                    locations.push({
                        latitude:Number(location.latitude),
                        longitude:Number(location.longitude)
                    }):
                    locations.push({
                        latitude:requestField == 'latitude' ? Number(requestValue) : Number(location.latitude),
                        longitude:requestField == 'longitude' ? Number(requestValue) : Number(location.longitude)
                    })
                }
            )

            //console.log(artists)

            //console.log('requestItem')
            //console.log(requestItem)

            //setMeta( { ...meta, agenda_performers: artists } );

            setAttributes({
				locations: locations 
			}) 
        }
    }

	const markerHandeler = () =>{
		console.log('markerHandeler')
        if(attributes.locations){
            //const metaFieldValue = meta[ 'myguten_meta_block_field' ];

            //let artists = event_performers

            let locations = []

            attributes.locations.map(
                (location, index) => {
                    locations.push({
                        latitude:Number(location.latitude),
                        longitude:Number(location.longitude)
                    })
                }
            )


            locations.push({
                latitude:'',
                longitude:''
            })

            //console.log(artists)

            //setMeta( { ...meta, event_performers: artists } );

            setAttributes({
				locations: locations 
			}) 
        }
		else{
			let locations = []

			locations.push({
                latitude:'',
                longitude:''
            })

			setAttributes({
				locations: locations 
			}) 
		}

    }

	const MarkersOutput = (props) =>{
		
        //console.log(event_performers)
        //console.log(metadata)
        //console.log(props)
        //console.log(props.locationPanel)
        //console.log('props.locationPanel')
        //console.log('props.focusField')
        var markerinputs = [];
        if(attributes.locations){
            for(var i=0; i<attributes.locations.length; i++){
                markerinputs.push(
                    <PanelBody
                        name={`location-panel-${i}`}
                        className={`location-panel-${i}`}
					    title={__('Locatie '+(i+1)+'', 'webkompanen')}
                        initialOpen={ attributes.locationPanel === i ? true : false }
						children={'test'}
                        onToggle={
                            (e, props)=>{
								console.log(e, props)
								if(!(e)){
									setAttributes({
										locationPanel: null
									})
								}
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
                                    data-location={`${i}`} 
                                    style={
                                        {
                                            color:'red'
                                        }
                                    }
                                    onClick={
                                        (e)=>{
                                            removeMarkerHandeler(e.target.getAttribute('data-location'))
                                        }
                                    } 
                                >
                                    Verwijder locatie
                                </a>
                                <div class="form-floating mb-3">
                                    <input 
                                        autoFocus={ Number(attributes.locationPanel) === i && attributes.focusField == 'latitude' ? true : false}
										onBlur={
											()=>{
												setAttributes({
													focusField: null 
												})
											}
										}
                                        type="number" 
                                        class="form-control" 
                                        id={`latitude${i}`} 
                                        value={Number(attributes.locations[i].latitude)} 
                                        placeholder="Latitude"
                                        data-location={`${i}`} 
                                        onChange={
                                            (e)=>{
                                                changeMarkerHandeler('latitude', e.target.getAttribute('data-location'), e.target.value)
                                            }
                                        }
                                    />
                                    <label for={`latitude${i}`}>Latitude</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input 
                                        autoFocus={ Number(attributes.locationPanel) === i && attributes.focusField == 'longitude' ? true : false}
										onBlur={
											()=>{
												setAttributes({
													focusField: null 
												})
											}
										}
                                        type="number" 
                                        class="form-control" 
                                        id={`longitude${i}`}
                                        value={Number(attributes.locations[i].longitude)} 
                                        placeholder="Longitude"
                                        data-location={`${i}`} 
                                        onChange={
                                            (e)=>{
                                                changeMarkerHandeler('longitude', e.target.getAttribute('data-location'), e.target.value)
                                            }
                                        }
                                    />
                                    <label for={`longitude${i}`}>Longitude</label>
                                </div>
								<div class="form-floating mb-3">
									<Autocomplete
										data-location={`${i}`}
                                        id={`autocomplete${i}`}
										placeholder="Zoeken..."
										class="form-control" 
										apiKey={siteinfo.googleMapsAPIKey}
										onPlaceSelected={
											(place, inputRef) => {
												console.log(inputRef.getAttribute('data-location'))
												console.log(place.geometry.location.lat())
												console.log(place.geometry.location.lng())
												changeMarker(place.geometry.location.lat(), place.geometry.location.lng(), inputRef.getAttribute('data-location'))
											}
										}
          							/>
									<label for={`longitude${i}`}>Zoeken...</label>
								</div>
                            </div>
                        </div>
                    </PanelBody>
                )

                if(i === attributes.locations.length-1){
                    return(
                        <>
                            { markerinputs }
                        </>
                    )
                }
            }
        }
        
    }

	const GetMarkers = (props) =>{
		console.log('GetMarkers')
		var markers = [];

		const maplat = attributes.latitude ? Number(attributes.latitude) : 51.3638725
		const maplng = attributes.longitude ? Number(attributes.longitude) : 5.3228256
		//console.log(lat)
		//console.log(lng)
		//console.log(zoom)
		
		const mapcenter = useMemo(()=>({ lat: maplat, lng: maplng }), []);
		const position = { lat: maplng, lng: maplng };
		

		markers.push(
			<Marker 
				key={0} 
				position={mapcenter}
			/>
		)

        if(attributes.locations){
            for(var i=0; i<attributes.locations.length; i++){
				console.log('longitude')
				console.log('latitude')
				console.log(attributes.locations[i].latitude)
				console.log(attributes.locations[i].longitude)
				let maplat =  Number(attributes.locations[i].latitude)
				let maplon =  Number(attributes.locations[i].longitude)
				let centermap = useMemo(()=>({ lat: maplat, lng: maplon }), []);

				markers.push(
					<Marker 
						key={i + 1}
						position={centermap}
					/>
				)

		

				if(i === attributes.locations.length-1){
					console.log('markers')
					console.log(markers)
					return(<>{ markers }</>)
				}
			}
		}
	}
	
	function Map(){
		console.log('siteinfo')
		console.log(siteinfo)
		//console.log(attributes.zoom)
		//console.log('attributes.zoom')
		//console.log(attributes.latitude)
		//console.log('attributes.latitude')
		//console.log(attributes.longitude)
		//console.log('attributes.longitude')
		const lat = attributes.latitude ? Number(attributes.latitude) : 51.3638725
		const lng = attributes.longitude ? Number(attributes.longitude) : 5.3228256
		const zoom = attributes.zoom ? Number(attributes.zoom) : 17
		//console.log(lat)
		//console.log(lng)
		//console.log(zoom)
		
		const center = useMemo(()=>({ lat: lat, lng: lng }), []);
		const position = { lat: lat, lng: lng };
		
		return(
			<GoogleMap
				center={center}
				zoom={zoom}
				mapContainerClassName="w-100"
				mapContainerStyle={
					{
						'width':'100%',
						'height':'400px'
					}
				}
			>
				<GetMarkers/>
			</GoogleMap>
		)
	}
	
	const onLoad = (autocomplete)=> {
    	console.log('autocomplete: ', autocomplete)

    	setSearchResult(autocomplete);
  	}

  	const onPlaceChanged = ()=> {
    	if (searchResult !== null) {
			console.log('searchResult')
			console.log(searchResult);
      		console.log(searchResult.getPlace())
			
			const place = searchResult.getPlace()
			console.log(place.geometry.location.lat())
			console.log(place.geometry.location.lng())
			
			setAttributes({
				latitude: Number(place.geometry.location.lat()),
				longitude: Number(place.geometry.location.lng())
			})

    	} else {
      		console.log('Autocomplete is not loaded yet!')
    	}
  	}
	
	return(
		<>		
			<Fragment>		
				<InspectorControls>
					<PanelBody
						title={__('Google Maps settings', 'webkompanen')}
						initialOpen={false}
						className="position-relative"
					>
						<ToggleControl
							label={__('Static map', 'webkompanen')}
							help={ true ? '' : '' }
							checked={ attributes.staticmap }
							onChange={ 
								(e) => { 
									setAttributes({
										staticmap: ! attributes.staticmap 
									}) 
								}
							}
						/>
						<InputControl
							label={__('Latitude', 'webkompanen')}
							labelPosition="top"
							value={attributes.latitude ? attributes.latitude : 51.3638725}
							type="number"
							onChange={ 
								( nextValue ) => {
									setAttributes({
										latitude: Number(nextValue)
									})
								}
							}
						/>
						<InputControl
							label={__('Longitude', 'webkompanen')}
							labelPosition="top"
							value={attributes.longitude ? attributes.longitude : 5.3228256}
							type="number"
							onChange={ 
								( nextValue ) => {	
									setAttributes({
										longitude: Number(nextValue)
									})
								}
							}
						/>
						<InputControl
							label={__('Zoom', 'webkompanen')}
							labelPosition="top"
							value={attributes.zoom ? attributes.zoom : 17}
							type="number"
							onChange={ 
								( nextValue ) => {	
									setAttributes({
										zoom: Number(nextValue)
									})
								}
							}
						/>
          				<AutocompleteNormal
            				onLoad={
								onLoad
							}
            				onPlaceChanged={
								onPlaceChanged
							}
          				>
            				<input
              					type="text"
              					placeholder="Customized your placeholder"
              					style={{
                					boxSizing: 'border-box',
                					border: '1px solid transparent',
                					width: '100%',
                					height: '32px',
                					padding: '0 12px',
                					borderRadius: '3px',
                					boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
                					fontSize: '14px',
                					outline: 'none',
                					textOverflow: 'ellipses',
									marginTop: '10px'
              					}}
            				/>
          				</AutocompleteNormal>
					</PanelBody>
					<MarkersOutput locationPanel={attributes.locationPanel} focusField={attributes.focusField} />
					<Button 
                		isPrimary
                		onClick={
                    		()=>{ markerHandeler(attributes.locationPanel, attributes.focusField) }
                		}
            		>
                		{__('Add location', 'webkompanen')}
            		</Button>
					<PanelBody
						title={__('Height', 'webkompanen')}
						initialOpen={false}
					>
						<ButtonGroup>
							{
								attributes.height === 'h-25' ?
								<Button 
									isPrimary
									onClick={
										(e)=>{
											setAttributes(
												{
													height:null
												}
											)
										}
									}
								>
									25%
								</Button>
								:
								<Button 
									isSecondary
									onClick={
									(e)=>{
										setAttributes(
											{
												height:'h-25'
											}
										)
									}
								}
								>
									25%
								</Button>

							}
							{
								attributes.height === 'h-50' ?
								<Button 
									isPrimary
									onClick={
										(e)=>{
											setAttributes(
												{
													height:null
												}
											)
										}
									}
								>
									50%
								</Button>
								:
								<Button 
									isSecondary
									onClick={
									(e)=>{
										setAttributes(
											{
												height:'h-50'
											}
										)
									}
								}
								>
									50%
								</Button>

							}
							{
								attributes.height === 'h-75' ?
								<Button 
									isPrimary
									onClick={
										(e)=>{
											setAttributes(
												{
													height:null
												}
											)
										}
									}
								>
									75%
								</Button>
								:
								<Button 
									isSecondary
									onClick={
									(e)=>{
										setAttributes(
											{
												height:'h-75'
											}
										)
									}
								}
								>
									75%
								</Button>

							}
							{
								attributes.height === 'h-100' ?
								<Button 
									isPrimary
									onClick={
										(e)=>{
											setAttributes(
												{
													height:null
												}
											)
										}
									}
								>
									100%
								</Button>
								:
								<Button 
									isSecondary
									onClick={
									(e)=>{
										setAttributes(
											{
												height:'h-100'
											}
										)
									}
								}
								>
									100%
								</Button>

							}
						</ButtonGroup>
					</PanelBody>
					<PanelBody
						title={__('View height', 'webkompanen')}
						initialOpen={false}
					>
						<ButtonGroup>
							{
								attributes.viewheight === 'vh-25' ?
								<Button 
									isPrimary
									onClick={
										(e)=>{
											setAttributes(
												{
													viewheight:null
												}
											)
										}
									}
								>
									25%
								</Button>
								:
								<Button 
									isSecondary
									onClick={
										(e)=>{
											setAttributes(
												{
													viewheight:'vh-25'
												}
											)
										}
									}
								>
									25%
								</Button>

							}
							{
								attributes.viewheight === 'vh-50' ?
								<Button 
									isPrimary
									onClick={
										(e)=>{
											setAttributes(
												{
													viewheight:null
												}
											)
										}
									}
								>
									50%
								</Button>
								:
								<Button 
									isSecondary
									onClick={
									(e)=>{
										setAttributes(
											{
												viewheight:'vh-50'
											}
										)
									}
								}
								>
									50%
								</Button>

							}
							{
								attributes.viewheight === 'vh-75' ?
								<Button 
									isPrimary
									onClick={
										(e)=>{
											setAttributes(
												{
													viewheight:null
												}
											)
										}
									}
								>
									75%
								</Button>
								:
								<Button 
									isSecondary
									onClick={
									(e)=>{
										setAttributes(
											{
												viewheight:'vh-75'
											}
										)
									}
								}
								>
									75%
								</Button>

							}
							{
								attributes.viewheight === 'vh-100' ?
								<Button 
									isPrimary
									onClick={
										(e)=>{
											setAttributes(
												{
													viewheight:null
												}
											)
										}
									}
								>
									100%
								</Button>
								:
								<Button 
									isSecondary
									onClick={
									(e)=>{
										setAttributes(
											{
												viewheight:'vh-100'
											}
										)
									}
								}
								>
									100%
								</Button>

							}
						</ButtonGroup>
					</PanelBody>
					<PanelBody
						title={__('width', 'webkompanen')}
						initialOpen={false}
					>
						<ButtonGroup>
							{
								attributes.width === 'w-25' ?
								<Button 
									isPrimary
									onClick={
										(e)=>{
											setAttributes(
												{
													width:null
												}
											)
										}
									}
								>
									25%
								</Button>
								:
								<Button 
									isSecondary
									onClick={
										(e)=>{
											setAttributes(
												{
													width:'w-25'
												}
											)
										}
									}
								>
									25%
								</Button>

							}
							{
								attributes.width === 'w-50' ?
								<Button 
									isPrimary
									onClick={
										(e)=>{
											setAttributes(
												{
													width:null
												}
											)
										}
									}
								>
									50%
								</Button>
								:
								<Button 
									isSecondary
									onClick={
									(e)=>{
										setAttributes(
											{
												width:'w-50'
											}
										)
									}
								}
								>
									50%
								</Button>

							}
							{
								attributes.width === 'w-75' ?
								<Button 
									isPrimary
									onClick={
										(e)=>{
											setAttributes(
												{
													width:null
												}
											)
										}
									}
								>
									75%
								</Button>
								:
								<Button 
									isSecondary
									onClick={
									(e)=>{
										setAttributes(
											{
												width:'w-75'
											}
										)
									}
								}
								>
									75%
								</Button>

							}
							{
								attributes.width === 'w-100' ?
								<Button 
									isPrimary
									onClick={
										(e)=>{
											setAttributes(
												{
													width:null
												}
											)
										}
									}
								>
									100%
								</Button>
								:
								<Button 
									isSecondary
									onClick={
									(e)=>{
										setAttributes(
											{
												width:'w-100'
											}
										)
									}
								}
								>
									100%
								</Button>

							}
						</ButtonGroup>
					</PanelBody>
					<PanelBody
						title={__('Aspect ratio', 'webkompanen')}
						initialOpen={false}
					>
						<ButtonGroup>
							{
								attributes.ratiosize === 'ratio-1x1' ?
									<Button 
										isPrimary
										onClick={
											(e)=>{
												setAttributes({
													ratio: false,
													ratiosize: null
												})
											}
										}
									>
										1x1
									</Button>
									:
									<Button 
										isSecondary
										onClick={
											(e)=>{
												setAttributes({
													ratio: true,
													ratiosize: 'ratio-1x1'
												})
											}
										}
									>
										1x1
									</Button>

							}
							{
								attributes.ratiosize === 'ratio-4x3' ?
									<Button 
										isPrimary
										onClick={
											(e)=>{
												setAttributes({
													ratio: false,
													ratiosize: null
												})
											}
										}
									>
										4x3
									</Button>
									:
									<Button 
										isSecondary
										onClick={
											(e)=>{
												setAttributes({
													ratio: true,
													ratiosize: 'ratio-4x3'
												})
											}
										}
									>
										4x3
									</Button>

							}
							{
								attributes.ratiosize === 'ratio-16x9' ?
									<Button 
										isPrimary
										onClick={
											(e)=>{
												setAttributes({
													ratio: false,
													ratiosize: null
												})
											}
										}
									>
										16x9
									</Button>
									:
									<Button 
										isSecondary
										onClick={
											(e)=>{
												setAttributes({
													ratio: true,
													ratiosize: 'ratio-16x9'
												})
											}
										}
									>
										16x9
									</Button>

							}
							{
								attributes.ratiosize === 'ratio-21x9' ?
									<Button 
										isPrimary
										onClick={
											(e)=>{
												setAttributes({
													ratio: false,
													ratiosize: null
												})
											}
										}
									>
										21x9
									</Button>
									:
									<Button 
										isSecondary
										onClick={
											(e)=>{
												setAttributes({
													ratio: true,
													ratiosize: 'ratio-21x9'
												})
											}
										}
									>
										21x9
									</Button>

							}
						</ButtonGroup>
					</PanelBody>
				</InspectorControls>
			</Fragment>	
  			<div 
				{ ...blockProps }
				data-latitude={attributes.latitude ? attributes.latitude : 51.3638725}
				data-longitude={attributes.longitude ? attributes.longitude : 5.3228256}
				data-zoom={attributes.zoom ? attributes.zoom : 17}
				id={attributes.blockId}
			>
				{
					attributes.staticmap ? (
						<img
							src={'https://maps.googleapis.com/maps/api/staticmap?size=800x512&center='+maplatitude+','+maplongitude+'&zoom='+mapzoom+'&maptype=roadmap\&markers=size:mid|color:red|'+maplatitude+','+maplongitude+'&key='+siteinfo.googleMapsAPIKey+''}
							data-latitude={attributes.latitude ? attributes.latitude : 51.3638725}
							data-longitude={attributes.longitude ? attributes.longitude : 5.3228256}
							data-zoom={attributes.zoom ? attributes.zoom : 17}
							data-id={attributes.blockId}
							className={blockClasses}
							style={
								{
									height: ''+mapheight+'',
									width: ''+mapwidth+'',
									'objectFit': 'cover'
								}
							}
						/>
					) : (
						<Map
							style={
								{
									height: ''+mapheight+'',
									width: ''+mapwidth+''
								}
							}
						/>
					)
				}
  			</div>
		</>
	)
}


/*export default withSelect((select, props) => {
	return { 
		headerImageInfo: props.attributes.headerImageId ? select('core').getMedia(props.attributes.headerImageId) : undefined
	};
})(HeaderEdit);*/

export default googleMapsEdit;