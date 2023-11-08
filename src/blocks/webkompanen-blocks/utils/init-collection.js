/**
 * WordPress dependencies
 */
import { registerBlockCollection } from '@wordpress/blocks';

/**
 * Function to register an individual block.
 *
 * @param {Object} block The block to be registered.
 *
 * @return {?WPBlockType} The block, if it has been successfully registered;
 *                        otherwise `undefined`.
 */
export default function initCollection( collection ) {
	if ( ! collection ) {
		return;
	}
	const { metadata, name } = collection;
	
	return registerBlockCollection(
		name, 
		metadata
	);
}