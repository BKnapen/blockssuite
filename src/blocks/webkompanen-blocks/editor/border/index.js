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
import { Colors } from '../../utilities/colors';
//function MarginEdit( props )
const BorderEdit = (props)=> {

	const {
		attributes,
		setAttributes,
		className,
		clientId
	} = props.props;
	const colors = new Colors;
	return(
		<PanelBody
			title={__('Border opties', 'awp')}
			initialOpen={false}
		>
			<div 
				className="row"
			>
				<div className="col-12">
					<ColorPalette
						colors={ colors.get() }
						value={ attributes.bordercolor ? 'var(--bs-'+attributes.bordercolor+')' : '' }
						style={{width: "200px" }}
						className='bootstrap-colors'
						onChange={ 
							( newColor ) => {
								setAttributes({
									bordercolor: getColorObjectByColorValue( colors.get(), newColor ).name
								})
							} 
						}
						disableCustomColors={ true }
						clearable={ true }
					/>
                    <ToggleControl
                        label="Border start?"
                        help={ attributes.borderstartxs ? 'Yes.' : 'No.' }
                        checked={ attributes.borderstartxs }
                        onChange={ 
                            (e) => {
                                setAttributes({
									borderstartxs: ! attributes.borderstartxs
								})
                            }
                        }
                    />
                    <ToggleControl
                        label="Border top?"
                        help={ attributes.bordertopxs ? 'Yes.' : 'No.' }
                        checked={ attributes.bordertopxs }
                        onChange={ 
                            (e) => {
                                setAttributes({
									bordertopxs: ! attributes.bordertopxs
								})
                            }
                        }
                    />
                    <ToggleControl
                        label="Border end?"
                        help={ attributes.borderendxs ? 'Yes.' : 'No.' }
                        checked={ attributes.borderendxs }
                        onChange={ 
                            (e) => {
                                setAttributes({
									borderendxs: ! attributes.borderendxs
								})
                            }
                        }
                    />
                    <ToggleControl
                        label="Border bottom?"
                        help={ attributes.borderbottomxs ? 'Yes.' : 'No.' }
                        checked={ attributes.borderbottomxs }
                        onChange={ 
                            (e) => {
                                setAttributes({
									borderbottomxs: ! attributes.borderbottomxs
								})
                            }
                        }
                    />
				</div>
			</div>
		</PanelBody>
	)
}

export default BorderEdit;