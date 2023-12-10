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
	Button,
	ResponsiveWrapper,
	ColorPalette,
	__experimentalInputControl as InputControl,
	__experimentalBoxControl as BoxControl,
	Toolbar
} from '@wordpress/components';

//function MarginEdit( props )
const TextAlignEdit = (props)=> {

	const {
		attributes,
		setAttributes,
		className,
		clientId
	} = props.props;
	
	
	const breakpoint = props.breakpoint ? props.breakpoint : null
	
    const { updateSelectedblockAttributes } = wp.data.dispatch( 'core/block-editor' );
	const selectedblockpropstest = wp.data.select( 'core/block-editor' ).getSelectedBlock();
	
	return(
		<>
		{!breakpoint && 
		<>
		<PanelBody
			title={__('Col instellingen', 'webkompanen')}
			initialOpen={false}
		>
			<div 
				className="row"
			>
				<div className="col-4">
					<InputControl
						label={__('xs', 'webkompanen')}
						labelPosition="top"
						value={attributes.colxs}
						type="number"
						isPressEnterToChange
						onChange={ 
							( nextValue ) => {
								setAttributes({
									colxs: Number(nextValue)
								}) 
							}
						}
					/>
				</div>
				<div className="col-4">
					<InputControl
						label={__('sm', 'webkompanen')}
						labelPosition="top"
						value={attributes.colsm}
						type="number"
						isPressEnterToChange
						onChange={ 
							( nextValue ) => {
								setAttributes({
									colsm: Number(nextValue)
								}) 
							}
						}
					/>
				</div>
				<div className="col-4">
					<InputControl
						label={__('md', 'webkompanen')}
						labelPosition="top"
						value={attributes.colmd}
						type="number"
						isPressEnterToChange
						onChange={ 
							( nextValue ) => {
								setAttributes({
									colmd: Number(nextValue)
								}) 
							}
						}
					/>
				</div>
				<div className="col-4">
					<InputControl
						label={__('lg', 'webkompanen')}
						labelPosition="top"
						value={attributes.collg}
						type="number"
						isPressEnterToChange
						onChange={ 
							( nextValue ) => {
								setAttributes({
									collg: Number(nextValue)
								}) 
							}
						}
					/>
				</div>
				<div className="col-4">
					<InputControl
						label={__('xl', 'webkompanen')}
						labelPosition="top"
						value={attributes.colxl}
						type="number"
						isPressEnterToChange
						onChange={ 
							( nextValue ) => {
								setAttributes({
									colxl: Number(nextValue)
								}) 
							}
						}
					/>
				</div>
				<div className="col-4">
					<InputControl
						label={__('xxl', 'webkompanen')}
						labelPosition="top"
						value={attributes.colxxl}
						type="number"
						isPressEnterToChange
						onChange={ 
							( nextValue ) => {
								setAttributes({
									colxxl: Number(nextValue)
								}) 
							}
						}
					/>
				</div>
			</div>
		</PanelBody>

		</>
		}
		{
			breakpoint && breakpoint == 'xs' &&	
				<PanelBody
					title={__('Text alignment', 'webkompanen')}
					initialOpen={false}
				>
					<div 
						className="row"
					>
						<div
							className="col-12"
						>
                            <SelectControl
                                label={ __( 'xs', 'webkompanen' ) }
                                value={ attributes.textalignxs } // e.g: value = [ 'a', 'c' ]
                                onChange={ 
									( nextSelect ) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												textalignxs: nextSelect 
											} 
										)	  
									} 
								}
                                options={ [
                                    { value: null, label: __('', 'webkompanen') },
                                    { value: 'start', label: __('Start', 'webkompanen') },
                                    { value: 'end', label: __('End', 'webkompanen') },
                                    { value: 'center', label: __('Center', 'webkompanen') }
                                ] }
                            />
						</div>
					</div>
				</PanelBody>
		}
		{
			breakpoint && breakpoint == 'sm' &&	
				<PanelBody
					title={__('Text alignment', 'webkompanen')}
					initialOpen={false}
				>
					<div 
						className="row"
					>
						<div
							className="col-12"
						>
                            <SelectControl
                                label={ __( 'sm', 'webkompanen' ) }
                                value={ attributes.textalignsm } // e.g: value = [ 'a', 'c' ]
                                onChange={ 
									( nextSelect ) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												textalignsm: nextSelect 
											} 
										)	  
									} 
								}
                                options={ [
                                    { value: null, label: __('', 'webkompanen') },
                                    { value: 'start', label: __('Start', 'webkompanen') },
                                    { value: 'end', label: __('End', 'webkompanen') },
                                    { value: 'center', label: __('Center', 'webkompanen') }
                                ] }
                            />
						</div>
					</div>
				</PanelBody>
		}
		{
			breakpoint && breakpoint == 'md' &&	
				<PanelBody
					title={__('Text alignment', 'webkompanen')}
					initialOpen={false}
				>
					<div 
						className="row"
					>
						<div
							className="col-12"
						>
                            <SelectControl
                                label={ __( 'md', 'webkompanen' ) }
                                value={ attributes.textalignmd } // e.g: value = [ 'a', 'c' ]
                                onChange={ 
									( nextSelect ) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												textalignmd: nextSelect 
											} 
										)	  
									} 
								}
                                options={ [
                                    { value: null, label: __('', 'webkompanen') },
                                    { value: 'start', label: __('Start', 'webkompanen') },
                                    { value: 'end', label: __('End', 'webkompanen') },
                                    { value: 'center', label: __('Center', 'webkompanen') }
                                ] }
                            />
						</div>
					</div>
				</PanelBody>
		}
		{
			breakpoint && breakpoint == 'lg' &&	
				<PanelBody
					title={__('Text alignment', 'webkompanen')}
					initialOpen={false}
				>
					<div 
						className="row"
					>
						<div
							className="col-12"
						>
                            <SelectControl
                                label={ __( 'lg', 'webkompanen' ) }
                                value={ attributes.textalignlg } // e.g: value = [ 'a', 'c' ]
                                onChange={ 
									( nextSelect ) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												textalignlg: nextSelect 
											} 
										)	  
									} 
								}
                                options={ [
                                    { value: null, label: __('', 'webkompanen') },
                                    { value: 'start', label: __('Start', 'webkompanen') },
                                    { value: 'end', label: __('End', 'webkompanen') },
                                    { value: 'center', label: __('Center', 'webkompanen') }
                                ] }
                            />
						</div>
					</div>
				</PanelBody>
		}
		{
			breakpoint && breakpoint == 'xl' &&	
				<PanelBody
					title={__('Text alignment', 'webkompanen')}
					initialOpen={false}
				>
					<div 
						className="row"
					>
						<div
							className="col-12"
						>
							<SelectControl
                                label={ __( 'xl', 'webkompanen' ) }
                                value={ attributes.textalignxl } // e.g: value = [ 'a', 'c' ]
                                onChange={ 
									( nextSelect ) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												textalignxl: nextSelect 
											} 
										)	  
									} 
								}
                                options={ [
                                    { value: null, label: __('', 'webkompanen') },
                                    { value: 'start', label: __('Start', 'webkompanen') },
                                    { value: 'end', label: __('End', 'webkompanen') },
                                    { value: 'center', label: __('Center', 'webkompanen') }
                                ] }
                            />
						</div>
					</div>
				</PanelBody>
		}
		{
			breakpoint && breakpoint == 'xxl' &&
				<PanelBody
					title={__('Text alignment', 'webkompanen')}
					initialOpen={false}
				>
					<div 
						className="row"
					>
						<div
							className="col-12"
						>
							<SelectControl
                                label={ __( 'xxl', 'webkompanen' ) }
                                value={ attributes.textalignxxl } // e.g: value = [ 'a', 'c' ]
                                onChange={ 
									( nextSelect ) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												textalignxxl: nextSelect 
											} 
										)	  
									} 
								}
                                options={ [
                                    { value: null, label: __('', 'webkompanen') },
                                    { value: 'start', label: __('Start', 'webkompanen') },
                                    { value: 'end', label: __('End', 'webkompanen') },
                                    { value: 'center', label: __('Center', 'webkompanen') }
                                ] }
                            />
						</div>
					</div>
				</PanelBody>
		}
		</>
	)
}

export default TextAlignEdit;