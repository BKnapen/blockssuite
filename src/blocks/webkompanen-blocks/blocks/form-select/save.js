/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { 
	useInnerBlocksProps, 
	InnerBlocks,
	useBlockProps 
} from '@wordpress/block-editor';

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

function formSave( props ) {
	const {
		attributes
	} = props;
	
	
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

	blockClasses += backgroundcolor.classes() != null && backgroundcolor.classes() != '' ? ' '+backgroundcolor.classes() : ''
	blockClasses += color.classes() != null && color.classes() != '' ? ' '+color.classes() : ''
	blockClasses += bordercolor.classes() != null && bordercolor.classes() != '' ? ' '+bordercolor.classes() : ''

	blockClasses += attributes.borders.top ? ' border-top-'+attributes.borders.top : '';
	blockClasses += attributes.borders.bottom ? ' border-bottom-'+attributes.borders.bottom : '';
	blockClasses += attributes.borders.left ? ' border-start-'+attributes.borders.left : '';
	blockClasses += attributes.borders.right ? ' border-end-'+attributes.borders.right : '';
	
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
	
	return(
		<>
			<select
				id={attributes.id}
				name={attributes.name}
				aria-label={attributes.arialabel}
				className={blockClasses}
			>
				<InnerBlocks.Content />
			</select>
		</>
	)

}

export default formSave;