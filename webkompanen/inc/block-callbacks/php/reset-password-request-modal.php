<?php
function render_block_webkompanen_resetpassword($attributes){
	ob_start();
	
    $usernameemail = isset($_POST['username-email']) ? wp_specialchars( $_POST['username-email'], 1 ) : '';
	
	if ( isset($_POST['action']) ):
		if ( $_POST['action'] == 'reset-pssw' ):

    	$useremail = get_user_by( 'email', $usernameemail );
    	$username = get_user_by( 'login', $usernameemail );
    	//https://ardosz.gaatbinnenkortonline.nl/account-reset/
		if( $useremail instanceof WP_User):
			$user =  $useremail;
	
        	$user_id = $user->ID;
        	$user_info = get_userdata($user_id);
        	$unique = get_password_reset_key( $user_info );
        	$unique_url = network_site_url('wp-login.php?action=rp&key=' . $unique . '&login=' . rawurlencode($user_info->user_login) . '', 'login');
			
        	$subject  = "Reset Password Link";
        	$message = __('Someone requested that the password be reset for the following account:') . '<br>';
        	$message  = '<p>Hi ' . ucfirst( $user_info->first_name ) . ',</p>';
        	$message .= network_home_url( '/' ) . '<br>';
        	$message .= sprintf(__('Username: %s'), $user_info->user_login) . '<br>';
        	$message .= __('If this was a mistake, just ignore this email and nothing will happen.') . '<br>';
        	$message .= __('To reset your password, visit the following address:') . '<br>';
        	$message .=  $unique_url;

        	wp_mail( $user_info->user_email, $subject, $message ); // TODO
			
			?>
			<div class="modal fade" id="loginModal" data-bs-backdrop="static" data-bs-keyboard="false" aria-hidden="false" tabindex="-1" aria-modal="true" role="dialog" aria-labelledby="loginModal">
  				<div class="modal-dialog modal-dialog-centered">
    				<div class="modal-content">
      					<div class="modal-header">
        					<h5 class="modal-title">Mijn account</h5>
        					<!--
								<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
								//Vul je gebruikersnaam of e-mailadres in. Je ontvangt een e-mailbericht met instructies hoe je je wachtwoord opnieuw kunt instellen.
								wp-login.php?action=lostpassword
							-->
      					</div>
      					<div class="modal-body">
							<p>Er is een e-mail verstuurd welk is gekoppeld aan opgegeven e-mailadres, volg de instructies van de e-mail op om je wachtwoord te resetten.</p>
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
	
		elseif( $username instanceof WP_User):
			$user = $username;
	
        	$user_id = $user->ID;
        	$user_info = get_userdata($user_id);
        	$unique = get_password_reset_key( $user_info );
        	$unique_url = network_site_url('wp-login.php?action=rp&key=' . $unique . '&login=' . rawurlencode($user_info->user_login) . '', 'login');
			$url = untrailingslashit( get_template_directory_uri( __FILE__ ) );
			$path = untrailingslashit( get_template_directory( __FILE__ ) );
			ob_start();
			?>
				<!doctype html>
				<html>
    				<head>
    					<meta charset="UTF-8">
    					<!-- utf-8 works for most cases -->
    					<meta name="viewport" content="width=device-width, initial-scale=1.0">
    					<!-- Forcing initial-scale shouldn't be necessary -->
    					<meta http-equiv="X-UA-Compatible" content="IE=edge">
    					<!-- Use the latest (edge) version of IE rendering engine -->
    					<title>Wachtwoord herstel</title>
    					<!-- The title tag shows in email notifications, like Android 4.4. -->
    					<!-- Please use an inliner tool to convert all CSS to inline as inpage or external CSS is removed by email clients -->
    					<!-- important in CSS is used to prevent the styles of currently inline CSS from overriding the ones mentioned in media queries when corresponding screen sizes are encountered -->

    					<!-- CSS Reset -->
    					<style type="text/css">
							/* What it does: Remove spaces around the email design added by some email clients. */
      						/* Beware: It can remove the padding / margin and add a background color to the compose a reply window. */
							html,  body {
								margin: 0 !important;
								padding: 0 !important;
								height: 100% !important;
								width: 100% !important;
							}
							/* What it does: Stops email clients resizing small text. */
							* {
								-ms-text-size-adjust: 100%;
								-webkit-text-size-adjust: 100%;
							}
							/* What it does: Forces Outlook.com to display emails full width. */
							.ExternalClass {
								width: 100%;
							}
							/* What is does: Centers email on Android 4.4 */
							div[style*="margin: 16px 0"] {
								margin: 0 !important;
							}
							/* What it does: Stops Outlook from adding extra spacing to tables. */
							table,  td {
								mso-table-lspace: 0pt !important;
								mso-table-rspace: 0pt !important;
							}
							/* What it does: Fixes webkit padding issue. Fix for Yahoo mail table alignment bug. Applies table-layout to the first 2 tables then removes for anything nested deeper. */
							table {
								border-spacing: 0 !important;
								border-collapse: collapse !important;
								table-layout: fixed !important;
								margin: 0 auto !important;
							}
							table table table {
								table-layout: auto;
							}
							/* What it does: Uses a better rendering method when resizing images in IE. */
							img {
								-ms-interpolation-mode: bicubic;
							}
							/* What it does: Overrides styles added when Yahoo's auto-senses a link. */
							.yshortcuts a {
								border-bottom: none !important;
							}
							/* What it does: Another work-around for iOS meddling in triggered links. */
							a[x-apple-data-detectors] {
								color: inherit !important;
							}
						</style>

    					<!-- Progressive Enhancements -->
    					<style type="text/css">
        
        					/* What it does: Hover styles for buttons */
        					.button-td,
        					.button-a {
            					transition: all 100ms ease-in;
        					}
        					.button-td:hover,
        					.button-a:hover {
            					background: #555555 !important;
            					border-color: #555555 !important;
        					}
	
        					/* Media Queries */
        					@media screen and (max-width: 600px) {

            					.email-container {
                					width: 100% !important;
            					}

            					/* What it does: Forces elements to resize to the full width of their container. Useful for resizing images beyond their max-width. */
            					.fluid,
            					.fluid-centered {
                					max-width: 100% !important;
                					height: auto !important;
                					margin-left: auto !important;
                					margin-right: auto !important;
            					}
            					/* And center justify these ones. */
            					.fluid-centered {
                					margin-left: auto !important;
                					margin-right: auto !important;
            					}

            					/* What it does: Forces table cells into full-width rows. */
            					.stack-column,
            					.stack-column-center {
                					display: block !important;
                					width: 100% !important;
                					max-width: 100% !important;
                					direction: ltr !important;
            					}	
            					/* And center justify these ones. */
            					.stack-column-center {
                					text-align: center !important;
            					}
        
            					/* What it does: Generic utility class for centering. Useful for images, buttons, and nested tables. */
            					.center-on-narrow {
                					text-align: center !important;
                					display: block !important;
                					margin-left: auto !important;
                					margin-right: auto !important;
                					float: none !important;
            					}
            					table.center-on-narrow {
                					display: inline-block !important;
           						}
                
        					}

    					</style>
					</head>
    				<body bgcolor="#e0e0e0" width="100%" style="margin: 0;" yahoo="yahoo">
    					<table bgcolor="#e0e0e0" cellpadding="0" cellspacing="0" border="0" height="100%" width="100%" style="border-collapse:collapse;">
      						<tr>
        						<td>
									<center style="width: 100%;">
            
            							<!-- Visually Hidden Preheader Text : BEGIN -->
            							<div style="display:none;font-size:1px;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;mso-hide:all;font-family: sans-serif;"> 
											Wachtwoord herstel 
										</div>
            							<!-- Visually Hidden Preheader Text : END --> 
            
            							<!-- Email Header : BEGIN height="50" -->
            							<table align="center" width="600" class="email-container">
            								<tr>
                								<td style="padding: 20px 0; text-align: center">
													<img src="<?php echo $url; ?>/assets/img/png/ardosz-logo.png" width="200" alt="alt_text" border="0">
												</td>
              								</tr>
          								</table>
            							<!-- Email Header : END --> 
            
            							<!-- Email Body : BEGIN -->
            							<table cellspacing="0" cellpadding="0" border="0" align="center" bgcolor="#ffffff" width="600" class="email-container">
            
            								<!-- 1 Column Text : BEGIN -->
            								<tr>
                								<td style="padding: 40px; text-align: left; font-family: sans-serif; font-size: 15px; mso-height-rule: exactly; line-height: 20px; color: #555555;"> 
													<?php echo ucfirst( $user_info->first_name ); ?>,
													<br>
                									<br>
													Iemand heeft verzocht om het wachtwoord van het volgende account opnieuw in te stellen. 
                									<br>
                									<br>
													Sitenaam: <?php echo get_bloginfo( 'name' ) ?>
                									<br>
                									<br>
                									Gebruikersnaam: <?php echo sprintf(__('%s'), $user_info->user_login) ?>
                									<br>
                									<br>
													Als dit een vergissing was, kun je deze e-mail negeren en zal er niets gebeuren.
                									<br>
                									<br>
													Ga naar dit adres om je wachtwoord opnieuw in te stellen:
                									<br>
                									<br>
													<?php echo $unique_url; ?>
												</td>
											</tr>
										</table>
            							<!-- Email Body : END --> 
            
            							<!-- Email Footer : BEGIN -->
            							<table align="center" width="600" class="email-container">
            								<tr>
                								<td style="padding: 40px 10px;width: 100%;font-size: 12px; font-family: sans-serif; mso-height-rule: exactly; line-height:18px; text-align: center; color: #888888;">
                									<br>
                									<br>
                									ArdoSZ B.V.
													<br>
                									<span class="mobile-link--footer">
														Wijchenseweg 10A | 6537 TL | Nijmegen
													</span>
												</td>
              								</tr>
          								</table>
            							<!-- Email Footer : END -->
            
									</center>
								</td>
							</tr>
						</table>
					</body>
				</html>
			<?php
			$message = ob_get_contents();
			ob_clean();
			ob_flush();
			$subject = 'Wachtwoord herstel';
        	/*$subject  = "Reset Password Link";
        	$message = __('Someone requested that the password be reset for the following account:') . '<br>';
        	$message  = '<p>Hi ' . ucfirst( $user_info->first_name ) . ',</p>';
        	$message .= network_home_url( '/' ) . '<br>';
        	$message .= sprintf(__('Username: %s'), $user_info->user_login) . '<br>';
        	$message .= __('If this was a mistake, just ignore this email and nothing will happen.') . '<br>';
        	$message .= __('To reset your password, visit the following address:') . '<br>';
        	$message .=  $unique_url;*/

        	wp_mail( $user_info->user_email, $subject, $message ); // TODO
			?>
			<div class="modal fade" id="loginModal" data-bs-backdrop="static" data-bs-keyboard="false" aria-hidden="false" tabindex="-1" aria-modal="true" role="dialog" aria-labelledby="loginModal">
  				<div class="modal-dialog modal-dialog-centered">
    				<div class="modal-content">
      					<div class="modal-header">
        					<h5 class="modal-title">Mijn account</h5>
        					<!--
								<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
								//Vul je gebruikersnaam of e-mailadres in. Je ontvangt een e-mailbericht met instructies hoe je je wachtwoord opnieuw kunt instellen.
								wp-login.php?action=lostpassword
							-->
      					</div>
      					<div class="modal-body">
							<p>Er is een e-mail verstuurd welk is gekoppeld aan opgegeven gebruikersnaam, volg de instructies van de e-mail op om je wachtwoord te resetten.</p>
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
		<div class="modal fade" id="loginModal" data-bs-backdrop="static" data-bs-keyboard="false" aria-hidden="false" tabindex="-1" aria-modal="true" role="dialog" aria-labelledby="loginModal">
  			<div class="modal-dialog modal-dialog-centered">
    			<div class="modal-content">
      				<div class="modal-header">
        				<h5 class="modal-title">Mijn account</h5>
        				<!--
							<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
							//Vul je gebruikersnaam of e-mailadres in. Je ontvangt een e-mailbericht met instructies hoe je je wachtwoord opnieuw kunt instellen.
							wp-login.php?action=lostpassword
						-->
      				</div>
      				<div class="modal-body">
						<form action="<?php the_permalink(); ?>" method="post" class="form-floating">
							<div class="form-floating mb-3">
  								<input type="text" class="form-control" placeholder="<?php _e('Gebruikersnaam of E-mailadres'); ?>" name="username-email" id="username-email" value="<?php echo $usernameemail; ?>">
  								<label for="username-email">
									<?php _e('Gebruikersnaam of E-mailadress'); ?>
								</label>
								<div id="emailHelp" class="form-text">
									Vul je gebruikersnaam of e-mailadres in. Je ontvangt een e-mailbericht met instructies hoe je je wachtwoord opnieuw kunt instellen.
								</div>
							</div>
							<input type="hidden" name="action" value="reset-pssw" />
							<button type="submit" class="btn btn-primary mb-3"><?php _e('Reset wachtwoord'); ?></button>   
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
		endif;
	endif;
	else:
		//$response['data'] = [ "message" =>  __('Email address not exists.') ];
		?>
		<div class="modal fade" id="loginModal" data-bs-backdrop="static" data-bs-keyboard="false" aria-hidden="false" tabindex="-1" aria-modal="true" role="dialog" aria-labelledby="loginModal">
  			<div class="modal-dialog modal-dialog-centered">
    			<div class="modal-content">
      				<div class="modal-header">
        				<h5 class="modal-title">Mijn account</h5>
        				<!--<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>-->
      				</div>
      				<div class="modal-body">
						<form action="<?php the_permalink(); ?>" method="post" class="form-floating">
							<div class="form-floating mb-3">
  								<input type="text" class="form-control" placeholder="<?php _e('Gebruikersnaam of E-mailadress'); ?>" name="username-email" id="username-email" value="<?php echo $usernameemail; ?>">
  								<label for="username-email"><?php _e('Gebruikersnaam of E-mailadress'); ?></label>
								<div id="emailHelp" class="form-text">Vul je gebruikersnaam of e-mailadres in. Je ontvangt een e-mailbericht met instructies hoe je je wachtwoord opnieuw kunt instellen.</div>
							</div>
							<input type="hidden" name="action" value="reset-pssw" />
							<button type="submit" class="btn btn-primary mb-3"><?php _e('Reset wachtwoord'); ?></button>   
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
	endif;
	
	$output = ob_get_contents();
	ob_clean();
	ob_flush();
	return $output;
}
?>