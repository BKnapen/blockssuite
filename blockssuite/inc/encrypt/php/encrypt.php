<?php
	function encrypt($action, $string, $token, $clienttoken){
		$output = false;
	
		$encrypt_methode = 'AES-256-CBC';
		$secret_key = $token;
	

		$key = openssl_digest($secret_key, 'sha256', true);
		$iv = openssl_random_pseudo_bytes(openssl_cipher_iv_length($encrypt_methode));

		if($action === 'encrypt'):
			$output = openssl_encrypt($string, $encrypt_methode, $key, 0, $iv).'::'.bin2hex($iv);
		else:
		endif;
	
		return $output;
	}
?>