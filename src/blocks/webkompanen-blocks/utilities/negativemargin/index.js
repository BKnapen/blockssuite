import { Equal } from '../equal';

class NegativeMargin {
	constructor(props) {
		
		const { attributes, setAttributes, clientId } = props;
		
		const equal = new Equal()
	  
	  	this.nmxs = (equal.check(attributes.nmxs, 'all') === true && attributes.nmxs.top !== undefined && attributes.nmxs.top !== null) ? ' m-n'+attributes.nmxs.top+'' : ''
		this.nmxsx = (equal.check(attributes.nmxs, 'all') === false && equal.check(attributes.nmxs, 'x') === true) ? ' mx-n'+attributes.nmxs.left+'' : ''
		this.nmxsy = (equal.check(attributes.nmxs, 'all') === false && equal.check(attributes.nmxs, 'y') === true) ? ' my-n'+attributes.nmxs.top+'' : ''
		this.nmxst = (equal.check(attributes.nmxs, 'x') === false && equal.check(attributes.nmxs, 'y') === false && attributes.nmxs.top !== undefined && attributes.nmxs.top !== null) ? ' mt-n'+attributes.nmxs.top+'' : ''
		this.nmxse = (equal.check(attributes.nmxs, 'x') === false && equal.check(attributes.nmxs, 'y') === false && attributes.nmxs.right !== undefined && attributes.nmxs.right !== null) ? ' me-n'+attributes.nmxs.right+'' : ''
		this.nmxsb = (equal.check(attributes.nmxs, 'x') === false && equal.check(attributes.nmxs, 'y') === false && attributes.nmxs.bottom !== undefined && attributes.nmxs.bottom !== null) ? ' mb-n'+attributes.nmxs.bottom+'' : ''
		this.nmxss = (equal.check(attributes.nmxs, 'x') === false && equal.check(attributes.nmxs, 'y') === false && attributes.nmxs.left !== undefined && attributes.nmxs.left !== null) ? ' ms-n'+attributes.nmxs.left+'' : ''
		
		this.nmsm = (equal.check(attributes.nmsm, 'all') === true && attributes.nmsm.top !== undefined && attributes.nmsm.top !== null) ? ' m-sm-n'+attributes.nmsm.top+'' : ''
		this.nmsmx = (equal.check(attributes.nmsm, 'all') === false && equal.check(attributes.nmsm, 'x') === true) ? ' mx-sm-n'+attributes.nmsm.left+'' : ''
		this.nmsmy = (equal.check(attributes.nmsm, 'all') === false && equal.check(attributes.nmsm, 'y') === true) ? ' my-sm-n'+attributes.nmsm.top+'' : ''
		this.nmsmt = (equal.check(attributes.nmsm, 'x') === false && equal.check(attributes.nmsm, 'y') === false && attributes.nmsm.top !== undefined && attributes.nmsm.top !== null) ? ' mt-sm-n'+attributes.nmsm.top+'' : ''
		this.nmsme = (equal.check(attributes.nmsm, 'x') === false && equal.check(attributes.nmsm, 'y') === false && attributes.nmsm.right !== undefined && attributes.nmsm.right !== null) ? ' me-sm-n'+attributes.nmsm.right+'' : ''
		this.nmsmb = (equal.check(attributes.nmsm, 'x') === false && equal.check(attributes.nmsm, 'y') === false && attributes.nmsm.bottom !== undefined && attributes.nmsm.bottom !== null) ? ' mb-sm-n'+attributes.nmsm.bottom+'' : ''
		this.nmsms = (equal.check(attributes.nmsm, 'x') === false && equal.check(attributes.nmsm, 'y') === false && attributes.nmsm.left !== undefined && attributes.nmsm.left !== null) ? ' ms-sm-n'+attributes.nmsm.left+'' : ''
		
		this.nmmd = (equal.check(attributes.nmmd, 'all') === true && attributes.nmmd.top !== undefined && attributes.nmmd.top !== null) ? ' m-md-n'+attributes.nmmd.top+'' : ''
		this.nmmdx = (equal.check(attributes.nmmd, 'all') === false && equal.check(attributes.nmmd, 'x') === true) ? ' mx-md-n'+attributes.nmmd.left+'' : ''
		this.nmmdy = (equal.check(attributes.nmmd, 'all') === false && equal.check(attributes.nmmd, 'y') === true) ? ' my-md-n'+attributes.nmmd.top+'' : ''
		this.nmmdt = (equal.check(attributes.nmmd, 'x') === false && equal.check(attributes.nmmd, 'y') === false && attributes.nmmd.top !== undefined && attributes.nmmd.top !== null) ? ' mt-md-n'+attributes.nmmd.top+'' : ''
		this.nmmde = (equal.check(attributes.nmmd, 'x') === false && equal.check(attributes.nmmd, 'y') === false && attributes.nmmd.right !== undefined && attributes.nmmd.right !== null) ? ' me-md-n'+attributes.nmmd.right+'' : ''
		this.nmmdb = (equal.check(attributes.nmmd, 'x') === false && equal.check(attributes.nmmd, 'y') === false && attributes.nmmd.bottom !== undefined&& attributes.nmmd.bottom !== null) ? ' mb-md-n'+attributes.nmmd.bottom+'' : ''
		this.nmmds = (equal.check(attributes.nmmd, 'x') === false && equal.check(attributes.nmmd, 'y') === false && attributes.nmmd.left !== undefined && attributes.nmmd.left !== null) ? ' ms-md-n'+attributes.nmmd.left+'' : ''
		
		this.nmlg = (equal.check(attributes.nmlg, 'all') === true && attributes.nmlg.top !== undefined && attributes.nmlg.top !== null) ? ' m-lg-n'+attributes.nmlg.top+'' : ''
		this.nmlgx = (equal.check(attributes.nmlg, 'all') === false && equal.check(attributes.nmlg, 'x') === true) ? ' mx-lg-n'+attributes.nmlg.left+'' : ''
		this.nmlgy = (equal.check(attributes.nmlg, 'all') === false && equal.check(attributes.nmlg, 'y') === true) ? ' my-lg-n'+attributes.nmlg.top+'' : ''
		this.nmlgt = (equal.check(attributes.nmlg, 'x') === false && equal.check(attributes.nmlg, 'y') === false && attributes.nmlg.top !== undefined && attributes.nmlg.top !== null) ? ' mt-lg-n'+attributes.nmlg.top+'' : ''
		this.nmlge = (equal.check(attributes.nmlg, 'x') === false && equal.check(attributes.nmlg, 'y') === false && attributes.nmlg.right !== undefined && attributes.nmlg.right !== null) ? ' me-lg-n'+attributes.nmlg.right+'' : ''
		this.nmlgb = (equal.check(attributes.nmlg, 'x') === false && equal.check(attributes.nmlg, 'y') === false && attributes.nmlg.bottom !== undefined && attributes.nmlg.bottom !== null) ? ' mb-lg-n'+attributes.nmlg.bottom+'' : ''
		this.nmlgs = (equal.check(attributes.nmlg, 'x') === false && equal.check(attributes.nmlg, 'y') === false && attributes.nmlg.left !== undefined && attributes.nmlg.left !== null) ? ' ms-lg-n'+attributes.nmlg.left+'' : ''
		
		this.nmxl = (equal.check(attributes.nmxl, 'all') === true && attributes.nmxl.top !== undefined && attributes.nmxl.top !== null) ? ' m-xl-n'+attributes.nmxl.top+'' : ''
		this.nmxlx = (equal.check(attributes.nmxl, 'all') === false && equal.check(attributes.nmxl, 'x') === true) ? ' mx-xl-n'+attributes.nmxl.left+'' : ''
		this.nmxly = (equal.check(attributes.nmxl, 'all') === false && equal.check(attributes.nmxl, 'y') === true) ? ' my-xl-n'+attributes.nmxl.top+'' : ''
		this.nmxlt = (equal.check(attributes.nmxl, 'x') === false && equal.check(attributes.nmxl, 'y') === false && attributes.nmxl.top !== undefined && attributes.nmxl.top !== null) ? ' mt-xl-n'+attributes.nmxl.top+'' : ''
		this.nmxle = (equal.check(attributes.nmxl, 'x') === false && equal.check(attributes.nmxl, 'y') === false && attributes.nmxl.right !== undefined && attributes.nmxl.right !== null) ? ' me-xl-n'+attributes.nmxl.right+'' : ''
		this.nmxlb = (equal.check(attributes.nmxl, 'x') === false && equal.check(attributes.nmxl, 'y') === false && attributes.nmxl.bottom !== undefined && attributes.nmxl.bottom !== null) ? ' mb-xl-n'+attributes.nmxl.bottom+'' : ''
		this.nmxls = (equal.check(attributes.nmxl, 'x') === false && equal.check(attributes.nmxl, 'y') === false && attributes.nmxl.left !== undefined && attributes.nmxl.left !== null) ? ' ms-xl-n'+attributes.nmxl.left+'' : ''
		
		this.nmxxl = (equal.check(attributes.nmxxl, 'all') === true && attributes.nmxxl.top !== undefined && attributes.nmxxl.top !== null) ? ' m-xxl-n'+attributes.nmxxl.top+'' : ''
		this.nmxxlx = (equal.check(attributes.nmxxl, 'all') === false && equal.check(attributes.nmxxl, 'x') === true) ? ' mx-xxl-n'+attributes.nmxxl.left+'' : ''
		this.nmxxly = (equal.check(attributes.nmxxl, 'all') === false && equal.check(attributes.nmxxl, 'y') === true) ? ' my-xxl-n'+attributes.nmxxl.top+'' : ''
		this.nmxxlt = (equal.check(attributes.nmxxl, 'x') === false && equal.check(attributes.nmxxl, 'y') === false && attributes.nmxxl.top !== undefined && attributes.nmxxl.top !== null) ? ' mt-xxl-n'+attributes.nmxxl.top+'' : ''
		this.nmxxle = (equal.check(attributes.nmxxl, 'x') === false && equal.check(attributes.nmxxl, 'y') === false && attributes.nmxxl.right !== undefined && attributes.nmxxl.right !== null) ? ' me-xxl-n'+attributes.nmxxl.right+'' : ''
		this.nmxxlb = (equal.check(attributes.nmxxl, 'x') === false && equal.check(attributes.nmxxl, 'y') === false && attributes.nmxxl.bottom !== undefined && attributes.nmxxl.bottom !== null) ? ' mb-xxl-n'+attributes.nmxxl.bottom+'' : ''
		this.nmxxls = (equal.check(attributes.nmxxl, 'x') === false && equal.check(attributes.nmxxl, 'y') === false && attributes.nmxxl.left !== undefined && attributes.nmxxl.left !== null) ? ' ms-xxl-n'+attributes.nmxxl.left+'' : ''
  	}
	
	classes() {
		return ''+this.nmxs+''+this.nmxsx+''+this.nmxsy+''+this.nmxss+''+this.nmxst+''+this.nmxse+''+this.nmxsb+''+this.nmsm+''+this.nmsmx+''+this.nmsmy+''+this.nmsms+''+this.nmsmt+''+this.nmsme+''+this.nmsmb+''+this.nmmd+''+this.nmmdx+''+this.nmmdy+''+this.nmmds+''+this.nmmdt+''+this.nmmde+''+this.nmmdb+''+this.nmlg+''+this.nmlgx+''+this.nmlgy+''+this.nmlgs+''+this.nmlgt+''+this.nmlge+''+this.nmlgb+''+this.nmxl+''+this.nmxlx+''+this.nmxly+''+this.nmxls+''+this.nmxlt+''+this.nmxle+''+this.nmxlb+''+this.nmxxl+''+this.nmxxlx+''+this.nmxxly+''+this.nmxxls+''+this.nmxxlt+''+this.nmxxle+''+this.nmxxlb+''
  	}

}

export { NegativeMargin };