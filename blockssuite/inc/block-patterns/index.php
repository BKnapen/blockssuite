<?php
	/**
 	 * Webkompanen: Block Patterns
 	 *
 	 * @since Webkompanen 1.0
 	 */

	/**
 	 * Registers block patterns and categories.
 	 *
 	 * @since Webkompanen 1.0
 	 *
 	 * @return void
 	 */
	
	// Exit if accessed directly.
	defined( 'ABSPATH' ) || exit;

	function webkompanen_register_block_patterns() {
		$block_pattern_categories = array(
			'featured' 		=> array( 'label' => __( 'Featured', 'webkompanen' ) ),
			'footer'   		=> array( 'label' => __( 'Footers', 'webkompanen' ) ),
			'header'   		=> array( 'label' => __( 'Headers', 'webkompanen' ) ),
			'query'    		=> array( 'label' => __( 'Query', 'webkompanen' ) ),
			'pages'    		=> array( 'label' => __( 'Pages', 'webkompanen' ) ),
			'cta'      		=> array( 'label' => __( 'CTA', 'webkompanen' ) ),
			'text'      	=> array( 'label' => __( 'Text', 'webkompanen' ) ),
			'menu'      	=> array( 'label' => __( 'Menu', 'webkompanen' ) ),
			'components'	=> array( 'label' => __( 'Components', 'webkompanen' ) ),
			'page'			=> array( 'label' => __( 'Page', 'webkompanen' ) ),
			'video'			=> array( 'label' => __( 'Video', 'webkompanen' ) ),
			'quiz'			=> array( 'label' => __( 'Quiz', 'webkompanen' ) )
		);

		/**
	 	 * Filters the theme block pattern categories.
	 	 *
	 	 * @since Webkompanen 1.0
	 	 *
	 	 * @param array[] $block_pattern_categories {
	 	 *     An associative array of block pattern categories, keyed by category name.
	 	 *
	 	 *     @type array[] $properties {
	 	 *         An array of block category properties.
	 	 *
	 	 *         @type string $label A human-readable label for the pattern category.
	 	 *     }
	 	 * }
	 	 */
		
		$block_pattern_categories = apply_filters( 'webkompanen_block_pattern_categories', $block_pattern_categories );

		foreach ( $block_pattern_categories as $name => $properties ) {
			if ( ! WP_Block_Pattern_Categories_Registry::get_instance()->is_registered( $name ) ) {
				register_block_pattern_category( $name, $properties );
			}
		}

		$block_patterns = array(
			'cta-two-col-left-col-h1-title-right-col-lead-text-button-span-text-button',
			'cta-one-col-centered-h2-title-button-span-text',
			'cta-one-col-centered-h4-title-button',
			'text-two-col-left-col-h2-title-lead-text-button-right-col-image',
			'text-one-col-bg-image-right-bottom-corner-h4-title-lead-text-button',
			'text-one-col-bg-image-left-h2-title-lead-text-button',
			'text-two-col-left-col-h2-title-lead-text-button-avatar-image-quote-text-rigt-col-image',
			'text-two-col-left-col-small-image-right-col-h5-title-h2-title',
			'text-one-col-bg-image-left-col-card-h2-title-lead-text-button',
			'header-one-col-background-left-col-card-h1-title-lead-text-button',
			'header-one-col-background-left-col-h1-title-lead-text-button',
			'one-col-youtube-video',
			'quiz'
		);

		/**
	 	 * Filters the theme block patterns.
	 	 *
	 	 * @since Webkompanen 1.0
	 	 *
	 	 * @param array $block_patterns List of block patterns by name.
	 	 */
		
		$block_patterns = apply_filters( 'webkompanen_block_patterns', $block_patterns );

		foreach ( $block_patterns as $block_pattern ) {
			$pattern_file = themedir . '/inc/block-patterns/php/' . $block_pattern . '.php';

			register_block_pattern(
				'webkompanen/' . $block_pattern,
				require $pattern_file
			);
		}
	}

	add_action( 'init', 'webkompanen_register_block_patterns', 9 );
?>