$(document).ready(function()
{
    /* When the user clicks on the submit button for the Billing Page */
    $("#submitBilling").click(function()
    {
        /* The javascript will store values that are currently in the form into variables */
        let firstName = document.getElementById("firstname").value;
        let lastName = document.getElementById("lastname").value;
        let email = document.getElementById("email").value;
        let phone = document.getElementById("phonenum").value;
        let radio = document.querySelector("input[name=payment]:checked").value;

        /* The variables' values are then stored locally */
        localStorage.setItem("bill_first_name", firstName);
        localStorage.setItem("bill_last_name", lastName);
        localStorage.setItem("bill_email_address", email);
        localStorage.setItem("bill_phone_num", phone);
        localStorage.setItem("payment", radio);
    });
});