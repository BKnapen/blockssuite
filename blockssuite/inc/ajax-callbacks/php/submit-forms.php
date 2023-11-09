<?php  
	function submit_forms(){
		$data = array();
		$data['success'] = true;
		
		foreach($_POST as $key => $value) {
  			$data[''.$key.''] = $value;
		} 
		
		//echo json_encode($data);
	$message ='<!doctype html>';
		$message .='<html>';
			$message .='<head>';
				$message .='<meta charset="utf-8">';
    			$message .='<!-- utf-8 works for most cases -->';
    			$message .='<meta name="viewport" content="width=device-width, initial-scale=1.0">';
    $message .='<!-- Forcing initial-scale shouldn\'t be necessary -->';
    $message .='<meta http-equiv="X-UA-Compatible" content="IE=edge">';
    $message .='<!-- Use the latest (edge) version of IE rendering engine -->';
    $message .='<title>Nieuwe inzending van een formulier van dutchindordrecht.nl</title>';
    $message .='<!-- The title tag shows in email notifications, like Android 4.4. -->';
    $message .='<!-- Please use an inliner tool to convert all CSS to inline as inpage or external CSS is removed by email clients -->';
    $message .='<!-- important in CSS is used to prevent the styles of currently inline CSS from overriding the ones mentioned in media queries when corresponding screen sizes are encountered -->';
    $message .='<!-- CSS Reset -->';
    $message .='<style type="text/css">';
		$message .='@import url("https://fonts.googleapis.com/css2?family=GFS+Didot&family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap");';
		$message .='@import url("https://fonts.googleapis.com/css2?family=GFS+Didot&display=swap");';
		$message .='/* What it does: Remove spaces around the email design added by some email clients. */';
      	$message .='/* Beware: It can remove the padding / margin and add a background color to the compose a reply window. */';
		$message .='html,  body {';
			$message .='font-family: \'Lato\', sans-serif !important;';
			$message .='font-weight: 400;';
			$message .='font-style: normal;';
			$message .='margin: 0 !important;';
			$message .='padding: 0 !important;';
			$message .='height: 100% !important;';
			$message .='width: 100% !important;';
		$message .='}';
		$message .='h3 {';
			$message .='font-family: \'Lato\', sans-serif !important;';
		$message .='}';
		$message .='/* What it does: Stops email clients resizing small text. */';
		$message .='* {';
			$message .='-ms-text-size-adjust: 100%;';
			$message .='-webkit-text-size-adjust: 100%;';
		$message .='}';
		$message .='/* What it does: Forces Outlook.com to display emails full width. */';
		$message .='.ExternalClass {';
			$message .='width: 100%;';
		$message .='}';
		$message .='/* What is does: Centers email on Android 4.4 */';
		$message .='div[style*="margin: 16px 0"] {';
			$message .='margin: 0 !important;';
		$message .='}';
		$message .='/* What it does: Stops Outlook from adding extra spacing to tables. */';
		$message .='table,  td {';
			$message .='mso-table-lspace: 0pt !important;';
			$message .='mso-table-rspace: 0pt !important;';
		$message .='}';
		$message .='/* What it does: Fixes webkit padding issue. Fix for Yahoo mail table alignment bug. Applies table-layout to the first 2 tables then removes for anything nested deeper. */';
		$message .='table {';
			$message .='border-spacing: 0 !important;';
			$message .='border-collapse: collapse !important;';
			$message .='table-layout: fixed !important;';
			$message .='margin: 0 auto !important;';
		$message .='}';
		$message .='table table table {';
			$message .='table-layout: auto;';
		$message .='}';
		$message .='/* What it does: Uses a better rendering method when resizing images in IE. */';
	$message .='img {';
		$message .='-ms-interpolation-mode: bicubic;';
	$message .='}';
	$message .='/* What it does: Overrides styles added when Yahoo\'s auto-senses a link. */';
	$message .='.yshortcuts a {';
		$message .='border-bottom: none !important;';
	$message .='}';
			$message .='/* What it does: Another work-around for iOS meddling in triggered links. */';
			$message .='a[x-apple-data-detectors] {';
				$message .='color: inherit !important;';
			$message .='}';
		$message .='</style>';
		
		$message .='<!-- Progressive Enhancements -->';
    	$message .='<style type="text/css">';
        
        	$message .='/* What it does: Hover styles for buttons */';
        	$message .='.button-td, .button-a {';
            	$message .='transition: all 100ms ease-in;';
        	$message .='}';
        	$message .='.button-td:hover, .button-a:hover {';
            	$message .='background: #000000 !important;';
            	$message .='border-color: #000000 !important;';
        	$message .='}';
		
			$message .='.email-container {';
                $message .='width: 600px !important;';
                $message .='word-wrap: break-word !important';
            $message .='}';
		
			$message .='p.email-container {';
                $message .='width: 600px !important;';
                $message .='word-wrap: break-word !important';
            $message .='}';

        	$message .='/* Media Queries */';
        	$message .='@media screen and (max-width: 600px) {';

            	$message .='.email-container {';
                	$message .='width: 100% !important;';
            	$message .='}';
		
            	$message .='p.email-container {';
                	$message .='width: 100% !important;';
            	$message .='}';

            	$message .='/* What it does: Forces elements to resize to the full width of their container. Useful for resizing images beyond their max-width. */';
            	$message .='.fluid, .fluid-centered {';
                	$message .='max-width: 100% !important;';
                	$message .='height: auto !important;';
                	$message .='margin-left: auto !important;';
                	$message .='margin-right: auto !important;';
            	$message .='}';
            	$message .='/* And center justify these ones. */';
            	$message .='.fluid-centered {';
                	$message .='margin-left: auto !important;';
                	$message .='margin-right: auto !important;';
            	$message .='}';

            	$message .='/* What it does: Forces table cells into full-width rows. */';
            	$message .='.stack-column, .stack-column-center {';
                	$message .='display: block !important;';
                	$message .='width: 100% !important;';
                	$message .='max-width: 100% !important;';
                	$message .='direction: ltr !important;';
					$message .='vertical-align: top; !important;';
            	$message .='}';
            	$message .='/* And center justify these ones. */';
            	$message .='.stack-column-center {';
                	$message .='text-align: center !important;';
                	$message .='vertical-align: top; !important;';
            	$message .='}';
        
            	$message .='/* What it does: Generic utility class for centering. Useful for images, buttons, and nested tables. */';
            	$message .='.center-on-narrow {';
                	$message .='text-align: center !important;';
                	$message .='display: block !important;';
                	$message .='margin-left: auto !important;';
                	$message .='margin-right: auto !important;';
                	$message .='float: none !important;';
            	$message .='}';
            	$message .='.left-on-narrow {';
                	$message .='text-align: left !important;';
                	$message .='display: block !important;';
                	$message .='margin-left: auto !important;';
                	$message .='margin-right: auto !important;';
                	$message .='float: none !important;';
            	$message .='}';
            	$message .='table.center-on-narrow {';
                	$message .='display: inline-block !important;';
            	$message .='}';
            	$message .='table.left-on-narrow {';
                	$message .='display: inline-block !important;';
            	$message .='}';
                
        	$message .='}';
		$message .='</style>';
	$message .='</head>';
    $message .='<body bgcolor="#000000" width="100%" style="margin: 0;" yahoo="yahoo">';
    	$message .='<table bgcolor="#000000" cellpadding="0" cellspacing="0" border="0" height="100%" width="100%" style="border-collapse:collapse;">';
      		$message .='<tr>';
        		$message .='<td>';
					$message .='<center style="width: 100%;">';
						$message .='<!-- Visually Hidden Preheader Text : BEGIN -->';
						$message .='<div style="display:none;font-size:1px;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;mso-hide:all;font-family: \'Lato\', sans-serif !important;">';
							$message .='Nieuwe inzending van een formulier van skeelup.com';
						$message .='</div>';
						$message .='<!-- Visually Hidden Preheader Text : END --> ';
						$message .='<!-- Email Header : BEGIN -->';
            			$message .='<table align="center" width="600" class="email-container">';
            				$message .='<tr>';
                				$message .='<td style="padding: 20px 0; text-align: center;"><img style="width:25%" src="https://skeelup.gaatbinnenkortonline.nl/wp-content/uploads/cropped-fav-icon-skeel-up@2x.png" alt="logo SKEELUP" border="0"></td>';
              				$message .='</tr>';
          				$message .='</table>';
            			$message .='<!-- Email Header : END --> ';
            
            			$message .='<!-- Email Body : BEGIN -->';
            			$message .='<table cellspacing="0" cellpadding="0" border="0" align="center" bgcolor="#ffffff" width="600" style="width:600px;" class="email-container">';
							$message .='<!-- 1 Column Text : BEGIN -->';
							$message .='<tr>';
								$message .='<td width="600" class="email-container" style="width:600px; padding: 40px 40px 10px 40px; text-align: left; font-family: \'Lato\', sans-serif !important; font-size: 15px; mso-height-rule: exactly; line-height: 20px; color: #666666; white-space: normal; overflow-wrap: break-word; word-wrap: break-word;">';
									foreach($_POST as $key => $value) {
										if($key !== 'action' && $key !== 'emailsubject'){
											$message .= ''.str_replace('_', ' ', $key).': '.nl2br($value).'<br>';
										}
									} 
									$message .='<br><br>';
									$message .= 'SKEELUP,<br>';
									$message .= 'skeelup.com';
								$message .='</td>';
							$message .='</tr>';
							$message .='<!-- 1 Column Text : BEGIN -->';
						$message .='</table>';
						$message .='<!-- Email Body : END --> ';
						
						$message .='<!-- Email Footer : BEGIN -->';
						$message .='<table align="center" width="600" class="email-container">';
            				$message .='<tr>';
                				$message .='<td style="padding: 40px 10px;width: 100%;font-size: 12px; font-family: \'Lato\', sans-serif; mso-height-rule: exactly; line-height:18px; text-align: center; color: #ffffff;">';
                					$message .='SKEELUP<br>';
                					$message .='<span class="mobile-link--footer">skeelup.com</span><br>';
								$message .='</td>';
              				$message .='</tr>';
          				$message .='</table>';
            			$message .='<!-- Email Footer : END -->';
					$message .='</center>';
				$message .='</td>';
			$message .='</tr>';
		$message .='</table>';
	$message .='</body>';
$message .='</html>';

		$headers = array('Content-Type: text/html; charset=UTF-8','From: info@skeelup.com <info@skeelup.com>');
		
	$clientId = 'fab16d60-6975-4286-b310-e460920ce040';
	$clientSecret = 'I_e8Q~RiLDsaCSNMAyn._vRKna1VABUAhmb9KdwI';

	$postUrl = '/c8079608-e881-41b4-ba11-21fff7769a52/oauth2/v2.0/token';
	$hostname = 'login.microsoftonline.com';
	$fullurl = 'https://login.microsoftonline.com/c8079608-e881-41b4-ba11-21fff7769a52/oauth2/v2.0/token';

	$headers = array(
    	'POST ' . $postUrl . ' HTTP/1.1',
    	'Host: ' . $hostname,
    	'Content-type: application/x-www-form-urlencoded',
	);

	$post_params = array(
    	'client_id' => $clientId,
    	'scope' => 'https://graph.microsoft.com/.default',
    	'client_secret' => $clientSecret,
    	'grant_type' => 'client_credentials',
	);

	$curl = curl_init($fullurl);
			
	curl_setopt($curl, CURLOPT_POST, true);
	curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
	curl_setopt($curl, CURLOPT_POSTFIELDS, $post_params);
	curl_setopt($curl, CURLOPT_HTTPHEADER, array('application/x-www-form-urlencoded'));
	curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, true);
	curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
		
	$response = json_decode(curl_exec($curl));
	//curl_close($curl);

	//$data['response'] = $response;	
	//$data['access_token'] = $response->access_token;
		
	$accesstoken = $response->access_token;

    $graphPostUrl = '/v1.0/users/info@skeelup.com/sendMail/';
	$graphFullUrl = 'https://graph.microsoft.com/v1.0/users/info@skeelup.com/sendMail/';
	$graphHostname = 'graph.microsoft.com';

	$graphheaders = array(
    	'POST ' . $graphPostUrl . ' HTTP/1.1',
    	'Host: ' . $graphHostname,
    	'Content-type: application/json',
        'Authorization: Bearer '.$accesstoken.'',
	);

	$messsagedata = array(
        'message' => array(
            'subject' => ''.$_POST['emailsubject'].'',
            'body' => array(
                  'contentType' => 'HTML',
                  'content' => $message
            ),
            'sender' => array(
                'emailAddress' => array(
                      'name' => 'Info | SKEELUP',
                      'address' => 'info@skeelup.com'
                )
              ),
            'from' => array(
                'emailAddress' => array(
                      'name' => 'Info | SKEELUP',
                      'address' => 'info@skeelup.com'
                )
           	),
            'toRecipients' => [
				array(
                	'emailAddress' => array(
                    	'address' => 'info@skeelup.com'
                	)
            	)
			],
            'ccRecipients' => [
				array(
                	'emailAddress' => array(
						'name' => 'Tim | SKEELUP',
                    	'address' => 'tim@skeelup.com'
                	)
            	),
				array(
                	'emailAddress' => array(
						'name' => 'Amanda | SKEELUP',
                    	'address' => 'amanda@skeelup.com'
                	)
            	)
			],
            'bccRecipients' => [
				array(
                	'emailAddress' => array(
						'name' => 'Bram Knapen',
                    	'address' => 'bramknapen@outlook.com'
                	)
            	)
			]
        ),
  		'saveToSentItems' => false
    );

    $graph_post_params = json_encode($messsagedata);
	//$data['messsagedata'] = $messsagedata;
    $graphcUrl = curl_init($graphFullUrl);
			
	curl_setopt($graphcUrl, CURLOPT_POST, true);
	curl_setopt($graphcUrl, CURLOPT_HTTPHEADER, $graphheaders);
	curl_setopt($graphcUrl, CURLOPT_POSTFIELDS, $graph_post_params);
	curl_setopt($graphcUrl, CURLOPT_SSL_VERIFYPEER, false);
	curl_setopt($graphcUrl, CURLOPT_RETURNTRANSFER, 1);
	//curl_setopt($graphcUrl, CURLOPT_HEADER, true);
	//curl_setopt($graphcUrl, CURLOPT_NOBODY, true);

    $graphresponse = json_decode(curl_exec($graphcUrl));
	$httpcode = curl_getinfo($graphcUrl, CURLINFO_HTTP_CODE);
	//curl_close($graphcUrl);

	//echo 'bram';
	$data['httpcode'] = $httpcode;
		
	if($httpcode == 202):
		wp_send_json($data);
		wp_die();
	else:
		$data['success'] = false;
		$data['graphresponse'] = $graphresponse;
		//$data['mailresult'] = $sendcopy;
		wp_send_json($data);
		wp_die();
	endif;
	
		/*$send = wp_mail('tim@skeelup.com', 'test', $message, $headers);
		$sendcopy = wp_mail('bramknapen@outlook.com', 'test', $message, $headers);

	
		if($send && $sendcopy) {	
			wp_send_json($data);
			wp_die();
       	}
		else{
			$data['success'] = false;
			$data['mailresult'] = $sendcopy;
			wp_send_json($data);
			wp_die();
		}*/
		
	}

	add_action('wp_ajax_submit_forms', 'submit_forms');
	add_action('wp_ajax_nopriv_submit_forms', 'submit_forms');
?>