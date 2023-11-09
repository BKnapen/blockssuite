<?php
	# Send the user to his account or any page if already logged in.
	if ( is_user_logged_in() ):
    	//wp_redirect( home_url('/account/') );
	endif;

	# Get login error messages.
	$login_errors = (isset($_GET['user-login']) ) ? $_GET['user-login'] : 0;     
    
	if ( $_POST['action'] == 'log-in' ):
    
    	# Submit the user login inputs
    	$login = wp_login( $_POST['user-name'], $_POST['password'] );
    	$login = wp_signon( array( 'user_login' => $_POST['user-name'], 'user_password' => $_POST['password'], 'remember' => $_POST['remember-me'] ), false );
        
    	# Redirect to account page after successful login.
    	if ( $login->ID ): 
        	//wp_redirect( home_url('account') );      
    	endif;
    endif;
?>
	<div id="content" role="main" class = "user-login" >    
    	<h2 class="page-title"><?php the_title(); ?></h2>
    <?php 
		if ( have_posts() ):
			while ( have_posts() ) : the_post(); 
	?>

    		<?php
        		# Output header error messages.
        		if ( $login_errors === "failed" ):
            		echo '<p class="input-error">Invalid username and / or password.</p>';  
        		elseif ( $login_errors === "empty" ): 
            		echo '<p class="input-error">Username and/or Password is empty.</p>';  
        		elseif ( $login_errors === "false" ): 
            		echo '<p class="input-error">You are now logged out.</p>';  
        		endif;
    		?>
        
				<form action="<?php the_permalink(); ?>" method="post" class="sign-in">
    				<p>
        				<label for="user-name"><?php _e('Username'); ?></label><br />
        				<input type="text" name="user-name" id="user-name" value="<?php echo wp_specialchars( $_POST['user-name'], 1 ); ?>" />
    				</p>
    				<p>
        				<label for="password"><?php _e('Password'); ?></label><br />
        				<input type="password" name="password" id="password" />
    				</p>
    				<p>
        				<input type="submit" name="submit" value="<?php _e('Log in'); ?>" id = "yellow-button" />
        				<input type="hidden" name="action" value="log-in" />
    				</p>    
				</form>
    
    <?php 
			endwhile; 
		endif; 
	?>
    
	</div>