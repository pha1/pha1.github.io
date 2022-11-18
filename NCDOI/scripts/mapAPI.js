//AIzaSyA1-_yQ50-uJIIrykNyDlcktIH8wNhxkbE

let map;

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
    map.data.loadGeoJson('files/NC_Counties.geojson');

    const input = document.getElementById("searchLocation");
    const options = {
        fields: ["formatted_address", "geometry", "name"],
        strictBounds: false,
        types: ["address"],
      };

    const autocomplete = new google.maps.places.Autocomplete(input, options);
    
    autocomplete.bindTo("bounds", map);

    const marker = new google.maps.Marker({
        map,
        anchorPoint: new google.maps.Point(0, -29),
    });

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

        geocoder = new google.maps.Geocoder();

        var address = document.getElementById('searchLocation').value;
        geocoder.geocode( { 'address': address}, function(geoResult, status) {
            // If OK 
            if (status == 'OK') {
                // Update County

                const results = geoResult.results;
                const address_components = results.results[0].address_components;
                address_components.forEach(address_component => {
                console.log(JSON.stringify(address_component));
                });

            } else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
            });

    });

}
window.initMap = initMap;
