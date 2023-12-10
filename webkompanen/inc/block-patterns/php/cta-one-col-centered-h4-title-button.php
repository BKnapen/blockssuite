<?php
$url = untrailingslashit( get_template_directory_uri( __FILE__ ) );
/**
 * CTA column left: h1 title column right: lead text button + span text + button
 */
ob_start();
?>
<!-- wp:webkompanen-blocks/section {"classes":""} -->
<section class="">
	<!-- wp:webkompanen-blocks/container {"classes":"container"} -->
  	<div class="container">
		<!-- wp:webkompanen-blocks/row {"classes":"row justify-content-center"} -->
    	<div class="row justify-content-center">
			<!-- wp:webkompanen-blocks/col {"classes":"col col-sm-auto d-md-flex align-items-center text-center"} -->
      		<div class="col col-sm-auto d-md-flex align-items-center text-center">
				<!-- wp:webkompanen-blocks/span {"classes":"d-block me-md-3 mb-md-0 h4 mb-md-0","content":"Build a beautiful modular website with Insight"} -->
        		<span class="d-block me-md-3 mb-md-0 h4 mb-md-0">
					Build a beautiful modular website with Insight
				</span> 
				<!-- /wp:webkompanen-blocks/span -->
				<!-- wp:webkompanen-blocks/btn {"content":"Get Started","isOutline":false,"color":"primary"} -->
				<a class="btn btn-primary btn-lg" href="#">
					Get Started
				</a>
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
	'title'      => __( 'CTA one column centered h4 title + button', 'webcompanen' ),
	'categories' => array( 'cta' ),
	'blockTypes' => array( 'webcompanen/template-part/cta' ),
	'content'    => $output
);