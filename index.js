const burgerBtn = document.querySelector('.hamburger-menu')
const mobileMenu = document.querySelector('.mobile-menu')
const body = document.body

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active')
    mobileMenu.classList.toggle('active')
    body.classList.toggle('active')
})