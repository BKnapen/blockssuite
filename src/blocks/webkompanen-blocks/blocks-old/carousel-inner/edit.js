/**
 * WordPress dependencies
 */
import {
	registerBlockType
	
} from '@wordpress/blocks';

import { 
	useSelect, useDispatch, withSelect
} from '@wordpress/data';

import { 
	getDate
} from '@wordpress/date';

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
	getColorObjectByColorValue,
	getColorClassName,
	store as blockEditorStore
	
} from '@wordpress/block-editor';

import {
	link
} from '@wordpress/icons';

import {
	useState,
	Fragment
} from '@wordpress/element';

import {
	__experimentalInputControl as InputControl,
	__experimentalSpacer as Spacer,
	ToggleControl,
	PanelBody,
	PanelRow,
	CheckboxControl,
	SelectControl,
	ColorPicker,
	Popover,
	IconButton,
	Button,
	ResponsiveWrapper,
	ColorPalette,
	Toolbar
} from '@wordpress/components';

import { 
	PluginSidebarMoreMenuItem, 
	PluginSidebar 
} from '@wordpress/editor';

import { 
	compose 
} from '@wordpress/compose';


import { Margin } from '../../utilities/margin';
import { NegativeMargin } from '../../utilities/negativemargin';
import { Padding } from '../../utilities/padding';
import { Display } from '../../utilities/display';
import { Position } from '../../utilities/position';
import { Color } from '../../utilities/color';
import { Backgroundcolor } from '../../utilities/backgroundcolor';

/* Editors */

import ColorEdit from '../../editor/color';
import BackgroundcolorEdit from '../../editor/backgroundcolor';
import PositionEdit from '../../editor/position';

