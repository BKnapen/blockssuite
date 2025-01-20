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

function videoSave( props ) {
	const {
		attributes
	} = props;
	
	const classes = attributes.classes ? attributes.classes : ''
	
	const zoomeffect = attributes.zoomeffect ? 'zoom' : ''
	
	const margin = new Margin(props)
	const ratio = 'w-100'

	//const negativemargin = new NegativeMargin(props)
	//const padding = new Padding(props)
	const display = new Display(props)

	//const position = new Position(props)
	//const col = new Col(props)
	//const color = new Color(props)
	//const backgroundcolor = new Backgroundcolor(props)
						
	return(
		<>
				{
				attributes.customcontrollers ?(
					<>
						<div 
							style={
								{
									"z-index": "5",
									"height": "50px" 
								}
							}
							className="videocontrollers controllers d-none w-auto position-absolute bottom-0 start-0 mt-auto pb-5"
							data-playernumber=""
						>
							<a 
								href="#" 
								style={
									{
										"z-index": "5",
										"height": "50px" 
									}
								}
								className="videopausebtn controllerbtn pausebtn" 
								data-playernumber=""
							>
							</a>
							<a 
								href="#" 
								style={
									{
										"z-index": "5",
										"height": "50px" 
									}
								}
								className="videofsbtn controllerbtn fsbtn"
								data-playernumber=""
							>
							</a>
							<a 
								href="#" 
								style={
									{
										"z-index": "5",
										"height": "50px" 
									}
								}
								className="videoaudioonbtn controllerbtn audioonbtn d-block" 
								data-playernumber="">
							</a>
							<a 
								href="#" 
								style="z-index: 5; height: 50px" 
								className="videoaudiooffbtn controllerbtn audiooffbtn d-none"
								data-playernumber=""
							>
							</a>
						</div>
						<a 
							href="#" 
							style={
								{
									"background-size": "cover",
									"z-index": "5",
									"background-image":"url('')"
								}
							}
							className="videoplaybtn playbtn d-flex justify-content-center align-items-center" data-videoid="" 
							data-playernumber="">
						</a>
					</>
					): null
				}
				<video
					className={''+classes+''+display.classes()+''+margin.classes()+''+ratio+''}
					autoplay={attributes.autoplay}
					muted={attributes.muted}
					controls={attributes.controls}
					loop={attributes.loop}
					playsinline={attributes.playsinline}
				>
  					<source src={attributes.videoUrl} type="video/mp4"/>
					Your browser does not support the video tag.
				</video>
		</>
	)

}

export default videoSave;