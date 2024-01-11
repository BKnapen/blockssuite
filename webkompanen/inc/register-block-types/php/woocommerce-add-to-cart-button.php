<?php
	function php_woocommerce_add_to_cart_button_block_init() {
		
		register_block_type( 'webkompanen-blocks/woocommerce-add-to-cart-button', [
			'api_version' 	  		=> 2,
    		'render_callback' 		=> 'render_block_webkompanen_woocommerce_add_to_cart_button',
			'title'					=> 'WooCommerce add to cart button',
			'category'				=> 'webkompanen-blocks/woocommerce',
			'description'			=> 'WooCommerce add to cart button',
			'textdomain'			=> 'webkompanen',
			'attributes'      		=> [
			]
		]);
	}
	//endif;
	add_action( 'init', 'php_woocommerce_add_to_cart_button_block_init', 99);
?>