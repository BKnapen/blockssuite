<?php
	function update_acture_freelance_solutions_user_role() {
    	if ( get_option( 'acture_freelance_solutions_user_role_version' ) < 1 ) {
        	add_role(
				'acture_freelance_solutions_user', 
				'Acture Freelance Solutions gebruiker', 
				array( 
					'read' => true, 
					'level_0' => true 
				) 
			);
        	update_option( 
				'acture_freelance_solutions_user_role_version', 
				1 
			);
    	}
	}
	add_action( 'init', 'update_acture_freelance_solutions_user_role' );
?>