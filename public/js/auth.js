import { auth } from "./config.js";
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
import {
  txtEmail,
  txtPassword,
  btnLogin,
  btnSignup,
  showLoginDiv,
  showUserInfo,
  hideLoginError,
  showLoginError,
  lblAuthState,
  googleloginbtn,
  facebookloginbtn,
  twitterloginbtn,
} from "./ui.js";

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const twitterProvider = new TwitterAuthProvider();
//connectAuthEmulator(auth, "http://localhost:9099");

const createAccount = async () => {
  const signupEmail = txtEmail.value;
  const signupPassword = txtPassword.value;
  try {
    await createUserWithEmailAndPassword(auth, signupEmail, signupPassword);
    console.log("eqweqw");
    alert("Success");
  } catch (error) {
    console.log(error);
    showLoginError(error);
  }
  // return createUserWithEmailAndPassword(auth, signupEmail, signupPassword);
};
btnSignup.addEventListener("click", createAccount);

const loginEmailPassword = async () => {
  const loginemail = txtEmail.value;
  const loginpassword = txtPassword.value;
  try {
    // const userCredential =
    await signInWithEmailAndPassword(auth, loginemail, loginpassword);
  } catch (error) {
    showLoginError(error);
  }
};

btnLogin.addEventListener("click", loginEmailPassword);

export function logout() {
  return signOut(auth);
}
btnLogout.addEventListener("click", logout);

export function loginWithGoogle() {
  return loginWithAuthProvider(googleProvider);
}
googleloginbtn.addEventListener("click", loginWithGoogle);
// export function loginWithFacebook() {
//   return loginWithAuthProvider(facebookProvider);
// }
//facebookloginbtn.addEventListener("click", loginWithFacebook);

// export function loginWithTwitter() {
//   return loginWithAuthProvider(twitterProvider);
// }
// twitterloginbtn.addEventListener("click", loginWithTwitter);

export function loginWithAuthProvider(provider) {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = provider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // // The email of the user's account used.
      // const email = error.email;
      // The AuthCredential type that was used.
      //const credential = provider.credentialFromError(error);
      // ...
      showLoginError(error);
    });
}

export let userEmail;

const monitorAuthState = async () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user);
      showUserInfo();
      userEmail = user.email;
    } else {
      showLoginDiv();
    }
  });
};
monitorAuthState();
