import domReady from '@wordpress/dom-ready';
import { createRoot } from '@wordpress/element';

/*Data Views*/
import PortfolioDataview from './dataviews/portfolio';

domReady( () => {
	const root = createRoot(
		document.getElementById( 'portfolio-dataview' )
	);
	root.render( <PortfolioDataview /> );
} );