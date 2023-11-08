import AppBatchImport from '../admin/batch-user-import';

const {
	render,
	Component,
	Fragment,
	useState
} = wp.element;

export default function initAdmin( admin ) {
	if ( ! admin ) {
		return;
	}
	const { name } = admin;
	document.addEventListener("DOMContentLoaded", function(event) {
        wp.domReady( () => {
            //wp.api.loadPromise.done( function() {
            if(document.getElementById( ''+name+'' )){  
                try {
                    render(
                        <AppBatchImport/>,
                        document.getElementById( ''+name+'' )
                    )
                }
                finally{
                  };
            }
        });
    });
}