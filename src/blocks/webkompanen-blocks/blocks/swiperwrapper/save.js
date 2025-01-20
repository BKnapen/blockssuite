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
import { BSHeight } from '../../utilities/height';
import { Col } from '../../utilities/col';
import { Color } from '../../utilities/color';
import { Backgroundcolor } from '../../utilities/backgroundcolor';
import { Justify } from '../../utilities/justify';
import { Alignitems } from '../../utilities/alignitems';

function divSave( props ) {
	const {
		attributes
	} = props;
	
	
	const classes = attributes.classes ? attributes.classes : ''
	const ratio = attributes.ratio ? ' ratio' : ''
	const ratiosize = attributes.ratiosize ? ' '+attributes.ratiosize+'' : ''
	const flickity = attributes.flickity !== null ? JSON.stringify(attributes.flickity) : null
	const style = attributes.style !== null ? attributes.style : null
	const ariahidden = attributes.ariahidden ? 'true' : null
	
	const margin = new Margin(props)
	const negativemargin = new NegativeMargin(props)
	const padding = new Padding(props)
	const display = new Display(props)
	const position = new Position(props)
	const bsheight = new BSHeight(props)
	const col = new Col(props)
	const color = new Color(props)
	const backgroundcolor = new Backgroundcolor(props)
	const justify = new Justify(props)
	const alignitems = new Alignitems(props)

	let bgimg = (attributes.imageUrl !== '' && attributes.imageUrl !== undefined) ? ''+attributes.imageUrl+'' : null
	
	let blockClasses = 'swiper-wrapper';

	blockClasses += classes != null && classes != '' ? ' '+classes : ''
	blockClasses += ratio != null && ratio != '' ? ' '+ratio : ''
	blockClasses += ratiosize != null && ratiosize != '' ? ' '+ratiosize : ''
	blockClasses += attributes.dataaos != null && attributes.dataaos != '' ? ' aos-init' : ''
	blockClasses += attributes.height != null && attributes.height != '' ? ' '+attributes.height : ''
	blockClasses += attributes.viewheight != null && attributes.viewheight != '' ? ' '+attributes.viewheight : ''
	blockClasses += attributes.width != null && attributes.width != '' ? ' '+attributes.width : ''
	blockClasses += backgroundcolor.classes() != null && backgroundcolor.classes() != '' ? ' '+backgroundcolor.classes() : ''
	blockClasses += color.classes() != null && color.classes() != '' ? ' '+color.classes() : ''
	blockClasses += margin.classes() != null && margin.classes() != '' ? ' '+margin.classes() : ''
	blockClasses += negativemargin.classes() != null && negativemargin.classes() != '' ? ' '+negativemargin.classes() : ''
	blockClasses += padding.classes() != null && padding.classes() != '' ? ' '+padding.classes() : ''
	blockClasses += display.classes() != null && display.classes() != '' ? ' '+display.classes() : ''
	blockClasses += bsheight.classes() != null && bsheight.classes() != '' ? ' '+bsheight.classes() : ''
	blockClasses += position.classes() != null && position.classes() != '' ? ' '+position.classes() : ''
	blockClasses += justify.classes() != null && justify.classes() != '' ? ' '+justify.classes() : ''
	blockClasses += alignitems.classes() != null && alignitems.classes() != '' ? ' '+alignitems.classes() : ''
	
	blockClasses = blockClasses.replace(/^\s+|\s+$/gm,'');
	blockClasses = blockClasses.replace(/\s+\s+/gm,' ');
	blockClasses = blockClasses == '' ? null : blockClasses
	
	return(
		<>
			{
				bgimg && (
  					<div 
						data-flickity={flickity}
					  	aria-hidden={ ariahidden }
					  	className={ blockClasses }
						style={
							{
								'background':'inline-block',
								'backgroundRepeat': 'no-repeat',
								'backgroundImage': 'url("'+bgimg+'")',
								'backgroundSize': 'cover',
								'backgroundPosition': 'center center',
								'width': '100%',
								'height': '100%',
								'opacity': '1',
								'visibility': 'inherit',
								'zIndex': '20',
							}
						}
						data-aos={attributes.dataaos && attributes.dataaos != '' ? attributes.dataaos : null}
						data-aos-easing={attributes.dataaoseasing && attributes.dataaoseasing != '' ? attributes.dataaoseasing : null}
						data-aos-anchor-placement={attributes.dataaosanchorplacement && attributes.dataaosanchorplacement != '' ? attributes.dataaosanchorplacement : null}
						data-aos-once={attributes.dataaosonce && attributes.dataaosonce != '' ? attributes.dataaosonce : null}
						data-aos-anchor={attributes.dataaosanchor && attributes.dataaosanchor != '' ? attributes.dataaosanchor : null}
						data-aos-duration={attributes.dataaosduration && attributes.dataaosduration != '' ? attributes.dataaosduration : null}
						data-aos-delay={attributes.dataaosdelay && attributes.dataaosdelay != '' ? attributes.dataaosdelay : null}
						data-aos-offset={attributes.dataaosoffset && attributes.dataaosoffset != '' ? attributes.dataaosoffset : null}
					>
						<InnerBlocks.Content />
  					</div>
				)
			}
			{
				!bgimg && (
  					<div 
						data-flickity={flickity}
					  	aria-hidden={ ariahidden }
					  	style={style}
					  	className={ blockClasses }
						data-aos={attributes.dataaos && attributes.dataaos != '' ? attributes.dataaos : null}
						data-aos-easing={attributes.dataaoseasing && attributes.dataaoseasing != '' ? attributes.dataaoseasing : null}
						data-aos-anchor-placement={attributes.dataaosanchorplacement && attributes.dataaosanchorplacement != '' ? attributes.dataaosanchorplacement : null}
						data-aos-once={attributes.dataaosonce && attributes.dataaosonce != '' ? attributes.dataaosonce : null}
						data-aos-anchor={attributes.dataaosanchor && attributes.dataaosanchor != '' ? attributes.dataaosanchor : null}
						data-aos-duration={attributes.dataaosduration && attributes.dataaosduration != '' ? attributes.dataaosduration : null}
						data-aos-delay={attributes.dataaosdelay && attributes.dataaosdelay != '' ? attributes.dataaosdelay : null}
						data-aos-offset={attributes.dataaosoffset && attributes.dataaosoffset != '' ? attributes.dataaosoffset : null}
					>
						<InnerBlocks.Content />
  					</div>
				)
			}
		</>
	)

}

export default divSave;