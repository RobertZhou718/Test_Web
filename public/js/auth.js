import { auth } from "./config.js";
import {
  connectAuthEmulator,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
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
  showLoginState,
  googleloginbtn,
} from "./ui.js";

const googleProvider = new GoogleAuthProvider();
//const facebookProvider = new FacebookAuthProvider();
//const twitterProvider = new TwitterAuthProvider();
//connectAuthEmulator(auth, "http://localhost:9099");

const createAccount = async () => {
  const signupEmail = txtEmail.value;
  const signupPassword = txtPassword.value;
  try {
    await createUserWithEmailAndPassword(auth, signupEmail, signupPassword);
    //console.log("eqweqw");
    //alert("Success");
    sendEmailVerification(auth.currentUser).then(() => {
      alert("Email verification sent!");
    });
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

export function loginWithAuthProvider(provider) {
  signInWithPopup(auth, provider)
    .then((result) => {})
    .catch((error) => {
      showLoginError(error);
    });
}

export let userEmail;

const monitorAuthState = async () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      if (user.emailVerified) {
        console.log(user);
        showUserInfo();
        showLoginState(user);
        userEmail = user.email;
      } else {
        alert("请验证");
      }
    } else {
      showLoginDiv();
    }
  });
};
monitorAuthState();
