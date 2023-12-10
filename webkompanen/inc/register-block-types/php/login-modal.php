<?php
	function php_login_block_init() {
		
		register_block_type( 'webkompanen/login', [
			'api_version' 	  		=> 2,
    		'render_callback' 		=> 'render_block_webkompanen_login',
			'title'					=> 'Login',
			'category'				=> 'webkompanen/security',
			'description'			=> 'Create a login modal',
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
	add_action( 'init', 'php_login_block_init', 99);
?>