/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { 
	useInnerBlocksProps, 
	InnerBlocks,
	RichText,
	useBlockProps 
} from '@wordpress/block-editor';

function sectionSave( props ) {
	const {
		attributes
	} = props;
	return(
		<>
			<RichText.Content 
				value={attributes.content} 
				className={attributes.classes} 
				tagName="span" 
			/>
		</>
	)

}

export default sectionSave;