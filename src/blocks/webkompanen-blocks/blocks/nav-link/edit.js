/**
 * WordPress dependencies
 */
import {
	registerBlockType
	
} from '@wordpress/blocks';

import { 
	useSelect, useDispatch 
} from '@wordpress/data';

import { 
	sprintf, __ 
} from '@wordpress/i18n';

import {
	__experimentalLinkControl as LinkControl,
	InnerBlocks,
	useBlockProps,
	BlockControls,
	InspectorControls,
	MediaUpload, 
	MediaUploadCheck,
	RichText,
	PanelColorSettings,
	withColors,
	useInnerBlocksProps,
	getColorObjectByColorValue,
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
	DropdownMenu,
	SelectControl,
	ColorPicker,
	Popover,
	IconButton,
	Button,
	ColorPalette,
	Toolbar
} from '@wordpress/components';

import {
	button as icon
} from '../../icons'

import { Margin } from '../../utilities/margin';
import { NegativeMargin } from '../../utilities/negativemargin';
import { Padding } from '../../utilities/padding';
import { Display } from '../../utilities/display';
import { Position } from '../../utilities/position';
import { Color } from '../../utilities/color';
import { Backgroundcolor } from '../../utilities/backgroundcolor';
import { TextAlign } from '../../utilities/textalign';

/* Editors */
import PositionEdit from '../../editor/position';
import ColorEdit from '../../editor/color';
import BackgroundcolorEdit from '../../editor/backgroundcolor';

