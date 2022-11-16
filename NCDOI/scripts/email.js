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
    sendEmail();
  };

function sendEmail() {
    
    
    Email.send({
      Host: "smtp.gmail.com",
      Username: "inspectorlocator.noreply@gmail.com",
      Password: "securityMatters",
      To: emails,
      From: "inspectorlocator.noreply@gmail.com",
      Subject: "TEST",
      Body: "Well that was easy!!",
    })
      .then(function (message) {
        alert("mail sent successfully")
      });
  }