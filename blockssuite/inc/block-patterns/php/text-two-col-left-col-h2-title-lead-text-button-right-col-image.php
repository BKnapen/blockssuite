<?php
$url = untrailingslashit( get_template_directory_uri( __FILE__ ) );
/**
 * Text two columns, Left column: h2 title + lead text + button. Right column image
 */

ob_start();
?>
<!-- 
	wp:webkompanen-blocks/section 
	{
		"classes":""
	} 
-->
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
				"classes":"card flex-column flex-md-row flex-md-row-reverse",
				"gxs":0,
				"pxs":{
					"top":0,
					"right":0,
					"bottom":0,
					"left":0
				}
			} 
		-->
    	<div class="card row g-0 p-0 flex-column flex-md-row flex-md-row-reverse">
			<!-- 
				wp:webkompanen-blocks/col 
				{
					"classes":"flex-column",
					"colmd": 6
				} 
			-->
      		<div class="flex-column col-md-6">
				<!-- 
					wp:webkompanen-blocks/img 
					{
						"classes":"card-img flex-grow-1 h-100",
						"imagePlaceholder":"<?php echo $url ?>/assets/images/jpg/lending-3.jpeg",
						"width":null,
						"height":null,
						"h":null,
						"w":null
					} 
				-->
				<img class="card-img flex-grow-1 h-100" src="<?php echo $url ?>/assets/images/jpg/lending-3.jpeg" alt="" width="" height="" style="height:auto !important;width:px" />
				<!-- /wp:webkompanen-blocks/img -->
      		</div>
			<!-- /wp:webkompanen-blocks/col -->
			<!-- 
				wp:webkompanen-blocks/col 
				{
					"classes":"card-body align-items-center",
					"dxs":"flex",
					"colmd": 6,
					"plg": {
						"top":5,
						"right":5,
						"bottom":5,
						"left":5
					},
					"pmd": {
						"top":4,
						"right":4,
						"bottom":4,
						"left":4
					},
					"pxs": {
						"top":3,
						"right":3,
						"bottom":3,
						"left":3
					}
				} 
			-->
      		<div class="card-body align-items-center d-flex col-md-6 p-3 p-md-4 p-lg-5 ">
				<!-- wp:webkompanen-blocks/div -->
        		<div>
					<!-- wp:webkompanen-blocks/span {"classes":"h2 d-block","content":"Build a beautiful performant website with Insight"} -->
          			<span class="h2 d-block">
						Build a beautiful performant website with Insight
					</span>
					<!-- /wp:webkompanen-blocks/span -->
					<!-- wp:webkompanen-blocks/paragraph {"classes":"lead","content":"Speed up your workflow with tons of pre-made content blocks. Assembling your site is easier than ever before."} -->
          			<p class="lead">
						Speed up your workflow with tons of pre-made content blocks. Assembling your site is easier than ever before.
					</p> 
					<!-- /wp:webkompanen-blocks/paragraph -->
					<!-- wp:webkompanen-blocks/btn {"content":"Learn More","isOutline":false,"color":"primary"} -->
					<a class="btn btn-primary btn-lg" href="#">Learn More</a>
					<!-- /wp:webkompanen-blocks/btn -->
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
	'title'      => __( 'Text two columns, Left column: h2 title + lead text + button. Right column image', 'webcompanen' ),
	'categories' => array( 'text' ),
	'blockTypes' => array( 'webcompanen/template-part/text' ),
	'content'    => $output,
    'keywords'      => array( 'text' ),
    'viewportWidth' => 1200
);