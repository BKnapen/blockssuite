<?php
	function php_referenties_block_init() {
		
		register_block_type( 'webkompanen-blocks/referenties', [
			'api_version' 	  		=> 2,
    		'render_callback' 		=> 'render_block_webkompanen_referenties',
			'title'					=> 'Referenties',
			'category'				=> 'webkompanen-blocks/querys',
			'description'			=> 'Referenties',
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
	add_action( 'init', 'php_referenties_block_init', 99);
?>