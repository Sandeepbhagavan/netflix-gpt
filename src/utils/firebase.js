// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBF4CC5GOGe_oioLoQ37uh6_NIYCh3u5DQ",
  authDomain: "netflixgpt-7d19b.firebaseapp.com",
  projectId: "netflixgpt-7d19b",
  storageBucket: "netflixgpt-7d19b.appspot.com",
  messagingSenderId: "1054226030238",
  appId: "1:1054226030238:web:b3726a221090d06b21258f",
  measurementId: "G-CTWJ6F4DK2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);