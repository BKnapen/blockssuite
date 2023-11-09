<?php
$url = untrailingslashit( get_template_directory_uri( __FILE__ ) );
/**
 * CTA column left: h1 title column right: lead text button + span text + button
 */
ob_start();
?>
<!-- wp:webkompanen-blocks/section {"classes":"bg-dark spacer-y-4"} -->
<section class="bg-dark spacer-y-4">
	<!-- wp:webkompanen-blocks/container {"classes":"container"} -->
  	<div class="container">
		<!-- wp:webkompanen-blocks/row {"classes":"row justify-content-around align-items-center"} -->
    	<div class="row justify-content-around align-items-center">
			<!-- wp:webkompanen-blocks/col {"classes":"col-md-6 col-lg-5 col-xl-4"} -->
      		<div class="col-md-6 col-lg-5 col-xl-4">
				<!-- wp:webkompanen-blocks/span {"classes":"h1 d-block mb-lg-0 text-white","content":"Friendly help and support whenever you need it"} -->
				<span class="h1 d-block mb-lg-0 text-white">
					Friendly help and support whenever you need it
				</span>
				<!-- /wp:webkompanen-blocks/span -->
      		</div>
			<!-- /wp:webkompanen-blocks/col -->
			<!-- wp:webkompanen-blocks/col {"classes":"col-md-6"} -->
      		<div class="col-md-6">
				<!-- wp:webkompanen-blocks/paragraph {"classes":"lead mb-3 text-white","content":"Check out our great support options and get qualified assistance through our live chat."} -->
				<p class="lead mb-3 text-white">
					Check out our great support options and get qualified assistance through our live chat.
		  		</p>
				<!-- /wp:webkompanen-blocks/paragraph -->
				<!-- wp:webkompanen-blocks/div {"classes":"d-flex align-items-center"} -->
				<div class="d-flex align-items-center">
					<!-- wp:webkompanen-blocks/btn {"content":"Get started","isOutline":false,"color":"primary"} -->
					<a class="btn btn-primary btn-lg" href="#">
						Get started
					</a>
					<!-- /wp:webkompanen-blocks/btn -->
					<!-- wp:webkompanen-blocks/span {"classes":"d-block mx-1 mx-sm-2 text-small text-white","content":"or"} -->
					<span class="d-block mx-1 mx-sm-2 text-small text-white">
						or
					</span>
					<!-- /wp:webkompanen-blocks/span -->
					<!-- wp:webkompanen-blocks/btn {"content":"Request Demo","isOutline":false,"color":"secondary"} -->
					<a class="btn btn-secondary btn-lg" href="#">
						Request Demo
					</a>
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
	'title'      => __( 'CTA Two columns, Left column: h1 title. Right column: lead text + button + span text + button', 'webcompanen' ),
	'categories' => array( 'cta' ),
	'blockTypes' => array( 'webcompanen/template-part/cta' ),
	'content'    => $output
);