<?php
	// Exit if accessed directly.
	defined( 'ABSPATH' ) || exit;

	function sharerTable(){
		global $wpdb;
		$tablename = $wpdb->prefix . 'sharer';
		
		$charsetcollate = $wpdb->get_charset_collate();
		
		if( $wpdb->get_var("SHOW TABLES LIKE '" . $tablename . "'") != $tablename):
			$sql = "CREATE TABLE $tablename (
				id INT(11) NOT NULL AUTO_INCREMENT,
				sharer INT(11) NOT NULL,
				pageid INT(11) NOT NULL,
				pages LONGTEXT NOT NULL,
				first_name VARCHAR(255) NOT NULL,
				last_name VARCHAR(255) NOT NULL,
				email VARCHAR(255) NOT NULL,
				start_date DATETIME NOT NULL,
				end_date DATETIME NOT NULL,
				access_key VARCHAR(255) NOT NULL,
				activation_key VARCHAR(255) NOT NULL,
				token VARCHAR(255) NOT NULL,
				status TINYINT(1) NOT NULL,
				PRIMARY KEY (id)
			) $charsetcollate;";

			require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );
			dbDelta( $sql );
		endif;
	}

	add_action( 'init', 'sharerTable');
?>