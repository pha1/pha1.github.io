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
      SecureToken: "ce3f016a-55bc-4ab9-bbe0-47807fb4e810",
      To: "'" + emails + "'",
      From: "inspectorlocator.noreply@gmail.com",
      Subject: "TEST",
      Body: "Well that was easy!!",
    })
      .then(function (message) {
        alert("mail sent successfully")
      });
  }