// Global Variables
var location;
var parsedJSON;
var resultJSON = [];

/**
 * Parse the JSON data into an array
 */
$(document).ready(function() {
    console.log("Ready");
    // Get JSON data
    $.getJSON("inspectors.json", function(data) {

        // Stringify the JSON Object
        const result = JSON.stringify(data);

        // Parse data into array
        parsedJSON = JSON.parse(result);
        
        // Testing purposes
        console.log(parsedJSON.length);
        console.log("Inspector 1: " + parsedJSON[0]);
        console.log(parsedJSON[0]["First Name"]);
    });
});

/*
$(document).ready(function() {
    
     //This needs to be worked on
     //Throws an error - when clicking on the button claims no function
     
     $('#searchButton').click(function() {
        console.log("Click");
        var inputLine = document.getElementById("searchLocation");
        location = inputLine.value;
        console.log("Location: " + location);
    });
});
*/

let submitSearch = function (){
    var searchData = document.getElementById("searchLocation");
    var searchValue = searchData.value;
    var x = 0;
    for(var i = 0; i < parsedJSON.length; i++) {
        if(searchValue.equalsIgnoreCase(parsedJSON[i].County)){
            resultJSON[x].push(parsedJSON[i]);
            console.log(resultJSON[0].County);
            console.log(resultJSON.length);
            x++;
        }
    }
}

/**
 * Submit the requirements to display a list of Inspectors
 */
let submitForm = function () {

    // console.log("Begin here");

    // Clear the table every time a new form is submitted
    var table = document.getElementById("inspector_table_body");
    table.innerHTML = '';

    // Selector elements
    var trade = document.getElementById("trade");
    var level = document.getElementById("level");

    // Selected Values
    var tradeValue = trade.options[trade.selectedIndex].value;
    var levelValue = level.options[level.selectedIndex].value;

    // TESTING
    // Check the selected values
    console.log(tradeValue);
    console.log(levelValue);

    // Used to append to the existing table
    var inspector = '';

    // ITERATING THROUGH OBJECTS
    for(var i = 0; i < parsedJSON.length; i++) {

        // If the Object's Trade and Level matches, then add it to the table
        // Else move to the next object
        if(tradeValue === parsedJSON[i].Trade && levelValue === parsedJSON[i].Level){

        //CONSTRUCTION OF ROWS HAVING
        // DATA FROM JSON OBJECT
        inspector += '<tr>';

        // To get values with spaces, use bracket notation
        inspector += '<td>' + 
            parsedJSON[i]["CEO ID"] + '</td>';

        inspector += '<td>' + 
            parsedJSON[i]["First Name"] + '</td>';

        inspector += '<td>' + 
            parsedJSON[i]["Last Name"] + '</td>';

        inspector += '<td>' + 
            parsedJSON[i]["Cert No"] + '</td>';

        inspector += '<td>' + 
            parsedJSON[i].Type + '</td>';

        inspector += '<td>' + 
            parsedJSON[i].Trade + '</td>';

        inspector += '<td>' + 
            parsedJSON[i].Level + '</td>';

        inspector += '<td>' + 
            parsedJSON[i]["Exp Date"] + '</td>';

        inspector += '<td>' + 
            parsedJSON[i].Employer + '</td>';

        inspector += '<td>' + 
            parsedJSON[i]["Emp Phone"] + '</td>';

        inspector += '<td>' + 
            parsedJSON[i].County + '</td>';

        inspector += '<td>' + 
            parsedJSON[i].Address + '</td>';

        inspector += '<td>' + 
            parsedJSON[i].City + '</td>';

        inspector += '<td>' + 
            parsedJSON[i].State + '</td>';

        inspector += '<td>' + 
            parsedJSON[i]["Zip Code"] + '</td>';

        inspector += '<td>' + 
            parsedJSON[i]["Primary contact email"] + '</td>';

        inspector += '</tr>';
        }
    }

    // Close the body
    inspector += '</tbody>';
    
    //INSERTING ROWS INTO TABLE 
    //console.log("Append here");
    $('#inspector_table_body').append(inspector);
}