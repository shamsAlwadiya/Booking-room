// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider ,GithubAuthProvider,signInWithPopup} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBNs23xLWLZjNDRYJ-aSVb-pMhpX52Tkzc",
  authDomain: "booking-room-7115d.firebaseapp.com",
  projectId: "booking-room-7115d",
  storageBucket: "booking-room-7115d.firebasestorage.app",
  messagingSenderId: "126555414608",
  appId: "1:126555414608:web:9b0ae9db0e5cc8ee0fb155",
  measurementId: "G-ZNJLCQHMV3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const githubProvider = new GithubAuthProvider();
export const provider = new GoogleAuthProvider();
