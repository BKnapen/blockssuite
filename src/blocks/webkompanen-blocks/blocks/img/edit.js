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
	Toolbar
} from '@wordpress/components';

/* Utilities */

import { Margin } from '../../utilities/margin';
import { Borders } from '../../utilities/borders';
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
import ImageEdit from '../../editor/img';
import PositionEdit from '../../editor/position';

/*function HeaderEdit( props ) {*/
const imageEdit = (props) => {
	const {
		attributes,
		setAttributes,
		className,
		clientId
	} = props;
	
	const { imageInfo } = useSelect( ( select ) => {		
		return {
			imageInfo: attributes.imageId ? select('core').getMedia(attributes.imageId) : undefined
		};
	} );
	
	const imgfluid = attributes.imgfluid ? ' img-fluid' : ''
	const dataBsToggle = attributes.dataBsToggle ? ''+attributes.dataBsToggle+'' : null
	const dataBsTarget = attributes.dataBsTarget ? ''+attributes.dataBsTarget+'' : null
	const dataBsSlideTo = attributes.dataBsSlideTo ? ''+attributes.dataBsSlideTo+'' : null
	
	
	
	let classes = attributes.classes ? ''+attributes.classes : ''
	
	const margin = new Margin(props)
	const borders = new Borders(props)
	const negativemargin = new NegativeMargin(props)
	//const padding = new Padding(props)
	const display = new Display(props)
	const position = new Position(props)
	//const col = new Col(props)
	const color = new Color(props)
	const backgroundcolor = new Backgroundcolor(props)
	
	console.log('attributes.url')
	console.log(attributes.url)
		
	const width = attributes.width ? ' '+attributes.width+'' : ''
	const height = attributes.height ? ' '+attributes.height+'' : ''
	
	const zoomeffect = attributes.zoomeffect ? 'zoom':''
	const showlabel = attributes.showlabel ? attributes.showlabel : attributes.showlabel
	
	const objectfitcover = attributes.objectfitcover ? ' object-fit-cover':''
	
	const url = attributes.url ? ' d-block' : ''
	
	const figure = attributes.imgfigure
	
	const WrapperTag = attributes.url ? `a` : `figure`;
	
	const urlurl = attributes.url ? attributes.url.url : null;

	const h = attributes.h ? attributes.h : 0
	const w = attributes.w ? attributes.w : 0
	
	let blockClasses = '';
	
	blockClasses += classes != null && classes != '' ? ' '+classes : ''
	blockClasses += width != null && width != '' ? ' '+width : ''
	blockClasses += height != null && height != '' ? ' '+height : ''
	blockClasses += imgfluid != null && imgfluid != '' ? ' '+imgfluid : ''
	blockClasses += margin.classes() != null && margin.classes() != '' ? ' '+margin.classes() : ''
	blockClasses += borders.classes() != null && borders.classes() != '' ? ' '+borders.classes() : ''
	blockClasses += negativemargin.classes() != null && negativemargin.classes() != '' ? ' '+negativemargin.classes() : ''
	blockClasses += display.classes() != null && display.classes() != '' ? ' '+display.classes() : ''
	blockClasses += position.classes() != null && position.classes() != '' ? ' '+position.classes() : ''
	blockClasses += objectfitcover
	
	blockClasses = blockClasses.replace(/^\s+|\s+$/gm,'');
	blockClasses = blockClasses.replace(/\s+\s+/gm,' ');
	blockClasses = blockClasses == '' ? null : blockClasses
	
	const blockProps = useBlockProps( { className: blockClasses } );

	let labelClasses = 'position-absolute w-100';
	let spanClasses = 'py-1 px-2';

	labelClasses += color.classes() != null && color.classes() != '' ? ' '+color.classes() : ''
	spanClasses += backgroundcolor.classes() != null && backgroundcolor.classes() != '' ? ' '+backgroundcolor.classes() : ''
	
	switch (attributes.labeltextalignment) {
		case 'start':
			labelClasses += ' text-start';
			break;
		case 'center':
			labelClasses += ' text-center';
			break;
		case 'end':
			labelClasses += ' text-end';
			break;
		default:
			labelClasses += '';
	}

	switch (attributes.labelpositionalignment) {
		case 'top left':
			labelClasses += ' top-0 start-0';
		  break;
		case 'top center':
			labelClasses += ' top-0';
		  break;
		case 'top right':
			labelClasses += ' top-0 end-0';
		  break;
		case 'center left':
			labelClasses += ' top-50 start-0';
			break;
		case 'center center':
			labelClasses += ' top-50';
			break;
		case 'center right':
			labelClasses += ' top-50 end-0';
			break;
		case 'bottom left':
			labelClasses += ' bottom-0 start-0';
			  break;
		case 'bottom center':
			labelClasses += ' bottom-0';
			  break;
		case 'bottom right':
			labelClasses += ' bottom-0 end-0';
			  break;
		default:
			labelClasses += '';
	}

	labelClasses = labelClasses.replace(/^\s+|\s+$/gm,'');
	labelClasses = labelClasses.replace(/\s+\s+/gm,' ');
	labelClasses = labelClasses == '' ? null : labelClasses
	
	//https://wordpress.stackexchange.com/questions/367932/create-a-custom-render-appender-button-to-add-inner-blocks
	
	const [ isVisible, setIsVisible ] = useState( false );
	const toggleVisible = () => {
   		setIsVisible( ( state ) => ! state );
	}	
	
	const alttext = attributes.imageAlt ? attributes.imageAlt : ''
	
	return(
		<>	
			<Fragment>
				<InspectorControls>
					<ImageEdit 
						props={props}
					/>
					<PositionEdit 
						props={props}
					/>
				</InspectorControls>
			</Fragment>
			<BlockControls>
				<Toolbar>
					<IconButton
						label="Link"
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
										className="bootstrap-linkcontrol text-black"
										searchInputPlaceholder="Search here..."
										value={ attributes.url }					
										settings={[
											{
												id: 'opensInNewTab',
												title: 'New tab?',
											}
										]}
										onChange={ 
											( newPost ) => setAttributes( 
												{ 
													url: newPost
												},
												setIsVisible( ( state ) => ! state )
											) 
										}
										withCreateSuggestion={true}
										createSuggestion={ 
				  							(inputValue) => setAttributes( 
												{ 
													url: {
														...attributes.url,
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
			{!width &&
				<ResizableBox
					style={
						{
							'display':'inline-block',
							'height':'auto !important',
							'maxWidth':'100% !important'
						}
					}
					className={'img-fluid'+margin.classes()+''}
					size={ 
						{
							width: w,
							height: 'auto'
						}
					}
					minHeight="50"
					minWidth="50"
					__experimentalShowTooltip={true}
					__experimentalTooltipProps={
						{
							showPx: true,
							fadeTimeout: 1000,
						}
					}
					enable={ 
						{
							top: false,
							right: true,
							bottom: false,
							left: false,
							topRight: false,
							bottomRight: true,
							bottomLeft: false,
							topLeft: false,
						} 
					}
					onResizeStop={ 
						( event, direction, elt, delta ) => {

							setAttributes( {
								h: elt.offsetHeight,
								w: elt.offsetWidth
							} );
						} 
					}
					onResizeStart={ 
						() => {
							
						} 
					}
				>
					{figure &&
						<WrapperTag
					 		className={zoomeffect+''+margin.classes()+''+url+''}
					 		href={urlurl}
					 	>
  							<img 
								{ ...blockProps }
								src={(attributes.imageUrl !== '' && attributes.imageUrl !== undefined) ? ''+attributes.imageUrl+'' : ''+attributes.imagePlaceholder+''}
								alt={''+alttext+''}
								width={w}
								height={h}
								style={
									{
										"height": 'auto !important',
										"width": ''+w+'px'
									}
								}
								data-bs-toggle={dataBsToggle}	
								data-bs-target={dataBsTarget}	
								data-bs-slide-to={dataBsSlideTo}
  							/>
							{showlabel &&
								<p
									className={labelClasses}//'position-absolute text-center w-100 text-white bottom-0'
								>
									<span
										className={spanClasses}//'bg-tertiary bg-opacity-50 py-1 px-2'
									>
										{ alttext }
									</span>
								</p>
							}
						</WrapperTag>
					}
					{!figure &&
  						<img 
							{ ...blockProps }
							src={(attributes.imageUrl !== '' && attributes.imageUrl !== undefined) ? ''+attributes.imageUrl+'' : ''+attributes.imagePlaceholder+''}
							alt={''+alttext+''}
							width={w}
							height={h}
							style={
								{
									"height": 'auto !important',
									"width": ''+w+'px'
								}
							}
							data-bs-toggle={dataBsToggle}	
							data-bs-target={dataBsTarget}	
							data-bs-slide-to={dataBsSlideTo}
  						/>
					}
				</ResizableBox>
			}
			{width && figure &&
				<WrapperTag
			 		className={zoomeffect+''+width+''+height+''+margin.classes()+''+url+''}
			 		href={urlurl}
			 	>
  					<img 
						{ ...blockProps }
						src={(attributes.imageUrl !== '' && attributes.imageUrl !== undefined) ? ''+attributes.imageUrl+'' : ''+attributes.imagePlaceholder+''}
						alt={''+alttext+''}
						data-bs-toggle={dataBsToggle}	
						data-bs-target={dataBsTarget}	
						data-bs-slide-to={dataBsSlideTo}
  					/>
					{showlabel &&
						<p
							className={labelClasses}//'position-absolute text-center w-100 text-white bottom-0'
						>
							<span
								className={spanClasses}//'bg-tertiary bg-opacity-50 py-1 px-2'
							>
								{ alttext }
							</span>
						</p>
					}
				</WrapperTag>
			}
			{width && !figure &&
  				<img 
					{ ...blockProps }
					src={(attributes.imageUrl !== '' && attributes.imageUrl !== undefined) ? ''+attributes.imageUrl+'' : ''+attributes.imagePlaceholder+''}
					alt={''+alttext+''}
					data-bs-toggle={dataBsToggle}	
					data-bs-target={dataBsTarget}	
					data-bs-slide-to={dataBsSlideTo}
  				/>
			}
		</>
	)
}


/*export default withSelect((select, props) => {
	return { 
		headerImageInfo: attributes.headerImageId ? select('core').getMedia(attributes.headerImageId) : undefined
	};
})(HeaderEdit);*/

export default imageEdit;