/*function HeaderEdit( props ) {*/
const carouselInnerEdit = (props) => {
	const {
		attributes,
		setAttributes,
		className,
		clientId
	} = props;
	
	const ALLOWED_BLOCKS = [ 
		'webkompanen-blocks/lastposts',
		'webkompanen-blocks/div',
		'webkompanen-blocks/img',
		'webkompanen-blocks/video',
		'webkompanen-blocks/image',
		'webkompanen-blocks/carousel-item'
	]
	
	const classes = attributes.classes ? attributes.classes : ''
	
	const margin = new Margin(props)
	const negativemargin = new NegativeMargin(props)
	const padding = new Padding(props)
	const display = new Display(props)
	const position = new Position(props)
	const color = new Color(props)
	const backgroundcolor = new Backgroundcolor(props)
	
	let blockClasses = 'carousel-inner';
	
	blockClasses += classes != null && classes != '' ? ' '+classes : ''
	blockClasses += backgroundcolor.classes() != null && backgroundcolor.classes() != '' ? ' '+backgroundcolor.classes() : ''
	blockClasses += color.classes() != null && color.classes() != '' ? ' '+color.classes() : ''
	blockClasses += margin.classes() != null && margin.classes() != '' ? ' '+margin.classes() : ''
	blockClasses += negativemargin.classes() != null && negativemargin.classes() != '' ? ' '+negativemargin.classes() : ''
	blockClasses += padding.classes() != null && padding.classes() != '' ? ' '+padding.classes() : ''
	blockClasses += display.classes() != null && display.classes() != '' ? ' '+display.classes() : ''
	blockClasses += position.classes() != null && position.classes() != '' ? ' '+position.classes() : ''
	
	blockClasses = blockClasses.replace(/^\s+|\s+$/gm,'');
	blockClasses = blockClasses.replace(/\s+\s+/gm,' ');
	blockClasses = blockClasses == '' ? null : blockClasses
	
	const blockProps = useBlockProps( { className: blockClasses } );
	
	const hasInnerBlocks = useSelect( ( select ) =>
		select( blockEditorStore ).getBlocks( clientId ).length > 0,
		[ clientId ]
	);
	
	const innerblokcount = useSelect( ( select ) =>
		select( blockEditorStore ).getBlockCount( clientId )
	);
	
	const parentClientId = useSelect( ( select ) =>
		select( blockEditorStore ).getBlockHierarchyRootClientId( clientId )
	);
	const parentAttributes = useSelect( ( select ) =>
		select(blockEditorStore).getBlockAttributes( parentClientId )
	);
	
	const innerBlocksProps = useInnerBlocksProps(
			{ ...blockProps },{ 
			allowedBlocks: ALLOWED_BLOCKS,
			renderAppender: hasInnerBlocks ? InnerBlocks.BlockListAppender : InnerBlocks.ButtonBlockAppender,
			orientation: 'vertical',
			templateLock: false
	}
    );
	
	const indicators = [];
	
	if(innerblokcount > 0){
		for(var i= 0; i < innerblokcount; i++){
			indicators.push(
				<button 
					type="button" 
					data-bs-target={'#'+attributes.carousel} 
					data-bs-slide-to={i} 
					className={i === 0 ? "active" : null} 
					aria-current={i === 0 ? "true" : null} 
					aria-label={"Slide "+ i +""}
					onClick={
						(e)=>{
							const targetcarousel = document.querySelector(e.target.getAttribute('data-bs-target'))
							const slide = e.target.getAttribute('data-bs-slide-to')
							targetcarousel.querySelectorAll('.active').length > 0 ? targetcarousel.querySelector('.active').classList.remove('active') : '';
							targetcarousel.querySelectorAll('.carousel-item')[Number(slide)].classList.add('active')
						}
					}
				>
				</button>
			)
			if(i === innerblokcount-1){
	
				if(Number(attributes.slides) !== Number(innerblokcount) && Number(innerblokcount) > 0){
					setAttributes({
						slides: Number(innerblokcount)
					})
				}
					
				return(
					<>
						<Fragment>		
							<InspectorControls>
            					<Spacer
									marginBottom={3}
								>
								<InputControl
									label={__('Carousel ID', 'webkompanen')}
									labelPosition="top"
									value={attributes.carousel}
									type="text"
									isPressEnterToChange
									onChange={ 
										( nextValue ) => {
											setAttributes({
												carouselid:nextValue
											})
										} 
									}
								/>
								</Spacer>
            					<Spacer
									marginBottom={3}
								>
								<InputControl
									label={__('Custom classes', 'webkompanen')}
									labelPosition="top"
									value={attributes.classes}
									type="text"
									isPressEnterToChange
									onChange={ 
										( nextValue ) => {
											setAttributes({
												classes:nextValue
											})
										} 
									}
								/>
								</Spacer>
            					<Spacer
									marginBottom={3}
								>
								<ToggleControl
									label={__('Show carousel indicators?', 'webkompanen')}
									help={ attributes.showindicators ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
									checked={ attributes.showindicators }
									onChange={ 
										(e) => {
											setAttributes({
												showindicators: ! attributes.showindicators
											})
										}
									}
								/>
								</Spacer>
								<ColorEdit 
									props={props}
								/>
								<BackgroundcolorEdit 
									props={props}
								/>
								<PositionEdit 
									props={props}
								/>
							</InspectorControls>
						</Fragment>	
						{
							attributes.showindicators &&
							<div className="carousel-indicators">
								{indicators}
							</div>
						}
						<div 
							{ ...innerBlocksProps }
							id={attributes.carousel}
							data-bs-ride="carousel"
						>
							{ innerBlocksProps.children }
						</div>
  						<button className="carousel-control-prev" type="button" data-bs-target={'#'+attributes.carousel} data-bs-slide="prev">
    						<span className="carousel-control-prev-icon" aria-hidden="true"></span>
    						<span className="visually-hidden">Previous</span>
  						</button>
  						<button className="carousel-control-next" type="button" data-bs-target={'#'+attributes.carousel} data-bs-slide="next">
    						<span className="carousel-control-next-icon" aria-hidden="true"></span>
    						<span className="visually-hidden">Next</span>
  						</button>
					</>
				)
			}
		}
	}
	else{
		return(
			<>
				<Fragment>		
					<InspectorControls>
            			<Spacer
							marginBottom={3}
						>
						<InputControl
							label={__('Carousel ID', 'webkompanen')}
							labelPosition="top"
							value={attributes.carousel}
							type="text"
							isPressEnterToChange
							onChange={ 
								( nextValue ) => {
									setAttributes({
										carouselid:nextValue
									})
								} 
							}
						/>
						</Spacer>
            			<Spacer
							marginBottom={3}
						>
						<InputControl
							label={__('Custom classes', 'webkompanen')}
							labelPosition="top"
							value={attributes.classes}
							type="text"
							isPressEnterToChange
							onChange={ 
								( nextValue ) => {
									setAttributes({
										classes:nextValue
									})
								} 
							}
						/>
						</Spacer>
            			<Spacer
							marginBottom={3}
						>
						<ToggleControl
							label={__('Show carousel indicators?', 'webkompanen')}
							help={ attributes.showindicators ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
							checked={ attributes.showindicators }
							onChange={ 
								(e) => {
									setAttributes({
										showindicators: ! attributes.showindicators
									})
								}
							}
						/>
						</Spacer>
						<ColorEdit 
							props={props}
						/>
						<BackgroundcolorEdit 
							props={props}
						/>
						<PositionEdit 
							props={props}
						/>
					</InspectorControls>
				</Fragment>	
				<div 
					{ ...innerBlocksProps }
					id={parentAttributes.carouselid} 
					data-bs-ride="carousel"
				>
					{ innerBlocksProps.children }
				</div>
			</>
		)
	}
}


/*export default withSelect((select, props) => {
	return { 
		headerImageInfo: props.attributes.headerImageId ? select('core').getMedia(props.attributes.headerImageId) : undefined
	};
})(HeaderEdit);*/

export default carouselInnerEdit;