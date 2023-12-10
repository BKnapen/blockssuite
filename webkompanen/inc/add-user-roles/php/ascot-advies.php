<?php
	function update_ascot_advies_user_role() {
    	if ( get_option( 'ascot_advies_user_role_version' ) < 1 ) {
        	add_role(
				'ascot_advies_user', 
				'Ascot Advies gebruiker', 
				array( 
					'read' => true, 
					'level_0' => true 
				) 
			);
        	update_option( 
				'ascot_advies_user_role_version', 
				1 
			);
    	}
	}
	add_action( 'init', 'update_ascot_advies_user_role' );
?>