<?php
	function update_verzuimweg_user_role() {
    	if ( get_option( 'verzuimweg_user_role_version' ) < 1 ) {
        	add_role(
				'verzuimweg_user', 
				'VerzuimWeg gebruiker', 
				array( 
					'read' => true, 
					'level_0' => true 
				) 
			);
        	update_option( 
				'verzuimweg_user_role_version', 
				1 
			);
    	}
	}
	add_action( 'init', 'update_verzuimweg_user_role' );
?>