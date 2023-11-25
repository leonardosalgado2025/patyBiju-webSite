const home = document.querySelector('#home-link') 
const biju = document.querySelector('#bijuteria-link')

/* Function: Rolar para o topo  */
function scrollToTop(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

/* Event Listener (Scrool)*/
window.addEventListener('scroll', function(){
    let backToTopBtn = document.querySelector('#back-top-btn');

    /* Mostrar botão apenas: */
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTopBtn.classList.add('show');

      } else {
      
        backToTopBtn.classList.remove('show'); 
        
      }
})

/* Event Listener (Click) */
document.querySelector('#back-top-btn').addEventListener('click', scrollToTop)