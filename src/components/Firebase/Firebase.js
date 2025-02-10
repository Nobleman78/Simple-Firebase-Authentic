// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-hmrLq2IRWGn4FtjlenppElW4CeFMj1Y",
  authDomain: "simple-firebase-b65f3.firebaseapp.com",
  projectId: "simple-firebase-b65f3",
  storageBucket: "simple-firebase-b65f3.firebasestorage.app",
  messagingSenderId: "54235336441",
  appId: "1:54235336441:web:bf0501afb3c7963031dc28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;