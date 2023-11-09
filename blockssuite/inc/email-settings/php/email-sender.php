<?php
	function send_email( $phpmailer ) {
  		$phpmailer->Sender   = get_option( 'phpmailerFrom');
	}

	add_action( 'phpmailer_init', 'send_email' );
?>