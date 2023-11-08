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
import { Col } from '../../utilities/col';
import { ColOrder } from '../../utilities/colorder';
import { Color } from '../../utilities/color';
import { Backgroundcolor } from '../../utilities/backgroundcolor';
import { TextAlign } from '../../utilities/textalign';
import { Border } from '../../utilities/border';

function ColSave( props ) {
	const {
		attributes
	} = props;
	
	let classes = attributes.classes ? ''+attributes.classes : ''
	let datasrc = attributes.datasrc ? ''+attributes.datasrc : null
	let dataImage = attributes.dataImage ? ''+attributes.dataImage : null
	
	const margin = new Margin(props)
	const negativemargin = new NegativeMargin(props)
	const padding = new Padding(props)
	const display = new Display(props)
	const position = new Position(props)
	const col = new Col(props)
	const colorder = new ColOrder(props)
	const textalign = new TextAlign(props)
	const color = new Color(props)
	const backgroundcolor = new Backgroundcolor(props)
	const border = new Border(props)
	
	let blockClasses = '';

	blockClasses += classes != null && classes != '' ? ' '+classes : ''
	blockClasses += attributes.height != null && attributes.height != '' ? ' '+attributes.height : ''
	//blockClasses += ratio != null && ratio != '' ? ' '+ratio : ''
	//blockClasses += ratiosize != null && ratiosize != '' ? ' '+ratiosize : ''
	blockClasses += backgroundcolor.classes() != null && backgroundcolor.classes() != '' ? ' '+backgroundcolor.classes() : ''
	blockClasses += col.classes() != null && col.classes() != '' ? ' '+col.classes() : ''
	blockClasses += colorder.classes() != null && colorder.classes() != '' ? ' '+colorder.classes() : ''
	blockClasses += textalign.classes() != null && textalign.classes() != '' ? ' '+textalign.classes() : ''
	blockClasses += color.classes() != null && color.classes() != '' ? ' '+color.classes() : ''
	blockClasses += margin.classes() != null && margin.classes() != '' ? ' '+margin.classes() : ''
	blockClasses += negativemargin.classes() != null && negativemargin.classes() != '' ? ' '+negativemargin.classes() : ''
	blockClasses += padding.classes() != null && padding.classes() != '' ? ' '+padding.classes() : ''
	blockClasses += display.classes() != null && display.classes() != '' ? ' '+display.classes() : ''
	blockClasses += position.classes() != null && position.classes() != '' ? ' '+position.classes() : ''
	blockClasses += border.classes() != null && border.classes() != '' ? ' '+border.classes() : ''
	
	blockClasses = blockClasses.replace(/^\s+|\s+$/gm,'');
	blockClasses = blockClasses.replace(/\s+\s+/gm,' ');
	blockClasses = blockClasses == '' ? null : blockClasses
	
	
	return(
		<>
			<div 
				className={blockClasses}
				data-src={datasrc}
				data-image={dataImage}
			>
				<InnerBlocks.Content />
			</div>
		</>
	)

}

export default ColSave;