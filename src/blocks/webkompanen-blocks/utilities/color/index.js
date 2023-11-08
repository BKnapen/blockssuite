import { Colors } from '../colors';

class Color {
	constructor(props) {
		
		const { attributes, setAttributes, clientId } = props;
	  	this.attributes = attributes;
	  	this.setAttributes = setAttributes;
	  	this.clientId = clientId;
	  	this.color = attributes.color ? ' text-'+attributes.color : ''
		
		this.colors = new Colors()
  	}
	
	classes() {
		return ''+this.color+''
  	}
}

export { Color };