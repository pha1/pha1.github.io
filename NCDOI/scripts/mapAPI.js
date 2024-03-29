//AIzaSyA1-_yQ50-uJIIrykNyDlcktIH8wNhxkbE
//code from google to have a map within the web page
let map;
var county = '';
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 35.7079, lng: -79.8136 },
        zoom: 7,
        restriction:{
            latLngBounds:{
            north: 38,
            south: 33,
            east: -74,
            west: -86
            }
        }
    });
    // Load the county overlay
    map.data.loadGeoJson('files/NC_Counties.geojson');

    // Search Bar
    const input = document.getElementById("searchLocation");
    const options = {
        fields: ["formatted_address", "geometry", "name"],
        strictBounds: false,
        types: ["address"],
      };

    // Create AutoComplete
    const autocomplete = new google.maps.places.Autocomplete(input, options);
    
    autocomplete.bindTo("bounds", map);

    const marker = new google.maps.Marker({
        map,
        anchorPoint: new google.maps.Point(0, -29),
    });

    // When a location is selected or "enter" is pressed
    autocomplete.addListener("place_changed", () => {
        marker.setVisible(false);
    
        const place = autocomplete.getPlace();
    
        if (!place.geometry || !place.geometry.location) {
          // User entered the name of a Place that was not suggested and
          // pressed the Enter key, or the Place Details request failed.
          window.alert("No details available for input: '" + place.name + "'");
          return;
        }

        /*
        if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
          } else {
            map.setCenter(place.geometry.location);
            map.setZoom(7);
          }
        */

        marker.setPosition(place.geometry.location);
        map.setZoom(11);
        map.panTo(marker.getPosition());
        marker.setVisible(true);
        place.formatted_address;

        // After the map pans over
        // Update the County

        let geocoder;
        //reverse geocoding allowing us to hash through the layered arrays saved in googles json files
        geocoder = new google.maps.Geocoder();
        var googleAPI = "https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyA1-_yQ50-uJIIrykNyDlcktIH8wNhxkbE&libraries=places&v=weekly";
        var userAddress = document.getElementById('searchLocation').value;
            $.getJSON( googleAPI, {
                address: userAddress,
                sensor: "false"
              })
              // Get the County from json response
            .done(function( data )
                { console.log(data.results[0].address_components[3].short_name);
                    
                    for (var i = 0; i < data.results[0].address_components.length; i++) {
                        for (var j = 0; j < data.results[0].address_components[i].types.length; j++) {
                            if (data.results[0].address_components[i].types[j] == "administrative_area_level_2") {
                            county = data.results[0].address_components[i].short_name;
                            console.log(county);
                    }
  }
}
                });
    });

}
window.initMap = initMap;
