import { Equal } from '../equal';

class Rounded {
	constructor(props) {
		
		const { attributes, setAttributes, clientId } = props;
		
		const equal = new Equal()
	  
	  	this.rounded = (equal.check(attributes.rounded, 'all') === true && attributes.rounded.top !== undefined && attributes.rounded.top !== null) ? ' rounded-'+attributes.rounded.top+'' : ''
		this.roundedcircle = attributes.roundedcircle === true ? ' rounded-circle' : ''
  	}
	
	classes() {
		return ''+this.rounded+''+this.roundedcircle+''
  	}

}

export { Rounded };