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

function deleteJSON(){

}
function addJSON(){

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

function showDiv1() {
    document.getElementById('add').style.display = "block";
}

 function showDiv2() {
    document.getElementById('edit').style.display = "block";
}