import { Colors } from '../colors';

class Bordercolor {
	constructor(props) {
		
		const { attributes, setAttributes, clientId } = props;
		this.attributes = attributes;
	  	this.setAttributes = setAttributes;
	  	this.clientId = clientId;
	  	this.bordercolor = attributes.bordercolor ? ' border-'+attributes.bordercolor : ''

		this.tintshade = attributes.tintshade ? '-'+attributes.tintshade +'' : ''

		this.colors = new Colors()
  	}
	
	classes() {
		return ''+this.bordercolor+''+this.tintshade+''
  	}

}

export { Bordercolor };