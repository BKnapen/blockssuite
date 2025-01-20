/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { 
	useInnerBlocksProps, 
	InnerBlocks,
	useBlockProps 
} from '@wordpress/block-editor';

/* Utilities */

import { Margin } from '../../utilities/margin';
import { Borders } from '../../utilities/borders';
import { NegativeMargin } from '../../utilities/negativemargin';
import { Padding } from '../../utilities/padding';
import { Display } from '../../utilities/display';
import { Position } from '../../utilities/position';
import { Col } from '../../utilities/col';
import { Color } from '../../utilities/color';
import { Backgroundcolor } from '../../utilities/backgroundcolor';

function imageSave( props ) {
	const {
		attributes
	} = props;
	
	const imgfluid = attributes.imgfluid ? ' img-fluid' : ''
	
	const dataBsToggle = attributes.dataBsToggle ? ''+attributes.dataBsToggle+'' : null
	const dataBsTarget = attributes.dataBsTarget ? ''+attributes.dataBsTarget+'' : null
	const dataBsSlideTo = attributes.dataBsSlideTo ? ''+attributes.dataBsSlideTo+'' : null
	
	const classes = attributes.classes ? attributes.classes : ''

	const alttext = attributes.imageAlt ? attributes.imageAlt : ''
	
	const zoomeffect = attributes.zoomeffect ? 'zoom' : ''
	const showlabel = attributes.showlabel ? attributes.showlabel : attributes.showlabel
	
	const objectfitcover = attributes.objectfitcover ? ' object-fit-cover':''
	const objectposition = attributes.objectposition ? ' object-position-'+attributes.objectposition+'':''
	
	const url = attributes.url ? ' d-block' : ''
	
	const WrapperTag = attributes.url ? `a` : `figure`;
	let WrapperOuterTag = attributes.url ? `div` : `a`;
	
	let urlurl = attributes.url ? attributes.url.url : null;
	urlurl = attributes.lightbox ? attributes.imageUrl : urlurl;
	
	const margin = new Margin(props)
	const borders = new Borders(props)
	
	const negativemargin = new NegativeMargin(props)
	//const padding = new Padding(props)
	const display = new Display(props)

	const position = new Position(props)
	//const col = new Col(props)
	const color = new Color(props)
	const backgroundcolor = new Backgroundcolor(props)
	
	const figure = attributes.imgfigure
	WrapperOuterTag = figure ? `div` : ``;
	
	const width = attributes.width ? ' '+attributes.width+'' : ''
	const height = attributes.height ? ' '+attributes.height+'' : ''
	const h = attributes.h ? attributes.h : ''
	const w = attributes.w ? attributes.w : ''
	
	let blockClasses = '';
	let hw = '';

	hw += width != null && width != '' ? ' '+width : ''
	hw += height != null && height != '' ? ' '+height : ''

	blockClasses += classes != null && classes != '' ? ' '+classes : ''
	blockClasses += width != null && width != '' ? ' '+width : ''
	blockClasses += height != null && height != '' ? ' '+height : ''
	blockClasses += imgfluid != null && imgfluid != '' ? ' '+imgfluid : ''
	blockClasses += margin.classes() != null && margin.classes() != '' ? ' '+margin.classes() : ''
	blockClasses += borders.classes() != null && borders.classes() != '' ? ' '+borders.classes() : ''
	blockClasses += negativemargin.classes() != null && negativemargin.classes() != '' ? ' '+negativemargin.classes() : ''
	blockClasses += display.classes() != null && display.classes() != '' ? ' '+display.classes() : ''
	blockClasses += position.classes() != null && position.classes() != '' ? ' '+position.classes() : ''
	blockClasses += objectfitcover
	blockClasses += objectposition
	
	blockClasses = blockClasses.replace(/^\s+|\s+$/gm,'');
	blockClasses = blockClasses.replace(/\s+\s+/gm,' ');
	blockClasses = blockClasses == '' ? null : blockClasses
////'position-absolute text-center w-100 text-white bottom-0'
	let labelClasses = 'position-absolute w-100';
	let spanClasses = 'py-1 px-2';

	labelClasses += color.classes() != null && color.classes() != '' ? ' '+color.classes() : ''
	spanClasses += backgroundcolor.classes() != null && backgroundcolor.classes() != '' ? ' '+backgroundcolor.classes() : ''

	switch (attributes.labeltextalignment) {
		case 'start':
			labelClasses += ' text-start';
			break;
		case 'center':
			labelClasses += ' text-center';
			break;
		case 'end':
			labelClasses += ' text-end';
			break;
		default:
			labelClasses += '';
	}

	switch (attributes.labelpositionalignment) {
		case 'top left':
			labelClasses += ' top-0 start-0';
		  break;
		case 'top center':
			labelClasses += ' top-0';
		  break;
		case 'top right':
			labelClasses += ' top-0 end-0';
		  break;
		case 'center left':
			labelClasses += ' top-50 start-0';
			break;
		case 'center center':
			labelClasses += ' top-50';
			break;
		case 'center right':
			labelClasses += ' top-50 end-0';
			break;
		case 'bottom left':
			labelClasses += ' bottom-0 start-0';
			  break;
		case 'bottom center':
			labelClasses += ' bottom-0';
			  break;
		case 'bottom right':
			labelClasses += ' bottom-0 end-0';
			  break;
		default:
			labelClasses += '';
	}

	labelClasses = labelClasses.replace(/^\s+|\s+$/gm,'');
	labelClasses = labelClasses.replace(/\s+\s+/gm,' ');
	labelClasses = labelClasses == '' ? null : labelClasses

	return(
		<>
			{
				urlurl &&
				<WrapperOuterTag
					href={WrapperTag == 'figure' ? urlurl : null }
					target={attributes.url.opensInNewTab & WrapperTag == 'figure' ? '_blank' : null}
					data-lightbox={attributes.lightbox & WrapperTag == 'figure'  ? 'slider' : null}
					rel={attributes.url.opensInNewTab & WrapperTag == 'figure' ? 'noopener' : null}
				>
			
					{width && figure &&
						<WrapperTag
							className={zoomeffect+''+url+''+hw}
							href={urlurl}
							data-lightbox={attributes.lightbox ? 'slider' : null}
						>
							<img 
								className={blockClasses}
								src={(attributes.imageUrl !== '' && attributes.imageUrl !== undefined) ? ''+attributes.imageUrl+'' : ''+attributes.imagePlaceholder+''}
								alt={''+alttext+''}	
								data-bs-toggle={dataBsToggle}	
								data-bs-target={dataBsTarget}	
								data-bs-slide-to={dataBsSlideTo}	
							/>
							{showlabel &&
								<p
									className={labelClasses}//'position-absolute text-center w-100 text-white bottom-0'
								>
									<span
										className={spanClasses}//'bg-tertiary bg-opacity-50 py-1 px-2'
									>
										{ alttext }
									</span>
								</p>
							}
						</WrapperTag>
					}
					{!width && figure &&
						<WrapperTag
			 				className={zoomeffect+''+url+''+hw}
			 				href={urlurl}
							data-lightbox={attributes.lightbox ? 'slider' : null}
			 			>
							<img 
								className={blockClasses}
								src={(attributes.imageUrl !== '' && attributes.imageUrl !== undefined) ? ''+attributes.imageUrl+'' : ''+attributes.imagePlaceholder+''}
								alt={''+alttext+''}	
			 					width={w}
								height={h}
								style={
									{
										"height": 'auto !important',
										"width": ''+w+'px'
									}
								}
								data-bs-toggle={dataBsToggle}	
								data-bs-target={dataBsTarget}	
								data-bs-slide-to={dataBsSlideTo}
							/>
							{showlabel &&
								<p
									className={labelClasses}//'position-absolute text-center w-100 text-white bottom-0'
								>
									<span
										className={spanClasses}//'bg-tertiary bg-opacity-50 py-1 px-2'
									>
										{ alttext }
									</span>
								</p>
							}
						</WrapperTag>
					}
					{!width && !figure &&
						<WrapperTag
							href={WrapperTag == 'a' ? urlurl : null }
							target={attributes.url.opensInNewTab & WrapperTag == 'a' ? '_blank' : null}
							data-lightbox={attributes.lightbox & WrapperTag == 'a'  ? 'slider' : null}
							rel={attributes.url.opensInNewTab & WrapperTag == 'a' ? 'noopener' : null}
			 			>
							<img 
								className={blockClasses}
								src={(attributes.imageUrl !== '' && attributes.imageUrl !== undefined) ? ''+attributes.imageUrl+'' : ''+attributes.imagePlaceholder+''}
								alt={''+alttext+''}	
								width={w}
								height={h}
								style={
									{
										"height": 'auto !important',
										"width": ''+w+'px'
									}
								}
								data-bs-toggle={dataBsToggle}	
								data-bs-target={dataBsTarget}	
								data-bs-slide-to={dataBsSlideTo}
							/>				
						</WrapperTag>
					}
					{width && !figure &&
						<WrapperTag
							href={WrapperTag == 'a' ? urlurl : null }
							target={attributes.url.opensInNewTab & WrapperTag == 'a' ? '_blank' : null}
							data-lightbox={attributes.lightbox & WrapperTag == 'a'  ? 'slider' : null}
							rel={attributes.url.opensInNewTab & WrapperTag == 'a' ? 'noopener' : null}
			 			>
							<img 
								className={blockClasses}
								src={(attributes.imageUrl !== '' && attributes.imageUrl !== undefined) ? ''+attributes.imageUrl+'' : ''+attributes.imagePlaceholder+''}
								alt={''+alttext+''}	
								data-bs-toggle={dataBsToggle}	
								data-bs-target={dataBsTarget}	
								data-bs-slide-to={dataBsSlideTo}
							/>
						</WrapperTag>
					}
				</WrapperOuterTag>
			}
			{
				!urlurl &&
				<>
			
					{width && figure &&
						<WrapperTag
							className={zoomeffect+''+url+''+hw}
							href={urlurl}
							data-lightbox={attributes.lightbox ? 'slider' : null}
						>
							<img 
								className={blockClasses}
								src={(attributes.imageUrl !== '' && attributes.imageUrl !== undefined) ? ''+attributes.imageUrl+'' : ''+attributes.imagePlaceholder+''}
								alt={''+alttext+''}	
								data-bs-toggle={dataBsToggle}	
								data-bs-target={dataBsTarget}	
								data-bs-slide-to={dataBsSlideTo}	
							/>
							{showlabel &&
								<p
									className={labelClasses}//'position-absolute text-center w-100 text-white bottom-0'
								>
									<span
										className={spanClasses}//'bg-tertiary bg-opacity-50 py-1 px-2'
									>
										{ alttext }
									</span>
								</p>
							}
						</WrapperTag>
					}
					{!width && figure &&
						<WrapperTag
			 				className={zoomeffect+''+url+''+hw}
			 				href={urlurl}
							data-lightbox={attributes.lightbox ? 'slider' : null}
			 			>
							<img 
								className={blockClasses}
								src={(attributes.imageUrl !== '' && attributes.imageUrl !== undefined) ? ''+attributes.imageUrl+'' : ''+attributes.imagePlaceholder+''}
								alt={''+alttext+''}	
			 					width={w}
								height={h}
								style={
									{
										"height": 'auto !important',
										"width": ''+w+'px'
									}
								}
								data-bs-toggle={dataBsToggle}	
								data-bs-target={dataBsTarget}	
								data-bs-slide-to={dataBsSlideTo}
							/>
							{showlabel &&
								<p
									className={labelClasses}//'position-absolute text-center w-100 text-white bottom-0'
								>
									<span
										className={spanClasses}//'bg-tertiary bg-opacity-50 py-1 px-2'
									>
										{ alttext }
									</span>
								</p>
							}
						</WrapperTag>
					}
					{!width && !figure &&
						<img 
							className={blockClasses}
							src={(attributes.imageUrl !== '' && attributes.imageUrl !== undefined) ? ''+attributes.imageUrl+'' : ''+attributes.imagePlaceholder+''}
							alt={''+alttext+''}	
			 				width={w}
							height={h}
							style={
								{
									"height": 'auto !important',
									"width": ''+w+'px'
								}
							}
							data-bs-toggle={dataBsToggle}	
							data-bs-target={dataBsTarget}	
							data-bs-slide-to={dataBsSlideTo}
						/>
					}
					{width && !figure &&
						<img 
							className={blockClasses}
							src={(attributes.imageUrl !== '' && attributes.imageUrl !== undefined) ? ''+attributes.imageUrl+'' : ''+attributes.imagePlaceholder+''}
							alt={''+alttext+''}	
							data-bs-toggle={dataBsToggle}	
							data-bs-target={dataBsTarget}	
							data-bs-slide-to={dataBsSlideTo}
						/>
					}
				</>
			}
		</>
	)

}

export default imageSave;