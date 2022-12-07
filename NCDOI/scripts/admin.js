// Your web app's Firebase configuration
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
  const database = firebase.database()
  
  // Set up our register function
  function register () {
    // Get all our input fields
    email = document.getElementById('email').value
    password = document.getElementById('password').value
    full_name = document.getElementById('full_name').value
  
    // Validate input fields
    if (validate_email(email) == false || validate_password(password) == false) {
      alert('Email or Password is Outta Line!!')
      return
      // Don't continue running the code
    }
   
    // Move on with Auth
    auth.createUserWithEmailAndPassword(email, password)
    .then(function() {
      // Declare user variable
      var user = auth.currentUser;
  
      // Add this user to Firebase Database
      var database_ref = database.ref();
  
      // Create User data
      var user_data = {
        email : email,
        full_name : full_name,
        last_login : Date.now()
      }
  
      // Push to Firebase Database
      database_ref.child('users/' + user.uid).set(user_data)
  
      // DOne
      alert('User Created')
      /////////////////////////////////////////////////////////////////////redirect to login page
      window.location.href = "login.html";
    })
    .catch(function(error) {
      // Firebase will use this to alert of its errors
      var error_code = error.code
      var error_message = error.message
  
      alert(error_message)
    })
  }
  
  // Set up our login function
  function login () {
    // Get all our input fields
    email = document.getElementById('email').value
    password = document.getElementById('password').value
  
    // Validate input fields
    if (validate_email(email) == false || validate_password(password) == false) {
      alert('Email or Password does not meet requirments')
      return
      // Don't continue running the code
    }
  
    auth.signInWithEmailAndPassword(email, password)
    .then(function() {
      // Declare user variable
      var user = auth.currentUser
  
      // Add this user to Firebase Database
      var database_ref = database().ref()
  
      // Create User data
      var user_data = {
        last_login : Date.now()
      }
  
      // Push to Firebase Database
      database_ref.child('users/' + user.uid).update(user_data)
  
      // DOne
      alert('User Logged In')
      //////////////////////////////////////////////////////////////////////redirect to admin.html
      window.location.href = "admin.html";
  
    })
    .catch(function(error) {
      // Firebase will use this to alert of its errors
      var error_code = error.code
      var error_message = error.message
  
      alert(error_message)
    })
  }
  
  
  
  
  // Validate Functions
  function validate_email(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (expression.test(email) == true) {
      // Email is good
      return true
    } else {
      // Email is not good
      return false
    }
  }
  
  function validate_password(password) {
    // Firebase only accepts lengths greater than 6
    if (password < 6) {
      return false
    } else {
      return true
    }
  }
  
  function validate_field(field) {
    if (field == null) {
      return false
    }
  
    if (field.length <= 0) {
      return false
    } else {
      return true
    }
  }
  var x;

  function red1(){
    x = 1;
  }

  function red2(){
    x = 2;
  }


  var key = "123456";
  var userKey = document.getElementById('adminKey').value;
  function validateKey(){
    if(userKey === key && x === 1){
      //redirect to login page
      window.location.href = "login.html";
    }
    else if(userKey === key && x === 2){
      //redirect to register page
      window.location.href = "register";
    }
    else{
      alert('User was not authenticated');
    }
  }