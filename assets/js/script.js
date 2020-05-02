
/*function initMap() {
  // The location of Copenhagen
  var cph = {lat: 55.6761, lng: 12.5683};
  // The map, centered at Copenhagen
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 14, center: cph});
  var labels= "ABCDEFGHIJKL";
  var markers = locations.map(function(location, i) {
          return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
          });
        });

        
        var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
}
var locations = [
        {lat: 55.692861,  lng: 12.599278},
        {lat: 55.686550, lng: 12.592917},
        {lat: 55.6841, lng: 12.5930},
        {lat: 55.67993, lng: 12.59104},
        {lat: 55.68142, lng: 12.58538},
        {lat: 55.6858, lng: 12.5773},
        {lat: 55.6813, lng: 12.5757},
        {lat: 55.6762, lng: 12.5805},
        {lat: 55.6746, lng: 12.5747},
        {lat: 55.6737, lng: 12.5681},
        {lat: 55.6759, lng: 12.5691},
        {lat: 55.6724, lng: 12.5214}
        ]
  */
        /*Hotels*/

      // This example adds a search box to a map, using the Google Place Autocomplete
// feature. People can enter geographical searches. The search box will return a
// pick list containing a mix of places and predicted search terms.

// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

function initAutocomplete() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 55.6761, lng: 12.5683},
    zoom: 13,
    mapTypeId: 'roadmap'
  });

  // Create the search box and link it to the UI element.
  var input = document.getElementById('pac-input');
  var searchBox = new google.maps.places.SearchBox(input);
  

  // Bias the SearchBox results towards current map's viewport.
  map.addListener('bounds_changed', function() {
    searchBox.setBounds(map.getBounds());
  });

  var markers = [];
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener('places_changed', function() {
    var places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }

    // Clear out the old markers.
    markers.forEach(function(marker) {
      marker.setMap(null);
    });
    markers = [];

    // For each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();
    places.forEach(function(place) {
      if (!place.geometry) {
        console.log("Returned place contains no geometry");
        return;
      }
      var icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

      // Create a marker for each place.
      markers.push(new google.maps.Marker({
        map: map,
        icon: icon,
        title: place.name,
        position: place.geometry.location
      }));

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });
}

/* 
taken out from create search box. map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
*/