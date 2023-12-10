/**
 * WordPress dependencies
 */
import { registerPlugin } from '@wordpress/plugins';
import { getPlugin } from '@wordpress/plugins';
/**
 * Function to register an individual block.
 *
 * @param {Object} block The block to be registered.
 *
 * @return {?WPBlockType} The block, if it has been successfully registered;
 *                        otherwise `undefined`.
 */
export default function initPlugin( plugin ) {
	if ( ! plugin ) {
		return;
	}
	const { settings, name } = plugin;
	if (!getPlugin(name)) {
		//console.log(name)
		return registerPlugin(
			name, 
			settings
		);
	}
}