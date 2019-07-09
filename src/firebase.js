import firebase from "firebase";
const {
  REACT_APP_apiKey: apiKey,
  REACT_APP_authDomain: authDomain,
  REACT_APP_databaseURL: databaseURL,
  REACT_APP_projectId: projectId,
  REACT_APP_storageBucket: storageBucket,
  REACT_APP_messagingSenderId: messagingSenderId
} = process.env;

console.log("sjsjd", apiKey);
const config = {
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId
};

firebase.initializeApp(config);
export const firebaseDb = firebase.database();
export default firebase;
