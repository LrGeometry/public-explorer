import firebase from "firebase";
const {
  REACT_APP_APIKEY: apiKey,
  REACT_APP_AUTHDOMAIN: authDomain,
  REACT_APP_DBURL: databaseURL,
  REACT_APP_PROJECTID: projectId,
  REACT_APP_STORAGEBUCKET: storageBucket,
  REACT_APP_MESSAGINGSENDERID: messagingSenderId
} = process.env;

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
