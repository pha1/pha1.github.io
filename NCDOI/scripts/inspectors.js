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

/**
 * Submit the requirements to display a list of Inspectors
 */
let submitForm = function () {

    // console.log("Begin here");
    
    // Clear the table every time a new form is submitted
    var table = document.getElementById("inspector_table_body");
    table.innerHTML = '';
    resultJSON = [];

    // Selector elements
    var searchData = document.getElementById("searchLocation");
    var trade = document.getElementById("trade");
    var level = document.getElementById("level");

    // Selected Values
    var searchValue = searchData.value;
    var tradeValue = trade.options[trade.selectedIndex].value;
    var levelValue = level.options[level.selectedIndex].value;

    // TESTING
    // Check the selected values
    console.log(tradeValue);
    console.log(levelValue);

    // Used to append to the existing table
    var inspector = '';
    var intLevel;
    var intLevel2;

    //variable for search by county
    var x = 0;
    //for loop to iterate through origanal array and place items in new array sorted by county
    for(var i = 0; i < parsedJSON.length; i++) {
        if(searchValue === parsedJSON[i].County){
            resultJSON.push(parsedJSON[i]);
            console.log(resultJSON[x]);
            x++;
        }
    }

    // ITERATING THROUGH OBJECTS
    for(var i = 0; i < resultJSON.length; i++) {
        // If the Object's Trade and Level matches, then add it to the table
        // Else move to the next object
        intLevel = parsedInt(resultJSON[i].Level);
        intLevel2 = parsedInt(levelValue);
        if(tradeValue === resultJSON[i].Trade && intLevel >= intLevel2){
            
        //CONSTRUCTION OF ROWS HAVING
        // DATA FROM JSON OBJECT
        inspector += '<tr>';

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
    
    //INSERTING ROWS INTO TABLE 
    //console.log("Append here");
    $('#inspector_table_body').append(inspector);
}