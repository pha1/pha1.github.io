src = "array.js";
// Global Variables
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

 // Firebase Config Information
var firebaseConfig = {
    apiKey: "AIzaSyA4UoQh1ErFeB23aUlww4pYCvliXIS6I60",
    authDomain: "inspector-locator-ef89c.firebaseapp.com",
    projectId: "inspector-locator-ef89c",
    storageBucket: "inspector-locator-ef89c.appspot.com",
    messagingSenderId: "253182318432",
    appId: "1:253182318432:web:cd18b909058d28e81ff005",
    measurementId: "G-16PTXW98PR"
    };

/**
 * This function accesses the database and searches for the CEO ID
 * of an inspector, retrieves the id of the data to remove it from the 
 * database
 */
function deleteJSON(){
    var userId = 0;
    ceoId = parseInt(document.getElementById("CEO ID DELETE").value);
    for(var i = 0; i < inspectors.length; i++) {
        if(ceoId === parseInt(inspectors[i]["CEO ID"])){
            userId = i;
            console.log(userId);
        }
       
    } 
    if(userId != 0){
        let userRef = firebase.database().ref('inspectors/' + userId);
        console.log("that shit gone");
    }
    else{
        console.log("could not find user");
        //alert could not find guy
    }
    userRef.remove()
}

/**
 * This function accesses the Firebase Real-Time Database and 
 * adds a new inspector to the database
 */
function addJSON(){

    // Get the form data
    ceoId = document.getElementById("CEO ID").value;
    firstName = document.getElementById("First Name").value;
    lastName = document.getElementById("Last Name").value;
    certNo = document.getElementById("Cert No").value;
    type = document.getElementById("Type").value;
    trade = document.getElementById("Trade").value;
    level = document.getElementById("Level").value;
    expDate = document.getElementById("Exp Date").value;
    employer = document.getElementById("Employer").value;
    empPhone = document.getElementById("Emp Phone").value;
    county = document.getElementById("County").value;
    address = document.getElementById("Address").value;
    city = document.getElementById("City").value;
    state = document.getElementById("State").value;
    zipCode = document.getElementById("Zip Code").value;
    email = document.getElementById("Primary contact email").value;

    // Method to add the inspector information
    firebase.database().ref('inspectors/' + ceoId).set({
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

// Show the Add Form
function showDiv1() {
    var x = document.getElementById("add");
    if (window.getComputedStyle(x).display === "none") {
        document.getElementById('add').style.display = "block";
    } else {
        document.getElementById('add').style.display = "none";
    }
}

// Show the Delete Form
 function showDiv2() {
    var x = document.getElementById("delete");
    if (window.getComputedStyle(x).display === "none") {
        document.getElementById('delete').style.display = "block";
    } else {
        document.getElementById('delete').style.display = "none";
    }
}