/**
 * WordPress dependencies
 */
import {
	registerBlockType
	
} from '@wordpress/blocks';
import { 
	useSelect, useDispatch, withSelect
} from '@wordpress/data';

import { 
	sprintf, __ 
} from '@wordpress/i18n';

import {
	__experimentalLinkControl as LinkControl,
	InnerBlocks,
	useBlockProps,
	BlockControls,
	MediaUpload, 
	MediaUploadCheck,
	InspectorControls,
	RichText,
	PanelColorSettings,
	withColors,
	useInnerBlocksProps,
	getColorClassName,
	getColorObjectByColorValue,
	store as blockEditorStore
	
} from '@wordpress/block-editor';

import {
	link,
	Icon
} from '@wordpress/icons';

import {
	useState,
	Fragment
} from '@wordpress/element';

import {
	openai as openai,
} from '../../icons'

import {
	TextareaControl,
	ToggleControl,
	PanelBody,
	PanelRow,
	CheckboxControl,
	SelectControl,
	ColorPicker,
	Popover,
	IconButton,
	Button,
	ResponsiveWrapper,
	Toolbar,
	ColorPalette,
	__experimentalInputControl as InputControl,
	__experimentalSpacer as Spacer
} from '@wordpress/components';

/* Utilities */

import { Margin } from '../../utilities/margin';
import { NegativeMargin } from '../../utilities/negativemargin';
import { Padding } from '../../utilities/padding';
import { Display } from '../../utilities/display';
import { Position } from '../../utilities/position';
import { Col } from '../../utilities/col';
import { Color } from '../../utilities/color';
import { Backgroundcolor } from '../../utilities/backgroundcolor';

/* Editors */

import ColorEdit from '../../editor/color';
import BackgroundcolorEdit from '../../editor/backgroundcolor';
import ColEdit from '../../editor/col';
import MarginEdit from '../../editor/margin';
import NegativeMarginEdit from '../../editor/negativemargin';
import PaddingEdit from '../../editor/padding';
import DisplayEdit from '../../editor/display';
import PositionEdit from '../../editor/position';

import { Colors } from '../../utilities/colors';

