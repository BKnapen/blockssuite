import { Equal } from '../equal';

class Borders {
	constructor(props) {
		const { attributes, setAttributes, clientId } = props;
		
		const equal = new Equal()

		this.bordertopstart = (attributes.borders.top !== undefined && attributes.borders.top !== null) ? ' border-top-start-'+attributes.borders.top+'' : ''
		this.bordertopsend = (attributes.borders.right !== undefined && attributes.borders.right !== null) ? ' border-top-end-'+attributes.borders.right+'' : ''
		this.borderbottomsstart = (attributes.borders.bottom !== undefined && attributes.borders.bottom !== null) ? ' border-bottom-end-'+attributes.borders.bottom+'' : ''
		this.borderbottomsend = (attributes.borders.left !== undefined && attributes.borders.left !== null) ? ' border-bottom-start-'+attributes.borders.left+'' : ''
	}
	classes(){
		return ''+this.bordertopstart+''+this.bordertopsend+''+this.borderbottomsstart+''+this.borderbottomsend+''
	}
}
export { Borders };