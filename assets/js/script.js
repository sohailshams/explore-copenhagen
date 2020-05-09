
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

function sendMail(contactForm) {
    emailjs.send("gmail", "copenhagen", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "your_query": contactForm.query.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            document.getElementById("form-reset").reset();
            $(".modal").modal("toggle");
            
        },
        function(error) {
        console.log("FAILED", error);
        
        });
        return false;
}
/*
window.onload = function() {
     var myArray = ["Amalienborg Palace", "National Museum", "Nyhavn", "Christianborg Palace", "Copenhagen Zoo", 
     "The Round Tower", "Rosenborg Castle", "Tivoli Gardens", "The Little Marmaid", "Ny Carlberg Glyptotek"];
       var index, entry;
      for (index = 0; index < myArray.length; ++index) {
        entry = myArray[index];
         var node = document.createElement("OL");
         // Backticks should look like `
       
        textnode = document.createTextNode(`${index+1}. ${""} ${entry}`)
 
   node.appendChild(textnode);
   
   document.getElementById("attractions").appendChild(node);
  }
  
}
*/

function sortFunction(){
    getSelectValue = document.getElementById("location-selector").value;
    if (getSelectValue == "1"){
    $("#attractions").empty();
      var myArray = [
    ["Tivoli Gardens", 280],
    ["Ny Carlberg Glyptotek", 500],
    ["National Museum", 550],
    ["Christianborg Palace", 1000],
    ["Nyhavn", 1500],
    ["Rosenborg Castle", 1600],
    ["Amalienborg Palace", 2400],
    ["Copenhagen Zoo", 3100],
    ["The Little Marmaid", 3400],
    ["The Round Tower", 800]
];
      
      myArray.sort(function(a, b) {
        return a[1] - b[1];
      }); 
       
      var index, entry;
      for (index = 0; index < myArray.length; ++index) {
        entry = myArray[index];
         var node = document.createElement("OL");
       
              node.setAttribute("id","list");  
         
         // Backticks should look like `
       
        textnode = document.createTextNode(`${index+1}. ${""} ${entry[0]}`)
 
   node.appendChild(textnode);
   
   document.getElementById("attractions").appendChild(node);
   
  }
  
  }
   if (getSelectValue == "2"){
    $("#attractions").empty();
      var myArray = [
    ["Tivoli Gardens", 1500],
    ["Ny Carlberg Glyptotek", 1700],
    ["National Museum", 1900],
    ["Christianborg Palace", 1600],
    ["Nyhavn", 1800],
    ["Rosenborg Castle", 400],
    ["Amalienborg Palace", 2500],
    ["Copenhagen Zoo", 3900],
    ["The Little Marmaid", 2300],
    ["The Round Tower", 750]
];
      
      myArray.sort(function(a, b) {
        return a[1] - b[1];
      }); 
       
      var index, entry;
      for (index = 0; index < myArray.length; ++index) {
        entry = myArray[index];
         var node = document.createElement("OL");
         // Backticks should look like `
       
        textnode = document.createTextNode(`${index+1}. ${""} ${entry[0]}`)
 
   node.appendChild(textnode);
   
   document.getElementById("attractions").appendChild(node);
  }
  
  };
}
// code for hover
/*
$(".loc1").hover(function(){
    $(this).append ($ ("<div class='location-info'><span class='nearest-places'>Nearest Hotel & Restaurant</span> <br><a href='https://www.thesquarecopenhagen.com/' target='_blank'>The Square Hotel</a> <br> <a href='https://guru.dk/' target='_blank'>Guru Restaurant</a> </div>"));
}, function (){
    $(this).find(".location-info").last().remove();
    
});

$(".loc2").hover(function(){
    $(this).append ($ ("<div class='location-info'><span class='nearest-places'>Nearest Hotel & Restaurant</span> <br><a href='https://nobishotel.dk/' target='_blank'>The Square Hotel</a> <br> <a href='https://karla.nu/' target='_blank'>Guru Restaurant</a> </div>"));
}, function (){
    $(this).find(".location-list").last().remove();
}
);
*/