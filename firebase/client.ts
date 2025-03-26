// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyDLeto98_MLrkgLtqdCnrpuv1RF_F3VKhc",

  authDomain: "prepgenius-79463.firebaseapp.com",

  databaseURL: "https://prepgenius-79463-default-rtdb.europe-west1.firebasedatabase.app",

  projectId: "prepgenius-79463",

  storageBucket: "prepgenius-79463.firebasestorage.app",

  messagingSenderId: "410672295672",

  appId: "1:410672295672:web:ab1ffe1f78a9d41483550d",

  measurementId: "G-06ZCS4WXBZ"

};



// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);