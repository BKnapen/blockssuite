/**
 * WordPress dependencies
 */

import { 
	registerFormatType
} from '@wordpress/rich-text';

/**
 * Function to register an individual block.
 *
 * @param {Object} block The block to be registered.
 *
 * @return {?WPBlockType} The block, if it has been successfully registered;
 *                        otherwise `undefined`.
 */
export default function initFormatType( format ) {
	if ( ! format ) {
		return;
	}
	const { metadata, name } = format;
	return registerFormatType( 
		name,
		{  ...metadata } 
	);
}