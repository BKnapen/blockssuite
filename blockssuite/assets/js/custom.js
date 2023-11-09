const navLinks = document.querySelectorAll('.nav-link')
const menuToggle = document.getElementById('offcanvasDarkNavbar')
const bsCollapse = new bootstrap.Offcanvas(menuToggle)
for(var l=0; l < navLinks.length; l++){
    navLinks[l].addEventListener('click', function(e){
        e.stopPropagation()
        e.preventDefault()
        bsCollapse.hide()
        document.getElementById(''+this.getAttribute('href').substring(1)+'').scrollIntoView({
            behavior:'smooth',
            block:'center'
        })
    })
}