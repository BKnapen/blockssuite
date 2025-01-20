/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	input as icon
} from '../../icons'

/**
 * Internal dependencies
 */
import initBlock from '../../utils/init-block';
//import deprecated from './deprecated';
import metadata from './block.json';
import edit from './edit';
import save from './save';
//import variations from './variations';
//import transforms from './transforms';


const { name } = metadata;

export { metadata, name };

export const settings = {
	icon,
	edit,
	save
};

export const init = () => initBlock( { name, metadata, settings } );