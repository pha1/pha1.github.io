// Global Variables
src = "mapAPI.js";
src = "array.js";
var location;
var parsedJSON = [];
var resultJSON = [];
/**
 * Parse the JSON data into an array
 */
/** 
$(document).ready(function() {
    console.log("Ready");
    // Get JSON data
    $.getJSON("files/inspectors.json", function(data) {

        // Stringify the JSON Object
        const result = JSON.stringify(data);

        // Parse data into array
        parsedJSON = JSON.parse(result);
        
        // Testing purposes
        console.log(parsedJSON.length);
        console.log("Inspector 1: " + parsedJSON[0]);
        console.log(parsedJSON[0]["First Name"]);
        console.log(parsedJSON[parsedJSON.length-1]["First Name"]);
    });
});
*/


/**
 * Submit the requirements to display a list of Inspectors
 */
let submitForm = function () {

    for(var i = 0; i < inspectors.length; i++) {
        parsedJSON.push(inspectors[i]);
        console.log(parsedJSON[i]);
    }    
    // console.log("Begin here");
    
    // Clear the table every time a new form is submitted
    var table = document.getElementById("inspector_table");
    var contactButtonDiv = document.getElementById("contactButtonDiv");
    if (table !== null){
        if (table) table.parentNode.removeChild(table);
        contactButtonDiv.innerHTML = "";
    }
    resultJSON = [];

    // Selector elements
    var searchData = document.getElementById("searchLocation");
    var trade = document.getElementById("trade");
    var level = document.getElementById("level");

    // Selected Values
    var searchValue = county;
    var tradeValue = trade.options[trade.selectedIndex].value;
    var levelValue = level.options[level.selectedIndex].value;

    // TESTING
    // Check the selected values
    console.log(tradeValue);
    console.log(levelValue);

    // Used to append to the existing table
    var inspector = '<table id="inspector_table"><thead><th></th><th>First Name</th><th>Last Name</th><th>Employer</th><th>Emp Phone</th><th>County</th><th>Address</th><th>City</th><th>State</th> <th>Zip Code</th><th>Primary contact email</th></thead><tbody id="inspector_table_body">';
    var intLevel;
    var intLevel2;

    //variable for search by county
    var x = 0;
    //for loop to iterate through origanal array and place items in new array sorted by county
    for(var i = 0; i < parsedJSON.length; i++) {
        if(searchValue === parsedJSON[i].County+(' County') || parsedJSON[i].Trade === "all"){
            console.log(searchValue.toLowerCase());
            console.log((parsedJSON[i].County).toLowerCase());
            console.log(searchValue.toLowerCase() === (parsedJSON[i].County).toLowerCase());
            resultJSON.push(parsedJSON[i]);
            console.log(resultJSON[x]);
            x++;
        }
    }

    // ITERATING THROUGH OBJECTS
    for(var i = 0; i < resultJSON.length; i++) {
        // If the Object's Trade and Level matches, then add it to the table
        // Else move to the next object
        intLevel = parseInt(resultJSON[i].Level);
        intLevel2 = parseInt(levelValue);

        if((tradeValue === resultJSON[i].Trade && intLevel >= intLevel2) || resultJSON[i].Trade === "all"){
            
        //CONSTRUCTION OF ROWS HAVING
        // DATA FROM JSON OBJECT
        inspector += '<tr>';

        inspector += '<td><input class="chk" type="checkbox" id="' + i + '" value="' + resultJSON[i]["Primary contact email"] + '"></td>';

        // To get values with spaces, use bracket notation
        inspector += '<td>' + 
            resultJSON[i]["First Name"] + '</td>';

        inspector += '<td>' + 
            resultJSON[i]["Last Name"] + '</td>';

        inspector += '<td>' + 
            resultJSON[i].Employer + '</td>';

        inspector += '<td>' + 
            resultJSON[i]["Emp Phone"] + '</td>';

        inspector += '<td>' + 
            resultJSON[i].County + '</td>';

        inspector += '<td>' + 
            resultJSON[i].Address + '</td>';

        inspector += '<td>' + 
            resultJSON[i].City + '</td>';

        inspector += '<td>' + 
            resultJSON[i].State + '</td>';

        inspector += '<td>' + 
            resultJSON[i]["Zip Code"] + '</td>';

        inspector += '<td>' + 
            resultJSON[i]["Primary contact email"] + '</td>';
        
        inspector += '</tr>';
        }
    }

    // Close the body
    inspector += '</tbody>';
    inspector += '</table>';
    
    //INSERTING ROWS INTO TABLE 
    //console.log("Append here");
    //$('#inspector_table_body').append(inspector);
    $(inspector).insertBefore("#submitButtonPressed");

    var r= '<div class="vertical-center" id = "contactButtonDiv"><input type="button" id="contactButton" value="Contact" onclick="showForm()"/></div>';
    $(r).insertBefore("#filler");

    return;
}

function showForm() {

    var selectedValues = $('input.chk:checked').toArray().map(function(chk) {
        return $(chk).val();
      });

    emails = selectedValues.join();
    console.log(emails);

	"use strict";
	window.$("#overlay").fadeIn();
	window.$("#submitButtonPressed").show();
	//window.$("#submitButtonPressed").animate({top: .5*outerHeight});
    window.$("#submitButtonPressed").animate({top: document.documentElement.scrollTop});
    //window.$("#submitButtonPressed").animate({top: window.pageYOffset});
}

window.$("#overlay").click(function () {
	"use strict";
	window.$("#overlay").hide();
	window.$("#submitButtonPressed").hide();
	window.$("#submitButtonPressed").css("top", "-310px");
});

function closeForm() {
	"use strict";
	window.$("#overlay").hide();
	window.$("#submitButtonPressed").hide();
	window.$("#submitButtonPressed").css("top", "-310px");
}

function showDiv() {
    document.getElementById('availableInspectors').style.display = "inline-block";
 }