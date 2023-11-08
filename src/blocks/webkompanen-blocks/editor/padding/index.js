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
			title={__('Padding opties', 'awp')}
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
						label="xs"
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
						label="sm"
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
						label="md"
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
						label="lg"
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
						label="xl"
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
						label="xxl"
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
					title={__('Padding opties', 'awp')}
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
								label="xs"
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
								label="Padding auto"
								help={ selectedblockpropstest.attributes.pxsauto ? 'Yes.' : 'No.' }
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
								label="Padding x auto"
								help={ selectedblockpropstest.attributes.pxsxauto ? 'Yes.' : 'No.' }
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
								label="Padding y auto"
								help={ selectedblockpropstest.attributes.pxsyauto ? 'Yes.' : 'No.' }
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
								label="Padding top auto"
								help={ selectedblockpropstest.attributes.pxstauto ? 'Yes.' : 'No.' }
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
								label="Padding right auto"
								help={ selectedblockpropstest.attributes.pxseauto ? 'Yes.' : 'No.' }
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
								label="Padding bottom auto"
								help={ selectedblockpropstest.attributes.pxsbauto ? 'Yes.' : 'No.' }
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
								label="Padding left auto"
								help={ selectedblockpropstest.attributes.pxssauto ? 'Yes' : 'No' }
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
					title={__('Padding opties (sm)', 'awp')}
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
								label="sm"
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
								label="Padding auto"
								help={ attributes.psmauto ? 'Yes.' : 'No.' }
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
								label="Padding x auto"
								help={ attributes.psmxauto ? 'Yes.' : 'No.' }
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
								label="Padding y auto"
								help={ attributes.psmyauto ? 'Yes.' : 'No.' }
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
								label="Padding top auto"
								help={ attributes.psmtauto ? 'Yes.' : 'No.' }
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
								label="Padding right auto"
								help={ attributes.psmeauto ? 'Yes.' : 'No.' }
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
								label="Padding bottom auto"
								help={ attributes.psmbauto ? 'Yes.' : 'No.' }
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
								label="Padding left auto"
								help={ attributes.psmsauto ? 'Yes' : 'No' }
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
					title={__('Padding opties (md)', 'awp')}
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
								label="md"
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
								label="Padding auto"
								help={ attributes.pmdauto ? 'Yes.' : 'No.' }
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
								label="Padding x auto"
								help={ attributes.pmdxauto ? 'Yes.' : 'No.' }
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
								label="Padding y auto"
								help={ attributes.pmdyauto ? 'Yes.' : 'No.' }
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
								label="Padding top auto"
								help={ attributes.pmdtauto ? 'Yes.' : 'No.' }
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
								label="Padding right auto"
								help={ attributes.pmdeauto ? 'Yes.' : 'No.' }
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
								label="Padding bottom auto"
								help={ attributes.pmdbauto ? 'Yes.' : 'No.' }
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
								label="Padding left auto"
								help={ attributes.pmdsauto ? 'Yes' : 'No' }
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
					title={__('Padding opties (lg)', 'awp')}
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
								label="lg"
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
								label="Padding auto"
								help={ attributes.plgauto ? 'Yes.' : 'No.' }
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
								label="Padding x auto"
								help={ attributes.plgxauto ? 'Yes.' : 'No.' }
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
								label="Padding y auto"
								help={ attributes.plgyauto ? 'Yes.' : 'No.' }
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
								label="Padding top auto"
								help={ attributes.plgtauto ? 'Yes.' : 'No.' }
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
								label="Padding right auto"
								help={ attributes.plgeauto ? 'Yes.' : 'No.' }
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
								label="Padding bottom auto"
								help={ attributes.plgbauto ? 'Yes.' : 'No.' }
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
								label="Padding left auto"
								help={ attributes.plgsauto ? 'Yes' : 'No' }
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
					title={__('Padding opties (xl)', 'awp')}
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
								label="xl"
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
								label="Padding auto"
								help={ attributes.pxlauto ? 'Yes.' : 'No.' }
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
								label="Padding x auto"
								help={ attributes.pxlxauto ? 'Yes.' : 'No.' }
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
								label="Padding y auto"
								help={ attributes.pxlyauto ? 'Yes.' : 'No.' }
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
								label="Padding top auto"
								help={ attributes.pxltauto ? 'Yes.' : 'No.' }
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
								label="Padding right auto"
								help={ attributes.pxleauto ? 'Yes.' : 'No.' }
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
								label="Padding bottom auto"
								help={ attributes.pxlbauto ? 'Yes.' : 'No.' }
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
								label="Padding left auto"
								help={ attributes.pxlsauto ? 'Yes' : 'No' }
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
					title={__('Padding opties (xxl)', 'awp')}
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
								label="xxl"
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
								label="Padding auto"
								help={ attributes.pxxlauto ? 'Yes.' : 'No.' }
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
								label="Padding x auto"
								help={ attributes.pxxlxauto ? 'Yes.' : 'No.' }
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
								label="Padding y auto"
								help={ attributes.pxxlyauto ? 'Yes.' : 'No.' }
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
								label="Padding top auto"
								help={ attributes.pxxltauto ? 'Yes.' : 'No.' }
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
								label="Padding right auto"
								help={ attributes.pxxleauto ? 'Yes.' : 'No.' }
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
								label="Padding bottom auto"
								help={ attributes.pxxlbauto ? 'Yes.' : 'No.' }
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
								label="Padding left auto"
								help={ attributes.pxxlsauto ? 'Yes' : 'No' }
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