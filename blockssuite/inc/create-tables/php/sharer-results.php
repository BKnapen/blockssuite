<?php
	// Exit if accessed directly.
	defined( 'ABSPATH' ) || exit;

	function sharerResultsTable(){
		global $wpdb;
		$tablename = $wpdb->prefix . 'sharer_results';
		
		$charsetcollate = $wpdb->get_charset_collate();
		
		if( $wpdb->get_var("SHOW TABLES LIKE '" . $tablename . "'") != $tablename):
			$sql = "CREATE TABLE $tablename (
				id INT(11) NOT NULL AUTO_INCREMENT,
				sharerid INT(11) NOT NULL,
				pageid INT(11) NOT NULL,
				results LONGTEXT NOT NULL,
				PRIMARY KEY (id)
			) $charsetcollate;";

			require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );
			dbDelta( $sql );
		endif;
	}

	add_action( 'init', 'sharerResultsTable');
?>