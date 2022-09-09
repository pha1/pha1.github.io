/* JavaScript file for Calculator Try */

// Global variables
let placeholder;
let currentValue;
let newNum = 0;
let functionNum = 0;
let functionString = "default";
let functionKeyPressed = false;
let equalKeyPressed = false;
let countKeys = 0;
const numbers = [];

let zeroKey = function()
{

    if(!(document.getElementById("calculator-display").value === "0") && !(functionKeyPressed) && !(equalKeyPressed) )
    {
        placeholder = document.getElementById("calculator-display").value;
        placeholder = placeholder + "0";
        document.getElementById("calculator-display").value = placeholder;
    }
    else if (functionKeyPressed || equalKeyPressed) {
        document.getElementById("calculator-display").value = 0;
        functionKeyPressed = false;
        equalKeyPressed = false;
    }
    else
    {
        document.getElementById("calculator-display").value = "0";
    }
    countKeys++;
}

let oneKey = function()
{
    // Initial state sets to 1
    if(document.getElementById("calculator-display").value === "0" || countKeys == 0)
    {
        document.getElementById("calculator-display").value = "1";
    }
    // If not the initial state, add 1 to the existing number
    else if (functionKeyPressed || equalKeyPressed)
    {
        document.getElementById("calculator-display").value = "1";
        functionKeyPressed = false;
        equalKeyPressed = false;
    }
    else
    {
        placeholder = document.getElementById("calculator-display").value;
        placeholder = placeholder + "1";
        document.getElementById("calculator-display").value = placeholder;
    }
    countKeys++;
}

let twoKey = function()
{
    if(document.getElementById("calculator-display").value === "0" || countKeys == 0)
    {
        document.getElementById("calculator-display").value = "2";
    }
    else if (functionKeyPressed || equalKeyPressed) {
        document.getElementById("calculator-display").value = "2";
        functionKeyPressed = false;
        equalKeyPressed = false;
    }
    else
    {
        placeholder = document.getElementById("calculator-display").value;
        placeholder = placeholder + "2";
        document.getElementById("calculator-display").value = placeholder;
    }
    countKeys++;
}

let threeKey = function()
{
    if(document.getElementById("calculator-display").value === "0" || countKeys == 0)
    {
        document.getElementById("calculator-display").value = "3";
    }
    else if (functionKeyPressed || equalKeyPressed) {
        document.getElementById("calculator-display").value = "3";
        functionKeyPressed = false;
        equalKeyPressed = false;
    }
    else
    {
        placeholder = document.getElementById("calculator-display").value;
        placeholder = placeholder + "3";
        document.getElementById("calculator-display").value = placeholder;
    }
    countKeys++;
}

let fourKey = function()
{
    if(document.getElementById("calculator-display").value === "0" || countKeys == 0)
    {
        document.getElementById("calculator-display").value = "4";
    }
    else if (functionKeyPressed || equalKeyPressed) {
        document.getElementById("calculator-display").value = "4";
        functionKeyPressed = false;
        equalKeyPressed = false;
    }
    else
    {
        placeholder = document.getElementById("calculator-display").value;
        placeholder = placeholder + "4";
        document.getElementById("calculator-display").value = placeholder;
    }
    countKeys++;
}

let fiveKey = function()
{
    if(document.getElementById("calculator-display").value === "0" || countKeys == 0)
    {
        document.getElementById("calculator-display").value = "5";
    }
    else if (functionKeyPressed || equalKeyPressed) {
        document.getElementById("calculator-display").value = "5";
        functionKeyPressed = false;
        equalKeyPressed = false;
    }
    else
    {
        placeholder = document.getElementById("calculator-display").value;
        placeholder = placeholder + "5";
        document.getElementById("calculator-display").value = placeholder;
    }
    countKeys++;
}

let sixKey = function()
{
    if(document.getElementById("calculator-display").value === "0" || countKeys == 0)
    {
        document.getElementById("calculator-display").value = "6";
    }
    else if (functionKeyPressed || equalKeyPressed) {
        document.getElementById("calculator-display").value = "6";
        functionKeyPressed = false;
        equalKeyPressed = false;
    }
    else
    {
        placeholder = document.getElementById("calculator-display").value;
        placeholder = placeholder + "6";
        document.getElementById("calculator-display").value = placeholder;
    }
    countKeys++;
}

let sevenKey = function()
{
    if(document.getElementById("calculator-display").value === "0" || countKeys == 0)
    {
        document.getElementById("calculator-display").value = "7";
    }
    else if (functionKeyPressed || equalKeyPressed) {
        document.getElementById("calculator-display").value = "7";
        functionKeyPressed = false;
        equalKeyPressed = false;
    }
    else
    {
        placeholder = document.getElementById("calculator-display").value;
        placeholder = placeholder + "7";
        document.getElementById("calculator-display").value = placeholder;
    }
    countKeys++;
}

let eightKey = function()
{
    if(document.getElementById("calculator-display").value === "0" || countKeys == 0)
    {
        document.getElementById("calculator-display").value = "8";
    }
    else if (functionKeyPressed || equalKeyPressed) {
        document.getElementById("calculator-display").value = "8";
        functionKeyPressed = false;
        equalKeyPressed = false;
    }
    else
    {
        placeholder = document.getElementById("calculator-display").value;
        placeholder = placeholder + "8";
        document.getElementById("calculator-display").value = placeholder;
    }
    countKeys++;
}

let nineKey = function()
{
    if(document.getElementById("calculator-display").value === "0" || countKeys == 0)
    {
        document.getElementById("calculator-display").value = "9";
    }
    else if (functionKeyPressed || equalKeyPressed) {
        document.getElementById("calculator-display").value = "9";
        functionKeyPressed = false;
        equalKeyPressed = false;
    }
    else
    {
        placeholder = document.getElementById("calculator-display").value;
        placeholder = placeholder + "9";
        document.getElementById("calculator-display").value = placeholder;
    }
    countKeys++;
}

let decimalKey = function()
{
    placeholder = document.getElementById("calculator-display").value;

    for (let i = 0; i < placeholder.length; i++)
    {
       if (placeholder[i] === ".")
       {
           return;
       }
    }
    placeholder = placeholder + ".";
    document.getElementById("calculator-display").value = placeholder;
    
}

/* Continue here...If fail to do so just copy their code and turn it in as is... */
let pluskey = function()
{
    if (functionKeyPressed) {
        return;
    }

    // Find a way to store the current value and add it to the new value. So either store the added values or store the new values.
    // ** Was not parsed before this **

    currentValue = parseInt(document.getElementById("calculator-display").value);
    functionNum += currentValue;
    
    // Display new value
    document.getElementById("calculator-display").value = functionNum.toString();

    // For equals key
    functionString = "addition";

    // function has been clicked
    functionKeyPressed = true;
}



let minuskey = function()
{

}

let multiplicationkey = function()
{
    
}

let divisionkey = function()
{

}

let equalskey = function()
{
    if (equalKeyPressed) {
        return;
    }

    if (functionString === "addition") {
        currentValue = parseInt(document.getElementById("calculator-display").value);
        functionNum += currentValue;
        document.getElementById("calculator-display").value = functionNum.toString();
        functionString = "default";
        functionNum = 0;
        equalKeyPressed = true;
    }
      
}

let resetDisplay = function()
{
    document.getElementById("calculator-display").value = "";
}

let clearkey = function()
{
    document.getElementById("calculator-display").value = "0";
    countKeys = 0;
    currentValue = 0;
    functionNum = 0;
    functionKeyPressed = false;
    equalKeyPressed = false;
}