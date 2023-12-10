<?php
	// Exit if accessed directly.
	defined( 'ABSPATH' ) || exit;
	function trainingen_admin(){
			global $trainingdata;
		
			if ( ! class_exists('Events_List_Table')) :
    			require_once(ABSPATH . 'wp-admin/includes/class-wp-list-table.php');
			endif;
		
			class Events_List_Table extends WP_List_Table{
    			function __construct(){
        		
					global $status, $page;

        			parent::__construct(array(
            			'singular'  => 'trainingen-admin',
            			'plural'    => 'trainingen-admin',
            			'ajax'      => true
        			));
				}

    			function column_default($item, $column_name){
        			switch($column_name):
            			case 'name':
            			case 'username':
            			case 'email':
            			case 'training':
            			case 'start_date':
            			case 'end_date':
            			case 'status':
            			case 'emotion':
            			case 'description':
                	
						return ucfirst($item[$column_name]);
            			default:
                		
						return print_r($item,true);
					endswitch;
				}
				
				function column_name($item){
					$query_args_edit = array(
						'page'		=>  wp_unslash( $_REQUEST['page'] ),
						'action'	=> 'edit',
						'pageid'	=> $item['pageid'],
						'userid'	=> $item['userid'],
						'_wpnonce'	=> wp_create_nonce( 'edit_nonce' ),
					);
					
					$query_args_view = array(
						'page'		=>  wp_unslash( $_REQUEST['page'] ),
						'action'	=> 'view',
						'pageid'	=> $item['pageid'],
						'userid'	=> $item['userid'],
						'_wpnonce'	=> wp_create_nonce( 'view_nonce' ),
					);
					
					$query_args_delete = array(
						'page'		=>  wp_unslash( $_REQUEST['page'] ),
						'action'	=> 'delete',
						'pageid'	=> $item['pageid'],
						'userid'	=> $item['userid'],
						'_wpnonce'	=> wp_create_nonce( 'delete_nonce' ),
					);
					
					$query_args_status = array(
						'page'		=>  wp_unslash( $_REQUEST['page'] ),
						'action'	=> 'status',
						'pageid'	=> $item['pageid'],
						'userid'	=> $item['userid'],
						'_wpnonce'	=> wp_create_nonce( 'status_nonce' ),
					);
					
					$admin_page_url =  menu_page_url('trainingen-admin', false);
					
					$edit_link = esc_url( add_query_arg( $query_args_edit, $admin_page_url ) );
					$view_link = get_permalink( $item['pageid'], false );
					$delete_link = esc_url( add_query_arg( $query_args_delete, $admin_page_url ) );
					$tatus_link = esc_url( add_query_arg( $query_args_status, $admin_page_url ) );	
					
					//$actions['view_usermeta'] = '<a href="' . $view_usermeta_link . '">' . __( 'View Meta', $this->plugin_text_domain ) . '</a>';
        			
					$actions = array(
						'edit' => '<a href="'.$edit_link.'" class="event-edit-btn"><i class="dashicons dashicons-edit"></i></a>',
            			'view' => '<a href="'.$view_link.'" class="event-edit-btn"><i class="dashicons dashicons-visibility"></i></a>',
            			'trash' => '<a href="'.$delete_link.'" class="event-edit-btn"><i class="dashicons dashicons-trash"></i></a>',
					);
					
					return sprintf(
            			'%1$s %3$s',
            			$item['name'],
            			$item['pageid'],
            			$this->row_actions($actions)
        			);
				}
				
				function column_username($item){
        			return $item['username'];
    			}
				function column_email($item){
        			return $item['email'];
    			}
				function column_start_date($item){
        			return $item['start_date'];
    			}
				
				function column_end_date($item){
        			return $item['end_date'];
    			}
				
				function column_status($item){
					switch ($item['status']):
    					case '0':
        					return 'Niet afgerond';
        					break;
    					case '1':
        					return 'Video bekeken';
        					break;
    					case '2':
							return 'Afgerond';
        					break;
    					default:
       						return 'Niet afgerond';
					endswitch;
    			}
				
				function column_emotion($item){
					switch ($item['emotion']):
    					case '0':
        					return '<i class="fa-regular fa-face-frown"></i>';
        					break;
    					case '1':
        					return '<i class="fa-regular fa-face-meh"></i>';
        					break;
    					case '2':
							return '<i class="fa-regular fa-face-smile"></i>';
        				break;
        					break;
    					case '3':
							return '<i class="fa-regular fa-face-laugh"></i>';
        					break;
    					default:
       						return '';
					endswitch;
    			}
				
				function column_description($item){
					switch ($item['description']):
    					case '':
        					return '';
        					break;
    					case !'':
        					return '<a href="#" data-user-id="'.$item['userid'].'" data-page-id="'.$item['pageid'].'" class="comment-training dashicons dashicons-admin-comments"></a>';
        					break;
    					default:
       						return '';
					endswitch;
    			}

    			function column_cb($item){
        			return sprintf(
            			'<input type="checkbox" name="%1$s[]" value="%2$s" data-page-id="%3$s" />',
            			$this->_args['singular'],
            			$item['userid'],
            			$item['pageid']
        			);
    			}
				
				function get_columns(){
        			$columns = array(
            			'cb' => '<input type="checkbox">',
            			'name' => 'Training',
            			'username' => 'Gebruiker',
            			'email' => 'E-mail',
						'start_date' => 'Start datum',
						'end_date' => 'Eind datum',
						'status' => 'Status',
						'emotion' => 'Waardering',
						'description' => 'Opmerkingen'
        			);

        			return $columns;
				}
			
				function get_sortable_columns(){
        			$sortable_columns = array(
            			'name' => array('name', false),
            			'username' => array('username', false),
            			'email' => array('email', false),
						'start_date' => array('start_date', false),
						'end_date' => array('end_date', false),
						'status' => array('status', false),
						'emotion' => array('emotion', false),
						'description' => array('description', false)
        			);

        			return $sortable_columns;
    			}
				
				function get_bulk_actions(){
        			$actions = array(
            			'bulk-delete'    => 'Verwijderen',
        			);

        			return $actions;
    			}
				
				function training_delete($token){
					global $wpdb;
					
					/*$dbdelete = $wpdb->query(
						$wpdb->prepare(
							"DELETE FROM 
							`".$wpdb->prefix."prizes` 
							WHERE id = '%s'", 
							$token
						)
					);
						
					if($dbdelete):
						
						$admin_page_url =  menu_page_url('trainingen-admin', false);
					
						wp_safe_redirect( 
							$admin_page_url
						);
					endif;*/
				}
				
				function process_bulk_action(){
					global $wpdb;
					
					$the_table_action = $this->current_action();

					if ( 'edit' === $the_table_action ) {
						$nonce = wp_unslash( $_REQUEST['_wpnonce'] );
						// verify the nonce.
						if ( ! wp_verify_nonce( $nonce, 'edit_nonce' ) ) {
							$this->invalid_nonce_redirect();
						}
						else {                    
							//$this->page_club_edit( absint( $_REQUEST['clubtoken']) );
							$this->graceful_exit();
						}
					}
					elseif ( 'view' === $the_table_action ) {
						$nonce = wp_unslash( $_REQUEST['_wpnonce'] );
						// verify the nonce.
						if ( ! wp_verify_nonce( $nonce, 'view_nonce' ) ) {
							$this->invalid_nonce_redirect();
						}
						else {                    
							//$this->page_club_view( absint( $_REQUEST['clubtoken']) );
							$this->graceful_exit();
						}
					}
					elseif ( 'status' === $the_table_action ) {
						$nonce = wp_unslash( $_REQUEST['_wpnonce'] );
						// verify the nonce.
						if ( ! wp_verify_nonce( $nonce, 'status_nonce' ) ) {
							$this->invalid_nonce_redirect();
						}
						else {                 
							//$this->page_club_status( $_REQUEST['clubtoken'] );
							$this->graceful_exit();
						}
					}
					elseif ( 'delete' === $the_table_action ) {
						$nonce = wp_unslash( $_REQUEST['_wpnonce'] );
						// verify the nonce.
						if ( ! wp_verify_nonce( $nonce, 'delete_nonce' ) ) {
							$this->invalid_nonce_redirect();
						}
						else {                 
							$this->training_delete( $_REQUEST['id'] );
							$this->graceful_exit();
						}
					}
					
					elseif ( ( isset( $_REQUEST['action'] ) && $_REQUEST['action'] === 'bulk-delete' ) || (isset( $_REQUEST['action2'] ) && $_REQUEST['action2'] === 'bulk-delete' ) ) {
						//$nonce = wp_unslash( $_REQUEST['_wpnonce'] );	
						$delete_ids = esc_sql( $_POST[''.$this->_args['singular'].''] );
						
        				// loop over the array of record IDs and delete them
        				foreach ( $delete_ids as $id ):
							/*$dbdelete = $wpdb->query(
								$wpdb->prepare(
									"DELETE FROM 
									`".$wpdb->prefix."prizes` 
									WHERE id = '%s'", 
									$id
								)
							);
						
							if($dbdelete):
							else:
							endif;*/
        				endforeach;
						
						$admin_page_url =  menu_page_url('trainingen-admin', false);
					
						wp_safe_redirect( 
							$admin_page_url
						);
						/*if ( ! wp_verify_nonce( $nonce, 'bulk-users' ) ) {
							//$this->invalid_nonce_redirect();
						}
						else {
							//include_once( 'views/partials-wp-list-table-demo-bulk-download.php' );
							//$this->graceful_exit();
						}*/
					}
				}

   				function custom_bulk_admin_notices(){
        			echo 'Hello.';
    			}
				
				function prepare_items(){
					$user_search_key = isset( $_REQUEST['s'] ) ? wp_unslash( trim( $_REQUEST['s'] ) ) : '';
	
					
					// filter the data in case of a search
					if( $user_search_key ) {
						$columns = $this->get_columns();
        				$hidden = array();
        				$sortable = $this->get_sortable_columns();
						
						$this->_column_headers = array($columns, $hidden, $sortable);
	
						// check and process any actions such as bulk actions.
						$this->process_bulk_action();

						// fetch the table data
						$table_data = $this->fetch_table_data();
						
						$table_data = $this->filter_table_data( $table_data, $user_search_key );
						
						$total_items = count($table_data);
					
						// get the current user ID
						$user = get_current_user_id();
						// get the current admin screen
						$screen = get_current_screen();
						// retrieve the "per_page" option
						$screen_option = $screen->get_option('per_page', 'option');
						// retrieve the value of the option stored for the current user
						$per_page = get_user_meta($user, $screen_option, true);
						
						if ( empty ( $per_page) || $per_page < 1 ):
							// get the default value if none is set
							$per_page = $screen->get_option( 'per_page', 'default' );
						endif;
						
						$per_page = $per_page <= count($table_data) ? $per_page : count($table_data);
						$paged = isset($_REQUEST['paged']) ? max(0, intval($_REQUEST['paged']) - 1) : 0;
						
						$table_data = array_slice($table_data, ($paged*$per_page), $per_page);  // returns "d"
						$this->items = $table_data;
						
						$this->set_pagination_args(
							array(
            					'total_items'   => $total_items,
            					'per_page'      => $per_page,
            					'total_pages'   => $total_items != 0 ? ceil($total_items / $per_page) : 0,
							)
						);
					}
					else{
					
        			global $wpdb;
						
        			
        			$columns = $this->get_columns();
        			$hidden = array();
        			$sortable = $this->get_sortable_columns();
	
        			$this->_column_headers = array($columns, $hidden, $sortable);

        			$this->process_bulk_action();
					//$per_page = 25;
					// get the current user ID
					$user = get_current_user_id();
					// get the current admin screen
					$screen = get_current_screen();
					// retrieve the "per_page" option
					$screen_option = $screen->get_option('per_page', 'option');
					// retrieve the value of the option stored for the current user
					$per_page = get_user_meta($user, $screen_option, true);
						
					if ( empty ( $per_page) || $per_page < 1 ):
						// get the default value if none is set
						$per_page = $screen->get_option( 'per_page', 'default' );
					endif;
					//$total_items = $wpdb->get_var("SELECT COUNT(id) FROM `".$wpdb->prefix."prizes`");
        			$paged = isset($_REQUEST['paged']) ? max(0, intval($_REQUEST['paged']) - 1) : 0;
        			$orderby = (isset($_REQUEST['orderby']) && in_array($_REQUEST['orderby'], array_keys($this->get_sortable_columns()))) ? $_REQUEST['orderby'] : 'username';
        			$order = (isset($_REQUEST['order']) && in_array($_REQUEST['order'], array('asc', 'desc'))) ? $_REQUEST['order'] : 'asc';

        			//$this->items = $wpdb->get_results($wpdb->prepare("SELECT * FROM $table_name ORDER BY $orderby $order LIMIT %d OFFSET %d", $per_page, $paged), ARRAY_A);
					$user_query = new WP_User_Query( 
						array( 
							'role' => ['ardosz_user'] 
						) 
					);
					$role_results = $user_query->get_results();
					if(!empty($role_results)):
						$data = array();
						foreach($role_results as $userdata):
							$pages = json_decode($userdata->pages, true);
							foreach($pages as $page):
							array_push(
								$data,
								array(
									'pageid' => $page['ID'],
									'userid' => $userdata->ID,
									'name' => get_the_title( $page['ID'] ),
									'username' => $userdata->first_name.' '.$userdata->last_name,
									'email' => $userdata->user_email,
									'sharer' => $page['sharer'],
									'start_date' => $page['start_date'],
									'end_date' => $page['end_date'],
									'status' => $page['status'],
									'results' => $page['results'],
									'emotion' => $page['feedback']['emotion'],
									'description' => $page['feedback']['description']
								)			  
							);
							//$pages = json_decode($userdata['pages'], true);
							endforeach;
						endforeach;
					endif;
					
					$data = wp_list_sort( $data, $orderby, $order );
						
					$per_page = $per_page <= count($data) ? $per_page : count($data);
						
					$this->items = array_slice($data,($paged*$per_page), $per_page);
						
        			$this->set_pagination_args(
						array(
            				'total_items'   => count($data),
            				'per_page'      => $per_page,
            				'total_pages'   => ceil(count($data) / $per_page),
						)
					);
					}
				}
				
				function fetch_table_data() {
      				global $wpdb;
						
        			//$orderby = (isset($_REQUEST['orderby']) && in_array($_REQUEST['orderby'], array_keys($this->get_sortable_columns()))) ? $_REQUEST['orderby'] : 'start_deg';
        			//$order = (isset($_REQUEST['order']) && in_array($_REQUEST['order'], array('asc', 'desc'))) ? $_REQUEST['order'] : 'asc';
					
					$user_query = new WP_User_Query( 
						array( 
							'role' => ['ardosz_user']
						) 
					);
					
					$role_results = $user_query->get_results();
					
					if(!empty($role_results)):
						$data = array();
						foreach($role_results as $userdata):
							$pages = json_decode($userdata->pages, true);
							foreach($pages as $page):
							array_push(
								$data,
								array(
									'pageid' => $page['ID'],
									'userid' => $userdata->ID,
									'name' => get_the_title( $page['ID'] ),
									'username' => $userdata->first_name.' '.$userdata->last_name,
									'email' => $userdata->user_email,
									'sharer' => $page['sharer'],
									'start_date' => $page['start_date'],
									'end_date' => $page['end_date'],
									'status' => $page['status'],
									'results' => $page['results'],
									'emotion' => $page['feedback']['emotion'],
									'description' => $page['feedback']['description']
								)			  
							);
					
							//$pages = json_decode($userdata['pages'], true);
							endforeach;
						endforeach;
					endif;
						
					//ARRAY_A
					$query_results = $data;
					//print_r($query_results);
      
      				// return result array to prepare_items.
      				return $query_results;		
    			}
				
				function filter_table_data( $table_data, $search_key ) {
					
					$filtered_table_data = array_values(
						array_filter(
							$table_data, function( $row ) use( $search_key ) {
								foreach( $row as $row_val ) {
									if( stripos( json_encode($row_val), $search_key ) !== false ) {
										return true;
									}				
								}	
							}
						)
					);
					
					return $filtered_table_data;
				}
			}
			
			$example_lt = new Events_List_Table();
			
			
			$query_args_add = array(
				'page'		=>  wp_unslash( $_REQUEST['page'] ),
				'action'	=> 'new',
				'_wpnonce'	=> wp_create_nonce( 'add_nonce' ),
			);		
		
			$admin_page_url =  menu_page_url('trainingen-admin', false);
			
			$add_link = esc_url( add_query_arg( $query_args_add, $admin_page_url ));
				
				add_thickbox();
    	?>
			<div id="wkwp-modal" style="display:none;">
     			<p></p>
			</div>
			<div class="wrap">    
    			<h1 class="wp-heading-inline">Trainingen</h1>
				<a href="<?php echo $add_link; ?>" id="new-trainingen" class="page-title-action">Training toevoegen</a>
        		<div id="nds-wp-list-table-demo">			
            		<div id="nds-post-body">
						<?php 
							//wp_dashboard();
						?>
						<div id="dashboard-widgets-wrap">
							<div id="dashboard-widgets" class="metabox-holder">
								<div id="postbox-container-1" class="postbox-container">
									<?php 
											do_action( 'add_meta_boxes', 'trainingen_pie_chart_meta_box', array());
											do_meta_boxes( 'trainingen-admin', 'completed-chart', array() ); 
											do_meta_boxes( 'trainingen-admin', 'pie-chart', array() ); 
									?>
								</div>
								<div id="postbox-container-2" class="postbox-container">
									<?php 
											//do_action( 'add_meta_boxes', 'trainingen_column_chart_meta_box', '');
											do_meta_boxes( 'trainingen-admin', 'watched-chart', array() ); 
											do_meta_boxes( 'trainingen-admin', 'waardering-chart', array() ); 
											//do_meta_boxes( 'trainingen-admin', 'column-chart', array() ); 
									?>
								</div>
								<div id="postbox-container-3" class="postbox-container">	
									<?php 
											//do_action( 'add_meta_boxes', 'trainingen_column_chart_meta_box', '');
											do_meta_boxes( 'trainingen-admin', 'waiting-chart', array() ); 
											//do_meta_boxes( 'trainingen-admin', 'column-chart', array() ); 
									?>
								</div>
								<div id="postbox-container-4" class="postbox-container">	
								</div>
							</div>
						</div>
						<form id="search" method="get">	
							<input type="hidden" name="page" value="<?php echo $_REQUEST['page'] ?>" />
							<?php
								if( isset($_GET['s']) ){
            						$example_lt->prepare_items($_GET['s']);
									$example_lt->search_box( __( 'Zoek', '' ), 'nds-user-find');
        						}
								else {
            						$example_lt->prepare_items();
									$example_lt->search_box( __( 'Zoek', '' ), 'nds-user-find');
        						}
							?>					
						</form>
						<form id="trainingen-user-list" method="post">	
							<input type="hidden" name="page" value="<?php echo $_REQUEST['page'] ?>" />
							<?php
								$example_lt->display();
							?>				
						</form>
            		</div>			
        		</div>
			</div>
		<?php
	}
?>