const firebase = require('firebase');
// Required for side-effects
require("firebase/firestore");

var firebaseConfig = {
    apiKey: "AIzaSyB4w02JYhaDKbgzCWLhNi5W9rG6bGuHY70",
    authDomain: "backend-lp-2do-parcial.firebaseapp.com",
    projectId: "backend-lp-2do-parcial",
    storageBucket: "backend-lp-2do-parcial.appspot.com",
    messagingSenderId: "1043084069213",
    appId: "1:1043084069213:web:03373875e856e0509d40b4",
    measurementId: "G-0K00HX3FJM"
  };
  // Initialize Firebase

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();

module.exports.db = db;
module.exports.storage = storage;
