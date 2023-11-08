import { Colors } from '../colors';

class Backgroundcolor {
	constructor(props) {
		
		const { attributes, setAttributes, clientId } = props;
		this.attributes = attributes;
	  	this.setAttributes = setAttributes;
	  	this.clientId = clientId;
	  	this.bgcolor = attributes.bgcolor ? ' bg-'+attributes.bgcolor : ''

		this.tintshade = attributes.tintshade ? '-'+attributes.tintshade +'' : ''
		
		this.opacity = attributes.opacity ? ' bg-opacity-'+attributes.opacity +'' : ''

		this.colors = new Colors()
  	}
	
	classes() {
		return ''+this.bgcolor+''+this.tintshade+''+this.opacity+''
  	}

}

export { Backgroundcolor };