import { 
	sprintf, __ 
} from '@wordpress/i18n';

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
	md as icon
} from '../../icons'

import initPlugin from '../../utils/init-register-plugin'

import GetProps from '../../utils/get-block-props'

const name = 'sidebar-md';

const SidebarMd = () => {
	const { props } = useSelect( ( select ) => {		
		return {
			props: select( 'core/block-editor' ).getSelectedBlock(),
		};
	} );
	
	return(
	<Fragment>
    	<PluginSidebarMoreMenuItem 
			target="bootstrap-md-settings" 
			icon={ icon }
		>
        	Breakpoint Medium (md) settings
     	</PluginSidebarMoreMenuItem>
      	<PluginSidebar 
			name="bootstrap-md-settings" 
			icon={ icon } 
			title={__('Breakpoint Medium (md) settings', 'webkompanen')}
		>
			<p>Breakpoint Medium (md):</p>
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
					<p>Medium</p>
				</div>
				<div
					className='col-4'
				>
					<p>md</p>
				</div>
				<div
					className='col-4'
				>
					<p>{'≥576px'}</p>
				</div>
			</div>
			<GetProps
				props={props}
				requestBreakpoint='md'
			/>
     	</PluginSidebar>
    </Fragment>
	)
};

export const settings = {
	render: SidebarMd
}

export const init = () => initPlugin({
	name,
	settings
})