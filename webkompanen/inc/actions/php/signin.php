<?php
	function redirect_to_custom_login() {
		$redirect_url = home_url('signin');

		wp_redirect($redirect_url);
	}
	add_action('login_form_login', 'redirect_to_custom_login');
?>