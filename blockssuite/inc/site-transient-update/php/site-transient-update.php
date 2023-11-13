<?php
function webkompanen_admin_notice() {
	global $message;
	global $messagestyle;
    printf( '<div class="%1$s"><p>%2$s</p></div>', esc_attr( $messagestyle ), esc_html( $message ) ); 
}

function webkompanen_site_transient_update_themes( $transient ) {
	$themedata = wp_get_theme( 'webkompanen' );
    $stylesheet = get_template();

	$ch = curl_init(); 
	curl_setopt($ch, CURLOPT_URL, ''.$themedata['ThemeURI'].'');  
	curl_setopt($ch, CURLOPT_USERAGENT,'Awesome-Octocat-App');
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); 
	curl_setopt($ch, CURLOPT_HTTPHEADER, array('Accept: application/json', 'Content-Type: application/json'));

	$fetch = curl_exec($ch); 
	curl_close($ch); 

	$jsondata = json_decode($fetch, true);


	if(isset($jsondata->message)){
		global $message;
		global $messagestyle;
		
		$message = 'There is an conflict detected for '.$themedata['Name'].' message '.$jsondata->message.' for more information read the GitHub documentation '.$jsondata->documentation_url.'.';
		$messagestyle = 'notice notice-error';
		add_action( 'admin_notices', 'webkompanen_admin_notice');

		$item = array(
			'theme' => $stylesheet,
           	'plugin' => 'webkompanen/webkompanen.php',
           	'new_version'  => ''.$themedata['Version'].'',
           	'url'          => '',
           	'package'      => '',
           	'requires'     => '',
         	'requires_php' => '',
			'icons'         => array(),
            'banners'       => array(),
            'banners_rtl'   => array(),
            'tested'        => '',
            'compatibility' => new stdClass()
        );
		
		if($transient):
        	$transient->response[$stylesheet] = $item;
		endif;
		
		return $transient;
	}
	elseif(isset($jsondata['version'])){
		if(version_compare( (float)(''.$jsondata['version'].''), (float)(''.$themedata['Version'].''), '>' )) {
			
			$newversion = $jsondata['version'];
			$newpackage = $jsondata['package'];
			
			$item = array(
			    'theme' => $stylesheet,
           	    'new_version'  => $newversion,
           	    'url'          => '',
           	    'package'      => $newpackage,
           	    'requires'     => '',
         	    'requires_php' => '',
			    'icons'         => array(),
                'banners'       => array(),
                'banners_rtl'   => array(),
                'tested'        => '',
                'compatibility' => new stdClass()
            );
        
            if($transient):
        		$transient->response[$stylesheet] = $item;
			endif;
		}
		return $transient;
	}
}
add_filter( 'site_transient_update_themes', 'webkompanen_site_transient_update_themes' );
?>
