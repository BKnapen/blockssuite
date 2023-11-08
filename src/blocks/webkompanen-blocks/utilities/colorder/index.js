class ColOrder {
	constructor(props) {
		
		const { attributes, setAttributes, clientId } = props;
	  
	  	this.orderxs = attributes.orderxs ? ' order-'+attributes.orderxs : ''
		this.ordersm = attributes.ordersm ? ' order-sm-'+attributes.ordersm : ''
		this.ordermd = attributes.ordermd ? ' order-md-'+attributes.ordermd : ''
		this.orderlg = attributes.orderlg ? ' order-lg-'+attributes.orderlg : ''
		this.orderxl = attributes.orderxl ? ' order-xl-'+attributes.orderxl : ''
		this.orderxxl = attributes.orderxxl ? ' order-xxl-'+attributes.orderxxl : ''
		
	  	this.orderxs = attributes.orderautoxs ? ' order-auto' : this.orderxs
		this.ordersm = attributes.orderautosm ? ' order-sm-auto' : this.ordersm
		this.ordermd = attributes.orderautomd ? ' order-md-auto' : this.ordermd
		this.orderlg = attributes.orderautolg ? ' order-lg-auto' : this.orderlg
		this.orderxl = attributes.orderautoxl ? ' order-xl-auto' : this.orderxl
		this.orderxxl = attributes.orderautoxxl ? ' order-xxl-auto' : this.orderxxl
		
	  	this.orderxsorder = attributes.orderxsorder ? ' order' : ''
		this.ordersmorder = attributes.ordersmorder ? ' order-sm' : ''
		this.ordermdorder = attributes.ordermdorder ? ' order-md' : ''
		this.orderlgorder = attributes.orderlgorder ? ' order-lg' : ''
		this.orderxlorder = attributes.orderxlorder ? ' order-xl' : ''
		this.orderxxlorder = attributes.orderxxlorder ? ' order-xxl' : ''
  	}
	
	classes() {
		return ''+this.orderxs+''+this.ordersm+''+this.ordermd+''+this.orderlg+''+this.orderxl+''+this.orderxxl+''+this.orderxsorder+''+this.ordersmorder+''+this.ordermdorder+''+this.orderlgorder+''+this.orderxlorder+''+this.orderxxlorder+''
  	}

}

export { ColOrder };