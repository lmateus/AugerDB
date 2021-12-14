var map = L.map('map').setView([4.638271, -74.082849], 20);
console.log(map);
var tiles = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
  maxZoom: 100,
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' + 'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1
}).addTo(map);

function onMapClick(e) {
  var marker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);
  marker.bindPopup("<p>Soy una nueva perforacion<p/>").openPopup();
  marker.setLatLng([e.latlng.lat, e.latlng.lng]); //
}

map.on('click', onMapClick);