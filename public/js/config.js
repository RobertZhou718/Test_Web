// Import the functions you need from the SDKs you need
import {initializeApp} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
import {getAnalytics} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-analytics.js";
import {getAuth} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-auth.js"
import {getStorage} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-storage.js"

const firebaseConfig = {
  apiKey: "AIzaSyARs6Jzuz1cd4cnKMXy48z-ssq7iM3QZ3o",
  authDomain: "ninth-glider-325616.firebaseapp.com",
  databaseURL: "https://ninth-glider-325616-default-rtdb.firebaseio.com",
  projectId: "ninth-glider-325616",
  storageBucket: "ninth-glider-325616.appspot.com",
  messagingSenderId: "823385830598",
  appId: "1:823385830598:web:27985028c06df0faf593c7",
  measurementId: "G-1TJV605HJS"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const storage = getStorage(app);