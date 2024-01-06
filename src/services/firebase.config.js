// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaLHxnSQISuBoLwAs5w1Qa7TX5rmYOHSY",
  authDomain: "works-9f72a.firebaseapp.com",
  projectId: "works-9f72a",
  storageBucket: "works-9f72a.appspot.com",
  messagingSenderId: "681871100798",
  appId: "1:681871100798:web:84740469ccef5ba627812f",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

// export const db = getFirestore(app);

firebase.initializeApp(firebaseConfig);

export default firebase;
