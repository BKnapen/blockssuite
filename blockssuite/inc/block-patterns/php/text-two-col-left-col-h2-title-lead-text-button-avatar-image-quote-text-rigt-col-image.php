<?php
$url = untrailingslashit( get_template_directory_uri( __FILE__ ) );
/**
 * ext Two columns, Left column: h2 title + lead text + button + avatar image + quote. Right column: image
 */

ob_start();
?>
<!-- wp:webkompanen-blocks/section {"classes":"row no-gutters p-0"} -->
<section class="row no-gutters p-0">
	<!-- wp:webkompanen-blocks/col {"classes":"col-md-5 col-lg-6 d-flex flex-column order-md-2"} -->
 	<div class="col-md-5 col-lg-6 d-flex flex-column order-md-2">
		<!-- wp:webkompanen-blocks/img {"classes":"flex-grow-1","imagePlaceholder":"<?php echo $url ?>/assets/images/jpg/header-3.jpeg"} -->
    	<img src="<?php echo $url ?>/assets/images/jpg/header-3.jpeg" alt="" class="flex-grow-1" width="" height="" style="height:auto !important;width:px">
		<!-- /wp:webkompanen-blocks/img -->
  	</div>
	<!-- /wp:webkompanen-blocks/col -->
	<!-- wp:webkompanen-blocks/col {"classes":"col-md-7 col-lg-6 d-flex bg-white order-md-1 align-items-center"} -->
  	<div class="col-md-7 col-lg-6 d-flex bg-white order-md-1 align-items-center">
		<!-- wp:webkompanen-blocks/row {"classes":"row no-gutters justify-content-center py-md-4"} -->
    	<div class="row no-gutters justify-content-center py-md-4">
			<!-- wp:webkompanen-blocks/col {"classes":"col-md-10 col-lg-9 col-xl-8 p-3 py-md-5"} -->
      		<div class="col-md-10 col-lg-9 col-xl-8 p-3 py-md-5">
				<!-- wp:webkompanen-blocks/span {"classes":"h2 d-block","content":"Building an attractive site with Bootstrap has never been easier."} -->
        		<span class="h2 d-block">
					Building an attractive site with Bootstrap has never been easier.
				</span>
				<!-- /wp:webkompanen-blocks/span -->
				<!-- wp:webkompanen-blocks/paragraph {"classes":"lead","content":"Speed up your workflow with tons of pre-made content blocks. Assembling your site is easier than ever before."} -->
        		<p class="lead">
					Speed up your workflow with tons of pre-made content blocks. Assembling your site is easier than ever before.
				</p>
				<!-- /wp:webkompanen-blocks/paragraph -->
				<!-- wp:webkompanen-blocks/btn {"content":"Learn More","isOutline":false,"color":"primary"} -->
				<a href="#" class="btn btn-primary btn-lg">Learn More</a>
				<!-- /wp:webkompanen-blocks/btn -->
				<!-- wp:webkompanen-blocks/div {"classes":"d-flex"} -->
          		<div class="d-flex">
					<!-- wp:webkompanen-blocks/img {"classes":"avatar","imagePlaceholder":"<?php echo $url ?>/assets/images/jpg/avatar-female-2.jpeg"} -->
            		<img src="<?php echo $url ?>/assets/images/jpg/avatar-female-2.jpeg" alt="" class="avatar" width="" height="" style="height:auto !important;width:px">
					<!-- /wp:webkompanen-blocks/img -->
					<!-- wp:webkompanen-blocks/div {"classes":"ms-3"} -->
            		<div class="ms-3">
						<!-- wp:webkompanen-blocks/paragraph {"classes":"mb-0","content":"&ldquo;The customer service team were prompt, friendly and above all extremely helpful.&rdquo;"} -->
              			<p class="mb-0">
							&ldquo;The customer service team were prompt, friendly and above all extremely helpful.&rdquo;
						</p>
						<!-- /wp:webkompanen-blocks/paragraph -->
            		</div>
					<!-- /wp:webkompanen-blocks/div -->
          		</div>
				<!-- /wp:webkompanen-blocks/div -->
      		</div>
			<!-- /wp:webkompanen-blocks/col -->
    	</div>
		<!-- /wp:webkompanen-blocks/row -->
  	</div>
	<!-- /wp:webkompanen-blocks/col -->
</section>
<!-- /wp:webkompanen-blocks/section -->
<?php
$output = ob_get_contents();
ob_clean();
return array(
	'title'      => __( 'Text Two columns, Left column: h2 title + lead text + button + avatar image + quote. Right column: image', 'webcompanen' ),
	'categories' => array( 'text' ),
	'blockTypes' => array( 'webcompanen/template-part/text' ),
	'content'    => $output,
    'keywords'      => array( 'text' ),
    'viewportWidth' => 1200
);