<?php
	// Exit if accessed directly.
	defined( 'ABSPATH' ) || exit;
//https://developer.wordpress.org/rest-api/using-the-rest-api/authentication/

if(isset($_SERVER['HTTP_REFERER'])):
	$origin = $_SERVER['HTTP_REFERER'];
	$allowed_domains = [
    	'https://webkompanen.nl',
	];
else:
endif;

	header('Access-Control-Allow-Origin: https://www.webkompanen.nl ');

	function deleteclub(){
		global $wpdb;
		/* %s – string (value is escaped and wrapped in quotes)
		 * %d – integer
		 * %f – float
		 * %% – % sign
	 	*/
	
		$response = new \stdClass();
		$data = new \stdClass();
		//$data = array();
	
		if(isset($_GET['clienttoken'])):
			$data->status = 201;
	
			$response->code = 'rest_route';
			$response->message = 'Route gevonden die overeenkomt met de URL en aanvraag deleteclubs methode.';
		else:
			$data->status = 404;
	
			$response->code = 'rest_no_route';
			$response->message = 'Geen route gevonden die overeenkomt met de URL en aanvraag deleteclubs methode.';
		endif;

		return rest_ensure_response($response);
    }
?>