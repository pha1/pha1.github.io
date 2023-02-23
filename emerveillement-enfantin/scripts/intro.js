/** This is for the SplashScreen transition out */
let intro = document.querySelector('.intro');
let container = document.querySelector('.blank-container');
let email;
var newEmail;

window.addEventListener('DOMContentLoaded', ()=>{
  setTimeout(()=> {
      container.style.display = 'none';
      intro.style.top = '-100vh';
  }, 2000);
})

/** Submit Button */
let button = document.querySelector('.button');
let buttonText = document.querySelector('.tick');

const tickMark = "<svg width=\"58\" height=\"45\" viewBox=\"0 0 58 45\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"#fff\" fill-rule=\"nonzero\" d=\"M19.11 44.64L.27 25.81l5.66-5.66 13.18 13.18L52.07.38l5.65 5.65\"/></svg>";

buttonText.innerHTML = "Submit";

document.getElementById ("btn").addEventListener ("click", submitEmail, false);

function submitEmail() {
  email = document.getElementById('email').value;

  if (document.getElementById('email').checkValidity()) {
    add_email();
  }
  document.getElementById('emailLabel').innerHTML = "Please enter your email here:";
}


/** Firebase Realtime Database */

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZ4S_UVpunu3uSDZoN2oINdsTOpV4zbbQ",
  authDomain: "emerveillement-enfantin.firebaseapp.com",
  databaseURL: "https://emerveillement-enfantin-default-rtdb.firebaseio.com",
  projectId: "emerveillement-enfantin",
  storageBucket: "emerveillement-enfantin.appspot.com",
  messagingSenderId: "345935054832",
  appId: "1:345935054832:web:3bb68f0806f610a823bf35",
  measurementId: "G-FL14ENES3T"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// Add this user to Firebase Database
var database_ref = db.ref();

function add_email() {

  newEmail = true;

  firebase.database().ref('email-list').once('value',   function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childKey = childSnapshot.key;
      var childData = childSnapshot.val();
      console.log(childData + ", " + email);
      if (childData === email) {
        newEmail = false;
        document.getElementById('emailLabel').innerHTML = "This email is already added!";
      }
    });
    if (newEmail) {
      database_ref.child('email-list').push(email);
      document.getElementById('emailLabel').innerHTML = email + " added successfully!";
    }

    if (newEmail) {
        buttonText.innerHTML = tickMark;
        button.classList.toggle('button__circle');
        document.getElementById("btn").onclick = null;
        document.getElementById('btn').disabled = true;
    }
  });
}