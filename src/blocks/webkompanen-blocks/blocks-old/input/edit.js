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
	__experimentalInputControl as InputControl,
	__experimentalBoxControl as BoxControl,
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
import { Bordercolor } from '../../utilities/bordercolor';

/* Editors */

import ColorEdit from '../../editor/color';
import BackgroundcolorEdit from '../../editor/backgroundcolor';
import BordercolorEdit from '../../editor/bordercolor';
import ColEdit from '../../editor/col';
import MarginEdit from '../../editor/margin';
import NegativeMarginEdit from '../../editor/negativemargin';
import PaddingEdit from '../../editor/padding';
import DisplayEdit from '../../editor/display';
import PositionEdit from '../../editor/position';

import { Units } from '../../utilities/units';

/*function HeaderEdit( props ) {*/
const inputEdit = (props) => {
	const {
		attributes,
		setAttributes,
		className,
		clientId
	} = props;

	const margin = new Margin(props)
	const negativemargin = new NegativeMargin(props)
	const padding = new Padding(props)
	const display = new Display(props)
	const position = new Position(props)
	const col = new Col(props)
	const color = new Color(props)
	const backgroundcolor = new Backgroundcolor(props)
	const bordercolor = new Bordercolor(props)

	const units = new Units()
	
	const ALLOWED_BLOCKS = [ 
		'webkompanen-blocks/lastposts',
		'webkompanen-blocks/paragraph',
		'webkompanen-blocks/div',
		'webkompanen-blocks/image',
		'webkompanen-blocks/video',
		'webkompanen-blocks/heading',
		'webkompanen-blocks/blockquote',
		'webkompanen-blocks/ul',
		'webkompanen-blocks/ol',
		'webkompanen-blocks/youtube',
		'webkompanen-blocks/googlemaps',
		'webkompanen-blocks/fontawesome'
	]
	
	const hasInnerBlocks = useSelect( ( select ) =>
		select( blockEditorStore ).getBlocks( clientId ).length > 0,
		[ clientId ]
	);

	let classes = attributes.type === 'checkbox' || attributes.type === 'radio' ? 'form-check-input' : 'form-control'
	
	const id = attributes.id ? attributes.id : null


	classes += backgroundcolor.classes() != null && backgroundcolor.classes() != '' ? ' '+backgroundcolor.classes() : ''
	classes += color.classes() != null && color.classes() != '' ? ' '+color.classes() : ''
	classes += bordercolor.classes() != null && bordercolor.classes() != '' ? ' '+bordercolor.classes() : ''

	classes += attributes.classes ? attributes.classes : ''

	classes += attributes.borders.top ? ' border-top-'+attributes.borders.top : '';
	classes += attributes.borders.bottom ? ' border-bottom-'+attributes.borders.bottom : '';
	classes += attributes.borders.left ? ' border-start-'+attributes.borders.left : '';
	classes += attributes.borders.right ? ' border-end-'+attributes.borders.right : '';
	
	classes += (
		attributes.rounded.top && 
		attributes.rounded.top !== attributes.rounded.bottom
	) && 
	(
		attributes.rounded.top && 
		attributes.rounded.top !== attributes.rounded.bottom && 
		attributes.rounded.top !== attributes.rounded.left && 
		attributes.rounded.top !== attributes.rounded.right
	)  ? ' rounded-top-'+attributes.rounded.top : '';

	classes += (
		attributes.rounded.bottom && 
		attributes.rounded.bottom !== attributes.rounded.top
	) && 
	(
		attributes.rounded.bottom && 
		attributes.rounded.bottom !== attributes.rounded.top && 
		attributes.rounded.bottom !== attributes.rounded.left && 
		attributes.rounded.bottom !== attributes.rounded.right
	)  ? ' rounded-bottom-'+attributes.rounded.bottom : '';

	classes += (
		attributes.rounded.left && 
		attributes.rounded.left !== attributes.rounded.right
	) && 
	(
		attributes.rounded.left && 
		attributes.rounded.left !== attributes.rounded.top && 
		attributes.rounded.left !== attributes.rounded.bottom && 
		attributes.rounded.left !== attributes.rounded.right
	)  ? ' rounded-left-'+attributes.rounded.left : '';

	classes += (
		attributes.rounded.right && 
		attributes.rounded.right !== attributes.rounded.left
	) && 
	(
		attributes.rounded.right && 
		attributes.rounded.right !== attributes.rounded.top && 
		attributes.rounded.right !== attributes.rounded.bottom && 
		attributes.rounded.right !== attributes.rounded.left
	)  ? ' rounded-right-'+attributes.rounded.right : '';

	classes += (
		attributes.rounded.top && 
		attributes.rounded.top === attributes.rounded.bottom && 
		attributes.rounded.top === attributes.rounded.left &&
		attributes.rounded.top === attributes.rounded.right
	)  ? ' rounded-'+attributes.rounded.top : '';

	classes = classes.replace(/^\s+|\s+$/gm,'');
	classes = classes.replace(/\s+\s+/gm,' ');
	classes = classes == '' ? null : classes

	//const bordery = attributes.border.top === attributes.border.bottom & attributes.border.top !== null & attributes.border.bottom !== null ? 'border-y-'+attributes.border.top : null;
	//const borderx = attributes.border.left === attributes.border.right & attributes.border.left !== null & attributes.border.right !== null ? 'border-x-'+attributes.border.left : null;

	const name = attributes.name ? attributes.name : null
	const type = attributes.type ? attributes.type : 'text'
	const value = attributes.value ? attributes.value : null
	const placeholder = attributes.placeholder ? attributes.placeholder : null
	
	const blockProps = useBlockProps( { className: classes } );
	
	//https://wordpress.stackexchange.com/questions/367932/create-a-custom-render-appender-button-to-add-inner-blocks
	const innerBlocksProps = useInnerBlocksProps(
			{ ...blockProps },{ 
			allowedBlocks: ALLOWED_BLOCKS,
			renderAppender: hasInnerBlocks ? InnerBlocks.BlockListAppender : InnerBlocks.ButtonBlockAppender,
			orientation: 'vertical',
			templateLock: false
	}
    );

	const onChangeEvent = (event) =>{
		return false;
	}
	
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
					<BordercolorEdit 
						props={props}
					/>
					<BoxControl
						values={ 
							{
								top: attributes.borders.top ? attributes.borders.top : null,
								left: attributes.borders.left ? attributes.borders.left : null,
								right: attributes.borders.right ? attributes.borders.right : null,
								bottom: attributes.borders.bottom ? attributes.borders.bottom : null
							}
						}
						label={__('Border', 'webkompanen')}
						units={units.get()}
						onChange={ 
							( nextValues ) => {
								setAttributes({
									borders:nextValues
								}) 	  
							} 
						}
					/>
					<BoxControl
						values={ 
							{
								top: attributes.rounded.top ? attributes.rounded.top : null,
								left: attributes.rounded.left ? attributes.rounded.left : null,
								right: attributes.rounded.right ? attributes.rounded.right : null,
								bottom: attributes.rounded.bottom ? attributes.rounded.bottom : null
							}
						}
						label={__('Rounded', 'webkompanen')}
						units={units.get()}
						onChange={ 
							( nextValues ) => {
								setAttributes({
									rounded:nextValues
								}) 	  
							} 
						}
					/>
					<SelectControl
						label={ __( 'Type', 'webkompanen' ) }
						value={ type } // e.g: value = [ 'a', 'c' ]
						onChange={ 
							( nextSelect ) => {
								setAttributes( {
									type:nextSelect
								} ) 
							} 
						}
						options={ [
							{ value: null, label: __('', 'webkompanen' ) },
							{ value: 'checkbox', label: __('Checkbox', 'webkompanen' ) },
							{ value: 'radio', label: __('Radio', 'webkompanen' ) },
							{ value: 'file', label: __('File', 'webkompanen' ) },
							{ value: 'text', label: __('Text', 'webkompanen' ) },
							{ value: 'number', label: __('Number', 'webkompanen' ) },
							{ value: 'email', label: __('E-mail', 'webkompanen' ) }
						] }
					/>
					<InputControl
						label={__('ID', 'webkompanen')}
						labelPosition="top"
						value={ id }
						type="text"
						isPressEnterToChange
						onChange={ 
							( nextvalue ) => {
								setAttributes({
									id:nextvalue
								})
							}
						}
					/>
					<InputControl
						label={__('Name', 'webkompanen')}
						labelPosition="top"
						value={ name }
						type="text"
						isPressEnterToChange
						onChange={ 
							( nextvalue ) => {
								setAttributes({
									name:nextvalue
								})
							}
						}
					/>
					<InputControl
						label={__('Value', 'webkompanen')}
						labelPosition="top"
						value={ value }
						type="text"
						isPressEnterToChange
						onChange={ 
							( nextvalue ) => {
								setAttributes({
									value:nextvalue
								})
							}
						}
					/>
					<InputControl
						label={__('Placeholder', 'webkompanen')}
						labelPosition="top"
						value={ placeholder }
						type="text"
						isPressEnterToChange
						onChange={ 
							( nextvalue ) => {
								setAttributes({
									placeholder:nextvalue
								})
							}
						}
					/>
				</InspectorControls>
			</Fragment>		
			<RichText
				{ ...blockProps }
				tagName={'input'}
				id={ id }
				name={ name }
				type={ type }
				data-value={ value }
				onChange={ 
					(event) => {
						onChangeEvent(event)
					}
				}
				placeholder={ __( placeholder ) }
			/>
		</>
	)
}


/*export default withSelect((select, props) => {
	return { 
		headerImageInfo: props.attributes.headerImageId ? select('core').getMedia(props.attributes.headerImageId) : undefined
	};
})(HeaderEdit);*/

export default inputEdit;