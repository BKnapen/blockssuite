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
const ColOrderEdit = (props)=> {

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
						value={attributes.orderxs}
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
						value={attributes.ordersm}
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
						value={attributes.ordermd}
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
						value={attributes.orderlg}
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
						value={attributes.orderxl}
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
						value={attributes.orderxxl}
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
					title={__('Col order', 'webkompanen')}
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
								value={attributes.orderxs}
								type="number"
								isPressEnterToChange
								onChange={ 
									( nextValue ) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												orderxs: Number(nextValue) 
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
					title={__('Col order', 'webkompanen')}
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
								value={attributes.ordersm}
								type="number"
								isPressEnterToChange
								onChange={ 
									( nextValue ) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												ordersm: Number(nextValue) 
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
					title={__('Col order', 'webkompanen')}
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
								value={attributes.ordermd}
								type="number"
								isPressEnterToChange
								onChange={ 
									( nextValue ) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												ordermd: Number(nextValue) 
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
					title={__('Col order', 'webkompanen')}
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
								value={attributes.orderlg}
								type="number"
								isPressEnterToChange
								onChange={ 
									( nextValue ) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												orderlg: Number(nextValue) 
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
					title={__('Col order', 'webkompanen')}
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
								value={attributes.orderxl}
								type="number"
								isPressEnterToChange
								onChange={ 
									( nextValue ) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												orderxl: Number(nextValue) 
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
					title={__('Col order', 'webkompanen')}
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
								value={attributes.orderxxl}
								type="number"
								isPressEnterToChange
								onChange={ 
									( nextValue ) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												orderxxl: Number(nextValue) 
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

export default ColOrderEdit;