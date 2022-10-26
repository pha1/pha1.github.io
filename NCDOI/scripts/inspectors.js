
/* toggle between hiding and showing the dropdown content */
function selectTrade() {
document.getElementById("tradeDropdown").classList.toggle("show");
}

function selectLevel() {
document.getElementById("levelDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
    }
    }
}
}
$(document).ready(function () {

    // FETCHING DATA FROM JSON FILE
    $.getJSON("inspectors.json", 
            function (data) {
        var inspector = '';

        // ITERATING THROUGH OBJECTS
        $.each(data, function (key, value) {

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
        });
            
        //INSERTING ROWS INTO TABLE 
        $('#inspector_table').append(inspector);
    });
});