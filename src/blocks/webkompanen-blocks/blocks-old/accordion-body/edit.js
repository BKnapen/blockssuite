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
import { BSHeight } from '../../utilities/height';
import { Backgroundcolor } from '../../utilities/backgroundcolor';
import { Justify } from '../../utilities/justify';
import { Alignitems } from '../../utilities/alignitems';

/* Editors */

import ColorEdit from '../../editor/color';
import BackgroundcolorEdit from '../../editor/backgroundcolor';
import ColEdit from '../../editor/col';
import MarginEdit from '../../editor/margin';
import NegativeMarginEdit from '../../editor/negativemargin';
import PaddingEdit from '../../editor/padding';
import DisplayEdit from '../../editor/display';
import PositionEdit from '../../editor/position';
import HeightEdit from '../../editor/height';
import ImageEdit from '../../editor/img';
import { JustifyEdit } from '../../utilities/justify';

/*function HeaderEdit( props ) {*/
const sectionEdit = (props) => {
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
		'webkompanen-blocks/row',
		'webkompanen-blocks/col',
		'webkompanen-blocks/form',
		'webkompanen-blocks/input',
		'webkompanen-blocks/label',
		'webkompanen-blocks/image',
		'webkompanen-blocks/img',
		'webkompanen-blocks/video',
		'webkompanen-blocks/heading',
		'webkompanen-blocks/blockquote',
		'webkompanen-blocks/ul',
		'webkompanen-blocks/ol',
		'webkompanen-blocks/youtube',
		'webkompanen-blocks/googlemaps',
		'webkompanen-blocks/fontawesome',
		'webkompanen-blocks/button',
		'webkompanen-blocks/btn',
		'webkompanen-blocks/youtube',
		'webkompanen-blocks/facebookwatch',
		'webkompanen-blocks/gallery',
		'webkompanen-blocks/lastgallerie',
		'webkompanen-blocks/eventinfo',
		'webkompanen-blocks/courses',
		'webkompanen-blocks/courses-overview',
		'webkompanen-blocks/referenties',
		'core/html',
		'core/embed',
		'webkompanen-blocks/accordion',
		'webkompanen-blocks/accordion-body',
		'webkompanen-blocks/accordion-collapse',
		'webkompanen-blocks/accordion-header',
		'webkompanen-blocks/accordion-item'
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
	const justify = new Justify(props)
	const bsheight = new BSHeight(props)
	const col = new Col(props)
	const color = new Color(props)
	const backgroundcolor = new Backgroundcolor(props)
	const alignitems = new Alignitems(props)

	let bgimg = (attributes.imageUrl !== '' && attributes.imageUrl !== undefined) ? ''+attributes.imageUrl+'' : null
	
	let blockClasses = 'accordion-body';

	blockClasses += classes != null && classes != '' ? ' '+classes : ''
	blockClasses += ratio != null && ratio != '' ? ' '+ratio : ''
	blockClasses += attributes.height != null && attributes.height != '' ? ' '+attributes.height : ''
	blockClasses += attributes.dataaos != null && attributes.dataaos != '' ? ' aos-init' : ''
	blockClasses += attributes.viewheight != null && attributes.viewheight != '' ? ' '+attributes.viewheight : ''
	blockClasses += attributes.width != null && attributes.width != '' ? ' '+attributes.width : ''
	blockClasses += ratiosize != null && ratiosize != '' ? ' '+ratiosize : ''
	blockClasses += backgroundcolor.classes() != null && backgroundcolor.classes() != '' ? ' '+backgroundcolor.classes() : ''
	blockClasses += color.classes() != null && color.classes() != '' ? ' '+color.classes() : ''
	blockClasses += margin.classes() != null && margin.classes() != '' ? ' '+margin.classes() : ''
	blockClasses += negativemargin.classes() != null && negativemargin.classes() != '' ? ' '+negativemargin.classes() : ''
	blockClasses += padding.classes() != null && padding.classes() != '' ? ' '+padding.classes() : ''
	blockClasses += display.classes() != null && display.classes() != '' ? ' '+display.classes() : ''
	blockClasses += position.classes() != null && position.classes() != '' ? ' '+position.classes() : ''
	blockClasses += bsheight.classes() != null && bsheight.classes() != '' ? ' '+bsheight.classes() : ''
	blockClasses += justify.classes() != null && justify.classes() != '' ? ' '+justify.classes() : ''
	blockClasses += alignitems.classes() != null && alignitems.classes() != '' ? ' '+alignitems.classes() : ''
	
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
					<ImageEdit 
						props={props}
					/>	
					<PanelBody
						title={__('AOS', 'webkompanen')}
						initialOpen={false}
					>
						<SelectControl
							label={ __( 'AOS', 'webkompanen' ) }
							value={ attributes.dataaos } // e.g: value = [ 'a', 'c' ]
							onChange={ 
							( nextSelect ) => {
								if ( nextSelect ) {
									setAttributes(
										{
											dataaos:nextSelect
										}
									)
								}
							}
						}
							options={ [
								{ value: null, label: __('', 'webkompanen') },
								{ value: 'fade-up', label: __('Fade up', 'webkompanen') },
								{ value: 'fade-down', label: __('Fade down', 'webkompanen') },
								{ value: 'fade-right', label: __('Fade right', 'webkompanen') },
								{ value: 'fade-left', label: __('Fade left', 'webkompanen') },
								{ value: 'fade-up-right', label: __('Fade up right', 'webkompanen') },
								{ value: 'fade-up-left', label: __('Fade up left', 'webkompanen') },
								{ value: 'fade-down-right', label: __('Fade down right', 'webkompanen') },
								{ value: 'slide-up', label: __('Slide up', 'webkompanen') },
								{ value: 'slide-down', label: __('Slide down', 'webkompanen') },
								{ value: 'slide-right', label: __('Slide right', 'webkompanen') },
								{ value: 'slide-left', label: __('Slide left', 'webkompanen') },
								{ value: 'flip-left', label: __('Flip left', 'webkompanen') },
								{ value: 'flip-right', label: __('Flip right', 'webkompanen') },
								{ value: 'flip-up', label: __('Flip up', 'webkompanen') },
								{ value: 'flip-down', label: __('Flip down', 'webkompanen') },
								{ value: 'zoom-in', label: __('Zoom in', 'webkompanen') },
								{ value: 'zoom-in-up', label: __('Zoom in up', 'webkompanen') },
								{ value: 'zoom-in-down', label: __('Zoom in down', 'webkompanen') },
								{ value: 'zoom-in-left', label: __('Zoom in left', 'webkompanen') },
								{ value: 'zoom-in-right', label: __('Zoom in right', 'webkompanen') },
								{ value: 'zoom-out', label: __('Zoom out', 'webkompanen') },
								{ value: 'zoom-out-up', label: __('Zoom out up', 'webkompanen') },
								{ value: 'zoom-out-down', label: __('Zoom out down', 'webkompanen') },
								{ value: 'zoom-out-right', label: __('Zoom out right', 'webkompanen') },
								{ value: 'zoom-out-left', label: __('Zoom out left', 'webkompanen') }
							] }
						/>
						<SelectControl
							label={ __( 'AOS easing', 'webkompanen' ) }
							value={ attributes.dataaos } // e.g: value = [ 'a', 'c' ]
							onChange={ 
							( nextSelect ) => {
								if ( nextSelect ) {
									setAttributes(
										{
											dataaoseasing:nextSelect
										}
									)
								}
							}
						}
							options={ [
								{ value: null, label: __('', 'webkompanen') },
								{ value: 'linear', label: __('Linear', 'webkompanen') },
								{ value: 'ease', label: __('Ease', 'webkompanen') },
								{ value: 'ease-in', label: __('Ease in', 'webkompanen') },
								{ value: 'ease-out', label: __('Ease out', 'webkompanen') },
								{ value: 'ease-in-out', label: __('Ease in out', 'webkompanen') },
								{ value: 'ease-in-back', label: __('Ease in back', 'webkompanen') },
								{ value: 'ease-out-back', label: __('Ease out back', 'webkompanen') },
								{ value: 'ease-in-out-back', label: __('Ease in out back', 'webkompanen') },
								{ value: 'ease-in-sine', label: __('Ease in sine', 'webkompanen') },
								{ value: 'ease-out-sine', label: __('Ease out sine', 'webkompanen') },
								{ value: 'ease-in-out-sine', label: __('Ease in out sine', 'webkompanen') },
								{ value: 'ease-in-quad', label: __('Ease in quad', 'webkompanen') },
								{ value: 'ease-out-quad', label: __('Ease out quad', 'webkompanen') },
								{ value: 'ease-in-out-quad', label: __('Ease in out quad', 'webkompanen') },
								{ value: 'ease-in-cubic', label: __('Ease in cubic', 'webkompanen') },
								{ value: 'ease-out-cubic', label: __('Ease out cubic', 'webkompanen') },
								{ value: 'ease-in-out-cubic', label: __('Ease in out cubic', 'webkompanen') },
								{ value: 'ease-in-quart', label: __('Ease in quart', 'webkompanen') },
								{ value: 'ease-out-quart', label: __('Ease out quart', 'webkompanen') },
								{ value: 'ease-in-out-quart', label: __('Ease in out quart', 'webkompanen') },
							] }
						/>
						<SelectControl
							label={ __( 'AOS easing anchor placement', 'webkompanen' ) }
							value={ attributes.dataaosanchorplacement } // e.g: value = [ 'a', 'c' ]
							onChange={ 
							( nextSelect ) => {
								if ( nextSelect ) {
									setAttributes(
										{
											dataaosanchorplacement:nextSelect
										}
									)
								}
							}
						}
							options={ [
								{ value: null, label: __('', 'webkompanen') },
								{ value: 'top-top', label: __('Top top', 'webkompanen' ) },
								{ value: 'center-top', label: __('Center top', 'webkompanen' ) },
								{ value: 'bottom-top', label: __('Bottom top', 'webkompanen' ) },
								{ value: 'top-center', label: __('Top center', 'webkompanen' ) },
								{ value: 'center-center', label: __('Center center', 'webkompanen' ) },
								{ value: 'bottom-center', label: __('Bottom center', 'webkompanen' ) },
								{ value: 'top-bottom', label: __('Top bottom', 'webkompanen' ) },
								{ value: 'center-bottom', label: __('Center bottom', 'webkompanen' ) },
								{ value: 'bottom-bottom', label: __('Bottom bottom', 'webkompanen' ) }
							] }
						/>
						<ToggleControl
							label={__('AOS once', 'webkompanen')}
							help={ attributes.dataaosonce ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
							checked={ attributes.dataaosonce }
							onChange={ 
								(e) => {
									setAttributes({
										dataaosonce: ! attributes.dataaosonce
									})
								}
							}
						/>
						<InputControl
							label={__('AOS anchor', 'webkompanen')}
							labelPosition="top"
							value={ attributes.dataaosanchor }
							type="text"
							isPressEnterToChange
							onChange={ 
								( nextvalue ) => {
									setAttributes({
										dataaosanchor:nextvalue
									})
								}
							}
						/>
						<InputControl
							label={__('AOS Duration', 'webkompanen')}
							labelPosition="top"
							value={ attributes.dataaosduration }
							type="number"
							isPressEnterToChange
							onChange={ 
								( nextvalue ) => {
									setAttributes({
										dataaosduration:Number(nextvalue)
									})
								}
							}
						/>
						<InputControl
							label={__('AOS delay', 'webkompanen')}
							labelPosition="top"
							value={ attributes.dataaosdelay }
							type="number"
							isPressEnterToChange
							onChange={ 
								( nextvalue ) => {
									setAttributes({
										dataaosdelay:Number(nextvalue)
									})
								}
							}
						/>
						<InputControl
							label={__('AOS Offset', 'webkompanen')}
							labelPosition="top"
							value={ attributes.dataaosoffset }
							type="number"
							isPressEnterToChange
							onChange={ 
								( nextvalue ) => {
									setAttributes({
										dataaosoffset:Number(nextvalue)
									})
								}
							}
						/>
					</PanelBody>	
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
									{__('25%', 'webkompanen')}
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
									{__('25%', 'webkompanen')}
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
									{__('50%', 'webkompanen')}
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
									{__('50%', 'webkompanen')}
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
									{__('75%', 'webkompanen')}
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
									{__('75%', 'webkompanen')}
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
									{__('100%', 'webkompanen')}
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
									{__('100%', 'webkompanen')}
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
									{__('25%', 'webkompanen')}
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
									{__('25%', 'webkompanen')}
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
									{__('50%', 'webkompanen')}
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
									{__('50%', 'webkompanen')}
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
									{__('75%', 'webkompanen')}
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
									{__('75%', 'webkompanen')}
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
									{__('100%', 'webkompanen')}
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
									{__('100%', 'webkompanen')}
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
									{__('25%', 'webkompanen')}
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
									{__('25%', 'webkompanen')}
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
									{__('50%', 'webkompanen')}
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
									{__('50%', 'webkompanen')}
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
									{__('75%', 'webkompanen')}
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
									{__('75%', 'webkompanen')}
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
									{__('100%', 'webkompanen')}
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
									{__('100%', 'webkompanen')}
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
										{__('1x1', 'webkompanen')}
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
										{__('1x1', 'webkompanen')}
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
										{__('4x3', 'webkompanen')}
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
										{__('4x3', 'webkompanen')}
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
										{__('16x9', 'webkompanen')}
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
										{__('16x9', 'webkompanen')}
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
										{__('21x9', 'webkompanen')}
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
										{__('21x9', 'webkompanen')}
									</Button>

							}
						</ButtonGroup>
					</PanelBody>
					<PanelBody
						title={__('Classes', 'webkompanen')}
						initialOpen={false}
					>
						<InputControl
							label={__('Classes', 'webkompanen')}
							labelPosition="top"
							value={ attributes.classes }
							type="text"
							isPressEnterToChange
							onChange={ 
								(nextValue) => {
									setAttributes({
										classes: nextValue
									})
								} 
							}
						/>
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
					<HeightEdit
						props={props}
					/>
				</InspectorControls>
			</Fragment>	
			
			{
				bgimg && (
  					<div 
						{ ...innerBlocksProps }
						style={
							{
								'background':'inline-block',
								'backgroundRepeat': 'no-repeat',
								'backgroundImage': 'url("'+bgimg+'")',
								'backgroundSize': 'cover',
								'backgroundPosition': 'center center',
								'width': '100%',
								'height': '100%',
								'opacity': '1',
								'visibility': 'inherit',
								'zIndex': '20',
							}
						}
						data-aos={attributes.dataaos && attributes.dataaos != '' ? attributes.dataaos : null}
						data-aos-easing={attributes.dataaoseasing && attributes.dataaoseasing != '' ? attributes.dataaoseasing : null}
						data-aos-anchor-placement={attributes.dataaosanchorplacement && attributes.dataaosanchorplacement != '' ? attributes.dataaosanchorplacement : null}
						data-aos-once={attributes.dataaosonce && attributes.dataaosonce != '' ? attributes.dataaosonce : null}
						data-aos-anchor={attributes.dataaosanchor && attributes.dataaosanchor != '' ? attributes.dataaosanchor : null}
						data-aos-duration={attributes.dataaosduration && attributes.dataaosduration != '' ? attributes.dataaosduration : null}
						data-aos-delay={attributes.dataaosdelay && attributes.dataaosdelay != '' ? attributes.dataaosdelay : null}
						data-aos-offset={attributes.dataaosoffset && attributes.dataaosoffset != '' ? attributes.dataaosoffset : null}
					>
						
  					</div>
				)
			}
			{
				!bgimg && (
  					<div 
						{ ...innerBlocksProps }
					>
						
  					</div>
				)
			}
		</>
	)
}


/*export default withSelect((select, props) => {
	return { 
		headerImageInfo: props.attributes.headerImageId ? select('core').getMedia(props.attributes.headerImageId) : undefined
	};
})(HeaderEdit);*/

export default sectionEdit;