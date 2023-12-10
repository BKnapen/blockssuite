
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
	sm as icon
} from '../../icons'

import initPlugin from '../../utils/init-register-plugin'

import GetProps from '../../utils/get-block-props'

const name = 'sidebar-sm';

const SidebarSm = () => {
	const { props } = useSelect( ( select ) => {		
		return {
			props: select( 'core/block-editor' ).getSelectedBlock(),
		};
	} );

	return(
	<Fragment>
    	<PluginSidebarMoreMenuItem 
			target="bootstrap-sm-settings" 
			icon={ icon }
		>
        	Breakpoint Small (sm) settings
     	</PluginSidebarMoreMenuItem>
      	<PluginSidebar 
			name="bootstrap-sm-settings" 
			icon={ icon } 
			title={__('Breakpoint Small (sm) settings', 'webkompanen')}
		>
			<p>Breakpoint Small (sm):</p>
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
					<p>Extra small</p>
				</div>
				<div
					className='col-4'
				>
					<p>sm</p>
				</div>
				<div
					className='col-4'
				>
					<p>{'≥576px'}</p>
				</div>
			</div>
			<GetProps
				props={props}
				requestBreakpoint='sm'
			/>
     	</PluginSidebar>
    </Fragment>
	)
};

export const settings = {
	render: SidebarSm
}

export const init = () => initPlugin({
	name,
	settings
})