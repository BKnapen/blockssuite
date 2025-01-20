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
import ColEdit from '../../editor/col';
import MarginEdit from '../../editor/margin';
import NegativeMarginEdit from '../../editor/negativemargin';
import PaddingEdit from '../../editor/padding';
import DisplayEdit from '../../editor/display';
import PositionEdit from '../../editor/position';
import BordercolorEdit from '../../editor/bordercolor';

import { Units } from '../../utilities/units';

/*function HeaderEdit( props ) {*/
const formEdit = (props) => {
	const {
		attributes,
		setAttributes,
		className,
		clientId
	} = props;

	const units = new Units()
	
	const ALLOWED_BLOCKS = [ 
		'webkompanen-blocks/input',
		'webkompanen-blocks/label',
		'webkompanen-blocks/lastposts',
		'webkompanen-blocks/button',
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
		'webkompanen-blocks/fontawesome',
		'webkompanen-blocks/textarea',
		'webkompanen-blocks/form-option'
	]
	
	const hasInnerBlocks = useSelect( ( select ) =>
		select( blockEditorStore ).getBlocks( clientId ).length > 0,
		[ clientId ]
	);

	const classes = attributes.classes ? attributes.classes : null
	const answer = attributes.answer ? attributes.answer : null
	
	const margin = new Margin(props)
	const negativemargin = new NegativeMargin(props)
	const padding = new Padding(props)
	const display = new Display(props)
	const position = new Position(props)
	const col = new Col(props)
	const color = new Color(props)
	const backgroundcolor = new Backgroundcolor(props)
	const bordercolor = new Bordercolor(props)
	
	let blockClasses = 'form-select';

	blockClasses  += backgroundcolor.classes() != null && backgroundcolor.classes() != '' ? ' '+backgroundcolor.classes() : ''
	blockClasses  += color.classes() != null && color.classes() != '' ? ' '+color.classes() : ''
	blockClasses  += bordercolor.classes() != null && bordercolor.classes() != '' ? ' '+bordercolor.classes() : ''

	blockClasses  += attributes.borders.top ? ' border-top-'+attributes.borders.top : '';
	blockClasses  += attributes.borders.bottom ? ' border-bottom-'+attributes.borders.bottom : '';
	blockClasses  += attributes.borders.left ? ' border-start-'+attributes.borders.left : '';
	blockClasses  += attributes.borders.right ? ' border-end-'+attributes.borders.right : '';
	
	blockClasses  += (
		attributes.rounded.top && 
		attributes.rounded.top !== attributes.rounded.bottom
	) && 
	(
		attributes.rounded.top && 
		attributes.rounded.top !== attributes.rounded.bottom && 
		attributes.rounded.top !== attributes.rounded.left && 
		attributes.rounded.top !== attributes.rounded.right
	)  ? ' rounded-top-'+attributes.rounded.top : '';

	blockClasses  += (
		attributes.rounded.bottom && 
		attributes.rounded.bottom !== attributes.rounded.top
	) && 
	(
		attributes.rounded.bottom && 
		attributes.rounded.bottom !== attributes.rounded.top && 
		attributes.rounded.bottom !== attributes.rounded.left && 
		attributes.rounded.bottom !== attributes.rounded.right
	)  ? ' rounded-bottom-'+attributes.rounded.bottom : '';

	blockClasses  += (
		attributes.rounded.left && 
		attributes.rounded.left !== attributes.rounded.right
	) && 
	(
		attributes.rounded.left && 
		attributes.rounded.left !== attributes.rounded.top && 
		attributes.rounded.left !== attributes.rounded.bottom && 
		attributes.rounded.left !== attributes.rounded.right
	)  ? ' rounded-left-'+attributes.rounded.left : '';

	blockClasses  += (
		attributes.rounded.right && 
		attributes.rounded.right !== attributes.rounded.left
	) && 
	(
		attributes.rounded.right && 
		attributes.rounded.right !== attributes.rounded.top && 
		attributes.rounded.right !== attributes.rounded.bottom && 
		attributes.rounded.right !== attributes.rounded.left
	)  ? ' rounded-right-'+attributes.rounded.right : '';

	blockClasses  += (
		attributes.rounded.top && 
		attributes.rounded.top === attributes.rounded.bottom && 
		attributes.rounded.top === attributes.rounded.left &&
		attributes.rounded.top === attributes.rounded.right
	)  ? ' rounded-'+attributes.rounded.top : '';
	
	blockClasses = blockClasses.replace(/^\s+|\s+$/gm,'');
	blockClasses = blockClasses.replace(/\s+\s+/gm,' ');
	blockClasses = blockClasses == '' ? null : blockClasses

	const blockProps = useBlockProps({className: blockClasses});
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
					<InputControl
						label={__('ID', 'webkompanen')}
						labelPosition="top"
						value={ attributes.id }
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
						value={ attributes.name }
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
						label={__('Aria label', 'webkompanen')}
						labelPosition="top"
						value={ attributes.arialabel }
						type="text"
						isPressEnterToChange
						onChange={ 
							( nextvalue ) => {
								setAttributes({
									arialabel:nextvalue
								})
							}
						}
					/>
					<InputControl
						label={__('Answer', 'webkompanen')}
						labelPosition="top"
						value={ answer }
						type="text"
						isPressEnterToChange
						onChange={ 
							( nextvalue ) => {
								setAttributes({
									answer:nextvalue
								})
							}
						}
					/>
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
				</InspectorControls>
			</Fragment>
			<select 
				{ ...innerBlocksProps }
				id={ attributes.id }
				aria-label={ attributes.arialabel }
			>		
  			</select>
		</>
	)
}


/*export default withSelect((select, props) => {
	return { 
		headerImageInfo: props.attributes.headerImageId ? select('core').getMedia(props.attributes.headerImageId) : undefined
	};
})(HeaderEdit);*/

export default formEdit;