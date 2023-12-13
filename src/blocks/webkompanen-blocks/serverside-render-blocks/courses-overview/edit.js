/**
 * WordPress dependencies
 * https://awhitepixel.com/blog/how-to-add-post-meta-fields-to-gutenberg-document-sidebar/
 */
import {
	registerBlockType
	
} from '@wordpress/blocks';

import { 
	useSelect, useDispatch, withSelect
} from '@wordpress/data';
import { 
	useEntityRecord
} from '@wordpress/core-data';

import apiFetch from '@wordpress/api-fetch';

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
	getColorClassName,
	store as blockEditorStore
	
} from '@wordpress/block-editor';

import {
	link
} from '@wordpress/icons';

import {
	useState,
	useEffect,
	Fragment
} from '@wordpress/element';

import {
	__experimentalInputControl as InputControl,
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
	Toolbar
} from '@wordpress/components';

import ServerSideRender from '@wordpress/server-side-render';

/*function HeaderEdit( props ) {*/

const categoriestest = wp.data.select('core').getEntityRecords('taxonomy', 'courses_categories', {per_page: 100})

import CategoriesEdit from '../../editor/categories';

const pagelistEdit = (props) => {
	const {
		attributes,
		setAttributes,
		className,
		clientId
	} = props;
	// Request data
	
	console.log('attributes.requestedcategorie')
	console.log(attributes.requestedcategorie)
	
	const blockProps = useBlockProps( { className: 'alignfull' } );
	//https://wordpress.stackexchange.com/questions/367932/create-a-custom-render-appender-button-to-add-inner-blocks
	
	const [ isVisible, setIsVisible ] = useState( false );
	const toggleVisible = () => {
   		setIsVisible( ( state ) => ! state );
	}	
	
	return(
		<>
		<Fragment>
			<InspectorControls>
				<PanelBody
					title={__('Content', 'webkompanen')}
					initialOpen={false}
				>
					<InputControl
						label={__('Title', 'webkompanen')}
						labelPosition="top"
						value={attributes.title}
						type="text"
						isPressEnterToChange
						onChange={ ( nextValue ) => {
							setAttributes({
								 title: nextValue
							})
						}}
					/>
				</PanelBody>
				<CategoriesEdit
					props={props}
				/>
				<PanelBody
					title={__('Settings', 'webkompanen')}
					initialOpen={false}
				>
					<InputControl
						label={__('Number of posts', 'webkompanen')}
						labelPosition="top"
						value={attributes.number_of_items}
						type="number"
						isPressEnterToChange
						onChange={ ( nextValue ) => {
							setAttributes({
								 number_of_items: Number(nextValue)
							})
						}}
					/>	
				</PanelBody>
			</InspectorControls>
		</Fragment>
		<div
			{...blockProps}
		>
			<ServerSideRender
        		block="webkompanen-blocks/courses-overview"
        		attributes={ {
            		number_of_items: attributes.number_of_items,
            		title: attributes.title,
            		requestedcategorie: attributes.requestedcategorie
        		} }
				httpMethod="POST"
    		/>
		</div>
		</>
	)
}


/*export default withSelect((select, props) => {
	return { 
		posts: select('core').getEntityRecords('postType', 'post')
	};
})(pagelistEdit);

  			dangerouslySetInnerHTML={
				{
    				__html: htmlData?.content?.MyServerSideRender
  				}
			}
*/

export default pagelistEdit;