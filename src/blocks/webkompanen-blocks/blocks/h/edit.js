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
const HeadingEdit = (props) => {
	const {
		attributes,
		setAttributes,
		className,
		clientId
	} = props;
	
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
						label={__('My very own custom button', 'webkompanen')}
						icon="edit"
						className="my-custom-button"
						onClick={() => 'pressed button'}
					/>
            		<ToolbarGroup>
                		<ToolbarButton icon={ paragraph } label={__('Paragraph', 'webkompanen')} />
            		</ToolbarGroup>
            		<ToolbarGroup>
                		<ToolbarButton icon={ formatBold } label={__('Bold', 'webkompanen')} />
                		<ToolbarButton icon={ formatItalic } label={__('Italic', 'webkompanen')} />
                		<ToolbarButton icon={ link } label={__('Link', 'webkompanen')} />
            		</ToolbarGroup>*/
	
	return(
		<>	
			<Fragment>		
				<InspectorControls>
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
								{ value: null, label: __('', 'webkompanen' ) },
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
								{ value: null, label: __('', 'webkompanen' ) },
								{ value: 'linear', label: __('Linear', 'webkompanen' ) },
								{ value: 'ease', label: __('Ease', 'webkompanen' ) },
								{ value: 'ease-in', label: __('Ease in', 'webkompanen' ) },
								{ value: 'ease-out', label: __('Ease out', 'webkompanen' ) },
								{ value: 'ease-in-out', label: __('Ease in out', 'webkompanen' ) },
								{ value: 'ease-in-back', label: __('Ease in back', 'webkompanen' ) },
								{ value: 'ease-out-back', label: __('Ease out back', 'webkompanen' ) },
								{ value: 'ease-in-out-back', label: __('Ease in out back', 'webkompanen' ) },
								{ value: 'ease-in-sine', label: __('Ease in sine', 'webkompanen' ) },
								{ value: 'ease-out-sine', label: __('Ease out sine', 'webkompanen' ) },
								{ value: 'ease-in-out-sine', label: __('Ease in out sine', 'webkompanen' ) },
								{ value: 'ease-in-quad', label: __('Ease in quad', 'webkompanen' ) },
								{ value: 'ease-out-quad', label: __('Ease out quad', 'webkompanen' ) },
								{ value: 'ease-in-out-quad', label: __('Ease in out quad', 'webkompanen' ) },
								{ value: 'ease-in-cubic', label: __('Ease in cubic', 'webkompanen' ) },
								{ value: 'ease-out-cubic', label: __('Ease out cubic', 'webkompanen' ) },
								{ value: 'ease-in-out-cubic', label: __('Ease in out cubic', 'webkompanen' ) },
								{ value: 'ease-in-quart', label: __('Ease in quart', 'webkompanen' ) },
								{ value: 'ease-out-quart', label: __('Ease out quart', 'webkompanen' ) },
								{ value: 'ease-in-out-quart', label: __('Ease in out quart', 'webkompanen' ) },
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
						label={ __( 'Font size', 'webkompanen' ) }
						value={ attributes.fs } // e.g: value = [ 'a', 'c' ]
						onChange={ 
							( nextSelect ) => {
								setAttributes( {
									fs:nextSelect
								} ) 
							} 
						}
						options={ [
							{ value: null, label: __('', 'webkompanen' ) },
							{ value: 'fs-1', label: __('font size 1', 'webkompanen' ) },
							{ value: 'fs-2', label: __('font size 2', 'webkompanen' ) },
							{ value: 'fs-3', label: __('font size 3', 'webkompanen' ) },
							{ value: 'fs-4', label: __('font size 4', 'webkompanen' ) },
							{ value: 'fs-5', label: __('font size 5', 'webkompanen' ) },
							{ value: 'fs-6', label: __('font size 6', 'webkompanen' ) }
						] }
					/>	
					<SelectControl
						label={ __( 'Font weight and italics', 'webkompanen' ) }
						value={ attributes.fw } // e.g: value = [ 'a', 'c' ]
						onChange={ 
							( nextSelect ) => {
								setAttributes( {
									fw:nextSelect
								} ) 
							} 
						}
						options={ [
							{ value: null, label: __('', 'webkompanen' ) },
							{ value: 'fw-bold', label: __('Bold text', 'webkompanen' ) },
							{ value: 'fw-bolder', label: __('Bolder weight text', 'webkompanen' ) },
							{ value: 'fw-semibold', label: __('Semibold weight text', 'webkompanen' ) },
							{ value: 'fw-normal', label: __('Normal weight text', 'webkompanen' ) },
							{ value: 'fw-light', label: __('Light weight text', 'webkompanen' ) },
							{ value: 'fw-lighter', label: __('Lighter weight text', 'webkompanen' ) },
							{ value: 'fst-italic', label: __('Italic text', 'webkompanen' ) },
							{ value: 'fst-normal', label: __('Text with normal font style', 'webkompanen' ) }
						] }
					/>		
					<PanelBody
						title={__('Tekst', 'webkompanen')}
						initialOpen={false}
					>
						<div>
							<TextareaControl
								label={__('Text', 'webkompanen')}
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
                        	label={ __('Heading', 'webkompanen') }
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
                        	label={ __('Text align', 'webkompanen') }
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
               	value={ attributes.content } // Any existing content, either from the database or an attribute default
				allowedFormats={ 
					[ 
						'core/italic', 
						'core/bold',
						'webkompanen-blocks/color',
						'webkompanen-blocks/href'
					] 
				} // Allow the content to be made bold or italic, but do not allow other formatting options
               	onChange={ 
					( newcontent ) => setAttributes( { 
						content: newcontent 
					} ) 
				} // Store updated content as a block attribute
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

export default HeadingEdit;