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
const DisplayEdit = (props)=> {

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
			title={__('Display opties', 'awp')}
			initialOpen={false}
		>
			<div 
				className="row"
			>
				<div className="col-12">
					<SelectControl
						label={ __( 'xs' ) }
						value={ attributes.dxs } // e.g: value = [ 'a', 'c' ]
						onChange={ 
							( nextSelect ) => {
								setAttributes({
									dxs:nextSelect
								}) 
							} 
						}
						options={ [
							{ value: null, label: '' },
							{ value: 'none', label: 'None' },
							{ value: 'inline', label: 'Inline' },
							{ value: 'inline-block', label: 'Inline block' },
							{ value: 'block', label: 'Block' },
							{ value: 'grid', label: 'Grid' },
							{ value: 'table', label: 'Table' },
							{ value: 'table-cell', label: 'Table cell' },
							{ value: 'table-row', label: 'Table row' },
							{ value: 'flex', label: 'Flex' },
							{ value: 'inline-flex', label: 'Inline flex' }
						] }
					/>
				</div>
				<div className="col-12">
					<SelectControl
						label={ __( 'sm' ) }
						value={ attributes.dsm } // e.g: value = [ 'a', 'c' ]
						onChange={ 
							( nextSelect ) => {
								setAttributes({
									dsm:nextSelect
								}) 
							} 
						}
						options={ [
							{ value: null, label: '' },
							{ value: 'none', label: 'None' },
							{ value: 'inline', label: 'Inline' },
							{ value: 'inline-block', label: 'Inline block' },
							{ value: 'block', label: 'Block' },
							{ value: 'grid', label: 'Grid' },
							{ value: 'table', label: 'Table' },
							{ value: 'table-cell', label: 'Table cell' },
							{ value: 'table-row', label: 'Table row' },
							{ value: 'flex', label: 'Flex' },
							{ value: 'inline-flex', label: 'Inline flex' }
						] }
					/>
				</div>
				<div className="col-12">
					<SelectControl
						label={ __( 'md' ) }
						value={ attributes.dmd } // e.g: value = [ 'a', 'c' ]
						onChange={ 
							( nextSelect ) => {
								setAttributes({
									dmd:nextSelect
								}) 
							} 
						}
						options={ [
							{ value: null, label: '' },
							{ value: 'none', label: 'None' },
							{ value: 'inline', label: 'Inline' },
							{ value: 'inline-block', label: 'Inline block' },
							{ value: 'block', label: 'Block' },
							{ value: 'grid', label: 'Grid' },
							{ value: 'table', label: 'Table' },
							{ value: 'table-cell', label: 'Table cell' },
							{ value: 'table-row', label: 'Table row' },
							{ value: 'flex', label: 'Flex' },
							{ value: 'inline-flex', label: 'Inline flex' }
						] }
					/>
				</div>
				<div className="col-12">
					<SelectControl
						label={ __( 'lg' ) }
						value={ attributes.dlg } // e.g: value = [ 'a', 'c' ]
						onChange={ 
							( nextSelect ) => {
								setAttributes({
									dlg:nextSelect
								}) 
							} 
						}
						options={ [
							{ value: null, label: '' },
							{ value: 'none', label: 'None' },
							{ value: 'inline', label: 'Inline' },
							{ value: 'inline-block', label: 'Inline block' },
							{ value: 'block', label: 'Block' },
							{ value: 'grid', label: 'Grid' },
							{ value: 'table', label: 'Table' },
							{ value: 'table-cell', label: 'Table cell' },
							{ value: 'table-row', label: 'Table row' },
							{ value: 'flex', label: 'Flex' },
							{ value: 'inline-flex', label: 'Inline flex' }
						] }
					/>
				</div>
				<div className="col-12">
					<SelectControl
						label={ __( 'xl' ) }
						value={ attributes.dxl } // e.g: value = [ 'a', 'c' ]
						onChange={ 
							( nextSelect ) => {
								setAttributes({
									dxl:nextSelect
								}) 
							} 
						}
						options={ [
							{ value: null, label: '' },
							{ value: 'none', label: 'None' },
							{ value: 'inline', label: 'Inline' },
							{ value: 'inline-block', label: 'Inline block' },
							{ value: 'block', label: 'Block' },
							{ value: 'grid', label: 'Grid' },
							{ value: 'table', label: 'Table' },
							{ value: 'table-cell', label: 'Table cell' },
							{ value: 'table-row', label: 'Table row' },
							{ value: 'flex', label: 'Flex' },
							{ value: 'inline-flex', label: 'Inline flex' }
						] }
					/>
				</div>
				<div className="col-12">
					<SelectControl
						label={ __( 'xxl' ) }
						value={ attributes.dxxl } // e.g: value = [ 'a', 'c' ]
						onChange={ 
							( nextSelect ) => {
								setAttributes({
									dxxl:nextSelect
								}) 
							} 
						}
						options={ [
							{ value: null, label: '' },
							{ value: 'none', label: 'None' },
							{ value: 'inline', label: 'Inline' },
							{ value: 'inline-block', label: 'Inline block' },
							{ value: 'block', label: 'Block' },
							{ value: 'grid', label: 'Grid' },
							{ value: 'table', label: 'Table' },
							{ value: 'table-cell', label: 'Table cell' },
							{ value: 'table-row', label: 'Table row' },
							{ value: 'flex', label: 'Flex' },
							{ value: 'inline-flex', label: 'Inline flex' }
						] }
					/>
				</div>
			</div>
		</PanelBody>
		</>
		}
		{
			breakpoint && breakpoint == 'xs' &&	
				<PanelBody
					title={__('Display opties', 'awp')}
					initialOpen={false}
				>
					<div 
						className="row"
					>
						<div className="col-12">
							<SelectControl
								label={ __( 'xs' ) }
								value={ attributes.dxs } // e.g: value = [ 'a', 'c' ]
								onChange={ 
									( nextSelect ) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												dxs: nextSelect 
											} 
										)	  
									} 
								}
								options={ [
									{ value: null, label: '' },
									{ value: 'none', label: 'None' },
									{ value: 'inline', label: 'Inline' },
									{ value: 'inline-block', label: 'Inline block' },
									{ value: 'block', label: 'Block' },
									{ value: 'grid', label: 'Grid' },
									{ value: 'table', label: 'Table' },
									{ value: 'table-cell', label: 'Table cell' },
									{ value: 'table-row', label: 'Table row' },
									{ value: 'flex', label: 'Flex' },
									{ value: 'inline-flex', label: 'Inline flex' }
								] }
							/>
						</div>
					</div>
				</PanelBody>
		}
		{
			breakpoint && breakpoint == 'sm' &&	
				<PanelBody
					title={__('Display opties', 'awp')}
					initialOpen={false}
				>
					<div 
						className="row"
					>
						<div className="col-12">
							<SelectControl
								label={ __( 'sm' ) }
								value={ attributes.dsm } // e.g: value = [ 'a', 'c' ]
								onChange={ 
									( nextSelect ) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												dsm: nextSelect 
											} 
										)	  
									} 
								}
								options={ [
									{ value: null, label: '' },
									{ value: 'none', label: 'None' },
									{ value: 'inline', label: 'Inline' },
									{ value: 'inline-block', label: 'Inline block' },
									{ value: 'block', label: 'Block' },
									{ value: 'grid', label: 'Grid' },
									{ value: 'table', label: 'Table' },
									{ value: 'table-cell', label: 'Table cell' },
									{ value: 'table-row', label: 'Table row' },
									{ value: 'flex', label: 'Flex' },
									{ value: 'inline-flex', label: 'Inline flex' }
								] }
							/>
						</div>
					</div>
				</PanelBody>
		}
		{
			breakpoint && breakpoint == 'md' &&	
				<PanelBody
					title={__('Display opties', 'awp')}
					initialOpen={false}
				>
					<div 
						className="row"
					>
						<div className="col-12">
							<SelectControl
								label={ __( 'md' ) }
								value={ attributes.dmd } // e.g: value = [ 'a', 'c' ]
								onChange={ 
									( nextSelect ) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												dmd: nextSelect 
											} 
										)	  
									} 
								}
								options={ [
									{ value: null, label: '' },
									{ value: 'none', label: 'None' },
									{ value: 'inline', label: 'Inline' },
									{ value: 'inline-block', label: 'Inline block' },
									{ value: 'block', label: 'Block' },
									{ value: 'grid', label: 'Grid' },
									{ value: 'table', label: 'Table' },
									{ value: 'table-cell', label: 'Table cell' },
									{ value: 'table-row', label: 'Table row' },
									{ value: 'flex', label: 'Flex' },
									{ value: 'inline-flex', label: 'Inline flex' }
								] }
							/>
						</div>
					</div>
				</PanelBody>
		}
		{
			breakpoint && breakpoint == 'lg' &&	
				<PanelBody
					title={__('Display opties', 'awp')}
					initialOpen={false}
				>
					<div 
						className="row"
					>
						<div className="col-12">
							<SelectControl
								label={ __( 'lg' ) }
								value={ attributes.dlg } // e.g: value = [ 'a', 'c' ]
								onChange={ 
									( nextSelect ) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												dlg: nextSelect 
											} 
										)	  
									} 
								}
								options={ [
									{ value: null, label: '' },
									{ value: 'none', label: 'None' },
									{ value: 'inline', label: 'Inline' },
									{ value: 'inline-block', label: 'Inline block' },
									{ value: 'block', label: 'Block' },
									{ value: 'grid', label: 'Grid' },
									{ value: 'table', label: 'Table' },
									{ value: 'table-cell', label: 'Table cell' },
									{ value: 'table-row', label: 'Table row' },
									{ value: 'flex', label: 'Flex' },
									{ value: 'inline-flex', label: 'Inline flex' }
								] }
							/>
						</div>
					</div>
				</PanelBody>
		}
		{
			breakpoint && breakpoint == 'xl' &&	
				<PanelBody
					title={__('Display opties', 'awp')}
					initialOpen={false}
				>
					<div 
						className="row"
					>
						<div className="col-12">
							<SelectControl
								label={ __( 'xl' ) }
								value={ attributes.dxl } // e.g: value = [ 'a', 'c' ]
								onChange={ 
									( nextSelect ) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												dxl: nextSelect 
											} 
										)	  
									} 
								}
								options={ [
									{ value: null, label: '' },
									{ value: 'none', label: 'None' },
									{ value: 'inline', label: 'Inline' },
									{ value: 'inline-block', label: 'Inline block' },
									{ value: 'block', label: 'Block' },
									{ value: 'grid', label: 'Grid' },
									{ value: 'table', label: 'Table' },
									{ value: 'table-cell', label: 'Table cell' },
									{ value: 'table-row', label: 'Table row' },
									{ value: 'flex', label: 'Flex' },
									{ value: 'inline-flex', label: 'Inline flex' }
								] }
							/>
						</div>
					</div>
				</PanelBody>
		}
		{
			breakpoint && breakpoint == 'xxl' &&	
				<PanelBody
					title={__('Display opties', 'awp')}
					initialOpen={false}
				>
					<div 
						className="row"
					>
						<div className="col-12">
							<SelectControl
								label={ __( 'xxl' ) }
								value={ attributes.dxxl } // e.g: value = [ 'a', 'c' ]
								onChange={ 
									( nextSelect ) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												dxxl: nextSelect 
											} 
										)	  
									} 
								}
								options={ [
									{ value: null, label: '' },
									{ value: 'none', label: 'None' },
									{ value: 'inline', label: 'Inline' },
									{ value: 'inline-block', label: 'Inline block' },
									{ value: 'block', label: 'Block' },
									{ value: 'grid', label: 'Grid' },
									{ value: 'table', label: 'Table' },
									{ value: 'table-cell', label: 'Table cell' },
									{ value: 'table-row', label: 'Table row' },
									{ value: 'flex', label: 'Flex' },
									{ value: 'inline-flex', label: 'Inline flex' }
								] }
							/>
						</div>
					</div>
				</PanelBody>
		}
		</>
	)
}

export default DisplayEdit;