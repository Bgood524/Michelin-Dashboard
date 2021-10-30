  // Adding tile layer
  var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
  });
console.log(data_collection)
// var link = "/get_data"
// // Grabbing our GeoJSON data..
// d3.json(link).then(function(error, data) {
//   // See if we made connection with the data
//   console.log(data)
//   // L.geoJson(data).addTo(myMap);
// });


var three_stars = [
{Restaurant_Name: 'Alinea',
City: 'Chicago',
Price_Range: '210 - 365 USD',
Restauarant_Website: 'https://www.alinearestaurant.com/',
Latitude: 41.913274,
Longitude: -87.648174,
Location: [41.913274, -87.648174]},
{
  Restaurant_Name: 'Kashiwaya',
  City: 'Tokyo',
  Price_Range: '13,000 - 43,000 JPY',
  Restauarant_Website: 'https://jp-kashiwaya.com/senriyama/',
  Latitude: 41.9110,
  Longitude: -87.6349,
  Location: [41.9110, -87.6349]
}
];

var two_stars = [
  {Restaurant_Name: 'Oriole',
  City: 'Chicago',
  Price_Range: '215 USD',
  Restauarant_Website: 'https://www.oriolechicago.com/',
  Latitude: 41.9761,
  Longitude: -87.8169,
  Location: [41.9761, -87.8169]},
  {
    Restaurant_Name: 'Smyth',
    City: 'Chicago',
    Price_Range: '225 - 280 USD',
    Restauarant_Website: 'https://www.smythandtheloyalist.com/',
    Latitude: 41.8850,
    Longitude: -87.6606,
    Location: [41.8850, -87.6606]
  }
];



// An array which will be used to store created restaurant markers
var restmarkers_three = [];
var restmarkers_two = [];

for (var i = 0; i < three_stars.length; i++) {
  var rest = three_stars[i];
  
  restmarkers_three.push(
     L.marker([rest.Latitude, rest.Longitude])
    .bindPopup(rest.Restaurant_Name + "<br> " + rest.City+ " " + "<br> Price Range: " + rest.Price_Range + " <br> Restaurant URL: " + rest.Restauarant_Website)
  )};

  for (var i = 0; i < two_stars.length; i++) {
    var rest_two = two_stars[i];
    
    restmarkers_two.push(
    L.marker([rest_two.Latitude, rest_two.Longitude])
    .bindPopup(rest_two.Restaurant_Name + "<br> " + rest_two.City+ " " + "<br> Price Range: " + rest_two.Price_Range + " <br> Restaurant URL: " + rest_two.Restauarant_Website)
    )};

var cityLayer_three = L.layerGroup(restmarkers_three);
var cityLayer_two = L.layerGroup(restmarkers_two);

// Define variables for our tile layers
var outdoors = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "outdoors-v10",
  accessToken: API_KEY
});

var dark = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "dark-v10",
  accessToken: API_KEY
});

// Only one base layer can be shown at a time
var baseMaps = {
  Map: outdoors,
  Dark: dark
};

// Overlays that may be toggled on or off
var overlayMaps = {
  Three_Stars: cityLayer_three,
  Two_Stars : cityLayer_two
};

var myMap = L.map("map", {
  center: [41.913274, -87.648174],
  zoom: 11,
  layers: [outdoors, cityLayer_two, streetmap]
});


// Pass our map layers into our layer control
// Add the layer control to the map
L.control.layers(baseMaps, overlayMaps).addTo(myMap);