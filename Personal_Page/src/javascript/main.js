const navBar = document.querySelector('#navBar')
const navBarLogo  = document.querySelector('#navBarLogo')
const wholeNarBar = document.querySelector('#wholeNarBar')

function show() {
    navBar.style.display = 'none'
    wholeNarBar.style.display = 'flex'
}

navBar.addEventListener('click', show)

function noneShow() {
    wholeNarBar.style.display = 'none'
    navBar.style.display = 'flex'
}

navBarLogo.addEventListener('click', noneShow)