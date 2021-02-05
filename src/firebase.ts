import * as firebase from "firebase/app";
import "firebase/messaging";
import { configFirebase } from "./context/Typeo";

const config: configFirebase = {
  apiKey: "AIzaSyDI1m36PnfS-rCYb5T34GTUuBAtPV6U7sk",
  authDomain: "expense-tracker-app-pwa.firebaseapp.com",
  databaseURL: "https://expense-tracker-app-pwa.firebaseio.com",
  projectId: "expense-tracker-app-pwa",
  storageBucket: "expense-tracker-app-pwa.appspot.com",
  messagingSenderId: "858359331296",
  appId: "1:858359331296:web:249fe4c1dca3dfe89fd385",
};
firebase.initializeApp(config);
export default firebase;
