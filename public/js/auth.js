import { auth } from "./config.js"
import {
    connectAuthEmulator,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    FacebookAuthProvider,
    TwitterAuthProvider,
    signOut,
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-auth.js";
import {txtEmail,txtPassword,btnLogin,btnSignup, showApp, showLoginState, hideLoginError,showLoginError, showLoginForm, lblAuthState, googleloginbtn, facebookloginbtn, twitterloginbtn} from "./ui.js"



const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const twitterProvider = new TwitterAuthProvider();
connectAuthEmulator(auth,"http://localhost:9099")

const createAccount= async() =>{
    const signupEmail = txtEmail.value;
    const signupPassword = txtPassword.value;
    return createUserWithEmailAndPassword(auth, signupEmail, signupPassword);
}
btnSignup.addEventListener("click",createAccount);


const loginEmailPassword = async() => {
    const loginemail = txtEmail.value;
    const loginpassword = txtPassword.value;
    try {
           const userCredential = await signInWithEmailAndPassword(auth, loginemail, loginpassword);
           window.location.replace("/TaxOnline.html")

    console.log(userCredential.user);
    } catch (error) {
        console.log(error);
        showLoginError(error);
    }
}

btnLogin.addEventListener("click",loginEmailPassword);

export function logout() {
    return signOut(auth);
}

export function loginWithGoogle() {
    return loginWithAuthProvider(googleProvider);
}
googleloginbtn.addEventListener("click",loginWithGoogle);
export function loginWithFacebook() {
    return loginWithAuthProvider(facebookProvider);
}
facebookloginbtn.addEventListener("click",loginWithFacebook);

export function loginWithTwitter() {
    return loginWithAuthProvider(twitterProvider);
}
twitterloginbtn.addEventListener("click",loginWithTwitter);


export function loginWithAuthProvider(provider) {

    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // ...
        })
        .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
}
onAuthStateChanged(auth,user=>{
    if(user){
        console.log(user);
    }else{
        lblAuthState.innerHTML = "You're not logged in.";
    }
})
