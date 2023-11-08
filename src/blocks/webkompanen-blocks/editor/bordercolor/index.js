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

import { Colors } from '../../utilities/colors';
//function MarginEdit( props )
const BordercolorEdit = (props)=> {
	
	const {
		attributes,
		setAttributes,
		className,
		clientId
	} = props.props;
	
	const colors = new Colors;
	
	return(
		<PanelBody
			title={__('Border kleur', 'awp')}
			initialOpen={false}
		>
			<ColorPalette
				colors={ colors.get() }
				value={ attributes.bordercolor ? 'var(--bs-'+attributes.bordercolor+')' : '' }
				style={{width: "200px" }}
				className='bootstrap-colors'
				onChange={ 
					( newColor ) => {
						setAttributes({
							bordercolor: newColor ? getColorObjectByColorValue( colors.get(), newColor ).name : null
						})
					} 
				}
				disableCustomColors={ true }
				clearable={ true }
			/>
			<SelectControl
				label={ __( 'Tint & shade' ) }
				value={ attributes.tintshade } // e.g: value = [ 'a', 'c' ]
				onChange={ 
					( nextSelect ) => {
						setAttributes({
							tintshade:Number(nextSelect)
						}) 
					} 
				}
				options={ [
					{ value: null, label: '' },
					{ value: 100, label: '100' },
					{ value: 200, label: '200' },
					{ value: 300, label: '300' },
					{ value: 400, label: '400' },
					{ value: 500, label: '500' },
					{ value: 600, label: '600' },
					{ value: 700, label: '700' },
					{ value: 800, label: '800' },
					{ value: 900, label: '900' },
				] }
			/>
		</PanelBody>
	)
}

export default BordercolorEdit;