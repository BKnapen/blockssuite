class Col {
	constructor(props) {
		
		const { attributes, setAttributes, clientId } = props;
	  
	  	this.colxs = attributes.colxs ? ' col-'+attributes.colxs : ''
		this.colsm = attributes.colsm ? ' col-sm-'+attributes.colsm : ''
		this.colmd = attributes.colmd ? ' col-md-'+attributes.colmd : ''
		this.collg = attributes.collg ? ' col-lg-'+attributes.collg : ''
		this.colxl = attributes.colxl ? ' col-xl-'+attributes.colxl : ''
		this.colxxl = attributes.colxxl ? ' col-xxl-'+attributes.colxxl : ''
		
	  	this.colxs = attributes.colautoxs ? ' col-auto' : this.colxs
		this.colsm = attributes.colautosm ? ' col-sm-auto' : this.colsm
		this.colmd = attributes.colautomd ? ' col-md-auto' : this.colmd
		this.collg = attributes.colautolg ? ' col-lg-auto' : this.collg
		this.colxl = attributes.colautoxl ? ' col-xl-auto' : this.colxl
		this.colxxl = attributes.colautoxxl ? ' col-xxl-auto' : this.colxxl
		
	  	this.colxscol = attributes.colxscol ? ' col' : ''
		this.colsmcol = attributes.colsmcol ? ' col-sm' : ''
		this.colmdcol = attributes.colmdcol ? ' col-md' : ''
		this.collgcol = attributes.collgcol ? ' col-lg' : ''
		this.colxlcol = attributes.colxlcol ? ' col-xl' : ''
		this.colxxlcol = attributes.colxxlcol ? ' col-xxl' : ''
  	}
	
	classes() {
		return ''+this.colxs+''+this.colsm+''+this.colmd+''+this.collg+''+this.colxl+''+this.colxxl+''+this.colxscol+''+this.colsmcol+''+this.colmdcol+''+this.collgcol+''+this.colxlcol+''+this.colxxlcol+''
  	}

}

export { Col };