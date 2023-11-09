<?php
	function user_profile_fields($user){
    	if(is_object($user)):
        	$company = esc_attr( get_the_author_meta( 'company', $user->ID ) );
			$pages = json_decode(get_the_author_meta( 'pages', $user->ID ), true);
    	else:
        	$company = null;
        	$pages = null;
		endif;
    ?>
    	<h3>Company information</h3>
    	<table class="form-table">
        	<tr>
            	<th>
					<label for="company">Company Name</label>
				</th>
            	<td>
                	<input type="text" class="regular-text" name="company" value="<?php echo $company; ?>" id="company" /><br />
                	<span class="description">Where are you?</span>
            	</td>
        	</tr>
    	</table>
    	<h3>Trainingen</h3>
    	<table class="form-table">
			<?php
				if($pages):
					foreach($pages as $page):
						$title = get_the_title( $page['ID'] );
						$permalink = get_permalink( $page['ID'], false );
			?>
        				<tr>
            				<th>
								<label for="page"><?php $title; ?></label>
							</th>
            				<td>
                				<input type="text" class="regular-text" name="status" value="<?php echo $page['status']; ?>" id="status" /><br/>
                				<span class="description">Where are you?</span>
            				</td>
        				</tr>
			<?php
					endforeach;
				endif;
			?>
    	</table>
	<?php
	}
	add_action( 'show_user_profile', 'user_profile_fields' );
	add_action( 'edit_user_profile', 'user_profile_fields' );
	add_action( "user_new_form", "user_profile_fields" );
?>