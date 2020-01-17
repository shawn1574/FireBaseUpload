import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAFhv2ADkOV6v5oyuCGm7-pbDNbQidHkVc",
  authDomain: "everydaydo-494ce.firebaseapp.com",
  databaseURL: "https://everydaydo-494ce.firebaseio.com",
  projectId: "everydaydo-494ce",
  storageBucket: "everydaydo-494ce.appspot.com",
  messagingSenderId: "411935239808",
  appId: "1:411935239808:web:6caa1437612e028e120065",
  measurementId: "G-N0YRHMJFTS"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export var storage = firebase.storage();
