class Position {
	constructor(props) {
		
		const { attributes, setAttributes, clientId } = props;
	  
	  	this.position = attributes.position ? ' position-'+attributes.position : ''
	  	this.posxs = attributes.posxs ? ' position-'+attributes.posxs : ''
		this.possm = attributes.possm ? ' position-sm-'+attributes.possm : ''
		this.posmd = attributes.posmd ? ' position-md-'+attributes.posmd : ''
		this.poslg = attributes.poslg ? ' position-lg-'+attributes.poslg : ''
		this.posxl = attributes.posxl ? ' position-xl-'+attributes.posxl : ''
		this.posxxl = attributes.posxxl ? ' position-xxl-'+attributes.posxxl : ''

		switch (attributes.positionalignment) {
			case 'top left':
				this.positionalignment = ' top-0 start-0';
			  break;
			case 'top center':
				this.positionalignment = ' top-0';
			  break;
			case 'top right':
				this.positionalignment = ' top-0 end-0';
			  break;
			case 'center left':
				  this.positionalignment = ' top-50 start-0';
				break;
			case 'center center':
				  this.positionalignment = ' top-50';
				break;
			case 'center right':
				  this.positionalignment = ' top-50 end-0';
				break;
			case 'bottom left':
					this.positionalignment = ' bottom-0 start-0';
				  break;
			case 'bottom center':
					this.positionalignment = ' bottom-0';
				  break;
			case 'bottom right':
					this.positionalignment = ' bottom-0 end-0';
				  break;
			default:
					this.positionalignment = '';
		}

		attributes.positionalignment == 'absolute' || attributes.position == 'fixed' || attributes.position == 'sticky' ? this.positionalignment : ''
  	}
	
	classes() {
		return ''+this.position+''+this.posxs+''+this.possm+''+this.posmd+''+this.poslg+''+this.posxl+''+this.posxxl+''+this.positionalignment+''
  	}

}

export { Position };