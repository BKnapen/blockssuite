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
} from '@wordpress/editor';

import { 
	compose 
} from '@wordpress/compose';

import { Units } from '../../utilities/units';

//function MarginEdit( props,  breakpoint)
const RoundedEdit = (props) => {

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
			<PanelBody
				title={__('Rounded settings', 'webkompanen')}
				initialOpen={false}
			>
				<div 
					className="row"
				>
					<div className="col-12">
						<BoxControl
							values={ 
								{
									top: attributes.rounded.top,
									left: attributes.rounded.left,
									right: attributes.rounded.right,
									bottom: attributes.rounded.bottom
								} 
							}
							label={__('rounded', 'webkompanen')}
							units={units.get()}
							onChange={ 
								( nextValues ) => {
									wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
										selectedblockpropstest.clientId, { 
											rounded: nextValues 
										} 
									)	  
								} 
							}
						/>
						<ToggleControl
							label={__('Rounded circle', 'webkompanen')}
							help={ selectedblockpropstest.attributes.roundedcircle ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
							checked={ selectedblockpropstest.attributes.roundedcircle }
							onChange={ 
								(e) => {
									wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( 
										selectedblockpropstest.clientId, { 
											roundedcircle: ! selectedblockpropstest.attributes.roundedcircle
										} 
									)
								}
							}
						/>
					</div>
				</div>
			</PanelBody>
		</>
	)
}

export default RoundedEdit;