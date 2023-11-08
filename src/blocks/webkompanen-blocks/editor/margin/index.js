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
			title={__('Margin opties extra small devices', 'awp')}
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
						label="xs"
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
						label="Margin auto"
						help={ attributes.mxsauto ? 'Yes.' : 'No.' }
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
						label="Margin x auto"
						help={ attributes.mxsxauto ? 'Yes.' : 'No.' }
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
						label="Margin y auto"
						help={ attributes.mxsyauto ? 'Yes.' : 'No.' }
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
						label="Margin top auto"
						help={ attributes.mxstauto ? 'Yes.' : 'No.' }
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
						label="Margin right auto"
						help={ attributes.mxseauto ? 'Yes.' : 'No.' }
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
						label="Margin bottom auto"
						help={ attributes.mxsbauto ? 'Yes.' : 'No.' }
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
						label="Margin left auto"
						help={ attributes.mxssauto ? 'Yes' : 'No' }
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
			title={__('Margin opties small devices', 'awp')}
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
						label="sm"
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
						label="Margin auto"
						help={ attributes.msmauto ? 'Yes.' : 'No.' }
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
						label="Margin x auto"
						help={ attributes.msmxauto ? 'Yes.' : 'No.' }
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
						label="Margin y auto"
						help={ attributes.msmyauto ? 'Yes.' : 'No.' }
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
						label="Margin top auto"
						help={ attributes.msmtauto ? 'Yes.' : 'No.' }
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
						label="Margin right auto"
						help={ attributes.msmeauto ? 'Yes.' : 'No.' }
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
						label="Margin bottom auto"
						help={ attributes.msmbauto ? 'Yes.' : 'No.' }
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
						label="Margin left auto"
						help={ attributes.msmsauto ? 'Yes' : 'No' }
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
			title={__('Margin opties medium devices', 'awp')}
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
						label="md"
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
						label="Margin auto"
						help={ attributes.mmdauto ? 'Yes.' : 'No.' }
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
						label="Margin x auto"
						help={ attributes.mmdxauto ? 'Yes.' : 'No.' }
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
						label="Margin y auto"
						help={ attributes.mmdyauto ? 'Yes.' : 'No.' }
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
						label="Margin top auto"
						help={ attributes.mmdtauto ? 'Yes.' : 'No.' }
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
						label="Margin right auto"
						help={ attributes.mmdeauto ? 'Yes.' : 'No.' }
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
						label="Margin bottom auto"
						help={ attributes.mmdbauto ? 'Yes.' : 'No.' }
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
						label="Margin left auto"
						help={ attributes.mmdsauto ? 'Yes' : 'No' }
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
			title={__('Margin opties large devices', 'awp')}
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
						label="lg"
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
						label="Margin auto"
						help={ attributes.mlgauto ? 'Yes.' : 'No.' }
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
						label="Margin x auto"
						help={ attributes.mlgxauto ? 'Yes.' : 'No.' }
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
						label="Margin y auto"
						help={ attributes.mlgyauto ? 'Yes.' : 'No.' }
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
						label="Margin top auto"
						help={ attributes.mlgtauto ? 'Yes.' : 'No.' }
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
						label="Margin right auto"
						help={ attributes.mlgeauto ? 'Yes.' : 'No.' }
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
						label="Margin bottom auto"
						help={ attributes.mlgbauto ? 'Yes.' : 'No.' }
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
						label="Margin left auto"
						help={ attributes.mlgsauto ? 'Yes' : 'No' }
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
			title={__('Margin opties extra large devices', 'awp')}
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
						label="xl"
						units={units.get()}
						onChange={ 
							( nextValues ) => {
								setAttributes( {mxl:nextValues} ) 	  
							} 
						}
					/>
					<ToggleControl
						label="Margin auto"
						help={ attributes.mxlauto ? 'Yes.' : 'No.' }
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
						label="Margin x auto"
						help={ attributes.mxlxauto ? 'Yes.' : 'No.' }
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
						label="Margin y auto"
						help={ attributes.mxlyauto ? 'Yes.' : 'No.' }
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
						label="Margin top auto"
						help={ attributes.mxltauto ? 'Yes.' : 'No.' }
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
						label="Margin right auto"
						help={ attributes.mxleauto ? 'Yes.' : 'No.' }
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
						label="Margin bottom auto"
						help={ attributes.mxlbauto ? 'Yes.' : 'No.' }
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
						label="Margin left auto"
						help={ attributes.mxlsauto ? 'Yes' : 'No' }
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
			title={__('Margin opties extra extra large devices', 'awp')}
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
						label="xxl"
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
						label="Margin auto"
						help={ attributes.mxxlauto ? 'Yes.' : 'No.' }
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
						label="Margin x auto"
						help={ attributes.mxxlxauto ? 'Yes.' : 'No.' }
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
						label="Margin y auto"
						help={ attributes.mxxlyauto ? 'Yes.' : 'No.' }
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
						label="Margin top auto"
						help={ attributes.mxxltauto ? 'Yes.' : 'No.' }
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
						label="Margin right auto"
						help={ attributes.mxxleauto ? 'Yes.' : 'No.' }
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
						label="Margin bottom auto"
						help={ attributes.mxxlbauto ? 'Yes.' : 'No.' }
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
						label="Margin left auto"
						help={ attributes.mxxlsauto ? 'Yes' : 'No' }
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
					title={__('Margin opties', 'awp')}
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
								label="xs"
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
								label="Margin auto"
								help={ selectedblockpropstest.attributes.mxsauto ? 'Yes.' : 'No.' }
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
								label="Margin x auto"
								help={ selectedblockpropstest.attributes.mxsxauto ? 'Yes.' : 'No.' }
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
								label="Margin y auto"
								help={ selectedblockpropstest.attributes.mxsyauto ? 'Yes.' : 'No.' }
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
								label="Margin top auto"
								help={ selectedblockpropstest.attributes.mxstauto ? 'Yes.' : 'No.' }
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
								label="Margin right auto"
								help={ selectedblockpropstest.attributes.mxseauto ? 'Yes.' : 'No.' }
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
								label="Margin bottom auto"
								help={ selectedblockpropstest.attributes.mxsbauto ? 'Yes.' : 'No.' }
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
								label="Margin left auto"
								help={ selectedblockpropstest.attributes.mxssauto ? 'Yes' : 'No' }
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
					title={__('Margin opties (sm)', 'awp')}
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
								label="sm"
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
								label="Margin auto"
								help={ attributes.msmauto ? 'Yes.' : 'No.' }
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
								label="Margin x auto"
								help={ attributes.msmxauto ? 'Yes.' : 'No.' }
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
								label="Margin y auto"
								help={ attributes.msmyauto ? 'Yes.' : 'No.' }
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
								label="Margin top auto"
								help={ attributes.msmtauto ? 'Yes.' : 'No.' }
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
								label="Margin right auto"
								help={ attributes.msmeauto ? 'Yes.' : 'No.' }
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
								label="Margin bottom auto"
								help={ attributes.msmbauto ? 'Yes.' : 'No.' }
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
								label="Margin left auto"
								help={ attributes.msmsauto ? 'Yes' : 'No' }
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
					title={__('Margin opties (md)', 'awp')}
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
								label="md"
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
								label="Margin auto"
								help={ attributes.mmdauto ? 'Yes.' : 'No.' }
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
								label="Margin x auto"
								help={ attributes.mmdxauto ? 'Yes.' : 'No.' }
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
								label="Margin y auto"
								help={ attributes.mmdyauto ? 'Yes.' : 'No.' }
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
								label="Margin top auto"
								help={ attributes.mmdtauto ? 'Yes.' : 'No.' }
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
								label="Margin right auto"
								help={ attributes.mmdeauto ? 'Yes.' : 'No.' }
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
								label="Margin bottom auto"
								help={ attributes.mmdbauto ? 'Yes.' : 'No.' }
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
								label="Margin left auto"
								help={ attributes.mmdsauto ? 'Yes' : 'No' }
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
					title={__('Margin opties (lg)', 'awp')}
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
								label="lg"
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
								label="Margin auto"
								help={ attributes.mlgauto ? 'Yes.' : 'No.' }
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
								label="Margin x auto"
								help={ attributes.mlgxauto ? 'Yes.' : 'No.' }
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
								label="Margin y auto"
								help={ attributes.mlgyauto ? 'Yes.' : 'No.' }
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
								label="Margin top auto"
								help={ attributes.mlgtauto ? 'Yes.' : 'No.' }
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
								label="Margin right auto"
								help={ attributes.mlgeauto ? 'Yes.' : 'No.' }
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
								label="Margin bottom auto"
								help={ attributes.mlgbauto ? 'Yes.' : 'No.' }
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
								label="Margin left auto"
								help={ attributes.mlgsauto ? 'Yes' : 'No' }
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
					title={__('Margin opties (xl)', 'awp')}
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
								label="xl"
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
								label="Margin auto"
								help={ attributes.mxlauto ? 'Yes.' : 'No.' }
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
								label="Margin x auto"
								help={ attributes.mxlxauto ? 'Yes.' : 'No.' }
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
								label="Margin y auto"
								help={ attributes.mxlyauto ? 'Yes.' : 'No.' }
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
								label="Margin top auto"
								help={ attributes.mxltauto ? 'Yes.' : 'No.' }
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
								label="Margin right auto"
								help={ attributes.mxleauto ? 'Yes.' : 'No.' }
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
								label="Margin bottom auto"
								help={ attributes.mxlbauto ? 'Yes.' : 'No.' }
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
								label="Margin left auto"
								help={ attributes.mxlsauto ? 'Yes' : 'No' }
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
					title={__('Margin opties (xxl)', 'awp')}
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
								label="xxl"
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
								label="Margin auto"
								help={ attributes.mxxlauto ? 'Yes.' : 'No.' }
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
								label="Margin x auto"
								help={ attributes.mxxlxauto ? 'Yes.' : 'No.' }
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
								label="Margin y auto"
								help={ attributes.mxxlyauto ? 'Yes.' : 'No.' }
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
								label="Margin top auto"
								help={ attributes.mxxltauto ? 'Yes.' : 'No.' }
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
								label="Margin right auto"
								help={ attributes.mxxleauto ? 'Yes.' : 'No.' }
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
								label="Margin bottom auto"
								help={ attributes.mxxlbauto ? 'Yes.' : 'No.' }
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
								label="Margin left auto"
								help={ attributes.mxxlsauto ? 'Yes' : 'No' }
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