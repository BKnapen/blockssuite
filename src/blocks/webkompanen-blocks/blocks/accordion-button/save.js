/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { 
	useInnerBlocksProps, 
	RichText,
	useBlockProps 
} from '@wordpress/block-editor';

import { Margin } from '../../utilities/margin';
import { NegativeMargin } from '../../utilities/negativemargin';
import { Padding } from '../../utilities/padding';
import { Display } from '../../utilities/display';
import { Position } from '../../utilities/position';
import { Color } from '../../utilities/color';
import { Textcolor } from '../../utilities/textcolor';
import { Backgroundcolor } from '../../utilities/backgroundcolor';



function ButtonLinkSave( props ) {
	const {
		attributes
	} = props;
	
	const btnoutline  = attributes.isOutline ? 'outline-' : '' 
	const btncolor  = attributes.color ? attributes.color+'' : '' 
	
	const btnclassnames = 'btn btn-'+btnoutline+''+btncolor+' btn-lg' 
	const classes = attributes.classes ? attributes.classes : ''
	const buttonid = attributes.buttonid ? attributes.buttonid : ''
	const buttonsize = attributes.buttonsize ? ' '+attributes.buttonsize : ''

	let blockClasses = 'accordion-button collapsed';
	
	const margin = new Margin(props)
	const negativemargin = new NegativeMargin(props)
	const padding = new Padding(props)
	const display = new Display(props)
	const position = new Position(props)
	const color = new Color(props)
	const textcolor = new Textcolor(props)
	const backgroundcolor = new Backgroundcolor(props)

	blockClasses += classes != null && classes != '' ? ' '+classes : ''
	blockClasses += backgroundcolor.classes() != null && backgroundcolor.classes() != '' ? ' '+backgroundcolor.classes() : ''
	blockClasses += color.classes() != null && color.classes() != '' ? ' '+color.classes() : ''
	blockClasses += margin.classes() != null && margin.classes() != '' ? ' '+margin.classes() : ''
	blockClasses += negativemargin.classes() != null && negativemargin.classes() != '' ? ' '+negativemargin.classes() : ''
	blockClasses += padding.classes() != null && padding.classes() != '' ? ' '+padding.classes() : ''
	blockClasses += display.classes() != null && display.classes() != '' ? ' '+display.classes() : ''
	blockClasses += position.classes() != null && position.classes() != '' ? ' '+position.classes() : ''
	blockClasses += buttonsize
	
	blockClasses = blockClasses.replace(/^\s+|\s+$/gm,'');
	blockClasses = blockClasses.replace(/\s+\s+/gm,' ');
	blockClasses = blockClasses == '' ? null : blockClasses

	const targetid = attributes.targetid ? attributes.targetid : ''
	const targetID = targetid == '' ? null : targetid

	const blockID = blockClasses == '' ? null : buttonid
	
	return(
		<>     	
			<RichText.Content 
				href={ attributes.post ? attributes.post.url : null }
				id={blockID}
                value={ attributes.content }
                type={ 'button' }
				className={ blockClasses }
				tagName={ 'button' }
				data-bs-toggle="collapse" 
				data-bs-target={targetID ? '#'+targetID : null}
				aria-expanded="false" 
				aria-controls={targetID}
			/>
		</>
	)

}

export default ButtonLinkSave;