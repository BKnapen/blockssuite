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
const GuttersEdit = (props)=> {

	const {
		attributes,
		setAttributes,
		className,
		clientId
	} = props.props;
	
	const breakpoint = props.breakpoint ? props.breakpoint : null
	
    const { updateSelectedblockAttributes } = wp.data.dispatch( 'core/block-editor' );
	const selectedblockpropstest = wp.data.select( 'core/block-editor' ).getSelectedBlock();

	const units = new Units()
	
	return(
		<>
		{
			breakpoint && breakpoint == 'xs' &&	
				<PanelBody
					title={__('Gutter settings', 'webkompanen')}
					initialOpen={false}
				>
					<div 
						className="row"
					>
						<div className="col-12">
							<BoxControl
								values={ 
									{
										top: attributes.guttersxs.top,
										left: attributes.guttersxs.left
									} 
								}
								label={__('xs', 'webkompanen')}
								units={units.get()}
								onChange={ 
									( nextValues ) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												guttersxs: nextValues 
											} 
										)	  
									} 
								}
								sides={['top', 'left']}
							/>
						</div>
					</div>
				</PanelBody>
		}
		{
			breakpoint && breakpoint == 'sm' &&	
				<PanelBody
					title={__('Gutter settings', 'webkompanen')}
					initialOpen={false}
				>
					<div 
						className="row"
					>
						<div className="col-12">
							<BoxControl
								values={ 
									{
										top: attributes.gutterssm.top,
										left: attributes.gutterssm.left,
									} 
								}
								label={__('sm', 'webkompanen')}
								units={units.get()}
								onChange={ 
									( nextValues ) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												gutterssm: nextValues 
											} 
										)	  
									} 
								}
								sides={['top', 'left']}
							/>
						</div>
					</div>
				</PanelBody>
		}
		{
			breakpoint && breakpoint == 'md' &&	
				<PanelBody
					title={__('Gutter settings', 'webkompanen')}
					initialOpen={false}
				>
					<div 
						className="row"
					>
						<div className="col-12">
							<BoxControl
								values={ 
									{
										top: attributes.guttersmd.top,
										left: attributes.guttersmd.left
									} 
								}
								label={__('md', 'webkompanen')}
								units={units.get()}
								onChange={ 
									( nextValues ) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												guttersmd: nextValues 
											} 
										)		  
									} 
								}
								sides={['top', 'left']}
							/>
						</div>
					</div>
				</PanelBody>
		}
		{
			breakpoint && breakpoint == 'lg' &&	
				<PanelBody
					title={__('Gutter settings', 'webkompanen')}
					initialOpen={false}
				>
					<div 
						className="row"
					>
						<div className="col-12">
							<BoxControl
								values={ 
									{
										top: attributes.gutterslg.top,
										left: attributes.gutterslg.left
									} 
								}
								label={__('lg', 'webkompanen')}
								units={units.get()}
								onChange={ 
									( nextValues ) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												gutterslg: nextValues 
											} 
										)	  
									} 
								}
								sides={['top', 'left']}
							/>
						</div>
					</div>
				</PanelBody>
		}
		{
			breakpoint && breakpoint == 'xl' &&	
				<PanelBody
					title={__('Gutter settings', 'webkompanen')}
					initialOpen={false}
				>
					<div 
						className="row"
					>
						<div className="col-12">
							<BoxControl
								values={ 
									{
										top: attributes.guttersxl.top,
										left: attributes.guttersxl.left
									} 
								}
								label={__('xl', 'webkompanen')}
								units={units.get()}
								onChange={ 
									( nextValues ) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												guttersxl: nextValues 
											} 
										) 	  
									} 
								}
								sides={['top', 'left']}
							/>
						</div>
					</div>
				</PanelBody>
		}
		{
			breakpoint && breakpoint == 'xxl' &&	
				<PanelBody
					title={__('Gutter settings', 'webkompanen')}
					initialOpen={false}
				>
					<div 
						className="row"
					>
						<div className="col-12">
							<BoxControl
								values={ 
									{
										top: attributes.guttersxxl.top,
										left: attributes.guttersxxl.left
									} 
								}
								label={__('xxl', 'webkompanen')}
								units={units.get()}
								onChange={ 
									( nextValues ) => {
										wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
											selectedblockpropstest.clientId, { 
												guttersxxl: nextValues 
											} 
										) 	  
									} 
								}
								sides={['top', 'left']}
							/>
						</div>
					</div>
				</PanelBody>
		}
		</>
	)
}

export default GuttersEdit;