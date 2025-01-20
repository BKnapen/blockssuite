/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { 
	useInnerBlocksProps, 
	InnerBlocks,
	useBlockProps 
} from '@wordpress/block-editor';


import { Margin } from '../../utilities/margin';
import { NegativeMargin } from '../../utilities/negativemargin';
import { Padding } from '../../utilities/padding';
import { Display } from '../../utilities/display';
import { Position } from '../../utilities/position';
import { Color } from '../../utilities/color';
import { Backgroundcolor } from '../../utilities/backgroundcolor';

function containerSave( props ) {
	const {
		attributes
	} = props;
	
	const container = attributes.containerfluid === true ? ' container-fluid' : ' container'
	
	const classes = attributes.classes ? attributes.classes : ''
	
	const margin = new Margin(props)
	const negativemargin = new NegativeMargin(props)
	const padding = new Padding(props)
	const display = new Display(props)
	const position = new Position(props)
	const color = new Color(props)
	const backgroundcolor = new Backgroundcolor(props)
	
	let blockClasses = '';
	
	blockClasses += container != null && container != '' ? ' '+container : ''
	blockClasses += classes != null && classes != '' ? ' '+classes : ''
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
	
	return(
		<>
			<div className={ blockClasses }>
				<InnerBlocks.Content />
			</div>
		</>
	)

}

export default containerSave;