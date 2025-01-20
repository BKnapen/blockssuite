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
	Toolbar
} from '@wordpress/components';

import { Margin } from '../../utilities/margin';
import { NegativeMargin } from '../../utilities/negativemargin';
import { Padding } from '../../utilities/padding';
import { Display } from '../../utilities/display';
import { Position } from '../../utilities/position';
import { Color } from '../../utilities/color';
import { Backgroundcolor } from '../../utilities/backgroundcolor';
import { Justify } from '../../utilities/justify';
import { Alignitems } from '../../utilities/alignitems';

/* Editors */

import ColorEdit from '../../editor/color';
import BackgroundcolorEdit from '../../editor/backgroundcolor';
import PositionEdit from '../../editor/position';

/*function HeaderEdit( props ) {*/
const rowEdit = (props) => {
	const {
		attributes,
		setAttributes,
		className,
		clientId
	} = props;
	
	const ALLOWED_BLOCKS = [ 
		'webkompanen-blocks/lastposts',
		'webkompanen-blocks/col',
		'webkompanen-blocks/form',
		'webkompanen-blocks/google-reviews',
		'webkompanen-blocks/google-rating',
		'webkompanen-blocks/woocommerce-add-to-cart-button',
		'webkompanen-blocks/woocommerce-cart',
		'webkompanen-blocks/woocommerce-activity-products',
		'webkompanen-blocks/woocommerce-checkout-billing-address',
		'webkompanen-blocks/woocommerce-checkout-shipping-address',
		'webkompanen-blocks/woocommerce-checkout-payment-options',
		'webkompanen-blocks/swiper',
		'webkompanen-blocks/swiperslide'
	]
	
	const hasInnerBlocks = useSelect( ( select ) =>
		select( blockEditorStore ).getBlocks( clientId ).length > 0,
		[ clientId ]
	);
	
	const gxs = attributes.gxs != null ? ' g-'+attributes.gxs : ''
	const gsm = attributes.gsm != null ? ' g-sm'+attributes.gsm : ''
	const gmd = attributes.gmd != null ? ' g-md'+attributes.gmd : ''
	const glg = attributes.glg != null ? ' g-lg-'+attributes.glg : ''
	const gxl = attributes.gxl != null ? ' g-xl-'+attributes.gxl : ''
	const gxxl = attributes.gxxl != null ? ' g-xxl-'+attributes.gxxl : ''
	
	const gutters = gxs+''+gsm+''+gmd+''+glg+''+gxl+''+gxxl+''
	
	const classes = attributes.classes ? attributes.classes : ''
	
	
	const margin = new Margin(props)
	const negativemargin = new NegativeMargin(props)
	const padding = new Padding(props)
	const display = new Display(props)
	const justify = new Justify(props)
	const position = new Position(props)
	const color = new Color(props)
	const backgroundcolor = new Backgroundcolor(props)
	const alignitems = new Alignitems(props)
	
	let blockClasses = 'row';

	blockClasses += classes != null && classes != '' ? ' '+classes : ''
	blockClasses += gutters != null && gutters != '' ? ' '+gutters : ''
	blockClasses += attributes.height != null && attributes.height != '' ? ' '+attributes.height : ''
	blockClasses += attributes.width != null && attributes.width != '' ? ' '+attributes.width : ''
	blockClasses += backgroundcolor.classes() != null && backgroundcolor.classes() != '' ? ' '+backgroundcolor.classes() : ''
	blockClasses += color.classes() != null && color.classes() != '' ? ' '+color.classes() : ''
	blockClasses += margin.classes() != null && margin.classes() != '' ? ' '+margin.classes() : ''
	blockClasses += negativemargin.classes() != null && negativemargin.classes() != '' ? ' '+negativemargin.classes() : ''
	blockClasses += padding.classes() != null && padding.classes() != '' ? ' '+padding.classes() : ''
	blockClasses += display.classes() != null && display.classes() != '' ? ' '+display.classes() : ''
	blockClasses += justify.classes() != null && justify.classes() != '' ? ' '+justify.classes() : ''
	blockClasses += alignitems.classes() != null && alignitems.classes() != '' ? ' '+alignitems.classes() : ''
	blockClasses += position.classes() != null && position.classes() != '' ? ' '+position.classes() : ''
	
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
				</InspectorControls>
			</Fragment>
  			<div 
				{ ...innerBlocksProps }
			>
						
  			</div>
		</>
	)
}


/*export default withSelect((select, props) => {
	return { 
		headerImageInfo: props.attributes.headerImageId ? select('core').getMedia(props.attributes.headerImageId) : undefined
	};

})(HeaderEdit);*/

export default rowEdit;