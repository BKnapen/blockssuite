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
	link,
	paragraph, 
	formatBold, 
	formatItalic,
	Icon
} from '@wordpress/icons';

import {
	useState,
	Fragment
} from '@wordpress/element';

import {
	TextareaControl,
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
	Toolbar,
	ToolbarItem,
	DropdownMenu,
	ToolbarButton,
	ToolbarGroup,
	__experimentalInputControl as InputControl
} from '@wordpress/components';

import { useEntityProp } from '@wordpress/core-data';

import {
	heading as headingicon,
	heading1 as heading1icon,
	heading2 as heading2icon,
	heading3 as heading3icon,
	heading4 as heading4icon,
	heading5 as heading5icon,
	heading6 as heading6icon,
	textcenter,
	textleft,
	textright
} from '../../icons'

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
const siteTitleEdit = (props) => {
	const {
		attributes,
		setAttributes,
		className,
		clientId,
		context: { postType, postId, queryId },
	} = props;

	
	const [ rawTitle = '', setTitle, fullTitle ] = useEntityProp(
		'postType',
		postType,
		'title',
		postId
	);

	const formattypes = wp.data.select( 'core/rich-text' ).getFormatTypes();

	const margin = new Margin(props)
	const negativemargin = new NegativeMargin(props)
	const padding = new Padding(props)
	const display = new Display(props)
	const position = new Position(props)
	const color = new Color(props)
	const backgroundcolor = new Backgroundcolor(props)
	
	const classes = attributes.classes ? ' '+attributes.classes : '';
	const textalign = attributes.textalign ? ' '+attributes.textalign : '';
	const texttransform = attributes.texttransform ? ' '+attributes.texttransform : '';
	
	let blockClasses = '';

	blockClasses += classes != null && classes != '' ? ' '+classes : ''
	blockClasses += textalign != null && textalign != '' ? ' '+textalign : ''
	blockClasses += texttransform != null && texttransform != '' ? ' '+texttransform : ''
	blockClasses += backgroundcolor.classes() != null && backgroundcolor.classes() != '' ? ' '+backgroundcolor.classes() : ''
	blockClasses += color.classes() != null && color.classes() != '' ? ' '+color.classes() : ''
	blockClasses += margin.classes() != null && margin.classes() != '' ? ' '+margin.classes() : ''
	blockClasses += negativemargin.classes() != null && negativemargin.classes() != '' ? ' '+negativemargin.classes() : ''
	blockClasses += padding.classes() != null && padding.classes() != '' ? ' '+padding.classes() : ''
	blockClasses += display.classes() != null && display.classes() != '' ? ' '+display.classes() : ''
	blockClasses += position.classes() != null && position.classes() != '' ? ' '+position.classes() : ''
	blockClasses += attributes.fw != null && attributes.fw != '' ? ' '+attributes.fw : ''
	blockClasses += attributes.fs != null && attributes.fs != '' ? ' '+attributes.fs : ''
	
	blockClasses = blockClasses.replace(/^\s+|\s+$/gm,'');
	blockClasses = blockClasses.replace(/\s+\s+/gm,' ');
	blockClasses = blockClasses == '' ? null : blockClasses

	const blockProps = useBlockProps( { className: blockClasses } );
	//https://wordpress.stackexchange.com/questions/367932/create-a-custom-render-appender-button-to-add-inner-blocks
	
					/*<IconButton
						label="My very own custom button"
						icon="edit"
						className="my-custom-button"
						onClick={() => 'pressed button'}
					/>
            		<ToolbarGroup>
                		<ToolbarButton icon={ paragraph } label="Paragraph" />
            		</ToolbarGroup>
            		<ToolbarGroup>
                		<ToolbarButton icon={ formatBold } label="Bold" />
                		<ToolbarButton icon={ formatItalic } label="Italic" />
                		<ToolbarButton icon={ link } label="Link" />
            		</ToolbarGroup>*/
	
	return(
		<>	
			<Fragment>		
				<InspectorControls>
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
					<ColorEdit 
						props={props}
					/>
					<BackgroundcolorEdit 
						props={props}
					/>
					<PositionEdit 
						props={props}
					/>
					<SelectControl
						label={ __( 'Font size' ) }
						value={ attributes.fs } // e.g: value = [ 'a', 'c' ]
						onChange={ 
							( nextSelect ) => {
								setAttributes( {
									fs:nextSelect
								} ) 
							} 
						}
						options={ [
							{ value: null, label: '' },
							{ value: 'fs-1', label: 'font size 1' },
							{ value: 'fs-2', label: 'font size 2' },
							{ value: 'fs-3', label: 'font size 3' },
							{ value: 'fs-4', label: 'font size 4' },
							{ value: 'fs-5', label: 'font size 5' },
							{ value: 'fs-6', label: 'font size 6' }
						] }
					/>	
					<SelectControl
						label={ __( 'Font weight and italics' ) }
						value={ attributes.fw } // e.g: value = [ 'a', 'c' ]
						onChange={ 
							( nextSelect ) => {
								setAttributes( {
									fw:nextSelect
								} ) 
							} 
						}
						options={ [
							{ value: null, label: '' },
							{ value: 'fw-bold', label: 'Bold text' },
							{ value: 'fw-bolder', label: 'Bolder weight text' },
							{ value: 'fw-semibold', label: 'Semibold weight text' },
							{ value: 'fw-normal', label: 'Normal weight text' },
							{ value: 'fw-light', label: 'Light weight text' },
							{ value: 'fw-lighter', label: 'Lighter weight text' },
							{ value: 'fst-italic', label: 'Italic text' },
							{ value: 'fst-normal', label: 'Text with normal font style' }
						] }
					/>		
					<PanelBody
						title={__('Tekst', 'awp')}
						initialOpen={false}
					>
						<div>
							<TextareaControl
								label="Text"
								rows={5}
								value={ attributes.content }
								onChange={ 
									(nextValue) => {
										setAttributes({
											content: nextValue
										})
									} 
								}
							/>
						</div>
					</PanelBody>
				</InspectorControls>
			</Fragment>
			<BlockControls>
				<Toolbar>
            		<ToolbarItem>
                		{ ( toolbarItemHTMLProps ) => (
                    	<DropdownMenu
                        	icon={
						 		<>
						 			<Icon 
										icon={ headingicon } 
									/>
								</>
							}
		
                        	toggleProps={ toolbarItemHTMLProps }
                        	label={ 'Heading' }
                        	controls={ [					
								{
									title: '',
									icon:<>
						 				<Icon 
											icon={ heading1icon } 
											style={
												{
													color:attributes.tagname == 'h1' || !attributes.tagname ? '#ffffff' : '',
    												background:attributes.tagname == 'h1' || !attributes.tagname ? '#000000' : ''
												}
											}
										/>
									</>,
									onClick: (e) => {
										setAttributes({
											tagname:'h1'
										})
									}
								},				
								{
									title: '',
									icon:<>
						 				<Icon 
											icon={ heading2icon } 
											style={
												{
													color:attributes.tagname == 'h2' ? '#ffffff' : '',
    												background:attributes.tagname == 'h2' ? '#000000' : ''
												}
											}
										/>
									</>,
									onClick: (e) => {
										setAttributes({
											tagname:'h2'
										})
									}
								},			
								{
									title: '',
									icon:<>
						 				<Icon 
											icon={ heading3icon } 
											style={
												{
													color:attributes.tagname == 'h3' ? '#ffffff' : '',
    												background:attributes.tagname == 'h3' ? '#000000' : ''
												}
											}
										/>
									</>,
									onClick: (e) => {
										setAttributes({
											tagname:'h3'
										})
									}
								},			
								{
									title: '',
									icon:<>
						 				<Icon 
											icon={ heading4icon } 
											style={
												{
													color:attributes.tagname == 'h4' ? '#ffffff' : '',
    												background:attributes.tagname == 'h4' ? '#000000' : ''
												}
											}
										/>
									</>,
									onClick: (e) => {
										setAttributes({
											tagname:'h4'
										})
									}
								},			
								{
									title: '',
									icon:<>
						 				<Icon 
											icon={ heading5icon }
											style={
												{
													color:attributes.tagname == 'h5' ? '#ffffff' : '',
    												background:attributes.tagname == 'h5' ? '#000000' : ''
												}
											} 
										/>
									</>,
									onClick: (e) => {
										setAttributes({
											tagname:'h5'
										})
									}
								},			
								{
									title: '',
									icon:<>
						 				<Icon 
											icon={ heading6icon } 
											style={
												{
													color:attributes.tagname == 'h6' ? '#ffffff' : '',
    												background:attributes.tagname == 'h6' ? '#000000' : ''
												}
											}
										/>
									</>,
									onClick: (e) => {
										setAttributes({
											tagname:'h6'
										})
									}
								} 
							] }
                    	/>
                		) }
            		</ToolbarItem>
            		<ToolbarItem>
                		{ ( toolbarItemHTMLProps ) => (
                    	<DropdownMenu
                        	icon={
						 		<>
						 			<Icon 
										icon={ textcenter } 
									/>
								</>
							}
		
                        	toggleProps={ toolbarItemHTMLProps }
                        	label={ 'Text align' }
                        	controls={ [					
								{
									title: '',
									icon:<>
						 				<Icon 
											icon={ textleft } 
											style={
												{
													color:attributes.textalign == 'text-left' ? '#ffffff' : '',
    												background:attributes.textalign == 'text-left' ? '#000000' : ''
												}
											}
										/>
									</>,
									onClick: (e) => {
										setAttributes({
											textalign:'text-left'
										})
									}
								},		
								{
									title: '',
									icon:<>
						 				<Icon 
											icon={ textcenter } 
											style={
												{
													color:attributes.textalign == 'text-center' ? '#ffffff' : '',
    												background:attributes.textalign == 'text-center' ? '#000000' : ''
												}
											}
										/>
									</>,
									onClick: (e) => {
										setAttributes({
											textalign:'text-center'
										})
									}
								},		
								{
									title: '',
									icon:<>
						 				<Icon 
											icon={ textright } 
											style={
												{
													color:attributes.textalign == 'text-right' ? '#ffffff' : '',
    												background:attributes.textalign == 'text-right' ? '#000000' : ''
												}
											}
										/>
									</>,
									onClick: (e) => {
										setAttributes({
											textalign:'text-right'
										})
									}
								}
							] }
                    	/>
                		) }
            		</ToolbarItem>
				</Toolbar>
			</BlockControls>
			<RichText
				{ ...blockProps }
				//className="display-4"
               	tagName={ attributes.tagname ? attributes.tagname : 'h1' } // The tag here is the element output and editable in the admin
				value={ rawTitle }
               //value={ attributes.content } // Any existing content, either from the database or an attribute default
				allowedFormats={ 
					[ 
						'core/italic', 
						'core/bold',
						'webkompanen-blocks/color',
						'webkompanen-blocks/href'
					] 
				} // Allow the content to be made bold or italic, but do not allow other formatting options
               	onChange={ setTitle } // Store updated content as a block attribute
               	placeholder={ __( 'Text...' ) } // Display this text before any content has been added by the user
            />	
		</>
	)
}


/*export default withSelect((select, props) => {
	return { 
		headerImageInfo: props.attributes.headerImageId ? select('core').getMedia(props.attributes.headerImageId) : undefined
	};
})(HeaderEdit);*/

export default siteTitleEdit;