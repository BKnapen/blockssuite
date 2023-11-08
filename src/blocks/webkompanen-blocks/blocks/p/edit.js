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
	Toolbar
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
const paragraphEdit = (props) => {
	const {
		attributes,
		setAttributes,
		className,
		onChange,
		clientId
	} = props;
	
	const ALLOWED_BLOCKS = [ 
		'webkompanen/row'
	]
	
	const hasInnerBlocks = useSelect( ( select ) =>
		select( blockEditorStore ).getBlocks( clientId ).length > 0,
		[ clientId ]
	);
	
	const formattypes = wp.data.select( 'core/rich-text' ).getFormatTypes();
	
	const margin = new Margin(props)
	const negativemargin = new NegativeMargin(props)
	const padding = new Padding(props)
	const display = new Display(props)
	const position = new Position(props)
	const col = new Col(props)
	const color = new Color(props)
	const backgroundcolor = new Backgroundcolor(props)
	
	const classes = attributes.classes ? attributes.classes : ''
	
	let blockClasses = '';

	blockClasses += classes != null && classes != '' ? ' '+classes : ''
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
	blockClasses += attributes.textalignment != null && attributes.textalignment != '' ? ' '+attributes.textalignment : ''

	blockClasses = blockClasses.replace(/^\s+|\s+$/gm,'');
	blockClasses = blockClasses.replace(/\s+\s+/gm,' ');
	blockClasses = blockClasses == '' ? null : blockClasses

	
	const blockProps = useBlockProps( { className: blockClasses } );
	//https://wordpress.stackexchange.com/questions/367932/create-a-custom-render-appender-button-to-add-inner-blocks
	
	return(
		<>	
			<Fragment>		
				<InspectorControls>
					<ColorEdit 
						props={props}
					/>
					<BackgroundcolorEdit 
						props={props}
					/>
					<PanelBody
						title={__('Typography', 'awp')}
						initialOpen={false}
					>
						<div 
							className="row"
						>
							<div className="col-12">
								<SelectControl
									label={ __( 'Text alignment' ) }
									value={ attributes.textalignment } // e.g: value = [ 'a', 'c' ]
									onChange={ 
										( nextSelect ) => {
											setAttributes( {
												textalignment:nextSelect
											} ) 
										} 
									}
									options={ [
										{ value: null, label: '' },
										{ value: 'text-start', label: __( 'Left' ) },
										{ value: 'text-center', label: __( 'Center' ) },
										{ value: 'text-right', label: __( 'Right' ) }
									] }
								/>
							</div>
						</div>
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
					<PositionEdit 
						props={props}
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
					<PanelBody
						title={__('Tekst', 'awp')}
						initialOpen={false}
					>
						<div>
							<Button
								isPrimary
								onClick={ 
									() => {
										// Block ID - reference
										var blockUID = wp.data.select('core/block-editor').getSelectedBlock().clientId;

										// Start of selection
										var selectionStart = wp.data.select('core/block-editor').getSelectionStart();

										// End of selection
										var selectionEnd = wp.data.select('core/block-editor').getSelectionEnd();

										var block = wp.data.select('core/block-editor').getSelectedBlock();
 
										// Attributes
										var blockAttributes = block.attributes;
 
										// Content
										var blockContent = block.attributes.content;

										console.log(blockContent)

										var richTextContent = wp.richText.create({ 
											text: blockContent,
  											formats: [],
  											replacements: [],
										});
										
										console.log(richTextContent)

										richTextContent = wp.richText.applyFormat(
											richTextContent, 
											{ type: 'webkompanen-blocks/fontawesomeicon',
												attributes:{className: "fa-solid fa-circle"} 
											}, 
											selectionStart.offset, 
											selectionEnd.offset
										);

										/*richTextContent = wp.richText.insertObject(
											richTextContent,
											'webkompanen-blocks/fontawesomeicon',
											selectionStart.offset,
											selectionEnd.offset
										)*/

										console.log('richTextContent')
										console.log(richTextContent)

										var prepNewHTML = wp.richText.toHTMLString(
											{ 
												value:richTextContent 
											}
										);

										wp.data.dispatch( 'core/block-editor' ).updateBlock( blockUID, {
											attributes: {
											  content: prepNewHTML
											}
										} );
									}
								}
							>
								TEST
							</Button>
						</div>
					</PanelBody>
				</InspectorControls>
			</Fragment>
			<RichText
				{ ...blockProps }
				//className="display-4"
               	tagName="p" // The tag here is the element output and editable in the admin
               	value={ attributes.content } // Any existing content, either from the database or an attribute default
				allowedFormats={ 
					[ 
						'core/italic', 
						'core/bold',
						'webkompanen-blocks/color',
						'webkompanen-blocks/href',
						'webkompanen-blocks/fontawesomeicon',
						'webkompanen-blocks/fontsize'
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

export default paragraphEdit;