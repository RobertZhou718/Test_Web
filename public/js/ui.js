import { AuthErrorCodes } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-auth.js";

export const txtEmail = document.querySelector('#txtEmail')
export const txtPassword = document.querySelector('#txtPassword')

export const btnLogin = document.querySelector('#btnLogin')
export const btnSignup = document.querySelector('#btnSignup')

export const btnLogout = document.querySelector('#btnLogout')

export const divAuthState = document.querySelector('#divAuthState')
export const lblAuthState = document.querySelector('#lblAuthState')

export const divLoginError = document.querySelector('#divLoginError')
export const lblLoginErrorMessage = document.querySelector('#lblLoginErrorMessage')


export const loginForm = document.querySelector('#loginform')

export const facebookloginbtn = document.querySelector('.facebook')
export const twitterloginbtn = document.querySelector('.twitter')
export const googleloginbtn = document.querySelector('.google')

export const showLoginForm = () => {
    loginForm.style.display = 'block'
    loginInfo.style.display = 'none'
}
export const showApp = () => {
    loginForm.style.display = 'none'
    loginInfo.style.display = 'block'
}
export const hideLoginError = () => {
    divLoginError.style.display = 'none'
    lblLoginErrorMessage.innerHTML = ''
}
export const showLoginError = (error) => {
    divLoginError.style.display = 'block'
    if (error.code == AuthErrorCodes.INVALID_PASSWORD) {
        lblLoginErrorMessage.innerHTML = `Wrong password. Try again.`
    } else {
        lblLoginErrorMessage.innerHTML = `Error: ${error.message}`
    }
}
export const showLoginState = (user) => {
    lblAuthState.innerHTML = `You're loggged in as ${user.displayName} (uid: ${user.uid},email: ${user.email})`
}
hideLoginError()