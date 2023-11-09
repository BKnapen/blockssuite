<?php

	function redirect_to_custom_lost_password() {
		$redirect_url = home_url('lostpassword');

		wp_redirect($redirect_url);
	}

	add_action('login_form_lostpassword', 'redirect_to_custom_lostpassword');
?>