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

import { Units } from '../../utilities/units';

//function MarginEdit( props )
const NegativeMarginEdit = (props)=> {
	
	const {
		attributes,
		setAttributes,
		className,
		clientId
	} = props.props;
	const breakpoint = props.breakpoint ? props.breakpoint : null
	const units = new Units()

	
    const { updateSelectedblockAttributes } = wp.data.dispatch( 'core/block-editor' );
	const selectedblockpropstest = wp.data.select( 'core/block-editor' ).getSelectedBlock();
	
	function updateBlock(nextValues){
		
		const selectedblockprops = wp.data.select( 'core/block-editor' ).getSelectedBlock();
		
	}
	
	return(
		<>
		{!breakpoint && 
		<>
		<PanelBody
			title={__('Negative Margin settings', 'webkompanen')}
			initialOpen={false}
		>
			<div 
				className="row"
			>
				<div className="col-12">
					<BoxControl
						values={ 
							{
								top: attributes.nmxs.top,
								left: attributes.nmxs.left,
								right: attributes.nmxs.right,
								bottom: attributes.nmxs.bottom
							} 
						}
						label={__('xs', 'webkompanen')}
						units={units.get()}
						onChange={ 
							( nextValues ) => {
								setAttributes({
									nmxs:nextValues
								}) 	  
							} 
						}
					/>
				</div>
				<div className="col-12">
					<BoxControl
						values={ 
							{
								top: attributes.nmsm.top,
								left: attributes.nmsm.left,
								right: attributes.nmsm.right,
								bottom: attributes.nmsm.bottom
							} 
						}
						label={__('sm', 'webkompanen')}
						units={units.get()}
						onChange={ 
							( nextValues ) => {
								setAttributes({
									nmsm:nextValues
								}) 	  
							} 
						}
					/>
				</div>
				<div className="col-12">
					<BoxControl
						values={ 
							{
								top: attributes.nmmd.top,
								left: attributes.nmmd.left,
								right: attributes.nmmd.right,
								bottom: attributes.nmmd.bottom
							} 
						}
						label={__('md', 'webkompanen')}
						units={units.get()}
						onChange={ 
							( nextValues ) => {
								setAttributes({
									nmmd:nextValues
								}) 	  
							} 
						}
					/>
				</div>
				<div className="col-12">
					<BoxControl
						values={ 
							{
								top: attributes.nmlg.top,
								left: attributes.nmlg.left,
								right: attributes.nmlg.right,
								bottom: attributes.nmlg.bottom
							} 
						}
						label={__('lg', 'webkompanen')}
						units={units.get()}
						onChange={ 
							( nextValues ) => {
								setAttributes({
									nmlg:nextValues
								}) 	  
							} 
						}
					/>
				</div>
				<div className="col-12">
					<BoxControl
						values={ 
							{
								top: attributes.nmxl.top,
								left: attributes.nmxl.left,
								right: attributes.nmxl.right,
								bottom: attributes.nmxl.bottom
							} 
						}
						label={__('xl', 'webkompanen')}
						units={units.get()}
						onChange={ 
							( nextValues ) => {
								setAttributes( {
									nmxl:nextValues
								} ) 	  
							} 
						}
					/>
				</div>
				<div className="col-12">
					<BoxControl
						values={ 
							{
								top: attributes.nmxxl.top,
								left: attributes.nmxxl.left,
								right: attributes.nmxxl.right,
								bottom: attributes.nmxxl.bottom
							}
						}
						label={__('xxl', 'webkompanen')}
						units={units.get()}
						onChange={ 
							( nextValues ) => {
								setAttributes({
									nmxxl:nextValues
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
					title={__('Negative margin settings', 'webkompanen')}
					initialOpen={false}
				>
					<div 
						className="row"
					>
						<div className="col-12">
							<BoxControl
								values={ 
									{
										top: attributes.nmxs.top,
										left: attributes.nmxs.left,
										right: attributes.nmxs.right,
										bottom: attributes.nmxs.bottom
									} 
								}
								label={__('xs', 'webkompanen')}
								units={units.get()}
								onChange={ 
									( nextValues ) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												nmxs: nextValues 
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
					title={__('Negative margin settings (sm)', 'webkompanen')}
					initialOpen={false}
				>
					<div 
						className="row"
					>
						<div className="col-12">
							<BoxControl
								values={ 
									{
										top: attributes.nmsm.top,
										left: attributes.nmsm.left,
										right: attributes.nmsm.right,
										bottom: attributes.nmsm.bottom
									} 
								}
								label={__('sm', 'webkompanen')}
								units={units.get()}
								onChange={ 
									( nextValues ) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												nmsm: nextValues 
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
					title={__('Negative margin settings (md)', 'webkompanen')}
					initialOpen={false}
				>
					<div 
						className="row"
					>
						<div className="col-12">
							<BoxControl
								values={ 
									{
										top: attributes.nmmd.top,
										left: attributes.nmmd.left,
										right: attributes.nmmd.right,
										bottom: attributes.nmmd.bottom
									} 
								}
								label={__('md', 'webkompanen')}
								units={units.get()}
								onChange={ 
									( nextValues ) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												nmmd: nextValues 
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
					title={__('Negative margin settings (lg)', 'webkompanen')}
					initialOpen={false}
				>
					<div 
						className="row"
					>
						<div className="col-12">
							<BoxControl
								values={ 
									{
										top: attributes.nmlg.top,
										left: attributes.nmlg.left,
										right: attributes.nmlg.right,
										bottom: attributes.nmlg.bottom
									} 
								}
								label={__('lg', 'webkompanen')}
								units={units.get()}
								onChange={ 
									( nextValues ) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												nmlg: nextValues 
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
					title={__('Negative margin settings (xl)', 'webkompanen')}
					initialOpen={false}
				>
					<div 
						className="row"
					>
						<div className="col-12">
							<BoxControl
								values={ 
									{
										top: attributes.nmxl.top,
										left: attributes.nmxl.left,
										right: attributes.nmxl.right,
										bottom: attributes.nmxl.bottom
									} 
								}
								label={__('xl', 'webkompanen')}
								units={units.get()}
								onChange={ 
									( nextValues ) => {
								
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												nmxl: nextValues 
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
					title={__('Negative margin settings (xxl)', 'webkompanen')}
					initialOpen={false}
				>
					<div 
						className="row"
					>
						<div className="col-12">
							<BoxControl
								values={ 
									{
										top: attributes.nmxxl.top,
										left: attributes.nmxxl.left,
										right: attributes.nmxxl.right,
										bottom: attributes.nmxxl.bottom
									} 
								}
								label={__('xxl', 'webkompanen')}
								units={units.get()}
								onChange={ 
									( nextValues ) => {
								
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												nmxxl: nextValues 
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

export default NegativeMarginEdit;