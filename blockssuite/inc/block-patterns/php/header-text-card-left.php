<?php
/**
 * Header with card with title, lead text and button
 */
ob_start();
?>
<!-- wp:webkompanen-blocks/header {"headerImageId":"","headerImageUrl":""} -->
<section class="p-0 bg-dark"><img src="" alt="Image" class="bg-image position-md-absolute"/>
	<div class="container">
		<div class="row height-md-60">
			<div class="col-md-8 col-lg-6">
				<div class="card p-0 p-md-3 my-3">
					<div class="card-body py-md-4 py-lg-5 px-md-4">
						<!-- wp:webkompanen-blocks/headingtext {"title":"WE GROW YOUR BUSINESS"} -->
						<h1 class="display-4">WE GROW YOUR BUSINESS</h1>
						<!-- /wp:webkompanen-blocks/headingtext -->
						<!-- wp:webkompanen-blocks/leadtext {"lead":"Wij bouwen dagelijks aan websites die werken voor onze klanten! Naast een prachtig visite kaartje zijn onze websites een tool die meer omzet, leads en naamsbekendheid genereren voor jouw business.\u003cbr\u003e\u003cbr\u003eLaat je online platformen voor jou werken en je business groeien.."} -->
						<p class="lead">Wij bouwen dagelijks aan websites die werken voor onze klanten! Naast een prachtig visite kaartje zijn onze websites een tool die meer omzet, leads en naamsbekendheid genereren voor jouw business.<br><br>Laat je online platformen voor jou werken en je business groeien..</p>
						<!-- /wp:webkompanen-blocks/leadtext -->
						<!-- wp:webkompanen-blocks/buttonlink {"content":"Bekijk onze projecten","isOutline":false,"color":"primary"} -->
						<a class="btn btn-primary btn-lg">Bekijk onze projecten</a>
						<!-- /wp:webkompanen-blocks/buttonlink -->
						<!-- wp:webkompanen-blocks/buttonlink {"content":"Neem contact op","isOutline":true,"color":"primary"} -->
						<a class="btn btn-outline-primary btn-lg">Neem contact op</a>
						<!-- /wp:webkompanen-blocks/buttonlink -->
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<!-- /wp:webkompanen-blocks/header -->
<?php
$output = ob_get_contents();
ob_clean();
return array(
	'title'      => __( 'Header with card with title, lead text and button', 'webcompanen' ),
	'categories' => array( 'header' ),
	'blockTypes' => array( 'webcompanen/template-part/header' ),
	'content'    => $output,
);