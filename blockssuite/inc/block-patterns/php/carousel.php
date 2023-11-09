<!--
	wp:webkompanen-blocks/section
	{
		"classes":"",
		"flickity-enabled": true
		"flickity-controls": "inside",
		"flickity-controls-color": "light",
		"pxs": {
			"top":0
			"right":0
			"bottom":0
			"left":0
		},
		"bg": dark,
		"flickity-cell-align": "left",
		"flickity-contain": true,
		"flickity-images-loaded": true,
		"flickity-wrap-around": true,
		"flickity-lazy-load": true,
		"flickity-prev-next-buttons": false,
		"flickity-page-dots": true
	}
-->
<section class="controls-inside p-0 controls-light bg-dark flickity-enabled is-draggable" data-flickity="{ 'cellAlign': 'left', 'contain': true, 'imagesLoaded': true, 'wrapAround': true, 'lazyLoad': true, 'prevNextButtons': false, 'pageDots': true}">
	<!--
	wp:webkompanen-blocks/div
		{
			"classes":"carousel-cell",
			"pxs": {
				"top":3
				"right":null
				"bottom":3
				"left":null
			},
			"pmd": {
				"top":4
				"right":null
				"bottom":4
				"left":null
			},
			"height": 70,
			"overlay-color":"dark"
		}
	-->
	<div class="height-70 carousel-cell py-3 py-md-4 height-40 overlay-dark is-selected">	
		<!--
			wp:webkompanen-blocks/img
			{
				"bg-image": true,
				"opacity": 50
			}
		-->
		<img class="bg-image opacity-50" src="" alt="">
		<!-- /wp:webkompanen-blocks/img -->
		<!--
			wp:webkompanen-blocks/container
		-->
		<div class="container">
			<!--
				wp:webkompanen-blocks/row
			-->
          	<div class="row">
				<!--
					wp:webkompanen-blocks/col
				-->
            	<div class="col-12 col-md-6">
					<!--
						wp:webkompanen-blocks/heading
						{
							"content":"Build beautiful, modular websites.",
							"display": 4,
							"color": "white"
						}
					-->
              		<h1 class="display-4 text-white">Build beautiful, modular websites.</h1>
					<!-- /wp:webkompanen-blocks/heading -->
					<!--
						wp:webkompanen-blocks/paragraph
						{
							"is-lead": true,
							"color": "light",
							"content":"Insight includes everything you'll need to create beautiful websites."
						}
					-->
              		<p class="lead text-light">Insight includes everything you'll need to create beautiful websites.</p>
					<!-- /wp:webkompanen-blocks/paragraph -->
					<!--
						wp:webkompanen-blocks/btn
						{
							"color":"primary",
							"size":"lg",
							"content":"Learn More"
						}
					-->
              		<a href="#" class="btn btn-primary btn-lg">Learn More</a>
					<!-- /wp:webkompanen-blocks/btn -->
            	</div>
				<!-- /wp:webkompanen-blocks/col -->
          	</div>
			<!-- /wp:webkompanen-blocks/row -->
        </div>
		<!-- /wp:webkompanen-blocks/container -->
	</div>
	<!-- /wp:webkompanen-blocks/div -->
</section>
<!-- /wp:webkompanen-blocks/section -->