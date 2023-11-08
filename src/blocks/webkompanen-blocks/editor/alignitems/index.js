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
const AlignItemsEdit = (props)=> {

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
		</>
		}
		{
			breakpoint && breakpoint == 'xs' &&	
				<PanelBody
					title={__('Align items', 'awp')}
					initialOpen={false}
				>
					<div 
						className="row"
					>
						<div
							className="col-12"
						>
                            <SelectControl
                                label={ __( 'xs' ) }
                                value={ attributes.alignitemsxs } // e.g: value = [ 'a', 'c' ]
                                onChange={ 
									( nextSelect ) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												alignitemsxs: nextSelect 
											} 
										)	  
									} 
								}
                                options={ [
                                    { value: null, label: '' },
                                    { value: 'start', label: 'Start' },
                                    { value: 'end', label: 'End' },
                                    { value: 'center', label: 'Center' },
                                    { value: 'baseline', label: 'Baseline' },
                                    { value: 'stretch', label: 'Stretch' }
                                ] }
                            />
						</div>
					</div>
				</PanelBody>
		}
		{
			breakpoint && breakpoint == 'sm' &&	
				<PanelBody
					title={__('Align items', 'awp')}
					initialOpen={false}
				>
					<div 
						className="row"
					>
						<div
							className="col-12"
						>
                            <SelectControl
                                label={ __( 'sm' ) }
                                value={ attributes.alignitemssm } // e.g: value = [ 'a', 'c' ]
                                onChange={ 
									( nextSelect ) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												alignitemssm: nextSelect 
											} 
										)	  
									} 
								}
                                options={ [
                                    { value: null, label: '' },
                                    { value: 'start', label: 'Start' },
                                    { value: 'end', label: 'End' },
                                    { value: 'center', label: 'Center' },
                                    { value: 'baseline', label: 'Baseline' },
                                    { value: 'stretch', label: 'Stretch' }
                                ] }
                            />
						</div>
					</div>
				</PanelBody>
		}
		{
			breakpoint && breakpoint == 'md' &&	
				<PanelBody
					title={__('Align items', 'awp')}
					initialOpen={false}
				>
					<div 
						className="row"
					>
						<div
							className="col-12"
						>
                            <SelectControl
                                label={ __( 'md' ) }
                                value={ attributes.alignitemsmd } // e.g: value = [ 'a', 'c' ]
                                onChange={ 
									( nextSelect ) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												alignitemsmd: nextSelect 
											} 
										)	  
									} 
								}
                                options={ [
                                    { value: null, label: '' },
                                    { value: 'start', label: 'Start' },
                                    { value: 'end', label: 'End' },
                                    { value: 'center', label: 'Center' },
                                    { value: 'baseline', label: 'Baseline' },
                                    { value: 'stretch', label: 'Stretch' }
                                ] }
                            />
						</div>
					</div>
				</PanelBody>
		}
		{
			breakpoint && breakpoint == 'lg' &&	
				<PanelBody
					title={__('Align items', 'awp')}
					initialOpen={false}
				>
					<div 
						className="row"
					>
						<div
							className="col-12"
						>
                            <SelectControl
                                label={ __( 'lg' ) }
                                value={ attributes.alignitemslg } // e.g: value = [ 'a', 'c' ]
                                onChange={ 
									( nextSelect ) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												alignitemslg: nextSelect 
											} 
										)	  
									} 
								}
                                options={ [
                                    { value: null, label: '' },
                                    { value: 'start', label: 'Start' },
                                    { value: 'end', label: 'End' },
                                    { value: 'center', label: 'Center' },
                                    { value: 'baseline', label: 'Baseline' },
                                    { value: 'stretch', label: 'Stretch' }
                                ] }
                            />
						</div>
					</div>
				</PanelBody>
		}
		{
			breakpoint && breakpoint == 'xl' &&	
				<PanelBody
					title={__('Align items', 'awp')}
					initialOpen={false}
				>
					<div 
						className="row"
					>
						<div
							className="col-12"
						>
							<SelectControl
                                label={ __( 'xl' ) }
                                value={ attributes.alignitemsxl } // e.g: value = [ 'a', 'c' ]
                                onChange={ 
									( nextSelect ) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												alignitemsxl: nextSelect 
											} 
										)	  
									} 
								}
                                options={ [
                                    { value: null, label: '' },
                                    { value: 'start', label: 'Start' },
                                    { value: 'end', label: 'End' },
                                    { value: 'center', label: 'Center' },
                                    { value: 'baseline', label: 'Baseline' },
                                    { value: 'stretch', label: 'Stretch' }
                                ] }
                            />
						</div>
					</div>
				</PanelBody>
		}
		{
			breakpoint && breakpoint == 'xxl' &&
				<PanelBody
					title={__('Align items', 'awp')}
					initialOpen={false}
				>
					<div 
						className="row"
					>
						<div
							className="col-12"
						>
							<SelectControl
                                label={ __( 'xxl' ) }
                                value={ attributes.alignitemsxxl } // e.g: value = [ 'a', 'c' ]
                                onChange={ 
									( nextSelect ) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												alignitemsxxl: nextSelect 
											} 
										)	  
									} 
								}
                                options={ [
                                    { value: null, label: '' },
                                    { value: 'start', label: 'Start' },
                                    { value: 'end', label: 'End' },
                                    { value: 'center', label: 'Center' },
                                    { value: 'baseline', label: 'Baseline' },
                                    { value: 'stretch', label: 'Stretch' }
                                ] }
                            />
						</div>
					</div>
				</PanelBody>
		}
		</>
	)
}

export default AlignItemsEdit;