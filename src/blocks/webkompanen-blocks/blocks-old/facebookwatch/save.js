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

function facebookWatchSave( props ) {
	const {
		attributes
	} = props;
	
	const classes = attributes.classes ? attributes.classes : ''
	
	const zoomeffect = attributes.zoomeffect ? 'zoom' : ''
	
	const margin = new Margin(props)
	const ratio = 'videowrapper ratio ratio-16x9 w-100'

	//const negativemargin = new NegativeMargin(props)
	//const padding = new Padding(props)
	const display = new Display(props)

	//const position = new Position(props)
	//const col = new Col(props)
	//const color = new Color(props)
	//const backgroundcolor = new Backgroundcolor(props)
						
	return(
		<>
			<div class="ratio ratio-16x9">
				<iframe src={`https://www.facebook.com/plugins/video.php?height=316&href=${ attributes.facebookvideoid }&show_text=false&width=560&t=0`} width="560" height="316" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>			
			</div> 
		</>
	)

}

export default facebookWatchSave;