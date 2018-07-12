//Converts a string to title case

function titleCase(input) {

    input = input.toLowerCase();
    let strArr = input.split(' ');

    for (let i = 0; i < strArr.length; i++) {
        strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1);
    }
    return strArr.join(' ');
}

//Takes browsers day index and returns string of day, can take a modifier number to traverse week

function findDay(modifier) {

    let daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    //Provides a default modifier for empty function calls
    if(typeof modifier !== 'number'){
        modifier = 0;
    }

    let dayIndex = new Date().getDay();
    let desiredDay = dayIndex + modifier;

    //If modifier would push us out of week array, treat as a different week
    while((desiredDay) > 6){
        desiredDay -= 7;
    }
    while ((desiredDay < 0)){
        desiredDay += 7;
    }

    return daysOfTheWeek[desiredDay];
}

//Function to scroll to ideal viewing Y value

function scrollForBestView() {

    let yPos = window.pageYOffset;
    let desiredY = 220;
    let moveSpeed = 5;

    //Speeds up scroll if screen is small

    if((window.matchMedia("(max-width: 720px)")).matches){
        moveSpeed = 15;
    }

    let interval = setInterval(function () {
        //If too low
        if(yPos < desiredY){
            window.scrollTo(0, yPos);
            yPos += moveSpeed;

            if(yPos >= desiredY){
                clearInterval(interval);
            }}
        //If too high
        else if(yPos > desiredY){
            window.scrollTo(0, yPos);
            yPos -= moveSpeed;
            if(yPos <= desiredY){
                clearInterval(interval);
            }}

            }, 1);
}

//Fills the forecast panels with the appropriate weather data

function populateWeather(weatherData){

        //Clear Search Bar Text

        $('#citySearch').val('');

        //Make header match current city name

        $('#cityName').text(weatherData.city.name);



        //Grabs three days of data from the weather api (Three hour intervals) and pushes to array with formatting

        let i = 0;
        let htmlHolder = [];
        while(i <= 16){

            //Temperature
            let html = '<h3 class="temp">';
            html += weatherData.list[i].main.temp_max.toFixed(1)+ '&#176 F' + ' / '
                + weatherData.list[i].main.temp_min.toFixed(1)+ '&#176 F' + '</h3>';

            //Default Icon Set with one exception

            if(weatherData.list[i].weather[0].icon === '01d'){
                html += '<img src ="img/clear.png">'
            }else{
            html += '<img src="http://openweathermap.org/img/w/' +
                weatherData.list[i].weather[0].icon + '.png">';
            }
            //Other Conditions

            html += '<br><strong>Conditions: </strong>' + titleCase(weatherData.list[i].weather[0].description);
            html += '<br><strong>Humidity: </strong>' + weatherData.list[i].main.humidity + ' %';
            html += '<br><strong>Wind Speed: </strong>' + weatherData.list[i].wind.speed.toFixed(0) + ' mph';
            html += '<br><strong>Pressure: </strong>' + weatherData.list[i].main.pressure + ' mbar';

            htmlHolder.push(html);

            i++;
        }

        //Fills forecast panels with array html

        $('#today').html(htmlHolder[0] + '<h3>Today</h3>');
        $('#tomorrow').html(htmlHolder[8] + '<h3>Tomorrow</h3>');
        $('#threeDay').html(htmlHolder[16] + '<h3>' + findDay(2) + '</h3>');

}

//Function takes a latitude and longitude, updates forecast panels

function latLongSearch(lat, long){

    $.ajax("http://api.openweathermap.org/data/2.5/forecast?" +
        "appid=9b5be99373201bec63106efe33259a14&" +
        "units=imperial&" + "lat=" + lat + "&lon=" + long
    ).done(populateWeather);
}

//Initial Lat/Long declaration and forecast panel render (San Antonio)

let lat = 29.4241;
let long = -98.4937;

latLongSearch(lat, long);

//Initialize Google Map with marker, geocoder, and various event listeners

    function initMap() {

        let mapOptions={
            zoom: 9,
            center: {
                lat: lat,
                lng: long
            }};

        let map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);

        let marker = new google.maps.Marker({
            map:map,
            draggable: true,
            position: {lat: lat, lng: long}
        });

        let geocoder = new google.maps.Geocoder();

        //Marker listener, updates weather from new marker position

        marker.addListener('dragend', function () {

            latLongSearch(marker.getPosition().lat(), marker.getPosition().lng());
            scrollForBestView();

        });

        //Function to run with geocoder

        function onGeocode(result){

            let location = result[0].geometry.location;

            //Move map and marker to new coordinates

            map.setCenter(location);
            map.setZoom(9);
            marker.setPosition({lat: location.lat(), lng: location.lng()});

            //renders forecast panels with new city

            latLongSearch(location.lat(), location.lng());

        }

        //Geocode event listener (Runs off of the enter key)

        $('#citySearch').keypress(function (e) {

            if(e.charCode === 13){
            geocoder.geocode({'address': $('#citySearch').val()}, onGeocode);

            scrollForBestView();
            }
        });

        //Geocode event listener (Runs off of the search button)

        $('#citySearchBtn').click(function () {

            geocoder.geocode({'address': $('#citySearch').val()}, onGeocode);

            scrollForBestView();
        })

    }