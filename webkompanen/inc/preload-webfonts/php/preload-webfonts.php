<?php
	if ( ! function_exists( 'webkompanen_preload_webfonts' ) ) :

		/**
	 	 * Preloads the main web font to improve performance.
	 	 *
	 	 * Only the main web font (font-style: normal) is preloaded here since that font is always relevant (it is used
	 	 * on every heading, for example). The other font is only needed if there is any applicable content in italic style,
	 	 * and therefore preloading it would in most cases regress performance when that font would otherwise not be loaded
	 	 * at all.
	 	 *
	 	 * @since Webkompanen-Two 1.0
	 	 *
	 	 * @return void
	 	 */
		function webkompanen_preload_webfonts() {
			?>
				<link rel="preload" href="<?php echo esc_url( get_theme_file_uri( 'assets/fonts/SourceSerif4Variable-Roman.ttf.woff2' ) ); ?>" as="font" type="font/woff2" crossorigin>
			<?php
		}

	endif;

	add_action( 'wp_head', 'webkompanen_preload_webfonts' );
?>