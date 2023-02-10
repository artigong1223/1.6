const modalFeedBack = document.querySelector('.modal-feedback')
const modalCall = document.querySelector('.modal-call')
const modalOff = document.querySelectorAll('.modal-off')
const bodyOverflow = document.body
const icChat = document.querySelectorAll('.ic-chat')
const icCall = document.querySelectorAll('.ic-call')
const modalCallOff = document.querySelector('.modal-call-off')
const modalChatOff = document.querySelector('.modal-chat-off')
const form = document.querySelector('form')
icChat.forEach(g => g.addEventListener('click', () => {
    modalChatOff.classList.add('modal-on')
    modalFeedBack.classList.add('modal-on')
    bodyOverflow.classList.add('body-scroll-off')
}))
modalOff[1].addEventListener('click', () => {
    modalChatOff.classList.remove('modal-on')
    modalFeedBack.classList.remove('modal-on')
    bodyOverflow.classList.remove('body-scroll-off')
})
icCall.forEach(g => g.addEventListener('click', () => {
    modalCallOff.classList.add('modal-on')
    modalCall.classList.add('modal-on')
    bodyOverflow.classList.add('body-scroll-off')
}))
modalOff[0].addEventListener('click', () => {
    modalCall.classList.remove('modal-on')
    bodyOverflow.classList.remove('body-scroll-off')
    modalCallOff.classList.remove('modal-on')
})
modalCallOff.addEventListener('click', () => {
    modalCall.classList.remove('modal-on')
    bodyOverflow.classList.remove('body-scroll-off')
    modalCallOff.classList.remove('modal-on')
})
modalChatOff.addEventListener('click', () => {
    modalFeedBack.classList.remove('modal-on')
    bodyOverflow.classList.remove('body-scroll-off')
    modalChatOff.classList.remove('modal-on')
})



