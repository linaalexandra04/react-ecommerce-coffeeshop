// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXpyH13rn3CJ8eQ3Gn7g2PcZ5Fg4ERvQs",
  authDomain: "coffee-shop-91c91.firebaseapp.com",
  projectId: "coffee-shop-91c91",
  storageBucket: "coffee-shop-91c91.appspot.com",
  messagingSenderId: "1057395904433",
  appId: "1:1057395904433:web:e51bd97c5d7f6005147790",
  measurementId: "G-2BGZ751Q19"
};

// Initialize Firebase
const appfirebase = initializeApp(firebaseConfig);
export default appfirebase