// Global Variables
let firstName;
let lastName;
let email;
let phone;

let testScript = function()
{

    alert("Hey my script is running!");
}

let displayInfo = function()
{
    firstName = document.getElementById("fname").value;
    lastName = document.getElementById("lname").value;
    email = document.getElementById("email").value;
    phone = document.getElementById("phone").value;

    document.getElementById("form_Info").innerHTML='This is your information!</font>' + '<br>Your name is ' + firstName + ' ' + lastName
     + '<br>Your email address is ' + email + '<br>Your phone number is ' + phone;
}