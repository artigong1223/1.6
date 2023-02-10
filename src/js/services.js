
const swiperWrapper = document.querySelectorAll('.swiper-wrapper')
const arrow = document.querySelectorAll('.arr')
const moreButton = document.querySelectorAll('.more-button')
for (let i = 0; i < moreButton.length; i++) {
    moreButton[i].addEventListener('click', () => {
        swiperWrapper[i].classList.toggle('swiper-wrapper_overflow')
        arrow[i].classList.toggle('more-title')
        if (arrow[i].classList.contains('more-title')) {
            arrow[i].textContent = "Скрыть"
            } else {
            arrow[i].textContent = "Показать все"
            }
    })
}
