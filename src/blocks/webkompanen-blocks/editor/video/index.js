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
	Toolbar
} from '@wordpress/components';

import { Units } from '../../utilities/units';

//function MarginEdit( props )
const VideoEdit = (props)=> {

	const {
		attributes,
		setAttributes,
		className,
		clientId
	} = props.props;
	
	
	
	/* Media selector */
	const onSelectMedia = (videoInfo) => {
		setAttributes({
			videoId: videoInfo.id,
			videoUrl: videoInfo.url,
			videoAlt: videoInfo.alt,
			video: videoInfo,
			w: videoInfo.width,
			h: videoInfo.height
		});
	}
		
	/* Removers */
		
	const removeMedia = () => {
		setAttributes({
			videoId: -1,
			videoUrl: '',
			videoAlt: '',
			video: {},
			w: null,
			h: null
		});
	}
	
	
	return(
		<PanelBody
			title={__('Video', 'webkompanen')}
			initialOpen={false}
		>
			<div>
				<div className="editor-post-featured-video">
					<MediaUploadCheck>
						<MediaUpload
							onSelect={onSelectMedia}
							value={ attributes.videoId }
							allowedTypes={ ['video', 'mp4', 'mov'] }
							render={
			  					({open}) => (
									<Button 
										className={
											(attributes.videoUrl === '' ||  attributes.videoUrl === undefined) ? 'editor-post-featured-video__toggle' : 'editor-post-featured-video__preview h-auto ratio ratio-16x9'
										}
										onClick={
											open
										}
									>
										{
											(attributes.videoUrl === '' ||  attributes.videoUrl) === undefined ? __('Choose an video', 'webkompanen') : ''
										}
										{
											(attributes.videoUrl !== '' && attributes.videoUrl !== undefined) ? ( 
						            			<ResponsiveWrapper
													className="w-100 ratio ratio-16x9"
									    		>
									    			<video> 
														<source
															src={ attributes.videoUrl }
															type="video/mp4"
														/>
													</video>
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
						(attributes.videoUrl !== '' && attributes.videoUrl !== undefined) ? (
							<MediaUploadCheck>
								<MediaUpload
									title={__('Replace video', 'webkompanen')}
									value={attributes.videoId}
									onSelect={onSelectMedia}
									allowedTypes={['video']}
									render={
										({open}) => (
											<Button 
												onClick={
													open
												}
												isDefault 
												//isLarge
											>
												{__('Replace video', 'webkompanen')}
											</Button>
										)
									}
								/>
							</MediaUploadCheck>
						) : ''
					}
					{
						(attributes.videoUrl !== '' && attributes.videoUrl !== undefined) ? ( 
							<MediaUploadCheck>
								<Button onClick={removeMedia} isLink isDestructive>{__('Remove video', 'webkompanen')}
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
					<ToggleControl
						label={__('Autoplay', 'webkompanen')}
						help={ attributes.autoplay ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
						checked={ attributes.autoplay }
						onChange={ 
							(e) => {
								setAttributes({
									autoplay: ! attributes.autoplay
								})
							}
						}
					/>
					<ToggleControl
						label={__('Muted', 'webkompanen')}
						help={ attributes.muted ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
						checked={ attributes.muted }
						onChange={ 
							(e) => {
								setAttributes({
									muted: ! attributes.muted
								})
							}
						}
					/>
					<ToggleControl
						label={__('Controls', 'webkompanen')}
						help={ attributes.controls ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
						checked={ attributes.controls }
						onChange={ 
							(e) => {
								setAttributes({
									controls: ! attributes.controls
								})
							}
						}
					/>
					<ToggleControl
						label={__('Loop', 'webkompanen')}
						help={ attributes.loop ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
						checked={ attributes.loop }
						onChange={ 
							(e) => {
								setAttributes({
									loop: ! attributes.loop
								})
							}
						}
					/>
					<ToggleControl
						label={__('playsinline', 'webkompanen')}
						help={ attributes.playsinline ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
						checked={ attributes.playsinline }
						onChange={ 
							(e) => {
								setAttributes({
									playsinline: ! attributes.playsinline
								})
							}
						}
					/>
				</div>
			</div>
		</PanelBody>
	)
}

export default VideoEdit;