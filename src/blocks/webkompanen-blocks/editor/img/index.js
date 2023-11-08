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
	TextareaControl,
	PanelBody,
	PanelRow,
	CheckboxControl,
	SelectControl,
	ColorPicker,
	Popover,
	IconButton,
	ButtonGroup,
	Button,
	ResponsiveWrapper,
	ColorPalette,
	__experimentalInputControl as InputControl,
	__experimentalBoxControl as BoxControl,
	__experimentalAlignmentMatrixControl as AlignmentMatrixControl,
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
import { BSHeight } from '../../utilities/height';
import { Backgroundcolor } from '../../utilities/backgroundcolor';
import { Justify } from '../../utilities/justify';
import { Alignitems } from '../../utilities/alignitems';

/* Editors */

import ColorEdit from '../../editor/color';
import BackgroundcolorEdit from '../../editor/backgroundcolor';
import ColEdit from '../../editor/col';
import MarginEdit from '../../editor/margin';
import NegativeMarginEdit from '../../editor/negativemargin';
import PaddingEdit from '../../editor/padding';
import DisplayEdit from '../../editor/display';
import PositionEdit from '../../editor/position';
import HeightEdit from '../../editor/height';
import { JustifyEdit } from '../../utilities/justify';

import { Units } from '../../utilities/units';

