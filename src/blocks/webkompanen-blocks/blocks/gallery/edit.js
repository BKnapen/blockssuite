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
import GalleryEdit from '../../editor/gallery';

/*function HeaderEdit( props ) {*/
const galleryEdit = (props) => {
	const {
		attributes,
		setAttributes,
		className,
		clientId
	} = props;

	let classes = attributes.classes ? ''+attributes.classes : ''
	
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
	
	const blockProps = useBlockProps( { className: ''+classes+''+display.classes()+''+margin.classes()+'' } );
	
	//https://wordpress.stackexchange.com/questions/367932/create-a-custom-render-appender-button-to-add-inner-blocks
	
	const [ isVisible, setIsVisible ] = useState( false );
	const toggleVisible = () => {
   		setIsVisible( ( state ) => ! state );
	}	
	const getEntitiesConfig = useSelect( ( select ) => {
        return select( 'core' ).getEntitiesConfig('root');
    }, [] );
	console.log('getEntitiesConfig')
	console.log(getEntitiesConfig)
	
	const alttext = attributes.videoAlt ? attributes.videoAlt : ''
	
	return(
		<>	
			<Fragment>
				<InspectorControls>
					<GalleryEdit 
						props={props}
						label="Gallery"
					/>
				</InspectorControls>
			</Fragment>
			<div 
				{...blockProps}
			>
				<GalleryEdit 
					props={props}
					label="Gallery"
				/>
			</div>
		</>
	)
}


/*export default withSelect((select, props) => {
	return { 
		headerVideoInfo: attributes.headerVideoId ? select('core').getMedia(attributes.headerVideoId) : undefined
	};
})(HeaderEdit);*/

export default galleryEdit;