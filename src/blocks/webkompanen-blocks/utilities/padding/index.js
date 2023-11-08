import { Equal } from '../equal';

class Padding {
	constructor(props) {
		const { attributes, setAttributes, clientId } = props;
		
		const equal = new Equal()
		
		this.pxs = (equal.check(attributes.pxs, 'all') === true && attributes.pxs.top !== undefined && attributes.pxs.top !== null) ? ' p-'+attributes.pxs.top+'' : ''
		this.pxsx = (equal.check(attributes.pxs, 'all') === false && equal.check(attributes.pxs, 'x') === true) ? ' px-'+attributes.pxs.left+'' : ''
		this.pxsy = (equal.check(attributes.pxs, 'all') === false && equal.check(attributes.pxs, 'y') === true) ? ' py-'+attributes.pxs.top+'' : ''
		this.pxst = (equal.check(attributes.pxs, 'all') === false && equal.check(attributes.pxs, 'y') === false && equal.check(attributes.pxs, 'y') === false && attributes.pxs.top !== undefined && attributes.pxs.top !== null) ? ' pt-'+attributes.pxs.top+'' : ''
		this.pxse = (equal.check(attributes.pxs, 'all') === false && equal.check(attributes.pxs, 'x') === false && equal.check(attributes.pxs, 'y') === false && attributes.pxs.right !== undefined && attributes.pxs.right !== null) ? ' pe-'+attributes.pxs.right+'' : ''
		this.pxsb = (equal.check(attributes.pxs, 'all') === false && equal.check(attributes.pxs, 'y') === false && equal.check(attributes.pxs, 'y') === false && attributes.pxs.bottom !== undefined && attributes.pxs.bottom !== null) ? ' pb-'+attributes.pxs.bottom+'' : ''
		this.pxss = (equal.check(attributes.pxs, 'all') === false && equal.check(attributes.pxs, 'x') === false && equal.check(attributes.pxs, 'y') === false && attributes.pxs.left !== undefined && attributes.pxs.left !== null) ? ' ps-'+attributes.pxs.left+'' : ''
	
		this.psm = (equal.check(attributes.psm, 'all') === true && attributes.psm.top !== undefined && attributes.psm.top !== null) ? ' p-sm-'+attributes.psm.top+'' : ''
		this.psmx = (equal.check(attributes.psm, 'all') === false && equal.check(attributes.psm, 'x') === true) ? ' px-sm-'+attributes.psm.left+'' : ''
		this.psmy = (equal.check(attributes.psm, 'all') === false && equal.check(attributes.psm, 'y') === true) ? ' py-sm-'+attributes.psm.top+'' : ''
		this.psmt = (equal.check(attributes.psm, 'x') === false && equal.check(attributes.psm, 'y') === false && attributes.psm.top !== undefined && attributes.psm.top !== null) ? ' pt-sm-'+attributes.psm.top+'' : ''
		this.psme = (equal.check(attributes.psm, 'x') === false && equal.check(attributes.psm, 'x') === false && attributes.psm.right !== undefined && attributes.psm.right !== null) ? ' pe-sm-'+attributes.psm.right+'' : ''
		this.psmb = (equal.check(attributes.psm, 'x') === false && equal.check(attributes.psm, 'y') === false && attributes.psm.bottom !== undefined && attributes.psm.bottom !== null) ? ' pb-sm-'+attributes.psm.bottom+'' : ''
		this.psms = (equal.check(attributes.psm, 'x') === false && equal.check(attributes.psm, 'x') === false && attributes.psm.left !== undefined && attributes.psm.left !== null) ? ' ps-sm-'+attributes.psm.left+'' : ''
		
		this.pmd = (equal.check(attributes.pmd, 'all') === true && attributes.pmd.top !== undefined && attributes.pmd.top !== null) ? ' p-md-'+attributes.pmd.top+'' : ''
		this.pmdx = (equal.check(attributes.pmd, 'all') === false && equal.check(attributes.pmd, 'x') === true) ? ' px-md-'+attributes.pmd.left+'' : ''
		this.pmdy = (equal.check(attributes.pmd, 'all') === false && equal.check(attributes.pmd, 'y') === true) ? ' py-md-'+attributes.pmd.top+'' : ''
		this.pmdt = (equal.check(attributes.pmd, 'x') === false && equal.check(attributes.pmd, 'y') === false && attributes.pmd.top !== undefined && attributes.pmd.top !== null) ? ' pt-md-'+attributes.pmd.top+'' : ''
		this.pmde = (equal.check(attributes.pmd, 'x') === false && equal.check(attributes.pmd, 'x') === false && attributes.pmd.right !== undefined && attributes.pmd.right !== null) ? ' pe-md-'+attributes.pmd.right+'' : ''
		this.pmdb = (equal.check(attributes.pmd, 'x') === false && equal.check(attributes.pmd, 'y') === false && attributes.pmd.bottom !== undefined && attributes.pmd.bottom !== null) ? ' pb-md-'+attributes.pmd.bottom+'' : ''
		this.pmds = (equal.check(attributes.pmd, 'x') === false && equal.check(attributes.pmd, 'x') === false && attributes.pmd.left !== undefined && attributes.pmd.left !== null) ? ' ps-md-'+attributes.pmd.left+'' : ''
		
		this.plg = (equal.check(attributes.plg, 'all') === true && attributes.plg.top !== undefined && attributes.plg.top !== null) ? ' p-lg-'+attributes.plg.top+'' : ''
		this.plgx = (equal.check(attributes.plg, 'all') === false && equal.check(attributes.plg, 'x') === true) ? ' px-lg-'+attributes.plg.left+'' : ''
		this.plgy = (equal.check(attributes.plg, 'all') === false && equal.check(attributes.plg, 'y') === true) ? ' py-lg-'+attributes.plg.top+'' : ''
		this.plgt = (equal.check(attributes.plg, 'x') === false && equal.check(attributes.plg, 'y') === false && attributes.plg.top !== undefined && attributes.plg.top !== null) ? ' pt-lg-'+attributes.plg.top+'' : ''
		this.plge = (equal.check(attributes.plg, 'x') === false && equal.check(attributes.plg, 'x') === false && attributes.plg.right !== undefined && attributes.plg.right !== null) ? ' pe-lg-'+attributes.plg.right+'' : ''
		this.plgb = (equal.check(attributes.plg, 'x') === false && equal.check(attributes.plg, 'y') === false && attributes.plg.bottom !== undefined && attributes.plg.bottom !== null) ? ' pb-lg-'+attributes.plg.bottom+'' : ''
		this.plgs = (equal.check(attributes.plg, 'x') === false && equal.check(attributes.plg, 'x') === false && attributes.plg.left !== undefined && attributes.plg.left !== null) ? ' ps-lg-'+attributes.plg.left+'' : ''
		
		this.pxl = (equal.check(attributes.pxl, 'all') === true && attributes.pxl.top !== undefined && attributes.pxl.top !== null) ? ' p-xl-'+attributes.pxl.top+'' : ''
		this.pxlx = (equal.check(attributes.pxl, 'all') === false && equal.check(attributes.pxl, 'x') === true) ? ' px-xl-'+attributes.pxl.left+'' : ''
		this.pxly = (equal.check(attributes.pxl, 'all') === false && equal.check(attributes.pxl, 'y') === true) ? ' py-xl-'+attributes.pxl.top+'' : ''
		this.pxlt = (equal.check(attributes.pxl, 'x') === false && equal.check(attributes.pxl, 'y') === false && attributes.pxl.top !== undefined && attributes.pxl.top !== null) ? ' pt-xl-'+attributes.pxl.top+'' : ''
		this.pxle = (equal.check(attributes.pxl, 'x') === false && equal.check(attributes.pxl, 'x') === false && attributes.pxl.right !== undefined && attributes.pxl.right !== null) ? ' pe-xl-'+attributes.pxl.right+'' : ''
		this.pxlb = (equal.check(attributes.pxl, 'x') === false && equal.check(attributes.pxl, 'y') === false && attributes.pxl.bottom !== undefined && attributes.pxl.bottom !== null) ? ' pb-xl-'+attributes.pxl.bottom+'' : ''
		this.pxls = (equal.check(attributes.pxl, 'x') === false && equal.check(attributes.pxl, 'x') === false && attributes.pxl.left !== undefined && attributes.pxl.left !== null) ? ' ps-xl-'+attributes.pxl.left+'' : ''
		
		this.pxxl = (equal.check(attributes.pxxl, 'all') === true && attributes.pxxl.top !== undefined && attributes.pxxl.top !== null) ? ' p-xxl-'+attributes.pxxl.top+'' : ''
		this.pxxlx = (equal.check(attributes.pxxl, 'all') === false && equal.check(attributes.pxxl, 'x') === true) ? ' px-xxl-'+attributes.pxxl.left+'' : ''
		this.pxxly = (equal.check(attributes.pxxl, 'all') === false && equal.check(attributes.pxxl, 'y') === true) ? ' py-xxl-'+attributes.pxxl.top+'' : ''
		this.pxxlt = (equal.check(attributes.pxxl, 'x') === false && equal.check(attributes.pxxl, 'y') === false && attributes.pxxl.top !== undefined && attributes.pxxl.top !== null) ? ' pt-xxl-'+attributes.pxxl.top+'' : ''
		this.pxxle = (equal.check(attributes.pxxl, 'x') === false && equal.check(attributes.pxxl, 'x') === false && attributes.pxxl.right !== undefined && attributes.pxxl.right !== null) ? ' pe-xxl-'+attributes.pxxl.right+'' : ''
		this.pxxlb = (equal.check(attributes.pxxl, 'x') === false && equal.check(attributes.pxxl, 'y') === false && attributes.pxxl.bottom !== undefined && attributes.pxxl.bottom !== null) ? ' pb-xxl-'+attributes.pxxl.bottom+'' : ''
		this.pxxls = (equal.check(attributes.pxxl, 'x') === false && equal.check(attributes.pxxl, 'x') === false && attributes.pxxl.left !== undefined && attributes.pxxl.left !== null) ? ' ps-xxl-'+attributes.pxxl.left+'' : ''
	}
	classes(){
		return ''+this.pxs+''+this.pxsx+''+this.pxsy+''+this.pxss+''+this.pxst+''+this.pxse+''+this.pxsb+''+this.psm+''+this.psmx+''+this.psmy+''+this.psms+''+this.psmt+''+this.psme+''+this.psmb+''+this.pmd+''+this.pmdx+''+this.pmdy+''+this.pmds+''+this.pmdt+''+this.pmde+''+this.pmdb+''+this.plg+''+this.plgx+''+this.plgy+''+this.plgs+''+this.plgt+''+this.plge+''+this.plgb+''+this.pxl+''+this.pxlx+''+this.pxly+''+this.pxls+''+this.pxlt+''+this.pxle+''+this.pxlb+''+this.pxxl+''+this.pxxlx+''+this.pxxly+''+this.pxxls+''+this.pxxlt+''+this.pxxle+''+this.pxxlb+''
	}
}
export { Padding };