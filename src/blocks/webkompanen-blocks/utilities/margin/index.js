import { Equal } from '../equal';

class Margin {
	constructor(props) {
		
		const { attributes, setAttributes, clientId } = props;
		
		const equal = new Equal()
	  
	  	this.mxs = (equal.check(attributes.mxs, 'all') === true && attributes.mxs.top !== undefined && attributes.mxs.top !== null) ? ' m-'+attributes.mxs.top+'' : ''
		this.mxsx = (equal.check(attributes.mxs, 'all') === false && equal.check(attributes.mxs, 'x') === true) ? ' mx-'+attributes.mxs.left+'' : ''
		this.mxsy = (equal.check(attributes.mxs, 'all') === false && equal.check(attributes.mxs, 'y') === true) ? ' my-'+attributes.mxs.top+'' : ''
		this.mxst = (equal.check(attributes.mxs, 'x') === false && equal.check(attributes.mxs, 'y') === false && attributes.mxs.top !== undefined && attributes.mxs.top !== null) ? ' mt-'+attributes.mxs.top+'' : ''
		this.mxse = (equal.check(attributes.mxs, 'x') === false && equal.check(attributes.mxs, 'y') === false && attributes.mxs.right !== undefined && attributes.mxs.right !== null) ? ' me-'+attributes.mxs.right+'' : ''
		this.mxsb = (equal.check(attributes.mxs, 'x') === false && equal.check(attributes.mxs, 'y') === false && attributes.mxs.bottom !== undefined && attributes.mxs.bottom !== null) ? ' mb-'+attributes.mxs.bottom+'' : ''
		this.mxss = (equal.check(attributes.mxs, 'x') === false && equal.check(attributes.mxs, 'y') === false && attributes.mxs.left !== undefined && attributes.mxs.left !== null) ? ' ms-'+attributes.mxs.left+'' : ''
		
		this.mxsauto = attributes.mxsauto === true ? ' m-auto' : ''
		this.mxsxauto = attributes.mxsxauto === true ? ' mx-auto' : ''
		this.mxsyauto = attributes.mxsyauto === true ? ' my-auto' : ''
		this.mxstauto = attributes.mxstauto === true ? ' mt-auto' : ''
		this.mxseauto = attributes.mxseauto === true ? ' me-auto' : ''
		this.mxsbauto = attributes.mxsbauto === true ? ' mb-auto' : ''
		this.mxssauto = attributes.mxssauto === true ? ' ms-auto' : ''
		
		this.msm = (equal.check(attributes.msm, 'all') === true && attributes.msm.top !== undefined && attributes.msm.top !== null) ? ' m-sm-'+attributes.msm.top+'' : ''
		this.msmx = (equal.check(attributes.msm, 'all') === false && equal.check(attributes.msm, 'x') === true) ? ' mx-sm-'+attributes.msm.left+'' : ''
		this.msmy = (equal.check(attributes.msm, 'all') === false && equal.check(attributes.msm, 'y') === true) ? ' my-sm-'+attributes.msm.top+'' : ''
		this.msmt = (equal.check(attributes.msm, 'x') === false && equal.check(attributes.msm, 'y') === false && attributes.msm.top !== undefined && attributes.msm.top !== null) ? ' mt-sm-'+attributes.msm.top+'' : ''
		this.msme = (equal.check(attributes.msm, 'x') === false && equal.check(attributes.msm, 'y') === false && attributes.msm.right !== undefined && attributes.msm.right !== null) ? ' me-sm-'+attributes.msm.right+'' : ''
		this.msmb = (equal.check(attributes.msm, 'x') === false && equal.check(attributes.msm, 'y') === false && attributes.msm.bottom !== undefined && attributes.msm.bottom !== null) ? ' mb-sm-'+attributes.msm.bottom+'' : ''
		this.msms = (equal.check(attributes.msm, 'x') === false && equal.check(attributes.msm, 'y') === false && attributes.msm.left !== undefined && attributes.msm.left !== null) ? ' ms-sm-'+attributes.msm.left+'' : ''
		
		this.msmauto = attributes.msmauto === true ? ' m-sm-auto' : ''
		this.msmxauto = attributes.msmxauto === true ? ' mx-sm-auto' : ''
		this.msmyauto = attributes.msmyauto === true ? ' my-sm-auto' : ''
		this.msmtauto = attributes.msmtauto === true ? ' mt-sm-auto' : ''
		this.msmeauto = attributes.msmeauto === true ? ' me-sm-auto' : ''
		this.msmbauto = attributes.msmbauto === true ? ' mb-sm-auto' : ''
		this.msmsauto = attributes.msmsauto === true ? ' ms-sm-auto' : ''
		
		this.mmd = (equal.check(attributes.mmd, 'all') === true && attributes.mmd.top !== undefined && attributes.mmd.top !== null) ? ' m-md-'+attributes.mmd.top+'' : ''
		this.mmdx = (equal.check(attributes.mmd, 'all') === false && equal.check(attributes.mmd, 'x') === true) ? ' mx-md-'+attributes.mmd.left+'' : ''
		this.mmdy = (equal.check(attributes.mmd, 'all') === false && equal.check(attributes.mmd, 'y') === true) ? ' my-md-'+attributes.mmd.top+'' : ''
		this.mmdt = (equal.check(attributes.mmd, 'x') === false && equal.check(attributes.mmd, 'y') === false && attributes.mmd.top !== undefined && attributes.mmd.top !== null) ? ' mt-md-'+attributes.mmd.top+'' : ''
		this.mmde = (equal.check(attributes.mmd, 'x') === false && equal.check(attributes.mmd, 'y') === false && attributes.mmd.right !== undefined && attributes.mmd.right !== null) ? ' me-md-'+attributes.mmd.right+'' : ''
		this.mmdb = (equal.check(attributes.mmd, 'x') === false && equal.check(attributes.mmd, 'y') === false && attributes.mmd.bottom !== undefined&& attributes.mmd.bottom !== null) ? ' mb-md-'+attributes.mmd.bottom+'' : ''
		this.mmds = (equal.check(attributes.mmd, 'x') === false && equal.check(attributes.mmd, 'y') === false && attributes.mmd.left !== undefined && attributes.mmd.left !== null) ? ' ms-md-'+attributes.mmd.left+'' : ''
		
		this.mmdauto = attributes.mmdauto === true ? ' m-mb-auto' : ''
		this.mmdxauto = attributes.mmdxauto === true ? ' mx-mb-auto' : ''
		this.mmdyauto = attributes.mmdyauto === true ? ' my-mb-auto' : ''
		this.mmdtauto = attributes.mmdtauto === true ? ' mt-mb-auto' : ''
		this.mmdeauto = attributes.mmdeauto === true ? ' me-mb-auto' : ''
		this.mmdbauto = attributes.mmdbauto === true ? ' mb-mb-auto' : ''
		this.mmdsauto = attributes.mmdsauto === true ? ' ms-mb-auto' : ''
		
		this.mlg = (equal.check(attributes.mlg, 'all') === true && attributes.mlg.top !== undefined && attributes.mlg.top !== null) ? ' m-lg-'+attributes.mlg.top+'' : ''
		this.mlgx = (equal.check(attributes.mlg, 'all') === false && equal.check(attributes.mlg, 'x') === true) ? ' mx-lg-'+attributes.mlg.left+'' : ''
		this.mlgy = (equal.check(attributes.mlg, 'all') === false && equal.check(attributes.mlg, 'y') === true) ? ' my-lg-'+attributes.mlg.top+'' : ''
		this.mlgt = (equal.check(attributes.mlg, 'x') === false && equal.check(attributes.mlg, 'y') === false && attributes.mlg.top !== undefined && attributes.mlg.top !== null) ? ' mt-lg-'+attributes.mlg.top+'' : ''
		this.mlge = (equal.check(attributes.mlg, 'x') === false && equal.check(attributes.mlg, 'y') === false && attributes.mlg.right !== undefined && attributes.mlg.right !== null) ? ' me-lg-'+attributes.mlg.right+'' : ''
		this.mlgb = (equal.check(attributes.mlg, 'x') === false && equal.check(attributes.mlg, 'y') === false && attributes.mlg.bottom !== undefined && attributes.mlg.bottom !== null) ? ' mb-lg-'+attributes.mlg.bottom+'' : ''
		this.mlgs = (equal.check(attributes.mlg, 'x') === false && equal.check(attributes.mlg, 'y') === false && attributes.mlg.left !== undefined && attributes.mlg.left !== null) ? ' ms-lg-'+attributes.mlg.left+'' : ''
		this.mlgauto = attributes.mlgauto === true ? ' m-lg-auto' : ''
		this.mlgxauto = attributes.mlgxauto === true ? ' mx-lg-auto' : ''
		this.mlgyauto = attributes.mlgyauto === true ? ' my-lg-auto' : ''
		this.mlgtauto = attributes.mlgtauto === true ? ' mt-lg-auto' : ''
		this.mlgeauto = attributes.mlgeauto === true ? ' me-lg-auto' : ''
		this.mlgbauto = attributes.mlgbauto === true ? ' mb-lg-auto' : ''
		this.mlgsauto = attributes.mlgsauto === true ? ' ms-lg-auto' : ''
		
		this.mxl = (equal.check(attributes.mxl, 'all') === true && attributes.mxl.top !== undefined && attributes.mxl.top !== null) ? ' m-xl-'+attributes.mxl.top+'' : ''
		this.mxlx = (equal.check(attributes.mxl, 'all') === false && equal.check(attributes.mxl, 'x') === true) ? ' mx-xl-'+attributes.mxl.left+'' : ''
		this.mxly = (equal.check(attributes.mxl, 'all') === false && equal.check(attributes.mxl, 'y') === true) ? ' my-xl-'+attributes.mxl.top+'' : ''
		this.mxlt = (equal.check(attributes.mxl, 'x') === false && equal.check(attributes.mxl, 'y') === false && attributes.mxl.top !== undefined && attributes.mxl.top !== null) ? ' mt-xl-'+attributes.mxl.top+'' : ''
		this.mxle = (equal.check(attributes.mxl, 'x') === false && equal.check(attributes.mxl, 'y') === false && attributes.mxl.right !== undefined && attributes.mxl.right !== null) ? ' me-xl-'+attributes.mxl.right+'' : ''
		this.mxlb = (equal.check(attributes.mxl, 'x') === false && equal.check(attributes.mxl, 'y') === false && attributes.mxl.bottom !== undefined && attributes.mxl.bottom !== null) ? ' mb-xl-'+attributes.mxl.bottom+'' : ''
		this.mxls = (equal.check(attributes.mxl, 'x') === false && equal.check(attributes.mxl, 'y') === false && attributes.mxl.left !== undefined && attributes.mxl.left !== null) ? ' ms-xl-'+attributes.mxl.left+'' : ''
		
		this.mxlauto = attributes.mxlauto === true ? ' m-xl-auto' : ''
		this.mxlxauto = attributes.mxlxauto === true ? ' mx-xl-auto' : ''
		this.mxlyauto = attributes.mxlyauto === true ? ' my-xl-auto' : ''
		this.mxltauto = attributes.mxltauto === true ? ' mt-xl-auto' : ''
		this.mxleauto = attributes.mxleauto === true ? ' me-xl-auto' : ''
		this.mxlbauto = attributes.mxlbauto === true ? ' mb-xl-auto' : ''
		this.mxlsauto = attributes.mxlsauto === true ? ' ms-xl-auto' : ''
		
		this.mxxl = (equal.check(attributes.mxxl, 'all') === true && attributes.mxxl.top !== undefined && attributes.mxxl.top !== null) ? ' m-xxl-'+attributes.mxxl.top+'' : ''
		this.mxxlx = (equal.check(attributes.mxxl, 'all') === false && equal.check(attributes.mxxl, 'x') === true) ? ' mx-xxl-'+attributes.mxxl.left+'' : ''
		this.mxxly = (equal.check(attributes.mxxl, 'all') === false && equal.check(attributes.mxxl, 'y') === true) ? ' my-xxl-'+attributes.mxxl.top+'' : ''
		this.mxxlt = (equal.check(attributes.mxxl, 'x') === false && equal.check(attributes.mxxl, 'y') === false && attributes.mxxl.top !== undefined && attributes.mxxl.top !== null) ? ' mt-xxl-'+attributes.mxxl.top+'' : ''
		this.mxxle = (equal.check(attributes.mxxl, 'x') === false && equal.check(attributes.mxxl, 'y') === false && attributes.mxxl.right !== undefined && attributes.mxxl.right !== null) ? ' me-xxl-'+attributes.mxxl.right+'' : ''
		this.mxxlb = (equal.check(attributes.mxxl, 'x') === false && equal.check(attributes.mxxl, 'y') === false && attributes.mxxl.bottom !== undefined && attributes.mxxl.bottom !== null) ? ' mb-xxl-'+attributes.mxxl.bottom+'' : ''
		this.mxxls = (equal.check(attributes.mxxl, 'x') === false && equal.check(attributes.mxxl, 'y') === false && attributes.mxxl.left !== undefined && attributes.mxxl.left !== null) ? ' ms-xxl-'+attributes.mxxl.left+'' : ''
		
		this.mxxlauto = attributes.mxxlauto === true ? ' m-xxl-auto' : ''
		this.mxxlxauto = attributes.mxxlxauto === true ? ' mx-xxl-auto' : ''
		this.mxxlyauto = attributes.mxxlyauto === true ? ' my-xxl-auto' : ''
		this.mxxltauto = attributes.mxxltauto === true ? ' mt-xxl-auto' : ''
		this.mxxleauto = attributes.mxxleauto === true ? ' me-xxl-auto' : ''
		this.mxxlbauto = attributes.mxxlbauto === true ? ' mb-xxl-auto' : ''
		this.mxxlsauto = attributes.mxxlsauto === true ? ' ms-xxl-auto' : ''
  	}
	