/*function HeaderEdit( props ) {*/
const paragraphEdit = (props) => {
	const [ outputChatGPT, setOutputChatGPT] = useState('');
	const [ promtValue, setPromtValue ] = useState( '' );
	const [ keyWordsColor, setKeyWordsColor ] = useState( null );
	const [ inProgress, setInProgress ] = useState( false );

	const {
		attributes,
		setAttributes,
		className,
		onChange,
		clientId
	} = props;
	
	const ALLOWED_BLOCKS = [ 
		'webkompanen/row'
	]

	const colors = new Colors;
	
	const hasInnerBlocks = useSelect( ( select ) =>
		select( blockEditorStore ).getBlocks( clientId ).length > 0,
		[ clientId ]
	);

	const chatGPTAPIKEY = wp.data.select( 'core' )
	
	const siteinfo = useSelect( ( select ) =>
		select('core').getSite()
	);
	
	const margin = new Margin(props)
	const negativemargin = new NegativeMargin(props)
	const padding = new Padding(props)
	const display = new Display(props)
	const position = new Position(props)
	const col = new Col(props)
	const color = new Color(props)
	const backgroundcolor = new Backgroundcolor(props)
	
	const classes = attributes.classes ? attributes.classes : ''
	
	let blockClasses = '';

	blockClasses += classes != null && classes != '' ? ' '+classes : ''
	blockClasses += backgroundcolor.classes() != null && backgroundcolor.classes() != '' ? ' '+backgroundcolor.classes() : ''
	blockClasses += color.classes() != null && color.classes() != '' ? ' '+color.classes() : ''
	blockClasses += margin.classes() != null && margin.classes() != '' ? ' '+margin.classes() : ''
	blockClasses += negativemargin.classes() != null && negativemargin.classes() != '' ? ' '+negativemargin.classes() : ''
	blockClasses += padding.classes() != null && padding.classes() != '' ? ' '+padding.classes() : ''
	blockClasses += display.classes() != null && display.classes() != '' ? ' '+display.classes() : ''
	blockClasses += position.classes() != null && position.classes() != '' ? ' '+position.classes() : ''
	blockClasses += attributes.fs != null && attributes.fs != '' ? ' fs-'+attributes.fs : ''
	blockClasses += attributes.fw != null && attributes.fw != '' ? ' '+attributes.fw : ''
	blockClasses += attributes.texttransform != null && attributes.texttransform != '' ? ' '+attributes.texttransform : ''
	blockClasses += attributes.textdecoration != null && attributes.textdecoration != '' ? ' '+attributes.textdecoration : ''
	blockClasses += attributes.lh != null && attributes.lh != '' ? ' '+attributes.lh : ''
	blockClasses += attributes.textalignment != null && attributes.textalignment != '' ? ' '+attributes.textalignment : ''

	blockClasses = blockClasses.replace(/^\s+|\s+$/gm,'');
	blockClasses = blockClasses.replace(/\s+\s+/gm,' ');
	blockClasses = blockClasses == '' ? null : blockClasses

	
	const blockProps = useBlockProps( { className: blockClasses } );

	let controller = null; // Store the AbortController instance

	const generate = async () => {
		console.log('promtValue')
		console.log(promtValue)
		console.log(siteinfo.chatGPTAPIKEY)
    	// Create a new AbortController instance
		
  		controller = new AbortController();
  		const signal = controller.signal;
		//const resultText = document.getElementById('results');
		const promtText = document.getElementById('promt');
		
		let output = ''; // Store the AbortController instance
		//gpt-3.5-turbo
		//ggpt-4	$0.03 / 1K tokens	$0.06 / 1K tokens
		//gpt-4-32k	$0.06 / 1K tokens	$0.12 / 1K tokens
		//gpt-3.5-turbo-1106	$0.0010 / 1K tokens	$0.0020 / 1K tokens
		//gpt-3.5-turbo-instruct	$0.0015 / 1K tokens	$0.0020 / 1K tokens

		//zet belangrijke zoekwoorden woorden in  een html span element met classnaam color-btn keyWordsColor
    	
		try {
  			const response = await fetch(
  				'https://api.openai.com/v1/chat/completions',{
        			headers:{
            			'Content-Type': 'application/json',
                		Authorization: 'Bearer '+siteinfo.chatGPTAPIKEY+'',
            		},
            		method: 'POST',
            		body: JSON.stringify({
            			model: 'gpt-4',
          				messages: [
                			{
                    			'role': 'user',
                				'content': keyWordsColor ? ''+promtValue+' ' + __('put keywords in an html span element with class name', 'webkompanen') + ' color-btn text-'+keyWordsColor+'': ''+promtValue+''
                   			}
                		],
          				temperature: 0.75,
          				top_p: 0.95,
          				stream: true
        			}),
                    signal
    			}
 			)
            
            //const data = await response.json();
            
            //resultText.innerText = data.choices[0].message.content;
            
            // Read the response as a stream of data
    		const reader = response.body.getReader();
    		const decoder = new TextDecoder("utf-8");
    		//resultText.innerText = '';
			/*setAttributes( { 
				content: '' 
			} )*/

    		while (true) {
      			const { done, value } = await reader.read();
      			if (done) {
					//console.log('done')
					//console.log('output')
					//console.log(output)
					setOutputChatGPT('');
					setInProgress(false)
					setKeyWordsColor(null)
					setPromtValue('')
					setAttributes( { 
						content: output.replace(/\n/g, '<br/>')
					} ) 
        			break;
      			}
      			
                // Massage and parse the chunk of data
      			const chunk = decoder.decode(value);
      			const lines = chunk.split("\n");
      			const parsedLines = lines
        		.map((line) => line.replace(/^data: /, "").trim()) // Remove the "data: " prefix
        		.filter((line) => line !== "" && line !== "[DONE]") // Remove empty lines and "[DONE]"
        		.map((line) => JSON.parse(line)); // Parse the JSON string

      			for (const parsedLine of parsedLines) {
        			const { choices } = parsedLine;
        			const { delta } = choices[0];
        			const { content } = delta;
        			// Update the UI with the new content
        			if (content) {
						//resultText.innerText += content;
						setOutputChatGPT((currentChatGPT) => currentChatGPT + content.replace(/\n/g, '<br/>'));
						output += content
						/*setOutputChatGPT(
							outputChatGPT + content
						)*/
        			}
      			}
    		}
        }
       	catch (error) {
        	if (signal.aborted) {
					setInProgress(false)
            }
            else {
      			console.error("Error:", error);
					setInProgress(false)
    		}
        }
        finally {
    		controller = null; // Reset the AbortController instance
  		}
    }
	//https://wordpress.stackexchange.com/questions/367932/create-a-custom-render-appender-button-to-add-inner-blocks
	
	return(
		<>	
			<Fragment>		
				<InspectorControls>
					<ColorEdit 
						props={props}
					/>
					<BackgroundcolorEdit 
						props={props}
					/>
					<PanelBody
						title={__('Chat GPT', 'webkompanen')}
						initialOpen={false}
					>
						<Spacer
							marginBottom={3}
						>
							<TextareaControl
								label={__('Promt', 'webkompanen')}
								labelPosition="top"
								rows={5}
								value={ promtValue }
								onChange={
									( nextValue ) => {
										setPromtValue( nextValue ?? '' )
									}
								}
							/>
						</Spacer>
						<Spacer
							marginBottom={3}
						>
							<Button
								isPrimary
								onClick={ 
									() => {
										setOutputChatGPT('')
										setInProgress(true)
										generate()
									}
								}
							>
								{!inProgress &&
									<>
										<Icon 
											icon={ openai } 
											className='me-1'
										/>
										{__('Generate text', 'webkompanen' )}
									</>
								}
								{inProgress &&
									<>
										<i 
											className="fa-solid fa-circle-notch fa-spin me-1"
										>
										</i>
										{__('Text will be generate', 'webkompanen' )}
									</>
								}
							</Button>
						</Spacer>
						<Spacer
							marginBottom={3}
						>
							{__('Key words color?', 'webkompanen')}
						</Spacer>
						<Spacer
							marginBottom={3}
						>
							<ColorPalette
								colors={ colors.get() }
								value={ keyWordsColor ? 'var(--bs-'+keyWordsColor+')' : '' }
								style={{width: "200px" }}
								onChange={ 
									( newColor ) => {
										setKeyWordsColor( newColor ? getColorObjectByColorValue( colors.get(), newColor ).name : null )
									} 
								}
								disableCustomColors={ true }
								clearable={ true }
							/>
						</Spacer>
					</PanelBody>
					<PanelBody
						title={__('Typography', 'webkompanen')}
						initialOpen={false}
					>
						<div 
							className="row"
						>
							<div className="col-12">
								<SelectControl
									label={ __( 'Text alignment', 'webkompanen' ) }
									value={ attributes.textalignment } // e.g: value = [ 'a', 'c' ]
									onChange={ 
										( nextSelect ) => {
											setAttributes( {
												textalignment:nextSelect
											} ) 
										} 
									}
									options={ [
										{ value: null, label: __('', 'webkompanen' ) },
										{ value: 'text-start', label: __( 'Left', 'webkompanen' ) },
										{ value: 'text-center', label: __( 'Center', 'webkompanen' ) },
										{ value: 'text-end', label: __( 'Right', 'webkompanen' ) }
									] }
								/>
							</div>
						</div>
						<div 
							className="row"
						>
							<div className="col-12">
								<SelectControl
									label={ __( 'Text transform', 'webkompanen' ) }
									value={ attributes.texttransform } // e.g: value = [ 'a', 'c' ]
									onChange={ 
										( nextSelect ) => {
											setAttributes( {
												texttransform:nextSelect
											} ) 
										} 
									}
									options={ [
										{ value: null, label: __('', 'webkompanen' ) },
										{ value: 'text-lowercase', label: __('Lowercase', 'webkompanen' ) },
										{ value: 'text-uppercase', label: __('Uppercase', 'webkompanen' ) },
										{ value: 'text-capitalize', label: __('Capitalize', 'webkompanen' ) }
									] }
								/>
							</div>
						</div>
						<div 
							className="row"
						>
							<div className="col-12">
								<SelectControl
									label={ __( 'Font size', 'webkompanen' ) }
									value={ attributes.fs } // e.g: value = [ 'a', 'c' ]
									onChange={ 
										( nextSelect ) => {
											setAttributes( {
												fs:Number(nextSelect)
											} ) 
										} 
									}
									options={ [
										{ value: null, label: __('', 'webkompanen' ) },
										{ value: 1, label: __('fs-1', 'webkompanen' ) },
										{ value: 2, label: __('fs-2', 'webkompanen' ) },
										{ value: 3, label: __('fs-3', 'webkompanen' ) },
										{ value: 4, label: __('fs-4', 'webkompanen' ) },
										{ value: 5, label: __('fs-5', 'webkompanen' ) },
										{ value: 6, label: __('fs-6', 'webkompanen' ) }
									] }
								/>
							</div>
						</div>
						<div 
							className="row"
						>
							<div className="col-12">
								<SelectControl
									label={ __( 'Font weight and italics', 'webkompanen' ) }
									value={ attributes.fw } // e.g: value = [ 'a', 'c' ]
									onChange={ 
										( nextSelect ) => {
											setAttributes( {
												fw:nextSelect
											} ) 
										} 
									}
									options={ [
										{ value: null, label: __('', 'webkompanen' ) },
										{ value: 'fw-bold', label: __('Bold text', 'webkompanen' ) },
										{ value: 'fw-bolder', label: __('Bolder weight text', 'webkompanen' ) },
										{ value: 'fw-semibold', label: __('Semibold weight text', 'webkompanen' ) },
										{ value: 'fw-normal', label: __('Normal weight text', 'webkompanen' ) },
										{ value: 'fw-light', label: __('Light weight text', 'webkompanen' ) },
										{ value: 'fw-lighter', label: __('Lighter weight text', 'webkompanen' ) },
										{ value: 'fst-italic', label: __('Italic text', 'webkompanen' ) },
										{ value: 'fst-normal', label: __('Text with normal font style', 'webkompanen' ) }
									] }
								/>
							</div>
						</div>
						<div 
							className="row"
						>
							<div className="col-12">
								<SelectControl
									label={ __( 'Lineheight', 'webkompanen' ) }
									value={ attributes.lh } // e.g: value = [ 'a', 'c' ]
									onChange={ 
										( nextSelect ) => {
											setAttributes( {
												lh:nextSelect
											} ) 
										} 
									}
									options={ [
										{ value: null, label: __('', 'webkompanen' ) },
										{ value: 'lh-1', label: __('Lineheight 1', 'webkompanen' ) },
										{ value: 'lh-sm', label: __('Lineheight small', 'webkompanen' ) },
										{ value: 'lh-base', label: __('Lineheight base', 'webkompanen' ) },
										{ value: 'lh-lg', label: __('Lineheight large', 'webkompanen' ) }
									] }
								/>
							</div>
						</div>
						<div 
							className="row"
						>
							<div className="col-12">
								<SelectControl
									label={ __( 'Text decoration', 'webkompanen' ) }
									value={ attributes.textdecoration } // e.g: value = [ 'a', 'c' ]
									onChange={ 
										( nextSelect ) => {
											setAttributes( {
												textdecoration:nextSelect
											} ) 
										} 
									}
									options={ [
										{ value: null, label: __('', 'webkompanen' ) },
										{ value: 'text-textdecoration-underline', label: __('Underline', 'webkompanen') },
										{ value: 'text-textdecoration-line-through', label: __('Line through', 'webkompanen') },
										{ value: 'text-textdecoration-none', label: __('None', 'webkompanen') }
									] }
								/>
							</div>
						</div>
					</PanelBody>
					<PositionEdit 
						props={props}
					/>
					<PanelBody
						title={__('Text', 'webkompanen')}
						initialOpen={false}
					>
						<div>
							<TextareaControl
								label={__('Text', 'webkompanen')}
								rows={5}
								value={ attributes.content }
								onChange={ 
									(nextValue) => {
										setAttributes({
											content: nextValue
										})
									} 
								}
							/>
						</div>
					</PanelBody>
					<PanelBody
						title={__('Text', 'webkompanen')}
						initialOpen={false}
					>
						<div>
							<Button
								isPrimary
								onClick={ 
									() => {
										// Block ID - reference
										var blockUID = wp.data.select('core/block-editor').getSelectedBlock().clientId;

										// Start of selection
										var selectionStart = wp.data.select('core/block-editor').getSelectionStart();

										// End of selection
										var selectionEnd = wp.data.select('core/block-editor').getSelectionEnd();

										var block = wp.data.select('core/block-editor').getSelectedBlock();
 
										// Attributes
										var blockAttributes = block.attributes;
 
										// Content
										var blockContent = block.attributes.content;

										//console.log(blockContent)

										var richTextContent = wp.richText.create({ 
											text: blockContent,
  											formats: [],
  											replacements: [],
										});
										
										//console.log(richTextContent)

										richTextContent = wp.richText.applyFormat(
											richTextContent, 
											{ type: 'webkompanen-blocks/fontawesomeicon',
												attributes:{className: "fa-solid fa-circle"} 
											}, 
											selectionStart.offset, 
											selectionEnd.offset
										);

										/*richTextContent = wp.richText.insertObject(
											richTextContent,
											'webkompanen-blocks/fontawesomeicon',
											selectionStart.offset,
											selectionEnd.offset
										)*/

										//console.log('richTextContent')
										//console.log(richTextContent)

										var prepNewHTML = wp.richText.toHTMLString(
											{ 
												value:richTextContent 
											}
										);

										wp.data.dispatch( 'core/block-editor' ).updateBlock( blockUID, {
											attributes: {
											  content: prepNewHTML
											}
										} );
									}
								}
							>
								TEST
							</Button>
						</div>
					</PanelBody>
				</InspectorControls>
			</Fragment>
			<RichText
				{ ...blockProps }
				//className="display-4"
               	tagName="p" // The tag here is the element output and editable in the admin
               	value={ outputChatGPT != '' ? outputChatGPT : attributes.content } // Any existing content, either from the database or an attribute default
				allowedFormats={ 
					[ 
						'core/italic', 
						'core/bold',
						'webkompanen-blocks/color',
						'webkompanen-blocks/href',
						'webkompanen-blocks/fontawesomeicon',
						'webkompanen-blocks/fontsize'
					] 
				} // Allow the content to be made bold or italic, but do not allow other formatting options
               	onChange={ 
					( newcontent ) => setAttributes( { 
						content: newcontent 
					} ) 
				} // Store updated content as a block attribute
               	placeholder={ __( 'Text...', 'webkompanen' ) } // Display this text before any content has been added by the user
            />	
		</>
	)
}


/*export default withSelect((select, props) => {
	return { 
		headerImageInfo: props.attributes.headerImageId ? select('core').getMedia(props.attributes.headerImageId) : undefined
	};
})(HeaderEdit);*/

export default paragraphEdit;