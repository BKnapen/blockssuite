/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { 
	useInnerBlocksProps, 
	InnerBlocks,
	useBlockProps 
} from '@wordpress/block-editor';

/* Utilities */

import { Margin } from '../../utilities/margin';
import { NegativeMargin } from '../../utilities/negativemargin';
import { Padding } from '../../utilities/padding';
import { Display } from '../../utilities/display';
import { Position } from '../../utilities/position';
import { Col } from '../../utilities/col';
import { Color } from '../../utilities/color';
import { Backgroundcolor } from '../../utilities/backgroundcolor';

const { Button, BaseControl } = window.wp.components
const { MediaUpload, MediaUploadCheck } = window.wp.blockEditor
const { useSelect, useDispatch } = window.wp.data

function gallerySave( props ) {
	const {
		attributes
	} = props;
	
	const classes = attributes.classes ? attributes.classes : ''
	
	const zoomeffect = attributes.zoomeffect ? 'zoom' : ''
	
	const margin = new Margin(props)
	const ratio = 'videowrapper ratio ratio-16x9 w-100'

	//const negativemargin = new NegativeMargin(props)
	//const padding = new Padding(props)
	const display = new Display(props)

	//const position = new Position(props)
	//const col = new Col(props)
	//const color = new Color(props)
	//const backgroundcolor = new Backgroundcolor(props)
						
	return(
		<>
			<a className="text-sucendary" href="/">Terug naar homepage</a>
			<div className="row g-3">
				{ !! attributes.gallery && attributes.gallery.length > 0 &&
					attributes.gallery.map( 
						(image, index) =>
							<div className="col-3">
								<img onclick={`openGalleryModal();currentGallerySlide(${index+1})`} className="img-fluid hover-shadow" src={ image.url } alt={ image.alt } />
							</div> 
						)
				}
			</div>
			<div id="galleryModal" className="gallerymodal">
  				<span className="galleryClose cursor" onclick="closeGalleryModal()">&times;</span>
  				<div className="gallerymodal-content">
					{ !! attributes.gallery && attributes.gallery.length > 0 &&
						attributes.gallery.map( 
							(image, index) =>
								<div className="gallerySlides">
									<div className="numbertext">{index+1} / {attributes.gallery.length}</div>
									<img src={ image.url } style={{width:"100%"}} alt={ image.alt }/>
								</div>
						)
					}
    
    				<a className="galleryPrev" onclick="plusGallerySlides(-1)">&#10094;</a>
    				<a className="galleryNext" onclick="plusGallerySlides(1)">&#10095;</a>

    				<div className="caption-container">
      					<p id="caption"></p>
    				</div>


    				<div className="row g-0 flex-nowrap overflow-x-scroll row-cols-4 row-cols-md-6 row-cols-lg-6 galleryColumn">
					{ !! attributes.gallery && attributes.gallery.length > 0 &&
						attributes.gallery.map( 
							(image, index) =>
								<div className="">
									<img className="demo cursor object-fit-cover h-100" src={ image.url } style={{width:"100%"}} onclick={`currentGallerySlide(${index+1})`} alt={ image.alt }/>
								</div>
						)
					}
    				</div>
  				</div>
			</div>
		</>
	)

}

export default gallerySave;