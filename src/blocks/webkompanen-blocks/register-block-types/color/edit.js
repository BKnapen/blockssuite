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
	filldrip
} from '../../icons'

const webkompanenblockscolor = 'webkompanen-blocks/color';


const ColorButton = ( props ) => {
	const { contentRef, isActive, onChange, value } = props;
    const { activeFormats } = value;
    const anchorRef = useAnchor( { ref: contentRef, value } );
		
	// State to show popover.
    const [ showPopover, setShowPopover ] = useState( false );
    const [ activeColor, setActiveColor ] = useState( false );
		
	// Function to get active colour from format.
    const getActiveColor = () => {
		if(activeFormats){
			const formats = activeFormats.filter( format => webkompanenblockscolor === format['type'] );

        	if ( formats.length > 0 ) {
            	const format = formats[0];
            	const { attributes, unregisteredAttributes } = format;

            	let atts = unregisteredAttributes;

            	if ( attributes && attributes.length ) {
                	atts = attributes;
            	}

            	// If we have no attributes, use the active colour.
            	if ( ! atts ) {
					
                	if ( activeColor ) {
                		const colorName = activeColor;
						const selectedColor = BootstrapCollors.filter( item => colorName === item.text.toLowerCase() )[0];
                    	return selectedColor.mark;
						//return { backgroundColor: activeColor };
					}
                	return;
            	}

            	if ( atts.hasOwnProperty('class') ) {
                	// If the format has set a colour via the class.
                	const parts = atts.class.split( '--' );
                	const colorName = parts[ parts.length - 1 ];
                	const selectedColor = BootstrapCollors.filter( item => colorName === item.text.toLowerCase() )[0];
					
                	//return { backgroundColor: selectedColor.color };
                	return selectedColor.mark;
            	} 
				else if ( atts.hasOwnProperty('style') ) {
					// If the format has set a colour via an inline style.
                	const { style } = atts;
                	const parts = style.split( ': ' );
                	const selectedColor = parts[ parts.length - 1 ].replace( ';', '' );
                	return { backgroundColor: selectedColor };
            	}
			}   
		}     
    };
		
		
	const fillcolor = getActiveColor();
		
	const bgcolor = fillcolor == '' ? '#000000' : fillcolor;
	const color = fillcolor == '' ? 'text-bg-black' : fillcolor;
	
	//style={ getActiveColor() }
    return (
		<>
        	<RichTextToolbarButton
				icon={
                	<>
                    	<Icon 
							icon={ filldrip } 
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
						background: fillcolor
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
        			<ColorPalette
						colors={ BootstrapCollors }
						className='bootstrap-colors'
						value={ color ? color : '' }
						disableCustomColors={ true }
						clearable={ true }
    					onChange={ 
							( newColor ) => {
      							setShowPopover( false );
								if ( newColor ) {
									setActiveColor( getColorObjectByColorValue( BootstrapCollors, newColor ).text );
								}
								else{
									setActiveColor(newColor)
								}
							
      							if ( newColor ) {
									const selectedColor = BootstrapCollors.filter( item => newColor === item.color );
                            		const attributes  = {};
                            		if ( selectedColor.length ) {
                                		// Colour exists in custom colours, apply a class.
                                		attributes.class = selectedColor[0].text.toLowerCase();
                            		} 
                            		onChange( 
                                		applyFormat( 
											value, {
                                    			type: webkompanenblockscolor,
                                    			attributes,
                                			} 
                            			)
									);
      							} 
								else {
        							onChange( 
										toggleFormat(
											value, {
												type: webkompanenblockscolor 
											} 
										) 
									); // Remove Format.
      							}
							} 
						}
    				/>
      			</Popover>
    		) }
		</>
    );
};

export default ColorButton;
