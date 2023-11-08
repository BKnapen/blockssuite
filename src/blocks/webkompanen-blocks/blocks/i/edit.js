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
	ButtonGroup,
	ResponsiveWrapper,
	Toolbar,
	ToolbarItem,
	DropdownMenu,
	ToolbarButton,
	ToolbarGroup,
	Autocomplete,
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
import fontawasomeicons from './icons.json'

/*function HeaderEdit( props ) {*/







const iEdit = (props) => {
	const {
		attributes,
		setAttributes,
		className,
		clientId
	} = props;
	
	let iconArray = []

	Object.keys(fontawasomeicons).map(
		(fontawasomeicon, index) => {
			if(fontawasomeicon){
				if(fontawasomeicons[fontawasomeicon]['free'].length > 0)(
					fontawasomeicons[fontawasomeicon]['free'].map(
						(free, i) => {
						iconArray.push({
							value: fontawasomeicon, 
							label: fontawasomeicons[fontawasomeicon]['label'], 
							group:free, 
							name:fontawasomeicon,
							id: (index+1)+i
						})
						}
					)
				)
			}
		}
	)

	const formattypes = wp.data.select( 'core/rich-text' ).getFormatTypes();
	console.log(iconArray)
	console.log('iconArray')
	const autoConfigs = [
		{
			name: "Autocomplete",
			// The prefix that triggers this completer
			triggerPrefix: "/",
			value:"",
			// The option data
			options: iconArray,
			// Returns a label for an option like "🍊 Orange"
			getOptionLabel: option => (
				<span>
					<i className={`fa-${option.group} fa-${option.value}`} /> { option.label }
				</span>
			),
			// Declares that options should be matched by their name or value
			getOptionKeywords: option => [ option.label, option.value ],
			// Declares that the Grapes option is disabled
			getOptionCompletion: option => (
				<i className={`fa-${option.group} fa-${option.value}`}></i>
			),
		}
	];
	
	const margin = new Margin(props)
	const negativemargin = new NegativeMargin(props)
	const padding = new Padding(props)
	const display = new Display(props)
	const position = new Position(props)
	const color = new Color(props)
	const backgroundcolor = new Backgroundcolor(props)
	
	const classes = attributes.classes ? ' '+attributes.classes : '';
	const blockID = attributes.blockid ? ''+attributes.blockid : null;
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
	blockClasses += attributes.fs != null && attributes.fs != '' ? ' fs-'+attributes.fs : ''
	blockClasses += attributes.fw != null && attributes.fw != '' ? ' '+attributes.fw : ''
	blockClasses += attributes.texttransform != null && attributes.texttransform != '' ? ' '+attributes.texttransform : ''
	blockClasses += attributes.textdecoration != null && attributes.textdecoration != '' ? ' '+attributes.textdecoration : ''
	blockClasses += attributes.lh != null && attributes.lh != '' ? ' '+attributes.lh : ''
	
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
						title={__('ID', 'awp')}
						initialOpen={false}
					>
						<InputControl
							label="id"
							labelPosition="top"
							value={ attributes.blockid }
							type="text"
							isPressEnterToChange
							onChange={ 
								(nextValue) => {
									setAttributes({
										blockid: nextValue
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
					<PanelBody
						title={__('Link', 'awp')}
						initialOpen={false}
					>
						<div 
							className="row"
						>
							<div className="col-12">
								<InputControl
									label="Url"
									labelPosition="top"
									value={ attributes.url }
									type="text"
									isPressEnterToChange
									onChange={ 
										(nextValue) => {
											setAttributes({
												url: nextValue
											})
										} 
									}
								/>
							</div>
						</div>
					</PanelBody>
					<PanelBody
						title={__('Typografie', 'awp')}
						initialOpen={false}
					>
						<div 
							className="row"
						>
							<div className="col-12">
								<SelectControl
									label={ __( 'Text transform' ) }
									value={ attributes.texttransform } // e.g: value = [ 'a', 'c' ]
									onChange={ 
										( nextSelect ) => {
											setAttributes( {
												texttransform:nextSelect
											} ) 
										} 
									}
									options={ [
										{ value: null, label: '' },
										{ value: 'text-lowercase', label: 'Lowercase' },
										{ value: 'text-uppercase', label: 'Uppercase' },
										{ value: 'text-capitalize', label: 'Capitalize' }
									] }
								/>
							</div>
						</div>
						<div 
							className="row"
						>
							<div className="col-12">
								<SelectControl
									label={ __( 'Font size' ) }
									value={ attributes.fs } // e.g: value = [ 'a', 'c' ]
									onChange={ 
										( nextSelect ) => {
											setAttributes( {
												fs:Number(nextSelect)
											} ) 
										} 
									}
									options={ [
										{ value: null, label: '' },
										{ value: 1, label: 'fs-1' },
										{ value: 2, label: 'fs-2' },
										{ value: 3, label: 'fs-3' },
										{ value: 4, label: 'fs-4' },
										{ value: 5, label: 'fs-5' },
										{ value: 6, label: 'fs-6' }
									] }
								/>
							</div>
						</div>
						<div 
							className="row"
						>
							<div className="col-12">
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
							</div>
						</div>
						<div 
							className="row"
						>
							<div className="col-12">
								<SelectControl
									label={ __( 'Line height' ) }
									value={ attributes.lh } // e.g: value = [ 'a', 'c' ]
									onChange={ 
										( nextSelect ) => {
											setAttributes( {
												lh:nextSelect
											} ) 
										} 
									}
									options={ [
										{ value: null, label: '' },
										{ value: 'lh-1', label: 'Lineheight 1' },
										{ value: 'lh-sm', label: 'Lineheight small' },
										{ value: 'lh-base', label: 'Lineheight base' },
										{ value: 'lh-lg', label: 'Lineheight large' }
									] }
								/>
							</div>
						</div>
						<div 
							className="row"
						>
							<div className="col-12">
								<SelectControl
									label={ __( 'Text decoration' ) }
									value={ attributes.textdecoration } // e.g: value = [ 'a', 'c' ]
									onChange={ 
										( nextSelect ) => {
											setAttributes( {
												textdecoration:nextSelect
											} ) 
										} 
									}
									options={ [
										{ value: null, label: '' },
										{ value: 'text-textdecoration-underline', label: 'Underline' },
										{ value: 'text-textdecoration-line-through', label: 'Line through' },
										{ value: 'text-textdecoration-none', label: 'None' }
									] }
								/>
							</div>
						</div>
					</PanelBody>
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
													color:attributes.fs == 1 || !attributes.tagname ? '#ffffff' : '',
    												background:attributes.fs == 1 || !attributes.tagname ? '#000000' : ''
												}
											}
										/>
									</>,
									onClick: (e) => {
										setAttributes({
											fs:1
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
													color:attributes.fs == 2 ? '#ffffff' : '',
    												background:attributes.fs == 2 ? '#000000' : ''
												}
											}
										/>
									</>,
									onClick: (e) => {
										setAttributes({
											fs:2
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
													color:attributes.fs == 3 ? '#ffffff' : '',
    												background:attributes.fs == 3 ? '#000000' : ''
												}
											}
										/>
									</>,
									onClick: (e) => {
										setAttributes({
											fs:3
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
													color:attributes.fs == 4 ? '#ffffff' : '',
    												background:attributes.fs == 4 ? '#000000' : ''
												}
											}
										/>
									</>,
									onClick: (e) => {
										setAttributes({
											fs:3
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
													color:attributes.fs == 5 ? '#ffffff' : '',
    												background:attributes.fs == 5 ? '#000000' : ''
												}
											} 
										/>
									</>,
									onClick: (e) => {
										setAttributes({
											fs:5
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
													color:attributes.fs == 6 ? '#ffffff' : '',
    												background:attributes.fs == 6 ? '#000000' : ''
												}
											}
										/>
									</>,
									onClick: (e) => {
										setAttributes({
											fs:6
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
				{...blockProps}
				autocompleters={ autoConfigs }
				id={blockID}
				value={attributes.content}
				tagName={attributes.url ? 'a' : 'i'}
				href={attributes.url ? attributes.url : null}
				target='_blank'
				rel='noopener'
				onChange={ ( newValue ) => {
					setAttributes( { content: newValue } );
				} }
				allowedFormats={ 
					[ 
					] 
				}
				placeholder={ __(`Type ${autoConfigs[0].triggerPrefix} to choose a ${autoConfigs[0].value}`) }
            />	
		</>
	)
}


/*export default withSelect((select, props) => {
	return { 
		headerImageInfo: props.attributes.headerImageId ? select('core').getMedia(props.attributes.headerImageId) : undefined
	};
})(HeaderEdit);*/

export default iEdit;