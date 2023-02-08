const icBurger = document.querySelector('.ic-burger')
const menuBurger = document.querySelector('.menu-burger')
const icBurgerOff = document.querySelector('.ic-burger-off')
icBurger.addEventListener('click', function() {
    menuBurger.classList.add('menu-burger-mobile')
    menuBurger.classList.add('ic-burger-off_display')
    bodyOverflow.classList.add('body-scroll-off')
})
icBurgerOff.addEventListener('click', function() {
        menuBurger.classList.remove('menu-burger-mobile')
        menuBurger.classList.remove('ic-burger-off_display')
        bodyOverflow.classList.remove('body-scroll-off')
})