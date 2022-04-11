var searchButton = document.getElementById("search-button");
var query = document.getElementById("#query");
var city = "Escondido";
var APIKey = "a914282a4259cce175b4a3f34d3738fb";
var today = moment().format("MMM Do, YYYY");
var mainDate = document.querySelector(".main-date");

var nextDay1 = moment().add(1, "days").format("MMM Do, YYYY");
var nextDay2 = moment().add(2, "days").format("MMM Do, YYYY");
var nextDay3 = moment().add(3, "days").format("MMM Do, YYYY");
var nextDay4 = moment().add(4, "days").format("MMM Do, YYYY");
var nextDay5 = moment().add(5, "days").format("MMM Do, YYYY");

var mainBox = document.querySelector(".main");
var tempDisplay = document.querySelector(".main-temp");
var windDisplay = document.querySelector(".main-windspeed");
var humidityDisplay = document.querySelector(".main-humidity");
var uviDisplay = document.querySelector(".main-uvindex"); 

var future1 = document.querySelector(".future1");
var future1Date = document.querySelector(".future-1-date");
var future1Temp = document.querySelector(".future-1-temp");
var future1Wind = document.querySelector(".future-1-windspeed");
var future1Humidity = document.querySelector(".future-1-humidity");

var future2 = document.querySelector(".future2");
var future2Date = document.querySelector(".future-2-date");
var future2Temp = document.querySelector(".future-2-temp");
var future2Wind = document.querySelector(".future-2-windspeed");
var future2Humidity = document.querySelector(".future-2-humidity");

var future3 = document.querySelector(".future3");
var future3Date = document.querySelector(".future-3-date");
var future3Temp = document.querySelector(".future-3-temp");
var future3Wind = document.querySelector(".future-3-windspeed");
var future3Humidity = document.querySelector(".future-3-humidity");

var future4 = document.querySelector(".future4");
var future4Date = document.querySelector(".future-4-date");
var future4Temp = document.querySelector(".future-4-temp");
var future4Wind = document.querySelector(".future-4-windspeed");
var future4Humidity = document.querySelector(".future-4-humidity");

var future5 = document.querySelector(".future5");
var future5Date = document.querySelector(".future-5-date");
var future5Temp = document.querySelector(".future-5-temp");
var future5Wind = document.querySelector(".future-5-windspeed");
var future5Humidity = document.querySelector(".future-5-humidity");

// var queryURL = "http://api.openweathermap.org/data/2.5/onecall?lat=32.71&lon=-117.16&appid=a914282a4259cce175b4a3f34d3738fb&units=imperial";
var geocodeURL = "http://api.openweathermap.org/geo/1.0/direct?q=Escondido&limit=5&appid=a914282a4259cce175b4a3f34d3738fb";



searchButton.addEventListener ("click", function () {
    console.log(searchButton.value);
    console.log(city);
    fetch(geocodeURL)
    .then(function (response) {
        return response.json();
    })
    .then (function (data){
        var geocodeLat = JSON.stringify(data[0].lat);
        console.log(geocodeLat);
        var geocodeLon = JSON.stringify(data[0].lon);
        console.log(geocodeLon);
        queryURL = "http://api.openweathermap.org/data/2.5/onecall?lat=" + geocodeLat + "&lon=" + geocodeLon+ "&appid=a914282a4259cce175b4a3f34d3738fb&units=imperial";
        fetch(queryURL)
        .then (function (response){
            return response.json();
        })
        .then (function (data1){
            console.log(data1);
            //main display
            var mainHead = document.createElement("h3");
            mainHead.textContent = city + " " + today; 
            mainDate.appendChild(mainHead);
            tempDisplay.textContent = "Temperature: " + JSON.stringify(data1.current.temp);
            windDisplay.textContent = "Windspeed: " + JSON.stringify(data1.current.wind_speed);
            humidityDisplay.textContent = "Humidity: " + JSON.stringify(data1.current.humidity);
            uviDisplay.textContent = "UVI: " + JSON.stringify(data1.current.uvi);
            //forecasted day 1 display
            var future1Head = document.createElement("h5");
            future1Head.textContent= nextDay1;
            future1Date.appendChild(future1Head);
            future1Temp.textContent= "Temp: " + JSON.stringify(data1.daily[0].temp.day);
            future1Wind.textContent= "Windspeed: " + JSON.stringify(data1.daily[0].wind_speed);
            future1Humidity.textContent= "Humidity: " + JSON.stringify(data1.daily[0].humidity);
            //forecasted day 2 display
            var future2Head = document.createElement("h5");
            future2Head.textContent= nextDay2;
            future2Date.appendChild(future2Head);
            future2Temp.textContent= "Temp: " + JSON.stringify(data1.daily[1].temp.day);
            future2Wind.textContent= "Windspeed: " + JSON.stringify(data1.daily[1].wind_speed);
            future2Humidity.textContent= "Humidity: " + JSON.stringify(data1.daily[1].humidity);
            //forecasted day 3 display
            var future3Head = document.createElement("h5");
            future3Head.textContent= nextDay3;
            future3Date.appendChild(future3Head);
            future3Temp.textContent= "Temp: " + JSON.stringify(data1.daily[2].temp.day);
            future3Wind.textContent= "Windspeed: " + JSON.stringify(data1.daily[2].wind_speed);
            future3Humidity.textContent= "Humidity: " + JSON.stringify(data1.daily[2].humidity);
            //forecasted day 4 display
            var future4Head = document.createElement("h5");
            future4Head.textContent= nextDay4;
            future4Date.appendChild(future4Head);
            future4Temp.textContent= "Temp: " + JSON.stringify(data1.daily[3].temp.day);
            future4Wind.textContent= "Windspeed: " + JSON.stringify(data1.daily[3].wind_speed);
            future4Humidity.textContent= "Humidity: " + JSON.stringify(data1.daily[3].humidity);
            //forecasted day 5 display
            var future5Head = document.createElement("h5");
            future5Head.textContent= nextDay5;
            future5Date.appendChild(future5Head);
            future5Temp.textContent= "Temp: " + JSON.stringify(data1.daily[4].temp.day);
            future5Wind.textContent= "Windspeed: " + JSON.stringify(data1.daily[4].wind_speed);
            future5Humidity.textContent= "Humidity: " + JSON.stringify(data1.daily[4].humidity);
        })

    })    
})
