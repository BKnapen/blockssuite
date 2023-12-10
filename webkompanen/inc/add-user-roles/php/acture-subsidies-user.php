<?php
	function update_acture_subsidies_user_role() {
    	if ( get_option( 'acture_subsidies_user_role_version' ) < 1 ) {
        	add_role(
				'acture_subsidies_user', 
				'Acture Subsidies gebruiker', 
				array( 
					'read' => true, 
					'level_0' => true 
				) 
			);
        	update_option( 
				'acture_subsidies_user_role_version', 
				1 
			);
    	}
	}
	add_action( 'init', 'update_acture_subsidies_user_role' );
?>