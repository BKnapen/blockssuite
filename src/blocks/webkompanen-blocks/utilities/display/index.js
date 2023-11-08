class Display {
	constructor(props) {
		
		const { attributes, setAttributes, clientId } = props;
	  
	  	this.dxs = attributes.dxs ? ' d-'+attributes.dxs : ''
		this.dsm = attributes.dsm ? ' d-sm-'+attributes.dsm : ''
		this.dmd = attributes.dmd ? ' d-md-'+attributes.dmd : ''
		this.dlg = attributes.dlg ? ' d-lg-'+attributes.dlg : ''
		this.dxl = attributes.dxl ? ' d-xl-'+attributes.dxl : ''
		this.dxxl = attributes.dxxl ? ' d-xxl-'+attributes.dxxl : ''
  	}
	
	classes() {
		return ''+this.dxs+''+this.dsm+''+this.dmd+''+this.dlg+''+this.dxl+''+this.dxxl+''
  	}

}

export { Display };