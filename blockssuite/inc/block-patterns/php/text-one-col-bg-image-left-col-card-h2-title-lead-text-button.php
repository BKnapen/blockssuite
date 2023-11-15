<?php
$url = untrailingslashit( get_template_directory_uri( __FILE__ ) );
/**
 * Text one column, background image left column: h2 title + lead text + button
 */

ob_start();
?>
<!-- wp:webkompanen-blocks/section {"classes":"p-0 bg-white"} -->
<section class="p-0 bg-white">
	<!-- wp:webkompanen-blocks/img {"classes":"bg-image position-md-absolute","imagePlaceholder":"<?php echo $url ?>/assets/images/jpg/header-inner-1.jpeg"} -->
  	<img src="<?php echo $url ?>/assets/images/jpg/header-inner-1.jpeg" alt="" class="bg-image position-md-absolute" width="" height="" style="height:auto !important;width:px">
	<!-- /wp:webkompanen-blocks/img -->
	<!-- wp:webkompanen-blocks/container {"classes":"container-fluid p-0"} -->
  	<div class="container-fluid p-0">
		<!-- wp:webkompanen-blocks/row {"classes":"row g-0 no-gutters"} -->
    	<div class="row g-0 no-gutters">
			<!-- wp:webkompanen-blocks/col {"classes":"col-md-7 col-lg-6 col-xl-5"} -->
     		<div class="col-md-7 col-lg-6 col-xl-5">
				<!-- wp:webkompanen-blocks/div {"classes":"card p-0 p-md-3 m-3"} -->
        		<div class="card p-0 p-md-3 m-3">
					<!-- wp:webkompanen-blocks/div {"classes":"card-body p-0 p-md-4"} -->
          			<div class="card-body p-0 p-md-4">
						<!-- wp:webkompanen-blocks/span {"classes":"h2 d-block","content":"Build a beautiful, performant site with Insight"} -->
            			<span class="h2 d-block">
							Build a beautiful, performant site with Insight
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
	'title'      => __( 'Text one column, background image left column: h2 title + lead text + button' ),
	'categories' => array( 'text' ),
	'blockTypes' => array( 'webcompanen/template-part/text' ),
	'content'    => $output,
    'keywords'      => array( 'text' ),
    'viewportWidth' => 1200
);