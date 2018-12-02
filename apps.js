
//! Setting date on Navigation Bar
/* windows.onload = () => {
    $("#date").html(new Date().toDateString())
} */

//! Weather by City name
$("#btn").click(() => {
    var city = $("#inputfield").val();
    var appId = "&appid=f1ebd6cf576ee85238358ef097582f31";
    var unitC = "&units=metric";
    
    // set empty variables to put data
    var htmlCityData = "";
    var htmlTemperature = "";
    var htmlIcon = "";
    var htmlData = "";
    var htmlDescriptions = "";

//! Get the data from API
if (city != "") {
    $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/find?q='+city+appId+unitC,
        type: 'GET',
        dataType: 'json',
        success: (data) => { //data to this variables under
            console.log(data);
            
            /* //icon Code + icon Url //old
            var iconCode = data.list[0].weather[0].icon;
            console.log(iconCode);
            var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png"; */

            // Code from OpenWeatherMap and change to my icons
    
            var iconCode = generateIcon(data.list[0].weather[0].icon);
            function generateIcon(iconName) {
                switch (iconName) {
                case '01d': return 'clear-sky-day';
                case '02d': return 'few-clouds-day';
                case '03d': return 'scattered-clouds';      
                case '04d': return 'broken-clouds';      
                case '09d': return 'shower-rain';
                case '10d': return 'rain-day';
                case '11d': return 'thunderstorm-day';
                case '13d': return 'snow-day';
                case '50d': return 'mist';
                case '01n': return 'clear-sky-night';
                case '02n': return 'few-clouds-night';
                case '03n': return 'scattered-clouds';      
                case '04n': return 'broken-clouds';      
                case '09n': return 'shower-rain';
                case '10n': return 'rain-night';
                case '11n': return 'thunderstorm-night';
                case '13n': return 'snow-night';
                case '50n': return 'mist';
                }
            } 


            // SET variable in groups 
            htmlCityData += "<p><strong>Weather in your City: </strong>"+data.list[0].name+", "+data.list[0].sys.country+"</p>";
            htmlTemperature += "<p><strong>Temperature: </strong>"+data.list[0].main.temp+" °C</p>";
            htmlIcon += "<img src='views/img/"+iconCode+".png'>";
            htmlData += "<p><strong>Atmospheric pressur: </strong>"+data.list[0].main.pressure+" hPa</p>"+
            "<p><strong>Humidity: </strong>"+data.list[0].main.humidity+"% </p>"+
            "<p><strong>Cloudiness: </strong>"+data.list[0].clouds.all+"% </p>"+
            "<p><strong>Wind Speed: "+"</strong>"+data.list[0].wind.speed+"km/h </p>";
            htmlDescriptions += "<p><strong>Weather: </strong>"+data.list[0].weather[0].main+"</p>";

            // Append to ID file
            $('#htmlCityDataDiv').empty();
            $('#htmlCityDataDiv').append(htmlCityData);
            $('#htmlTemperatureDiv').empty();
            $('#htmlTemperatureDiv').append(htmlTemperature);
            $('#htmlIconDiv').empty();
            $('#htmlIconDiv').append(htmlIcon);   
            $('#htmlDataDiv').empty();
            $('#htmlDataDiv').append(htmlData);
            $('#htmlDescriptions').empty();
            $('#htmlDescriptions').append(htmlDescriptions);
            
            
            // Console.log descriptions tests
            /* console.log(data.list[0].name+"City Name");
            console.log(data.list[0].main.pressure+" hPa, Atmospheric pressure");
            console.log(data.list[0].main.humidity+" Humidity, %");
            console.log(data.list[0].main.temp_max+ " Minimum temperature at the moment");
            console.log(data.list[0].main.temp_min+" Maximum temperature at the moment");
            console.log(data.list[0].wind.speed+ " Wind speed");
            console.log(data.list[0].wind.deg+ " Wind direction, degrees (meteorological)");
            console.log(data.list[0].clouds.all+ " Cloudiness, %");
            
            //icon + descriptions
            console.log(data.list[0].weather[0].icon+ " Weather icon id");
            console.log(data.list[0].weather[0].main+ " Group of weather parameters");
            console.log(data.list[0].weather[0].description+ " Weather condition within the group"); */
          
        }, 
        //Throw error 
        error: (error) => { 
            console.log('There is an error' + error);
        }

    });
}
});