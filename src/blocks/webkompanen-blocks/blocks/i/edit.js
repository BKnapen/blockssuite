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
	//console.log(iconArray)
	//console.log('iconArray')
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
						label={__('My very own custom button', 'webkompanen')}
						icon="edit"
						className="my-custom-button"
						onClick={() => 'pressed button'}
					/>
            		<ToolbarGroup>
                		<ToolbarButton icon={ paragraph } label={__(''Paragraph, 'webkompanen')} />
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
						title={__('ID', 'webkompanen')}
						initialOpen={false}
					>
						<InputControl
							label={__('ID', 'webkompanen')}
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
						title={__('Link', 'webkompanen')}
						initialOpen={false}
					>
						<div 
							className="row"
						>
							<div className="col-12">
								<InputControl
									label={__('URL', 'webkompanen')}
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
						title={__('Typografie', 'webkompanen')}
						initialOpen={false}
					>
						<div 
							className="row"
						>
							<div className="col-12">
								<SelectControl
									label={ __( 'Text transform', 'webkompanen' ) }
									value={ attributes.texttransform } // e.g: value = [ 'a', 'c' ]
									onChange={ 
										( nextSelect ) => {
											setAttributes( {
												texttransform:nextSelect
											} ) 
										} 
									}
									options={ [
										{ value: null, label: __('', 'webkompanen' ) },
										{ value: 'text-lowercase', label: __('Lowercase', 'webkompanen' ) },
										{ value: 'text-uppercase', label: __('Uppercase', 'webkompanen' ) },
										{ value: 'text-capitalize', label: __('Capitalize', 'webkompanen' ) }
									] }
								/>
							</div>
						</div>
						<div 
							className="row"
						>
							<div className="col-12">
								<SelectControl
									label={ __( 'Font size', 'webkompanen' ) }
									value={ attributes.fs } // e.g: value = [ 'a', 'c' ]
									onChange={ 
										( nextSelect ) => {
											setAttributes( {
												fs:Number(nextSelect)
											} ) 
										} 
									}
									options={ [
										{ value: null, label: __('', 'webkompanen' ) },
										{ value: 1, label: __('fs-1', 'webkompanen' ) },
										{ value: 2, label: __('fs-2', 'webkompanen' ) },
										{ value: 3, label: __('fs-3', 'webkompanen' ) },
										{ value: 4, label: __('fs-4', 'webkompanen' ) },
										{ value: 5, label: __('fs-5', 'webkompanen' ) },
										{ value: 6, label: __('fs-6', 'webkompanen' ) }
									] }
								/>
							</div>
						</div>
						<div 
							className="row"
						>
							<div className="col-12">
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
							</div>
						</div>
						<div 
							className="row"
						>
							<div className="col-12">
								<SelectControl
									label={ __( 'Line height', 'webkompanen' ) }
									value={ attributes.lh } // e.g: value = [ 'a', 'c' ]
									onChange={ 
										( nextSelect ) => {
											setAttributes( {
												lh:nextSelect
											} ) 
										} 
									}
									options={ [
										{ value: null, label: __('', 'webkompanen' ) },
										{ value: 'lh-1', label: __('Lineheight 1', 'webkompanen' ) },
										{ value: 'lh-sm', label: __('Lineheight small', 'webkompanen' ) },
										{ value: 'lh-base', label: __('Lineheight base', 'webkompanen' ) },
										{ value: 'lh-lg', label: __('Lineheight large', 'webkompanen' ) }
									] }
								/>
							</div>
						</div>
						<div 
							className="row"
						>
							<div className="col-12">
								<SelectControl
									label={ __( 'Text decoration', 'webkompanen' ) }
									value={ attributes.textdecoration } // e.g: value = [ 'a', 'c' ]
									onChange={ 
										( nextSelect ) => {
											setAttributes( {
												textdecoration:nextSelect
											} ) 
										} 
									}
									options={ [
										{ value: null, label: __('', 'webkompanen' ) },
										{ value: 'text-textdecoration-underline', label: __('Underline', 'webkompanen' ) },
										{ value: 'text-textdecoration-line-through', label: __('Line through', 'webkompanen' ) },
										{ value: 'text-textdecoration-none', label: __('None', 'webkompanen' ) }
									] }
								/>
							</div>
						</div>
					</PanelBody>
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