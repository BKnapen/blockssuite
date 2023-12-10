/**
 * WordPress dependencies
 */
import {
	registerBlockType
	
} from '@wordpress/blocks';

import { 
	useSelect, useDispatch, withSelect
} from '@wordpress/data';

import { 
	sprintf, __ 
} from '@wordpress/i18n';

import {
	__experimentalLinkControl as LinkControl,
	InnerBlocks,
	useBlockProps,
	BlockControls,
	MediaUpload, 
	MediaUploadCheck,
	InspectorControls,
	RichText,
	PanelColorSettings,
	withColors,
	useInnerBlocksProps,
	getColorClassName,
	store as blockEditorStore
	
} from '@wordpress/block-editor';

import {
	link
} from '@wordpress/icons';

import {
	useState,
	Fragment
} from '@wordpress/element';

import {
	ToggleControl,
	PanelBody,
	PanelRow,
	CheckboxControl,
	SelectControl,
	ColorPicker,
	ResizableBox,
	Popover,
	IconButton,
	Button,
	ResponsiveWrapper,
	Toolbar,
	__experimentalInputControl as InputControl
} from '@wordpress/components';

/* Utilities */

import { Margin } from '../../utilities/margin';
import { NegativeMargin } from '../../utilities/negativemargin';
import { Padding } from '../../utilities/padding';
import { Display } from '../../utilities/display';
import { Position } from '../../utilities/position';
import { Col } from '../../utilities/col';
import { Color } from '../../utilities/color';
import { Backgroundcolor } from '../../utilities/backgroundcolor';

/* Editors */

import ColorEdit from '../../editor/color';
import BackgroundcolorEdit from '../../editor/backgroundcolor';
//import ColEdit from '../../editor/col';
import MarginEdit from '../../editor/margin';
import NegativeMarginEdit from '../../editor/negativemargin';
import PaddingEdit from '../../editor/padding';
import DisplayEdit from '../../editor/display';
import VideoEdit from '../../editor/video';
import YouTubeEdit from '../../editor/youtube';

/*function HeaderEdit( props ) {*/
const youTubeEdit = (props) => {
	const {
		attributes,
		setAttributes,
		className,
		clientId
	} = props;
	
	const { videoInfo } = useSelect( ( select ) => {		
		return {
			videoInfo: attributes.videoId ? select('core').getMedia(attributes.videoId) : undefined
		};
	} );

	let classes = attributes.classes ? 'videowrapper '+attributes.classes : 'videowrapper'
	
	const margin = new Margin(props)
	//const negativemargin = new NegativeMargin(props)
	//const padding = new Padding(props)
	const display = new Display(props)
	//const position = new Position(props)
	//const col = new Col(props)
	//const color = new Color(props)
	//const backgroundcolor = new Backgroundcolor(props)
	
		
	const ratio = ' ratio ratio-16x9 w-100'
	const zoomeffect = attributes.zoomeffect ? 'zoom':''
	
	const figure = attributes.imgfigure
	
	const blockProps = useBlockProps( { className: ''+classes+''+display.classes()+''+margin.classes()+''+ratio+'' } );
	
	//https://wordpress.stackexchange.com/questions/367932/create-a-custom-render-appender-button-to-add-inner-blocks
	
	const [ isVisible, setIsVisible ] = useState( false );
	const toggleVisible = () => {
   		setIsVisible( ( state ) => ! state );
	}	
	
	const alttext = attributes.videoAlt ? attributes.videoAlt : ''
	
	return(
		<>	
			<Fragment>
				<InspectorControls>
					<YouTubeEdit
						props={props}
					/>
				</InspectorControls>
			</Fragment>
			<div 
				{...blockProps}
			>
				{ 
					attributes.youtubeid ? (
						<div class="ratio ratio-16x9">
  							<iframe src={`https://www.youtube.com/embed/${ attributes.youtubeid }?rel=0`} title={__('YouTube video', 'webkompanen')} allowfullscreen></iframe>
						</div> 
					):(
						<div class="ratio ratio-16x9">
  							<InputControl
								value={ attributes.youtubeid }
								type="text"
								placeholder={__('Fill in YuTube video ID', 'webkompanen')}
								isPressEnterToChange
								onChange={ 
									( nextValue ) => { 
										setAttributes({
											youtubeid: nextValue
										})
									} 
								}
							/>
						</div> 
					)
				}
			</div>
		</>
	)
}


/*export default withSelect((select, props) => {
	return { 
		headerVideoInfo: attributes.headerVideoId ? select('core').getMedia(attributes.headerVideoId) : undefined
	};
})(HeaderEdit);*/

export default youTubeEdit;