$(document).ready(function()
{
    $("#submitBilling").click(function()
    {
        let firstName = document.getElementById("firstname").value;
        let lastName = document.getElementById("lastname").value;
        let email = document.getElementById("email").value;
        let phone = document.getElementById("phonenum").value;
        let radio = document.querySelector("input[name=payment]:checked").value;

        localStorage.setItem("bill_first_name", firstName);
        localStorage.setItem("bill_last_name", lastName);
        localStorage.setItem("bill_email_address", email);
        localStorage.setItem("bill_phone_num", phone);
        localStorage.setItem("payment", radio);
    });
});