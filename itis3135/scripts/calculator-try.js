/* JavaScript file for Calculator Try */

// Global variables
let placeholder;
let currentNum;
let newNum = 0;
let anotherNum = 0;
let count = 0;
let countKeys = 0;
const numbers = [];

let zeroKey = function()
{

    if(!(document.getElementById("calculator-display").value === "0"))
    {
        placeholder = document.getElementById("calculator-display").value;
        placeholder = placeholder + "0";
        document.getElementById("calculator-display").value = placeholder;
    }
    else
    {
        document.getElementById("calculator-display").value = "0";
    }
    countKeys++;
}

let oneKey = function()
{
    if(document.getElementById("calculator-display").value === "0" || countKeys == 0)
    {
        document.getElementById("calculator-display").value = "1";
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
    // Find a way to store the current value and add it to the new value. So either store the added values or store the new values.
    currentNum = document.getElementById("calculator-display").value;
    count = numbers.push(currentNum);
    //alert(numbers);
    //resetDisplay();
    anotherNum = currentNum;

    if (count > 1)
    {   
        currentNum = anotherNum;
        let curNum = parseInt(currentNum);
        let reservedNum = parseInt(numbers[count-2]);
        newNum = curNum + reservedNum;
        document.getElementById("calculator-display").value = newNum;
    }
    countKeys = 0;
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

}

let resetDisplay = function()
{
    document.getElementById("calculator-display").value = "";
}

let clearkey = function()
{
    document.getElementById("calculator-display").value = "0";
    countKeys = 0;
    count = 0;
}