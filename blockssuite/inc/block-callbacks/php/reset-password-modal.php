<?php
function render_block_webkompanen_resetpasswordform() {
	ob_start();
	// Parse shortcode attributes
	//$default_attributes = array('show_title' => false);
	//$attributes = shortcode_atts($default_attributes, $attributes);
	
	$attributes = array();

	if (is_user_logged_in()):
		?>
			<p><?php echo __('You are already signed in.', 'personalize-login'); ?></p>
		<?php
	else:
		if ('POST' == $_SERVER['REQUEST_METHOD']):
			$rp_key = $_REQUEST['rp_key'];
			$rp_login = $_REQUEST['rp_login'];

			$user = check_password_reset_key($rp_key, $rp_login);

			if (!$user || is_wp_error($user)):
				if ($user && $user->get_error_code() === 'expired_key') {
					wp_redirect(home_url('signin?login=expiredkey'));
				} 
				else {
					wp_redirect(home_url('signin?login=invalidkey'));
				}
				exit;
			endif;

			if (isset($_POST['new-pass'])):
				if ($_POST['new-pass'] != $_POST['new-pass']):
					// Passwords don't match
					$redirect_url = home_url('password-reset');

					$redirect_url = add_query_arg('key', $rp_key, $redirect_url);
					$redirect_url = add_query_arg('login', $rp_login, $redirect_url);
					$redirect_url = add_query_arg('error', 'password_reset_mismatch', $redirect_url);

					wp_redirect($redirect_url);
					exit;
				endif;

				if (empty($_POST['new-pass'])):
					// Password is empty
					$redirect_url = home_url('password-reset');//page slug where reset shortcode will be use

					$redirect_url = add_query_arg('key', $rp_key, $redirect_url);
					$redirect_url = add_query_arg('login', $rp_login, $redirect_url);
					$redirect_url = add_query_arg('error', 'password_reset_empty', $redirect_url);

					wp_redirect($redirect_url);
					exit;
				endif;

				// Parameter checks OK, reset password
				reset_password($user, $_POST['new-pass']);
				wp_redirect(home_url('signin?password=changed'));//page slug where signin shortcode will be use
			else:
				?>
					<p><?php echo __('Invalid request', 'personalize-login'); ?></p>
				<?php
			endif;
		elseif(isset($_REQUEST['login']) && isset($_REQUEST['key'])):
			$attributes['login'] = $_REQUEST['login'];
			$attributes['key'] = $_REQUEST['key'];

			// Error messages
			$errors = array();
			if (isset($_REQUEST['error'])):
				$error_codes = explode(',', $_REQUEST['error']);

				foreach ($error_codes as $code) {
					$errors [] = $this->get_error_message($code);
				}
			endif;
			$attributes['errors'] = $errors;
			$generatedpassword = wp_generate_password( 16, true, true );
			$redirect_url = home_url('password-reset');
			$redirect_url = add_query_arg('login', esc_attr($attributes['login']), $redirect_url);
			$redirect_url = add_query_arg('key', esc_attr($attributes['key']), $redirect_url);
			?>
			<div class="modal fade" id="loginModal" data-bs-backdrop="static" data-bs-keyboard="false" aria-hidden="false" tabindex="-1" aria-modal="true" role="dialog" aria-labelledby="loginModal">
  				<div class="modal-dialog modal-dialog-centered">
    				<div class="modal-content">
      					<div class="modal-header">
        					<h5 class="modal-title">Nieuw wachtwoord instellen</h5>
        				<!--
							<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
							action="<?php echo site_url('wp-login.php?action=resetpass'); ?>" method="post" autocomplete="off"
						-->
      					</div>
      					<div class="modal-body">
							<?php echo do_action( 'resetpass_form' ); ?>
							<form action="<?php the_permalink(); ?>" method="post" class="form-floating">
								<div id="passwordHelp" class="form-text">Geef je nieuwe wachtwoord hieronder in of genereer er een.</div>
								<div class="form-floating mb-3">
  									<input type="text" class="form-control" placeholder="<?php _e('Password'); ?>" name="new-pass" id="new-pass" value="<?php echo '' . htmlspecialchars( $generatedpassword ) . ''; ?>" />
  									<label for="new-pass">
										<?php _e('Password'); ?>
									</label>
									<span id="password-strength"></span>
									<div id="passwordHint" class="form-text"><?php echo wp_get_password_hint(); ?></div>
								</div>
								<input type="hidden" name="action" value="reset-pssw" />
								<input type="hidden" id="user_login" name="rp_login" value="<?php echo esc_attr($attributes['login']); ?>" autocomplete="off"/>
								<input type="hidden" name="rp_key" value="<?php echo esc_attr($attributes['key']); ?>"/>
								<a href="<?php $redirect_url; ?>" class="btn btn-secondary mb-3"><?php _e('Wachtwoord genereren'); ?></a>  
								<button type="submit" class="btn btn-primary mb-3" id="save-passw"><?php _e('Wachtwoord opslaan'); ?></button>   
							</form>
     					</div>
      					<!--<div class="modal-footer">
        					<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        					<button type="button" class="btn btn-primary">Save changes</button>
      					</div>-->
    				</div>
  				</div>
			</div>
			<div class="modal-backdrop in m-0"></div>
			<?php
		else:
			?>
			<p><?php echo __('Invalid password reset link.', 'personalize-login'); ?></p>
			<?php
		endif;
	endif;
	
	$output = ob_get_contents();
	ob_clean();
	ob_flush();
	return $output;
}
?>