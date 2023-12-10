<?php

	function render_block_webkompanen_agenda_overview($attributes) {
		//2023-06-03T13:00:00
		/*
		
				'relation' => 'AND',
        		array(
            		'key'     => 'agenda_start_date',
            		'value'   => date('Y-m-d'),
            		'compare' => '<='
        		),
		*/
		$args = array(
    		'post_type' => 'agenda',
    		'posts_per_page' => -1,
			'meta_query' => array(
        		array(
            		'key'     => 'agenda_end_date',
            		'value'   => date('Y-m-d'),
            		'compare' => '>='
        		)
    		),
			'orderby' => 'meta_value',
            'meta_key' => 'agenda_start_date',
    		'order' => 'ASC'
		);
		
		$the_query = new WP_Query( $args );
		
		ob_start();
		?>

			<section class="py-5">
				<div class="container">
					<div class="row g-2">
		<?php
		if ( $the_query->have_posts() ):
			$i = 0;
        	while ( $the_query->have_posts() ) : $the_query->the_post();
				$imgurl = '';
				$excerpt = '';
				global $post;
		
				$agenda_minimum_attendee_capacity = get_post_meta( $post->ID, 'agenda_minimum_attendee_capacity', true );
				$agenda_maximum_attendee_capacity = get_post_meta( $post->ID, 'agenda_maximum_attendee_capacity', true );
				$agenda_duration = get_post_meta( $post->ID, 'agenda_duration', true );
				$agenda_price = get_post_meta( $post->ID, 'agenda_ticket_price', true );
				$agenda_location_address = get_post_meta( $post->ID, 'agenda_location_address', true );
				$agenda_start_date = get_post_meta( $post->ID, 'agenda_start_date', true );
				$agenda_end_date = get_post_meta( $post->ID, 'agenda_end_date', true );
				$agenda_image_url = get_post_meta( $post->ID, 'agenda_image_url', true );
				$agenda_button_text = get_post_meta( $post->ID, 'agenda_button_text', true );
				$agenda_image = get_post_meta( $post->ID, 'agenda_image', true );
				$agenda_link = get_post_meta( $post->ID, 'agenda_link', true );
				$agenda_weekly_event = get_post_meta( $post->ID, 'agenda_weekly_event', true );
				
				$agenda_button_text = $agenda_button_text !== '' ? $agenda_button_text : 'Meer info';
				
				$btnlink = esc_url( get_permalink($post->ID) );
		
				if(is_array($agenda_link) && !empty($agenda_link) ):
					if(isset($agenda_link[0]['url'])):
						$btnlink =  esc_url( $agenda_link[0]['url'] );
					endif;
				endif;
		
				$excerpt = get_the_excerpt($post->ID);
				
				if(is_array($agenda_image) && !empty($agenda_image) ):
					$imgurl = $agenda_image[0]['url'];
				elseif(!empty(get_post_thumbnail_id( $post->ID ))):
					$imgurl =  wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), 'full' );
					$imgurl = $imgurl[0];
				endif;
		
				if($i % 2 == 0):
        			$order = '';
					$bgcolor = ' bg-secondary-100';
    			else:
        			$order = ' order-lg-2';
					$bgcolor = ' bg-tertiary-200';
    			endif;
			?>
						<div class="col-12 col-md-6 col-lg-4 position-relative">
							<div class="h-100 p-3 <?php echo $bgcolor ?>">
							<div class="ratio ratio-1x1">
								<img class="w-100 img-fluid object-fit-cover" src="<?php echo $imgurl; ?>" alt=""/>
							</div>
							<h3 class="text-secondary mt-3 mb-0"><?php the_title()?></h3>
							<p class="fs-6">
								<i class="fa-solid fa-calendar-days"></i> <?php if($agenda_weekly_event == 1): echo date_i18n('l j F Y',strtotime("next ".date( 'l', strtotime($agenda_start_date).""))); ?><?php else: echo date_i18n( 'l j F Y', strtotime($agenda_start_date) ); endif; ?>
								<br>
								<i class="fa-solid fa-clock"></i> <?php echo date_i18n( 'H:i', strtotime($agenda_start_date) ); ?> - <?php echo date_i18n( 'H:i', strtotime($agenda_end_date) ); ?>
								<br>
								<i class="fa-solid fa-euro-sign"></i> <?php echo $agenda_price; ?>
								<br>
								<i class="fa-sharp fa-solid fa-location-dot"></i> <?php echo $agenda_location_address ?>
							</p>
							<div class="pb-5"><?php $excerpt !== '' ? the_excerpt() : the_content(); ?></div>
							<a href="<?php echo $btnlink; ?>" class="btn btn-primary bottom-0 start-0 position-absolute text-white mt-3 mb-3 ms-3 d-block"><strong><?php echo $agenda_button_text; ?></strong></a>
							</div>
						</div>
			<?php
			$i++;
			endwhile;
			wp_reset_postdata();
		endif;
		?>
					</div>
				</div>
			</section>
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