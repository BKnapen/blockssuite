/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { 
	useInnerBlocksProps, 
	InnerBlocks,
	useBlockProps 
} from '@wordpress/block-editor';

function googleMapsSave( props ) {
	const {
		attributes
	} = props;
	
	console.log('GOOGLE')
	console.log(attributes)
	const googlemapsapikey = attributes.apiKey
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
	blockClasses += attributes.staticmap ? ' googlemapsstatic' : ' googlemapsinteractive'

	blockClasses = blockClasses.replace(/^\s+|\s+$/gm,'');
	blockClasses = blockClasses.replace(/\s+\s+/gm,' ');
	blockClasses = blockClasses == '' ? null : blockClasses
	
	return(
		<>
			{
				attributes.staticmap ? (
					<div 
						className={blockClasses}
						data-latitude={attributes.latitude ? attributes.latitude : ''}
						data-longitude={attributes.longitude ? attributes.longitude : ''}
						data-zoom={attributes.zoom ? attributes.zoom : ''}
						data-locations={attributes.locations}
						style={
							{
								height: ''+mapheight+'',
								width: ''+mapwidth+''
							}
						}
						id={attributes.blockId}
					>
						<img
							src={'https://maps.googleapis.com/maps/api/staticmap?size=800x512&center='+maplatitude+','+maplongitude+'&zoom='+mapzoom+'&maptype=roadmap\&markers=size:mid|color:red|'+maplatitude+','+maplongitude+'&key='+googlemapsapikey+''}
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
					</div>
				):(
					<div
						id='map'
						className={blockClasses}
						data-latitude={attributes.latitude ? attributes.latitude : 51.3638725}
						data-longitude={attributes.longitude ? attributes.longitude : 5.3228256}
						data-zoom={attributes.zoom ? attributes.zoom : 17}
						data-locations={JSON.stringify(attributes.locations)}
						data-testje='testje'
						style={
							{
								height: ''+mapheight+'',
							}
						}
					>

					</div>
				)
			}
		</>
	)

}

export default googleMapsSave;