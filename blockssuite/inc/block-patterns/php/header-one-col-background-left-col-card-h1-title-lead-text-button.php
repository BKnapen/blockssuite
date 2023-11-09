<?php
$url = untrailingslashit( get_template_directory_uri( __FILE__ ) );
/**
 * Header one column, background image left column: card h1 title + lead text + button
 */

ob_start();
?>
<!-- wp:webkompanen-blocks/section {"classes":"p-0 bg-dark"} -->
<section class="p-0 bg-dark">
	<!-- wp:webkompanen-blocks/img {"classes":"bg-image position-md-absolute","fullwidth":true,"imagePlaceholder":"<?php echo $url ?>/assets/img/jpg/header-1.jpeg"} -->
  	<img class="bg-image position-md-absolute w-100" src="<?php echo $url ?>/assets/img/jpg/header-1.jpeg" alt=""/>
	<!-- /wp:webkompanen-blocks/img -->
	<!-- wp:webkompanen-blocks/container {"classes":"container"} -->
  	<div class="container">
		<!-- wp:webkompanen-blocks/row {"classes":"row height-md-60"} -->
    	<div class="row height-md-60">
			<!-- wp:webkompanen-blocks/col {"classes":"col-md-8 col-lg-6"} -->
      		<div class="col-md-8 col-lg-6">
				<!-- wp:webkompanen-blocks/div {"classes":"card p-0 p-md-3 my-3"} -->
        		<div class="card p-0 p-md-3 my-3">
					<!-- wp:webkompanen-blocks/div {"classes":"card-body py-md-4 py-lg-5 px-md-4"} -->
          			<div class="card-body py-md-4 py-lg-5 px-md-4">
						<!-- wp:webkompanen-blocks/span {"classes":"h1 display-4","content":"Build a beautiful, performant site with Insight"} -->
            			<span class="h1 display-4">
							Build a beautiful, performant site with Insight
						</span>
						<!-- /wp:webkompanen-blocks/span -->
						<!-- wp:webkompanen-blocks/paragraph {"classes":"lead","content":"Speed up your workflow with tons of pre-made content blocks. Assembling your site is easier than ever before"} -->
            			<p class="lead">
							Speed up your workflow with tons of pre-made content blocks. Assembling your site is easier than ever before
						</p> 
						<!-- /wp:webkompanen-blocks/paragraph -->
						<!-- wp:webkompanen-blocks/btn {"content":"Learn More","isOutline":false,"color":"primary"} -->
						<a href="#" class="btn btn-primary btn-lg">Learn More</a>
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
	'title'      => __( 'Header one column, background image left column: card h1 title + lead text + button' ),
	'categories' => array( 'header' ),
	'blockTypes' => array( 'webcompanen/template-part/header' ),
	'content'    => $output,
    'keywords'      => array( 'header' ),
    'viewportWidth' => 1200
);