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

import { 
	PluginSidebarMoreMenuItem, 
	PluginSidebar 
} from '@wordpress/edit-post';

import { 
	compose 
} from '@wordpress/compose';

import { Units } from '../../utilities/units';

//function MarginEdit( props,  breakpoint)
const MarginEdit = (props) => {

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
			title={__('Margin settings extra small devices', 'webkompanen')}
			initialOpen={false}
		>
			<div 
				className="row"
			>
				<div className="col-12">
					<BoxControl
						values={ 
							{
								top: attributes.mxs.top,
								left: attributes.mxs.left,
								right: attributes.mxs.right,
								bottom: attributes.mxs.bottom
							} 
						}
						label={__('xs', 'webkompanen')}
						units={units.get()}
						onChange={ 
							( nextValues ) => {
								setAttributes({
									mxs:nextValues
								}) 	  
							} 
						}
					/>
					<ToggleControl
						label={__('Margin auto', 'webkompanen')}
						help={ attributes.mxsauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
						checked={ attributes.mxsauto }
						onChange={ 
							(e) => {
								setAttributes({
									mxsauto: ! attributes.mxsauto
								})
							}
						}
					/>
					<ToggleControl
						label={__('Margin x auto', 'webkompanen')}
						help={ attributes.mxsxauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
						checked={ attributes.mxsxauto }
						onChange={ 
							(e) => {
								setAttributes({
									mxsxauto: ! attributes.mxsxauto
								})
							}
						}
					/>
					<ToggleControl
						label={__('Margin y auto', 'webkompanen')}
						help={ attributes.mxsyauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
						checked={ attributes.mxsyauto }
						onChange={ 
							(e) => {
								setAttributes({
									mxsyauto: ! attributes.mxsyauto
								})
							}
						}
					/>
					<ToggleControl
						label={__('Margin top auto', 'webkompanen')}
						help={ attributes.mxstauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
						checked={ attributes.mxstauto }
						onChange={ 
							(e) => {
								setAttributes({
									mxstauto: ! attributes.mxstauto
								})
							}
						}
					/>
					<ToggleControl
						label={__('Margin right auto', 'webkompanen')}
						help={ attributes.mxseauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
						checked={ attributes.mxseauto }
						onChange={ 
							(e) => {
								setAttributes({
									mxseauto: ! attributes.mxseauto
								})
							}
						}
					/>
					<ToggleControl
						label={__('Margin bottom auto', 'webkompanen')}
						help={ attributes.mxsbauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
						checked={ attributes.mxsbauto }
						onChange={ 
							(e) => {
								setAttributes({
									mxsbauto: ! attributes.mxsbauto
								})
							}
						}
					/>
					<ToggleControl
						label={__('Margin left auto', 'webkompanen')}
						help={ attributes.mxssauto ? __('Yes', 'webkompanen') : __('No', 'webkompanen') }
						checked={ attributes.mxssauto }
						onChange={ 
							(e) => {
								setAttributes({
									mxssauto: ! attributes.mxssauto
								})
							}
						}
					/>
				</div>
			</div>
		</PanelBody>
		<PanelBody
			title={__('Margin settings small devices', 'webkompanen')}
			initialOpen={false}
		>
			<div className="row">
				<div className="col-12">
					<BoxControl
						values={ 
							{
								top: attributes.msm.top,
								left: attributes.msm.left,
								right: attributes.msm.right,
								bottom: attributes.msm.bottom
							} 
						}
						label={__('sm', 'webkompanen')}
						units={units.get()}
						onChange={ 
							( nextValues ) => {
								setAttributes({
									msm:nextValues
								}) 	  
							} 
						}
					/>
					<ToggleControl
						label={__('Margin auto', 'webkompanen')}
						help={ attributes.msmauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
						checked={ attributes.msmauto }
						onChange={ 
							(e) => {
								setAttributes({
									msmauto: ! attributes.msmauto
								})
							}
						}
					/>
					<ToggleControl
						label={__('Margin x auto', 'webkompanen')}
						help={ attributes.msmxauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
						checked={ attributes.msmxauto }
						onChange={ 
							(e) => {
								setAttributes({
									msmxauto: ! attributes.msmxauto
								})
							}
						}
					/>
					<ToggleControl
						label={__('Margin y auto', 'webkompanen')}
						help={ attributes.msmyauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
						checked={ attributes.msmyauto }
						onChange={ 
							(e) => {
								setAttributes({
									msmyauto: ! attributes.msmyauto
								})
							}
						}
					/>
					<ToggleControl
						label={__('Margin top auto', 'webkompanen')}
						help={ attributes.msmtauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
						checked={ attributes.msmtauto }
						onChange={ 
							(e) => {
								setAttributes({
									msmtauto: ! attributes.msmtauto
								})
							}
						}
					/>
					<ToggleControl
						label={__('Margin right auto', 'webkompanen')}
						help={ attributes.msmeauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
						checked={ attributes.msmeauto }
						onChange={ 
							(e) => {
								setAttributes({
									msmeauto: ! attributes.msmeauto
								})
							}
						}
					/>
					<ToggleControl
						label={__('Margin bottom auto', 'webkompanen')}
						help={ attributes.msmbauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
						checked={ attributes.msmbauto }
						onChange={ 
							(e) => {
								setAttributes({
									msmbauto: ! attributes.msmbauto
								})
							}
						}
					/>
					<ToggleControl
						label={__('Margin left auto', 'webkompanen')}
						help={ attributes.msmsauto ? __('Yes', 'webkompanen') : __('No', 'webkompanen') }
						checked={ attributes.msmsauto }
						onChange={ 
							(e) => {
								setAttributes({
									msmsauto: ! attributes.msmsauto
								})
							}
						}
					/>
				</div>
			</div>
		</PanelBody>
		<PanelBody
			title={__('Margin settings medium devices', 'webkompanen')}
			initialOpen={false}
		>
			<div className="row">
				<div className="col-12">
					<BoxControl
						values={ 
							{
								top: attributes.mmd.top,
								left: attributes.mmd.left,
								right: attributes.mmd.right,
								bottom: attributes.mmd.bottom
							} 
						}
						label={__('md', 'webkompanen')}
						units={units.get()}
						onChange={ 
							( nextValues ) => {
								setAttributes({
									mmd:nextValues
								}) 	  
							} 
						}
					/>
					<ToggleControl
						label={__('Margin auto', 'webkompanen')}
						help={ attributes.mmdauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
						checked={ attributes.mmdauto }
						onChange={ 
							(e) => {
								setAttributes({
									mmdauto: ! attributes.mmdauto
								})
							}
						}
					/>
					<ToggleControl
						label={__('Margin x auto', 'webkompanen')}
						help={ attributes.mmdxauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
						checked={ attributes.mmdxauto }
						onChange={ 
							(e) => {
								setAttributes({
									mmdxauto: ! attributes.mmdxauto
								})
							}
						}
					/>
					<ToggleControl
						label={__('Margin y auto', 'webkompanen')}
						help={ attributes.mmdyauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
						checked={ attributes.mmdyauto }
						onChange={ 
							(e) => {
								setAttributes({
									mmdyauto: ! attributes.mmdyauto
								})
							}
						}
					/>
					<ToggleControl
						label={__('Margin top auto', 'webkompanen')}
						help={ attributes.mmdtauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
						checked={ attributes.mmdtauto }
						onChange={ 
							(e) => {
								setAttributes({
									mmdtauto: ! attributes.mmdtauto
								})
							}
						}
					/>
					<ToggleControl
						label={__('Margin right auto', 'webkompanen')}
						help={ attributes.mmdeauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
						checked={ attributes.mmdeauto }
						onChange={ 
							(e) => {
								setAttributes({
									mmdeauto: ! attributes.mmdeauto
								})
							}
						}
					/>
					<ToggleControl
						label={__('Margin bottom auto', 'webkompanen')}
						help={ attributes.mmdbauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
						checked={ attributes.mmdbauto }
						onChange={ 
							(e) => {
								setAttributes({
									mmdbauto: ! attributes.mmdbauto
								})
							}
						}
					/>
					<ToggleControl
						label={__('Margin left auto', 'webkompanen')}
						help={ attributes.mmdsauto ? __('Yes', 'webkompanen') : __('No', 'webkompanen') }
						checked={ attributes.mmdsauto }
						onChange={ 
							(e) => {
								setAttributes({
									mmdsauto: ! attributes.mmdsauto
								})
							}
						}
					/>
				</div>
			</div>
		</PanelBody>
		<PanelBody
			title={__('Margin settings large devices', 'webkompanen')}
			initialOpen={false}
		>
			<div className="row">
				<div className="col-12">
					<BoxControl
						values={ 
							{
								top: attributes.mlg.top,
								left: attributes.mlg.left,
								right: attributes.mlg.right,
								bottom: attributes.mlg.bottom
							} 
						}
						label={__('lg', 'webkompanen')}
						units={units.get()}
						onChange={ 
							( nextValues ) => {
								setAttributes({
									mlg:nextValues
								}) 	  
							} 
						}
					/>
					<ToggleControl
						label={__('Margin auto', 'webkompanen')}
						help={ attributes.mlgauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
						checked={ attributes.mlgauto }
						onChange={ 
							(e) => {
								setAttributes({
									mlgauto: ! attributes.mlgauto
								})
							}
						}
					/>
					<ToggleControl
						label={__('Margin x auto', 'webkompanen')}
						help={ attributes.mlgxauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
						checked={ attributes.mlgxauto }
						onChange={ 
							(e) => {
								setAttributes({
									mlgxauto: ! attributes.mlgxauto
								})
							}
						}
					/>
					<ToggleControl
						label={__('Margin y auto', 'webkompanen')}
						help={ attributes.mlgyauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
						checked={ attributes.mlgyauto }
						onChange={ 
							(e) => {
								setAttributes({
									mlgyauto: ! attributes.mlgyauto
								})
							}
						}
					/>
					<ToggleControl
						label={__('Margin top auto', 'webkompanen')}
						help={ attributes.mlgtauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
						checked={ attributes.mlgtauto }
						onChange={ 
							(e) => {
								setAttributes({
									mlgtauto: ! attributes.mlgtauto
								})
							}
						}
					/>
					<ToggleControl
						label={__('Margin right auto', 'webkompanen')}
						help={ attributes.mlgeauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
						checked={ attributes.mlgeauto }
						onChange={ 
							(e) => {
								setAttributes({
									mlgeauto: ! attributes.mlgeauto
								})
							}
						}
					/>
					<ToggleControl
						label={__('Margin bottom auto', 'webkompanen')}
						help={ attributes.mlgbauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
						checked={ attributes.mlgbauto }
						onChange={ 
							(e) => {
								setAttributes({
									mlgbauto: ! attributes.mlgbauto
								})
							}
						}
					/>
					<ToggleControl
						label={__('Margin left auto', 'webkompanen')}
						help={ attributes.mlgsauto ? __('Yes', 'webkompanen') : __('No', 'webkompanen') }
						checked={ attributes.mlgsauto }
						onChange={ 
							(e) => {
								setAttributes({
									mlgsauto: ! attributes.mlgsauto
								})
							}
						}
					/>
				</div>
			</div>
		</PanelBody>
		<PanelBody
			title={__('Margin settings extra large devices', 'webkompanen')}
			initialOpen={false}
		>
			<div className="row">
				<div className="col-12">
					<BoxControl
						values={ 
							{
								top: attributes.mxl.top,
								left: attributes.mxl.left,
								right: attributes.mxl.right,
								bottom: attributes.mxl.bottom
							} 
						}
						label={__('xl', 'webkompanen')}
						units={units.get()}
						onChange={ 
							( nextValues ) => {
								setAttributes( {mxl:nextValues} ) 	  
							} 
						}
					/>
					<ToggleControl
						label={__('Margin auto', 'webkompanen')}
						help={ attributes.mxlauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
						checked={ attributes.mxlauto }
						onChange={ 
							(e) => {
								setAttributes({
									mxlauto: ! attributes.mxlauto
								})
							}
						}
					/>
					<ToggleControl
						label={__('Margin x auto', 'webkompanen')}
						help={ attributes.mxlxauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
						checked={ attributes.mxlxauto }
						onChange={ 
							(e) => {
								setAttributes({
									mxlxauto: ! attributes.mxlxauto
								})
							}
						}
					/>
					<ToggleControl
						label={__('Margin y auto', 'webkompanen')}
						help={ attributes.mxlyauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
						checked={ attributes.mxlyauto }
						onChange={ 
							(e) => {
								setAttributes({
									mxlyauto: ! attributes.mxlyauto
								})
							}
						}
					/>
					<ToggleControl
						label={__('Margin top auto', 'webkompanen')}
						help={ attributes.mxltauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
						checked={ attributes.mxltauto }
						onChange={ 
							(e) => {
								setAttributes({
									mxltauto: ! attributes.mxltauto
								})
							}
						}
					/>
					<ToggleControl
						label={__('Margin right auto', 'webkompanen')}
						help={ attributes.mxleauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
						checked={ attributes.mxleauto }
						onChange={ 
							(e) => {
								setAttributes({
									mxleauto: ! attributes.mxleauto
								})
							}
						}
					/>
					<ToggleControl
						label={__('Margin bottom auto', 'webkompanen')}
						help={ attributes.mxlbauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
						checked={ attributes.mxlbauto }
						onChange={ 
							(e) => {
								setAttributes({
									mxlbauto: ! attributes.mxlbauto
								})
							}
						}
					/>
					<ToggleControl
						label={__('Margin left auto', 'webkompanen')}
						help={ attributes.mxlsauto ? __('Yes', 'webkompanen') : __('No', 'webkompanen') }
						checked={ attributes.mxlsauto }
						onChange={ 
							(e) => {
								setAttributes({
									mxlsauto: ! attributes.mxlsauto
								})
							}
						}
					/>
				</div>
			</div>
		</PanelBody>
		<PanelBody
			title={__('Margin settings extra extra large devices', 'webkompanen')}
			initialOpen={false}
		>
			<div className="row">
				<div className="col-12">
					<BoxControl
						values={ 
							{
								top: attributes.mxxl.top,
								left: attributes.mxxl.left,
								right: attributes.mxxl.right,
								bottom: attributes.mxxl.bottom
							}
						}
						label={__('xxl', 'webkompanen')}
						units={units.get()}
						onChange={ 
							( nextValues ) => {
								setAttributes({
									mxxl:nextValues
								}) 	  
							} 
						}
					/>
					<ToggleControl
						label={__('Margin auto', 'webkompanen')}
						help={ attributes.mxxlauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
						checked={ attributes.mxxlauto }
						onChange={ 
							(e) => {
								setAttributes({
									mxxlauto: ! attributes.mxxlauto
								})
							}
						}
					/>
					<ToggleControl
						label={__('Margin x auto', 'webkompanen')}
						help={ attributes.mxxlxauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
						checked={ attributes.mxxlxauto }
						onChange={ 
							(e) => {
								setAttributes({
									mxxlxauto: ! attributes.mxxlxauto
								})
							}
						}
					/>
					<ToggleControl
						label={__('Margin y auto', 'webkompanen')}
						help={ attributes.mxxlyauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
						checked={ attributes.mxxlyauto }
						onChange={ 
							(e) => {
								setAttributes({
									mxxlyauto: ! attributes.mxxlyauto
								})
							}
						}
					/>
					<ToggleControl
						label={__('Margin top auto', 'webkompanen')}
						help={ attributes.mxxltauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
						checked={ attributes.mxxltauto }
						onChange={ 
							(e) => {
								setAttributes({
									mxxltauto: ! attributes.mxxltauto
								})
							}
						}
					/>
					<ToggleControl
						label={__('Margin right auto', 'webkompanen')}
						help={ attributes.mxxleauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
						checked={ attributes.mxxleauto }
						onChange={ 
							(e) => {
								setAttributes({
									mxxleauto: ! attributes.mxxleauto
								})
							}
						}
					/>
					<ToggleControl
						label={__('Margin bottom auto', 'webkompanen')}
						help={ attributes.mxxlbauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
						checked={ attributes.mxxlbauto }
						onChange={ 
							(e) => {
								setAttributes({
									mxxlbauto: ! attributes.mxxlbauto
								})
							}
						}
					/>
					<ToggleControl
						label={__('Margin left auto', 'webkompanen')}
						help={ attributes.mxxlsauto ? __('Yes', 'webkompanen') : __('No', 'webkompanen') }
						checked={ attributes.mxxlsauto }
						onChange={ 
							(e) => {
								setAttributes({
									mxxlsauto: ! attributes.mxxlsauto
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
					title={__('Margin settings', 'webkompanen')}
					initialOpen={false}
				>
					<div 
						className="row"
					>
						<div className="col-12">
							<BoxControl
								values={ 
									{
										top: attributes.mxs.top,
										left: attributes.mxs.left,
										right: attributes.mxs.right,
										bottom: attributes.mxs.bottom
									} 
								}
								label={__('xs', 'webkompanen')}
								units={units.get()}
								onChange={ 
									( nextValues ) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												mxs: nextValues 
											} 
										)	  
									} 
								}
							/>
							<ToggleControl
								label={__('Margin auto', 'webkompanen')}
								help={ selectedblockpropstest.attributes.mxsauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
								checked={ selectedblockpropstest.attributes.mxsauto }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												mxsauto: ! selectedblockpropstest.attributes.mxsauto
											} 
										)
									}
								}
							/>
							<ToggleControl
								label={__('Margin x auto', 'webkompanen')}
								help={ selectedblockpropstest.attributes.mxsxauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
								checked={ selectedblockpropstest.attributes.mxsxauto }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												mxsxauto: ! selectedblockpropstest.attributes.mxsxauto
											} 
										)
									}
								}
							/>
							<ToggleControl
								label={__('Margin y auto', 'webkompanen')}
								help={ selectedblockpropstest.attributes.mxsyauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
								checked={ selectedblockpropstest.attributes.mxsyauto }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												mxsyauto: ! selectedblockpropstest.attributes.mxsyauto
											} 
										)
									}
								}
							/>
							<ToggleControl
								label={__('Margin top auto', 'webkompanen')}
								help={ selectedblockpropstest.attributes.mxstauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
								checked={ selectedblockpropstest.attributes.mxstauto }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												mxstauto: ! selectedblockpropstest.attributes.mxstauto
											} 
										)
									}
								}
							/>
							<ToggleControl
								label={__('Margin right auto', 'webkompanen')}
								help={ selectedblockpropstest.attributes.mxseauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
								checked={ selectedblockpropstest.attributes.mxseauto }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												mxseauto: ! selectedblockpropstest.attributes.mxseauto
											} 
										)
									}
								}
							/>
							<ToggleControl
								label={__('Margin bottom auto', 'webkompanen')}
								help={ selectedblockpropstest.attributes.mxsbauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
								checked={ selectedblockpropstest.attributes.mxsbauto }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												mxsbauto: ! selectedblockpropstest.attributes.mxsbauto
											} 
										)
									}
								}
							/>
							<ToggleControl
								label={__('Margin left auto', 'webkompanen')}
								help={ selectedblockpropstest.attributes.mxssauto ? __('Yes', 'webkompanen') : __('No', 'webkompanen') }
								checked={ selectedblockpropstest.attributes.mxssauto }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												mxssauto: ! selectedblockpropstest.attributes.mxssauto
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
					title={__('Margin settings (sm)', 'webkompanen')}
					initialOpen={false}
				>
					<div 
						className="row"
					>
						<div className="col-12">
							<BoxControl
								values={ 
									{
										top: attributes.msm.top,
										left: attributes.msm.left,
										right: attributes.msm.right,
										bottom: attributes.msm.bottom
									} 
								}
								label={__('sm', 'webkompanen')}
								units={units.get()}
								onChange={ 
									( nextValues ) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												msm: nextValues 
											} 
										)	  
									} 
								}
							/>
							<ToggleControl
								label={__('Margin auto', 'webkompanen')}
								help={ attributes.msmauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
								checked={ attributes.msmauto }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												msmauto: ! selectedblockpropstest.attributes.msmauto
											} 
										)
									}
								}
							/>
							<ToggleControl
								label={__('Margin x auto', 'webkompanen')}
								help={ attributes.msmxauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
								checked={ attributes.msmxauto }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												msmxauto: ! selectedblockpropstest.attributes.msmxauto
											} 
										)
									}
								}
							/>
							<ToggleControl
								label={__('Margin y auto', 'webkompanen')}
								help={ attributes.msmyauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
								checked={ attributes.msmyauto }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												msmyauto: ! selectedblockpropstest.attributes.msmyauto
											} 
										)
									}
								}
							/>
							<ToggleControl
								label={__('Margin top auto', 'webkompanen')}
								help={ attributes.msmtauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
								checked={ attributes.msmtauto }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												msmtauto: ! selectedblockpropstest.attributes.msmtauto
											} 
										)
									}
								}
							/>
							<ToggleControl
								label={__('Margin right auto', 'webkompanen')}
								help={ attributes.msmeauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
								checked={ attributes.msmeauto }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												msmeauto: ! selectedblockpropstest.attributes.msmeauto
											} 
										)
									}
								}
							/>
							<ToggleControl
								label={__('Margin bottom auto', 'webkompanen')}
								help={ attributes.msmbauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
								checked={ attributes.msmbauto }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												msmbauto: ! selectedblockpropstest.attributes.msmbauto
											} 
										)
									}
								}
							/>
							<ToggleControl
								label={__('Margin left auto', 'webkompanen')}
								help={ attributes.msmsauto ? __('Yes', 'webkompanen') : __('No', 'webkompanen') }
								checked={ attributes.msmsauto }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												msmsauto: ! selectedblockpropstest.attributes.msmsauto
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
					title={__('Margin settings (md)', 'webkompanen')}
					initialOpen={false}
				>
					<div 
						className="row"
					>
						<div className="col-12">
							<BoxControl
								values={ 
									{
										top: attributes.mmd.top,
										left: attributes.mmd.left,
										right: attributes.mmd.right,
										bottom: attributes.mmd.bottom
									} 
								}
								label={__('md', 'webkompanen')}
								units={units.get()}
								onChange={ 
									( nextValues ) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												mmd: nextValues 
											} 
										)	  
									} 
								}
							/>
							<ToggleControl
								label={__('Margin auto', 'webkompanen')}
								help={ attributes.mmdauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
								checked={ attributes.mmdauto }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												mmdauto: ! selectedblockpropstest.attributes.mmdauto
											} 
										)
									}
								}
							/>
							<ToggleControl
								label={__('Margin x auto', 'webkompanen')}
								help={ attributes.mmdxauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
								checked={ attributes.mmdxauto }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												mmdxauto: ! selectedblockpropstest.attributes.mmdxauto
											} 
										)
									}
								}
							/>
							<ToggleControl
								label={__('Margin y auto', 'webkompanen')}
								help={ attributes.mmdyauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
								checked={ attributes.mmdyauto }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												mmdyauto: ! selectedblockpropstest.attributes.mmdyauto
											} 
										)
									}
								}
							/>
							<ToggleControl
								label={__('Margin top auto', 'webkompanen')}
								help={ attributes.mmdtauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
								checked={ attributes.mmdtauto }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												mmdtauto: ! selectedblockpropstest.attributes.mmdtauto
											} 
										)
									}
								}
							/>
							<ToggleControl
								label={__('Margin right auto', 'webkompanen')}
								help={ attributes.mmdeauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
								checked={ attributes.mmdeauto }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												mmdeauto: ! selectedblockpropstest.attributes.mmdeauto
											} 
										)
									}
								}
							/>
							<ToggleControl
								label={__('Margin bottom auto', 'webkompanen')}
								help={ attributes.mmdbauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
								checked={ attributes.mmdbauto }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												mmdbauto: ! selectedblockpropstest.attributes.mmdbauto
											} 
										)
									}
								}
							/>
							<ToggleControl
								label={__('Margin left auto', 'webkompanen')}
								help={ attributes.mmdsauto ? __('Yes', 'webkompanen') : __('No', 'webkompanen') }
								checked={ attributes.mmdsauto }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												mmdsauto: ! selectedblockpropstest.attributes.mmdsauto
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
					title={__('Margin settings (lg)', 'webkompanen')}
					initialOpen={false}
				>
					<div 
						className="row"
					>
						<div className="col-12">
							<BoxControl
								values={ 
									{
										top: attributes.mlg.top,
										left: attributes.mlg.left,
										right: attributes.mlg.right,
										bottom: attributes.mlg.bottom
									} 
								}
								label={__('lg', 'webkompanen')}
								units={units.get()}
								onChange={ 
									( nextValues ) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												mlg: nextValues 
											} 
										)	  
									} 
								}
							/>
							<ToggleControl
								label={__('Margin auto', 'webkompanen')}
								help={ attributes.mlgauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
								checked={ attributes.mlgauto }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												mlgauto: ! selectedblockpropstest.attributes.mlgauto
											} 
										)
									}
								}
							/>
							<ToggleControl
								label={__('Margin x auto', 'webkompanen')}
								help={ attributes.mlgxauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
								checked={ attributes.mlgxauto }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												mlgxauto: ! selectedblockpropstest.attributes.mlgxauto
											} 
										)
									}
								}
							/>
							<ToggleControl
								label={__('Margin y auto', 'webkompanen')}
								help={ attributes.mlgyauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
								checked={ attributes.mlgyauto }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												mlgyauto: ! selectedblockpropstest.attributes.mlgyauto
											} 
										)
									}
								}
							/>
							<ToggleControl
								label={__('Margin top auto', 'webkompanen')}
								help={ attributes.mlgtauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
								checked={ attributes.mlgtauto }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												mlgtauto: ! selectedblockpropstest.attributes.mlgtauto
											} 
										)
									}
								}
							/>
							<ToggleControl
								label={__('Margin right auto', 'webkompanen')}
								help={ attributes.mlgeauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
								checked={ attributes.mlgeauto }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												mlgeauto: ! selectedblockpropstest.attributes.mlgeauto
											} 
										)
									}
								}
							/>
							<ToggleControl
								label={__('Margin bottom auto', 'webkompanen')}
								help={ attributes.mlgbauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
								checked={ attributes.mlgbauto }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												mlgbauto: ! selectedblockpropstest.attributes.mlgbauto
											} 
										)
									}
								}
							/>
							<ToggleControl
								label={__('Margin left auto', 'webkompanen')}
								help={ attributes.mlgsauto ? __('Yes', 'webkompanen') : __('No', 'webkompanen') }
								checked={ attributes.mlgsauto }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												mlgsauto: ! selectedblockpropstest.attributes.mlgsauto
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
					title={__('Margin settings (xl)', 'webkompanen')}
					initialOpen={false}
				>
					<div 
						className="row"
					>
						<div className="col-12">
							<BoxControl
								values={ 
									{
										top: attributes.mxl.top,
										left: attributes.mxl.left,
										right: attributes.mxl.right,
										bottom: attributes.mxl.bottom
									} 
								}
								label={__('xl', 'webkompanen')}
								units={units.get()}
								onChange={ 
									( nextValues ) => {
								
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												mxl: nextValues 
											} 
										)	  
									} 
								}
							/>
							<ToggleControl
								label={__('Margin auto', 'webkompanen')}
								help={ attributes.mxlauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
								checked={ attributes.mxlauto }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												mxlauto: ! selectedblockpropstest.attributes.mxlauto
											} 
										)
									}
								}
							/>
							<ToggleControl
								label={__('Margin x auto', 'webkompanen')}
								help={ attributes.mxlxauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
								checked={ attributes.mxlxauto }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												mxlxauto: ! selectedblockpropstest.attributes.mxlxauto
											} 
										)
									}
								}
							/>
							<ToggleControl
								label={__('Margin y auto', 'webkompanen')}
								help={ attributes.mxlyauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
								checked={ attributes.mxlyauto }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												mxlyauto: ! selectedblockpropstest.attributes.mxlyauto
											} 
										)
									}
								}
							/>
							<ToggleControl
								label={__('Margin top auto', 'webkompanen')}
								help={ attributes.mxltauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
								checked={ attributes.mxltauto }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												mxltauto: ! selectedblockpropstest.attributes.mxltauto
											} 
										)
									}
								}
							/>
							<ToggleControl
								label={__('Margin right auto', 'webkompanen')}
								help={ attributes.mxleauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
								checked={ attributes.mxleauto }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												mxleauto: ! selectedblockpropstest.attributes.mxleauto
											} 
										)
									}
								}
							/>
							<ToggleControl
								label={__('Margin bottom auto', 'webkompanen')}
								help={ attributes.mxlbauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
								checked={ attributes.mxlbauto }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												mxlbauto: ! selectedblockpropstest.attributes.mxlbauto
											} 
										)
									}
								}
							/>
							<ToggleControl
								label={__('Margin left auto', 'webkompanen')}
								help={ attributes.mxlsauto ? __('Yes', 'webkompanen') : __('No', 'webkompanen') }
								checked={ attributes.mxlsauto }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												mxlsauto: ! selectedblockpropstest.attributes.mxlsauto
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
					title={__('Margin settings (xxl)', 'webkompanen')}
					initialOpen={false}
				>
					<div 
						className="row"
					>
						<div className="col-12">
							<BoxControl
								values={ 
									{
										top: attributes.mxxl.top,
										left: attributes.mxxl.left,
										right: attributes.mxxl.right,
										bottom: attributes.mxxl.bottom
									} 
								}
								label={__('xxl', 'webkompanen')}
								units={units.get()}
								onChange={ 
									( nextValues ) => {
								
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												mxxl: nextValues 
											} 
										)	  
									} 
								}
							/>
							<ToggleControl
								label={__('Margin auto', 'webkompanen')}
								help={ attributes.mxxlauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
								checked={ attributes.mxxlauto }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												mxxlauto: ! selectedblockpropstest.attributes.mxxlauto
											} 
										)
									}
								}
							/>
							<ToggleControl
								label={__('Margin x auto', 'webkompanen')}
								help={ attributes.mxxlxauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
								checked={ attributes.mxxlxauto }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												mxxlxauto: ! selectedblockpropstest.attributes.mxxlxauto
											} 
										)
									}
								}
							/>
							<ToggleControl
								label={__('Margin y auto', 'webkompanen')}
								help={ attributes.mxxlyauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
								checked={ attributes.mxxlyauto }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												mxxlyauto: ! selectedblockpropstest.attributes.mxxlyauto
											} 
										)
									}
								}
							/>
							<ToggleControl
								label={__('Margin top auto', 'webkompanen')}
								help={ attributes.mxxltauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
								checked={ attributes.mxxltauto }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												mxxltauto: ! selectedblockpropstest.attributes.mxxltauto
											} 
										)
									}
								}
							/>
							<ToggleControl
								label={__('Margin right auto', 'webkompanen')}
								help={ attributes.mxxleauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
								checked={ attributes.mxxleauto }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												mxxleauto: ! selectedblockpropstest.attributes.mxxleauto
											} 
										)
									}
								}
							/>
							<ToggleControl
								label={__('Margin bottom auto', 'webkompanen')}
								help={ attributes.mxxlbauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
								checked={ attributes.mxxlbauto }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												mxxlbauto: ! selectedblockpropstest.attributes.mxxlbauto
											} 
										)
									}
								}
							/>
							<ToggleControl
								label={__('Margin left auto', 'webkompanen')}
								help={ attributes.mxxlsauto ? __('Yes', 'webkompanen') : __('No', 'webkompanen') }
								checked={ attributes.mxxlsauto }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												mxxlsauto: ! selectedblockpropstest.attributes.mxxlsauto
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

export default MarginEdit;