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
	xxl as icon
} from '../../icons'

import initPlugin from '../../utils/init-register-plugin'

import GetProps from '../../utils/get-block-props'

const name = 'sidebar-xxl';

const SidebarXxl = () => {
	const { props } = useSelect( ( select ) => {		
		return {
			props: select( 'core/block-editor' ).getSelectedBlock(),
		};
	} );
	
	return(
	<Fragment>
    	<PluginSidebarMoreMenuItem 
			target="bootstrap-xxl-settings" 
			icon={ icon }
		>
        	Breakpoint Large (xxl) settings
     	</PluginSidebarMoreMenuItem>
      	<PluginSidebar 
			name="bootstrap-xxl-settings" 
			icon={ icon } 
			title={__('Breakpoint Large (xxl) settings', 'webkompanen')}
		>
			<p>Breakpoint Large (xxl):</p>
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
					<p>xxl</p>
				</div>
				<div
					className='col-4'
				>
					<p>{'≥1400px'}</p>
				</div>
			</div>
			<GetProps
				props={props}
				requestBreakpoint='xxl'
			/>
     	</PluginSidebar>
    </Fragment>
	)
};

export const settings = {
	render: SidebarXxl
}

export const init = () => initPlugin({
	name,
	settings
})