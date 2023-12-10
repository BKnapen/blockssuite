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

//function PaddingEdit( props )
const PaddingEdit = (props)=> {

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

	return(
		<>
		{!breakpoint && 
		<>
		<PanelBody
			title={__('Padding opties', 'webkompanen')}
			initialOpen={false}
		>
			<div 
				className="row"
			>
				<div className="col-12">
					<BoxControl
						values={ 
							{
								top: attributes.pxs.top,
								left: attributes.pxs.left,
								right: attributes.pxs.right,
								bottom: attributes.pxs.bottom
							} 
						}
						label={__('xs', 'webkompanen')}
						units={units.get()}
						onChange={ 
							( nextValues ) => {
								setAttributes({
									pxs:nextValues
								}) 	  
							} 
						}
					/>
				</div>
				<div className="col-12">
					<BoxControl
						values={ 
							{
								top: attributes.psm.top,
								left: attributes.psm.left,
								right: attributes.psm.right,
								bottom: attributes.psm.bottom
							} 
						}
						label={__('sm', 'webkompanen')}
						units={units.get()}
						onChange={ 
							( nextValues ) => {
								setAttributes({
									psm:nextValues
								}) 	  
							} 
						}
					/>
				</div>
				<div className="col-12">
					<BoxControl
						values={ 
							{
								top: attributes.pmd.top,
								left: attributes.pmd.left,
								right: attributes.pmd.right,
								bottom: attributes.pmd.bottom
							} 
						}
						label={__('md', 'webkompanen')}
						units={units.get()}
						onChange={ 
							( nextValues ) => {
								setAttributes({
									pmd:nextValues
								}) 	  
							} 
						}
					/>
				</div>
				<div className="col-12">
					<BoxControl
						values={ 
							{
								top: attributes.plg.top,
								left: attributes.plg.left,
								right: attributes.plg.right,
								bottom: attributes.plg.bottom
							} 
						}
						label={__('lg', 'webkompanen')}
						units={units.get()}
						onChange={ 
							( nextValues ) => {
								setAttributes({
									plg:nextValues
								}) 	  
							} 
						}
					/>
				</div>
				<div className="col-12">
					<BoxControl
						values={ 
							{
								top: attributes.pxl.top,
								left: attributes.pxl.left,
								right: attributes.pxl.right,
								bottom: attributes.pxl.bottom
							} 
						}
						label={__('xl', 'webkompanen')}
						units={units.get()}
						onChange={ 
							( nextValues ) => {
								setAttributes( {pxl:nextValues} ) 	  
							} 
						}
					/>
				</div>
				<div className="col-12">
					<BoxControl
						values={ 
							{
								top: attributes.pxxl.top,
								left: attributes.pxxl.left,
								right: attributes.pxxl.right,
								bottom: attributes.pxxl.bottom
							}
						}
						label={__('xxl', 'webkompanen')}
						units={units.get()}
						onChange={ 
							( nextValues ) => {
								setAttributes({
									pxxl:nextValues
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
					title={__('Padding opties', 'webkompanen')}
					initialOpen={false}
				>
					<div 
						className="row"
					>
						<div className="col-12">
							<BoxControl
								values={ 
									{
										top: attributes.pxs.top,
										left: attributes.pxs.left,
										right: attributes.pxs.right,
										bottom: attributes.pxs.bottom
									} 
								}
								label={__('xs', 'webkompanen')}
								units={units.get()}
								onChange={ 
									( nextValues ) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												pxs: nextValues 
											} 
										)	  
									} 
								}
							/>
							<ToggleControl
								label={__('Padding auto', 'webkompanen')}
								help={ selectedblockpropstest.attributes.pxsauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
								checked={ selectedblockpropstest.attributes.pxsauto }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												pxsauto: ! selectedblockpropstest.attributes.pxsauto
											} 
										)
									}
								}
							/>
							<ToggleControl
								label={__('Padding x auto', 'webkompanen')}
								help={ selectedblockpropstest.attributes.pxsxauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
								checked={ selectedblockpropstest.attributes.pxsxauto }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												pxsxauto: ! selectedblockpropstest.attributes.pxsxauto
											} 
										)
									}
								}
							/>
							<ToggleControl
								label={__('Padding y auto', 'webkompanen')}
								help={ selectedblockpropstest.attributes.pxsyauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
								checked={ selectedblockpropstest.attributes.pxsyauto }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												pxsyauto: ! selectedblockpropstest.attributes.pxsyauto
											} 
										)
									}
								}
							/>
							<ToggleControl
								label={__('Padding top auto', 'webkompanen')}
								help={ selectedblockpropstest.attributes.pxstauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
								checked={ selectedblockpropstest.attributes.pxstauto }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												pxstauto: ! selectedblockpropstest.attributes.pxstauto
											} 
										)
									}
								}
							/>
							<ToggleControl
								label={__('Padding right auto', 'webkompanen')}
								help={ selectedblockpropstest.attributes.pxseauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
								checked={ selectedblockpropstest.attributes.pxseauto }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												pxseauto: ! selectedblockpropstest.attributes.pxseauto
											} 
										)
									}
								}
							/>
							<ToggleControl
								label={__('Padding bottom auto', 'webkompanen')}
								help={ selectedblockpropstest.attributes.pxsbauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
								checked={ selectedblockpropstest.attributes.pxsbauto }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												mxsbauto: ! selectedblockpropstest.attributes.pxsbauto
											} 
										)
									}
								}
							/>
							<ToggleControl
								label={__('Padding left auto', 'webkompanen')}
								help={ selectedblockpropstest.attributes.pxssauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
								checked={ selectedblockpropstest.attributes.pxssauto }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												pxssauto: ! selectedblockpropstest.attributes.pxssauto
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
					title={__('Padding opties (sm)', 'webkompanen')}
					initialOpen={false}
				>
					<div 
						className="row"
					>
						<div className="col-12">
							<BoxControl
								values={ 
									{
										top: attributes.psm.top,
										left: attributes.psm.left,
										right: attributes.psm.right,
										bottom: attributes.psm.bottom
									} 
								}
								label={__('sm', 'webkompanen')}
								units={units.get()}
								onChange={ 
									( nextValues ) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												psm: nextValues 
											} 
										)	  
									} 
								}
							/>
							<ToggleControl
								label={__('Padding auto', 'webkompanen')}
								help={ attributes.psmauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
								checked={ attributes.psmauto }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												psmauto: ! selectedblockpropstest.attributes.psmauto
											} 
										)
									}
								}
							/>
							<ToggleControl
								label={__('Padding x auto', 'webkompanen')}
								help={ attributes.psmxauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
								checked={ attributes.psmxauto }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												psmxauto: ! selectedblockpropstest.attributes.psmxauto
											} 
										)
									}
								}
							/>
							<ToggleControl
								label={__('Padding y auto', 'webkompanen')}
								help={ attributes.psmyauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
								checked={ attributes.psmyauto }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												psmyauto: ! selectedblockpropstest.attributes.psmyauto
											} 
										)
									}
								}
							/>
							<ToggleControl
								label={__('Padding top auto', 'webkompanen')}
								help={ attributes.psmtauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
								checked={ attributes.psmtauto }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												psmtauto: ! selectedblockpropstest.attributes.psmtauto
											} 
										)
									}
								}
							/>
							<ToggleControl
								label={__('Padding right auto', 'webkompanen')}
								help={ attributes.psmeauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
								checked={ attributes.psmeauto }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												psmeauto: ! selectedblockpropstest.attributes.psmeauto
											} 
										)
									}
								}
							/>
							<ToggleControl
								label={__('Padding bottom auto', 'webkompanen')}
								help={ attributes.psmbauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
								checked={ attributes.psmbauto }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												psmbauto: ! selectedblockpropstest.attributes.psmbauto
											} 
										)
									}
								}
							/>
							<ToggleControl
								label={__('Padding left auto', 'webkompanen')}
								help={ attributes.psmsauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
								checked={ attributes.psmsauto }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												psmsauto: ! selectedblockpropstest.attributes.psmsauto
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
					title={__('Padding opties (md)', 'webkompanen')}
					initialOpen={false}
				>
					<div 
						className="row"
					>
						<div className="col-12">
							<BoxControl
								values={ 
									{
										top: attributes.pmd.top,
										left: attributes.pmd.left,
										right: attributes.pmd.right,
										bottom: attributes.pmd.bottom
									} 
								}
								label={__('md', 'webkompanen')}
								units={units.get()}
								onChange={ 
									( nextValues ) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												pmd: nextValues 
											} 
										)	  
									} 
								}
							/>
							<ToggleControl
								label={__('Padding auto', 'webkompanen')}
								help={ attributes.pmdauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
								checked={ attributes.pmdauto }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												pmdauto: ! selectedblockpropstest.attributes.pmdauto
											} 
										)
									}
								}
							/>
							<ToggleControl
								label={__('Padding x auto', 'webkompanen')}
								help={ attributes.pmdxauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
								checked={ attributes.pmdxauto }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												pmdxauto: ! selectedblockpropstest.attributes.pmdxauto
											} 
										)
									}
								}
							/>
							<ToggleControl
								label={__('Padding y auto', 'webkompanen')}
								help={ attributes.pmdyauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
								checked={ attributes.pmdyauto }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												pmdyauto: ! selectedblockpropstest.attributes.pmdyauto
											} 
										)
									}
								}
							/>
							<ToggleControl
								label={__('Padding top auto', 'webkompanen')}
								help={ attributes.pmdtauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
								checked={ attributes.pmdtauto }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												pmdtauto: ! selectedblockpropstest.attributes.pmdtauto
											} 
										)
									}
								}
							/>
							<ToggleControl
								label={__('Padding right auto', 'webkompanen')}
								help={ attributes.pmdeauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
								checked={ attributes.pmdeauto }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												pmdeauto: ! selectedblockpropstest.attributes.pmdeauto
											} 
										)
									}
								}
							/>
							<ToggleControl
								label={__('Padding bottom auto', 'webkompanen')}
								help={ attributes.pmdbauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
								checked={ attributes.pmdbauto }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												pmdbauto: ! selectedblockpropstest.attributes.pmdbauto
											} 
										)
									}
								}
							/>
							<ToggleControl
								label={__('Padding left auto', 'webkompanen')}
								help={ attributes.pmdsauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
								checked={ attributes.pmdsauto }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												pmdsauto: ! selectedblockpropstest.attributes.pmdsauto
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
					title={__('Padding opties (lg)', 'webkompanen')}
					initialOpen={false}
				>
					<div 
						className="row"
					>
						<div className="col-12">
							<BoxControl
								values={ 
									{
										top: attributes.plg.top,
										left: attributes.plg.left,
										right: attributes.plg.right,
										bottom: attributes.plg.bottom
									} 
								}
								label={__('lg', 'webkompanen')}
								units={units.get()}
								onChange={ 
									( nextValues ) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												plg: nextValues 
											} 
										)	  
									} 
								}
							/>
							<ToggleControl
								label={__('Padding auto', 'webkompanen')}
								help={ attributes.plgauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
								checked={ attributes.plgauto }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												plgauto: ! selectedblockpropstest.attributes.plgauto
											} 
										)
									}
								}
							/>
							<ToggleControl
								label={__('Padding x auto', 'webkompanen')}
								help={ attributes.plgxauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
								checked={ attributes.plgxauto }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												plgxauto: ! selectedblockpropstest.attributes.plgxauto
											} 
										)
									}
								}
							/>
							<ToggleControl
								label={__('Padding y auto', 'webkompanen')}
								help={ attributes.plgyauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
								checked={ attributes.plgyauto }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												plgyauto: ! selectedblockpropstest.attributes.plgyauto
											} 
										)
									}
								}
							/>
							<ToggleControl
								label={__('Padding top auto', 'webkompanen')}
								help={ attributes.plgtauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
								checked={ attributes.plgtauto }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												plgtauto: ! selectedblockpropstest.attributes.plgtauto
											} 
										)
									}
								}
							/>
							<ToggleControl
								label={__('Padding right auto', 'webkompanen')}
								help={ attributes.plgeauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
								checked={ attributes.plgeauto }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												plgeauto: ! selectedblockpropstest.attributes.plgeauto
											} 
										)
									}
								}
							/>
							<ToggleControl
								label={__('Padding bottom auto', 'webkompanen')}
								help={ attributes.plgbauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
								checked={ attributes.plgbauto }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												plgbauto: ! selectedblockpropstest.attributes.plgbauto
											} 
										)
									}
								}
							/>
							<ToggleControl
								label={__('Padding left auto', 'webkompanen')}
								help={ attributes.plgsauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
								checked={ attributes.plgsauto }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												plgsauto: ! selectedblockpropstest.attributes.plgsauto
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
					title={__('Padding opties (xl)', 'webkompanen')}
					initialOpen={false}
				>
					<div 
						className="row"
					>
						<div className="col-12">
							<BoxControl
								values={ 
									{
										top: attributes.pxl.top,
										left: attributes.pxl.left,
										right: attributes.pxl.right,
										bottom: attributes.pxl.bottom
									} 
								}
								label={__('xl', 'webkompanen')}
								units={units.get()}
								onChange={ 
									( nextValues ) => {
								
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												pxl: nextValues 
											} 
										)	  
									} 
								}
							/>
							<ToggleControl
								label={__('Padding auto', 'webkompanen')}
								help={ attributes.pxlauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
								checked={ attributes.pxlauto }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												pxlauto: ! selectedblockpropstest.attributes.pxlauto
											} 
										)
									}
								}
							/>
							<ToggleControl
								label={__('Padding x auto', 'webkompanen')}
								help={ attributes.pxlxauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
								checked={ attributes.pxlxauto }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												pxlxauto: ! selectedblockpropstest.attributes.pxlxauto
											} 
										)
									}
								}
							/>
							<ToggleControl
								label={__('Padding y auto', 'webkompanen')}
								help={ attributes.pxlyauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
								checked={ attributes.pxlyauto }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												pxlyauto: ! selectedblockpropstest.attributes.pxlyauto
											} 
										)
									}
								}
							/>
							<ToggleControl
								label={__('Padding top auto', 'webkompanen')}
								help={ attributes.pxltauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
								checked={ attributes.pxltauto }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												pxltauto: ! selectedblockpropstest.attributes.pxltauto
											} 
										)
									}
								}
							/>
							<ToggleControl
								label={__('Padding right auto', 'webkompanen')}
								help={ attributes.pxleauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
								checked={ attributes.pxleauto }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												pxleauto: ! selectedblockpropstest.attributes.pxleauto
											} 
										)
									}
								}
							/>
							<ToggleControl
								label={__('Padding bottom auto', 'webkompanen')}
								help={ attributes.pxlbauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
								checked={ attributes.pxlbauto }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												pxlbauto: ! selectedblockpropstest.attributes.pxlbauto
											} 
										)
									}
								}
							/>
							<ToggleControl
								label={__('Padding left auto', 'webkompanen')}
								help={ attributes.pxlsauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
								checked={ attributes.pxlsauto }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												pxlsauto: ! selectedblockpropstest.attributes.pxlsauto
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
					title={__('Padding opties (xxl)', 'webkompanen')}
					initialOpen={false}
				>
					<div 
						className="row"
					>
						<div className="col-12">
							<BoxControl
								values={ 
									{
										top: attributes.pxxl.top,
										left: attributes.pxxl.left,
										right: attributes.pxxl.right,
										bottom: attributes.pxxl.bottom
									} 
								}
								label={__('xxl', 'webkompanen')}
								units={units.get()}
								onChange={ 
									( nextValues ) => {
								
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												pxxl: nextValues 
											} 
										)	  
									} 
								}
							/>
							<ToggleControl
								label={__('Padding auto', 'webkompanen')}
								help={ attributes.pxxlauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
								checked={ attributes.pxxlauto }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												pxxlauto: ! selectedblockpropstest.attributes.pxxlauto
											} 
										)
									}
								}
							/>
							<ToggleControl
								label={__('Padding x auto', 'webkompanen')}
								help={ attributes.pxxlxauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
								checked={ attributes.pxxlxauto }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												pxxlxauto: ! selectedblockpropstest.attributes.pxxlxauto
											} 
										)
									}
								}
							/>
							<ToggleControl
								label={__('Padding y auto', 'webkompanen')}
								help={ attributes.pxxlyauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
								checked={ attributes.pxxlyauto }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												pxxlyauto: ! selectedblockpropstest.attributes.pxxlyauto
											} 
										)
									}
								}
							/>
							<ToggleControl
								label={__('Padding top auto', 'webkompanen')}
								help={ attributes.pxxltauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
								checked={ attributes.pxxltauto }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												pxxltauto: ! selectedblockpropstest.attributes.pxxltauto
											} 
										)
									}
								}
							/>
							<ToggleControl
								label={__('Padding right auto', 'webkompanen')}
								help={ attributes.pxxleauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
								checked={ attributes.pxxleauto }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												pxxleauto: ! selectedblockpropstest.attributes.pxxleauto
											} 
										)
									}
								}
							/>
							<ToggleControl
								label={__('Padding bottom auto', 'webkompanen')}
								help={ attributes.pxxlbauto ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
								checked={ attributes.pxxlbauto }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												pxxlbauto: ! selectedblockpropstest.attributes.pxxlbauto
											} 
										)
									}
								}
							/>
							<ToggleControl
								label={__('Padding left auto', 'webkompanen')}
								help={ attributes.pxxlsauto ? __('Yes', 'webkompanen') : __('No', 'webkompanen') }
								checked={ attributes.pxxlsauto }
								onChange={ 
									(e) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												pxxlsauto: ! selectedblockpropstest.attributes.pxxlsauto
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

export default PaddingEdit;