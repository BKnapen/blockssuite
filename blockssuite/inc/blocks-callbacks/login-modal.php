<?php

	function render_block_webkompanen_login($attributes) {

	
		ob_start();
        $username = '';
        if ( isset($_GET['token']) ):
            $usertoken = get_users(
                array(
                     'meta_key' => 'token',
                     'meta_value' => ''.$_GET['token'].'',
                     'number' => 1
                )
              );
              if ( !(is_wp_error( $usertoken ) )):
                  wp_clear_auth_cookie();
              
                  //print_r($user);
                  //print_r($user[0]->ID);
                  //print_r($user[0]->user_login);
                  //wp_set_current_user ( $user->ID );
                  //wp_signon( array( 'user_login' => $user[0]->user_login ) );
                  wp_set_current_user( $usertoken[0]->ID, $usertoken[0]->user_login );
                  wp_set_auth_cookie  ( $usertoken[0]->ID );
                  do_action( 'wp_login', $usertoken[0]->user_login, $usertoken[0] );
                  $username = $usertoken[0]->user_login;
				  setcookie( 'cookie_last_activity', time() + 901, time() + 901, COOKIEPATH, COOKIE_DOMAIN );
                  $redirect_to = network_site_url();
                  wp_safe_redirect( $redirect_to );
                  exit();
            endif;
        endif;
		# Send the user to his account or any page if already logged in.
		//
        // current_user_can( 'edit_posts' )
		if (is_user_logged_in() ):
			$url = untrailingslashit( get_template_directory_uri( __FILE__ ) );
			$path = untrailingslashit( get_template_directory( __FILE__ ) );
			$logo = '/assets/img/png/ardosz-logo.png';
			$site_url = network_site_url();
			
			global $pagenow;
			global $post;
		
			$user = wp_get_current_user();
			if($user):
				if ( in_array( 'ardosz_user', (array) $user->roles ) ):
				
				
	
					if ( 'post.php' === $pagenow && isset($_GET['post']) && 'ardosz' === get_post_type( $_GET['post'] ) || isset($post->ID) && 'ardosz' === get_post_type( $post->ID ) ):
						$redirect_url = home_url('courses');
						$pages = json_decode($user->pages, true);
						$check_page_access = wp_filter_object_list(
							$pages, 
							['ID' => $post->ID]
						);
						if(!$check_page_access):
							//wp_redirect($redirect_url);
						else:
							$id = array_search($post->ID, array_column($pages, 'ID'));
		
							if(!($check_page_access[$id]['status'] < 2)):
								wp_redirect($redirect_url);
							endif;
						endif;
					endif;
				else:
					//$redirect_url = home_url('my-account');

					//wp_redirect($redirect_url);
				endif;
			endif;
			
			if ( 'post.php' === $pagenow && isset($_GET['post']) && 'keesz' === get_post_type( $_GET['post'] ) || isset($post->ID) && 'keesz' === get_post_type( $post->ID ) ):
				$logo = '/assets/img/png/logo-keesz.png';
			
			elseif ( 'post.php' === $pagenow && isset($_GET['post']) && 'verzuimweg' === get_post_type( $_GET['post'] ) || isset($post->ID) && 'verzuimweg' === get_post_type( $post->ID ) ):
				$logo = '/assets/img/png/verzuimweg.png';
			elseif ( 'post.php' === $pagenow && isset($_GET['post']) && 'tulpenfonds' === get_post_type( $_GET['post'] ) || isset($post->ID) && 'tulpenfonds' === get_post_type( $post->ID ) ):
				$logo = '/assets/img/svg/tulpenfonds_logo.svg';
			else:
				$logo = '/assets/img/png/ardosz-logo.png';
    		endif;
			?>
				<div id="liveAlertPlaceholder"></div>
				<div class="modal fade" id="shareModal" data-bs-backdrop="static" data-bs-keyboard="false" aria-hidden="false" tabindex="-1" aria-modal="true" role="dialog" aria-labelledby="shareModal">
  					<div class="modal-dialog modal-dialog-centered">
    					<div class="modal-content">
      						<div class="modal-header">
        						<h5 class="modal-title">Pagina delen</h5>
        								<!--<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>-->
      						</div>
      						<div class="modal-body">
								<form action="<?php the_permalink(); ?>" method="post" class="form-floating">
									<div class="form-floating mb-3">
  										<input type="text" class="form-control" placeholder="<?php _e('Company'); ?>" name="company" id="company" value="">
  										<label for="company"><?php _e('Company'); ?></label>
									</div>
									<div class="form-floating mb-3">
  										<input type="text" class="form-control" placeholder="<?php _e('First name'); ?>" name="first-name" id="first-name" value="">
  										<label for="first-name"><?php _e('First name'); ?></label>
									</div>
									<div class="form-floating mb-3">
  										<input type="text" class="form-control" placeholder="<?php _e('Last name'); ?>" name="last-name" id="last-name" value="">
  										<label for="last-name"><?php _e('Last name'); ?></label>
									</div>
									<div class="form-floating mb-3">
  										<input type="text" class="form-control" placeholder="<?php _e('E-mail'); ?>" name="email" id="email">
  										<label for="floatingPassword"><?php _e('E-mail'); ?></label>
									</div>
									<input type="hidden" name="action" value="share-link" />
									<button type="submit" class="btn btn-primary mb-3"><?php _e('Verstuur link'); ?></button>     
								</form>
     						</div>
      								<!--<div class="modal-footer">
        								<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        								<button type="button" class="btn btn-primary">Save changes</button>
      								</div>-->
    					</div>
  					</div>
				</div>
				<nav class="navbar navbar-expand-lg bg-light mt-0">
  					<div class="container-fluid">
						<a class="navbar-brand" href="#">
      						<img src="<?php echo $url.$logo; ?>" width="200" alt="alt_text" alt="ArdoSZ" width="200">
    					</a>
    					<button class="navbar-toggler ms-auto me-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      						<span class="navbar-toggler-icon"></span>
    					</button>
    					<div class="collapse navbar-collapse" id="navbarSupportedContent">
      						<ul class="navbar-nav me-auto mb-2 mb-lg-0">
        						<!--<li class="nav-item">
          							<a class="nav-link active" aria-current="page" href="<?php echo $site_url; ?>">
										Home
									</a>
        						</li>-->
        						<li class="nav-item">
          							<a class="nav-link" href="/courses">
										Trainingen
									</a>
        						</li>
        						<!--<li class="nav-item dropdown">
          							<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            							Trainingen
          							</a>
          							<ul class="dropdown-menu">
            							<li>
											<a class="dropdown-item" href="#">
												Action
											</a>
										</li>
            							<li>
											<a class="dropdown-item" href="#">
												Another action
											</a>
										</li>
            							<li>
											<hr class="dropdown-divider">
										</li>
            							<li>
											<a class="dropdown-item" href="#">
												Something else here
											</a>
										</li>
          							</ul>
        						</li>-->
        						<li class="nav-item">
          							<a class="nav-link" href="/my-account">Mijn account</a>
        						</li>
      						</ul>
      						<!--<form class="d-flex" role="search">
        						<input class="form-control me-2" type="search" placeholder="Zoeken" aria-label="Search">
        						<button class="btn btn-outline-primary" type="submit">
									Zoeken
								</button>
      						</form>-->
    					</div>
						<a href="#" id="log-out" class="small" >
							<i class="fa-solid ms-2 me-0 fa-arrow-right-from-bracket"></i>
							<span>Log uit</span>
						</a>
						<?php
							if(current_user_can( 'edit_posts' ) && 
							   'post.php' === $pagenow && 
							   isset($_GET['post']) && 
							   'ardosz' === get_post_type( $_GET['post'] ) || 
							   current_user_can( 'edit_posts' ) && 
							   isset($post->ID) && 
							   'ardosz' === get_post_type( $post->ID ) 
							):
						?>
								<a href="#" id="share-page" class="small" data-bs-toggle="modal" data-bs-target="#shareModal">
									<i class="fa-solid ms-2 me-0 fa-share-nodes"></i>
									<span>Pagina delen</span>
								</a>
						<?php
							endif;
						?>
  					</div>
				</nav>
			<?php
    		//wp_redirect( home_url('/account/') );
			//wp_redirect(home_url());
		elseif ( !current_user_can( 'edit_posts' ) ):
    		//wp_redirect( home_url('/account/') );

			# Get login error messages.
			$login_errors = (isset($_GET['user-login']) ) ? $_GET['user-login'] : 0;     
    		//$username = isset($_POST['user-name']) ? wp_specialchars( $_POST['user-name'], 1 ) : '';
            if ( isset($_GET['token']) ):
				$user = get_users(
					array(
						 'meta_key' => 'token',
						 'meta_value' => ''.$_GET['token'].'',
						 'number' => 1
					)
			  	);
			  	if ( !(is_wp_error( $user ) )):
				  	wp_clear_auth_cookie();
				  
				  	//print_r($user);
				  	//print_r($user[0]->ID);
				  	//print_r($user[0]->user_login);
				  	//wp_set_current_user ( $user->ID );
				  	//wp_signon( array( 'user_login' => $user[0]->user_login ) );
				  	wp_set_current_user( $user[0]->ID, $user[0]->user_login );
				  	wp_set_auth_cookie  ( $user[0]->ID );
				  	do_action( 'wp_login', $user[0]->user_login, $user[0] );
					setcookie( 'cookie_last_activity', time() + 901, time() + 901, COOKIEPATH, COOKIE_DOMAIN );
				  	$redirect_to = network_site_url();
				  	wp_safe_redirect( $redirect_to );
				  	exit();
                endif;
			elseif ( isset($_POST['action']) ):
				if (  $_POST['action'] == 'log-in' ):
    
    				# Submit the user login inputs
                    wp_clear_auth_cookie();
                    //'remember' => $_POST['rememberme']
    				$login = wp_login( $_POST['user-name'], $_POST['password'] );
    				$login = wp_signon( array( 'user_login' => $_POST['user-name'], 'user_password' => $_POST['password'] ), '' );
					
					$errors = '';
		
					if ( is_wp_error($login) ): 
						$errors = $login->get_error_message();  
					endif;
        
    				# Redirect to account page after successful login.home_url('account')
					$admin = current_user_can('manage_options'); 
					
					if($login->ID):
						wp_clear_auth_cookie();
        				wp_set_current_user( $login->ID); // Set the current user detail
        				wp_set_auth_cookie( $login->ID, '', '', ''); // Set auth details in cookie
						setcookie( 'cookie_last_activity', time() + 901, time() + 901, COOKIEPATH, COOKIE_DOMAIN );
					endif;
		
    				if (!$admin && $login->ID ): 
						wp_redirect(home_url());
    				elseif ($admin && $login->ID ): 
						//wp_set_auth_cookie( $login->ID, $_POST['rememberme'], '', '' );
						//wp_redirect(home_url());
        			else:
					?>
						<div class="modal fade" id="loginModal" data-bs-backdrop="static" data-bs-keyboard="false" aria-hidden="false" tabindex="-1" aria-modal="true" role="dialog" aria-labelledby="loginModal">
  							<div class="modal-dialog modal-dialog-centered">
    							<div class="modal-content">
      								<div class="modal-header">
        								<h5 class="modal-title">Login 1</h5>
                                        <?php echo 'User ID: ' . get_current_user_id(); ?>
                                        <?php echo 'User is loggedin? '.is_user_logged_in(); ?>
        								<!--<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>-->
      								</div>
      								<div class="modal-body">
										<p><?php //echo $login_errors; ?></p>
        								<?php
        									# Output header error messages.
        									if ( $login_errors === "failed" ):
										?>
            									<p class="input-error">Invalid username and / or password.</p>
										<?php
        									elseif ( $login_errors === "empty" ): 
										?>
            									<p class="input-error">Username and/or Password is empty.</p>
										<?php 
        									elseif ( $login_errors === "false" ): 
										?>
            									<p class="input-error">You are now logged out.</p>
										<?php 
        									endif;
    									?>
										<form action="<?php the_permalink(); ?>" method="post" class="form-floating">
											<div class="form-floating mb-3">
  												<input type="text" class="form-control" placeholder="<?php _e('Username'); ?>" name="user-name" id="user-name" value="<?php echo $username; ?>">
  												<label for="user-name"><?php _e('Username'); ?></label>
											</div>
											<div class="form-floating mb-3">
  												<input type="password" class="form-control" placeholder="<?php _e('Password'); ?>" name="password" id="password">
  												<label for="floatingPassword"><?php _e('Password'); ?></label>
											</div>
											<div class="form-check form-switch">
  												<input class="form-check-input" type="checkbox" role="switch" id="rememberme" name="rememberme" value="forever">
  												<label class="form-check-label" for="remember-me">Onthoud mij</label>
											</div>
											<input type="hidden" name="action" value="log-in" />
											<a href="<?php echo home_url('lostpassword') ?>" class="btn btn-primary mb-3"><?php _e('Wachtwoord vergeten'); ?></a> 
											<button type="submit" class="btn btn-primary mb-3"><?php _e('Log in'); ?></button>     
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
                if ( isset($_GET['token']) ):
					$user = get_users(
						array(
							 'meta_key' => 'token',
							 'meta_value' => ''.$_GET['token'].'',
							 'number' => 1
						)
					);
					if ( !(is_wp_error( $user ) )):
						wp_clear_auth_cookie();
					  
						//print_r($user);
						//print_r($user[0]->ID);
						//print_r($user[0]->user_login);
						//wp_set_current_user ( $user->ID );
						//wp_signon( array( 'user_login' => $user[0]->user_login ) );
						wp_set_current_user( $user[0]->ID, $user[0]->user_login );
						wp_set_auth_cookie  ( $user[0]->ID );
						do_action( 'wp_login', $user[0]->user_login, $user[0] );
						setcookie( 'cookie_last_activity', time() + 901, time() + 901, COOKIEPATH, COOKIE_DOMAIN );
						$redirect_to = network_site_url();
						wp_safe_redirect( $redirect_to );
						exit();
                    endif;
                endif;
			?>
				<div class="modal fade" id="loginModal" data-bs-backdrop="static" data-bs-keyboard="false" aria-hidden="false" tabindex="-1" aria-modal="true" role="dialog" aria-labelledby="loginModal">
  					<div class="modal-dialog modal-dialog-centered">
    					<div class="modal-content">
      						<div class="modal-header">
        						<h5 class="modal-title">Login 2</h5>
                                <?php echo 'User ID: ' . get_current_user_id(); ?>
                                <?php echo 'User is loggedin? '.is_user_logged_in(); ?>
        						<!--<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>-->
      						</div>
      						<div class="modal-body">
								<p><?php //echo $login_errors; ?></p>
        						<?php
        							# Output header error messages.
        							if ( $login_errors === "failed" ):
								?>
            						<p class="input-error">Invalid username and / or password.</p>
								<?php
        							elseif ( $login_errors === "empty" ): 
								?>
            						<p class="input-error">Username and/or Password is empty.</p>
								<?php 
        							elseif ( $login_errors === "false" ): 
								?>
            						<p class="input-error">You are now logged out.</p>
								<?php 
        							endif;
    							?>
								<form action="<?php the_permalink(); ?>" method="post" class="form-floating">
									<div class="form-floating mb-3">
  										<input type="text" class="form-control" placeholder="<?php _e('Username'); ?>" name="user-name" id="user-name" value="<?php echo $username; ?>">
  										<label for="user-name"><?php _e('Username'); ?></label>
									</div>
									<div class="form-floating mb-3">
  										<input type="password" class="form-control" placeholder="<?php _e('Password'); ?>" name="password" id="password">
  										<label for="floatingPassword"><?php _e('Password'); ?></label>
									</div>
									<div class="form-check form-switch">
  										<input class="form-check-input" type="checkbox" role="switch" id="rememberme" name="rememberme" value="forever">
  										<label class="form-check-label" for="remember-me">Onthoud mij</label>
									</div>
									<input type="hidden" name="action" value="log-in" />
									<a href="<?php echo home_url('lostpassword') ?>" class="btn btn-secondary mb-3"><?php _e('Wachtwoord vergeten'); ?></a> 
									<button type="submit" class="btn btn-primary mb-3"><?php _e('Log in'); ?></button>   
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
		$output = ob_get_contents();
		ob_clean();
		ob_flush();
		return $output;
	}
?>