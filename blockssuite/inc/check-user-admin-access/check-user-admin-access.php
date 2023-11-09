<?php
	if ( is_admin() ):
		$user = wp_get_current_user();
		
		print_r($user);

		if ( in_array( 'ardosz_user', (array) $user->roles ) ):
    		$redirect_url = home_url('my-account');

			wp_redirect($redirect_url);
		endif;
	else:
		echo 'USER';
		$user = wp_get_current_user();
		print_r($user);
		if($user):
			if ( in_array( 'ardosz_user', (array) $user->roles ) ):
				
				global $pagenow;
				global $post;

				if ( 'post.php' === $pagenow && isset($_GET['post']) && 'ardosz' === get_post_type( $_GET['post'] ) || isset($post->ID) && 'ardosz' === get_post_type( $post->ID ) ):
					$redirect_url = home_url('courses');
					$pages = json_decode($user_check->pages, true);
					$check_page_access = wp_filter_object_list(
						$pages, 
						['ID' => $post->ID]
					);
					if(!$check_page_access):
						wp_redirect($redirect_url);
					else:
						if(!($check_page_access['status'] < 2)):
							wp_redirect($redirect_url);
						endif;
					endif;
				endif;
			else:
				//$redirect_url = home_url('my-account');

				//wp_redirect($redirect_url);
			endif;
		endif;
	endif;
?>