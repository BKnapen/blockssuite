/**
 * WordPress Dependencies
 */
//const { __ } = wp.i18n;
//const { addFilter } = wp.hooks;
//const { Fragment }	= wp.element;
//const { InspectorAdvancedControls, InspectorControls, useBlockProps }	= wp.editor;
//const { createHigherOrderComponent } = wp.compose;

import { 
	addFilter
} from '@wordpress/hooks';
import {
	registerBlockType,
	getBlockBindingsSource,
	getBlockBindingsSources,
	registerBlockBindingsSource
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
	useBlockBindingsUtils,
	getColorObjectByColorValue,
	store as blockEditorStore
	
} from '@wordpress/block-editor';

import {
	link,
	Icon
} from '@wordpress/icons';

import {
	useState,
	Fragment
} from '@wordpress/element';

import {
	openai as openai,
} from '../../webkompanen-blocks/icons'

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
	ColorPalette,
	__experimentalInputControl as InputControl,
	__experimentalSpacer as Spacer
} from '@wordpress/components';

//restrict to specific block names
const allowedBlocks = [ 'core/paragraph', 'core/heading' ];

/* Utilities */

import { Margin } from '../../webkompanen-blocks/utilities/margin';
import { NegativeMargin } from '../../webkompanen-blocks/utilities/negativemargin';
import { Padding } from '../../webkompanen-blocks/utilities/padding';
import { Display } from '../../webkompanen-blocks/utilities/display';
import { Position } from '../../webkompanen-blocks/utilities/position';
import { Col } from '../../webkompanen-blocks/utilities/col';
import { Color } from '../../webkompanen-blocks/utilities/color';
import { Backgroundcolor } from '../../webkompanen-blocks/utilities/backgroundcolor';

/* Editors */

import ColorEdit from '../../webkompanen-blocks/editor/color';
import BackgroundcolorEdit from '../../webkompanen-blocks/editor/backgroundcolor';
import ColEdit from '../../webkompanen-blocks/editor/col';
import MarginEdit from '../../webkompanen-blocks/editor/margin';
import NegativeMarginEdit from '../../webkompanen-blocks/editor/negativemargin';
import PaddingEdit from '../../webkompanen-blocks/editor/padding';
import DisplayEdit from '../../webkompanen-blocks/editor/display';
import PositionEdit from '../../webkompanen-blocks/editor/position';
import { Colors } from '../../webkompanen-blocks/utilities/colors';

const addAttributes = ( settings ) => {
	
	//check if object exists for old Gutenberg version compatibility
	//add allowedBlocks restriction
	if( typeof settings.attributes !== 'undefined' && allowedBlocks.includes( settings.name ) ){
	
		settings.attributes = Object.assign( settings.attributes, {
			color:{
				type: 'string'
			},
			backgroundcolor:{
				type: 'string'
			}
		});
    
	}

	return settings;
}

