// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOaTlj1ksH7bfAmfkCAHRo4Fwiq-hliNs",
  authDomain: "golden-grocery.firebaseapp.com",
  projectId: "golden-grocery",
  storageBucket: "golden-grocery.appspot.com",
  messagingSenderId: "962715966031",
  appId: "1:962715966031:web:ae55a703cb19f1b8b4e83a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;