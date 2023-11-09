<?php
	function redirect_to_custom_password_reset() {
		if ('GET' == $_SERVER['REQUEST_METHOD']):
			// Verify key / login combo
			$user = check_password_reset_key($_REQUEST['key'], $_REQUEST['login']);
		
			if (!$user || is_wp_error($user)):
				if ($user && $user->get_error_code() === 'expired_key'):
					wp_redirect(home_url('signin?login=expiredkey'));
				else:
					wp_redirect(home_url('signin?login=invalidkey'));
				endif;
				exit;
			endif;

			$redirect_url = home_url('password-reset');
			$redirect_url = add_query_arg('login', esc_attr($_REQUEST['login']), $redirect_url);
			$redirect_url = add_query_arg('key', esc_attr($_REQUEST['key']), $redirect_url);

			wp_redirect($redirect_url);
			exit;
		endif;
	}
	add_action('login_form_rp', 'redirect_to_custom_password_reset');
	add_action('login_form_resetpass', 'redirect_to_custom_password_reset');
?>