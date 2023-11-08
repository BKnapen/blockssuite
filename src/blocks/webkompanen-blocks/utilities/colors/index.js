class Colors {
	constructor() {
	  	this.colors = [
			{ name: 'primary', color: 'var(--bs-primary)' },
			{ name: 'secondary', color: 'var(--bs-secondary)' },
			{ name: 'tertiary', color: 'var(--bs-tertiary)' },
			{ name: 'white', color: 'var(--bs-white)' },
			{ name: 'light', color: 'var(--bs-light)' },
			{ name: 'dark', color: 'var(--bs-dark)' },
			{ name: 'black', color: 'var(--bs-black)' }
		]
  	}
	
	get() {
		return this.colors
  	}
}

export { Colors };