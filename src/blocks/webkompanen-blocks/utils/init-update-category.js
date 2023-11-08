/**
 * WordPress dependencies
 */
import { updateCategory } from '@wordpress/blocks';

/**
 * Function to register an individual block.
 *
 * @param {Object} block The block to be registered.
 *
 * @return {?WPBlockType} The block, if it has been successfully registered;
 *                        otherwise `undefined`.
 */
export default function initCategory( update ) {
	if ( ! update ) {
		return;
	}
	const { metadata, name } = update;
	
	return updateCategory(
		name, 
		metadata
	);
}