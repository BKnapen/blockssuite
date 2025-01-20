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
		'webkompanen-blocks/form',
		'webkompanen-blocks/input',
		'webkompanen-blocks/label',
		'webkompanen-blocks/image',
		'webkompanen-blocks/video',
		'webkompanen-blocks/heading',
		'webkompanen-blocks/blockquote',
		'webkompanen-blocks/ul',
		'webkompanen-blocks/ol',
		'webkompanen-blocks/youtube',
		'webkompanen-blocks/googlemaps',
		'webkompanen-blocks/fontawesome',
		'webkompanen-blocks/nav-item',
		'webkompanen-blocks/dropdown-menu'
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
	const col = new Col(props)
	const color = new Color(props)
	const backgroundcolor = new Backgroundcolor(props)
	
	let blockClasses = 'navbar-nav';

	blockClasses += classes != null && classes != '' ? ' '+classes : ''
	blockClasses += ratio != null && ratio != '' ? ' '+ratio : ''
	blockClasses += ratiosize != null && ratiosize != '' ? ' '+ratiosize : ''
	blockClasses += backgroundcolor.classes() != null && backgroundcolor.classes() != '' ? ' '+backgroundcolor.classes() : ''
	blockClasses += color.classes() != null && color.classes() != '' ? ' '+color.classes() : ''
	blockClasses += margin.classes() != null && margin.classes() != '' ? ' '+margin.classes() : ''
	blockClasses += negativemargin.classes() != null && negativemargin.classes() != '' ? ' '+negativemargin.classes() : ''
	blockClasses += padding.classes() != null && padding.classes() != '' ? ' '+padding.classes() : ''
	blockClasses += display.classes() != null && display.classes() != '' ? ' '+display.classes() : ''
	blockClasses += position.classes() != null && position.classes() != '' ? ' '+position.classes() : ''
	
	blockClasses = blockClasses.replace(/^\s+|\s+$/gm,'');
	blockClasses = blockClasses.replace(/\s+\s+/gm,' ');
	blockClasses = blockClasses == '' ? null : blockClasses
	
	const blockProps = useBlockProps( { className: blockClasses } );
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
					<ColorEdit 
						props={props}
					/>
					<BackgroundcolorEdit 
						props={props}
					/>
					<PositionEdit 
						props={props}
					/>
				</InspectorControls>
			</Fragment>	
  			<ul
				{ ...innerBlocksProps }
			>
						
  			</ul>
		</>
	)
}


/*export default withSelect((select, props) => {
	return { 
		headerImageInfo: props.attributes.headerImageId ? select('core').getMedia(props.attributes.headerImageId) : undefined
	};
})(HeaderEdit);*/

export default sectionEdit;