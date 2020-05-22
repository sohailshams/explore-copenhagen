# Explore Copenhagen

## Interactive Frontend Development Milestone Project-2

## Project Description

Explore Copenhagen is designed to be an informative website. The website contains a list of top attractions in the city
Copenhagen, Denmark as well as it is also linked to a Google Places API. It is possible to sort these top attractions by their 
distance from two main locations of the city. Further user can also search for any other attraction, hotel or restaurant by using Google Places API.
The website also provide information about the nearest hotel and restaurant when hovering over the list of top attractions.

# UX

Explore Copenhagen is designed and developed to assist the tourists / travellers to plan and explore their trip to the city of 
Copenhagen, Denmark. Copenhagen, Denmark is a popular tourist destination. Copenhagen airpirt traffic for year 2019
was 30.3 million passengers. Whereas, over 1.5 million tourists stayed over night at Copenhagen city. The design of the website
is kept simple as it consist of one page. 

### User Stories

1. As a user I want to know the history of Denmark.
2. As a user I would like to see a list of top attractions in city Copenhagen.
3. As a user I would like to see nearest hotel to these top attractions in city Copenhagen.
4. As a user I would like to see nearest restaurant to these top attractions in city Copenhagen.
5. As a user I would like to sort these attractions by distance from city center.
6. As a user I would like to sort these attractions by distance from a train / metro station.
7. As a user I would like to search for attractions by Google Maps.
8. As a user I would like to search for hotels using Google Maps.
9. As a user I would like to search for restaurants using Google Maps.
10. As a user I would like to contact the admin for more information.
11. As a user I woould like to see a confirmation that my message has been sent.

#### Attribute

1. The target_blank value is given to all the links of hotel and restaurant so that they will open in a new tab / window on clicking.
2. The required attribute is used in name, email and your query fields to make sure that user fill in all the fiels before sending his query.

#### Hover Effect

1. When a user hover over attractions list a new window appears that contains information about nearest hotel and restaurant.
2. Hover effect hvr-wobble-bottom has been used in social media links.

