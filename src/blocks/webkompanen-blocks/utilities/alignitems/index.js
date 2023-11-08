class Alignitems {
	constructor(props) {
		
		const { attributes, setAttributes, clientId } = props;
	  
	  	this.alignitemsxs = attributes.alignitemsxs ? ' align-items-'+attributes.alignitemsxs : ''
		this.alignitemssm = attributes.alignitemssm ? ' align-items-sm-'+attributes.alignitemssm : ''
		this.alignitemsmd = attributes.alignitemsmd ? ' align-items-md-'+attributes.alignitemsmd : ''
		this.alignitemslg = attributes.alignitemslg ? ' align-items-lg-'+attributes.alignitemslg : ''
		this.alignitemsxl = attributes.alignitemsxl ? ' align-items-xl-'+attributes.alignitemsxl : ''
		this.alignitemsxxl = attributes.alignitemsxxl ? ' align-items-xxl-'+attributes.alignitemsxxl : ''
  	}
	
	classes() {
		return ''+this.alignitemsxs+''+this.alignitemssm+''+this.alignitemsmd+''+this.alignitemslg+''+this.alignitemsxl+''+this.alignitemsxxl+''
  	}

}

export { Alignitems };