function ButtonLinkEdit( props ) {
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
	
	const colorArr = [
		{ name: 'primary', color: 'var(--bs-primary)' },
		{ name: 'secondary', color: 'var(--bs-secondary)' },
		{ name: 'light', color: 'var(--bs-light)' },
		{ name: 'dark', color: 'var(--bs-dark)' }
	]
	
	const btnoutline  = attributes.isOutline ? 'outline-' : '' 
	const btncolor  = attributes.color ? attributes.color+'' : '' 
	
	const margin = new Margin(props)
	const negativemargin = new NegativeMargin(props)
	const padding = new Padding(props)
	const display = new Display(props)
	const position = new Position(props)
	const color = new Color(props)
	const backgroundcolor = new Backgroundcolor(props)
	const textalign = new TextAlign(props)

	const parentClientId = useSelect( ( select ) =>
		select( blockEditorStore ).getBlockHierarchyRootClientId( clientId )
	);

	let parent = useSelect( ( select ) => 
		select(blockEditorStore).getBlockParentsByBlockName(clientId, 'webkompanen-blocks/nav-item')
	)

	const parentAttributes = useSelect( ( select ) =>
		select(blockEditorStore).getBlockAttributes( parent[0] )
	);

//console.log('parentAttributes')
//console.log(parentAttributes)
//console.log(parent)

	if(parentAttributes.dropdown){
		parentAttributes.dropdown !== attributes.dropdowntoggle ? (
			setAttributes(
				{
					dropdowntoggle:parentAttributes.dropdown
				}
			)
		):''
	}

	let parentid = parent[0].replace(/\d+|\d+|[-]/gm,'');

	parentid !== attributes.parentid ? (
		setAttributes(
			{
				parentid:parentid
			}
		)
	):''
	
	const classes = attributes.classes ? attributes.classes : ''
	const dropdowntoggle = attributes.dropdowntoggle ? 'dropdown-toggle' : ''
	
	let blockClasses = 'nav-link';

	blockClasses += classes != null && classes != '' ? ' '+classes : ''
	blockClasses += dropdowntoggle != null && dropdowntoggle != '' ? ' '+dropdowntoggle : ''
	blockClasses += attributes.fw != null && attributes.fw != '' ? ' '+attributes.fw : ''
	blockClasses += attributes.fs != null && attributes.fs != '' ? ' fs-'+attributes.fs : ''
	blockClasses += backgroundcolor.classes() != null && backgroundcolor.classes() != '' ? ' '+backgroundcolor.classes() : ''
	blockClasses += color.classes() != null && color.classes() != '' ? ' '+color.classes() : ''
	blockClasses += margin.classes() != null && margin.classes() != '' ? ' '+margin.classes() : ''
	blockClasses += negativemargin.classes() != null && negativemargin.classes() != '' ? ' '+negativemargin.classes() : ''
	blockClasses += padding.classes() != null && padding.classes() != '' ? ' '+padding.classes() : ''
	blockClasses += display.classes() != null && display.classes() != '' ? ' '+display.classes() : ''
	blockClasses += position.classes() != null && position.classes() != '' ? ' '+position.classes() : ''
	blockClasses += textalign.classes() != null && textalign.classes() != '' ? ' '+textalign.classes() : ''
	
	blockClasses = blockClasses.replace(/^\s+|\s+$/gm,'');
	blockClasses = blockClasses.replace(/\s+\s+/gm,' ');
	blockClasses = blockClasses == '' ? null : blockClasses

	const parentidoutput = attributes.parentid != null && attributes.parentid != '' && dropdowntoggle != null && dropdowntoggle != '' ? attributes.parentid : null
	const databstoggle = dropdowntoggle != null && dropdowntoggle != '' ? 'dropdown' : null
	const ariaexpanded = dropdowntoggle != null && dropdowntoggle != '' ? 'false' : null
	const role = dropdowntoggle != null && dropdowntoggle != '' ? 'button' : null
	
	const blockProps = useBlockProps( { id: parentidoutput, dataBsToggle: databstoggle, ariaExpanded: ariaexpanded, role:role, className: blockClasses } );
	
	return(
		<>
			<Fragment>		
				<InspectorControls>
					<PanelBody
						title={__('Typografie', 'webkompanen')}
						initialOpen={false}
					>
						<div 
							className="row"
						>
							<div className="col-12">
								<SelectControl
									label={ __( 'Font size' ) }
									value={ attributes.fs } // e.g: value = [ 'a', 'c' ]
									onChange={ 
										( nextSelect ) => {
											setAttributes( {
												fs:Number(nextSelect)
											} ) 
										} 
									}
									options={ [
										{ value: null, label: __('', 'webkompanen' ) },
										{ value: 1, label: __('fs-1', 'webkompanen' ) },
										{ value: 2, label: __('fs-2', 'webkompanen' ) },
										{ value: 3, label: __('fs-3', 'webkompanen' ) },
										{ value: 4, label: __('fs-4', 'webkompanen' ) },
										{ value: 5, label: __('fs-5', 'webkompanen' ) },
										{ value: 6, label: __('fs-6', 'webkompanen' ) }
									] }
								/>
							</div>
						</div>
						<div 
							className="row"
						>
							<div className="col-12">
								<SelectControl
									label={ __( 'Font weight and italics' ) }
									value={ attributes.fw } // e.g: value = [ 'a', 'c' ]
									onChange={ 
										( nextSelect ) => {
											setAttributes( {
												fw:nextSelect
											} ) 
										} 
									}
									options={ [
										{ value: null, label: __('', 'webkompanen' ) },
										{ value: 'fw-bold', label: __('Bold text', 'webkompanen' ) },
										{ value: 'fw-bolder', label: __('Bolder weight text', 'webkompanen' ) },
										{ value: 'fw-semibold', label: __('Semibold weight text', 'webkompanen' ) },
										{ value: 'fw-normal', label: __('Normal weight text', 'webkompanen' ) },
										{ value: 'fw-light', label: __('Light weight text', 'webkompanen' ) },
										{ value: 'fw-lighter', label: __('Lighter weight text', 'webkompanen' ) },
										{ value: 'fst-italic', label: __('Italic text', 'webkompanen' ) },
										{ value: 'fst-normal', label: __('Text with normal font style', 'webkompanen' ) }
									] }
								/>
							</div>
						</div>
					</PanelBody>
					<PositionEdit 
						props={props}
					/>
					<ColorEdit 
						props={props}
					/>
					<BackgroundcolorEdit 
						props={props}
					/>
					<PanelBody
						title={__('Button kleur', 'webkompanen')}
						initialOpen={false}
					>
					<ColorPalette
						colors={ colorArr }
						value={ attributes.color ? 'var(--bs-'+attributes.color+')' : '' }
						style={{width: "200px" }}
						onChange={ 
							( newColor ) => {
								setAttributes({
									color: getColorObjectByColorValue( colorArr, newColor ).name
								})
							} 
						}
						disableCustomColors={ true }
						clearable={ false }
					/>
					</PanelBody>
				</InspectorControls>
			</Fragment>
			<BlockControls>
				<Toolbar>
					<ToggleControl
						label={__('Outline button', 'webkompanen')}
						help={ true ? '' : '' }
						checked={ attributes.isOutline }
						onChange={ 
							(e) => { 
								setAttributes({
									isOutline: ! attributes.isOutline 
								}) 
							}
						}
						style={
							{
								'margin-bottom': '0px'
							}
						}
					/>
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
													button: newPost.url
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
			<RichText
				{ ...blockProps }
				identifier="content"
				//className="display-4"
               	tagName="a" // The tag here is the element output and editable in the admin
               	value={ attributes.content } // Any existing content, either from the database or an attribute default
				allowedFormats={ [ 'core/italic', 'core/bold' ] } // Allow the content to be made bold or italic, but do not allow other formatting options
               	onChange={ ( content ) => setAttributes( { content } ) } // Store updated content as a block attribute
               	placeholder={ __( 'Text...' ) } // Display this text before any content has been added by the user
            />
		</>
	)
}

export default ButtonLinkEdit;