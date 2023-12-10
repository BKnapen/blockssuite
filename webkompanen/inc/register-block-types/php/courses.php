<?php
	function php_courses_block_init() {
		
		register_block_type( 'webkompanen-blocks/courses', [
			'api_version' 	  		=> 2,
    		'render_callback' 		=> 'render_block_webkompanen_courses',
			'title'					=> 'Cursus gegevens',
			'category'				=> 'webkompanen-blocks/querys',
			'description'			=> 'Tabel met gegevens van één specifieke training.',
			'textdomain'			=> 'webkompanen',
			'attributes'      		=> [
				'number_of_items' 	=> [
					'default' => -1,
					'type'    => 'number'
				],
				'title' 	=> [
					'default' => '',
					'type'    => 'text'
				],
				'url' => [
					'default' => '',
					'type' => 'text'
				],
				'post' => [
					'type' => 'object'
				]
			]
		]);
	}
	//endif;
	add_action( 'init', 'php_courses_block_init', 99);
?>