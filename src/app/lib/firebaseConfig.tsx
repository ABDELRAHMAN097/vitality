import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDDs_Oz72VaDyy7OqRdKu1UPGuifrQFmUM",
  authDomain: "vitality-6ccdb.firebaseapp.com",
  databaseURL: "https://vitality-6ccdb-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "vitality-6ccdb",
  storageBucket: "vitality-6ccdb.appspot.com",
  messagingSenderId: "903067779080",
  appId: "1:903067779080:web:0494cf85cff39e27b4d1bd",
  measurementId: "G-7852Q6SVSL",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
