<?php
	// Exit if accessed directly.
	defined( 'ABSPATH' ) || exit;
// Exit if accessed directly.
//https://developers.miniorange.com/docs/rest-api-authentication/wordpress/api-key-authentication
//https://developers.miniorange.com/docs/rest-api-authentication/wordpress/oauth-authentication
//https://wp-oauth.com/docs/how-to/openid-authentication-for-wp-rest-api/

$includes = array(
	'put-user-pages',
	'get-user-pages',
	'get-link',
	'post-link',
	'upload-media'
);

foreach ( $includes as $include ) {
	include_once themedir . '/inc/rest-api/php/' . $include . '.php';
}





/*add_action('rest_api_init', function() {
	register_rest_route('boostyourclub/v1', 'selectproject', [
		'methods' => 'POST',
		'callback' => 'selectproject'
	]);
});

add_action('rest_api_init', function() {
	register_rest_route('boostyourclub/v1', 'deleteclub', [
		'methods' => 'POST',
		'callback' => 'deleteclub'
	]);
});

add_action('rest_api_init', function() {
	register_rest_route('boostyourclub/v1', 'insertclub', [
		'methods' => 'POST',
		'callback' => 'insertclub'
	]);
});

add_action('rest_api_init', function() {
	register_rest_route('boostyourclub/v1', 'insertproject', [
		'methods' => 'POST',
		'callback' => 'insertproject'
	]);
});

add_action('rest_api_init', function() {
	register_rest_route('boostyourclub/v1', 'updateproject', [
		'methods' => 'POST',
		'callback' => 'updateproject'
	]);
});
add_action('rest_api_init', function() {
	register_rest_route('boostyourclub/v1', 'updateclub', [
		'methods' => 'POST',
		'callback' => 'updateclub'
	]);
});*/
?>