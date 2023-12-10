import './settings/network-site-settings/index';
import './settings/single-site-settings/index';

import domReady from '@wordpress/dom-ready';
/*Admin*/
import * as batchuserimport from './admin/batch-user-import';
import * as emailsettings from './admin/email-settings';

/*Collections*/

import * as webkompanen from './collections/webkompanen';

/*Updates*/

import * as layout from './update-block-categories/layout';

/*Format types*/
import * as color from './register-block-types/color';
import * as link from './register-block-types/link';
import * as fontawesomeicon from './register-block-types/fontawesome';
import * as fontsize from './register-block-types/fontsize';

/*Edit post Sidebars*/

import * as sidebarxs from './plugin-sidebar/xs';
import * as sidebarsm from './plugin-sidebar/sm';
import * as sidebarmd from './plugin-sidebar/md';
import * as sidebarlg from './plugin-sidebar/lg';
import * as sidebarxl from './plugin-sidebar/xl';
import * as sidebarxxl from './plugin-sidebar/xxl';

/*Meta fields*/

import * as metafieldsgallery from './meta-fields/gallery';
import * as metafieldsevents from './meta-fields/event';
import * as metafieldsagenda from './meta-fields/agenda';
import * as metafieldscourse from './meta-fields/course';
import * as metafieldsvideotraining from './meta-fields/video-training';

/*Edit site Sidebars*/

import * as sidebareditsitexs from './plugin-sidebar-edit-site/xs';
import * as sidebareditsitesm from './plugin-sidebar-edit-site/sm';
import * as sidebareditsitemd from './plugin-sidebar-edit-site/md';
import * as sidebareditsitelg from './plugin-sidebar-edit-site/lg';
import * as sidebareditsitexl from './plugin-sidebar-edit-site/xl';
import * as sidebareditsitexxl from './plugin-sidebar-edit-site/xxl';

/*Serverside render blocks*/

import * as lastposts from './serverside-render-blocks/lastposts'
import * as courses from './serverside-render-blocks/courses'
import * as reviews from './serverside-render-blocks/reviews'
import * as referenties from './serverside-render-blocks/referenties'
import * as coursesoverview from './serverside-render-blocks/courses-overview'
import * as agendaoverview from './serverside-render-blocks/agenda-overview'
import * as login from './serverside-render-blocks/login'
import * as eventinfo from './serverside-render-blocks/eventinfo'

/*Blocks*/

import * as section from './blocks/section';
import * as container from './blocks/container';
import * as row from './blocks/row';
import * as col from './blocks/col';
import * as video from './blocks/video';
import * as img from './blocks/img';
import * as postfeaturedimg from './blocks/post-featured-img';
import * as heading from './blocks/h';
import * as sitetitle from './blocks/site-title';
import * as paragraph from './blocks/p';
import * as span from './blocks/span';
import * as btn from './blocks/btn';
import * as button from './blocks/button';
import * as form from './blocks/form';
import * as input from './blocks/input';
import * as formgroup from './blocks/form-group';
import * as formcheck from './blocks/form-check';
import * as formselect from './blocks/form-select';
import * as formoption from './blocks/form-option';
import * as formfloating from './blocks/form-floating';
import * as textarea from './blocks/textarea';
import * as label from './blocks/label';
import * as div from './blocks/div';
import * as carousel from './blocks/carousel';
import * as carouselinner from './blocks/carousel-inner';
import * as carouselitem from './blocks/carousel-item';
import * as blockquote from './blocks/blockquote';
import * as nav from './blocks/nav';
import * as navbarbrand from './blocks/navbar-brand';
import * as navbartoggler from './blocks/navbar-toggler';
import * as navbartogglericon from './blocks/navbar-toggler-icon';
import * as navbarcollapse from './blocks/navbar-collapse';
import * as navbarnav from './blocks/navbar-nav';
import * as navitem from './blocks/nav-item';
import * as navlink from './blocks/nav-link';
import * as dropdownmenu from './blocks/dropdown-menu';
import * as dropdownitem from './blocks/dropdown-item';
import * as dropdownlink from './blocks/dropdown-link';
import * as footer from './blocks/footer';
import * as header from './blocks/header';
import * as fontawesome from './blocks/i';
import * as googlemaps from './blocks/googlemaps';
import * as youtube from './blocks/youtube';
import * as facebookwatch from './blocks/facebookwatch';
import * as gallery from './blocks/gallery';
import * as w3schoolsmenuicon from './blocks/w3schools-menu-icon';
import * as accordion from './blocks/accordion';
import * as accordionbody from './blocks/accordion-body';
import * as accordioncollapse from './blocks/accordion-collapse';
import * as accordionheader from './blocks/accordion-header';
import * as accordionitem from './blocks/accordion-item';
import * as accordionbutton from './blocks/accordion-button';
import * as listgroup from './blocks/list-group';
import * as listgroupitem from './blocks/list-group-item';

