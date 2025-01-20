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

function paragraphSave( props ) {
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
	
	const classes = attributes.classes ? attributes.classes : ''

	let microdataItemtype = (attributes.microdataItemtype !== '' && attributes.microdataItemtype !== undefined && attributes.microdataItemtype !== null) ? ''+attributes.microdataItemtype+'' : null
	let microdataItemscope = (attributes.microdataItemtype !== '' && attributes.microdataItemtype !== undefined && attributes.microdataItemtype !== null) ? true : null
	let microdataItemprop = (attributes.microdataItemprop !== '' && attributes.microdataItemprop !== undefined && attributes.microdataItemprop !== null) ? ''+attributes.microdataItemprop+'' : null
	let microdataHref = (attributes.microdataHref !== '' && attributes.microdataHref !== undefined && attributes.microdataHref !== null) ? ''+attributes.microdataHref+'' : null
	let microdataContent = (attributes.microdataContent !== '' && attributes.microdataContent !== undefined && attributes.microdataContent !== null) ? ''+attributes.microdataContent+'' : null
	
	let blockClasses = '';

	blockClasses += classes != null && classes != '' ? ' '+classes : ''
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
	
	return(
		<>
			<RichText.Content 
				itemprop={microdataItemprop}
				itemscope={microdataItemscope}
				itemtype={microdataItemtype}
				href={microdataHref}
				content={microdataContent}
				value={attributes.content} 
				className={blockClasses} 
				tagName="p" 
				data-aos={attributes.dataaos && attributes.dataaos != '' ? attributes.dataaos : null}
				data-aos-easing={attributes.dataaoseasing && attributes.dataaoseasing != '' ? attributes.dataaoseasing : null}
				data-aos-anchor-placement={attributes.dataaosanchorplacement && attributes.dataaosanchorplacement != '' ? attributes.dataaosanchorplacement : null}
				data-aos-once={attributes.dataaosonce && attributes.dataaosonce != '' ? attributes.dataaosonce : null}
				data-aos-anchor={attributes.dataaosanchor && attributes.dataaosanchor != '' ? attributes.dataaosanchor : null}
				data-aos-duration={attributes.dataaosduration && attributes.dataaosduration != '' ? attributes.dataaosduration : null}
				data-aos-delay={attributes.dataaosdelay && attributes.dataaosdelay != '' ? attributes.dataaosdelay : null}
				data-aos-offset={attributes.dataaosoffset && attributes.dataaosoffset != '' ? attributes.dataaosoffset : null}
			/>
		</>
	)

}

export default paragraphSave;