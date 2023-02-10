const icBurger = document.querySelector('.ic-burger')
const menuBurger = document.querySelector('.menu-burger')
const icBurgerOff = document.querySelector('.ic-burger-off')
const menuBurgerOff = document.querySelector('.menu-burger-off')
const bodyOverflow = document.body
icBurger.addEventListener('click', function() {
    menuBurger.classList.add('menu-burger-mobile')
    menuBurger.classList.add('ic-burger-off_display')
    bodyOverflow.classList.add('body-scroll-off')
    menuBurgerOff.classList.add('menu-burger-mobile')
})
icBurgerOff.addEventListener('click', function() {
        menuBurger.classList.remove('menu-burger-mobile')
        menuBurger.classList.remove('ic-burger-off_display')
        bodyOverflow.classList.remove('body-scroll-off')
        menuBurgerOff.classList.remove('menu-burger-mobile')
})
menuBurgerOff.addEventListener('click', function() {
        menuBurger.classList.remove('menu-burger-mobile')
        menuBurger.classList.remove('ic-burger-off_display')
        bodyOverflow.classList.remove('body-scroll-off')
        menuBurgerOff.classList.remove('menu-burger-mobile')
})
