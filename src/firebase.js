import firebase from "firebase";
const config = {
  apiKey: "AIzaSyB4c-dlOic0fYfcCUwNbfDtwxj-QDcujOA",
  authDomain: "hercone-8025f.firebaseapp.com",
  databaseURL: "https://hercone-8025f.firebaseio.com",
  projectId: "hercone-8025f",
  storageBucket: "hercone-8025f.appspot.com",
  messagingSenderId: "329151475948"
};
firebase.initializeApp(config);
export const firebaseDb = firebase.database();
export default firebase;
