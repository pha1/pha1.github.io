// Your web app's Firebase configuration

var inspectors = [];

var firebaseConfig = {
    apiKey: "AIzaSyA4UoQh1ErFeB23aUlww4pYCvliXIS6I60",
    authDomain: "inspector-locator-ef89c.firebaseapp.com",
    projectId: "inspector-locator-ef89c",
    storageBucket: "inspector-locator-ef89c.appspot.com",
    messagingSenderId: "253182318432",
    appId: "1:253182318432:web:cd18b909058d28e81ff005",
    measurementId: "G-16PTXW98PR"
    };

    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

    // Initialize variables
const auth = firebase.auth()
const db = firebase.database();

firebase.database().ref('inspectors').once('value',   function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childData = childSnapshot.val();
      inspectors.push(childData);
      // ...
    });
    console.log(inspectors);
  });