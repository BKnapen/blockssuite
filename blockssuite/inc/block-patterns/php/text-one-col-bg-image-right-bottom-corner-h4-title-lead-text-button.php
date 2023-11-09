<?php
$url = untrailingslashit( get_template_directory_uri( __FILE__ ) );
/**
 * Text one column, background image + right bottom corner: h4 title + lead text + button
 */
ob_start();
?>
<!-- wp:webkompanen-blocks/section {"classes":""} -->
<section>
	<!-- wp:webkompanen-blocks/container {"classes":"container"} -->
  	<div class="container">
		<!-- wp:webkompanen-blocks/row {"classes":"row no-gutters"} -->
    	<div class="row no-gutters">
			<!-- wp:webkompanen-blocks/col {"classes":"col text-image-2"} -->
      		<div class="col text-image-2">
				<!-- wp:webkompanen-blocks/img {"classes":"join-bottom img-fluid","imagePlaceholder":"<?php echo $url ?>/assets/img/jpg/wide-large-3.jpeg"} -->
        		<img class="join-bottom img-fluid" src="<?php echo $url ?>/assets/img/jpg/wide-large-3.jpeg" alt="" width="" height="" style="height:auto !important;width:px">
				<!-- /wp:webkompanen-blocks/img -->
				<!-- wp:webkompanen-blocks/div {"classes":"bg-white position-lg-absolute join-top col-lg-6 px-3 py-3 px-md-5 py-md-4"} -->
        		<div class="bg-white position-lg-absolute join-top col-lg-6 px-3 py-3 px-md-5 py-md-4">
					<!-- wp:webkompanen-blocks/span {"classes":"h4 d-block","content":"Build a beautiful, performant site with Insight"} -->
          			<span class="h4 d-block">
						Build a beautiful, performant site with Insight
					</span>
					<!-- /wp:webkompanen-blocks/span -->
					<!-- wp:webkompanen-blocks/paragraph {"classes":"lead","content":"Speed up your workflow with tons of pre-made content blocks. Assembling your site is easier than ever before."} -->
          			<p class="lead">
						Speed up your workflow with tons of pre-made content blocks. Assembling your site is easier than ever before.
					</p> 
					<!-- /wp:webkompanen-blocks/paragraph -->
					<!-- wp:webkompanen-blocks/ntn {"content":"Learn More","isOutline":false,"color":"primary"} -->
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
	'title'      => __( 'Text one column, background image + right bottom corner: h4 title + lead text + button', 'webcompanen' ),
	'categories' => array( 'text' ),
	'blockTypes' => array( 'webcompanen/template-part/text' ),
	'content'    => $output,
    'keywords'      => array( 'text' ),
    'viewportWidth' => 1200
);