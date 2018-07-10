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
            var html = '<h3 class="temp">';

            //Temperature

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
            html += '<br><strong>Humidity: </strong>' + weatherData.list[i].main.humidity;
            html += '<br><strong>Wind Speed: </strong>' + weatherData.list[i].wind.speed;
            html += '<br><strong>Pressure: </strong>' + weatherData.list[i].main.pressure;

            htmlHolder.push(html);

            i++;
        }

        //Render

        $('#today').html(htmlHolder[0] + '<h3>Today</h3>');
        $('#tomorrow').html(htmlHolder[8] + '<h3>Tomorrow</h3>');
        $('#threeDay').html(htmlHolder[16] + '<h3>Day Three</h3>');

}

//Initial Weather Render (San Antonio)

$.ajax("http://api.openweathermap.org/data/2.5/forecast?appid=9b5be99373201bec63106efe33259a14&id=4726206&units=imperial").done(populateWeather);

var lat = 29.4241;
var long = -98.4937;

$('#lat').keyup(function () {
    lat = $('#lat').val();
});

$('#long').keyup(function () {
    long = $('#long').val();
});

//Latitude and Longitude Search Button

function latLongSearch(lat, long){

    $.ajax("http://api.openweathermap.org/data/2.5/forecast?" +
        "appid=9b5be99373201bec63106efe33259a14&" +
        "units=imperial&" + "lat=" + lat +
        "&lon=" + long
    ).done(populateWeather);
}

$('#latLongSearchBtn').click(latLongSearch(lat, long));

//Google Map integration



    function initMap() {

        var mapOptions={
            zoom: 6,
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

        marker.addListener('dragend', function () {
            lat = marker.getPosition().lat();
            long = marker.getPosition().lng();

            latLongSearch(lat, long);
        })
    }





