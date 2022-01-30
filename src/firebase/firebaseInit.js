import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD7_4o0hpaYbmda-nR6ROiQRQh2js_ZMpI",
    authDomain: "my-invoice-app-f7ecc.firebaseapp.com",
    projectId: "my-invoice-app-f7ecc",
    storageBucket: "my-invoice-app-f7ecc.appspot.com",
    messagingSenderId: "485809309144",
    appId: "1:485809309144:web:f27fb52c1af08cfa971ead"
  };

let firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();