const getAllBlockCollections = () => [
	webkompanen
]

const registerWebkompanenBlockCollections = (
	collections = getAllBlockCollections()
) => {
	collections.forEach(
		( { init } ) => init()
	)
}

registerWebkompanenBlockCollections()


const getAllBlockUpdates = () => [
	layout
]

const updateWebkompanenBlocks = (
	updates = getAllBlockUpdates()
) => {
	updates.forEach(
		( { init } ) => init()
	)
}

updateWebkompanenBlocks()

const getAllFormatTypes = () => [
	color,
	link,
	fontawesomeicon,
	fontsize
]

const registerWebkompanenFormatTypes = (
	formattypes = getAllFormatTypes()
) => {
	formattypes.forEach(
		( { init } ) => init()
	)
}

registerWebkompanenFormatTypes()

const getAllBlockSidebars = () => [
	sidebarxs,
	sidebarsm,
	sidebarmd,
	sidebarlg,
	sidebarxl,
	sidebarxxl,
	sidebareditsitexs,
	sidebareditsitesm,
	sidebareditsitemd,
	sidebareditsitelg,
	sidebareditsitexl,
	sidebareditsitexxl,
	metafieldsgallery,
	metafieldsevents,
	metafieldsagenda,
	metafieldscourse,
	metafieldsvideotraining
]

const registerWebkompanenSidebars = (
	sidebars = getAllBlockSidebars()
) => {
	sidebars.forEach(
		( { init } ) => init()
	)
}

registerWebkompanenSidebars()


const getAllBlocks = () => [
	col,
	container,
	img,
	postfeaturedimg,
	row,
	section,
	video,
	heading,
	sitetitle,
	paragraph,
	span,
	btn,
	button,
	form,
	formgroup,
	formcheck,
	formselect,
	formoption,
	formfloating,
	input,
	textarea,
	label,
	div,
	carousel,
	carouselinner,
	carouselitem,
	blockquote,
	nav,
	navbarbrand,
	navbartoggler,
	navbartogglericon,
	navbarcollapse,
	navbarnav,
	navitem,
	navlink,
	dropdownmenu,
	dropdownitem,
	dropdownlink,
	header,
	footer,
	fontawesome,
	googlemaps,
	login,
	youtube,
	facebookwatch,
	gallery,
	lastposts,
	reviews,
	referenties,
	courses,
	coursesoverview,
	agendaoverview,
	eventinfo,
	w3schoolsmenuicon,
	accordion,
	accordionbody,
	accordioncollapse,
	accordionheader,
	accordionitem,
	accordionbutton,
	listgroup,
	listgroupitem
]

const registerWebkompanenBlocks = (
	blocks = getAllBlocks()
) => {
	blocks.forEach(
		( { init } ) => init()
	)
}

registerWebkompanenBlocks()


const getAllAdminTools = () => [
	batchuserimport
]

const registerAdminTools = (
	admintools = getAllAdminTools()
) => {
	admintools.forEach(
		( { init } ) => init()
	)
}

registerAdminTools()

document.addEventListener("DOMContentLoaded", function(event) {
	wp.domReady( () => {
		//wp.api.loadPromise.done( function() {
		if(document.getElementById( 'batch-import' )){
			const getAllAdminTools = () => [
				batchuserimport
			]

			const registerAdminTools = (
				admintools = getAllAdminTools()
			) => {
				admintools.forEach(
					( { init } ) => init()
				)
			}
			
			registerAdminTools()
		}
	});
});

/*const getAllWebkompanenAdminSettings = () => [
	emailsettings
]

const registerAllWebkompanenAdminSettings = (
	webkompanenadminsettings = getAllWebkompanenAdminSettings()
) => {
	webkompanenadminsettings.forEach(
		( { init } ) => init()
	)
}

registerAllWebkompanenAdminSettings()*/

document.addEventListener("DOMContentLoaded", function(event) {
	wp.domReady( () => {
		//wp.api.loadPromise.done( function() {
		if(document.getElementById( 'webkompanen-settings' )){
			const getAllWebkompanenAdminSettings = () => [
				emailsettings
			]

			const registerAllWebkompanenAdminSettings = (
				webkompanenadminsettings = getAllWebkompanenAdminSettings()
			) => {
				webkompanenadminsettings.forEach(
					( { init } ) => init()
				)
			}
			
			registerAllWebkompanenAdminSettings()
		}
	});
});