class Border {
	constructor(props) {
		
		const { attributes, setAttributes, clientId } = props;
	  
	  	this.borderstartxs = attributes.borderstartxs ? ' border-start' : ''
        this.bordertopxs = attributes.bordertopxs ? ' border-top' : ''
        this.borderendxs = attributes.borderendxs ? ' border-end' : ''
        this.borderbottomxs = attributes.borderbottomxs ? ' border-bottom' : ''
		this.bordercolor = attributes.bordercolor ? ' border-'+attributes.bordercolor+'' : ''
        this.border = attributes.borderstartxs & attributes.bordertopxs & attributes.borderendxs & attributes.borderbottomxs ? ' border' : ''+this.borderstartxs+''+this.bordertopxs+''+this.borderendxs+''+this.borderbottomxs+''
  	}
	
	classes() {
		return this.border+''+this.bordercolor
  	}

}

export { Border };