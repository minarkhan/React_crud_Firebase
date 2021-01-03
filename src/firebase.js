
import  firebase from "firebase/app";
import 'firebase/database';

var firebaseConfig = {
    apiKey: "AIzaSyAe4zsq0f9vst8WK2ETKXLPVb1-cnZPBWY",
    authDomain: "reactfirebase-f467a.firebaseapp.com",
    databaseURL: "https://reactfirebase-f467a-default-rtdb.firebaseio.com",
    projectId: "reactfirebase-f467a",
    storageBucket: "reactfirebase-f467a.appspot.com",
    messagingSenderId: "877962362654",
    appId: "1:877962362654:web:47521df370329d5efb530f"
  };
  // Initialize Firebase
  var fireDb = firebase.initializeApp(firebaseConfig);


  export default fireDb.database().ref();