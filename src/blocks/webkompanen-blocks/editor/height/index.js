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
    ButtonGroup,
	Button,
	ResponsiveWrapper,
	ColorPalette,
	__experimentalInputControl as InputControl,
	__experimentalBoxControl as BoxControl,
	Toolbar
} from '@wordpress/components';

import { Units } from '../../utilities/units';

//function MarginEdit( props )
const HeightEdit = (props)=> {

	const {
		attributes,
		setAttributes,
		className,
		clientId
	} = props.props;
	
	return(
		<PanelBody
			title={__('Height', 'awp')}
			initialOpen={false}
		>
            <SelectControl
                label={ __( 'Height' ) }
                value={ attributes.bsheight } // e.g: value = [ 'a', 'c' ]
                onChange={ 
                    ( nextSelect ) => {
                        if ( nextSelect ) {
                            setAttributes(
                                {
                                    bsheight:nextSelect
                                }
                            )
                        }
                    }
                }
                options={ [
                    { value: null, label: '' },
                    { value: 'height-10', label: 'Height 10' },
                    { value: 'height-20', label: 'Height 20' },
                    { value: 'height-30', label: 'Height 30' },
                    { value: 'height-40', label: 'Height 40' },
                    { value: 'height-50', label: 'Height 50' },
                    { value: 'height-60', label: 'Height 60' },
                    { value: 'height-70', label: 'Height 70' },
                    { value: 'height-80', label: 'Height 80' },
                    { value: 'height-90', label: 'Height 90' },
                    { value: 'height-100', label: 'Height 100' }
                ] }
            />
		</PanelBody>
	)
}

export default HeightEdit;