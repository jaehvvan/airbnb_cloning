
const popupButton = document.querySelector('.sign_up')
popupButton.addEventListener('click', () => {
    const signupPop = document.querySelector('.bg')
    signupPop.style.visibility = 'visible'
})

const cancelButton = document.querySelector('.close')
cancelButton.addEventListener('click', () => {
    const signupCancel = document.querySelector('.bg')
    signupCancel.style.visibility= 'hidden'
})