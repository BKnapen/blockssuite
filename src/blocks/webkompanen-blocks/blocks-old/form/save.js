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

function formSave( props ) {
	const {
		attributes
	} = props;
	
	
	const classes = attributes.classes ? attributes.classes : null
	const formsuccessaction = attributes.formsuccessaction ? attributes.formsuccessaction : null
	const answer = attributes.answer ? attributes.answer : null
	const id = attributes.id ? attributes.id : null
	const emailsubject = attributes.emailsubject ? attributes.emailsubject : null
	const name = attributes.name ? attributes.name : null
	
	const margin = new Margin(props)
	const negativemargin = new NegativeMargin(props)
	const padding = new Padding(props)
	const display = new Display(props)
	const position = new Position(props)
	const col = new Col(props)
	const color = new Color(props)
	const backgroundcolor = new Backgroundcolor(props)
	
	return(
		<>
			<form
				id={id}
				name={name}
				data-emailsubject={emailsubject}
				className={classes}
				data-answer={answer}
				data-form-success-action={formsuccessaction}
			>
				<InnerBlocks.Content />
			</form>
		</>
	)

}

export default formSave;