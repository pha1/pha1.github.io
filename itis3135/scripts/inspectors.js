var location;
// inspectorArray;
var parsedJSON;

// TEST PURPOSES
// PARSE INTO OBJECTS ARRAY HERE
$(document).ready(function() {
    console.log("Ready");
    // Get JSON data
    $.getJSON("inspectors.json", function(data) {
        // Stringify the Data
        const result = JSON.stringify(data);
        // Parse data into array
        parsedJSON = JSON.parse(result);
        
        console.log(parsedJSON.length);
        console.log("Inspector 1: " + parsedJSON[0]);
        console.log(parsedJSON[0]["First Name"]);
    })
});

function searchLocation() {
    console.log("Start");
    location = document.getElementById("searchLocation").value;
    console.log("Location: " + location);
}

let submitForm = function () {
    console.log("Begin here");

    var table = document.getElementById("inspector_table_body");
    table.innerHTML = '';

    var trade = document.getElementById("trade");
    var level = document.getElementById("level");

    var tradeValue = trade.options[trade.selectedIndex].value;
    var levelValue = level.options[level.selectedIndex].value;

    console.log(tradeValue);
    console.log(levelValue);

    // FETCHING DATA FROM JSON FILE


    var inspector = '';
    // ITERATING THROUGH OBJECTS
    for(var i = 0; i < parsedJSON.length; i++) {

        //if(tradeValue === value.Trade && levelValue === value.Level){

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


    inspector += '</tbody>';
    //INSERTING ROWS INTO TABLE 
    console.log("Append here");
    $('#inspector_table_body').append(inspector);
}