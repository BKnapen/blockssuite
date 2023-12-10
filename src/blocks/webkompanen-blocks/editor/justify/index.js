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
					title={__('Justify content', 'webkompanen')}
					initialOpen={false}
				>
					<div 
						className="row"
					>
						<div
							className="col-12"
						>
                            <SelectControl
                                label={ __( 'xs', 'webkompanen' ) }
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
                                    { value: null, label: __('', 'webkompanen') },
                                    { value: 'start', label: __('Start', 'webkompanen') },
                                    { value: 'end', label: __('End', 'webkompanen') },
                                    { value: 'center', label: __('Center', 'webkompanen') },
                                    { value: 'between', label: __('Between', 'webkompanen') },
                                    { value: 'around', label: __('Around', 'webkompanen') },
                                    { value: 'evenly', label: __('Evenly', 'webkompanen') }
                                ] }
                            />
						</div>
					</div>
				</PanelBody>
		}
		{
			breakpoint && breakpoint == 'sm' &&	
				<PanelBody
					title={__('Justify content', 'webkompanen')}
					initialOpen={false}
				>
					<div 
						className="row"
					>
						<div
							className="col-12"
						>
                            <SelectControl
                                label={ __( 'sm', 'webkompanen' ) }
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
                                    { value: null, label: __('', 'webkompanen') },
                                    { value: 'start', label: __('Start', 'webkompanen') },
                                    { value: 'end', label: __('End', 'webkompanen') },
                                    { value: 'center', label: __('Center', 'webkompanen') },
                                    { value: 'between', label: __('Between', 'webkompanen') },
                                    { value: 'around', label: __('Around', 'webkompanen') },
                                    { value: 'evenly', label: __('Evenly', 'webkompanen') }
                                ] }
                            />
						</div>
					</div>
				</PanelBody>
		}
		{
			breakpoint && breakpoint == 'md' &&	
				<PanelBody
					title={__('Justify content', 'webkompanen')}
					initialOpen={false}
				>
					<div 
						className="row"
					>
						<div
							className="col-12"
						>
                            <SelectControl
                                label={ __( 'md', 'webkompanen' ) }
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
                                    { value: null, label: __('', 'webkompanen') },
                                    { value: 'start', label: __('Start', 'webkompanen') },
                                    { value: 'end', label: __('End', 'webkompanen') },
                                    { value: 'center', label: __('Center', 'webkompanen') },
                                    { value: 'between', label: __('Between', 'webkompanen') },
                                    { value: 'around', label: __('Around', 'webkompanen') },
                                    { value: 'evenly', label: __('Evenly', 'webkompanen') }
                                ] }
                            />
						</div>
					</div>
				</PanelBody>
		}
		{
			breakpoint && breakpoint == 'lg' &&	
				<PanelBody
					title={__('Justify content', 'webkompanen')}
					initialOpen={false}
				>
					<div 
						className="row"
					>
						<div
							className="col-12"
						>
                            <SelectControl
                                label={ __( 'lg', 'webkompanen' ) }
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
                                    { value: null, label: __('', 'webkompanen') },
                                    { value: 'start', label: __('Start', 'webkompanen') },
                                    { value: 'end', label: __('End', 'webkompanen') },
                                    { value: 'center', label: __('Center', 'webkompanen') },
                                    { value: 'between', label: __('Between', 'webkompanen') },
                                    { value: 'around', label: __('Around', 'webkompanen') },
                                    { value: 'evenly', label: __('Evenly', 'webkompanen') }
                                ] }
                            />
						</div>
					</div>
				</PanelBody>
		}
		{
			breakpoint && breakpoint == 'xl' &&	
				<PanelBody
					title={__('Justify content', 'webkompanen')}
					initialOpen={false}
				>
					<div 
						className="row"
					>
						<div
							className="col-12"
						>
							<SelectControl
                                label={ __( 'xl', 'webkompanen' ) }
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
                                    { value: null, label: __('', 'webkompanen') },
                                    { value: 'start', label: __('Start', 'webkompanen') },
                                    { value: 'end', label: __('End', 'webkompanen') },
                                    { value: 'center', label: __('Center', 'webkompanen') },
                                    { value: 'between', label: __('Between', 'webkompanen') },
                                    { value: 'around', label: __('Around', 'webkompanen') },
                                    { value: 'evenly', label: __('Evenly', 'webkompanen') }
                                ] }
                            />
						</div>
					</div>
				</PanelBody>
		}
		{
			breakpoint && breakpoint == 'xxl' &&
				<PanelBody
					title={__('Justify content', 'webkompanen')}
					initialOpen={false}
				>
					<div 
						className="row"
					>
						<div
							className="col-12"
						>
							<SelectControl
                                label={ __( 'xxl', 'webkompanen' ) }
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
                                    { value: null, label: __('', 'webkompanen') },
                                    { value: 'start', label: __('Start', 'webkompanen') },
                                    { value: 'end', label: __('End', 'webkompanen') },
                                    { value: 'center', label: __('Center', 'webkompanen') },
                                    { value: 'between', label: __('Between', 'webkompanen') },
                                    { value: 'around', label: __('Around', 'webkompanen') },
                                    { value: 'evenly', label: __('Evenly', 'webkompanen') }
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