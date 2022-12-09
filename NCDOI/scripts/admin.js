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

  var messageBox = document.getElementById('errorMessage');
  
  // Set up our register function
  function register () {
    // Get all our input fields
    email = document.getElementById('email').value
    password = document.getElementById('password').value
    full_name = document.getElementById('full_name').value
  
    // Validate input fields
    if (validate_email(email) == false || validate_password(password) == false) {
      messageBox.innerHTML = 'Email or Password does not meet requirments';
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
      //alert('User Created')
      "use strict";
      window.$("#overlay").fadeIn();
      window.$("#contactMessage").show();
      window.$("#contactMessage").animate({top: document.documentElement.scrollTop});
      })
    .catch(function(error) {
      // Firebase will use this to alert of its errors
      var error_code = error.code
      var error_message = error.message

      messageBox.innerHTML = error_message;
    })
  }
  
  // Set up our login function
  function login () {
    // Get all our input fields
    email = document.getElementById('email').value
    password = document.getElementById('password').value
  
    // Validate input fields
    if (validate_email(email) == false || validate_password(password) == false) {
      messageBox.innerHTML = 'Email or Password does not meet requirments';
      return
      // Don't continue running the code
    }
  
    auth.signInWithEmailAndPassword(email, password)
    .then(function() {
      // Declare user variable
      var user = auth.currentUser
  
      // Add this user to Firebase Database
      var database_ref = database.ref()
  
      // Create User data
      var user_data = {
        last_login : Date.now()
      }
  
      // Push to Firebase Database
      database_ref.child('users/' + user.uid).update(user_data)
  
      // Done
      //alert('User Logged In')
      showMessage();
    })
    .catch(function(error) {
      // Firebase will use this to alert of its errors
      var error_code = error.code
      var error_message = error.message
  
      messageBox.innerHTML = error_message;
    })
  }

  function showMessage() {
    "use strict";
      window.$("#overlay").fadeIn();
      window.$("#contactMessage").show();
      window.$("#contactMessage").animate({top: document.documentElement.scrollTop});
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
  
  function validateKey(){
    var userKey = document.getElementById('adminKey').value;
    if(userKey === key && x === 1){
      //redirect to login page
      window.location.href="https://pha1.github.io/NCDOI/login.html";
    }
    else if(userKey === key && x === 2){
      //redirect to register page
      window.location.href="https://pha1.github.io/NCDOI/register.html";
    }
    else{
      messageBox.innerHTML = 'User was not authenticated. Please enter valid Admin Key.';
    }
  }

  /**
   * This function redirects to the Admin Page
   */
  function redirectAdmin() {
    window.location.href = "https://pha1.github.io/NCDOI/admin.html";
  }

  /**
   * This function redirects to Login Page
   */
  function redirectLogin() {
    window.location.href="https://pha1.github.io/NCDOI/login.html";
  }