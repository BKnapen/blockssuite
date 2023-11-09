<?php
	function render_block_webkompanen_portfolio($attributes) {

		if ( defined( 'REST_REQUEST' ) && REST_REQUEST ) {
    	}
	
		$args = array(
			'post_type' 		=> 'page',
			'post_status' 		=> 'publish',
			'posts_per_page' 	=> $attributes['number_of_items']
		);
	
		// the query
		$the_query = new WP_Query( $args ); 
		ob_start();
		?>
		<section>
			<div class="container">
				<div class="row">
					<h2><?php echo $attributes['title'] ?></h2>
					<?php
						if ( $the_query->have_posts() ):
							global $post;
							while ( $the_query->have_posts() ) : $the_query->the_post();
								if(!empty(get_post_thumbnail_id( $post->ID ))):
									$imgurl =  wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), 'full' );
								endif;
								?>
								<div class="col-12 col-md-6 col-lg-4">
									<h5><?php echo get_the_title() ?></h5>
								<?php
									if($imgurl !== ''):
								?>
									<img class="img-fluid" src="<?php echo $imgurl[0] ?>" />
								<?php
									endif;
								?>
								</div>
								<?php
								if($imgurl !== ''):
								endif;
							endwhile;
						endif;
					?>
				</div>
			</div>
		</section>
		<?php
		$output = ob_get_contents();
		ob_clean();
		ob_flush();
		return $output;
	}
?>