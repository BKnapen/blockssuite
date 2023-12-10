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
const ColEdit = (props)=> {

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
					title={__('Col opties', 'webkompanen')}
					initialOpen={false}
				>
					<div 
						className="row"
					>
						<div
							className="col-12"
						>
							<InputControl
								label={__('xs', 'webkompanen')}
								labelPosition="top"
								value={attributes.colxs}
								type="number"
								isPressEnterToChange
								onChange={ 
									( nextValue ) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												colxs: Number(nextValue) 
											} 
										)	  
									}
								}
							/>
							<ToggleControl
								label={__('Col xs auto?', 'webkompanen')}
								help={ attributes.colautoxs ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
								checked={ attributes.colautoxs }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												colautoxs: ! attributes.colautoxs 
											} 
										)
									}
								}
							/>
						</div>
					</div>
				</PanelBody>
		}
		{
			breakpoint && breakpoint == 'sm' &&	
				<PanelBody
					title={__('Col opties', 'webkompanen')}
					initialOpen={false}
				>
					<div 
						className="row"
					>
						<div
							className="col-12"
						>
							<InputControl
								label={__('sm', 'webkompanen')}
								labelPosition="top"
								value={attributes.colsm}
								type="number"
								isPressEnterToChange
								onChange={ 
									( nextValue ) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												colsm: Number(nextValue) 
											} 
										)	  
									}
								}
							/>
							<ToggleControl
								label={__('Col sm auto?', 'webkompanen')}
								help={ attributes.colautosm ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
								checked={ attributes.colautosm }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												colautosm: ! attributes.colautosm 
											} 
										)
									}
								}
							/>
						</div>
					</div>
				</PanelBody>
		}
		{
			breakpoint && breakpoint == 'md' &&	
				<PanelBody
					title={__('Col opties', 'webkompanen')}
					initialOpen={false}
				>
					<div 
						className="row"
					>
						<div
							className="col-12"
						>
							<InputControl
								label={__('md', 'webkompanen')}
								labelPosition="top"
								value={attributes.colmd}
								type="number"
								isPressEnterToChange
								onChange={ 
									( nextValue ) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												colmd: Number(nextValue) 
											} 
										)	  
									}
								}
							/>
							<ToggleControl
								label={__('Col md auto?', 'webkompanen')}
								help={ attributes.colautomd ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
								checked={ attributes.colautomd }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												colautomd: ! attributes.colautomd 
											} 
										)
									}
								}
							/>
						</div>
					</div>
				</PanelBody>
		}
		{
			breakpoint && breakpoint == 'lg' &&	
				<PanelBody
					title={__('Col opties', 'webkompanen')}
					initialOpen={false}
				>
					<div 
						className="row"
					>
						<div
							className="col-12"
						>
							<InputControl
								label={__('lg', 'webkompanen')}
								labelPosition="top"
								value={attributes.collg}
								type="number"
								isPressEnterToChange
								onChange={ 
									( nextValue ) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												collg: Number(nextValue) 
											} 
										)	  
									}
								}
							/>
							<ToggleControl
								label={__('Col lg auto?', 'webkompanen')}
								help={ attributes.colautolg ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
								checked={ attributes.colautolg }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												colautolg: ! attributes.colautolg 
											} 
										)
									}
								}
							/>
						</div>
					</div>
				</PanelBody>
		}
		{
			breakpoint && breakpoint == 'xl' &&	
				<PanelBody
					title={__('Col opties', 'webkompanen')}
					initialOpen={false}
				>
					<div 
						className="row"
					>
						<div
							className="col-12"
						>
							<InputControl
								label={__('xl', 'webkompanen')}
								labelPosition="top"
								value={attributes.colxl}
								type="number"
								isPressEnterToChange
								onChange={ 
									( nextValue ) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												colxl: Number(nextValue) 
											} 
										)	  
									}
								}
							/>
							<ToggleControl
								label={__('Col xl auto?', 'webkompanen')}
								help={ attributes.colautoxl ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
								checked={ attributes.colautoxl }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												colautoxl: ! attributes.colautoxl 
											} 
										)
									}
								}
							/>
						</div>
					</div>
				</PanelBody>
		}
		{
			breakpoint && breakpoint == 'xxl' &&
				<PanelBody
					title={__('Col opties', 'webkompanen')}
					initialOpen={false}
				>
					<div 
						className="row"
					>
						<div
							className="col-12"
						>
							<InputControl
								label={__('xxl', 'webkompanen')}
								labelPosition="top"
								value={attributes.colxxl}
								type="number"
								isPressEnterToChange
								onChange={ 
									( nextValue ) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												colxxl: Number(nextValue) 
											} 
										)	  
									}
								}
							/>
							<ToggleControl
								label={__('Col xxl auto?', 'webkompanen')}
								help={ attributes.colautoxxl ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
								checked={ attributes.colautoxxl }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												colautoxxl: ! attributes.colautoxxl 
											} 
										)
									}
								}
							/>
						</div>
					</div>
				</PanelBody>
		}
		</>
	)
}

export default ColEdit;