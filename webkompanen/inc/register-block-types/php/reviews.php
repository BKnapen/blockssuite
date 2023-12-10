<?php
	function php_reviews_block_init() {
		
		register_block_type( 'webkompanen-blocks/reviews', [
			'api_version' 	  		=> 2,
    		'render_callback' 		=> 'render_block_webkompanen_reviews',
			'title'					=> 'Reviews',
			'category'				=> 'webkompanen-blocks/querys',
			'description'			=> 'Reviews',
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
	add_action( 'init', 'php_reviews_block_init', 99);
?>