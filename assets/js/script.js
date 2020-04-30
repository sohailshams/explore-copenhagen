
function initMap() {
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
  