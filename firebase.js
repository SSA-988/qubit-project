import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDRYFE99cAmj895MBYQgwMLskeLYkf00pE",
  authDomain: "whatsapp-native-ff5e5.firebaseapp.com",
  projectId: "whatsapp-native-ff5e5",
  storageBucket: "whatsapp-native-ff5e5.appspot.com",
  messagingSenderId: "749974549675",
  appId: "1:749974549675:web:6b5ea70473c5c8fbcc33ee",
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