const withAdvancedControls = ( BlockEdit ) => ( props ) => {
		const [ outputChatGPT, setOutputChatGPT] = useState('');
		const [ promtValue, setPromtValue ] = useState( '' );
		const [ keyWordsColor, setKeyWordsColor ] = useState( null );
		const [ inProgress, setInProgress ] = useState( false );

		const {
			name,
			attributes,
			setAttributes,
			isSelected,
			clientId
		} = props;

		const {
			backgroundcolor,
			color
		} = attributes;

		const { updateBlockBindings, removeAllBlockBindings } = useBlockBindingsUtils(clientId);
		
		const colors = new Colors;
		
		const hasInnerBlocks = useSelect( ( select ) =>
			select( blockEditorStore ).getBlocks( clientId ).length > 0,
			[ clientId ]
		);
	
		const sources = getBlockBindingsSources();
	
		console.log('sources')
		console.log(sources)
		//console.log(sources.getValues(['core/post-meta']))
		
		const chatGPTAPIKEY = wp.data.select( 'core' )
		
		const siteinfo = useSelect( ( select ) =>
			select('core').getSite()
		);
	
		const [selectFramework, setSelectFramework] = useState( 
			attributes?.metadata?.bindings?.content?.source
		);
	
		console.log('selectFramework')
		console.log(selectFramework)
		console.log(attributes.content)
		console.log(attributes)
		console.log(props)

		const colort = new Color(props)
		const backgroundcolort = new Backgroundcolor(props)
		
		const classes = attributes.classes ? attributes.classes : ''
		let blockClasses = '';

		blockClasses += classes != null && classes != '' ? ' '+classes : ''
		blockClasses += backgroundcolort.classes() != null && backgroundcolort.classes() != '' ? ' '+backgroundcolort.classes() : ''
		blockClasses += colort.classes() != null && colort.classes() != '' ? ' '+colort.classes() : ''

		blockClasses = blockClasses.replace(/^\s+|\s+$/gm,'');
		blockClasses = blockClasses.replace(/\s+\s+/gm,' ');
		blockClasses = blockClasses == '' ? null : blockClasses

		const blockProps = useBlockProps( { className: blockClasses } );

		//attributes.className = blockClasses;

		/*const margin = new Margin(props)
		const negativemargin = new NegativeMargin(props)
		const padding = new Padding(props)
		const display = new Display(props)
		const position = new Position(props)
		const col = new Col(props)
		const color = new Color(props)
		const backgroundcolor = new Backgroundcolor(props)

		const classes = attributes.classes ? attributes.classes : ''
	
		let microdataItemtype = (attributes.microdataItemtype !== '' && attributes.microdataItemtype !== undefined && attributes.microdataItemtype !== null) ? ''+attributes.microdataItemtype+'' : null
		let microdataItemscope = (attributes.microdataItemtype !== '' && attributes.microdataItemtype !== undefined && attributes.microdataItemtype !== null) ? true : null
		let microdataItemprop = (attributes.microdataItemprop !== '' && attributes.microdataItemprop !== undefined && attributes.microdataItemprop !== null) ? ''+attributes.microdataItemprop+'' : null
		let microdataHref = (attributes.microdataHref !== '' && attributes.microdataHref !== undefined && attributes.microdataHref !== null) ? ''+attributes.microdataHref+'' : null
		let microdataContent = (attributes.microdataContent !== '' && attributes.microdataContent !== undefined && attributes.microdataContent !== null) ? ''+attributes.microdataContent+'' : null

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

		const blockProps = useBlockProps( { className: blockClasses } );*/
		
		return (
			<Fragment>
				<BlockEdit 
					{...props} 
				/>
				{ isSelected && allowedBlocks.includes( name ) &&
					<InspectorControls>
						<ColorEdit 
							props={props}
						/>
						<PositionEdit 
							props={props}
						/>
					</InspectorControls>
				}
			</Fragment>
		);
}

function applyExtraClass( extraProps, blockType, attributes ) {
	
	console.log(attributes)
	console.log(extraProps)

	let props = [];
	props['attributes'] = attributes;

	const color = new Color(props)
	const backgroundcolor = new Backgroundcolor(props)

	let blockClasses = '';
	const classes = attributes.classes ? attributes.classes : ''

	blockClasses += classes != null && classes != '' ? ' '+classes : ''
	blockClasses += backgroundcolor.classes() != null && backgroundcolor.classes() != '' ? ' '+backgroundcolor.classes() : ''
	blockClasses += color.classes() != null && color.classes() != '' ? ' '+color.classes() : ''
	
	blockClasses = blockClasses.replace(/^\s+|\s+$/gm,'');
	blockClasses = blockClasses.replace(/\s+\s+/gm,' ');
	blockClasses = blockClasses == '' ? null : blockClasses

	//check if attribute exists for old Gutenberg version compatibility
	//add class only when visibleOnMobile = false
	//add allowedBlocks restriction
	if ( allowedBlocks.includes( blockType.name ) ) {
		extraProps.className = blockClasses;
	}

	return extraProps;
}

// Our filter function
function lockParagraphs( blockAttributes, blockType, innerHTML, attributes  ) {
	console.log(attributes)
	console.log('blockAttributes')
	console.log(blockAttributes)

	let props = [];
	props['attributes'] = blockAttributes;

	const color = new Color(props)
	const backgroundcolor = new Backgroundcolor(props)

	let blockClasses = '';
	const classes = attributes.classes ? attributes.classes : ''

	blockClasses += classes != null && classes != '' ? ' '+classes : ''
	blockClasses += backgroundcolor.classes() != null && backgroundcolor.classes() != '' ? ' '+backgroundcolor.classes() : ''
	blockClasses += color.classes() != null && color.classes() != '' ? ' '+color.classes() : ''
	
	blockClasses = blockClasses.replace(/^\s+|\s+$/gm,'');
	blockClasses = blockClasses.replace(/\s+\s+/gm,' ');
	blockClasses = blockClasses == '' ? null : blockClasses
	
    if ( allowedBlocks.includes( blockType.name ) ) {
        blockAttributes.className = blockClasses
    }
    return blockAttributes;
}

// Add the filter
addFilter(
    'blocks.getBlockAttributes',
    'editorskit/lock-paragraphs',
    lockParagraphs
);

//add filters
addFilter(
	'editor.BlockEdit',
	'editorskit/custom-advanced-control',
	withAdvancedControls
);
addFilter(
	'blocks.registerBlockType',
	'editorskit/custom-attributes',
	addAttributes
);
addFilter(
	'blocks.getSaveContent.extraProps',
	'editorskit/applyExtraClass',
	applyExtraClass
);