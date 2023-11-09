<?php
$url = untrailingslashit( get_template_directory_uri( __FILE__ ) );
/**
 * CTA column left: h1 title column right: lead text button + span text + button
 */
ob_start();
?>
<!-- wp:webkompanen-blocks/section {"classes":"bg-primary spacer-y-3"} -->
<section class="bg-primary spacer-y-3">
	<!-- wp:webkompanen-blocks/container {"classes":"container"} -->
  	<div class="container">
		<!-- wp:webkompanen-blocks/row {"classes":"row justify-content-center"} -->
    	<div class="row justify-content-center">
			<!-- wp:webkompanen-blocks/col {"classes":"col col-12 text-center"} -->
      		<div class="col col-12 text-center">
				<!-- wp:webkompanen-blocks/span {"classes":"d-block mb-3 h2 text-white","content":"Start building beautiful block-based websites."} -->
        		<span class="d-block mb-3 h2 text-white">
					Start building beautiful block-based websites.
				</span> 
				<!-- /wp:webkompanen-blocks/span -->
				<!-- wp:webkompanen-blocks/btn {"content":"Learn More","isOutline":false,"color":"secondary"} -->
				<a class="btn btn-secondary btn-lg" href="#">
					Learn More
				</a>
				<!-- /wp:webkompanen-blocks/btn -->
				<!-- wp:webkompanen-blocks/span {"classes":"d-block mt-3 mt-3 text-white","content":"Available exclusively at Bootstrap Themes."} -->
        		<span class="d-block mt-3 mt-3 text-white">
					Available exclusively at Bootstrap Themes.
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
	'title'      => __( 'CTA one column centered h2 title + button + span text', 'webcompanen' ),
	'categories' => array( 'cta' ),
	'blockTypes' => array( 'webcompanen/template-part/cta' ),
	'content'    => $output
);