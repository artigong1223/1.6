const sectionText = document.querySelector('.section__text')
const sectionExpand = document.querySelector('.section__expand')
sectionExpand.addEventListener('click', function() {
    sectionText.classList.toggle('section__text-more')
})