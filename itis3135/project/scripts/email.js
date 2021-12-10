$(document).ready(function()
{
    /* Javascript appends the following text into the element with the id of "emailConfirm" on the Email Confirmation Page */
    /* The information is gathered from the form on the Contact Us page. */
    $("#emailConfirm").append(
        "<h2> Thank you for sending an email " + localStorage.getItem("first_name") + "!</h2>" +
        "<p>This is just a confirmation page to show that you have sent an email! We would like for you to review the information that was entered in case of any issues:</p>" +
        "<p>Name: " + localStorage.getItem("first_name") + " " + localStorage.getItem("last_name") + "</p>" +
        "<p>Email Address: " + localStorage.getItem("email_address") + "</p>" +
        "<p>Phone Number: " + localStorage.getItem("phone_num") + "</p>" +
        "<form action='index.html'><input type='submit' value='Return to Homepage' id='emailHome'></form>"
    );
});