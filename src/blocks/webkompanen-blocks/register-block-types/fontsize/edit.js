/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { 
	toggleFormat,
	applyFormat,
	removeFormat,
	useAnchor
} from '@wordpress/rich-text';
import { 
	RichTextToolbarButton,
	URLPopover,
	ColorPalette,
	getColorObjectByColorValue
} from '@wordpress/block-editor';
import { 
	SelectControl,
	Popover,
} from '@wordpress/components';
import { 
	useState
} from '@wordpress/element';
import { 
	Icon 
} from '@wordpress/icons';
import {
	BootstrapCollors
} from '../../utils/bootstrap-colors'
import {
	text
} from '../../icons'

const webkompanenblocksfontsize = 'webkompanen-blocks/fontsize';


const ColorButton = ( props ) => {
	const { contentRef, isActive, onChange, value } = props;
    const { activeFormats } = value;
    const anchorRef = useAnchor( { ref: contentRef, value } );
		
	// State to show popover.
    const [ showPopover, setShowPopover ] = useState( false );
    const [ activeFontSize, setActiveFontSize ] = useState( false );
		
	// Function to get active colour from format.
    const getActiveFontSize = () => {
		if(activeFormats){
			const formats = activeFormats.filter( format => webkompanenblocksfontsize === format['type'] );

        	if ( formats.length > 0 ) {
            	const format = formats[0];
            	const { attributes, unregisteredAttributes } = format;

            	let atts = unregisteredAttributes;

            	if ( attributes && attributes.length ) {
                	atts = attributes;
            	}

            	// If we have no attributes, use the active colour.
            	if ( ! atts ) {
                	if ( activeFontSize ) {
						const selectedFontSize = activeFontSize
                    	return selectedFontSize;
						//return { backgroundColor: activeFontSize };
					}
                	return;
            	}

            	if ( atts.hasOwnProperty('class') ) {
                	// If the format has set a colour via the class.
                	const selectedFontSize = atts.class
					
                	//return { backgroundColor: selectedColor.color };
                	return selectedFontSize;
            	} 
			}   
		}     
    };
		
		
	const activefontsize = getActiveFontSize();
		
	const bgcolor = activefontsize == '' ? '#000000' : '#ffffff';
	const color = activefontsize == '' ? '#ffffff' : '#000000';
	
	//style={ getActiveColor() }
    return (
		<>
        	<RichTextToolbarButton
				icon={
                	<>
                    	<Icon 
							icon={ text } 
							style={
								{
										background:bgcolor
								}
							}
							className={ color }
						/>
                    	{ 
							isActive && (
                        		<span
                            		className={'format-library-text-color-button__indicator'}
                        		/>
                    		)
						}
                	</>
            	}
            	title={__('', 'webkompanen')}
				style={
					{
						background: bgcolor
					}
				}
            	onClick={ 
					() => {
						setShowPopover( true );
            		} 
				}
            	key={ isActive ? 'text-color-not-active' : 'text-color-not-active' }
            	name={ isActive ? undefined : undefined }
            	isActive={ isActive }
        	/>
			{ showPopover && (
				<Popover
			 		anchor={ anchorRef }
			 		anchorRef={ anchorRef }
        			className="components-inline-color-popover"
        			onClose={ () => setShowPopover( false ) }
        		>
					<SelectControl
						label={ __( 'Font size', 'webkompanen' ) }
						value={ activefontsize } // e.g: value = [ 'a', 'c' ]
						onChange={ 
							( nextSelect ) => {
								if ( nextSelect ) {
									const attributes  = {};
									attributes.class = nextSelect
									setActiveFontSize(nextSelect)
									onChange( 
										applyFormat( 
											value, {
												type: webkompanenblocksfontsize,
												attributes,
											} 
										)
									);
								}
								else{
									onChange( 
										toggleFormat(
											value, {
												type: webkompanenblocksfontsize 
											} 
										) 
									);
								}
							} 
						}
						options={ [
							{ value: '', label: __('', 'webkompanen') },
							{ value: 'fs-xx-small', label: __('fs-xx-small', 'webkompanen') },
							{ value: 'fs-x-small', label: __('fs-x-small', 'webkompanen') },
							{ value: 'fs-1', label: __('fs-1', 'webkompanen') },
							{ value: 'fs-2', label: __('fs-2', 'webkompanen') },
							{ value: 'fs-3', label: __('fs-3', 'webkompanen') },
							{ value: 'fs-4', label: __('fs-4', 'webkompanen') },
							{ value: 'fs-5', label: __('fs-5', 'webkompanen') },
							{ value: 'fs-5', label: __('fs-6', 'webkompanen') },
							{ value: 'fs-x-large', label: __('fs-x-large', 'webkompanen') },
							{ value: 'fs-xx-large', label: __('fs-xx-large', 'webkompanen') },
							{ value: 'fs-xxx-large', label: __('fs-xxx-large', 'webkompanen') }
						] }
					/>
      			</Popover>
    		) }
		</>
    );
};

export default ColorButton;
