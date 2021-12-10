$(document).ready(function()
{
    /* When you click on the submit button for the email */
    $("#submitEmail").click(function()
    {
        /* Variables store the information that is provided in the email form */
        let firstName = document.getElementById("firstname").value;
        let lastName = document.getElementById("lastname").value;
        let email = document.getElementById("email").value;
        let phone = document.getElementById("phonenum").value;

        /* Then locally stored into another variable */
        localStorage.setItem("first_name", firstName);
        localStorage.setItem("last_name", lastName);
        localStorage.setItem("email_address", email);
        localStorage.setItem("phone_num", phone);
    });
});