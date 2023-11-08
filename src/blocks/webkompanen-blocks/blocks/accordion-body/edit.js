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
						title={__('AOS', 'awp')}
						initialOpen={false}
					>
						<SelectControl
							label={ __( 'AOS' ) }
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
								{ value: null, label: '' },
								{ value: 'fade-up', label: 'Fade up' },
								{ value: 'fade-down', label: 'Fade down' },
								{ value: 'fade-right', label: 'Fade right' },
								{ value: 'fade-left', label: 'Fade left' },
								{ value: 'fade-up-right', label: 'Fade up right' },
								{ value: 'fade-up-left', label: 'Fade up left' },
								{ value: 'fade-down-right', label: 'Fade down right' },
								{ value: 'slide-up', label: 'Slide up' },
								{ value: 'slide-down', label: 'Slide down' },
								{ value: 'slide-right', label: 'Slide right' },
								{ value: 'slide-left', label: 'Slide left' },
								{ value: 'flip-left', label: 'Flip left' },
								{ value: 'flip-right', label: 'Flip right' },
								{ value: 'flip-up', label: 'Flip up' },
								{ value: 'flip-down', label: 'Flip down' },
								{ value: 'zoom-in', label: 'Zoom in' },
								{ value: 'zoom-in-up', label: 'Zoom in up' },
								{ value: 'zoom-in-down', label: 'Zoom in down' },
								{ value: 'zoom-in-left', label: 'Zoom in left' },
								{ value: 'zoom-in-right', label: 'Zoom in right' },
								{ value: 'zoom-out', label: 'Zoom out' },
								{ value: 'zoom-out-up', label: 'Zoom out up' },
								{ value: 'zoom-out-down', label: 'Zoom out down' },
								{ value: 'zoom-out-right', label: 'Zoom out right' },
								{ value: 'zoom-out-left', label: 'Zoom out left' }
							] }
						/>
						<SelectControl
							label={ __( 'AOS easing' ) }
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
								{ value: null, label: '' },
								{ value: 'linear', label: 'Linear' },
								{ value: 'ease', label: 'Ease' },
								{ value: 'ease-in', label: 'Ease in' },
								{ value: 'ease-out', label: 'Ease out' },
								{ value: 'ease-in-out', label: 'Ease in out' },
								{ value: 'ease-in-back', label: 'Ease in back' },
								{ value: 'ease-out-back', label: 'Ease out back' },
								{ value: 'ease-in-out-back', label: 'Ease in out back' },
								{ value: 'ease-in-sine', label: 'Ease in sine' },
								{ value: 'ease-out-sine', label: 'Ease out sine' },
								{ value: 'ease-in-out-sine', label: 'Ease in out sine' },
								{ value: 'ease-in-quad', label: 'Ease in quad' },
								{ value: 'ease-out-quad', label: 'Ease out quad' },
								{ value: 'ease-in-out-quad', label: 'Ease in out quad' },
								{ value: 'ease-in-cubic', label: 'Ease in cubic' },
								{ value: 'ease-out-cubic', label: 'Ease out cubic' },
								{ value: 'ease-in-out-cubic', label: 'Ease in out cubic' },
								{ value: 'ease-in-quart', label: 'Ease in quart' },
								{ value: 'ease-out-quart', label: 'Ease out quart' },
								{ value: 'ease-in-out-quart', label: 'Ease in out quart' },
							] }
						/>
						<SelectControl
							label={ __( 'AOS easing anchor placement' ) }
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
								{ value: null, label: '' },
								{ value: 'top-top', label: 'Top top' },
								{ value: 'center-top', label: 'Center top' },
								{ value: 'bottom-top', label: 'Bottom top' },
								{ value: 'top-center', label: 'Top center' },
								{ value: 'center-center', label: 'Center center' },
								{ value: 'bottom-center', label: 'Bottom center' },
								{ value: 'top-bottom', label: 'Top bottom' },
								{ value: 'center-bottom', label: 'Center bottom' },
								{ value: 'bottom-bottom', label: 'Bottom bottom' }
							] }
						/>
						<ToggleControl
							label="AOS once"
							help={ attributes.dataaosonce ? 'Yes.' : 'No.' }
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
							label="AOS anchor"
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
							label="AOS Duration"
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
							label="AOS delay"
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
							label="AOS Offset"
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
						title={__('Height', 'awp')}
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
						title={__('View height', 'awp')}
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
						title={__('width', 'awp')}
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
						title={__('Aspect ratio', 'awp')}
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
					<PanelBody
						title={__('Classes', 'awp')}
						initialOpen={false}
					>
						<InputControl
							label="Classes"
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