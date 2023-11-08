import{
	render
} from '@wordpress/element';


document.getElementById( 'webkompanen-global-site-settings-callback' ) ? 
render(

	<h1>Network site settings</h1>,

	document.getElementById( 'webkompanen-global-site-settings-callback' )

):'';