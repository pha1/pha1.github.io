src = "array.js";

var ceoId;
var firstName;
var lastName;
var certNo;
var type;
var trade;
var level;
var expDate;
var employer;
var empPhone;
var county;
var address;
var city;
var state;
var zipCode;
var email;

var firebaseConfig = {
    apiKey: "AIzaSyA4UoQh1ErFeB23aUlww4pYCvliXIS6I60",
    authDomain: "inspector-locator-ef89c.firebaseapp.com",
    projectId: "inspector-locator-ef89c",
    storageBucket: "inspector-locator-ef89c.appspot.com",
    messagingSenderId: "253182318432",
    appId: "1:253182318432:web:cd18b909058d28e81ff005",
    measurementId: "G-16PTXW98PR"
    };

firebase.initializeApp(firebaseConfig);

    // Initialize variables
const auth = firebase.auth()
const db = firebase.database();

function deleteJSON(){

}
function addJSON(){

    ceoId = document.getElementById("CEO ID");
    firstName = document.getElementById("First Name");
    lastName = document.getElementById("Last Name");
    certNo = document.getElementById("Cert No");
    type = document.getElementById("Type");
    trade = document.getElementById("Trade");
    level = document.getElementById("Level");
    expDate = document.getElementById("Exp Date");
    employer = document.getElementById("Employer");
    empPhone = document.getElementById("Emp Phone");
    county = document.getElementById("County");
    address = document.getElementById("Address");
    city = document.getElementById("City");
    state = document.getElementById("State");
    zipCode = document.getElementById("Zip Code");
    email = document.getElementById("Primary contact email");

    firebase.database().ref('inspectors/' + (inspectors.length+1)).set({
        ["CEO ID"]: ceoId,
        ["First Name"]: firstName,
        ["Last Name"]: lastName,
        ["Cert No"]:certNo,
        Type: type,
        Trade: trade,
        Level: level,
        ["Exp Date"]: expDate,
        Employer: employer,
        ["Emp Phone"]: empPhone,
        County: county,
        Address: address,
        City: city,
        State: state,
        ["Zip Code"]: zipCode,
        Email: email
    });
}

function showDiv1() {
    document.getElementById('add').style.display = "block";
}

 function showDiv2() {
    document.getElementById('edit').style.display = "block";
}