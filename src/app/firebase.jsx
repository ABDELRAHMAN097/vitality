// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDs_Oz72VaDyy7OqRdKu1UPGuifrQFmUM",
  authDomain: "vitality-6ccdb.firebaseapp.com",
  projectId: "vitality-6ccdb",
  storageBucket: "vitality-6ccdb.firebasestorage.app",
  messagingSenderId: "903067779080",
  appId: "1:903067779080:web:0494cf85cff39e27b4d1bd",
  measurementId: "G-7852Q6SVSL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);