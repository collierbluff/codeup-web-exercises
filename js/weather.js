$.ajax("http://api.openweathermap.org/data/2.5/forecast?appid=9b5be99373201bec63106efe33259a14&id=4726206&units=imperial")
    .done(function (weatherData) {

        console.log(weatherData);
        var todayHTML = '<h3 class="temp">';

        todayHTML += weatherData.list[0].main.temp_max.toFixed(0) + ' / ' + weatherData.list[0].main.temp_min.toFixed(0) + '</h3>';
        todayHTML += '<br><strong>Conditions: </strong>' + weatherData.list[0].weather[0].description;
        todayHTML += '<br><strong>Humidity: </strong>' + weatherData.list[0].main.humidity;
        todayHTML += '<br><strong>Wind Speed: </strong>' + weatherData.list[0].wind.speed;
        todayHTML += '<br><strong>Pressure: </strong>' + weatherData.list[0].main.pressure;

        var tomorrowHTML = '<h3 class="temp">';

        tomorrowHTML += weatherData.list[8].main.temp_max.toFixed(0) + ' / ' + weatherData.list[8].main.temp_min.toFixed(0) + '</h3>';
        tomorrowHTML += '<br><strong>Conditions: </strong>' + weatherData.list[8].weather[0].description;
        tomorrowHTML += '<br><strong>Humidity: </strong>' + weatherData.list[8].main.humidity;
        tomorrowHTML += '<br><strong>Wind Speed: </strong>' + weatherData.list[8].wind.speed;
        tomorrowHTML += '<br><strong>Pressure: </strong>' + weatherData.list[8].main.pressure;

        var threeDayHTML = '<h3 class="temp">';

        threeDayHTML += weatherData.list[16].main.temp_max.toFixed(0) + ' / ' + weatherData.list[16].main.temp_min.toFixed(0) + '</h3>';
        threeDayHTML += '<br><strong>Conditions: </strong>' + weatherData.list[16].weather[0].description;
        threeDayHTML += '<br><strong>Humidity: </strong>' + weatherData.list[16].main.humidity;
        threeDayHTML += '<br><strong>Wind Speed: </strong>' + weatherData.list[16].wind.speed;
        threeDayHTML += '<br><strong>Pressure: </strong>' + weatherData.list[16].main.pressure;



        $('#today').html(todayHTML);
        $('#tomorrow').html(tomorrowHTML);
        $('#threeDay').html(threeDayHTML);

    });