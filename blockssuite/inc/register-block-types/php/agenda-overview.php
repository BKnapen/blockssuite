<?php
	function php_agenda_overview_block_init() {
		
		register_block_type( 'webkompanen-blocks/agenda-overview', [
			'api_version' 	  		=> 2,
    		'render_callback' 		=> 'render_block_webkompanen_agenda_overview',
			'title'					=> 'Agenda',
			'category'				=> 'webkompanen-blocks/querys',
			'description'			=> 'Beschikbare training overzicht gebruiker',
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
	add_action( 'init', 'php_agenda_overview_block_init', 99);
?>