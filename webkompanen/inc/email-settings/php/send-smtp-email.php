<?php
	function send_smtp_email( $phpmailer ) {
   		$phpmailer->isSMTP();
   		$phpmailer->Host       = get_option( 'phpmailerHost');
   		$phpmailer->SMTPAuth   = get_option( 'phpmailerSMTPAuth');
   		$phpmailer->Port       = get_option( 'phpmailerPort');
   		$phpmailer->Username   = get_option( 'phpmailerUsername');
   		$phpmailer->Password   = get_option( 'phpmailerPassword');
   		//$phpmailer->SMTPSecure = 'tls';
   		$phpmailer->From       = get_option( 'phpmailerFrom');
  		$phpmailer->FromName   = get_option( 'phpmailerFromName');
		$phpmailer->IsHTML(get_option( 'phpmailerIsHTML'));
		$phpmailer->SMTPSecure = get_option( 'phpmailerSMTPSecure');
		$phpmailer->SMTPAutoTLS = get_option( 'phpmailerSMTPAutoTLS');
	
		/*$phpmailer->DKIM_domain = 'xxx.com';
		$phpmailer->DKIM_private = 'xxx';
		$phpmailer->DKIM_selector = 'selector1';
		$phpmailer->DKIM_passphrase = '';*/
	}

	add_action( 'phpmailer_init', 'send_smtp_email' );
?>