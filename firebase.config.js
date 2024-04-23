
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBqJweKkpK6hBzZGpY5x7F3No6UHVZlrL4",
  authDomain: "otp-tintin-54584.firebaseapp.com",
  projectId: "otp-tintin-54584",
  storageBucket: "otp-tintin-54584.appspot.com",
  messagingSenderId: "771441886641",
  appId: "1:771441886641:web:47db5bd0bfbcefe07d6990",
  measurementId: "G-7NBKJ9M2Q6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase
export const auth = getAuth(app);
