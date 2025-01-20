import { 
	sprintf, __ 
} from '@wordpress/i18n';

import { 
	PluginSidebarMoreMenuItem, 
	PluginSidebar 
} from '@wordpress/editor';

import {
	useState,
	Fragment
} from '@wordpress/element';

import { 
	useSelect, useDispatch, withSelect, withDispatch
} from '@wordpress/data';

import {
	xl as icon
} from '../../icons'

import initPlugin from '../../utils/init-register-plugin'

import GetProps from '../../utils/get-block-props'

const name = 'sidebar-xl';

const SidebarXl = () => {
	const { props } = useSelect( ( select ) => {		
		return {
			props: select( 'core/block-editor' ).getSelectedBlock(),
		};
	} );
	
	return(
	<Fragment>
    	<PluginSidebarMoreMenuItem 
			target="bootstrap-xl-settings" 
			icon={ icon }
		>
        	Breakpoint Large (xl) settings
     	</PluginSidebarMoreMenuItem>
      	<PluginSidebar 
			name="bootstrap-xl-settings" 
			icon={ icon } 
			title={__('Breakpoint Large (xl) settings', 'webkompanen')}
		>
			<p>Breakpoint Large (xl):</p>
			<div
				className='row'
			>
				<div
					className='col-4'
				>
					<p>Breakpoint</p>
				</div>
				<div
					className='col-4'
				>
					<p>Class infix</p>
				</div>
				<div
					className='col-4'
				>
					<p>Dimensions</p>
				</div>
				<div
					className='col-4'
				>
					<p>Large</p>
				</div>
				<div
					className='col-4'
				>
					<p>xl</p>
				</div>
				<div
					className='col-4'
				>
					<p>{'≥1200px'}</p>
				</div>
			</div>
			<GetProps
				props={props}
				requestBreakpoint='xl'
			/>
     	</PluginSidebar>
    </Fragment>
	)
};

export const settings = {
	render: SidebarXl
}

export const init = () => initPlugin({
	name,
	settings
})