/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { 
	applyFormat,
	removeFormat,
	insert,
	insertObject,
	useAnchor
} from '@wordpress/rich-text';

import { 
	useSelect, useDispatch
} from '@wordpress/data';
import { 
	RichTextToolbarButton,
	__experimentalLinkControl as LinkControl,
	URLPopover,
	RichText
} from '@wordpress/block-editor';
import { 
	Popover,
	Button
} from '@wordpress/components';
import { 
	useState
} from '@wordpress/element';
import { 
	Icon 
} from '@wordpress/icons';

import {
	fontawesome,
} from '../../icons'

import '../../styles/editor.scss';

const fontawesomeicon = 'webkompanen-blocks/fontawesomeicon';

import fontawasomeicons from '../../blocks/i/icons.json'

const UrlButton = ( props ) => {
	const { contentRef, isActive, onChange, value } = props;
    const { activeFormats } = value;
    const anchorRef = useAnchor( { ref: contentRef, value } );
		
	// State to show popover.
    const [ showPopover, setShowPopover ] = useState( false );
    const [ inputVal, setInputVal ] = useState( '' );
    const [ activeFontAwesomeIcon, setFontAwesomeIcon ] = useState( '' );
	let curlink, curtarget, currel
	// Function to get active colour from format.
    const getFontAwesomeIcon = () => {
		if(activeFormats){
        	const formats = activeFormats.filter( format => fontawesomeicon === format['type'] );

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
        	const formats = activeFormats.filter( format => fontawesomeicon === format['type'] );

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
					if ( atts.target ) {
						setActiveTarget(atts.target)
					}
					if ( atts.href) {
						setFontAwesomeIcon(atts.href)
					}
					if ( atts.rel) {
						setActiveRel(atts.rel)
					}
            	} 
        	}   
		}     
    };

	const getCurrentValues= () => {
		if(activeFormats){
        	const formats = activeFormats.filter( format => fontawesomeicon === format['type'] );

        	if ( formats.length > 0 ) {
            	const format = formats[0];
            	const { attributes, unregisteredAttributes } = format;

            	let atts = unregisteredAttributes;

            	if ( attributes && attributes.length ) {
                	atts = attributes;
            	}

            	// If we have no attributes, use the active colour.
				
            	if ( ! atts ) {
					return {
						url: null,
						target: false
					}
            	}

            	if ( atts ) {

					return {
						url: atts.href ? atts.href : '',
						target: atts.target === '_blank' ? true : false
					}
            	} 
        	}   
		}     
    };

	const showIcons= () => {

		let iconArrayTest = []

		Object.keys(fontawasomeicons).map(
			(fontawasomeicon, index) => {
				if(fontawasomeicon){
					if(fontawasomeicons[fontawasomeicon]['free'].length > 0)(
						fontawasomeicons[fontawasomeicon]['free'].map(
							(free, i) => {
							iconArrayTest.push({
								value: fontawasomeicon, 
								label: fontawasomeicons[fontawasomeicon]['label'], 
								group:free, 
								name:fontawasomeicon,
								id: (index+1)+i
							})
							}
						)
					)
				}
			}
		)

		iconArrayTest.forEach(element => {
			return(
				<i className={`fa-${element.group} fa-${element.value}`}></i>
			)
		});

	}

	const searchIcons=()=>{

		let iconArrayTest = []

		Object.keys(fontawasomeicons).map(
			(fontawasomeicon, index) => {
				if(fontawasomeicon){
					if(fontawasomeicons[fontawasomeicon]['free'].length > 0)(
						fontawasomeicons[fontawasomeicon]['free'].map(
							(free, i) => {
								iconArrayTest.push(
									<div 
										id={ (index+1)+i } 
										className='fontawasome-label d-none'
										data-name={fontawasomeicons[fontawasomeicon]['label']}
									>
											<i 
												className={`fa-${free} fa-${fontawasomeicon}`}
												data-icon-class={fontawasomeicon}
												data-icon-group={free}
												onClick={
													(e)=>{
														const attributes  = {};
														setShowPopover(false)
														attributes.class = 'fa-'+e.target.getAttribute('data-icon-group')+' fa-'+e.target.getAttribute('data-icon-class')+''
														onChange(
															insertObject( 
															value, 
															{
                                    								type: fontawesomeicon,
                                    								attributes,
                                								},
																value.start,
																value.end
                            								)
														)
													}
												}
											> 
												{fontawasomeicon}
											</i>
									</div>
								)
							}
						)
					)
				}
			}
		)

		return(
			<div 
				className="autocomplete" 
				style={
					{
						'width':'300px'
					}
				}
			>
				<input 
					id="fontawesomeInput" 
					type="text"
					name="fontawesome" 
					placeholder="Fontawesome icon"
					onChange={
						(e)=>{
							console.log('e.target.value')
							console.log(e.target.value)
							var fontawasomelabel = document.querySelectorAll('.fontawasome-label')
							
							for(var i=0; i < fontawasomelabel.length; i++)(
								
								fontawasomelabel[i].getAttribute('data-name').toLocaleLowerCase().indexOf(''+e.target.value.toLocaleLowerCase()+'') > -1 ? (
									fontawasomelabel[i].classList.contains('d-none') ? fontawasomelabel[i].classList.remove('d-none') : ''
								):
								(
									fontawasomelabel[i].classList.contains('d-none') ? '' : fontawasomelabel[i].classList.add('d-none')
								)
							)
						}
					}
				/>
				<div 
					id="fontawesomeAutocomplete-list" 
					className="autocomplete-items"
				>
					{
						iconArrayTest
					}
				</div>
			</div>
		)
	}
	const getIcons= () => {
		let iconArray = []

		Object.keys(fontawasomeicons).map(
			(fontawasomeicon, index) => {
				if(fontawasomeicon){
					if(fontawasomeicons[fontawasomeicon]['free'].length > 0)(
						fontawasomeicons[fontawasomeicon]['free'].map(
							(free, i) => {
							iconArray.push({
								value: fontawasomeicon, 
								label: fontawasomeicons[fontawasomeicon]['label'], 
								group:free, 
								name:fontawasomeicon,
								id: (index+1)+i
							})
							}
						)
					)
				}
			}
		)

		const autoConfigs = [
			{
				name: "Autocomplete",
				// The prefix that triggers this completer
				triggerPrefix: "/",
				value: "",
				// The option data
				options: iconArray,
				// Returns a label for an option like "🍊 Orange"
				getOptionLabel: option => (
					<span>
						<i className={`fa-${option.group} fa-${option.value}`} /> { option.label }
					</span>
				),
				// Declares that options should be matched by their name or value
				getOptionKeywords: option => [ option.label, option.value ],
				// Declares that the Grapes option is disabled
				getOptionCompletion: option => (
					<i className={`fa-${option.group} fa-${option.value}`}></i>
				),
			}
		];

		return(
			<RichText
				autocompleters={ autoConfigs }
				value={inputVal}
				style={
					{
						width:'200px'
					}
				}
				placeholder={ __(`Type ${autoConfigs[0].triggerPrefix} to choose a ${autoConfigs[0].value}`) }
			/>
		)
	}
		
	const hasFontAwesomeIcon = getFontAwesomeIcon();
		
	const bgcolorurl = hasFontAwesomeIcon ? '#000000' : '#ffffff'
	const colorurl = hasFontAwesomeIcon ? '#ffffff' : '#000000'
		
	//style={ getActiveColor() }
    return (
		<>
        	<RichTextToolbarButton
				icon={
                	<>
                    	<Icon 
							icon={
								hasFontAwesomeIcon ? fontawesome : fontawesome 
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
            	title=""
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
					<div>
						{searchIcons()}
					</div>
      			</Popover>
    		) }
		</>
    );
};

export default UrlButton;
