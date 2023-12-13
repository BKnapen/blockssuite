<?php
	// Exit if accessed directly.
	defined( 'ABSPATH' ) || exit;

	//encrypt('encrypt', $users[$x][1], $usertokens[$x][2], 'test')
	//decrypt('decrypt', $results[$i]->emergencyemailaddress, $results[$i]->token, 'test');

	add_action('rest_api_init', function() {
		register_rest_route('upload/v1', '/new/', array(
    		'methods' => 'POST',
    		'callback' => 'uploadfile',
    		'args' => array(
      			'file' => array(
        			'validate_callback' => function($param, $request, $key) {
          				return  $request['file'];
        			}
      			),
      			'filename' => array(
        			'validate_callback' => function($param, $request, $key) {
          				return  $request['filename'];
        			}
      			),
    		),
    		'permission_callback' => function () {
      			return current_user_can( 'edit_posts' );
    		}
		));
	});

	function uploadfile(WP_REST_Request $request){
		require_once( ABSPATH . "/wp-load.php");
		require_once( ABSPATH . "/wp-admin/includes/image.php");
		require_once( ABSPATH . "/wp-admin/includes/file.php");
		require_once( ABSPATH . "/wp-admin/includes/media.php");
		
		global $wpdb;
		
		if(isset($request['file']) && isset($request['filename'])):
		   
			$response = new \stdClass();
			$data = new \stdClass();
			$data->status = 201;
			$data->message = 'Route gevonden die overeenkomt met de URL en aanvraagmethode';
		   
		   	$data->requestfile = $request['file'];
		   	$data->requestfilename = $request['filename'];
		   
		   	$url = $request['file'];
		   	$title = $request['filename'];
		   
		   	// Download url to a temp file
			$tmp = download_url( $url );
			if ( is_wp_error( $tmp ) ):
				$data->reason = 'download';
				$data->success = false;
				$response = $data;
				return rest_ensure_response($response);
			endif;
	
			// Get the filename and extension ("photo.png" => "photo", "png")
			$filename = pathinfo($url, PATHINFO_FILENAME);
			$extension = pathinfo($url, PATHINFO_EXTENSION);
			$id = substr($url, strrpos($url, '&sig=') + 1);
		//img-Jl7NGO7xnIeE9Yu1T68xSI9t.png
			$img = explode('/img-', $url);
			$png = explode('.png', $img[1]);
			$gptfilename = 'img-'.$png[0].'.png';
			// An extension is required or else WordPress will reject the upload
			if ( ! $extension ):
				// Look up mime type, example: "/photo.png" -> "image/png"
				$mime = mime_content_type( $tmp );
				$mime = is_string($mime) ? sanitize_mime_type( $mime ) : false;
		
				// Only allow certain mime types because mime types do not always end in a valid extension (see the .doc example below)
				$mime_extensions = array(
					// mime_type         => extension (no period)
					'text/plain'         => 'txt',
					'text/csv'           => 'csv',
					'application/msword' => 'doc',
					'image/jpg'          => 'jpg',
					'image/jpeg'         => 'jpeg',
					'image/gif'          => 'gif',
					'image/png'          => 'png',
					'video/mp4'          => 'mp4',
				);
		
				if ( isset( $mime_extensions[$mime] ) ):
					// Use the mapped extension
					$extension = $mime_extensions[$mime];
				else:
					// Could not identify extension
					@unlink($tmp);
					$data->reason = 'mime_extensions';
					$data->success = false;
					$response = $data;
					return rest_ensure_response($response);
				endif;
			endif;
	
			//img-59ZDgRzUVdrhaTPdlG6clSbK.png
			$data->tmp = $tmp;
			$data->name = ''.$gptfilename.'';
			$data->title = $title;
		
			// Upload by "sideloading": "the same way as an uploaded file is handled by media_handle_upload"
			$args = array(
				'name' => ''.$gptfilename.'',
				'tmp_name' => $tmp,
			);
	
			// Do the upload
			$attachment_id = media_handle_sideload( $args, 0, $gptfilename);
	
			// Cleanup temp file
			@unlink($tmp);
	
			// Error uploading
			if ( is_wp_error($attachment_id) ):
				$data->reason = 'upload';
				$data->success = false;
				$response = $data;
				return rest_ensure_response($response);
			endif;
	
			// Success, return attachment ID (int)
			$data->id = $attachment_id;
			$data->url = wp_get_attachment_image_url( $attachment_id, '' );
			$data->success = true;
			$response = $data;
			return rest_ensure_response($response);

		else:
			$response = new \stdClass();
			$data = new \stdClass();
			
			$data->status = 404;
			$data->code = 'test';
			$response->code = 'rest_no_route';
			$response->message = 'Geen route gevonden die overeenkomt met de URL en aanvraagmethode test.';
		endif;

		return rest_ensure_response($response);
	}
?>