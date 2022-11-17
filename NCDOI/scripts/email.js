src="https://smtpjs.com/v3/smtp.js";
src="inspector.js";
var emails;
var userName = '';
var address = '';
var permitNumber = '';
var phoneNumber = '';
var userEmail = '';
var date = '';
var comments = 'ps. ';

function emailList() {
  console.log("kek");
  
    var selectedValues = $('input.chk:checked').toArray().map(function(chk) {
      return $(chk).val();
    });
  
    console.log(selectedValues.join());
    emails = selectedValues.join();
    console.log(emails);

    userName = document.getElementById('name').value.toString();
    address = document.getElementById('address').value.toString();
    permitNumber = document.getElementById('permitNumber').value.toString();
    phoneNumber = document.getElementById('phoneNumber').value.toString();
    userEmail = document.getElementById('email').value.toString();
    date = document.getElementById('dateSelect').value.toString();
    comments += document.getElementById('comments').value.toString();
    if(comments.length === 3){
      comments = "";
    }
    console.log( "Hello this is " + userName + ", I would like to hire you to inspect my new construction at " + address + " by no later than " + date +
    "\n Contact information: \n Email: " + userEmail + "\n Phone Number: " + phoneNumber + " \n Permit Number: " + permitNumber + " \n Thank you. \n" + comments );
    sendEmail();
  };

function sendEmail() {

  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "inspectorlocator.noreply@gmail.com",
    Password : "0B48AF72794423808FC6B34FE7EFB909FA3A",
    To : emails,
    From : "inspectorlocator.noreply@gmail.com",
    Subject : "TEST",
    Body : "Hello this is " + userName + ", I would like to hire you to inspect my new construction at " + address + " by no later than " + date +
      "\n Contact information: \n Email: " + userEmail + "\n Phone Number: " + phoneNumber + " \n Permit Number: " + permitNumber + " \n Thank you. \n" + comments 
  }).then(
    message => alert('The inspectors that you have selected have been emailed your information')
);
  }