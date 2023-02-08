const headerButton = document.querySelectorAll('.header__button')
const modalFeedBack = document.querySelector('.modal-feedback')
const modalCall = document.querySelector('.modal-call')
const modalOff = document.querySelectorAll('.modal-off')
const icCheckstatus = document.querySelector('.ic-checkstatus')
const icRepair = document.querySelector('.ic-repair')
const bodyOverflow = document.body

headerButton[1].addEventListener('click', () => {
    modalFeedBack.classList.add('modal-on')
    bodyOverflow.classList.add('body-scroll-off')
})
modalOff[1].addEventListener('click', () => {
    modalFeedBack.classList.remove('modal-on')
    bodyOverflow.classList.remove('body-scroll-off')
})
icCheckstatus.addEventListener('click', () => {
    modalFeedBack.classList.add('modal-on')
    bodyOverflow.classList.add('body-scroll-off')
})


headerButton[0].addEventListener('click', () => {
    modalCall.classList.add('modal-on')
    bodyOverflow.classList.add('body-scroll-off')
})
modalOff[0].addEventListener('click', () => {
    modalCall.classList.remove('modal-on')
    bodyOverflow.classList.remove('body-scroll-off')
})
icRepair.addEventListener('click', () => {
    modalCall.classList.add('modal-on')
    bodyOverflow.classList.add('body-scroll-off')
})
