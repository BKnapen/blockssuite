<?php
	function send_smtp_email( $phpmailer ) {
   		$phpmailer->isSMTP();
   		$phpmailer->Host       = get_option( 'phpmailerHost');//'dutchindordrecht.nl'
   		$phpmailer->SMTPAuth   = get_option( 'phpmailerSMTPAuth');//true;
   		$phpmailer->Port       = get_option( 'phpmailerPort');//465;
   		$phpmailer->Username   = get_option( 'phpmailerUsername');//'noreply@dutchindordrecht.nl';
   		$phpmailer->Password   = get_option( 'phpmailerPassword');//'Bram01Knapen_11041980';
   		//$phpmailer->SMTPSecure = 'tls';
   		$phpmailer->From       = get_option( 'phpmailerFrom');//'noreply@dutchindordrecht.nl';
  		$phpmailer->FromName   = get_option( 'phpmailerFromName');//'noreply@dutchindordrecht.nl';
		$phpmailer->IsHTML(get_option( 'phpmailerIsHTML'));//
		$phpmailer->SMTPSecure = get_option( 'phpmailerSMTPSecure');//'ssl';
		$phpmailer->SMTPAutoTLS = get_option( 'phpmailerSMTPAutoTLS');//false;
	
		/*$phpmailer->DKIM_domain = 'rsstv4ucom';
		$phpmailer->DKIM_private = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCmkQUQqQfvkdw9prf246Fml0nZx9h0rhTagcqrbqgdg2E1sX45xskd+dtsfeko63Z+Y/d8Z9mPK1UDL9dyW2pocOkqhZuRowjVhgDbWGdURVeZUFTj15npLMlKmOBXeYMyJhtuEDOHqZrYZa3w7WuJDHRFf48K/0RWkq0+sAaCBQIDAQAB';
		$phpmailer->DKIM_selector = 'selector1';
		$phpmailer->DKIM_passphrase = '';*/
	}

	add_action( 'phpmailer_init', 'send_smtp_email' );
?>