class TextAlign {
	constructor(props) {
		
		const { attributes, setAttributes, clientId } = props;
	  
	  	this.textalignxs = attributes.textalignxs ? ' text-'+attributes.textalignxs : ''
		this.textalignsm = attributes.textalignsm ? ' text-sm-'+attributes.textalignsm : ''
		this.textalignmd = attributes.textalignmd ? ' text-md-'+attributes.textalignmd : ''
		this.textalignlg = attributes.textalignlg ? ' text-lg-'+attributes.textalignlg : ''
		this.textalignxl = attributes.textalignxl ? ' text-xl-'+attributes.textalignxl : ''
		this.textalignxxl = attributes.textalignxxl ? ' text-xxl-'+attributes.textalignxxl : ''
  	}
	
	classes() {
		return ''+this.textalignxs+''+this.textalignsm+''+this.textalignmd+''+this.textalignlg+''+this.textalignxl+''+this.textalignxxl+''
  	}

}

export { TextAlign };