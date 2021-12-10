$(document).ready(function()
{
    $.ajax({
        type: "get",
        url:  "json_files/products.json",
        beforeSend: function() {
            $("#products").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            $("#products").html("");
            $.each(data, function() {
                $.each(this, function(key, value)
                {
                    let id_quantity = key + 1;
                    $("#products").append
                    ("<hr>" +
                        "<h3>" + value.name + "</h3>" +
                    "<img src= images/" + value.image + "><br>" +
                           "<p>" + value.description + "</p>" + "<p id='cost'><b>" + value.cost + "</b></p>"
                           + "<div class='shopButtons'><img src='images/minus_sign.jpg' onclick='decreaseValue" + id_quantity + "()'>" + "<input type='text' id='quantity" + id_quantity + "' name='quantity' value='0'>" + 
                           "<img src='images/plus_sign.jpg' onclick='increaseValue" + id_quantity + "()'></div>" + "<hr>");
                })
            });
        }
    });
});

let num = 0;
let subTotal = 0;
let total = 0;

let mrpink = 12.74;
let meguiar = 12.99;
let grip = 12.99;
let mop_mitt = 18.99;
let shine = 13.99;
let tax = 0;

let totalCost = function()
{
    let prod1, prod2, prod3, prod4, prod5 = 0;

    prod1 = parseFloat(document.getElementById("quantity1").value) * mrpink;
    prod2 = parseFloat(document.getElementById("quantity2").value) * meguiar;
    prod3 = parseFloat(document.getElementById("quantity3").value) * grip;
    prod4 = parseFloat(document.getElementById("quantity4").value) * mop_mitt;
    prod5 = parseFloat(document.getElementById("quantity5").value) * shine;

    subTotal = parseFloat(prod1) + parseFloat(prod2) + parseFloat(prod3) + parseFloat(prod4) + parseFloat(prod5);
    tax = subTotal * .15;
    total = subTotal + tax;

    let quantityOfProd = document.getElementById("quantity1").value;
    localStorage.setItem("prod1", quantityOfProd);

    quantityOfProd = document.getElementById("quantity2").value;
    localStorage.setItem("prod2", quantityOfProd);

    quantityOfProd = document.getElementById("quantity3").value;
    localStorage.setItem("prod3", quantityOfProd);

    quantityOfProd = document.getElementById("quantity4").value;
    localStorage.setItem("prod4", quantityOfProd);

    quantityOfProd = document.getElementById("quantity5").value;
    localStorage.setItem("prod5", quantityOfProd);

    localStorage.setItem("subtotal", subTotal.toFixed(2));
    localStorage.setItem("tax", tax.toFixed(2));
    localStorage.setItem("total", total.toFixed(2));


    document.getElementById("totalCostDisplay").value = total.toFixed(2);
}

let decreaseValue1 = function()
{
    num = document.getElementById("quantity1").value;
    num = num - 1;
    if (num < 0)
    {
        num = 0;
    }
    document.getElementById("quantity1").value = num;
    totalCost();
}

let increaseValue1 = function()
{
    num = document.getElementById("quantity1").value;
    num = parseInt(num) + 1;

    document.getElementById("quantity1").value = num;
    totalCost();
}

let decreaseValue2 = function()
{
    num = document.getElementById("quantity2").value;
    num = num - 1;
    if (num < 0)
    {
        num = 0;
    }
    document.getElementById("quantity2").value = num;
    totalCost();
}

let increaseValue2 = function()
{
    num = document.getElementById("quantity2").value;
    num = parseInt(num) + 1;

    document.getElementById("quantity2").value = num;
    totalCost();
}

let decreaseValue3 = function()
{
    num = document.getElementById("quantity3").value;
    num = num - 1;
    if (num < 0)
    {
        num = 0;
    }
    document.getElementById("quantity3").value = num;
    totalCost();
}

let increaseValue3 = function()
{
    num = document.getElementById("quantity3").value;
    num = parseInt(num) + 1;

    document.getElementById("quantity3").value = num;
    totalCost();
}

let decreaseValue4 = function()
{
    num = document.getElementById("quantity4").value;
    num = num - 1;
    if (num < 0)
    {
        num = 0;
    }
    document.getElementById("quantity4").value = num;
    totalCost();
}

let increaseValue4 = function()
{
    num = document.getElementById("quantity4").value;
    num = parseInt(num) + 1;

    document.getElementById("quantity4").value = num;
    totalCost();
}

let decreaseValue5 = function()
{
    num = document.getElementById("quantity5").value;
    num = num - 1;
    if (num < 0)
    {
        num = 0;
    }
    document.getElementById("quantity5").value = num;
    totalCost();
}

let increaseValue5 = function()
{
    num = document.getElementById("quantity5").value;
    num = parseInt(num) + 1;

    document.getElementById("quantity5").value = num;
    totalCost();
}