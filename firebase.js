import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBbmuAKhTbzwV7FYZBZI2lWVcB0wVdQd5w",
  authDomain: "ubereats-376110.firebaseapp.com",
  projectId: "ubereats-376110",
  storageBucket: "ubereats-376110.appspot.com",
  messagingSenderId: "527481796979",
  appId: "1:527481796979:web:c990a3b37c950f750d2d06",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
export default firebase;
