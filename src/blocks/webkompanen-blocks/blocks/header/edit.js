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
	Toolbar,
	__experimentalInputControl as InputControl
} from '@wordpress/components';

/* Utilities */

import { Margin } from '../../utilities/margin';
import { NegativeMargin } from '../../utilities/negativemargin';
import { Padding } from '../../utilities/padding';
import { Display } from '../../utilities/display';
import { Position } from '../../utilities/position';
import { Col } from '../../utilities/col';
import { Color } from '../../utilities/color';
import { Backgroundcolor } from '../../utilities/backgroundcolor';

/* Editors */

import ColorEdit from '../../editor/color';
import BackgroundcolorEdit from '../../editor/backgroundcolor';
import ColEdit from '../../editor/col';
import MarginEdit from '../../editor/margin';
import NegativeMarginEdit from '../../editor/negativemargin';
import PaddingEdit from '../../editor/padding';
import DisplayEdit from '../../editor/display';
import PositionEdit from '../../editor/position';

/*function HeaderEdit( props ) {*/
const headerEdit = (props) => {
	const {
		attributes,
		setAttributes,
		className,
		clientId
	} = props;
	
	const ALLOWED_BLOCKS = [ 
		'webkompanen-blocks/lastposts',
		'webkompanen-blocks/paragraph',
		'webkompanen-blocks/div',
		'webkompanen-blocks/form',
		'webkompanen-blocks/input',
		'webkompanen-blocks/label',
		'webkompanen-blocks/image',
		'webkompanen-blocks/video',
		'webkompanen-blocks/heading',
		'webkompanen-blocks/blockquote',
		'webkompanen-blocks/ul',
		'webkompanen-blocks/ol',
		'webkompanen-blocks/youtube',
		'webkompanen-blocks/googlemaps',
		'webkompanen-blocks/fontawesome',
		'webkompanen-blocks/container'
	]
	
	const hasInnerBlocks = useSelect( ( select ) =>
		select( blockEditorStore ).getBlocks( clientId ).length > 0,
		[ clientId ]
	);

	const classes = attributes.classes ? attributes.classes : ''
	const ratio = attributes.ratio === true ? ' ratio' : ''
	const ratiosize = attributes.ratiosize ? ' '+attributes.ratiosize+'' : ''
	
	const flickity = attributes.flickity !== null ? JSON.stringify(attributes.flickity) : null
	const style = attributes.style !== null ? attributes.style : null
	const ariahidden = attributes.ariahidden ? 'true' : null

	const margin = new Margin(props)
	const negativemargin = new NegativeMargin(props)
	const padding = new Padding(props)
	const display = new Display(props)
	const position = new Position(props)
	const col = new Col(props)
	const color = new Color(props)
	const backgroundcolor = new Backgroundcolor(props)
	
	let blockClasses = '';

	blockClasses += classes != null && classes != '' ? ' '+classes : ''
	blockClasses += ratio != null && ratio != '' ? ' '+ratio : ''
	blockClasses += ratiosize != null && ratiosize != '' ? ' '+ratiosize : ''
	blockClasses += attributes.height != null && attributes.height != '' ? ' '+attributes.height : ''
	blockClasses += attributes.viewheight != null && attributes.viewheight != '' ? ' '+attributes.viewheight : ''
	blockClasses += attributes.width != null && attributes.width != '' ? ' '+attributes.width : ''
	blockClasses += attributes.zindex && attributes.zindex === -1 ? ' z-n1' : ''
	blockClasses += attributes.zindex && (attributes.zindex > -1 && attributes.zindex <= 3) ? ' z-'+attributes.zindex+'' : ''
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
	
	const blockProps = useBlockProps( { style: style, 'aria-hidden':ariahidden, 'data-flickity': flickity, className: blockClasses } );
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
						title={__('Z-index', 'webkompanen')}
						initialOpen={false}
					>
						<InputControl
							label={__('Z-index', 'webkompanen')}
							labelPosition="top"
							value={ attributes.zindex }
							type="number"
							isPressEnterToChange
							onChange={ 
								(nextValue) => {
									Number(nextValue) >= -1 && Number(nextValue) <= 3 ?
									setAttributes({
										zindex: Number(nextValue)
									})
									:
									''

									nextValue < -1 ?
									setAttributes({
										zindex: -1
									})
									:
									''

									nextValue > 3 ?
									setAttributes({
										zindex: 3
									})
									:
									''
								} 
							}
						/>	
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
  			<header 
				{ ...innerBlocksProps }
			>
						
  			</header>
		</>
	)
}


/*export default withSelect((select, props) => {
	return { 
		headerImageInfo: props.attributes.headerImageId ? select('core').getMedia(props.attributes.headerImageId) : undefined
	};
})(HeaderEdit);*/

export default headerEdit;