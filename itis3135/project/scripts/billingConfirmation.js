$(document).ready(function()
{
    $("#billConfirm").append(
        "<h2> Thank you for purchasing from Quality Auto Wash, " + localStorage.getItem("first_name") + "!</h2>" +
        "<p>This is just a confirmation page to show that you have made a purchase with us! We would like for you to review the information that was entered in case of any issues:</p>" +
        "<p>Name: " + localStorage.getItem("bill_first_name") + " " + localStorage.getItem("bill_last_name") + "</p>" +
        "<p>Email Address: " + localStorage.getItem("bill_email_address") + "</p>" +
        "<p>Phone Number: " + localStorage.getItem("bill_phone_num") + "</p>" +
        "<p>Payment Type: " + localStorage.getItem("payment") + "</p>" + 
        "<p>Total Cost: " + localStorage.getItem("total") + "</p>" +
        "<form action='index.html'><input type='submit' value='Return to Homepage' id='billHome'></form>"
    );
});