/**
 * WordPress dependencies
 */
import {
	registerBlockType
	
} from '@wordpress/blocks';
import { 
	useEntityProp, 
	store as coreStore 
} from '@wordpress/core-data';
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
	ResizableBox,
	Popover,
	IconButton,
	Button,
	ResponsiveWrapper,
	Toolbar
} from '@wordpress/components';

function getMediaSourceUrlBySizeSlug( media, slug ) {
	return (
		media?.media_details?.sizes?.[ slug ]?.source_url || media?.source_url
	);
}

/*function HeaderEdit( props ) {*/
const postFeaturedImageEdit = (props) => {
	const {
		attributes,
		setAttributes,
		context: { postId, postType: postTypeSlug, queryId },
		className,
		clientId
	} = props;

	const {
		isLink,
		aspectRatio,
		height,
		width,
		scale,
		sizeSlug,
		rel,
		linkTarget,
	} = attributes;
	
	const isDescendentOfQueryLoop = Number.isFinite( queryId );

	const [ featuredImage, setFeaturedImage ] = useEntityProp(
		'postType',
		postTypeSlug,
		'featured_media',
		postId
	);

	const blockProps = useBlockProps( {
		style: { width, height, aspectRatio },
	} );

	const { media, postType, postPermalink } = useSelect(
		( select ) => {
			const { getMedia, getPostType, getEditedEntityRecord } =
				select( coreStore );
			return {
				media:
					featuredImage &&
					getMedia( featuredImage, {
						context: 'view',
					} ),
				postType: postTypeSlug && getPostType( postTypeSlug ),
				postPermalink: getEditedEntityRecord(
					'postType',
					postTypeSlug,
					postId
				)?.link,
			};
		},
		[ featuredImage, postTypeSlug, postId ]
	);
	const mediaUrl = getMediaSourceUrlBySizeSlug( media, sizeSlug );

	const imageSizes = useSelect(
		( select ) => select( blockEditorStore ).getSettings().imageSizes,
		[]
	);

	const imageSizeOptions = imageSizes
		.filter( ( { slug } ) => {
			return media?.media_details?.sizes?.[ slug ]?.source_url;
		} )
		.map( ( { name, slug } ) => ( {
			value: slug,
			label: name,
		} ) );

	let image;

	if ( ! featuredImage ) {

	}
	else{
		image = ! media ? (
			null
		) : (
			<img
				className=''
				src={ mediaUrl }
				alt={
					media.alt_text
						? sprintf(
								// translators: %s: The image's alt text.
								__( 'Featured image: %s' ),
								media.alt_text
						  )
						: __( 'Featured image' )
				}
			/>
		);
	}
	
	return(
		<>	
			{ image }
		</>
	)
}


/*export default withSelect((select, props) => {
	return { 
		headerImageInfo: attributes.headerImageId ? select('core').getMedia(attributes.headerImageId) : undefined
	};
})(HeaderEdit);*/

export default postFeaturedImageEdit;