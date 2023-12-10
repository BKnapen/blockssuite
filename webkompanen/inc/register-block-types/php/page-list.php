<?php
	function php_block_init() {
		
		register_block_type( 'webkompanen/pagelist', [
			'api_version' 	  		=> 2,
    		'render_callback' 		=> 'render_block_webkompanen_portfolio',
			'title'					=> 'Pagelist',
			'category'				=> 'webkompanen',
			'description'			=> 'Create a pagelist',
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
	add_action( 'init', 'php_block_init', 99);
?>