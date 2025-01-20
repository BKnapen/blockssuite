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
	__experimentalSpacer as Spacer,
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
const carouselEdit = (props) => {
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
		'webkompanen-blocks/carousel-inner',
		'webkompanen-blocks/fontawesome'
	]
	
	const hasInnerBlocks = useSelect( ( select ) =>
		select( blockEditorStore ).getBlocks( clientId ).length > 0,
		[ clientId ]
	);
	
	const parentClientId = useSelect( ( select ) =>
		select( blockEditorStore ).getBlockHierarchyRootClientId( clientId )
	);
	const parentAttributes = useSelect( ( select ) =>
		select(blockEditorStore).getBlockAttributes( parentClientId )
	);
	let blockIndex = useSelect( ( select ) =>
		select(blockEditorStore).getBlockIndex( clientId ) === 0 ? true : false
	);
	
	if(blockIndex !== attributes.active){
		setAttributes({
			active:blockIndex
		})
	}
	
	const classes = attributes.classes ? attributes.classes : ''
	const ratio = attributes.ratio === true ? ' ratio' : ''
	const ratiosize = attributes.ratiosize ? ' '+attributes.ratiosize+'' : ''
	
	const style = attributes.style !== null ? attributes.style : null

	const margin = new Margin(props)
	const negativemargin = new NegativeMargin(props)
	const padding = new Padding(props)
	const display = new Display(props)
	const position = new Position(props)
	const col = new Col(props)
	const color = new Color(props)
	const backgroundcolor = new Backgroundcolor(props)
	
	let blockClasses = 'carousel-item';
	
	let isParentOfSelectedBlock = useSelect( ( select ) => 
		select( blockEditorStore).hasSelectedInnerBlock( clientId ) 
	);
	
	let isBlockHighlightedChech = useSelect( ( select ) => 
		select( blockEditorStore).isBlockHighlighted( clientId ) 
	);
	
	let parent = useSelect( ( select ) => 
		select(blockEditorStore).getBlockParentsByBlockName(clientId, 'webkompanen-blocks/carousel-inner')
	)
	
	const innerBlocksParent = useSelect( ( select ) =>
		select( blockEditorStore ).getBlocksByClientId( parent )
	);
	
	let selectedInnerBlock = useSelect( ( select ) => 
		select( blockEditorStore).getSelectedBlock()
	);
	

	let parentitem = useSelect( ( select ) => {
		var selectedblock = select( blockEditorStore).getSelectedBlock()

		if(selectedblock){
			return select(blockEditorStore).getBlockParentsByBlockName(selectedblock.clientId, 'webkompanen-blocks/carousel-item', true)
		}
		else{
			return
		}
	})
	
	let parentinner = useSelect( ( select ) => {
		var selectedblock = select( blockEditorStore).getSelectedBlock()

		if(selectedblock){
			return select(blockEditorStore).getBlockParentsByBlockName(selectedblock.clientId, 'webkompanen-blocks/carousel-inner', true)
		}
		else{
			return
		}
	})
	
	const innerBlocksParentSelected = useSelect( ( select ) =>
		select( blockEditorStore ).getBlocksByClientId( parentitem )
	);
	
	const hasSelectedInnerBlocks = useSelect( ( select ) => {
			if(innerBlocksParentSelected[0] !== null && innerBlocksParentSelected.length > 0){
				return select( blockEditorStore ).getBlocks( innerBlocksParentSelected[0].clientId ).length > 0, [ innerBlocksParentSelected[0].clientId ]
			}
			else{
				return []
			}
		}
	);
								   
	var isactive;

	if(isParentOfSelectedBlock){
		isactive = ' active'
	}
	else if(!isParentOfSelectedBlock){
		if(selectedInnerBlock){
			if(selectedInnerBlock.name === 'webkompanen-blocks/carousel-item'){
				if(innerBlocksParent.indexOf(clientId)){
					//console.log(parent[0])
					//console.log(parentinner[0])
					if(selectedInnerBlock && selectedInnerBlock.clientId === clientId){
						isactive = ' active'
					}
					else{
						if(parent[0] === parentinner[0]){
						   isactive = ''
						}
						else{
							isactive = innerBlocksParent[0].innerBlocks[0].clientId === clientId ? ' active' : ''
						}
					}
				}
				else{
					isactive = innerBlocksParent[0].innerBlocks[0].clientId === clientId ? ' active' : ''
				}
			}
			else{	
				if(parentitem.indexOf(clientId) == true){
					isactive = ' active'
				}
				else{
					if(innerBlocksParentSelected.length > 0){
						
						if(hasSelectedInnerBlocks.length > 0 && hasSelectedInnerBlocks[0] === clientId && innerBlocksParentSelected[0].clientId === clientId){
							isactive = ' active'
						}
						else{
							if(parentinner[0] === parent[0]){
								isactive = ''
							}
							else{
								isactive = innerBlocksParent[0].innerBlocks[0].clientId === clientId ? ' active' : ''
							}
						}
					}
					else{
						isactive = innerBlocksParent[0].innerBlocks[0].clientId === clientId ? ' active' : ''
					}
				}
				
			}
		}
		else{
			isactive = innerBlocksParent[0].innerBlocks[0].clientId === clientId ? ' active' : ''
		}
	}
	
	//console.log(isactive)
	
	blockClasses += isactive
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
            		<Spacer
						marginBottom={3}
					>
					<InputControl
						label={__('Custom classes', 'webkompanen')}
						labelPosition="top"
						value={attributes.classes}
						type="text"
						isPressEnterToChange
						onChange={ 
							( nextValue ) => {
								setAttributes({
									classes:nextValue
								})
							} 
						}
					/>
            		</Spacer>
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
  			<div 
				{ ...innerBlocksProps }
			>
						
  			</div>
		</>
	)
}


/*export default withSelect((select, props) => {
	return { 
		headerImageInfo: props.attributes.headerImageId ? select('core').getMedia(props.attributes.headerImageId) : undefined
	};
})(HeaderEdit);*/

export default carouselEdit;