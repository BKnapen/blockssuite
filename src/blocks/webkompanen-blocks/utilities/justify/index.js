class Justify {
	constructor(props) {
		
		const { attributes, setAttributes, clientId } = props;
	  
	  	this.justifycontentxs = attributes.justifycontentxs ? ' justify-content-'+attributes.justifycontentxs : ''
		this.justifycontentsm = attributes.justifycontentsm ? ' justify-content-sm-'+attributes.justifycontentsm : ''
		this.justifycontentmd = attributes.justifycontentmd ? ' justify-content-md-'+attributes.justifycontentmd : ''
		this.justifycontentlg = attributes.justifycontentlg ? ' justify-content-lg-'+attributes.justifycontentlg : ''
		this.justifycontentxl = attributes.justifycontentxl ? ' justify-content-xl-'+attributes.justifycontentxl : ''
		this.justifycontentxxl = attributes.justifycontentxxl ? ' justify-content-xxl-'+attributes.justifycontentxxl : ''
  	}
	
	classes() {
		return ''+this.justifycontentxs+''+this.justifycontentsm+''+this.justifycontentmd+''+this.justifycontentlg+''+this.justifycontentxl+''+this.justifycontentxxl+''
  	}

}

export { Justify };