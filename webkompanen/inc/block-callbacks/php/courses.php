<?php

	function render_block_webkompanen_courses($attributes) {
		
		global $post;
		$postid = $post->ID;
		
		if(isset($attributes['post'])):
			$postid = $attributes['post']['id'];
		endif;
		
		$course_minimum_attendee_capacity = get_post_meta( $postid, 'course_minimum_attendee_capacity', true );
		$course_maximum_attendee_capacity = get_post_meta( $postid, 'course_maximum_attendee_capacity', true );
		$course_duration = get_post_meta( $postid, 'course_duration', true );
		$hide_course_duration = get_post_meta( $postid, 'hide_course_duration', true );
		$course_price = get_post_meta( $postid, 'course_price', true );
		$course_price = get_post_meta( $postid, 'course_price', true );
		$course_les_method = get_post_meta( $postid, 'course_les_method', true );
		$course_certificate = get_post_meta( $postid, 'course_certificate', true );
		$course_study_load = get_post_meta( $postid, 'course_study_load', true );
		$course_entry_requirements = get_post_meta( $postid, 'course_entry_requirements', true );
		$course_target_audience = get_post_meta( $postid, 'course_target_audience', true );
		$course_days = get_post_meta( $postid, 'course_days', true );
		$course_event_schedule = get_post_meta( $postid, 'course_event_schedule', true );
		$course_first_lesson_free = get_post_meta( $postid, 'course_first_lesson_free', true );
		$course_price_per_lesson = get_post_meta( $postid, 'course_price_per_lesson', true );
		$course_show_as_weekly = get_post_meta( $postid, 'course_show_as_weekly', true );
		$categories = get_the_terms($postid, 'courses_categories');
		
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
	
		ob_start();
	
		# Send the user to his account or any page if already logged in.
		?>
			<table class="table table-striped">
                    <tbody>
						<?php if(is_array($course_event_schedule) && count($course_event_schedule) > 0 ): ?>
                        	<tr>
                            	<td class="text-nowrap">
									<i class="fa-solid fa-clock"></i>  <?php _e('Lestijden', 'webkompanen') ?>
								</td>
                            	<td>
									<p class="m-0">
										<?php 
											if(is_array($course_event_schedule)):
												$outputs = 0;
												foreach($course_days as $key=>$value):
													echo $value > 0 && $outputs == 0 ? $days[$key] : '';
													echo $value > 0 && $outputs > 0 ? ', '.$days[$key] : '';
													$value > 0 && $outputs == 0 ? $outputs++ : '';
												endforeach;
											endif;
											if(is_array($course_event_schedule)):
												if(isset($course_event_schedule[0]['startdate']) && isset($course_event_schedule[0]['enddate'])):
													echo ' '.date('H:i', strtotime($course_event_schedule[0]['startdate'])).' - '.date('H:i', strtotime($course_event_schedule[0]['enddate']));
												endif;
											endif;
										?>
									</p>
								</td>
                        	</tr>
						<?php endif; ?>
						<?php if(is_array($course_event_schedule) && count($course_event_schedule) > 0 ): ?>
                        	<tr>
                            	<td class="text-nowrap">
									<i class="fa-solid fa-calendar-days"></i> <?php _e('Startdatum', 'webkompanen') ?>
								</td>
                            	<td>
									<p class="m-0">
										<?php
											if(is_array($course_event_schedule)):
												if(isset($course_event_schedule[0]['startdate']) && isset($course_event_schedule[0]['enddate'])):
													if($course_show_as_weekly == 1): 
														$startdate = 
															date_i18n('l j F Y',strtotime("next ".date( 'l', strtotime($course_event_schedule[0]['startdate']))));
													else: 
														$startdate = date_i18n( 'l j F Y', strtotime($course_event_schedule[0]['startdate']) ); 
													endif;
													$enddate = date_i18n('d M Y', strtotime($course_event_schedule[0]['enddate']));
													echo _e('eerstvolgende startdatum ', 'webkompanen').$startdate;												
												endif;
											endif;
										?>
									</p>
								</td>
                        	</tr>
						<?php endif; ?>
						<?php
							if($hide_course_duration == 1):
							else:
						?>
							<?php if($course_duration): ?>
                        		<tr>
                            		<td class="text-nowrap"><i class="fa-solid fa-hourglass-start"></i> <?php _e('Cursusduur', 'webkompanen') ?></td>
                            		<td><p class="m-0"><?php echo $course_duration; ?> <?php _e('weken', 'webkompanen') ?></p></td>
							
                        		</tr>
							<?php endif; ?>
						<?php
							endif;
						?>
						<?php if($course_minimum_attendee_capacity || $course_maximum_attendee_capacity): ?>
                        	<tr>
                            	<td class="text-nowrap"><i class="fa-solid fa-people-group">
									</i> <?php _e('Aantal cursisten', 'webkompanen') ?>
								</td>
                            	<td>
									<p class="m-0">
										<?php echo $course_minimum_attendee_capacity ?> <?php if($course_maximum_attendee_capacity): _e('tot', 'webkompanen') ?> <?php echo $course_maximum_attendee_capacity ?> <?php _e('cursisten per groep', 'webkompanen'); else: _e('(minimum groepsgrootte).', 'webkompanen'); endif;?>
									</p>
								</td>
                        	</tr>
						<?php endif; ?>
						<?php if($course_price_per_lesson || $course_price): ?>
                        	<tr>
                            	<td class="text-nowrap">
									<i class="fa-solid fa-euro-sign"></i> <?php _e('Betaling', 'webkompanen') ?></td>
                            	<td>
									<?php if($course_first_lesson_free): ?>
										<p class="m-0"><?php _e('Eerste les gratis.', 'webkompanen') ?></p>
									<?php endif; ?>
									<?php if($course_price_per_lesson): ?>
										<p class="m-0">€<?php echo $course_price_per_lesson; ?> <?php _e('(per les).', 'webkompanen'); ?></p>
									<?php endif; ?>
									<?php if($course_price_per_lesson): ?>
										<p class="m-0"><?php _e('Prijs per', 'webkompanen'); ?> <?php echo $course_duration; ?> <?php _e('lessen', 'webkompanen'); ?> €<?php echo $course_price; ?>.</p>
									<?php else: ?>
										<p class="m-0">€<?php echo $course_price; ?> <?php _e('inclusief lesmateriaal.', 'webkompanen'); ?><br><?php _e('Het cursusbedrag kan in termijnen betaald worden.', 'webkompanen'); ?></p>
									<?php endif; ?>
								</td>
                        	</tr>
						<?php endif; ?>
						<?php if($course_target_audience): ?>
                        	<tr>
                            	<td class="text-nowrap">
									<i class="fa-solid fa-graduation-cap">
									</i> <?php _e('Instapniveau', 'webkompanen') ?> 
								</td>
                            	<td>
									<p class="m-0"><?php echo $course_target_audience ?>
								</td>
                        	</tr>
						<?php endif; ?>
						<?php if($course_les_method): ?>
                        	<tr>
                            	<td class="text-nowrap"><i class="fa-solid fa-book-open">
									</i> <?php _e('Cursusmateriaal', 'webkompanen') ?>
								</td>
                            	<td>
									<p class="m-0"><?php echo $course_les_method ?>
								</td>
                        	</tr>
						<?php endif; ?>
						<?php if($course_study_load): ?>
                        	<tr>
                            	<td class="text-nowrap">
									<i class="fa-solid fa-user"></i> <?php _e('Zelfstudie', 'webkompanen') ?>
								</td>
                            	<td>
									<p class="m-0"><?php echo $course_study_load ?>
								</td>
                        	</tr>
						<?php endif; ?>
						<?php if($course_certificate): ?>
                        	<tr>
                            	<td class="text-nowrap"><i class="fa-solid fa-certificate">
									</i> <?php _e('Afsluiting', 'webkompanen') ?> 
								</td>
                            	<td>
									<p class="m-0"><?php echo $course_certificate ?>
								</td>
                        </tr>
						<?php endif; ?>
                    </tbody>
                </table>
		<?php
		$output = ob_get_contents();
		ob_clean();
		ob_flush();
		return $output;
	}
?>