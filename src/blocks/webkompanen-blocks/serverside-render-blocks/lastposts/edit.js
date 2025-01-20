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

	const posttypes = useSelect( ( select ) => select('core').getPostTypes( { per_page: -1 } ) );
	//.getTaxonomies( { type: 'post' } )
	const tagtypes = useSelect( ( select ) => select( 'core' ).getTaxonomies( { per_page: -1 } ) );

	
	const selectterms = useSelect( 
		( select ) =>
			select( 'core' ).getEntityRecords( 
				'taxonomy', 
				(''+attributes.tag_type+''), {
					per_page: -1, 
					orderby: 'name', 
					order: 'asc', 
					_fields: 'name,slug,id' 
				}
			)
    );

	console.log('posttypes')
	console.log(posttypes)
	
	console.log('terms')
	console.log(tagtypes)

	console.log('selectterms')
	console.log(selectterms)

	let posttypelist = [];

	let tagtypelist = [];

	let termlist = [];

	if(posttypes){
		posttypelist.push({
			value: null, label: ''
		})
		posttypes.forEach(element => {
			if(element.visibility.show_in_nav_menus){
				posttypelist.push({
					value: element.slug, label: element.name
				})
			}
		});
	}
	if(!posttypes){
		posttypelist.push({
			value: '', label: ''
		})
	}
	
	if(tagtypes){
		tagtypelist.push({
			value: '', label: ''
		})
		tagtypes.forEach(element => {
			if(element.visibility.show_in_nav_menus){
				tagtypelist.push({
					value: element.slug, label: element.name
				})
			}
		});
	}
	if(!tagtypes){
		tagtypelist.push({
			value: '', label: ''
		})
	}
	
	if(selectterms){
		termlist.push({
			value: '', label: ''
		})
		selectterms.forEach(element => {
			termlist.push({
				value: element.slug, label: element.name
			})
		});
	}
	if(!selectterms){
		termlist.push({
			value: '', label: ''
		})
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
					<PanelBody
						title={__('Settings', 'webkompanen')}
						initialOpen={false}
					>
						<SelectControl
							label={ __( 'Post type', 'webkompanen' ) }
							value={ attributes.post_type } // e.g: value = [ 'a', 'c' ]
							onChange={ 
							( nextSelect ) => {
								setAttributes(
									{
										post_type:nextSelect
									}
								)
							}
						}
							options={ posttypelist }
						/>
						<SelectControl
							label={ __( 'Taxonomie', 'webkompanen' ) }
							value={ attributes.tag_type } // e.g: value = [ 'a', 'c' ]
							onChange={ 
							( nextSelect ) => {
								setAttributes(
									{
										tag_type:nextSelect
									}
								)
							}
						}
							options={ tagtypelist }
						/>
						<SelectControl
							label={ __( 'Terms', 'webkompanen' ) }
							value={ attributes.tags } // e.g: value = [ 'a', 'c' ]
							onChange={ 
							( nextSelect ) => {
								setAttributes(
									{
										tags:nextSelect
									}
								)
							}
						}
							options={ termlist }
						/>
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
						<ToggleControl
							label={__('Show as list', 'webkompanen')}
							help={ attributes.showaslist ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
							checked={ attributes.showaslist }
							onChange={ 
								(e) => {
									setAttributes({
										showaslist: ! attributes.showaslist
									})
								}
							}
						/>
						<ToggleControl
							label={__('Show post thumbnails', 'webkompanen')}
							help={ attributes.showpostthumbnail ? __('Yes.', 'webkompanen') : __('No.', 'webkompanen') }
							checked={ attributes.showpostthumbnail }
							onChange={ 
								(e) => {
									setAttributes({
										showpostthumbnail: ! attributes.showpostthumbnail
									})
								}
							}
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
        			block="webkompanen-blocks/lastposts"
        			attributes={ {
            			number_of_items: attributes.number_of_items,
            			title: attributes.title,
            			post_type: attributes.post_type,
            			tag_type: attributes.tag_type,
            			wrapper: attributes.wrapper,
						showpostthumbnail: attributes.showpostthumbnail,
						showaslist: attributes.showaslist,
						colxs: attributes.colxs,
						colsm: attributes.colsm,
						colmd: attributes.colmd,
						collg: attributes.collg,
						colxl: attributes.colxl,
						colxxl: attributes.colxxl,
						tags: attributes.tags
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