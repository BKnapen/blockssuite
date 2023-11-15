<?php
$url = untrailingslashit( get_template_directory_uri( __FILE__ ) );
/**
 * Text one column background image + left h2 title + lead text + button
 */
ob_start();
?>
<!-- wp:webkompanen-blocks/section {"classes":"p-0"} -->
<section class="p-0">
	<!-- wp:webkompanen-blocks/img {"classes":"bg-image position-md-absolute","imagePlaceholder":"<?php echo $url ?>/assets/images/jpg/wide-large-1.jpeg"} -->
  	<img class="bg-image position-md-absolute" src="<?php echo $url ?>/assets/images/jpg/wide-large-1.jpeg" alt="" width="" height="" style="height:auto !important;width:px"/>
	<!-- /wp:webkompanen-blocks/img -->
	<!-- wp:webkompanen-blocks/container {"classes":"container spacer-y-5"} -->
  	<div class="container spacer-y-5">
		<!-- wp:webkompanen-blocks/row {"classes":"row"} -->
    	<div class="row">
			<!-- wp:webkompanen-blocks/col {"classes":"col-md-6 col-lg-5 position-relative"} -->
      		<div class="col-md-6 col-lg-5 position-relative">
				<!-- wp:webkompanen-blocks/span {"classes":"h2 text-white d-block","content":"Start building beautiful websites with modular building blocks."} -->
        		<span class="h2 text-white d-block">
					Start building beautiful websites with modular building blocks.
				</span>
				<!-- /wp:webkompanen-blocks/span -->
				<!-- wp:webkompanen-blocks/paragraph {"classes":"lead text-white","content":"Speed up your workflow with tons of pre-made content blocks. Assembling your site is easier than ever before."} -->
        		<p class="lead text-white">
					Speed up your workflow with tons of pre-made content blocks. Assembling your site is easier than ever before.
				</p> 
				<!-- /wp:webkompanen-blocks/paragraph -->
				<!-- wp:webkompanen-blocks/btn {"content":"Get Started","isOutline":false,"color":"primary"} -->
					<a class="btn btn-primary btn-lg" href="#">Get Started</a>
				<!-- /wp:webkompanen-blocks/btn -->
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
	'title'      => __( 'Text one column background image + left h2 title + lead text + button', 'webcompanen' ),
	'categories' => array( 'text' ),
	'blockTypes' => array( 'webcompanen/template-part/text' ),
	'content'    => $output,
    'keywords'      => array( 'text' ),
    'viewportWidth' => 1200
);