//function MarginEdit( props )
const ImageEdit = (props)=> {

	const {
		attributes,
		setAttributes,
		className,
		clientId
	} = props.props;
	
	const units = new Units()
	
	
	/* Media selector */
	const onSelectMedia = (imageInfo) => {
		setAttributes({
			imageId: imageInfo.id,
			imageUrl: imageInfo.url,
			imageAlt: imageInfo.alt,
			image: imageInfo,
			w: imageInfo.width,
			h: imageInfo.height
		});
	}
		
	/* Removers */
		
	const removeMedia = () => {
		setAttributes({
			imageId: -1,
			imageUrl: '',
			imageAlt: '',
			image: {},
			w: null,
			h: null
		});
	}
	
	let svgclass = ''

	if(attributes.imageUrl !== '' && attributes.imageUrl !== undefined){
		svgclass = attributes.image.subtype === 'svg+xml' ? ' ratio ratio-1x1 bg-light' : ''  
	}
	else{
		svgclass = ''
	}
	
	return(
		<PanelBody
			title={__('Afbeelding', 'awp')}
			initialOpen={false}
		>
			<div>
				<div className="editor-post-featured-image">
					<MediaUploadCheck>
						<MediaUpload
							onSelect={onSelectMedia}
							value={ attributes.imageId }
							allowedTypes={ ['image'] }
							render={
			  					({open}) => (
									<Button 
										className={
											(
												attributes.imageUrl === '' ||  attributes.imageUrl === undefined
											) ? 
											
											'editor-post-featured-image__toggle' 
											: 
											'editor-post-featured-image__preview'+svgclass+''
										}
										onClick={
											open
										}
									>
										{
											(attributes.imageUrl === '' ||  attributes.imageUrl) === undefined ? __('Choose an image', 'awp') : ''
										}
										{
											(attributes.imageUrl !== '' && attributes.imageUrl !== undefined) ? ( 
						            			<ResponsiveWrapper
													naturalWidth={ attributes.image.width}
													naturalHeight={ attributes.image.height}
									    		>
									    			<img 
														src={ attributes.imageUrl }
													/>
									    		</ResponsiveWrapper>
											)
													: ''
						            	}
									</Button>
								)
							}
						/>
					</MediaUploadCheck>
					{
						(attributes.imageUrl !== '' && attributes.imageUrl !== undefined) ? (
							
							<MediaUploadCheck>
								<MediaUpload
									title={__('Replace image', 'awp')}
									value={attributes.imageId}
									onSelect={onSelectMedia}
									allowedTypes={['image']}
									render={
										({open}) => (
											<Button 
												onClick={
													open
												}
												isDefault 
												//isLarge
											>
												{__('Replace image', 'awp')}
											</Button>
										)
									}
								/>
							</MediaUploadCheck>
						) : ''
					}
					{
						(attributes.imageUrl !== '' && attributes.imageUrl !== undefined) ? ( 
							<MediaUploadCheck>
								<Button onClick={removeMedia} isLink isDestructive>{__('Remove image', 'awp')}
								</Button>
							</MediaUploadCheck>
						) : ''
					}
				</div>
			</div>
			<div
				className="row"
			>
				<div
					className="col-12"
				>
					<ButtonGroup>
						{
							attributes.width === 'w-25' ?
							<Button 
								isPrimary
								onClick={
									(e)=>{
										setAttributes(
											{
												width:null
											}
										)
									}
								}
							>
								25%
							</Button>
							:
							<Button 
								isSecondary
								onClick={
								(e)=>{
									setAttributes(
										{
											width:'w-25'
										}
									)
								}
							}
							>
								25%
							</Button>

						}
						{
							attributes.width === 'w-50' ?
							<Button 
								isPrimary
								onClick={
									(e)=>{
										setAttributes(
											{
												width:null
											}
										)
									}
								}
							>
								50%
							</Button>
							:
							<Button 
								isSecondary
								onClick={
								(e)=>{
									setAttributes(
										{
											width:'w-50'
										}
									)
								}
							}
							>
								50%
							</Button>

						}
						{
							attributes.width === 'w-75' ?
							<Button 
								isPrimary
								onClick={
									(e)=>{
										setAttributes(
											{
												width:null
											}
										)
									}
								}
							>
								75%
							</Button>
							:
							<Button 
								isSecondary
								onClick={
								(e)=>{
									setAttributes(
										{
											width:'w-75'
										}
									)
								}
							}
							>
								75%
							</Button>

						}
						{
							attributes.width === 'w-100' ?
							<Button 
								isPrimary
								onClick={
									(e)=>{
										setAttributes(
											{
												width:null
											}
										)
									}
								}
							>
								100%
							</Button>
							:
							<Button 
								isSecondary
								onClick={
								(e)=>{
									setAttributes(
										{
											width:'w-100'
										}
									)
								}
							}
							>
								100%
							</Button>

						}
					</ButtonGroup>
					<ButtonGroup>
						{
							attributes.height === 'h-25' ?
							<Button 
								isPrimary
								onClick={
									(e)=>{
										setAttributes(
											{
												height:null
											}
										)
									}
								}
							>
								25%
							</Button>
							:
							<Button 
								isSecondary
								onClick={
								(e)=>{
									setAttributes(
										{
											height:'h-25'
										}
									)
								}
							}
							>
								25%
							</Button>

						}
						{
							attributes.height === 'h-50' ?
							<Button 
								isPrimary
								onClick={
									(e)=>{
										setAttributes(
											{
												height:null
											}
										)
									}
								}
							>
								50%
							</Button>
							:
							<Button 
								isSecondary
								onClick={
								(e)=>{
									setAttributes(
										{
											height:'h-50'
										}
									)
								}
							}
							>
								50%
							</Button>

						}
						{
							attributes.height === 'h-75' ?
							<Button 
								isPrimary
								onClick={
									(e)=>{
										setAttributes(
											{
												height:null
											}
										)
									}
								}
							>
								75%
							</Button>
							:
							<Button 
								isSecondary
								onClick={
								(e)=>{
									setAttributes(
										{
											height:'h-75'
										}
									)
								}
							}
							>
								75%
							</Button>

						}
						{
							attributes.height === 'h-100' ?
							<Button 
								isPrimary
								onClick={
									(e)=>{
										setAttributes(
											{
												height:null
											}
										)
									}
								}
							>
								100%
							</Button>
							:
							<Button 
								isSecondary
								onClick={
								(e)=>{
									setAttributes(
										{
											height:'h-100'
										}
									)
								}
							}
							>
								100%
							</Button>

						}
					</ButtonGroup>
				</div>
			</div>
			<div
				className="row"
			>
				<div
					className="col-12"
				>
					<ToggleControl
						label="Image fluid?"
						help={ attributes.imgfluid ? 'Yes.' : 'No.' }
						checked={ attributes.imgfluid }
						onChange={ 
							(e) => {
								setAttributes({
									imgfluid: ! attributes.imgfluid
								})
							}
						}
					/>
					<ToggleControl
						label="Figure wrapper?"
						help={ attributes.imgfigure ? 'Yes.' : 'No.' }
						checked={ attributes.imgfigure }
						onChange={ 
							(e) => {
								setAttributes({
									imgfigure: ! attributes.imgfigure
								})
							}
						}
					/>
					<ToggleControl
						label="Full width?"
						help={ attributes.fullwidth ? 'Yes.' : 'No.' }
						checked={ attributes.fullwidth }
						onChange={ 
							(e) => {
								setAttributes({
									fullwidth: ! attributes.fullwidth
								})
							}
						}
					/>
					<ToggleControl
						label="Zoom effect?"
						help={ attributes.zoomeffect ? 'Yes.' : 'No.' }
						checked={ attributes.zoomeffect }
						onChange={ 
							(e) => {
								setAttributes({
									zoomeffect: ! attributes.zoomeffect
								})
							}
						}
					/>
					<ToggleControl
						label="Object fit cover?"
						help={ attributes.objectfitcover ? 'Yes.' : 'No.' }
						checked={ attributes.objectfitcover }
						onChange={ 
							(e) => {
								setAttributes({
									objectfitcover: ! attributes.objectfitcover
								})
							}
						}
					/>
					<ToggleControl
						label="Show label"
						help={ attributes.showlabel ? 'Yes.' : 'No.' }
						checked={ attributes.showlabel }
						onChange={ 
							(e) => {
								setAttributes({
									showlabel: ! attributes.showlabel
								})
							}
						}
					/>
					{
						attributes.showlabel&&
							<>
								<AlignmentMatrixControl 
									label={__('Label positie')}
									value={attributes.labelpositionalignment} 
									onChange={ 
										( nextAlignment ) => {
											setAttributes(
												{labelpositionalignment:nextAlignment}
											)
										}
									} 
								/>
                            	<SelectControl
                                	label={ __( 'Label text alignment' ) }
                                	value={ attributes.labeltextalignment } // e.g: value = [ 'a', 'c' ]
                                	onChange={ 
										( nextSelect ) => {
											setAttributes(
												{labeltextalignment:nextSelect}
											)
										}
									}
                                	options={ [
                                    	{ value: null, label: '' },
                                    	{ value: 'start', label: 'Start' },
                                    	{ value: 'center', label: 'Center' },
                                    	{ value: 'end', label: 'End' }
                                	] }
                            	/>
								<ColorEdit 
									props={props.props}
								/>
								<BackgroundcolorEdit 
									props={props.props}
								/>
							</>
					}
					<TextareaControl
						label="Alt text"
						rows={5}
						value={ attributes.imageAlt }
						onChange={ 
							(nextValue) => {
								setAttributes({
									imageAlt: nextValue
								})
							} 
						}
					/>
					<BoxControl
						values={ 
							{
								top: attributes.borders.top ? attributes.borders.top : null,
								left: attributes.borders.left ? attributes.borders.left : null,
								right: attributes.borders.right ? attributes.borders.right : null,
								bottom: attributes.borders.bottom ? attributes.borders.bottom : null
							}
						}
						label="Afgeronde hoeken"
						units={units.get()}
						onChange={ 
							( nextValues ) => {
								setAttributes({
									borders:nextValues
								}) 	  
							} 
						}
					/>
				</div>
			</div>
		</PanelBody>
	)
}

export default ImageEdit;