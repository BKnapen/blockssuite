<?php
$url = untrailingslashit( get_template_directory_uri( __FILE__ ) );
/**
 * Text Two columns, Left column: small image Right column: h5 title + h2 title
 */

ob_start();
?>
<!-- wp:webkompanen-blocks/section {"classes":""} -->
<section>
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
				"justifycontentxs":"content-around",
				"alignitemsxs":"center"
			} 
		-->
    	<div class="row justify-content-around align-items-center">
			<!-- 
				wp:webkompanen-blocks/col 
				{
					"mxs":{
						"top":null,
						"right":null,
						"bottom":"3",
						"left":null
					},
					"msm":{
						"top":null,
						"right":null,
						"bottom":"0",
						"left":null
					},
					"colsm":6,
					"collg":4
				} 
			-->
      		<div class="col-sm-6 col-lg-4 mb-3 mb-sm-0">
				<!-- 
					wp:webkompanen-blocks/img 
					{
						"classes":"rounded",
						"imagePlaceholder":"<?php echo $url ?>/assets/images/jpg/card-image-background-2.jpeg"
					} 
				-->
        		<img class="rounded" src="<?php echo $url ?>/assets/images/jpg/card-image-background-2.jpeg" alt="" width="" height="" style="height:auto !important;width:px">
				<!-- /wp:webkompanen-blocks/img -->
      		</div>		
			<!-- /wp:webkompanen-blocks/col -->
			<!-- 
				wp:webkompanen-blocks/col 
				{
					"colsm":6,
					"collg":5
				} 
			-->
      		<div class="col-sm-6 col-lg-5">
				<!-- 
					wp:webkompanen-blocks/span 
					{
						"classes":"h5",
						"content":"Build it with Insight"
					} 
				-->
        		<span class="h5">
					Build it with Insight
				</span>
				<!-- /wp:webkompanen-blocks/span -->
				<!-- 
					wp:webkompanen-blocks/span 
					{
						"classes":"h2 d-block mt-3 mt-md-4",
						"content":"Speed up your workflow with tons of pre-made content blocks. Assembling your site is easier than ever before."
					} 
				-->
        		<span class="h2 d-block mt-3 mt-md-4">
					Speed up your workflow with tons of pre-made content blocks. Assembling your site is easier than ever before.
				</span>
				<!-- /wp:webkompanen-blocks/span -->
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
	'title'      => __( 'Text Two columns, Left column: small image Right column: h5 title + h2 title', 'webcompanen' ),
	'categories' => array( 'text' ),
	'blockTypes' => array( 'webcompanen/template-part/text' ),
	'content'    => $output,
    'keywords'      => array( 'text' ),
    'viewportWidth' => 1200
);