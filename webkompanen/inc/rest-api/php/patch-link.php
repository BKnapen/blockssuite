<?php
	// Exit if accessed directly.
	defined( 'ABSPATH' ) || exit;
//https://developer.wordpress.org/rest-api/using-the-rest-api/authentication/
/*show all errors debug modes*/
error_reporting(E_ALL);
ini_set('display_errors', TRUE);
ini_set('display_startup_errors', TRUE);

if(isset($_SERVER['HTTP_REFERER'])):
	$origin = $_SERVER['HTTP_REFERER'];
	$allowed_domains = [
    	'https://byc.gaatbijnaonline.nl',
	];
else:
endif;

	header('Access-Control-Allow-Origin: https://byc.gaatbijnaonline.nl ');

	function updateclub($req){
		global $wpdb;
		/* %s – string (value is escaped and wrapped in quotes)
		 * %d – integer
		 * %f – float
		 * %% – % sign
	 	*/
	
		$response = new \stdClass();
		$data = new \stdClass();
		//$data = array();
		$response->success = true;
		$response->club = true;
		$response->clubuser = true;
		$response->clubdates = true;
		$response->clubaddress = true;
		$response->clubmailingaddress = true;
		$response->clubbillingsettings = true;
		$response->clubmolliesettings = true;
		$response->clubsocials = true;
		$response->clubtoken = true;
		$response->clubimages = true;
		$response->clubcolors = true;
		
		if(isset($req['clubtoken'])):
			
			$response->status = 201;
			$club = selectclub($req);
			
			if(isset($club->data[0]->clubid)):
				$clubid = $club->data[0]->clubid;
		
				
				$update = dbupdateclub(
					$req['clubname'],
					$clubid
				);
				
				if(!($update)):
					$response->club = false;
				endif;
				
				$updateclubuser = dbupdateclubuser(
					$req['name'],
					$req['surnameprefix'],
					$req['surname'],
					$clubid
				);
				
				if(!($updateclubuser)):
					$response->clubuser = false;
				endif;
		
				$updateclubdates = dbupdateclubdates(
					$req['startdate'],
					$req['enddate'],
					$clubid
				);
				
				if(!($updateclubdates)):
					$response->clubdates = false;
				endif;
		
		
				$updateclubcontactdetails = dbupdateclubcontactdetails(
					$req['phonenumber'],
					$req['emailaddress'],
					$clubid
				);
				
				if(!($updateclubcontactdetails)):
					$response->clubcontactdetails = false;
				endif;
		
				$updateaddress = dbupdateclubaddress(
					$req['streetname'],
					$req['housenumber'],
					$req['zipcode'],
					$req['town'],
					'township',
					$req['province'],
					$req['country'],
					$req['longitude'],
					$req['latitude'],
					$clubid
				);
				
				if(!($updateaddress)):
					$response->clubaddress = false;
				endif;
		
				$updatemailaddress = dbupdateclubmailaddress(
					$req['mailingaddressstreetname'],
					$req['mailingaddresshousenumber'],
					$req['mailingaddresszipcode'],
					$req['mailingaddresstown'],
					'township',
					$req['mailingaddressprovince'],
					$req['mailingaddresscountry'],
					$req['mailingaddresslongitude'],
					$req['mailingaddresslatitude'],
					$clubid
				);
				
				if(!($updatemailaddress)):
					$response->clubmailingaddress = false;
				endif;
		
				$updatebillingsettings = dbupdateclubbillingsettings(
					$req['billingsettingsname'],
					$req['billingsettingsstreetname'],
					$req['billingsettingshousenumber'],
					$req['billingsettingszipcode'],
					$req['billingsettingstown'],
					'township',
					$req['billingsettingsprovince'],
					$req['billingsettingscountry'],
					$req['billingsettingslongitude'],
					$req['billingsettingslatitude'],
					$req['billingsettingsphonenumber'],
					$req['billingsettingsemailaddress'],
					$clubid
				);
				
				if(!($updatebillingsettings)):
					$response->clubbillingsettings = false;
				endif;
		
				$updatemolliesettings = dbupdatemolliesettings(
					$req['mollietestkey'],
					$req['mollielivekey'],
					$req['mollieapikeymodus'],
					$clubid
				);
				
				if(!($updatemolliesettings)):
					$response->clubmolliesettings = false;
				endif;
		
				$updateclubcolors = dbupdateclubcolors(
					$req['clubtitlecolor'],
					$req['clubtargetcolor'],
					$req['clubcollectedcolor'],
					$req['clubdaystogocolor'],
					$req['clubprogressbarcolor'],
					$req['clubprogressbarbgcolor'],
					$req['clubprogressbarpercentagetext'],
					$req['clubdonatecontainerbg'],
					$req['clubexplanationblockbg'],
					$req['clubexplanationtitlecolor'],
					$req['clubhandiconcolor'],
					$req['clubsteponetextcolor'],
					$req['clubformiconcolor'],
					$req['clubsteptwotextcolor'],
					$req['clubbankcardiconcolor'],
					$req['clubstepthreetextcolor'],
					$req['clubhandshakeiconcolor'],
					$req['clubstepfourtextcolor'],
					$req['clubdonateamountblockbg'],
					$req['clubamounttxtcolor'],
					$req['clubamountbgcolor'],
					$req['clubprojectcontainerbg'],
					$req['clubprojecttitlecolor'],
					$req['clubprojectdescriptioncolor'],
					$req['clubdonatornamecolor'],
					$req['clubdonatoramountcolor'],
					$req['clubdonatormessagecolor'],
					$clubid
				);
				
				if(!($updateclubcolors)):
					$response->clubcolors = false;
				endif;
		
				$updateclubimages = dbupdateclubimages(
					$req['logo'],
					$req['headerimage'],
					$req['image'],
					$clubid
				);
				
				if(!($updateclubimages)):
					$response->clubimages = false;
				endif;
		
				$updateclubsocials = dbupdateclubsocials(
					$req['facebookurl'],
					$req['instagramurl'],
					$req['twitterurl'],
					$req['linkedinurl'],
					$clubid
				);
				
				if(!($updateclubsocials)):
					$response->clubsocials = false;
				endif;
		
				/*$clubtoken = hash('sha512', ''.$clubid.$req['clubname'].$req['name'].$req['surnameprefix'].$req['surname'].$req['startdate'].$req['enddate'].$req['phonenumber'].$req['emailaddress'].$req['streetname'].$req['housenumber'].$req['zipcode'].$req['town'].$req['province'].$req['country'].$req['longitude'].$req['latitude'].$req['mailingaddressstreetname'].$req['mailingaddresshousenumber'].$req['mailingaddresszipcode'].$req['mailingaddresstown'].$req['mailingaddressprovince'].$req['mailingaddresscountry'].$req['mailingaddresslongitude'].$req['mailingaddresslatitude'].$req['billingsettingsname'].$req['billingsettingsstreetname'].$req['billingsettingshousenumber'].$req['billingsettingszipcode'].$req['billingsettingstown'].$req['billingsettingsprovince'].$req['billingsettingscountry'].$req['billingsettingslongitude'].$req['billingsettingslatitude'].$req['billingsettingsphonenumber'].$req['billingsettingsemailaddress'].$req['mollietestkey'].$req['mollielivekey'].$req['mollieapikeymodus'].$req['logo'].$req['headerimage'].$req['image'].$req['clubtitlecolor'].$req['clubtargetcolor'].$req['clubcollectedcolor'].$req['clubdaystogocolor'].$req['clubprogressbarcolor'].$req['clubprogressbarbgcolor'].$req['clubprogressbarpercentagetext'].$req['clubdonatecontainerbg'].$req['clubexplanationblockbg'].$req['clubexplanationtitlecolor'].$req['clubhandiconcolor'].$req['clubsteponetextcolor'].$req['clubformiconcolor'].$req['clubsteptwotextcolor'].$req['clubbankcardiconcolor'].$req['clubstepthreetextcolor'].$req['clubhandshakeiconcolor'].$req['clubstepfourtextcolor'].$req['clubdonateamountblockbg'].$req['clubamounttxtcolor'].$req['clubamountbgcolor'].$req['clubprojectcontainerbg'].$req['clubprojecttitlecolor'].$req['clubprojectdescriptioncolor'].$req['clubdonatornamecolor'].$req['clubdonatoramountcolor'].$req['clubdonatormessagecolor'].$req['linkedinurl'].$req['twitterurl'].$req['instagramurl'].$req['facebookurl'].'');
		
				$updateclubtoken = dbupdateclubtoken(
					$clubtoken,
					$clubid
				);
				
				if(!($updateclubtoken)):
					$response->clubtoken = false;
				endif;*/
		
			else:
				$response->club = false;
			endif;
		
			/*$response->logo = $req['logo'];
			$response->headerimage = $req['headerimage'];
			$response->image = $req['image'];
		
			$response->progressbarcolor = $req['progressbarcolor'];
			$response->progressbarbgcolor = $req['progressbarbgcolor'];*/
	
			$response->code = 'rest_route';
			$response->message = 'Route gevonden die overeenkomt met de URL en aanvraag updateclub methode.';
		else:
			$response->status = 404;
			
			$response->code = 'rest_no_route';
			$response->message = 'Geen route gevonden die overeenkomt met de URL en aanvraag updateclub methode.';
		endif;

		return rest_ensure_response($response);
    }
?>