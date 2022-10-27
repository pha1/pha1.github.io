// Global Variables
var location;

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
    $.getJSON("inspectors.json", 
            function (data) {

            var inspector = '';
        // ITERATING THROUGH OBJECTS
        $.each(data, function (key, value) {

            if(tradeValue === value.Trade && levelValue === value.Level){
            //console.log(value.Trade);
            //console.log(value.Level);

            //CONSTRUCTION OF ROWS HAVING
            // DATA FROM JSON OBJECT
            inspector += '<tr>';

            // To get values with spaces, use bracket notation
            inspector += '<td>' + 
                value["CEO ID"] + '</td>';

            inspector += '<td>' + 
                value["First Name"] + '</td>';

            inspector += '<td>' + 
                value["Last Name"] + '</td>';

            inspector += '<td>' + 
                value["Cert No"] + '</td>';

            inspector += '<td>' + 
                value.Type + '</td>';

            inspector += '<td>' + 
                value.Trade + '</td>';

            inspector += '<td>' + 
                value.Level + '</td>';

            inspector += '<td>' + 
                value["Exp Date"] + '</td>';

            inspector += '<td>' + 
                value.Employer + '</td>';

            inspector += '<td>' + 
                value["Emp Phone"] + '</td>';

            inspector += '<td>' + 
                value.County + '</td>';

            inspector += '<td>' + 
                value.Address + '</td>';

            inspector += '<td>' + 
                value.City + '</td>';

            inspector += '<td>' + 
                value.State + '</td>';

            inspector += '<td>' + 
                value["Zip Code"] + '</td>';

            inspector += '<td>' + 
                value["Primary contact email"] + '</td>';

            inspector += '</tr>';
            }
        });

        inspector += '</tbody>';
        //INSERTING ROWS INTO TABLE 
        console.log("Append here");
        $('#inspector_table_body').append(inspector);
    });
}