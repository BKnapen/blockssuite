import { attribute } from "postcss-selector-parser"

const { Button, BaseControl } = window.wp.components
const { MediaUpload, MediaUploadCheck } = window.wp.blockEditor
const { useSelect, useDispatch } = window.wp.data

const GalleryEdit = ( props ) => {

	const {
		attributes,
		setAttributes,
		className,
		clientId
	} = props.props;

	const onSelectMedia = (imageInfo) => {
		console.log(imageInfo)
		setAttributes({
			gallery: imageInfo,
			imageIds: imageInfo.map(({ id }) => id )
		});
	}

	return(
		<BaseControl label={ props.label }>
			<MediaUploadCheck>
				<MediaUpload
					onSelect={ onSelectMedia }
					allowedTypes={ [ 'image' ] }
					multiple="add"
					value={ attributes.imageIds }
					render={ ( { open } ) => (
						<div className="row g-3">
							{ !! attributes.gallery && attributes.gallery.length > 0 &&
								attributes.gallery.map( image => <div className="col-3"><img className="img-fluid" src={ image.url } /></div> )
							}
							<Button variant="secondary" onClick={ open }>Add images</Button>
						</div>

					) }
				/>
			</MediaUploadCheck>
		</BaseControl>
	)
}

export default GalleryEdit