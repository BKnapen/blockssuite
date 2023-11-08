import { Colors } from '../colors';

class Textcolor {
	constructor(props) {
		
		const { attributes, setAttributes, clientId } = props;
	  	this.attributes = attributes;
	  	this.setAttributes = setAttributes;
	  	this.clientId = clientId;
	  	this.textcolor = attributes.textcolor ? ' text-'+attributes.textcolor : ''
		
		this.colors = new Colors()
  	}
	
	classes() {
		return ''+this.textcolor+''
  	}
}

export { Textcolor };