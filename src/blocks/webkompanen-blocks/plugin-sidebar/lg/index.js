
import { 
	PluginSidebarMoreMenuItem, 
	PluginSidebar 
} from '@wordpress/edit-post';

import {
	useState,
	Fragment
} from '@wordpress/element';

import { 
	useSelect, useDispatch, withSelect, withDispatch
} from '@wordpress/data';

import {
	lg as icon
} from '../../icons'

import initPlugin from '../../utils/init-register-plugin'

import GetProps from '../../utils/get-block-props'

const name = 'sidebar-lg';

const SidebarLg = () => {
	const { props } = useSelect( ( select ) => {		
		return {
			props: select( 'core/block-editor' ).getSelectedBlock(),
		};
	} );
	
	return(
	<Fragment>
    	<PluginSidebarMoreMenuItem 
			target="bootstrap-lg-settings" 
			icon={ icon }
		>
        	Breakpoint Large (lg) settings
     	</PluginSidebarMoreMenuItem>
      	<PluginSidebar 
			name="bootstrap-lg-settings" 
			icon={ icon } 
			title={__('Breakpoint Large (lg) settings', 'webkompanen')}
		>
			<p>Breakpoint Large (lg):</p>
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
					<p>lg</p>
				</div>
				<div
					className='col-4'
				>
					<p>{'≥992px'}</p>
				</div>
			</div>
			<GetProps
				props={props}
				requestBreakpoint='lg'
			/>
     	</PluginSidebar>
    </Fragment>
	)
};

export const settings = {
	render: SidebarLg
}

export const init = () => initPlugin({
	name,
	settings
})