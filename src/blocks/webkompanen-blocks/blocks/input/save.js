/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { 
	useInnerBlocksProps, 
	InnerBlocks,
	RichText,
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

function inputSave( props ) {
	const {
		attributes
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
	
	let classes = attributes.type === 'checkbox' || attributes.type === 'radio' ? 'form-check-input' : 'form-control'


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

	const id = attributes.id ? attributes.id : null
	const name = attributes.name ? attributes.name : null
	const type = attributes.type ? attributes.type : 'text'
	const value = attributes.value ? attributes.value : null
	const placeholder = attributes.placeholder ? attributes.placeholder : null
	
	return(
		<>
			<RichText.Content 
				tagName={'input'}
				className={ classes }
				class={ classes }
				id={ id }
				name={ name }
				type={ type }
				data-value={ value }
				placeholder={ placeholder }
				data-name={ placeholder }
			/>
		</>
	)

}

export default inputSave;