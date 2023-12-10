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
			title={__('Height', 'webkompanen')}
			initialOpen={false}
		>
            <SelectControl
                label={ __( 'Height', 'webkompanen' ) }
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
                    { value: null, label: __('', 'webkompanen') },
                    { value: 'height-10', label: __('Height 10', 'webkompanen') },
                    { value: 'height-20', label: __('Height 20', 'webkompanen') },
                    { value: 'height-30', label: __('Height 30', 'webkompanen') },
                    { value: 'height-40', label: __('Height 40', 'webkompanen') },
                    { value: 'height-50', label: __('Height 50', 'webkompanen') },
                    { value: 'height-60', label: __('Height 60', 'webkompanen') },
                    { value: 'height-70', label: __('Height 70', 'webkompanen') },
                    { value: 'height-80', label: __('Height 80', 'webkompanen') },
                    { value: 'height-90', label: __('Height 90', 'webkompanen') },
                    { value: 'height-100', label: __('Height 100', 'webkompanen') }
                ] }
            />
		</PanelBody>
	)
}

export default HeightEdit;