<?php
	function decrypt($action, $string, $token, $clienttoken){
		$output = false;
	
		$encrypt_methode = 'AES-256-CBC';
		$secret_key = $token;
		$secret_iv = $clienttoken;
	
		//$key = hash('sha256', $secret_key);
		$key = openssl_digest($secret_key, 'SHA256', TRUE);
		//$iv = substr(hash('sha256', $secret_iv), 0, 16);
		$iv = openssl_random_pseudo_bytes(openssl_cipher_iv_length($encrypt_methode));
		//$iv = openssl_random_pseudo_bytes(substr(hash('sha256', $secret_iv), 0, 16));
		if($action === 'decrypt'):
			list($string, $iv) = explode('::', $string);
			$output = openssl_decrypt($string, $encrypt_methode, $key, 0, hex2bin($iv));
		else:
		endif;
	
		return $output;
	}
?>