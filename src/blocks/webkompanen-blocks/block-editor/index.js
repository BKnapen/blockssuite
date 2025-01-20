import domReady from '@wordpress/dom-ready';
import { render } from '@wordpress/element';
import { registerCoreBlocks } from '@wordpress/block-library';
import Editor from './editor';

import './styles.scss';

domReady( function () {
	if(document.getElementById( 'webkompanen-block-editor' )){
		const settings = window.webkompanenSettings || {};
		//registerCoreBlocks();
		render(
			<Editor settings={ settings } />,
			document.getElementById( 'webkompanen-block-editor' )
		);
	}
} );
