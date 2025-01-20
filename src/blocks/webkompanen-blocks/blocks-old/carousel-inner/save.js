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

function carouselInnerSave( props ) {
	const {
		attributes
	} = props;
	
	const classes = attributes.classes ? attributes.classes : ''
	
	const margin = new Margin(props)
	const negativemargin = new NegativeMargin(props)
	const padding = new Padding(props)
	const display = new Display(props)
	const position = new Position(props)
	const color = new Color(props)
	const backgroundcolor = new Backgroundcolor(props)
	
	let blockClasses = 'carousel-inner';
	
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
	
	function getIndicators(){
		const indicators = [];
		if(attributes.slides > 0 && attributes.showindicators === true){
			for(var i= 0; i < attributes.slides; i++){
				indicators.push(
					<button type="button" data-bs-target={'#'+attributes.carousel} data-bs-slide-to={i} className={i === 0 ? "active" : null} aria-current={i === 0 ? "true" : null} aria-label={"Slide "+ i +""}></button>
				)
				if(i === attributes.slides-1){
					return(
						<>
						{
							attributes.showindicators &&
							<div className="carousel-indicators">
								{ indicators }
							</div>
						}
						</>
					)
				}
			}
		}
		else{
			return(
				<>	
				{
					attributes.showindicators &&
					<div className="carousel-indicators">
					</div>
				}
				</>
			)
		}
	}
	
	return(
		<>
			{ getIndicators() }
			<div 
				className={ blockClasses }
			>
				<InnerBlocks.Content />
			</div>
			<button 
				className="carousel-control-prev" 
				type="button" 
				data-bs-target={'#'+attributes.carousel} 
				data-bs-slide="prev"
			>
    			<span 
					className="carousel-control-prev-icon" 
					aria-hidden="true"
				>
				</span>
    			<span 
					className="visually-hidden"
				>
					Previous
				</span>
  			</button>
  			<button 
				className="carousel-control-next" 
				type="button" 
				data-bs-target={'#'+attributes.carousel} 
				data-bs-slide="next"
			>
    			<span 
					className="carousel-control-next-icon" 
					aria-hidden="true"
				>
				</span>
    			<span 
					className="visually-hidden"
				>
					Next
				</span>
  			</button>
		</>
	)

}

export default carouselInnerSave;