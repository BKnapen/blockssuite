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

	let blockClasses = 'btn btn-'+btnoutline+''+btncolor+'';
	
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
	blockClasses += textcolor.classes() != null && textcolor.classes() != '' ? ' '+textcolor.classes() : ''
	blockClasses += margin.classes() != null && margin.classes() != '' ? ' '+margin.classes() : ''
	blockClasses += negativemargin.classes() != null && negativemargin.classes() != '' ? ' '+negativemargin.classes() : ''
	blockClasses += padding.classes() != null && padding.classes() != '' ? ' '+padding.classes() : ''
	blockClasses += display.classes() != null && display.classes() != '' ? ' '+display.classes() : ''
	blockClasses += position.classes() != null && position.classes() != '' ? ' '+position.classes() : ''
	blockClasses += buttonsize
	
	blockClasses = blockClasses.replace(/^\s+|\s+$/gm,'');
	blockClasses = blockClasses.replace(/\s+\s+/gm,' ');
	blockClasses = blockClasses == '' ? null : blockClasses

	const blockID = blockClasses == '' ? null : buttonid
	
	return(
		<>     	
			<RichText.Content 
				href={ attributes.post ? attributes.post.url : null }
				target={
					attributes.post ? (
						attributes.post.openInNweTab ? '_blank' : null
					) : null
				}
				rel={
					attributes.post ? (
						attributes.post.noFollowLink ? 'nofollow' : null
					) : null
				}
				id={blockID}
                value={ attributes.content }
                type={ attributes.type }
				className={ blockClasses }
				tagName={ attributes.post ? 'a' : 'button' }
			/>
		</>
	)

}

export default ButtonLinkSave;