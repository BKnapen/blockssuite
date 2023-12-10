<?php
	function user_profile_fields($user){
    	if(is_object($user)):
        	$company = esc_attr( get_the_author_meta( 'company', $user->ID ) );
			$pages = json_decode(get_the_author_meta( 'pages', $user->ID ), true);
    	else:
        	$company = null;
			$pages = null;
		endif;
		
		add_thickbox();
    ?>
		<div id="wkwp-modal" style="display:none;">
     		<p></p>
		</div>
    	<h3>Company information</h3>
    	<table class="form-table">
        	<tr>
            	<th>
					<label for="company">Company Name</label>
				</th>
            	<td>
                	<input type="text" class="regular-text" name="company" value="<?php echo $company; ?>" id="company" /><br />
                	<span class="description">Name of the company?</span>
            	</td>
        	</tr>
    	</table>
    	<h3>Trainingen</h3>
    	<table class="training-table">
			<tr>
				<td>
					<p>Training</p>
				</td>
				<td>
					<p>Aangeboden door</p>
				</td>
				<td>
					<p>Start datum</p>
				</td>
				<td>
					<p>Eind datum</p>
				</td>
				<td>
					<p>Status</p>
				</td>
				<td>
					<p>Waardering</p>
				</td>
				<td>
					<p>Feedback</p>
				</td>
				<td>
					<p>Verwijderen</p>
				</td>
			</tr>
			<?php
				if($pages):
					foreach($pages as $page):
						$sharer = get_user_by( 
							'id',
							$page['sharer']
						);
						$title = get_the_title( $page['ID'] );
						$permalink = get_permalink( $page['ID'], false );
						$status = isset($page['status']) ? $page['status'] : 0;
						$feedback = $page['feedback'];
						$description = '';
		
						if($feedback['description']):
							$description = json_decode($feedback['description']);
						endif;
			?>
        				<tr>
            				<td>
                				<input type="hidden" class="" name="page_id[]" value="<?php echo $page['ID']; ?>" />
                				<input type="hidden" class="" name="page_results[]" value="<?php echo $page['ID']; ?>" />
                				<span class="description"><?php echo $title; ?></span>
            				</td>
            				<td>
                				<input type="hidden" class="" name="page_sharer[]" value="<?php echo $page['sharer']; ?>" />
								<?php echo $sharer->first_name.' '.$sharer->last_name?>
            				</td>
            				<td>
                				<input type="text" class="" name="page_start_date[]" value="<?php echo $page['start_date']; ?>" />
							</td>
            				<td>
                				<input type="text" class="" name="page_end_date[]" value="<?php echo $page['end_date']; ?>" />
            				</td>
            				<td>
								<select class="" name="page_status[]">
									<option <?php echo $status == 0 ? 'selected' : ''; ?>>0</option>
									<option <?php echo $status == 1 ? 'selected' : ''; ?>>1</option>
									<option <?php echo $status == 2 ? 'selected' : ''; ?>>2</option>
								</select>
            				</td>
            				<td style="text-align: center">
								<input type="hidden" class="" name="page_feedback_emotion[]" value="<?php echo $feedback['emotion']; ?>" />
								<?php 
									if($feedback['emotion']):
										if($feedback['emotion'] == 0):
								?>
											<i class="fa-regular fa-face-frown"></i>
								<?php
										elseif($feedback['emotion'] == 1):
								?>
											<i class="fa-regular fa-face-meh"></i>
								<?php
										elseif($feedback['emotion'] == 2):
								?>
											<i class="fa-regular fa-face-smile"></i>
								<?php
										elseif($feedback['emotion'] == 3):
								?>
											<i class="fa-regular fa-face-laugh"></i>
								<?php
										endif;
									endif;
								?>
            				</td>
            				<td style="text-align: center">
								<input type="hidden" class="" name="page_feedback_description[]" value="<?php echo $description; ?>" />
								<?php 
									if($description):
								?>
									<a href="#" data-user-id="<?php echo $user->ID; ?>" data-page-id="<?php echo $page['ID']; ?>" class="comment-training dashicons dashicons-admin-comments"></a>
								<?php
									endif;
								?>
            				</td>
            				<td style="text-align: center">
								<a href="#" class="remove-training dashicons dashicons-remove"></a>
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