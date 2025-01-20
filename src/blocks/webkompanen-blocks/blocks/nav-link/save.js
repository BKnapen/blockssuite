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
import { Border } from '../../utilities/border';
import { NegativeMargin } from '../../utilities/negativemargin';
import { Padding } from '../../utilities/padding';
import { Display } from '../../utilities/display';
import { Position } from '../../utilities/position';
import { Color } from '../../utilities/color';
import { Backgroundcolor } from '../../utilities/backgroundcolor';
import { TextAlign } from '../../utilities/textalign';



function ButtonLinkSave( props ) {
	const {
		attributes
	} = props;
	
	const btnoutline  = attributes.isOutline ? 'outline-' : '' 
	const btncolor  = attributes.color ? attributes.color+'' : '' 
	
	const btnclassnames = 'btn btn-'+btnoutline+''+btncolor+' btn-lg' 
	const classes = attributes.classes ? attributes.classes : ''
	const dropdowntoggle = attributes.dropdowntoggle ? 'dropdown-toggle' : ''
	const modaltoggle = attributes.dataBsToggle ? ''+attributes.dataBsToggle+'' : ''
	const dataBsTarget = attributes.dataBsTarget != null && attributes.dataBsTarget != '' ? attributes.dataBsTarget : null
	let blockClasses = 'nav-link';
	
	const margin = new Margin(props)
	const border = new Border(props)
	const negativemargin = new NegativeMargin(props)
	const padding = new Padding(props)
	const display = new Display(props)
	const position = new Position(props)
	const color = new Color(props)
	const backgroundcolor = new Backgroundcolor(props)
	const textalign = new TextAlign(props)

	blockClasses += classes != null && classes != '' ? ' '+classes : ''
	blockClasses += dropdowntoggle != null && dropdowntoggle != '' ? ' '+dropdowntoggle : ''
	blockClasses += attributes.fw != null && attributes.fw != '' ? ' '+attributes.fw : ''
	blockClasses += attributes.fs != null && attributes.fs != '' ? ' fs-'+attributes.fs : ''
	blockClasses += backgroundcolor.classes() != null && backgroundcolor.classes() != '' ? ' '+backgroundcolor.classes() : ''
	blockClasses += color.classes() != null && color.classes() != '' ? ' '+color.classes() : ''
	blockClasses += margin.classes() != null && margin.classes() != '' ? ' '+margin.classes() : ''
	blockClasses += border.classes() != null && border.classes() != '' ? ' '+border.classes() : ''
	blockClasses += negativemargin.classes() != null && negativemargin.classes() != '' ? ' '+negativemargin.classes() : ''
	blockClasses += padding.classes() != null && padding.classes() != '' ? ' '+padding.classes() : ''
	blockClasses += display.classes() != null && display.classes() != '' ? ' '+display.classes() : ''
	blockClasses += position.classes() != null && position.classes() != '' ? ' '+position.classes() : ''
	blockClasses += textalign.classes() != null && textalign.classes() != '' ? ' '+textalign.classes() : ''
	
	blockClasses = blockClasses.replace(/^\s+|\s+$/gm,'');
	blockClasses = blockClasses.replace(/\s+\s+/gm,' ');
	blockClasses = blockClasses == '' ? null : blockClasses

	const parentidoutput = attributes.parentid != null && attributes.parentid != '' && dropdowntoggle != null && dropdowntoggle != '' ? attributes.parentid : null
	let databstoggle = dropdowntoggle != null && dropdowntoggle != '' ? 'dropdown' : null
	databstoggle = modaltoggle != null && modaltoggle != '' ? modaltoggle : null
	//const dataBsTarget = dataBsTarget != null && dataBsTarget != '' ? 'false' : null
	const ariaexpanded = dropdowntoggle != null && dropdowntoggle != '' ? 'false' : null
	let role = dropdowntoggle != null && dropdowntoggle != '' ? 'button' : null
	role = modaltoggle != null && modaltoggle != '' ? 'button' : null
	
	return(
		<>     	
			<RichText.Content 
				href={ attributes.button }
                value={ attributes.content }
				className={ blockClasses }
				id={parentidoutput}
				data-bs-toggle={databstoggle}
				data-bs-target={dataBsTarget}
				aria-expanded={ariaexpanded}
				role={role}
				tagName="a" 
			/>
		</>
	)

}

export default ButtonLinkSave;