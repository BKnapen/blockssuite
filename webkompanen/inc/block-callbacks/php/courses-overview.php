<?php

	function render_block_webkompanen_courses_overview($attributes) {
		$requestedcategorie = $attributes['requestedcategorie'];
		$args_beginners = array(
    		'post_type' => 'courses',
    		'posts_per_page' => -1,
			'tax_query' => array(
        		array(
           			'taxonomy' => 'courses_categories',
            		'field'    => 'slug',
					'terms'    => array( 'beginners' )
        		),
    		),
    		'orderby' => 'title',
    		'order' => 'ASC'
		);
		
		$args_halfgevorderd = array(
    		'post_type' => 'courses',
    		'posts_per_page' => -1,
			'tax_query' => array(
        		array(
           			'taxonomy' => 'courses_categories',
            		'field'    => 'slug',
					'terms'    => array( 'halfgevorderd', 'intermediate' )
        		),
    		),
    		'orderby' => 'title',
    		'order' => 'ASC'
		);
		
		$args_hbasic = array(
    		'post_type' => 'courses',
    		'posts_per_page' => -1,
			'tax_query' => array(
        		array(
           			'taxonomy' => 'courses_categories',
            		'field'    => 'slug',
					'terms'    => array( 'basis', 'basic' )
        		),
    		),
    		'orderby' => 'title',
    		'order' => 'ASC'
		);
		
		$args_gevorderd = array(
    		'post_type' => 'courses',
    		'posts_per_page' => -1,
			'tax_query' => array(
        		array(
           			'taxonomy' => 'courses_categories',
            		'field'    => 'slug',
					'terms'    => array( 'gevorderd', 'advanced' )
        		),
    		),
    		'orderby' => 'title',
    		'order' => 'ASC'
		);
		
		$args_overige_cursussen = array(
    		'post_type' => 'courses',
    		'posts_per_page' => -1,
			'tax_query' => array(
        		array(
           			'taxonomy' => 'courses_categories',
            		'field'    => 'slug',
					'terms'    => array( 'overige cursussen', 'other courses' )
        		),
    		),
    		'orderby' => 'title',
    		'order' => 'ASC'
		);
		
		$the_query_basic = new WP_Query( $args_hbasic );
		$the_query_beginners = new WP_Query( $args_beginners );
		$the_query_halfgevorderd = new WP_Query( $args_halfgevorderd );
		$the_query_gevorderd = new WP_Query( $args_gevorderd );
		$the_query_overige_cursussen = new WP_Query( $args_overige_cursussen );
		
		ob_start();
		?>
		<div class="table-responsive">
			<table class="table table-striped">
  				<thead>
  				</thead>
				<tbody>
		<?php
		
		if ( $the_query_basic->have_posts() ):
			?>
				<tr>
					<td colspan="4"><h2 class="text-secondary mt-2"><?php _e('Basis', 'webkompanen') ?></h2></td>
    			</tr>
    			<tr>
      				<th scope="col"><i class="fa-solid fa-graduation-cap me-2"></i><?php _e( 'Cursus', 'webkompanen' ) ?></th>
      				<th scope="col"><i class="fa-solid fa-calendar-days me-2"></i><?php _e( 'Periode', 'webkompanen' ) ?></th>
      				<th scope="col"><i class="fa-solid fa-calendar-day me-2"></i><?php _e( 'Dag', 'webkompanen' ) ?></th>
      				<th scope="col"><i class="fa-solid fa-clock me-2"></i><?php _e( 'Tijd', 'webkompanen' ) ?></th>
    			</tr>
			<?php
        	while ( $the_query_basic->have_posts() ) : $the_query_basic->the_post();
				global $post;
				$course_minimum_attendee_capacity = get_post_meta( $post->ID, 'course_minimum_attendee_capacity', true );
				$course_maximum_attendee_capacity = get_post_meta( $post->ID, 'course_maximum_attendee_capacity', true );
				$course_duration = get_post_meta( $post->ID, 'course_duration', true );
				$course_price = get_post_meta( $post->ID, 'course_price', true );
				$course_days = get_post_meta( $post->ID, 'course_days', true );
				$course_event_schedule = get_post_meta( $post->ID, 'course_event_schedule', true );
				$categories = get_the_terms($post->ID, 'courses_categories');
				$course_show_as_weekly = get_post_meta( $post->ID, 'course_show_as_weekly', true );
				$course_show_as_monthly = get_post_meta( $post->ID, 'course_show_as_monthly', true );
		
				$sunday = date_i18n('l', strtotime('next sunday'));
				$monday = date_i18n('l', strtotime('next monday'));
				$tuesday = date_i18n('l', strtotime('next tuesday'));
				$wednesday = date_i18n('l', strtotime('next wednesday'));
				$thursday = date_i18n('l', strtotime('next thursday'));
				$friday = date_i18n('l', strtotime('next friday'));
				$saturday = date_i18n('l', strtotime('next saturday'));
				$days = [
    				$sunday,
    				$monday,
    				$tuesday,
    				$wednesday,
    				$thursday,
    				$friday,
    				$saturday
				];
			?>
				<tr>
					<td>
						<a class="text-secondary text-decoration-underline" href="<?php echo esc_url( get_permalink() ); ?>"><?php the_title(); ?></a>
					</td>
					<td>
					<?php 
						if($course_show_as_weekly):
							_e('Wekelijks', 'webkompanen');
						elseif($course_show_as_monthly):
							_e('Maandelijks', 'webkompanen');
						else:
							if(is_array($course_event_schedule)):
								if(isset($course_event_schedule[0]['startdate']) && isset($course_event_schedule[0]['enddate'])):
									$startdate = date_i18n('d M Y', strtotime($course_event_schedule[0]['startdate']));
									$enddate = date_i18n('d M Y', strtotime($course_event_schedule[0]['enddate']));
									echo $startdate.' - '.$enddate;
								endif;
							endif;
						endif;
					?>
					</td>
					<td>
					<?php 
						if(is_array($course_event_schedule)):
							$outputs = 0;
							foreach($course_days as $key=>$value):
								echo $value > 0 && $outputs == 0 ? $days[$key] : '';
								echo $value > 0 && $outputs > 0 ? ', '.$days[$key] : '';
								$value > 0 && $outputs == 0 ? $outputs++ : '';
							endforeach;
						endif;
					?>
					</td>
					<td>
					<?php 
						if(is_array($course_event_schedule)):
								if(isset($course_event_schedule[0]['startdate']) && isset($course_event_schedule[0]['enddate'])):
								echo date('H:i', strtotime($course_event_schedule[0]['startdate'])).' - '.date('H:i', strtotime($course_event_schedule[0]['enddate']));
								endif;
						endif;
					?>
					</td>
				</tr>
				<p><?php //echo $course_days; ?>
			<?php
			endwhile;
			wp_reset_postdata();
		endif;
		
		if ( $the_query_beginners->have_posts() ):
			?>
				<tr>
					<td colspan="4"><h2 class="text-secondary mt-2"><?php _e('Beginners', 'webkompanen') ?></h2></td>
    			</tr>
    			<tr>
      				<th scope="col"><i class="fa-solid fa-graduation-cap me-2"></i><?php _e( 'Cursus', 'webkompanen' ) ?></th>
      				<th scope="col"><i class="fa-solid fa-calendar-days me-2"></i><?php _e( 'Periode', 'webkompanen' ) ?></th>
      				<th scope="col"><i class="fa-solid fa-calendar-day me-2"></i><?php _e( 'Dag', 'webkompanen' ) ?></th>
      				<th scope="col"><i class="fa-solid fa-clock me-2"></i><?php _e( 'Tijd', 'webkompanen' ) ?></th>
    			</tr>
			<?php
        	while ( $the_query_beginners->have_posts() ) : $the_query_beginners->the_post();
				global $post;
				$course_minimum_attendee_capacity = get_post_meta( $post->ID, 'course_minimum_attendee_capacity', true );
				$course_maximum_attendee_capacity = get_post_meta( $post->ID, 'course_maximum_attendee_capacity', true );
				$course_duration = get_post_meta( $post->ID, 'course_duration', true );
				$course_price = get_post_meta( $post->ID, 'course_price', true );
				$course_days = get_post_meta( $post->ID, 'course_days', true );
				$course_event_schedule = get_post_meta( $post->ID, 'course_event_schedule', true );
				$categories = get_the_terms($post->ID, 'courses_categories');
				$course_show_as_weekly = get_post_meta( $post->ID, 'course_show_as_weekly', true );
				$course_show_as_monthly = get_post_meta( $post->ID, 'course_show_as_monthly', true );
		
				$sunday = date_i18n('l', strtotime('next sunday'));
				$monday = date_i18n('l', strtotime('next monday'));
				$tuesday = date_i18n('l', strtotime('next tuesday'));
				$wednesday = date_i18n('l', strtotime('next wednesday'));
				$thursday = date_i18n('l', strtotime('next thursday'));
				$friday = date_i18n('l', strtotime('next friday'));
				$saturday = date_i18n('l', strtotime('next saturday'));
				$days = [
    				$sunday,
    				$monday,
    				$tuesday,
    				$wednesday,
    				$thursday,
    				$friday,
    				$saturday
				];
			?>
				<tr>
					<td>
						<a class="text-secondary text-decoration-underline" href="<?php echo esc_url( get_permalink() ); ?>"><?php the_title(); ?></a>
					</td>
					<td>
					<?php 
						if($course_show_as_weekly):
							_e('Weekelijks', 'webkompanen');
						elseif($course_show_as_monthly):
							_e('Maandelijks', 'webkompanen');
						else:
							if(is_array($course_event_schedule)):
								if(isset($course_event_schedule[0]['startdate']) && isset($course_event_schedule[0]['enddate'])):
									$startdate = date_i18n('d M Y', strtotime($course_event_schedule[0]['startdate']));
									$enddate = date_i18n('d M Y', strtotime($course_event_schedule[0]['enddate']));
									echo $startdate.' - '.$enddate;
								endif;
							endif;
						endif;
					?>
					</td>
					<td>
					<?php 
						if(is_array($course_event_schedule)):
							$outputs = 0;
							foreach($course_days as $key=>$value):
								echo $value > 0 && $outputs == 0 ? $days[$key] : '';
								echo $value > 0 && $outputs > 0 ? ', '.$days[$key] : '';
								$value > 0 && $outputs == 0 ? $outputs++ : '';
							endforeach;
						endif;
					?>
					</td>
					<td>
					<?php 
						if(is_array($course_event_schedule)):
								if(isset($course_event_schedule[0]['startdate']) && isset($course_event_schedule[0]['enddate'])):
								echo date('H:i', strtotime($course_event_schedule[0]['startdate'])).' - '.date('H:i', strtotime($course_event_schedule[0]['enddate']));
								endif;
						endif;
					?>
					</td>
				</tr>
				<p><?php //echo $course_days; ?>
			<?php
			endwhile;
			wp_reset_postdata();
		endif;
		
		if ( $the_query_halfgevorderd->have_posts() ):
			?>
				<tr>
					<td colspan="4"><h2 class="text-secondary mt-2"><?php _e('Halfgevorderd', 'webkompanen') ?></h2></td>
    			</tr>
				<tr>
      				<th scope="col"><i class="fa-solid fa-graduation-cap me-2"></i><?php _e( 'Cursus', 'webkompanen' ) ?></th>
      				<th scope="col"><i class="fa-solid fa-calendar-days me-2"></i><?php _e( 'Periode', 'webkompanen' ) ?></th>
      				<th scope="col"><i class="fa-solid fa-calendar-day me-2"></i><?php _e( 'Dag', 'webkompanen' ) ?></th>
      				<th scope="col"><i class="fa-solid fa-clock me-2"></i><?php _e( 'Tijd', 'webkompanen' ) ?></th>
    			</tr>
			<?php
        	while ( $the_query_halfgevorderd->have_posts() ) : $the_query_halfgevorderd->the_post();
				global $post;
				$course_minimum_attendee_capacity = get_post_meta( $post->ID, 'course_minimum_attendee_capacity', true );
				$course_maximum_attendee_capacity = get_post_meta( $post->ID, 'course_maximum_attendee_capacity', true );
				$course_duration = get_post_meta( $post->ID, 'course_duration', true );
				$course_price = get_post_meta( $post->ID, 'course_price', true );
				$course_days = get_post_meta( $post->ID, 'course_days', true );
				$course_event_schedule = get_post_meta( $post->ID, 'course_event_schedule', true );
				$categories = get_the_terms($post->ID, 'courses_categories');
				$course_show_as_weekly = get_post_meta( $post->ID, 'course_show_as_weekly', true );
				$course_show_as_monthly = get_post_meta( $post->ID, 'course_show_as_monthly', true );
		
				$sunday = date_i18n('l', strtotime('next sunday'));
				$monday = date_i18n('l', strtotime('next monday'));
				$tuesday = date_i18n('l', strtotime('next tuesday'));
				$wednesday = date_i18n('l', strtotime('next wednesday'));
				$thursday = date_i18n('l', strtotime('next thursday'));
				$friday = date_i18n('l', strtotime('next friday'));
				$saturday = date_i18n('l', strtotime('next saturday'));
				$days = [
    				$sunday,
    				$monday,
    				$tuesday,
    				$wednesday,
    				$thursday,
    				$friday,
    				$saturday
				];
			?>
				<tr>
					<td>
						<a class="text-secondary text-decoration-underline" href="<?php echo esc_url( get_permalink() ); ?>"><?php the_title(); ?></a>
					</td>
					<td>
					<?php 
						if($course_show_as_weekly):
							_e('Wekelijks', 'webkompanen');
						elseif($course_show_as_monthly):
							_e('Maandelijks', 'webkompanen');
						else:
							if(is_array($course_event_schedule)):
								if(isset($course_event_schedule[0]['startdate']) && isset($course_event_schedule[0]['enddate'])):
									$startdate = date_i18n('d M Y', strtotime($course_event_schedule[0]['startdate']));
									$enddate = date_i18n('d M Y', strtotime($course_event_schedule[0]['enddate']));
									echo $startdate.' - '.$enddate;
								endif;
							endif;
						endif;
					?>
					</td>
					<td>
					<?php 
						if(is_array($course_event_schedule)):
							$outputs = 0;
							foreach($course_days as $key=>$value):
								echo $value > 0 && $outputs == 0 ? $days[$key] : '';
								echo $value > 0 && $outputs > 0 ? ', '.$days[$key] : '';
								$value > 0 && $outputs == 0 ? $outputs++ : '';
							endforeach;
						endif;
					?>
					</td>
					<td>
					<?php 
						if(is_array($course_event_schedule)):
								if(isset($course_event_schedule[0]['startdate']) && isset($course_event_schedule[0]['enddate'])):
								echo date('H:i', strtotime($course_event_schedule[0]['startdate'])).' - '.date('H:i', strtotime($course_event_schedule[0]['enddate']));
								endif;
						endif;
					?>
					</td>
				</tr>
				<p><?php //echo $course_days; ?>
			<?php
			endwhile;
			wp_reset_postdata();
		endif;
		
		if ( $the_query_gevorderd->have_posts() ):
			?>
				<tr>
					<td colspan="4"><h2 class="text-secondary mt-2"><?php _e('Gevorderd', 'webkompanen') ?></h2></td>
    			</tr>
				<tr>
      				<th scope="col"><i class="fa-solid fa-graduation-cap me-2"></i><?php _e( 'Cursus', 'webkompanen' ) ?></th>
      				<th scope="col"><i class="fa-solid fa-calendar-days me-2"></i><?php _e( 'Periode', 'webkompanen' ) ?></th>
      				<th scope="col"><i class="fa-solid fa-calendar-day me-2"></i><?php _e( 'Dag', 'webkompanen' ) ?></th>
      				<th scope="col"><i class="fa-solid fa-clock me-2"></i><?php _e( 'Tijd', 'webkompanen' ) ?></th>
    			</tr>
			<?php
        	while ( $the_query_gevorderd->have_posts() ) : $the_query_gevorderd->the_post();
				global $post;
				$course_minimum_attendee_capacity = get_post_meta( $post->ID, 'course_minimum_attendee_capacity', true );
				$course_maximum_attendee_capacity = get_post_meta( $post->ID, 'course_maximum_attendee_capacity', true );
				$course_duration = get_post_meta( $post->ID, 'course_duration', true );
				$course_price = get_post_meta( $post->ID, 'course_price', true );
				$course_days = get_post_meta( $post->ID, 'course_days', true );
				$course_event_schedule = get_post_meta( $post->ID, 'course_event_schedule', true );
				$categories = get_the_terms($post->ID, 'courses_categories');
				$course_show_as_weekly = get_post_meta( $post->ID, 'course_show_as_weekly', true );
				$course_show_as_monthly = get_post_meta( $post->ID, 'course_show_as_monthly', true );
		
				$sunday = date_i18n('l', strtotime('next sunday'));
				$monday = date_i18n('l', strtotime('next monday'));
				$tuesday = date_i18n('l', strtotime('next tuesday'));
				$wednesday = date_i18n('l', strtotime('next wednesday'));
				$thursday = date_i18n('l', strtotime('next thursday'));
				$friday = date_i18n('l', strtotime('next friday'));
				$saturday = date_i18n('l', strtotime('next saturday'));
				$days = [
    				$sunday,
    				$monday,
    				$tuesday,
    				$wednesday,
    				$thursday,
    				$friday,
    				$saturday
				];
			?>
				<tr>
					<td>
						<a class="text-secondary text-decoration-underline" href="<?php echo esc_url( get_permalink() ); ?>"><?php the_title(); ?></a>
					</td>
					<td>
					<?php 
						if($course_show_as_weekly):
							_e('Wekelijks', 'webkompanen');
						elseif($course_show_as_monthly):
							_e('Maandelijks', 'webkompanen');
						else:
							if(is_array($course_event_schedule)):
								if(isset($course_event_schedule[0]['startdate']) && isset($course_event_schedule[0]['enddate'])):
									$startdate = date_i18n('d M Y', strtotime($course_event_schedule[0]['startdate']));
									$enddate = date_i18n('d M Y', strtotime($course_event_schedule[0]['enddate']));
									echo $startdate.' - '.$enddate;
								endif;
							endif;
						endif;
					?>
					</td>
					<td>
					<?php 
						if(is_array($course_event_schedule)):
							$outputs = 0;
							foreach($course_days as $key=>$value):
								echo $value > 0 && $outputs == 0 ? $days[$key] : '';
								echo $value > 0 && $outputs > 0 ? ', '.$days[$key] : '';
								$value > 0 && $outputs == 0 ? $outputs++ : '';
							endforeach;
						endif;
					?>
					</td>
					<td>
					<?php 
						if(is_array($course_event_schedule)):
								if(isset($course_event_schedule[0]['startdate']) && isset($course_event_schedule[0]['enddate'])):
								echo date('H:i', strtotime($course_event_schedule[0]['startdate'])).' - '.date('H:i', strtotime($course_event_schedule[0]['enddate']));
								endif;
						endif;
					?>
					</td>
				</tr>
				<p><?php //echo $course_days; ?>
			<?php
			endwhile;
			wp_reset_postdata();
		endif;
		if ( $the_query_overige_cursussen->have_posts() ):
			?>
				<tr>
					<td colspan="4"><h2 class="text-secondary mt-2"><?php _e('Overige cursussen', 'webkompanen') ?></h2></td>
    			</tr>
				<tr>
      				<th scope="col"><i class="fa-solid fa-graduation-cap me-2"></i><?php _e( 'Cursus', 'webkompanen' ) ?></th>
      				<th scope="col"><i class="fa-solid fa-calendar-days me-2"></i><?php _e( 'Periode', 'webkompanen' ) ?></th>
      				<th scope="col"><i class="fa-solid fa-calendar-day me-2"></i><?php _e( 'Dag', 'webkompanen' ) ?></th>
      				<th scope="col"><i class="fa-solid fa-clock me-2"></i><?php _e( 'Tijd', 'webkompanen' ) ?></th>
    			</tr>
			<?php
        	while ( $the_query_overige_cursussen->have_posts() ) : $the_query_overige_cursussen->the_post();
				global $post;
				$course_minimum_attendee_capacity = get_post_meta( $post->ID, 'course_minimum_attendee_capacity', true );
				$course_maximum_attendee_capacity = get_post_meta( $post->ID, 'course_maximum_attendee_capacity', true );
				$course_duration = get_post_meta( $post->ID, 'course_duration', true );
				$course_price = get_post_meta( $post->ID, 'course_price', true );
				$course_days = get_post_meta( $post->ID, 'course_days', true );
				$course_event_schedule = get_post_meta( $post->ID, 'course_event_schedule', true );
				$categories = get_the_terms($post->ID, 'courses_categories');
				$course_show_as_weekly = get_post_meta( $post->ID, 'course_show_as_weekly', true );
				$course_show_as_monthly = get_post_meta( $post->ID, 'course_show_as_monthly', true );
		
				$sunday = date_i18n('l', strtotime('next sunday'));
				$monday = date_i18n('l', strtotime('next monday'));
				$tuesday = date_i18n('l', strtotime('next tuesday'));
				$wednesday = date_i18n('l', strtotime('next wednesday'));
				$thursday = date_i18n('l', strtotime('next thursday'));
				$friday = date_i18n('l', strtotime('next friday'));
				$saturday = date_i18n('l', strtotime('next saturday'));
				$days = [
    				$sunday,
    				$monday,
    				$tuesday,
    				$wednesday,
    				$thursday,
    				$friday,
    				$saturday
				];
			?>
				<tr>
					<td>
						<a class="text-secondary text-decoration-underline" href="<?php echo esc_url( get_permalink() ); ?>"><?php the_title(); ?></a>
					</td>
					<td>
					<?php 
						if($course_show_as_weekly):
							_e('Wekelijks', 'webkompanen');
						elseif($course_show_as_monthly):
							_e('Maandelijks', 'webkompanen');
						else:
							if(is_array($course_event_schedule)):
								if(isset($course_event_schedule[0]['startdate']) && isset($course_event_schedule[0]['enddate'])):
									$startdate = date_i18n('d M Y', strtotime($course_event_schedule[0]['startdate']));
									$enddate = date_i18n('d M Y', strtotime($course_event_schedule[0]['enddate']));
									echo $startdate.' - '.$enddate;
								endif;
							endif;
						endif;
					?>
					</td>
					<td>
					<?php 
						if(is_array($course_event_schedule)):
							$outputs = 0;
							foreach($course_days as $key=>$value):
								echo $value > 0 && $outputs == 0 ? $days[$key] : '';
								echo $value > 0 && $outputs > 0 ? ', '.$days[$key] : '';
								$value > 0 && $outputs == 0 ? $outputs++ : '';
							endforeach;
						endif;
					?>
					</td>
					<td>
					<?php 
						if(is_array($course_event_schedule)):
								if(isset($course_event_schedule[0]['startdate']) && isset($course_event_schedule[0]['enddate'])):
								echo date('H:i', strtotime($course_event_schedule[0]['startdate'])).' - '.date('H:i', strtotime($course_event_schedule[0]['enddate']));
								endif;
						endif;
					?>
					</td>
				</tr>
				<p><?php //echo $course_days; ?>
			<?php
			endwhile;
			wp_reset_postdata();
		endif;
		?>
				</tbody>
			</table>
		</div>
		<?php
	
		# Send the user to his account or any page if already logged in.
		?>
		<?php
		$output = ob_get_contents();
		ob_clean();
		ob_flush();
		return $output;
	}
?>