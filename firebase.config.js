
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAuoVNU-GkvYJh7lueVqR5-4nMkH5ZCAIk",
  authDomain: "otp-tintin.firebaseapp.com",
  projectId: "otp-tintin",
  storageBucket: "otp-tintin.appspot.com",
  messagingSenderId: "665880345683",
  appId: "1:665880345683:web:1ea973948202fa80fa5aa6",
  measurementId: "G-XL2634VJ38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase
export const auth = getAuth(app);
