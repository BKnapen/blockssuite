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
	__experimentalAlignmentMatrixControl as AlignmentMatrixControl,
	Toolbar
} from '@wordpress/components';

import { Units } from '../../utilities/units';

//function MarginEdit( props )
const PositionEdit = (props)=> {

	const {
		attributes,
		setAttributes,
		className,
		clientId
	} = props.props;
	
	return(
		<PanelBody
			title={__('Positie opties', 'awp')}
			initialOpen={false}
		>
			<div 
				className="row"
			>
				<div className="col-12">
					<SelectControl
						label={ __( 'position' ) }
						value={ attributes.position } // e.g: value = [ 'a', 'c' ]
						onChange={ 
							( nextSelect ) => {
								setAttributes( {
									position:nextSelect
								} ) 
							} 
						}
						options={ [
							{ value: null, label: '' },
							{ value: 'static', label: 'Static' },
							{ value: 'relative', label: 'Relative' },
							{ value: 'absolute', label: 'Absolute' },
							{ value: 'fixed', label: 'Fixed' },
							{ value: 'sticky', label: 'Sticky' }
						] }
					/>
					{
						attributes.position == 'absolute' || attributes.position == 'fixed' || attributes.position == 'sticky' ? (
							<AlignmentMatrixControl 
								value={attributes.positionalignment} 
								onChange={ 
									( nextAlignment ) => {
										setAttributes(
											{positionalignment:nextAlignment}
										)
									}
								} 
							/>
						)
						: null
					}
				</div>
			</div>
		</PanelBody>
	)
}

export default PositionEdit;