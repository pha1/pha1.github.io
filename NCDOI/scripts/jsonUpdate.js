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

    firebase.database().ref('users/' + userId).set({
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