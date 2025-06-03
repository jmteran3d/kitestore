import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCJMS3mskYpk_iwEZkz-MlPal5efC-oIjs",
  authDomain: "kitestore-32c44.firebaseapp.com",
  projectId: "kitestore-32c44",
  storageBucket: "kitestore-32c44.firebasestorage.app",
  messagingSenderId: "688253394641",
  appId: "1:688253394641:web:cccf268639ba1f6146aff0"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
