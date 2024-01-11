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
	ToggleControl,
	PanelBody,
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
	__experimentalBoxControl as BoxControl,
	Toolbar
} from '@wordpress/components';

/* Utilities */

import { Margin } from '../../utilities/margin';
import { NegativeMargin } from '../../utilities/negativemargin';
import { Padding } from '../../utilities/padding';
import { Display } from '../../utilities/display';
import { Position } from '../../utilities/position';
import { Col } from '../../utilities/col';
import { ColOrder } from '../../utilities/colorder';
import { TextAlign } from '../../utilities/textalign';
import { Color } from '../../utilities/color';
import { Backgroundcolor } from '../../utilities/backgroundcolor';
import { Border } from '../../utilities/border';

/* Editors */

import ColorEdit from '../../editor/color';
import BackgroundcolorEdit from '../../editor/backgroundcolor';
import PositionEdit from '../../editor/position';
import BorderEdit from '../../editor/border';

/*function HeaderEdit( props ) {*/
const colEdit = (props) => {
	const {
		attributes,
		setAttributes,
		className,
		clientId
	} = props;
	
	const ALLOWED_BLOCKS = [ 
		'webkompanen-blocks/lastposts',
		'webkompanen-blocks/paragraph',
		'webkompanen-blocks/button',
		'webkompanen-blocks/heading',
		'webkompanen-blocks/div',
		'webkompanen-blocks/img',
		'webkompanen-blocks/video',
		'webkompanen-blocks/heading',
		'webkompanen-blocks/blockquote',
		'webkompanen-blocks/ul',
		'webkompanen-blocks/ol',
		'webkompanen-blocks/youtube',
		'webkompanen-blocks/googlemaps',
		'webkompanen-blocks/row',
		'webkompanen-blocks/fontawesome',
		'webkompanen-blocks/form',
		'webkompanen-blocks/referenties',
		'webkompanen-blocks/accordion',
		'webkompanen-blocks/accordion-body',
		'webkompanen-blocks/accordion-collapse',
		'webkompanen-blocks/accordion-header',
		'webkompanen-blocks/accordion-item',
		'webkompanen-blocks/site-title',
		'webkompanen-blocks/list-group',
		'webkompanen-blocks/list-group-item',
		'webkompanen-blocks/woocommerce-add-to-cart-button'
	]
	
	const hasInnerBlocks = useSelect( ( select ) =>
		select( blockEditorStore ).getBlocks( clientId ).length > 0,
		[ clientId ]
	);
	
	const datasrc = useSelect( ( select ) => {
		const innerBlocks = select( blockEditorStore ).getBlocks( clientId )
		if(innerBlocks.length > 0){
			if(innerBlocks[0].name === 'webkompanen-blocks/img'){
				const islightgalleryimage = innerBlocks[0].attributes.islightgalleryimage
				const imagePlaceholder = innerBlocks[0].attributes.imagePlaceholder
				const imageUrl = innerBlocks[0].attributes.imageUrl
				const image = (imageUrl !== '' && imageUrl !== undefined) ? imageUrl : imagePlaceholder
				
				if(islightgalleryimage && image){
					return image
				}
				else{
					return undefined
				}
			}
		}
		else{
			return undefined
		}
	})
	
	//const datasrcatr = attributes.datasrc ? attributes.datasrc : ''
	
	if(datasrc !== attributes.datasrc){
		setAttributes({
			datasrc:attributes.datasrc
		})
	}
	
	let classes = attributes.classes ? ''+attributes.classes : ''
	let dataImage = attributes.dataImage ? ''+attributes.dataImage : null
	
	const margin = new Margin(props)
	const negativemargin = new NegativeMargin(props)
	const padding = new Padding(props)
	const display = new Display(props)
	const position = new Position(props)
	const col = new Col(props)
	const colorder = new ColOrder(props)
	const textalign = new TextAlign(props)
	const color = new Color(props)
	const backgroundcolor = new Backgroundcolor(props)
	const border = new Border(props)
	
	let blockClasses = '';

	blockClasses += classes != null && classes != '' ? ' '+classes : ''
	blockClasses += attributes.height != null && attributes.height != '' ? ' '+attributes.height : ''
	//blockClasses += ratio != null && ratio != '' ? ' '+ratio : ''
	//blockClasses += ratiosize != null && ratiosize != '' ? ' '+ratiosize : ''
	blockClasses += backgroundcolor.classes() != null && backgroundcolor.classes() != '' ? ' '+backgroundcolor.classes() : ''
	blockClasses += col.classes() != null && col.classes() != '' ? ' '+col.classes() : ''
	blockClasses += colorder.classes() != null && colorder.classes() != '' ? ' '+colorder.classes() : ''
	blockClasses += textalign.classes() != null && textalign.classes() != '' ? ' '+textalign.classes() : ''
	blockClasses += color.classes() != null && color.classes() != '' ? ' '+color.classes() : ''
	blockClasses += margin.classes() != null && margin.classes() != '' ? ' '+margin.classes() : ''
	blockClasses += negativemargin.classes() != null && negativemargin.classes() != '' ? ' '+negativemargin.classes() : ''
	blockClasses += padding.classes() != null && padding.classes() != '' ? ' '+padding.classes() : ''
	blockClasses += display.classes() != null && display.classes() != '' ? ' '+display.classes() : ''
	blockClasses += position.classes() != null && position.classes() != '' ? ' '+position.classes() : ''
	blockClasses += border.classes() != null && border.classes() != '' ? ' '+border.classes() : ''
	
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
	
	return(
		<>	
			<Fragment>		
				<InspectorControls>
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
					<ColorEdit 
						props={props}
					/>
					<BackgroundcolorEdit 
						props={props}
					/>
					<PositionEdit 
						props={props}
					/>
					<BorderEdit 
						props={props}
					/>
				</InspectorControls>
			</Fragment>
  			<div 
				{ ...innerBlocksProps }
				data-src={attributes.datasrc}
				data-image={dataImage}
			>
						
  			</div>
		</>
	)
}


/*export default withSelect((select, props) => {
	return { 
		headerImageInfo: props.attributes.headerImageId ? select('core').getMedia(props.attributes.headerImageId) : null
	};
})(HeaderEdit);*/

export default colEdit;