const lr = document.querySelector('.lr')
const registerLink = document.querySelector('.register-link')
const loginLink = document.querySelector('.login-link')

registerLink.onclick = () => {
    lr.classList.add('active')
}

loginLink.onclick = () => {
    lr.classList.remove('active')
}   