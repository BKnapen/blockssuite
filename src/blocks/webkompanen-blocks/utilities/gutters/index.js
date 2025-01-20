class Gutters {
	constructor(props) {
		
		const { attributes, setAttributes, clientId } = props;
	  
	  	this.guttersxs = attributes.guttersxs.top === attributes.guttersxs.left && attributes.guttersxs.top !== undefined && attributes.guttersxs.top !== null ? ' g-'+attributes.guttersxs.top+'' : ''
	  	this.guttersxsx = attributes.guttersxs.top !== attributes.guttersxs.left && attributes.guttersxs.top !== undefined && attributes.guttersxs.top !== null ? ' gx-'+attributes.guttersxs.top+'' : ''
	  	this.guttersxsy = attributes.guttersxs.top !== attributes.guttersxs.left && attributes.guttersxs.left !== undefined && attributes.guttersxs.left !== null ? ' gy-'+attributes.guttersxs.left+'' : ''
	  
	  	this.gutterssm = attributes.gutterssm.top === attributes.gutterssm.left && attributes.gutterssm.top !== undefined && attributes.gutterssm.top !== null ? ' g-sm-'+attributes.gutterssm.top+'' : ''
	  	this.gutterssmx = attributes.gutterssm.top !== attributes.gutterssm.left && attributes.gutterssm.top !== undefined && attributes.gutterssm.top !== null ? ' gx-sm-'+attributes.gutterssm.top+'' : ''
	  	this.gutterssmy = attributes.gutterssm.top !== attributes.gutterssm.left && attributes.gutterssm.left !== undefined && attributes.gutterssm.left !== null ? ' gy-sm-'+attributes.gutterssm.left+'' : ''
	  
	  	this.guttersmd = attributes.guttersmd.top === attributes.guttersmd.left && attributes.guttersmd.top !== undefined && attributes.guttersmd.top !== null ? ' g-md-'+attributes.guttersmd.top+'' : ''
	  	this.guttersmdx = attributes.guttersmd.top !== attributes.guttersmd.left && attributes.guttersmd.top !== undefined && attributes.guttersmd.top !== null ? ' gx-md-'+attributes.guttersmd.top+'' : ''
	  	this.guttersmdy = attributes.guttersmd.top !== attributes.guttersmd.left && attributes.guttersmd.left !== undefined && attributes.guttersmd.left !== null ? ' gy-md-'+attributes.guttersmd.left+'' : ''
	  
	  	this.gutterslg = attributes.gutterslg.top === attributes.gutterslg.left && attributes.gutterslg.top !== undefined && attributes.gutterslg.top !== null ? ' g-lg-'+attributes.gutterslg.top+'' : ''
	  	this.gutterslgx = attributes.gutterslg.top !== attributes.gutterslg.left && attributes.gutterslg.top !== undefined && attributes.gutterslg.top !== null ? ' gx-lg-'+attributes.gutterslg.top+'' : ''
	  	this.gutterslgy = attributes.gutterslg.top !== attributes.gutterslg.left && attributes.gutterslg.left !== undefined && attributes.gutterslg.left !== null ? ' gy-'+attributes.gutterslg.left+'' : ''
	  
	  	this.guttersxl = attributes.guttersxl.top === attributes.guttersxl.left && attributes.guttersxl.top !== undefined && attributes.guttersxl.top !== null ? ' g-xl-'+attributes.guttersxl.top+'' : ''
	  	this.guttersxlx = attributes.guttersxl.top !== attributes.guttersxl.left && attributes.guttersxl.top !== undefined && attributes.guttersxl.top !== null ? ' gx-xl-'+attributes.guttersxl.top+'' : ''
	  	this.guttersxly = attributes.guttersxl.top !== attributes.guttersxl.left && attributes.guttersxl.left !== undefined && attributes.guttersxl.left !== null ? ' gy-xl-'+attributes.guttersxl.left+'' : ''
	  
	  	this.guttersxxl = attributes.guttersxxl.top === attributes.guttersxxl.left && attributes.guttersxxl.top !== undefined && attributes.guttersxxl.top !== null ? ' g-xxl-'+attributes.guttersxxl.top+'' : ''
	  	this.guttersxxlx = attributes.guttersxxl.top !== attributes.guttersxxl.left && attributes.guttersxxl.top !== undefined && attributes.guttersxxl.top !== null ? ' gx-xxl'+attributes.guttersxxl.top+'' : ''
	  	this.guttersxxly = attributes.guttersxxl.top !== attributes.guttersxxl.left && attributes.guttersxxl.left !== undefined && attributes.guttersxxl.left !== null ? ' gy-xxl-'+attributes.guttersxxl.left+'' : ''
  	}
	
	classes() {
		return ''+this.guttersxs+''+this.guttersxsx+''+this.guttersxsy+''+this.gutterssm+''+this.gutterssmx+''+this.gutterssmy+''+this.guttersmd+''+this.guttersmdx+''+this.guttersmdy+''+this.gutterslg+''+this.gutterslgx+''+this.gutterslgy+''+this.guttersxl+''+this.guttersxlx+''+this.guttersxly+''+this.guttersxxl+''+this.guttersxxlx+''+this.guttersxxly+''
  	}

}

export { Gutters };