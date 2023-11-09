<?php
	function send_email( $phpmailer ) {
  		$phpmailer->Sender   = 'noreply@dutchindordrecht.nl';
	}

	add_action( 'phpmailer_init', 'send_email' );
?>