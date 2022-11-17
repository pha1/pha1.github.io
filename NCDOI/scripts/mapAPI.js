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
          }
          window.initMap = initMap;
