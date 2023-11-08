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
const JustifyEdit = (props)=> {

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
					title={__('Justify content', 'awp')}
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
                                value={ attributes.justifycontentxs } // e.g: value = [ 'a', 'c' ]
                                onChange={ 
									( nextSelect ) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												justifycontentxs: nextSelect 
											} 
										)	  
									} 
								}
                                options={ [
                                    { value: null, label: '' },
                                    { value: 'start', label: 'Start' },
                                    { value: 'end', label: 'End' },
                                    { value: 'center', label: 'Center' },
                                    { value: 'between', label: 'Between' },
                                    { value: 'around', label: 'Around' },
                                    { value: 'evenly', label: 'Evenly' }
                                ] }
                            />
						</div>
					</div>
				</PanelBody>
		}
		{
			breakpoint && breakpoint == 'sm' &&	
				<PanelBody
					title={__('Justify content', 'awp')}
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
                                value={ attributes.justifycontentsm } // e.g: value = [ 'a', 'c' ]
                                onChange={ 
									( nextSelect ) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												justifycontentsm: nextSelect 
											} 
										)	  
									} 
								}
                                options={ [
                                    { value: null, label: '' },
                                    { value: 'start', label: 'Start' },
                                    { value: 'end', label: 'End' },
                                    { value: 'center', label: 'Center' },
                                    { value: 'between', label: 'Between' },
                                    { value: 'around', label: 'Around' },
                                    { value: 'evenly', label: 'Evenly' }
                                ] }
                            />
						</div>
					</div>
				</PanelBody>
		}
		{
			breakpoint && breakpoint == 'md' &&	
				<PanelBody
					title={__('Justify content', 'awp')}
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
                                value={ attributes.justifycontentmd } // e.g: value = [ 'a', 'c' ]
                                onChange={ 
									( nextSelect ) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												justifycontentmd: nextSelect 
											} 
										)	  
									} 
								}
                                options={ [
                                    { value: null, label: '' },
                                    { value: 'start', label: 'Start' },
                                    { value: 'end', label: 'End' },
                                    { value: 'center', label: 'Center' },
                                    { value: 'between', label: 'Between' },
                                    { value: 'around', label: 'Around' },
                                    { value: 'evenly', label: 'Evenly' }
                                ] }
                            />
						</div>
					</div>
				</PanelBody>
		}
		{
			breakpoint && breakpoint == 'lg' &&	
				<PanelBody
					title={__('Justify content', 'awp')}
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
                                value={ attributes.justifycontentlg } // e.g: value = [ 'a', 'c' ]
                                onChange={ 
									( nextSelect ) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												justifycontentlg: nextSelect 
											} 
										)	  
									} 
								}
                                options={ [
                                    { value: null, label: '' },
                                    { value: 'start', label: 'Start' },
                                    { value: 'end', label: 'End' },
                                    { value: 'center', label: 'Center' },
                                    { value: 'between', label: 'Between' },
                                    { value: 'around', label: 'Around' },
                                    { value: 'evenly', label: 'Evenly' }
                                ] }
                            />
						</div>
					</div>
				</PanelBody>
		}
		{
			breakpoint && breakpoint == 'xl' &&	
				<PanelBody
					title={__('Justify content', 'awp')}
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
                                value={ attributes.justifycontentxl } // e.g: value = [ 'a', 'c' ]
                                onChange={ 
									( nextSelect ) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												justifycontentxl: nextSelect 
											} 
										)	  
									} 
								}
                                options={ [
                                    { value: null, label: '' },
                                    { value: 'start', label: 'Start' },
                                    { value: 'end', label: 'End' },
                                    { value: 'center', label: 'Center' },
                                    { value: 'between', label: 'Between' },
                                    { value: 'around', label: 'Around' },
                                    { value: 'evenly', label: 'Evenly' }
                                ] }
                            />
						</div>
					</div>
				</PanelBody>
		}
		{
			breakpoint && breakpoint == 'xxl' &&
				<PanelBody
					title={__('Justify content', 'awp')}
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
                                value={ attributes.justifycontentxxl } // e.g: value = [ 'a', 'c' ]
                                onChange={ 
									( nextSelect ) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												justifycontentxxl: nextSelect 
											} 
										)	  
									} 
								}
                                options={ [
                                    { value: null, label: '' },
                                    { value: 'start', label: 'Start' },
                                    { value: 'end', label: 'End' },
                                    { value: 'center', label: 'Center' },
                                    { value: 'between', label: 'Between' },
                                    { value: 'around', label: 'Around' },
                                    { value: 'evenly', label: 'Evenly' }
                                ] }
                            />
						</div>
					</div>
				</PanelBody>
		}
		</>
	)
}

export default JustifyEdit;