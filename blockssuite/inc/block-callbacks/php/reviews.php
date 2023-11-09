<?php

	function render_block_webkompanen_reviews($attributes) {
		
		$args = array(
    		'post_type' => 'reviews',
    		'posts_per_page' => -1,
    		'order' => 'ASC'
		);
		
		$the_query = new WP_Query( $args );
		
		ob_start();
		?>
		<div id="carouselExampleIndicators" class="carousel carousel-dark slide" data-bs-ride="carousel">
			<div class="carousel-inner">
				<?php
					if ( $the_query->have_posts() ):
						$j = 0;
        				while ( $the_query->have_posts() ) : $the_query->the_post();
							if($j === 0):
					?>
								<div class="carousel-item active">
									<div><?php the_content(); ?></div>
								</div>
						<?php
							else:
						?>
								<div class="carousel-item">
									<div><?php the_content(); ?></div>
								</div>
					<?php
							endif;
							$j++;
						endwhile;
						wp_reset_postdata();
					endif;
				?>
			</div>
  			<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    			<span class="carousel-control-prev-icon" aria-hidden="true"></span>
   				<span class="visually-hidden">Previous</span>
  			</button>
  			<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    			<span class="carousel-control-next-icon" aria-hidden="true"></span>
    			<span class="visually-hidden">Next</span>
  			</button>
		</div>
		<?php
		$output = ob_get_contents();
		ob_clean();
		ob_flush();
		return $output;
	}
?>