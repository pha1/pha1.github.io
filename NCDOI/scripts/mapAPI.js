//AIzaSyA1-_yQ50-uJIIrykNyDlcktIH8wNhxkbE
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 35.2271, lng: 80.8431 },
    zoom: 8,
  });
}

window.initMap = initMap;
