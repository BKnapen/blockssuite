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
	Toolbar,
} from '@wordpress/components';

import ServerSideRender from '@wordpress/server-side-render';

/*function HeaderEdit( props ) {*/

const pagelistEdit = (props) => {
	const {
		attributes,
		setAttributes,
		className,
		clientId
	} = props;
	
	const blockProps = useBlockProps( { className: 'alignfull' } );	
	
	return(
		<>
			<Fragment>
				<InspectorControls>
					<PanelBody
						title={__('Inhoud', 'webkompanen')}
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
					<PanelBody
						title={__('Wrapper', 'webkompanen')}
						initialOpen={false}
					>
						<ToggleControl
							label={__('Wrapper', 'webkompanen')}
							help={ true ? '' : '' }
							checked={ attributes.wrapper }
							onChange={ 
								(e) => { 
									setAttributes({
										wrapper: ! attributes.wrapper 
									}) 
								}
							}
							style={
								{
									'margin-bottom': '0px'
								}
							}
						/>
					</PanelBody>
				</InspectorControls>
			</Fragment>
			<div
				{...blockProps}
			>
				<ServerSideRender
        			block="webkompanen-blocks/eventinfo"
        			attributes={ {
            			number_of_items: attributes.number_of_items,
            			title: attributes.title,
            			wrapper: attributes.wrapper
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