class BSHeight {
	constructor(props) {
		
		const { attributes, setAttributes, clientId } = props;
	  
	  	this.bsheight = attributes.bsheight ? ' '+attributes.bsheight+'' : ''	
    }
	
	classes() {
		return this.bsheight
  	}

}

export { BSHeight };