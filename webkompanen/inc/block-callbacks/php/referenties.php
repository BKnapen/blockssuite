<?php

	function render_block_webkompanen_referenties($attributes) {
		
		$args = array(
    		'post_type' => 'referenties',
    		'posts_per_page' => -1,
    		'order' => 'ASC'
		);
		
		$the_query = new WP_Query( $args );
		
		ob_start();
		?>
		<style>
			.slider-test img {
  				width: 100px;
  				height: 100px;
  				animation: scroll 60s linear infinite;
				object-fit: contain;
			}
			.slide-track {
  				width: 100%;
  				display: flex;
  				gap: 3em;
  				overflow: hidden;
			}
			.slider-test {
 				margin-top: 70px;
  				padding: 0em;
			}
			@keyframes scroll {
  				0% {transform: translateX(0);}
  				100% {transform: translatex(-1000%)}
			}
		</style>
		<div class="slider-test">
  			<div class="slide-track">
				<?php
					if ( $the_query->have_posts() ):
						$j = 0;
        				while ( $the_query->have_posts() ) : $the_query->the_post();
							global $post;
							if(!empty(get_post_thumbnail_id( $post->ID ))):
								$imgurl =  wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), 'full' );
								$imgurl = $imgurl[0];
					?>			
    							<div class="slide-test">
      								<img src="<?php echo $imgurl; ?>" alt="">
    							</div>
					<?php
							endif;
							$j++;
						endwhile;
						wp_reset_postdata();
					endif;
				?>
  			</div>
		</div>
		<?php
		$output = ob_get_contents();
		ob_clean();
		ob_flush();
		return $output;
	}
?>