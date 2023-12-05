const img = document.querySelectorAll('.item-container img');
const popup = document.querySelector('.popup-image');
const popImage = document.querySelector('.popup-image img');
const close = document.querySelector('.popup-image span')
const backTop = document.querySelector('#back-top-btn')

img.forEach(image =>{
    image.addEventListener('click', ()=>{
        popup.style.display = 'block';
        popImage.src = image.getAttribute('src')
        document.body.style.overflow = 'hidden';
        backTop.style.visibility = 'hidden'    
    })    
})

close.addEventListener('click', ()=>{
    popup.style.display = 'none';
    document.body.style.overflow = '';
    backTop.style.visibility = ''
})









