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
					<PanelBody
						title={__('Typography', 'webkompanen')}
						initialOpen={false}
					>
						<div 
							className="row"
						>
							<div className="col-12">
								<SelectControl
									label={ __( 'Text alignment', 'webkompanen' ) }
									value={ attributes.textalignment } // e.g: value = [ 'a', 'c' ]
									onChange={ 
										( nextSelect ) => {
											setAttributes( {
												textalignment:nextSelect
											} ) 
										} 
									}
									options={ [
										{ value: '', label: __('', 'webkompanen' ) },
										{ value: 'text-start', label: __( 'Left', 'webkompanen' ) },
										{ value: 'text-center', label: __( 'Center', 'webkompanen' ) },
										{ value: 'text-end', label: __( 'Right', 'webkompanen' ) }
									] }
								/>
							</div>
						</div>
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
										{ value: '', label: __('', 'webkompanen' ) },
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
										{ value: '', label: __('', 'webkompanen' ) },
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
										{ value: '', label: __('', 'webkompanen' ) },
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
									label={ __( 'Lineheight', 'webkompanen' ) }
									value={ attributes.lh } // e.g: value = [ 'a', 'c' ]
									onChange={ 
										( nextSelect ) => {
											setAttributes( {
												lh:nextSelect
											} ) 
										} 
									}
									options={ [
										{ value: '', label: __('', 'webkompanen' ) },
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
										{ value: '', label: __('', 'webkompanen' ) },
										{ value: 'text-textdecoration-underline', label: __('Underline', 'webkompanen') },
										{ value: 'text-textdecoration-line-through', label: __('Line through', 'webkompanen') },
										{ value: 'text-textdecoration-none', label: __('None', 'webkompanen') }
									] }
								/>
							</div>
						</div>
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