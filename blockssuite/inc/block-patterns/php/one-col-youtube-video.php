<?php
/**
 * Video block
 */
$url = untrailingslashit( get_template_directory_uri( __FILE__ ) );
ob_start();
?>
	<!--
		wp:webkompanen-blocks/section
		{
			"bgcolor":"primary"
		}
	-->
	<section class="bg-primary">
		<!-- 
			wp:webkompanen-blocks/container 
			{
				"classes":"container"
			}
		-->
		<div class="container">
		<!-- 
			wp:webkompanen-blocks/row 
			{
				"classes":"row",
				"gxs":3,
				"gxl":5
			}
		-->
			<div class="row g-3 g-xl-5">
				<!-- 
					wp:webkompanen-blocks/col
					{
						"colxs":12,
						"colsm":12,
						"colmd":12,
						"pxs":{
							"top":3,
							"right":3,
							"bottom":3,
							"left":3
						}
					}
				-->
				<div class="col-12 col-sm-12 col-md-12 p-3">
					<!--
						wp:webkompanen-blocks/div
						{
							"ratio":true,
							"ratiosize":"ratio-16x9",
							"mxs":{
								"top":null,
								"right":null,
								"bottom":3,
								"left":null
							}
						}
					-->
					<div class="ratio ratio-16x9 mb-3">
						<!--
							wp:webkompanen-blocks/youtube
							{
								"videoid":"Hxli8ZubjQ8"
							}
						-->
						<iframe allowfullscreen="" frameborder="0" src="https://www.youtube.com/embed/Hxli8ZubjQ8">
						</iframe>
						<!-- /wp:webkompanen-blocks/youtube -->
					</div>
					<!-- /wp:webkompanen-blocks/div -->
				</div>
				<!-- /wp:webkompanen-blocks/col -->
			</div>
			<!-- /wp:webkompanen-blocks/row -->
		</div>
		<!-- /wp:webkompanen-blocks/container -->
	</section>
	<!-- /wp:webkompanen-blocks/section -->
<?php
$output = ob_get_contents();
ob_clean();

return array(
	'title'      => __( 'YouTube video', 'webcompanen' ),
	'categories' => array( 'video' ),
	'blockTypes' => array( 'webcompanen/template-part/video' ),
	'content'    => $output
);
?>