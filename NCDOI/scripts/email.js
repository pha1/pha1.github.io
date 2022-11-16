src="https://smtpjs.com/v3/smtp.js";
src="inspector.js";
function sendEmail() {
    
    
    
    
    Email.send({
      Host: "smtp.gmail.com",
      Username: "inspectorlocator.noreply@gmail.com",
      Password: "atmejhsiuvnsplof",
      To: ,
      From: "inspectorlocator.noreply@gmail.com",
      Subject: "TEST",
      Body: "Well that was easy!!",
    })
      .then(function (message) {
        alert("mail sent successfully")
      });
  }