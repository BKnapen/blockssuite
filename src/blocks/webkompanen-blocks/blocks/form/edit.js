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
	__experimentalInputControl as InputControl,
	ToggleControl,
	PanelBody,
	PanelRow,
	CheckboxControl,
	SelectControl,
	ColorPicker,
	Popover,
	IconButton,
	Button,
	ResponsiveWrapper,
	Toolbar
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
import ColEdit from '../../editor/col';
import MarginEdit from '../../editor/margin';
import NegativeMarginEdit from '../../editor/negativemargin';
import PaddingEdit from '../../editor/padding';
import DisplayEdit from '../../editor/display';
import PositionEdit from '../../editor/position';

/*function HeaderEdit( props ) {*/
const formEdit = (props) => {
	const {
		attributes,
		setAttributes,
		className,
		clientId
	} = props;

	const [ isVisible, setIsVisible ] = useState( false );
	
    const toggleVisible = () => {
       	setIsVisible( ( state ) => ! state );
    };
	
	const ALLOWED_BLOCKS = [ 
		'webkompanen-blocks/input',
		'webkompanen-blocks/label',
		'webkompanen-blocks/lastposts',
		'webkompanen-blocks/button',
		'webkompanen-blocks/paragraph',
		'webkompanen-blocks/div',
		'webkompanen-blocks/image',
		'webkompanen-blocks/video',
		'webkompanen-blocks/heading',
		'webkompanen-blocks/blockquote',
		'webkompanen-blocks/ul',
		'webkompanen-blocks/ol',
		'webkompanen-blocks/youtube',
		'webkompanen-blocks/googlemaps',
		'webkompanen-blocks/fontawesome',
		'webkompanen-blocks/form-group',
		'webkompanen-blocks/form-check',
		'webkompanen-blocks/form-floating',
		'webkompanen-blocks/woocommerce-add-to-cart-button'
	]
	
	const hasInnerBlocks = useSelect( ( select ) =>
		select( blockEditorStore ).getBlocks( clientId ).length > 0,
		[ clientId ]
	);

	const formSubmit = function(e){
		e.preventDefault();
		e.stopPropagation();
	  }

	const classes = attributes.classes ? attributes.classes : null
	const answer = attributes.answer ? attributes.answer : null
	const formsuccessaction = attributes.formsuccessaction ? attributes.formsuccessaction : null
	const id = attributes.id ? attributes.id : null
	const emailsubject = attributes.emailsubject ? attributes.emailsubject : null
	const name = attributes.name ? attributes.name : null
	
	const margin = new Margin(props)
	const negativemargin = new NegativeMargin(props)
	const padding = new Padding(props)
	const display = new Display(props)
	const position = new Position(props)
	const col = new Col(props)
	const color = new Color(props)
	const backgroundcolor = new Backgroundcolor(props)
	
	let blockClasses = classes;
	
	const blockProps = useBlockProps({ className: blockClasses });
	//https://wordpress.stackexchange.com/questions/367932/create-a-custom-render-appender-button-to-add-inner-blocks
	const innerBlocksProps = useInnerBlocksProps(
			{ ...blockProps },{ 
			allowedBlocks: ALLOWED_BLOCKS,
			renderAppender: hasInnerBlocks ? InnerBlocks.BlockListAppender : InnerBlocks.ButtonBlockAppender,
			orientation: 'vertical',
			templateLock: false
	}
    );
	
	return(
		<>	
			<BlockControls>
				<Toolbar>
					<IconButton
						label={__('Link', 'webkompanen')}
						icon={link}
						className="link"
						onClick={ 
							(e) => { 
								setIsVisible( ( state ) => ! state );
							} 
						}
					/>
					{ 
						isVisible && (
							<Popover>
								<div style={{padding: "16px"}}>
									<LinkControl
										className="bootstrap-linkcontrol"
										searchInputPlaceholder="Search here..."
										value={ attributes.post }
										settings={
											[
											]
										}
										onChange={ 
											( newPost ) => setAttributes( 
												{ 
													post: newPost,
													formsuccessaction: newPost.url
												},
												setIsVisible( ( state ) => ! state )
											) 
									}
										withCreateSuggestion={true}
										createSuggestion={ 
									 		(inputValue) => setAttributes( 
												{ 
													post: {
														...attributes.post,
														title: inputValue,
														type: "custom-url",
														id: Date.now(),
														url: inputValue
													}
												} 
											) 
										}
										createSuggestionButtonText={ 
											(newValue) => { 
												newValue
											} 
										}
									>
									</LinkControl>
								</div>
							</Popover>
						) 
					}
				</Toolbar>
			</BlockControls>
			<Fragment>		
				<InspectorControls>
					<InputControl
						label={__('Answer', 'webkompanen')}
						labelPosition="top"
						value={ answer }
						type="text"
						isPressEnterToChange
						onChange={ 
							( nextvalue ) => {
								setAttributes({
									answer:nextvalue
								})
							}
						}
					/>
					<InputControl
						label={__('ID', 'webkompanen')}
						labelPosition="top"
						value={ id }
						type="text"
						isPressEnterToChange
						onChange={ 
							( nextvalue ) => {
								setAttributes({
									id:nextvalue
								})
							}
						}
					/>
					<InputControl
						label={__('E-mail subject', 'webkompanen')}
						labelPosition="top"
						value={ emailsubject }
						type="text"
						isPressEnterToChange
						onChange={ 
							( nextvalue ) => {
								setAttributes({
									emailsubject:nextvalue
								})
							}
						}
					/>
					<InputControl
						label={__('Classes', 'webkompanen')}
						labelPosition="top"
						value={ classes }
						type="text"
						isPressEnterToChange
						onChange={ 
							( nextvalue ) => {
								setAttributes({
									classes:nextvalue
								})
							}
						}
					/>
					<InputControl
						label={__('Name', 'webkompanen')}
						labelPosition="top"
						value={ name }
						type="text"
						isPressEnterToChange
						onChange={ 
							( nextvalue ) => {
								setAttributes({
									name:nextvalue
								})
							}
						}
					/>
				</InspectorControls>
			</Fragment>
  			<div 
				{ ...innerBlocksProps }
				id={id}
				name={name}
				data-emailsubject={emailsubject}
				data-answer={answer}
				data-form-success-action={formsuccessaction}
				onSubmit={
					(e)=>{
						formSubmit(e)
					}
				}
			>		
  			</div>
		</>
	)
}


/*export default withSelect((select, props) => {
	return { 
		headerImageInfo: props.attributes.headerImageId ? select('core').getMedia(props.attributes.headerImageId) : undefined
	};
})(HeaderEdit);*/

export default formEdit;