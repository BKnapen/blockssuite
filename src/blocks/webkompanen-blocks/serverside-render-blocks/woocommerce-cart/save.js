/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { 
	useInnerBlocksProps, 
	InnerBlocks,
	useBlockProps 
} from '@wordpress/block-editor';
import { 
	useEntityRecord
} from '@wordpress/core-data';
import { 
	useSelect, useDispatch, withSelect
} from '@wordpress/data';

function pagelistSave( props ) {
	const {
		attributes
	} = props;
	
	// Request data
	
	return null;

}
/*export default withSelect((select, props) => {
	return { 
		posts: select('core').getEntityRecords('postType', 'post')
	};
})(pagelistSave);*/
export default pagelistSave;