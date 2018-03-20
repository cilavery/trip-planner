const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker.js")

mapboxgl.accessToken = 'pk.eyJ1IjoiY2lsYXZlcnkiLCJhIjoiY2plenRhazg4MGRybDMzcWhtM3prc3hraSJ9.CEFizkb51fuOYpJVDZgiKg';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/light-v9'// mapbox has lots of different map styles available.
});


const marker = buildMarker("hotel", [-74.009151, 40.705086]);

marker.addTo(map);

