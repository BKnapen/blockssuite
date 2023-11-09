<?php
	function update_ardosz_user_role() {
    	if ( get_option( 'ardosz_user_role_version' ) < 1 ) {
        	add_role(
				'ardosz_user', 
				'Ardosz gebruiker', 
				array( 
					'read' => true, 
					'level_0' => true 
				) 
			);
        	update_option( 
				'ardosz_user_role_version', 
				1 
			);
    	}
	}
	add_action( 'init', 'update_ardosz_user_role' );
?>