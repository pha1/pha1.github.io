$(document).ready(function()
{
    $("#orderResults").append("<h2>Review Your Order </h2>" + "<hr>" + 
        "<p>Chemical guys: Mr Pink Foaming Car Wash Soap</p><p class='costReview'><b>$12.74 x " + localStorage.getItem("prod1") + "</b></p>" +
        "<p>Meguiar's Ultimate Wash & Wax</p><p class='costReview'><b>$12.99 x " + localStorage.getItem("prod2") + "</b></p>" +
        "<p>Grip Premium XL Plush Drying Towel</p><p class='costReview'><b>$12.99 x " + localStorage.getItem("prod3") + "</b></p>" +
        "<p>2-in-1 Microfiber Car Wash Mop Mitt</p><p class='costReview'><b>$18.99 x " + localStorage.getItem("prod4") + "</b></p>" +
        "<p>Jay Leno's Garage Tire Shine</p><p class='costReview'><b>$13.99 x " + localStorage.getItem("prod5") + "</b></p>" +
        "<hr>" + 
        "<p><b>SubTotal = " + localStorage.getItem("subtotal") + "</b></p>" + 
        "<p><b>Sales Tax (15%) = " + localStorage.getItem('tax') + "</b></p>" +
        "<p><b>Total Cost = " + localStorage.getItem("total") + "</b></p>" +
        "<form action='billingInformation.html'><input type='submit' value='Confirm Order' name='confirm' id='confirm'></form>" +
        "<form action='shop.html'><input type='submit' value='Cancel' name='cancel' id='cancel'></form>"
    );
});