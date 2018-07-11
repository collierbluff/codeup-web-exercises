//Converts String to title case

function titleCase(input) {

    input = input.toLowerCase();
    var strArr = input.split(' ');

    for (var i = 0; i < strArr.length; i++) {
        strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1);
    }
    return strArr.join(' ');
}

//Fill the forecast panels with the appropriate weather data

function populateWeather(weatherData){

        //Make header match City Name

        $('#cityName').text(weatherData.city.name);

        //Grab three days of Data

        var i = 0;
        var htmlHolder = [];
        while(i <= 16){

            //Temperature
            var html = '<h2 class="temp">';
            html += weatherData.list[i].main.temp_max.toFixed(1)+ '&#176 F' + ' / '
                + weatherData.list[i].main.temp_min.toFixed(1)+ '&#176 F' + '</h2>';

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

        //Fills forecast panels

        $('#today').html(htmlHolder[0] + '<h3>Today</h3>');
        $('#tomorrow').html(htmlHolder[8] + '<h3>Tomorrow</h3>');
        $('#threeDay').html(htmlHolder[16] + '<h3>Overmorrow</h3>');

}

//Function takes a latitude and longitude, updates forecast panels

function latLongSearch(lat, long){

    $.ajax("http://api.openweathermap.org/data/2.5/forecast?" +
        "appid=9b5be99373201bec63106efe33259a14&" +
        "units=imperial&" + "lat=" + lat +
        "&lon=" + long
    ).done(populateWeather);
}

//Initial Lat/Long declaration and forecast panel render (San Antonio)

var lat = 29.4241;
var long = -98.4937;

latLongSearch(lat, long);
//Initialize Google Map with marker and various event listeners

    function initMap() {

        var mapOptions={
            zoom: 9,
            center: {
                lat: lat,
                lng: long
            }};

        var map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);

        var marker = new google.maps.Marker({
            map:map,
            draggable: true,
            position: {lat: lat, lng: long}
        });

        var geocoder = new google.maps.Geocoder();

        //Marker listener, updates weather from new marker position

        marker.addListener('dragend', function () {
            latLongSearch(marker.getPosition().lat(), marker.getPosition().lng());

            //Scroll up to forecast panels

            var yPos = window.pageYOffset;
            var interval = setInterval(function () {
                if(yPos > 220){
                window.scrollTo(0, yPos);
                yPos-=4;
                if(yPos <= 220){
                    clearInterval(interval);
                }}
            }, 1);


        });

        function onGeocode(result){

                var location = result[0].geometry.location;

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

            //Scroll down a little

            var yPos = window.pageYOffset;
            var interval = setInterval(function () {
                if(yPos < 220){
                    window.scrollTo(0, yPos);
                    yPos+=4;
                    if(yPos >= 220){
                        clearInterval(interval);
                    }}
            }, 1);
            }
        });


    }


