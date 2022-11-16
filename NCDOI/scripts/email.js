src="https://smtpjs.com/v3/smtp.js";
src="inspector.js";
var emails;

function emailList() {
  console.log("kek");
  
    var selectedValues = $('input.chk:checked').toArray().map(function(chk) {
      return $(chk).val();
    });
  
    console.log(selectedValues.join());
    emails = selectedValues.join();
    console.log(emails);
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
    Body : "sdolkhgvdsriuogfhesuivwesh"
  }).then(
    message => alert(message)
);
  }