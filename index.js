const navSlide = () => {
    const nav = document.querySelector('.primary-navigation')
    const navToggle = document.querySelector('.mobile-nav-toggle')
    const navLinks = document.querySelectorAll('.nav-links li')

    
    
    
    navToggle.addEventListener('click', () => {
        const visibility = nav.getAttribute('data-visible')
        
        navLinks.forEach((link, index) =>{
            if(link.style.animation) {
                link.style.animation = ''
            }else {
                link.style.animation = `navLinkFade 0.5s ease forward ${index / 7 + 0.3}s`
            }
        }
    )
        if(visibility === 'false') {
            nav.setAttribute('data-visible', true)
            navToggle.setAttribute('aria-expanded', true)
        }else {
            nav.setAttribute('data-visible', false )
            navToggle.setAttribute('aria-expanded', false)
        }

})
}
navSlide()