<?php
	function update_keesz_user_role() {
    	if ( get_option( 'keesz_user_role_version' ) < 1 ) {
        	add_role(
				'keesz_user', 
				'Keesz gebruiker', 
				array( 
					'read' => true, 
					'level_0' => true 
				) 
			);
        	update_option( 
				'keesz_user_role_version', 
				1 
			);
    	}
	}
	add_action( 'init', 'update_keesz_user_role' );
?>