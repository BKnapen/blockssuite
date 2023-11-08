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
const CategoriesEdit = (props)=> {

	const {
		attributes,
		setAttributes,
		className,
		clientId
	} = props.props;

	const categories = useSelect(select =>
		select('core').getEntityRecords('taxonomy', 'courses_categories')
	);

	return(
		<PanelBody
			title={__('Categorie', 'awp')}
			initialOpen={false}
		>		
			<SelectControl
				label={__('Categorie')}
				options={
					categories.map(
						(name, index) => (
							{label: categories[index].name, value: categories[index].name}
						)
					)
				}
				onChange={ 
					( nextSelect ) => {
						setAttributes( {
							requestedcategorie:nextSelect
						} ) 
					} 
				}
				value={attributes.requestedcategorie}
			/>
		</PanelBody>
	)
}

export default CategoriesEdit;