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
	__experimentalLinkControlSearchInput as LinkControlSearchInput,
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
	Toolbar
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
	// Request data
    
	/*const posts = useSelect((select) => {
        return select('core').getEntityRecords('postType', 'page', {_embed: true});
    });*/
	
	const blockProps = useBlockProps( { className: 'alignfull' } );
	//https://wordpress.stackexchange.com/questions/367932/create-a-custom-render-appender-button-to-add-inner-blocks
	
	const [ isVisible, setIsVisible ] = useState( false );

	const toggleVisible = () => {
   		setIsVisible( ( state ) => ! state );
	}	

	const suggestionsRender = (props) => (
		<div className="components-dropdown-menu__menu">
			{ props.suggestions.map( ( suggestion, index ) => {
					return (
						<div onClick={ () => props.handleSuggestionClick( suggestion ) } className="components-button components-dropdown-menu__menu-item is-active has-text has-icon">{suggestion.title}</div>
					)
				} )
			}
		</div>
	)
	
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
					<div
						className='custom-link-control'
					>
					<LinkControl
						searchInputPlaceholder={__('Search here...', 'webkompanen')}
						value={ attributes.post }
						settings={[]}
						onChange={ 
							( newPost ) => setAttributes( { 
								post: newPost 
							} ) 
						}
						withCreateSuggestion={false}
						createSuggestion={ 
							(inputValue) => setAttributes( { 
								post: {
									...attributes.post,
									title: inputValue,
									type: "custom-url",
									id: Date.now(),
									url: inputValue
								} 
							} ) 
						}
						noDirectEntry={true}
						suggestionsQuery={ {
							type: 'post',
							subtype: 'courses',
						} }
						createSuggestionButtonText={ 
							(newValue) => `${__("New:")} ${newValue}` 
						}
					>
					</LinkControl>
					</div>
				</PanelBody>
			</InspectorControls>
		</Fragment>
		<div
			{...blockProps}
		>
			<ServerSideRender
        		block="webkompanen-blocks/woocommerce-add-to-cart-button"
        		attributes={ {
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