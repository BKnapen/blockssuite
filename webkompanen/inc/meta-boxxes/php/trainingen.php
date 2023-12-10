<?php
	// Exit if accessed directly.
	defined( 'ABSPATH' ) || exit;

	function trainingen_pie_chart_meta_box( $post_type ) {
		
		// Limit meta box to certain post types.
		$post_types = array( 'trainingen-admin' );

		//if ( in_array( $post_type, $post_types ) ):
			add_meta_box(
				'trainingen_pie_chart_meta_box_id',
				__( 'Overzicht training status', 'textdomain' ),
				'render_trainingen_pie_chart_meta_box',
				'trainingen-admin',
				'pie-chart'
			);
		//endif;
	}

	add_action( 'add_meta_boxes', 'trainingen_pie_chart_meta_box', 10, 2 );

	function trainingen_waardering_chart_meta_box( $post_type ) {
		
		// Limit meta box to certain post types.
		$post_types = array( 'trainingen-admin' );

		//if ( in_array( $post_type, $post_types ) ):
			add_meta_box(
				'trainingen_waardering_chart_meta_box_id',
				__( 'Waardering', 'textdomain' ),
				'render_trainingen_waardering_chart_meta_box',
				'trainingen-admin',
				'waardering-chart'
			);
		//endif;
	}

	add_action( 'add_meta_boxes', 'trainingen_waardering_chart_meta_box', 10, 2 );

	function trainingen_completed_chart_meta_box( $post_type ) {
		
		// Limit meta box to certain post types.
		$post_types = array( 'trainingen-admin' );

		//if ( in_array( $post_type, $post_types ) ):
			add_meta_box(
				'trainingen_completed_chart_meta_box_id',
				__( 'Video bekeken en vragen afgerond', 'textdomain' ),
				'render_trainingen_completed_chart_meta_box',
				'trainingen-admin',
				'completed-chart'
			);
		//endif;
	}

	add_action( 'add_meta_boxes', 'trainingen_completed_chart_meta_box', 10, 2 );

	function trainingen_waiting_chart_meta_box( $post_type ) {
		
		// Limit meta box to certain post types.
		$post_types = array( 'trainingen-admin' );

		//if ( in_array( $post_type, $post_types ) ):
			add_meta_box(
				'trainingen_waiting_chart_meta_box_id',
				__( 'Wachtend', 'textdomain' ),
				'render_trainingen_waiting_chart_meta_box',
				'trainingen-admin',
				'waiting-chart'
			);
		//endif;
	}

	add_action( 'add_meta_boxes', 'trainingen_waiting_chart_meta_box', 10, 2 );

	function trainingen_watched_chart_meta_box( $post_type ) {
		
		// Limit meta box to certain post types.
		$post_types = array( 'trainingen-admin' );

		//if ( in_array( $post_type, $post_types ) ):
			add_meta_box(
				'trainingen_watched_chart_meta_box_id',
				__( 'Video bekeken en vragen niet beantwoord', 'textdomain' ),
				'render_trainingen_watched_chart_meta_box',
				'trainingen-admin',
				'watched-chart'
			);
		//endif;
	}

	add_action( 'add_meta_boxes', 'trainingen_watched_chart_meta_box', 10, 2 );

	function render_trainingen_waardering_chart_meta_box(){
		
		$user_query = new WP_User_Query( 
			array( 
				'role' => ['ardosz_user']
			) 
		);
					
		$role_results = $user_query->get_results();
					
		if(!empty($role_results)):
			$data = array();
			foreach($role_results as $userdata):
				$pages = json_decode($userdata->pages, true);
				foreach($pages as $page):
					array_push(
						$data,
						array(
							'pageid' => $page['ID'],
							'userid' => $userdata->ID,
							'name' => get_the_title( $page['ID'] ),
							'username' => $userdata->first_name.' '.$userdata->last_name,
							'email' => $userdata->user_email,
							'sharer' => $page['sharer'],
							'start_date' => $page['start_date'],
							'end_date' => $page['end_date'],
							'status' => $page['status'],
							'results' => $page['results'],
							'emotion' => $page['feedback']['emotion'] === null ? -1 : $page['feedback']['emotion'],
							'description' => $page['feedback']['description']
						)			  
					);
				//$pages = json_decode($userdata['pages'], true);
				endforeach;
			endforeach;
		endif;
		
		$empty = wp_filter_object_list( $data, array('emotion' => -1) );
		$empty = number_format((count($empty) / count($data)) * 100, 2, '.', '') ;
		
		$frown = wp_filter_object_list( $data, array('emotion' => 0) );
		$frown = number_format((count($frown) / count($data)) * 100, 2, '.', '') ;
		
		$meh = wp_filter_object_list( $data, array('emotion' => 1) );
		$meh = number_format((count($meh) / count($data)) * 100, 2, '.', '') ;
		
		$smile = wp_filter_object_list( $data, array('emotion' => 2) );
		$smile = number_format((count($smile) / count($data)) * 100, 2, '.', '') ;
		
		$laugh = wp_filter_object_list( $data, array('emotion' => 3) );
		$laugh = number_format((count($laugh) / count($data)) * 100, 2, '.', '') ;
		
		$total = count($data);
		$output = '';
		ob_start();
		?>
			<div id="waardering-chart" data-total="<?php echo $total; ?>" data-empty="<?php echo $empty; ?>" data-frown="<?php echo $frown; ?>" data-meh="<?php echo $meh; ?>" data-smile="<?php echo $smile; ?>" data-laugh="<?php echo $laugh; ?>"></div>
		<?php
		
		$output = ob_get_contents();
		ob_clean();
		ob_flush();
		echo $output;
	}

	function render_trainingen_pie_chart_meta_box(){
		
		$user_query = new WP_User_Query( 
			array( 
				'role' => ['ardosz_user']
			) 
		);
					
		$role_results = $user_query->get_results();
					
		if(!empty($role_results)):
			$data = array();
			foreach($role_results as $userdata):
				$pages = json_decode($userdata->pages, true);
				foreach($pages as $page):
					array_push(
						$data,
						array(
							'pageid' => $page['ID'],
							'userid' => $userdata->ID,
							'name' => get_the_title( $page['ID'] ),
							'username' => $userdata->first_name.' '.$userdata->last_name,
							'email' => $userdata->user_email,
							'sharer' => $page['sharer'],
							'start_date' => $page['start_date'],
							'end_date' => $page['end_date'],
							'status' => $page['status'],
							'results' => $page['results'],
							'emotion' => $page['feedback']['emotion'],
							'description' => $page['feedback']['description']
						)			  
					);
				//$pages = json_decode($userdata['pages'], true);
				endforeach;
			endforeach;
		endif;
		
		$waiting = wp_filter_object_list( $data, array('status' => 0) );
		$waiting = number_format((count($waiting) / count($data)) * 100, 2, '.', '') ;
		
		$watched = wp_filter_object_list( $data, array('status' => 1) );
		$watched = number_format((count($watched) / count($data)) * 100, 2, '.', '') ;
		
		$completed = wp_filter_object_list( $data, array('status' => 2) );
		$completed = number_format((count($completed) / count($data)) * 100, 2, '.', '') ;
		
		$total = count($data);
		
		$output = '';
		ob_start();
		?>
			<div id="pie-chart" data-total="<?php echo $total; ?>" data-waiting="<?php echo $waiting; ?>" data-watched="<?php echo $watched; ?>" data-completed="<?php echo $completed; ?>"></div>
		<?php
		
		$output = ob_get_contents();
		ob_clean();
		ob_flush();
		echo $output;
	}

	function render_trainingen_waiting_chart_meta_box(){
		
		$user_query = new WP_User_Query( 
			array( 
				'role' => ['ardosz_user']
			) 
		);
					
		$role_results = $user_query->get_results();
					
		if(!empty($role_results)):
			$data = array();
			foreach($role_results as $userdata):
				$pages = json_decode($userdata->pages, true);
				foreach($pages as $page):
					array_push(
						$data,
						array(
							'pageid' => $page['ID'],
							'userid' => $userdata->ID,
							'name' => get_the_title( $page['ID'] ),
							'username' => $userdata->first_name.' '.$userdata->last_name,
							'email' => $userdata->user_email,
							'sharer' => $page['sharer'],
							'start_date' => $page['start_date'],
							'end_date' => $page['end_date'],
							'status' => $page['status'],
							'results' => $page['results'],
							'emotion' => $page['feedback']['emotion'],
							'description' => $page['feedback']['description']
						)			  
					);
				//$pages = json_decode($userdata['pages'], true);
				endforeach;
			endforeach;
		endif;
		
		
		
		$waiting = wp_filter_object_list( $data, array('status' => 0) );
		$waiting = number_format((count($waiting) / count($data)) * 100, 2, '.', '') ;
		
		$watched = wp_filter_object_list( $data, array('status' => 1) );
		$watched = number_format((count($watched) / count($data)) * 100, 2, '.', '') ;
		
		$completed = wp_filter_object_list( $data, array('status' => 2) );
		$completed = number_format((count($completed) / count($data)) * 100, 2, '.', '') ;
		
		$total = count($data);
		
		$output = '';
		ob_start();
		?>
			<div id="waiting-chart" data-total="<?php echo $total; ?>" data-waiting="<?php echo $waiting; ?>" data-watched="<?php echo $watched; ?>" data-completed="<?php echo $completed; ?>"></div>
		<?php
		
		$output = ob_get_contents();
		ob_clean();
		ob_flush();
		echo $output;
	}

	function render_trainingen_completed_chart_meta_box(){
		
		$user_query = new WP_User_Query( 
			array( 
				'role' => ['ardosz_user']
			) 
		);
					
		$role_results = $user_query->get_results();
					
		if(!empty($role_results)):
			$data = array();
			foreach($role_results as $userdata):
				$pages = json_decode($userdata->pages, true);
				foreach($pages as $page):
					array_push(
						$data,
						array(
							'pageid' => $page['ID'],
							'userid' => $userdata->ID,
							'name' => get_the_title( $page['ID'] ),
							'username' => $userdata->first_name.' '.$userdata->last_name,
							'email' => $userdata->user_email,
							'sharer' => $page['sharer'],
							'start_date' => $page['start_date'],
							'end_date' => $page['end_date'],
							'status' => $page['status'],
							'results' => $page['results'],
							'emotion' => $page['feedback']['emotion'],
							'description' => $page['feedback']['description']
						)			  
					);
				//$pages = json_decode($userdata['pages'], true);
				endforeach;
			endforeach;
		endif;
		
		
		
		$waiting = wp_filter_object_list( $data, array('status' => 0) );
		$waiting = number_format((count($waiting) / count($data)) * 100, 2, '.', '') ;
		
		$watched = wp_filter_object_list( $data, array('status' => 1) );
		$watched = number_format((count($watched) / count($data)) * 100, 2, '.', '') ;
		
		$completed = wp_filter_object_list( $data, array('status' => 2) );
		$completed = number_format((count($completed) / count($data)) * 100, 2, '.', '') ;
		
		$total = count($data);
		
		$output = '';
		ob_start();
		?>
			<div id="completed-chart" data-total="<?php echo $total; ?>" data-waiting="<?php echo $waiting; ?>" data-watched="<?php echo $watched; ?>" data-completed="<?php echo $completed; ?>"></div>
		<?php
		
		$output = ob_get_contents();
		ob_clean();
		ob_flush();
		echo $output;
	}

	function render_trainingen_watched_chart_meta_box(){
		
		$user_query = new WP_User_Query( 
			array( 
				'role' => ['ardosz_user']
			) 
		);
					
		$role_results = $user_query->get_results();
					
		if(!empty($role_results)):
			$data = array();
			foreach($role_results as $userdata):
				$pages = json_decode($userdata->pages, true);
				foreach($pages as $page):
					array_push(
						$data,
						array(
							'pageid' => $page['ID'],
							'userid' => $userdata->ID,
							'name' => get_the_title( $page['ID'] ),
							'username' => $userdata->first_name.' '.$userdata->last_name,
							'email' => $userdata->user_email,
							'sharer' => $page['sharer'],
							'start_date' => $page['start_date'],
							'end_date' => $page['end_date'],
							'status' => $page['status'],
							'results' => $page['results'],
							'emotion' => $page['feedback']['emotion'],
							'description' => $page['feedback']['description']
						)			  
					);
				//$pages = json_decode($userdata['pages'], true);
				endforeach;
			endforeach;
		endif;
		
		
		
		$waiting = wp_filter_object_list( $data, array('status' => 0) );
		$waiting = number_format((count($waiting) / count($data)) * 100, 2, '.', '') ;
		
		$watched = wp_filter_object_list( $data, array('status' => 1) );
		$watched = number_format((count($watched) / count($data)) * 100, 2, '.', '') ;
		
		$completed = wp_filter_object_list( $data, array('status' => 2) );
		$completed = number_format((count($completed) / count($data)) * 100, 2, '.', '') ;
		
		$total = count($data);
		
		$output = '';
		ob_start();
		?>
			<div id="watched-chart" data-total="<?php echo $total; ?>" data-waiting="<?php echo $waiting; ?>" data-watched="<?php echo $watched; ?>" data-completed="<?php echo $completed; ?>"></div>
		<?php
		
		$output = ob_get_contents();
		ob_clean();
		ob_flush();
		echo $output;
	}

	function trainingen_column_chart_meta_box( $post_type ) {
		// Limit meta box to certain post types.
		$post_types = array( 'trainingen-admin' );

		//if ( in_array( $post_type, $post_types ) ):
			add_meta_box(
				'trainingen_column_chart_meta_box_id',
				__( 'Column chart', 'textdomain' ),
				'render_trainingen_column_chart_meta_box',
				'trainingen-admin',
				'column-chart'
			);
		//endif;
	}

	add_action( 'add_meta_boxes', 'trainingen_column_chart_meta_box', 10, 2 );

	function render_trainingen_column_chart_meta_box(){
		$output = '';
		ob_start();
		?>
			<div id="column-chart"></div>
		<?php
		
		$output = ob_get_contents();
		ob_clean();
		ob_flush();
		echo $output;
	}
?>