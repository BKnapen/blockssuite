<?php
	if ( ! function_exists( 'webkompanen_get_font_face_styles' ) ) :

		/**
	 	 * Get font face styles.
	 	 * Called by functions webkompanen_styles() and webkompanen_editor_styles() above.
	 	 *
	 	 * @since Webkompanen 1.0
	 	 *
	 	 * @return string
	 	 */
		function webkompanen_get_font_face_styles() {

			return "
				@font-face{
					font-family: 'Source Serif Pro';
					font-weight: 200 900;
					font-style: normal;
					font-style: normal;
					font-stretch: normal;
					font-display: swap;
					src: url('" . get_theme_file_uri( 'assets/fonts/SourceSerif4Variable-Roman.ttf.woff2' ) . "') format('woff2');
				}

				@font-face{
					font-family: 'Source Serif Pro';
					font-weight: 200 900;
					font-style: italic;
					font-stretch: normal;
					font-display: swap;
					src: url('" . get_theme_file_uri( 'assets/fonts/SourceSerif4Variable-Italic.ttf.woff2' ) . "') format('woff2');
				}
			";

		}

	endif;
?>