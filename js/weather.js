$.ajax("http://api.openweathermap.org/data/2.5/forecast?appid=9b5be99373201bec63106efe33259a14&id=4726206&units=imperial")
    .done(function (weatherData) {

        console.log(weatherData);

        //Loop Approach?

        var i = 0;
        var htmlHolder = [];
        while(i <= 16){

                    var html = '<h3 class="temp">';

                    html += weatherData.list[i].main.temp_max.toFixed(0) + ' / '
                        + weatherData.list[i].main.temp_min.toFixed(0) + '</h3>';

                    if(weatherData.list[i].weather[0].main === "Clear"){
                            html += '<img src="img/clear.png">';
                    }else if (weatherData.list[i].weather[0].main === "Rain"){
                            html += '<img src="img/rain.jpg">';
                    }

                    html += '<br><strong>Conditions: </strong>' + weatherData.list[i].weather[0].description;
                    html += '<br><strong>Humidity: </strong>' + weatherData.list[i].main.humidity;
                    html += '<br><strong>Wind Speed: </strong>' + weatherData.list[i].wind.speed;
                    html += '<br><strong>Pressure: </strong>' + weatherData.list[i].main.pressure;

                    htmlHolder.push(html);

                i++;
        }

        //First Attempt

        // var todayHTML = '<h3 class="temp">';
        // todayHTML += weatherData.list[0].main.temp_max.toFixed(0) + ' / ' + weatherData.list[0].main.temp_min.toFixed(0) + '</h3>';
        // todayHTML += '<br><strong>Conditions: </strong>' + weatherData.list[0].weather[0].description;
        // todayHTML += '<br><strong>Humidity: </strong>' + weatherData.list[0].main.humidity;
        // todayHTML += '<br><strong>Wind Speed: </strong>' + weatherData.list[0].wind.speed;
        // todayHTML += '<br><strong>Pressure: </strong>' + weatherData.list[0].main.pressure;
        //
        // var tomorrowHTML = '<h3 class="temp">';
        //
        // tomorrowHTML += weatherData.list[8].main.temp_max.toFixed(0) + ' / ' + weatherData.list[8].main.temp_min.toFixed(0) + '</h3>';
        // tomorrowHTML += '<br><strong>Conditions: </strong>' + weatherData.list[8].weather[0].description;
        // tomorrowHTML += '<br><strong>Humidity: </strong>' + weatherData.list[8].main.humidity;
        // tomorrowHTML += '<br><strong>Wind Speed: </strong>' + weatherData.list[8].wind.speed;
        // tomorrowHTML += '<br><strong>Pressure: </strong>' + weatherData.list[8].main.pressure;
        //
        // var threeDayHTML = '<h3 class="temp">';
        //
        // threeDayHTML += weatherData.list[16].main.temp_max.toFixed(0) + ' / ' + weatherData.list[16].main.temp_min.toFixed(0) + '</h3>';
        // threeDayHTML += '<br><strong>Conditions: </strong>' + weatherData.list[16].weather[0].description;
        // threeDayHTML += '<br><strong>Humidity: </strong>' + weatherData.list[16].main.humidity;
        // threeDayHTML += '<br><strong>Wind Speed: </strong>' + weatherData.list[16].wind.speed;
        // threeDayHTML += '<br><strong>Pressure: </strong>' + weatherData.list[16].main.pressure;



        $('#today').html(htmlHolder[0]);
        $('#tomorrow').html(htmlHolder[8]);
        $('#threeDay').html(htmlHolder[16]);

    });