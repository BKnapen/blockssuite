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
            	title=""
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
						label={ __( 'Font size' ) }
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
							{ value: '', label: '' },
							{ value: 'fs-xx-small', label: 'fs-xx-small' },
							{ value: 'fs-x-small', label: 'fs-x-small' },
							{ value: 'fs-1', label: 'fs-1' },
							{ value: 'fs-2', label: 'fs-2' },
							{ value: 'fs-3', label: 'fs-3' },
							{ value: 'fs-4', label: 'fs-4' },
							{ value: 'fs-5', label: 'fs-5' },
							{ value: 'fs-5', label: 'fs-6' },
							{ value: 'fs-x-large', label: 'fs-x-large' },
							{ value: 'fs-xx-large', label: 'fs-xx-large' },
							{ value: 'fs-xxx-large', label: 'fs-xxx-large' }
						] }
					/>
      			</Popover>
    		) }
		</>
    );
};

export default ColorButton;
