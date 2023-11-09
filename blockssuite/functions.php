<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

	/**
 	 * Webkompanen functions and definitions
 	 *
 	 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 	 *
 	 * @package WordPress
 	 * @subpackage Webkompanen
 	 * @since Webkompanen 1.0
 	*/

	// Exit if accessed directly.
	defined( 'ABSPATH' ) || exit;
	
	define( 'themedir', get_template_directory(__FILE__) );
	define( 'themeurl', get_template_directory_uri(__FILE__));

	//add_action( 'init', 'cookie_last_activity', 99);
	add_action('after_setup_theme','wpse_110727_translate_theme');
	function wpse_110727_translate_theme() {
    	load_theme_textdomain( 'webkompanen', get_template_directory() . '/languages' );
     	$locale = get_locale();
     	$locale_file = get_template_directory() . "/languages/$locale.php";

         if ( is_readable( $locale_file ) ) require_once( $locale_file );
 	}

	function cookie_expiration_period( $expirein ) {
		return 900; 
		// 15 minutes in seconds 900
		// 1 year in seconds 31556926
	}
	//add_filter( 'auth_cookie_expiration', 'cookie_expiration_period' );

// Allow SVG
add_filter( 'wp_check_filetype_and_ext', function($data, $file, $filename, $mimes) {

  global $wp_version;
  if ( $wp_version !== '4.7.1' ) {
     return $data;
  }

  $filetype = wp_check_filetype( $filename, $mimes );

  return [
      'ext'             => $filetype['ext'],
      'type'            => $filetype['type'],
      'proper_filename' => $data['proper_filename']
  ];

}, 10, 4 );

function cc_mime_types( $mimes ){
  $mimes['svg'] = 'image/svg+xml';
  return $mimes;
}
add_filter( 'upload_mimes', 'cc_mime_types' );

function fix_svg() {
  echo '<style type="text/css">
        .attachment-266x266, .thumbnail img {
             width: 100% !important;
             height: auto !important;
        }
        </style>';
}
add_action( 'admin_head', 'fix_svg' );

	//add_action( 'after_setup_theme', 'webkompanen_support' );

	$includes = array(
		//'create-tables',
		//'encrypt',
		//'decrypt',
		//'sharer-functions',
		//'rest-api',
		//'meta-boxxes',
		'admin-menu',
		'admin-pages',
		//'actions',
		//'add-user-roles',
		'block-assets',
		'ajax-callbacks',
		'block-callbacks',
		'block-categories',
		'block-editor-assets',
		'block-patterns',
		//'check-user-admin-access',
		'custom-post-types',
		'email-settings',
		'enqueue-admin-styles',
		'enqueue-admin-scripts',
		'enqueue-scripts',
		'enqueue-styles',
		'filters',
		'font-face-styles',
		'preload-webfonts',
		'register-block-types',
		'register-meta-fields',
		'register-settings',
		'theme-support',
		//'user-profile-fields'
	);

	foreach ( $includes as $include ) {
		include_once themedir . '/inc/'.$include.'/index.php';
	}

/*
login_form_checkemail
login_form_confirm_admin_email
login_form_confirmaction
login_form_entered_recovery_mode
login_form_login
login_form_logout
login_form_lostpassword
login_form_postpass
login_form_register
login_form_resetpass
login_form_retrievepassword
login_form_rp
*/

//add_filter('password_change_email', __return_false);
//add_action('user_registration_email', 'user_registration_email_action');
//add_action('invited_user_email', 'invited_user_email_action');