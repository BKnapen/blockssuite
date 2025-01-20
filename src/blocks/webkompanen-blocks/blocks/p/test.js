import { store as coreDataStore } from '@wordpress/core-data';
import {store as editorStore } from '@wordpress/block-editor';
import {__} from '@wordpress/i18n';
import { label } from '../../icons';
const { lock, unlock } = ' '

function getPostMetaFields( select, context ) {
	const { getEditedEntityRecord } = select( coreDataStore );
	const { getRegisteredPostMeta } = select( coreDataStore );

	let entityMetaValues;
	// Try to get the current entity meta values.
	if ( context?.postType && context?.postId ) {
		entityMetaValues = getEditedEntityRecord(
			'postType',
			context?.postType,
			context?.postId
		).meta;
	}

	const registeredFields = getRegisteredPostMeta( context?.postType );
	const metaFields = {};
	Object.entries( registeredFields || {} ).forEach( ( [ key, props ] ) => {
		// Don't include footnotes or private fields.
		if ( key !== 'footnotes' && key.charAt( 0 ) !== '_' ) {
			metaFields[ key ] = {
				label: props.title || key,
				value:
					// When using the entity value, an empty string IS a valid value.
					entityMetaValues?.[ key ] ??
					// When using the default, an empty string IS NOT a valid value.
					( props.default || undefined ),
				type: props.type,
			};
		}
	} );

	if ( ! Object.keys( metaFields || {} ).length ) {
		return null;
	}

	return metaFields;
}

export default {
    name: 'core/post-meta',
    label: __('Post Meta test', 'webkompanen'),
    getValues({select, context, binding}){
        console.log('getValues', select, context, binding)
        return {
            content: 'this is a post meta block'
        }
    },
    setValues({select, context, binding}){},
    canUserEditValue({select, context}){},
	getFieldsList( { select, context } ) {
		return getPostMetaFields( select, context );
	}
}