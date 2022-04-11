var searchButton = document.getElementById("search-button");
var query = document.getElementById("#query");
var city = "San Diego";
var APIKey = "a914282a4259cce175b4a3f34d3738fb";


var tempDisplay = document.querySelector(".main-temp");
var windDisplay = document.querySelector(".main-windspeed");
var humidityDisplay = document.querySelector(".main-humidity");
var uviDisplay = document.querySelector(".main-uvindex"); 

var future1 = document.querySelector(".future1");
var future1Temp = document.querySelector(".future-1-temp");
var future1Wind = document.querySelector(".future-1-windspeed");
var future1Humidity = document.querySelector(".future-1-humidity");

var future2 = document.querySelector(".future2");
var future2Temp = document.querySelector(".future-2-temp");
var future2Wind = document.querySelector(".future-2-windspeed");
var future2Humidity = document.querySelector(".future-2-humidity");

var future3 = document.querySelector(".future3");
var future3Temp = document.querySelector(".future-3-temp");
var future3Wind = document.querySelector(".future-3-windspeed");
var future3Humidity = document.querySelector(".future-3-humidity");

var future4 = document.querySelector(".future4");
var future4Temp = document.querySelector(".future-4-temp");
var future4Wind = document.querySelector(".future-4-windspeed");
var future4Humidity = document.querySelector(".future-4-humidity");

var future5 = document.querySelector(".future5");
var future5Temp = document.querySelector(".future-5-temp");
var future5Wind = document.querySelector(".future-5-windspeed");
var future5Humidity = document.querySelector(".future-5-humidity");

// var queryURL = "http://api.openweathermap.org/data/2.5/onecall?lat=32.71&lon=-117.16&appid=a914282a4259cce175b4a3f34d3738fb&units=imperial";
var geocodeURL = "http://api.openweathermap.org/geo/1.0/direct?q=Escondido&limit=5&appid=a914282a4259cce175b4a3f34d3738fb";


searchButton.addEventListener("click", function () {
    console.log(city);
    fetch(geocodeURL)
    .then(function (response) {
        return response.json();
    })
    .then (function (data){
        console.log(data);
        var geocodeLat = JSON.stringify(data[0].lat);
        console.log(geocodeLat);
        var geocodeLon = JSON.stringify(data[0].lon);
        console.log(geocodeLon);
        queryURL = "http://api.openweathermap.org/data/2.5/onecall?lat=" + geocodeLat + "&lon=" + geocodeLon+ "&appid=a914282a4259cce175b4a3f34d3738fb&units=imperial";

        
    } .then(function display (){
        fetch(queryURL)
        .then(function (response){
            return response.json();
        })
        .then (function (data){
        
        console.log(JSON.stringify(data.current.temp));

        //main display
        tempDisplay.textContent = "Temperature: " + JSON.stringify(data.current.temp);
        windDisplay.textContent = "Windspeed: " + JSON.stringify(data.current.wind_speed);
        humidityDisplay.textContent = "Humidity: " + JSON.stringify(data.current.humidity);
        uviDisplay.textContent = "UVI: " + JSON.stringify(data.current.uvi);
        
        //forecasted day 1 display
        future1Temp.textContent= "Temp: " + JSON.stringify(data.daily[0].temp.day);
        future1Wind.textContent= "Windspeed: " + JSON.stringify(data.daily[0].wind_speed);
        future1Humidity.textContent= "Humidity: " + JSON.stringify(data.daily[0].humidity);

        //forecasted day 2 display
        future2Temp.textContent= "Temp: " + JSON.stringify(data.daily[1].temp.day);
        future2Wind.textContent= "Windspeed: " + JSON.stringify(data.daily[1].wind_speed);
        future2Humidity.textContent= "Humidity: " + JSON.stringify(data.daily[1].humidity);
        
        //forecasted day 3 display
        future3Temp.textContent= "Temp: " + JSON.stringify(data.daily[2].temp.day);
        future3Wind.textContent= "Windspeed: " + JSON.stringify(data.daily[2].wind_speed);
        future3Humidity.textContent= "Humidity: " + JSON.stringify(data.daily[2].humidity);

        //forecasted day 4 display
        future4Temp.textContent= "Temp: " + JSON.stringify(data.daily[3].temp.day);
        future4Wind.textContent= "Windspeed: " + JSON.stringify(data.daily[3].wind_speed);
        future4Humidity.textContent= "Humidity: " + JSON.stringify(data.daily[3].humidity);

        //forecasted day 5 display
        future5Temp.textContent= "Temp: " + JSON.stringify(data.daily[4].temp.day);
        future5Wind.textContent= "Windspeed: " + JSON.stringify(data.daily[4].wind_speed);
        future5Humidity.textContent= "Humidity: " + JSON.stringify(data.daily[4].humidity);
        )}
    })
})