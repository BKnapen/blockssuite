<?php
	function update_tulpenfonds_user_role() {
    	if ( get_option( 'tulpenfonds_user_role_version' ) < 1 ) {
        	add_role(
				'tulpenfonds_user', 
				'Tulpenfonds gebruiker', 
				array( 
					'read' => true, 
					'level_0' => true 
				) 
			);
        	update_option( 
				'tulpenfonds_user_role_version', 
				1 
			);
    	}
	}
	add_action( 'init', 'update_tulpenfonds_user_role' );
?>