## Wireframes
- [Link to Wireframes](https://balsamiq.cloud/sisqdsv/pd59mcb/r2278) 
- [Wireframes in PDF](assets/wireframes/wireframes.pdf)

### Strategy

The purpose of creating this website is to facilitate the tourists and travellers to find top attractions in 
Copenhagen, Denmark. While travelling for pleasure / business or having a few hours stop over at the airport, it can be time 
consuming and difficult to find out which places to visit. By few clicks user can easily find a list of top attracions in 
the city. User can also use Google Map to find a specific attraction, hotel or restaurant.

### Scope

A simple responsive website that provide information of top attracions. It also provide information about the
nearest hotel and restaurant to that particular attracion. In case user need particular information about anything, contact
form is available.

### Structure

The website consist of one page and this page has three sections. The page contains a little history of Copenhagen and Denmark. A dropdown button for users
to sort the attracions from two main points of the city. Google Maps are available to search for anyother attraction, hotel
or restaurant for the users. Finally if user need any other information to plan trip, user can contact by clicking on plan 
your trip. User will be informed after the query is sent.

### Skeleton

Wireframes are created using balsamiq. Link to the wireframes and PDF file is available under wireframes. The design of the 
website is the same for desktop and tablet however on mobile screen the content will be re-arranged. The user will move from 
top to the bottom. 

## Features

Key features of the website are;
- Background-Picture (A picture of Christianborg Palace from where the Danish Govenment run its business. This picture covers the entire page.)
- History (A very brief history of Copenhagen and Denmark that will get user interest)
- Top attracions in Copenhagen (A list of to attracions)
- Sort by locations (A dropdown button that allow users to sort the attracions by distance from city center and Nørrepert station)
- Hover over attractions (Hovering over attractions show extra information, which is nearest hotel and restaurant to that attraction. However 
  it does not work on screen sizes less than 768px)
- Search bar and Google Map (It allows user to look for any other attracion, hotel or restaurant)
- Plan your Trip (It allow users to get in touch with admin for any information)
- Message Sent (This confirmation message will pop up under plan your trip when user will send his query)
- Social Media (Links to the social media profiles of Explore Copenhagen, which I have not given yet)

## Features Left to Implement

- In future I want to add a gallery which contains pictures of the attractions with an audio description.
- I also want to add a feature of sort by geolocation meaning that user can sort the top attracions from his current location.
- Social medial profiles of Explore Copenhagen will be added in future.
- I would like to add, hire a local guide feature in future.

## Technologies Used
- HTML5
- CSS3
- JavaScript
- JQuery
- JSON
- [Google Maps API](https://developers.google.com/maps/documentation/javascript/tutorial)
- [Bootstrap Framework](https://getbootstrap.com/)
  Bootstrap grid is used in the project.
- [Googlefonts](https://fonts.google.com/) 
  Google fonts Oswald and Varela+Round are used in the project.
- [FontAwesome](https://fontawesome.com/v4.7.0/icons/) 
  Fontawesome icons are used in the project. 
- [Hover.css](https://ianlunn.github.io/Hover/)
  Hover effects are also used in the project.
- [github](https://github.com/)
  Used for version control.
- [gitpod](https://www.gitpod.io/)

## Testing

The code has been validated by using;

- [W3C Markup Validation Service](https://validator.w3.org/)
- [W3C Markup Validation Service](https://jigsaw.w3.org/css-validator/)
- [JSHint](https://jshint.com/)

Further the testing of the project has been carried out from the beginning using google developer tools.
User stories from the UX section were tested to ensure that they all work as intended, with the project providing an 
easy and straightforward way for the users to achieve their goals.
1. *As a user I want to know the history of Denmark.*
- Go to the top left corner under **History** heading.
2. *As a user I would like to see a list of top attractions in city Copenhagen.*
- Go to the middle of the page a list is placed under **Sort by location dropdown button**.
3. *As a user I would like to see nearest hotel to these top attractions in city Copenhagen.*
- Hover over any attracion under **Sort by location dropdown button** a pop up window will open and show nearest hotel to that attracion.
4. *As a user I would like to see nearest restaurant to these top attractions in city Copenhagen.*
- Hover over any attracion under **Sort by location dropdown button** a pop up window will open and show nearest restaurant to that attracion.
5. *As a user I would like to sort these attractions by distance from city center.*
- Click on the **Sort by location dropdown button** and choose City Center.
6. *As a user I would like to sort these attractions by distance from a train / metro station.*
- Click on the **Sort by location dropdown button** and choose Nørrepert Station.
7. *As a user I would like to search for attractions by Google map.*
- Go to the search box in the top right side of the page and search for attractions 
  and attraction markers will appear in google maps.
8. *As a user I would like to search for hotels using Google map.*
- Go to the search box in the top right side of the page and search for hotels 
  and hotel markers will appear in google maps.
9. *As a user I would like to search for restaurants using Google map.*
- Go to the search box in the top right side of the page and search for restaurants 
  and restaurant markers will appear in google maps.
10. *As a user I would like to contact the admin for more information.*
- Click on **Plan Your Trip** under **History** heading a new window will open. Fill the form and click on Contact Us.
11. *As a user I woould like to see a confirmation that my message has been sent.*
- After clicking the **Contact Us** a confirmation message will appear under-neath **Plan Your Trip**

Required attribute is added in all fields of the plan your trip form like name, emailaddress and your quey.
If any field left empty it will be notified. User will be unable to send the form unless all fields are filled.
Further if wrong email is entered, it will also be notified.

### Different browsers & Mobiles

The website has been tested on following web browsers and mobiles, and website looks fine and work properly on them.
For screen sizes 768px and above the page is divided into three sections History, Top Attraction and Serarch box plus Google Map.
Whereas for small screen sizes every thing turns into one section and sits on top of eachother.
- Google Chroome
- Microsoft Edge
- firefox
- Opera 
- iPhone 6
- Iphone 8
- Huawei P30 lite

### Media Queries

Bootstrap has been used to make website responsive but separate media queries has been written to set the map height on different 
screen sizes. For screen sizes like 4k-2560px a media query is also written so that website look nice on big screens as well.

### Interesting Bugs

During testing I found an interesting bug. Actually I have a hover function on attraction list which I disabled for small 
screens less than 768px. The bug was when I was selecting small screen from large screen this hover was not disabling until, 
I refresh the page or I select any location from the dropdown button. It happened to be the same when I was moving from small 
screen size to bigger than 768px, hover function was not activating until, I refresh the page or I select any location from 
the dropdown button. Luckily I found out that I need to put if statement inside each hover function and it worked.

## Deployment

Following steps has been taken to deploy my project Explore Copenhagen on GitHub pages;
1. Go to GitHub and click on repository [sohailshams/explore-copenhagen](https://github.com/sohailshams/explore-copenhagen)
2. Click on **Settings** on the top right of the page
3. Scroll down to the **GitHub pages section**
4. Click on **dropdown menu** under **Source** section and select **Master Branch as Source**
5. **Save**

###  Local Deployment

Follow these steps to run website locally on your machine;
1. Go to Github repository [sohailshams/explore-copenhagen](https://github.com/sohailshams/explore-copenhagen)
2. Click on **Clone or Download** 
3. Click on **Download Zip**
4. Unzip the downloaded zip file
5. Then run index.html file
6. It will open in a browser which is set as a default browser.


## Credits
### Content

- The history has been taken from [copenhagen.com](https://www.copenhagen.com/historical-facts)
- Airport Passenger traffic data teken from [CPH Airport ](https://www.cph.dk/en/about-cph/press/news/2020/1/cph-traffic-data-close-to-30.3-million-passengers-in-2019)
- Tourist stayed overnight data taken from [Statista](https://www.statista.com/statistics/936569/number-of-overnight-stays-at-hostels-in-denmark-by-region/)

### Media

- The picture in the background has been taken from [Google](https://www.google.com/)

### Acknowledgements
1. A special thanks to my mentor **Ashish Srivastava** for his valuable feedback during mentoring sessions.
2. Google Maps API code has been taken from [Google API Documentation](https://developers.google.com/maps/documentation/javascript/tutorial?hl=es-419)
3. The design and layout of this website is based on the Rule of Thirds which I also used in my previous project.
4. Code Institute tutor support has been a great support during the whole project, a very special thanks to tutor support.
5. Besides tutor support [Stack overflow](https://stackoverflow.com/), [Jquery](https://jquery.com/) and [W3Schools](https://www.w3schools.com/) were great source of help.
6. Code Institute tutorial were very helpful to link contact form with emailjs.
7. Code for the footer section, I used it from my previous project.
8. Bootstrap is also used in the project. (Bootstrap grid, Bootstrap Moodle and Bootstrap classes)
9. A very special thanks to my lovely wife my sons Ibrahim and Ismail for their support and motivation.
10. Logo has been created by using [Brand Crowd](https://www.brandcrowd.com/maker)