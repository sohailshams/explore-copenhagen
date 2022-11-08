import "../css/style.css"


document.addEventListener('DOMContentLoaded', () => {


//-----------------Code from Google map api documentation
google.maps.event.addDomListener(window, 'load', initAutocomplete);

function initAutocomplete() {
  var map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 55.6761, lng: 12.5683 },
    zoom: 13,
    mapTypeId: "roadmap",
  });

  // Create the search box and link it to the UI element.
  var input = document.getElementById("pac-input");
  var searchBox = new google.maps.places.SearchBox(input);

  // Bias the SearchBox results towards current map's viewport.
  map.addListener("bounds_changed", function () {
    searchBox.setBounds(map.getBounds());
  });

  var markers = [];
  searchBox.addListener("places_changed", function () {
    var places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }

    // Clear out the old markers.
    markers.forEach(function (marker) {
      marker.setMap(null);
    });
    markers = [];

    // For each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();
    places.forEach(function (place) {
      if (!place.geometry) {
        return;
      }
      var icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25),
      };

      // Create a marker for each place.
      markers.push(
        new google.maps.Marker({
          map: map,
          icon: icon,
          title: place.name,
          position: place.geometry.location,
        })
      );

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

//-----------------CI tutorials helped alot to write this code

function sendMail(contactForm) {
  emailjs
    .send("gmail", "copenhagen", {
      from_name: contactForm.name.value,
      from_email: contactForm.emailaddress.value,
      your_query: contactForm.query.value,
    })
    .then(
      function (response) {
        document.getElementById("form-reset").reset();
        $(".modal").modal("toggle");
        $(function () {
          setTimeout(function () {
            $("#send-message").show();
          }, 1000);
        });

        $(function () {
          setTimeout(function () {
            $("#send-message").show().hide();
          }, 5000);
        });
      },
      function (error) {
        console.log("FAILED", error);
      }
    );
  return false;
}

// Sorting logic for the attractions
const getSelectValue = document.querySelector('#location-selector');

getSelectValue.addEventListener('change', (event) => {
  if (event.target.value == "0") {
    $("#attractions").empty();
    // Second parameter is added in the array to push them as a respective class to first parameter
    var myArray = [
      ["Christianborg Palace", "c-palace"],
      ["Ny Carlberg Glyptotek", "nc-glyptotek"],
      ["The Round Tower", "tr-tower"],
      ["Tivoli Gardens", "t-garden"],
      ["Copenhagen Zoo", "cph-zoo"],
      ["National Museum", "n-museum"],
      ["Rosenborg Castle", "r-castle"],
      ["Amalienborg Palace", "amalienborg"],
      ["Nyhavn", "nyhavn"],
      ["The Little Marmaid", "tl-marmaid"],
    ];
    var index, entry;
    // Created an ordered list
    var olist = document.createElement("OL");
    olist.setAttribute("class", "location-list");
    for (index = 0; index < myArray.length; ++index) {
      entry = myArray[index];
      // Created LI
      var node = document.createElement("LI");
      // Added classes (parameter two) in LI
      node.setAttribute("class", entry[1]);
      textnode = document.createTextNode(`${entry[0]}`);
      node.appendChild(textnode);
      olist.appendChild(node);
      document.getElementById("attractions").appendChild(olist);
    }
  }
  if (event.target.value == "1") {
    $("#attractions").empty();
    // Third parameter is added in the array to push them as a respective class to first parameter
    var myArray = [
      ["Tivoli Gardens", 280, "t-garden"],
      ["Ny Carlberg Glyptotek", 500, "nc-glyptotek"],
      ["National Museum", 550, "n-museum"],
      ["Christianborg Palace", 1000, "c-palace"],
      ["Nyhavn", 1500, "nyhavn"],
      ["Rosenborg Castle", 1600, "r-castle"],
      ["Amalienborg Palace", 2400, "amalienborg"],
      ["Copenhagen Zoo", 3100, "cph-zoo"],
      ["The Little Marmaid", 3400, "tl-marmaid"],
      ["The Round Tower", 800, "tr-tower"],
    ];

    myArray.sort(function (a, b) {
      return a[1] - b[1];
    });

    var index, entry;
    // Created an ordered list
    var olist = document.createElement("OL");
    olist.setAttribute("class", "location-list");
    for (index = 0; index < myArray.length; ++index) {
      entry = myArray[index];
      // Created LI
      var node = document.createElement("LI");
      // Added classes (parameter three) in LI
      node.setAttribute("class", entry[2]);
      var textnode = document.createTextNode(`${entry[0]}`);
      node.appendChild(textnode);
      olist.appendChild(node);
      document.getElementById("attractions").appendChild(olist);
    }
  }
  if (event.target.value == "2") {
    $("#attractions").empty();
    // Second parameter is added in the array to push them as a respective class to first parameter
    var myArray = [
      ["Tivoli Gardens", 1500, "t-garden"],
      ["Ny Carlberg Glyptotek", 1700, "nc-glyptotek"],
      ["National Museum", 1900, "n-museum"],
      ["Christianborg Palace", 1600, "c-palace"],
      ["Nyhavn", 1800, "nyhavn"],
      ["Rosenborg Castle", 400, "r-castle"],
      ["Amalienborg Palace", 2500, "amalienborg"],
      ["Copenhagen Zoo", 3900, "cph-zoo"],
      ["The Little Marmaid", 2300, "tl-marmaid"],
      ["The Round Tower", 750, "tr-tower"],
    ];

    myArray.sort(function (a, b) {
      return a[1] - b[1];
    });

    var index, entry;
    // Created an ordered list
    var olist = document.createElement("OL");
    olist.setAttribute("class", "location-list");
    for (index = 0; index < myArray.length; ++index) {
      entry = myArray[index];
      // Created LI
      var node = document.createElement("LI");
      // Added classes (parameter three) in LI
      node.setAttribute("class", entry[2]);
      var textnode = document.createTextNode(`${entry[0]}`);
      node.appendChild(textnode);
      olist.appendChild(node);
      document.getElementById("attractions").appendChild(olist);
    }
  }
});

// hoverFunction is called on page load so that hover effect works on attractions list on page load.
window.addEventListener('load', (event) => {
  hoverFunction();
});

// hoverFunction is called on change 
$( "#location-selector" ).change(function() {
  hoverFunction();
});

function hoverFunction () {
  $(".t-garden").hover(
    function () {
      // An if statement is added to disable hover function on screen size less than 768px
      // Note: if ($(window).width() > 750). The width calculated by this is equal to 768px
      if ($(window).width() > 750)
        $(this).append(
          $(
            "<div class='location-info'><span class='nearest-places'>Nearest Hotel & Restaurant</span> <br><a href='https://www.nimb.dk/en/hotel' target='_blank'>Nimb Hotel</a> <br> <a href='https://guru.dk/' target='_blank'>Guru Restaurant</a> </div>"
          )
        );
    },
    function () {
      $(".location-info").remove();
    }
  );

  $(".nc-glyptotek").hover(
    function () {
      if ($(window).width() > 750)
        $(this).append(
          $(
            "<div class='location-info'><span class='nearest-places'>Nearest Hotel & Restaurant</span> <br><a href='https://nobishotel.dk/' target='_blank'>Nobis Hotel</a> <br> <a href='https://karla.nu/' target='_blank'>Restaurant Karla</a> </div>"
          )
        );
    },
    function () {
      $(".location-info").remove();
    }
  );

  $(".n-museum").hover(
    function () {
      if ($(window).width() > 750)
        $(this).append(
          $(
            "<div class='location-info'><span class='nearest-places'>Nearest Hotel & Restaurant</span> <br><a href='https://www.brochner-hotels.com/hotel-danmark/' target='_blank'>Hotel Denmark</a> <br> <a href='https://www.godtfolkkbh.dk/' target='_blank'>Godt Folk Restaurant</a> </div>"
          )
        );
    },
    function () {
      $(".location-info").remove();
    }
  );

  $(".c-palace").hover(
    function () {
      if ($(window).width() > 750)
        $(this).append(
          $(
            "<div class='location-info'><span class='nearest-places'>Nearest Hotel & Restaurant</span> <br><a href='https://www.dangleterre.com/' target='_blank'>Hotel D'angleterre</a> <br> <a href='https://kadeau.dk/' target='_blank'>Kadeau Restaurant</a> </div>"
          )
        );
    },
    function () {
      $(".location-info").remove();
    }
  );

  $(".nyhavn").hover(
    function () {
      if ($(window).width() > 750)
        $(this).append(
          $(
            "<div class='location-info'><span class='nearest-places'>Nearest Hotel & Restaurant</span> <br><a href='https://admiralhotel.dk/' target='_blank'>Admiral Hotel</a> <br> <a href='https://www.feed.dk/' target='_blank'>Restaurant Feed Bistro</a> </div>"
          )
        );
    },
    function () {
      $(".location-info").remove();
    }
  );

  $(".r-castle").hover(
    function () {
      if ($(window).width() > 750)
        $(this).append(
          $(
            "<div class='location-info'><span class='nearest-places'>Nearest Hotel & Restaurant</span> <br><a href='https://www.phoenixcopenhagen.com/' target='_blank'>Phoenix Hotel</a> <br> <a href='https://sticksnsushi.com/en' target='_blank'>Sticks'n'Sushi</a> </div>"
          )
        );
    },
    function () {
      $(".location-info").remove();
    }
  );

  $(".amalienborg").hover(
    function () {
      if ($(window).width() > 750)
        $(this).append(
          $(
            "<div class='location-info'><span class='nearest-places'>Nearest Hotel & Restaurant</span> <br><a href='https://hotelsktannae.dk/' target='_blank'>Hotel Sankt Annae</a> <br> <a href='https://restaurantsanktannae.dk/' target='_blank'>Restaurant Sankt Annae</a> </div>"
          )
        );
    },
    function () {
      $(".location-info").remove();
    }
  );

  $(".cph-zoo").hover(
    function () {
      if ($(window).width() > 750)
        $(this).append(
          $(
            "<div class='location-info'><span class='nearest-places'>Nearest Hotel & Restaurant</span> <br><a href='https://absalon-hotel.dk/en/' target='_blank'>Absalon Hotel</a> <br> <a href='https://www.bistropanpan.dk/' target='_blank'>Bistro Panpan</a> </div>"
          )
        );
    },
    function () {
      $(".location-info").remove();
    }
  );

  $(".tl-marmaid").hover(
    function () {
      if ($(window).width() > 750)
        $(this).append(
          $(
            "<div class='location-info'><span class='nearest-places'>Nearest Hotel & Restaurant</span> <br><a href='https://www.adinahotels.com/en/apartments/copenhagen/' target='_blank'>Adina Apartment Hotel</a> <br> <a href='https://toldboden.com/' target='_blank'>Restaurant Tolboden</a> </div>"
          )
        );
    },
    function () {
      $(".location-info").remove();
    }
  );

  $(".tr-tower").hover(
    function () {
      if ($(window).width() > 750)
        $(this).append(
          $(
            "<div class='location-info'><span class='nearest-places'>Nearest Hotel & Restaurant</span> <br><a href='https://www.sktpetri.com/' target='_blank'>Hotel SKT. Petri</a> <br> <a href='http://www.restaurant-naert.dk/' target='_blank'>Restaurant Naert</a> </div>"
          )
        );
    },
    function () {
      $(".location-info").remove();
    }
  );
}

});
