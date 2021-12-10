$(document).ready(function()
{
    $("#submitEmail").click(function()
    {
        let firstName = document.getElementById("firstname").value;
        let lastName = document.getElementById("lastname").value;
        let email = document.getElementById("email").value;
        let phone = document.getElementById("phonenum").value;

        localStorage.setItem("first_name", firstName);
        localStorage.setItem("last_name", lastName);
        localStorage.setItem("email_address", email);
        localStorage.setItem("phone_num", phone);
    });
});