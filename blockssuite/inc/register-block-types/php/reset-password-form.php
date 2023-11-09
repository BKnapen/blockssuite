<?php
	function php_resetpasswordform_block_init() {
		
		register_block_type( 'webkompanen/resetpasswordform', [
			'api_version' 	  		=> 2,
    		'render_callback' 		=> 'render_block_webkompanen_resetpasswordform',
			'title'					=> 'Password reset',
			'category'				=> 'webkompanen/security',
			'description'			=> 'Create a password reset modal form',
			'textdomain'			=> 'webkompanen',
			'attributes'      		=> [
				'number_of_items' 	=> [
					'default' => -1,
					'type'    => 'number'
				],
				'title' 	=> [
					'default' => '',
					'type'    => 'text'
				]
			]
		]);
	}
	//endif;
	add_action( 'init', 'php_resetpasswordform_block_init', 99);
?>