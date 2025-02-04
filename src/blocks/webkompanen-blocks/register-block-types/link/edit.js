/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { 
	applyFormat,
	removeFormat,
	useAnchor
} from '@wordpress/rich-text';

import { 
	useSelect, useDispatch
} from '@wordpress/data';
import { 
	RichTextToolbarButton,
	__experimentalLinkControl as LinkControl,
	URLPopover
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
	nolink,
	link
} from '../../icons'

const webkompanenblockshref = 'webkompanen-blocks/href';

const UrlButton = ( props ) => {
	const { contentRef, isActive, onChange, value } = props;
    const { activeFormats } = value;
    const anchorRef = useAnchor( { ref: contentRef, value } );
		
	// State to show popover.
    const [ showPopover, setShowPopover ] = useState( false );
    const [ activeLink, setActiveLink ] = useState( '' );
    const [ activeTarget, setActiveTarget ] = useState( `_self` );
    const [ activeRel, setActiveRel ] = useState( false );
	let curlink, curtarget, currel
	// Function to get active colour from format.
    const getActiveLink = () => {
		if(activeFormats){
        	const formats = activeFormats.filter( format => webkompanenblockshref === format['type'] );

        	if ( formats.length > 0 ) {
            	const format = formats[0];
            	const { attributes, unregisteredAttributes } = format;

            	let atts = unregisteredAttributes;

            	if ( attributes && attributes.length ) {
                	atts = attributes;
            	}

            	// If we have no attributes, use the active colour.
				
            	if ( ! atts ) {
                	return false;
            	}

            	if ( atts ) {
                	return true;
            	} 
        	}   
		}     
    };

	const getCurrentAttributes = () => {
		if(activeFormats){
        	const formats = activeFormats.filter( format => webkompanenblockshref === format['type'] );

        	if ( formats.length > 0 ) {
            	const format = formats[0];
            	const { attributes, unregisteredAttributes } = format;

            	let atts = unregisteredAttributes;

            	if ( attributes && attributes.length ) {
                	atts = attributes;
            	}

            	// If we have no attributes, use the active colour.
				
            	if ( ! atts ) {
            	}

            	if ( atts ) {
					if ( atts.target !== undefined) {
						setActiveTarget(atts.target)
					}
					if ( atts.href !== undefined) {
						setActiveLink(atts.href)
					}
					if ( atts.rel !== undefined) {
						setActiveRel(atts.rel)
					}
            	} 
        	}   
		}     
    };

	const getCurrentValues= () => {
		if(activeFormats){
        	const formats = activeFormats.filter( format => webkompanenblockshref === format['type'] );

        	if ( formats.length > 0 ) {
            	const format = formats[0];
            	const { attributes, unregisteredAttributes } = format;

            	let atts = unregisteredAttributes;

            	if ( attributes && !unregisteredAttributes ) {
                	atts = attributes;
            	}

            	// If we have no attributes, use the active colour.
				
            	if ( ! atts ) {
					return {
						url: null,
						target: false,
						rel: false
					}
            	}

            	if ( atts ) {

					return {
						url: atts.href ? atts.href : '',
						target: atts.target === '_blank' ? true : false,
						rel: atts.rel !== undefined && atts.rel !== `` ? true : false
					}
            	} 
        	}   
		}     
    };
		
		
	const haslink = getActiveLink();
		
	const bgcolorurl = haslink ? '#000000' : '#ffffff'
	const colorurl = haslink ? '#ffffff' : '#000000'
		
	//style={ getActiveColor() }
    return (
		<>
        	<RichTextToolbarButton
				icon={
                	<>
                    	<Icon 
							icon={
								haslink ? nolink : link 
							} 
							style={
								{
									background: bgcolorurl,
									color: colorurl
								}
							}
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
						background: bgcolorurl,
						color: colorurl
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
        			className="components-inline-color-popover linktest-popover"
        			onClose={ () => setShowPopover( false ) }
        		>
					
					<LinkControl
						className="bootstrap-linkcontrol"
						searchInputPlaceholder="Search here..."
						value={ getCurrentValues() }
						withUnlinkControl={ true }
						settings={
							[
								{
									id:'target',
									title: __('Open in new tab', 'webkompanen')
								},
								{
									id: 'rel',
									title: __('No follow link', 'webkompanen')
								}
							]
						}
						onRemove={
							()=>{
								setShowPopover(false)
								onChange(
									removeFormat(
										value,
										webkompanenblockshref,
										value.start,
										value.end
									)
								)
							}
						}
						onChange={ 
							(newPost) =>{
								if ( newPost ) {

									getCurrentAttributes()
							
									const attributes  = {};
									
									console.clear()

									if(newPost.url !== undefined){
										setActiveLink(newPost.url)
										attributes.href = ''+newPost.url+''
									}

									if(newPost.target !== undefined){
										newPost.target ? setActiveTarget(`_blank`) : setActiveTarget(`_self`)

										attributes.target = newPost.target ? `_blank` : `_self`
									}
									if(newPost.rel === false || newPost.rel === null || newPost.rel === undefined){
										setActiveRel(``)
										attributes.rel = false
										delete attributes.rel;

									}
									else{
										setActiveRel(`nofollow`)
										attributes.rel = `nofollow`
									}

									//attributes.rel = null

									onChange(
										applyFormat( 
											value, {
                                    			type: webkompanenblockshref,
                                    			attributes,
                                			} 
                            			),
										setShowPopover( false )
									)
										//setIsVisible( ( state ) => ! state )
								}
							}
						}
						withCreateSuggestion={true}
						createSuggestion={ 
							(inputValue) =>{
								if ( inputValue ) {

								}
							}
						}
						createSuggestionButtonText={ 
							(newValue) => { 
								newValue
							} 
						}
					>
					</LinkControl>
      			</Popover>
    		) }
		</>
    );
};

export default UrlButton;
