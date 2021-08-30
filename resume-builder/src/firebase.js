import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAJV71Wt-PIFPdn8Kvp79gQQfNQ57qdd3s",
  authDomain: "resume-b233e.firebaseapp.com",
  projectId: "resume-b233e",
  storageBucket: "resume-b233e.appspot.com",
  messagingSenderId: "605181135172",
  appId: "1:605181135172:web:3e6f23102605652cbf6f11"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