	classes() {
		return ''+this.mxs+''+this.mxsx+''+this.mxsy+''+this.mxss+''+this.mxst+''+this.mxse+''+this.mxsb+''+this.msm+''+this.msmx+''+this.msmy+''+this.msms+''+this.msmt+''+this.msme+''+this.msmb+''+this.mmd+''+this.mmdx+''+this.mmdy+''+this.mmds+''+this.mmdt+''+this.mmde+''+this.mmdb+''+this.mlg+''+this.mlgx+''+this.mlgy+''+this.mlgs+''+this.mlgt+''+this.mlge+''+this.mlgb+''+this.mxl+''+this.mxlx+''+this.mxly+''+this.mxls+''+this.mxlt+''+this.mxle+''+this.mxlb+''+this.mxxl+''+this.mxxlx+''+this.mxxly+''+this.mxxls+''+this.mxxlt+''+this.mxxle+''+this.mxxlb+''+this.mxsauto+''+this.mxsxauto+''+this.mxsyauto+''+this.mxstauto+''+this.mxseauto+''+this.mxsbauto+''+this.mxssauto+''+this.msmauto+''+this.msmxauto+''+this.msmyauto+''+this.msmtauto+''+this.msmeauto+''+this.msmbauto+''+this.msmsauto+''+this.mmdauto+''+this.mmdxauto+''+this.mmdyauto+''+this.mmdtauto+''+this.mmdeauto+''+this.mmdbauto+''+this.mmdsauto+''+this.mlgauto+''+this.mlgxauto+''+this.mlgyauto+''+this.mlgtauto+''+this.mlgeauto+''+this.mlgbauto+''+this.mlgsauto+''+this.mxlauto+''+this.mxlxauto+''+this.mxlyauto+''+this.mxltauto+''+this.mxleauto+''+this.mxlbauto+''+this.mxlsauto+''+this.mxxlauto+''+this.mxxlxauto+''+this.mxxlyauto+''+this.mxxltauto+''+this.mxxleauto+''+this.mxxlbauto+''+this.mxxlsauto+''
  	}

}

export { Margin };