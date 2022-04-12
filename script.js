var histButton = document.getElementById("search-button");
var query = document.getElementById("#query");

var APIKey = "a914282a4259cce175b4a3f34d3738fb";
var today = moment().format("MMM Do, YYYY");
var forecastContainer = document.querySelector(".forecast-container")


var nextDay1 = moment().add(1, "days").format("MMM Do, YYYY");
var nextDay2 = moment().add(2, "days").format("MMM Do, YYYY");
var nextDay3 = moment().add(3, "days").format("MMM Do, YYYY");
var nextDay4 = moment().add(4, "days").format("MMM Do, YYYY");
var nextDay5 = moment().add(5, "days").format("MMM Do, YYYY");

var mainBox = document.querySelector(".main");
var mainDate = document.querySelector(".main-date");
var mainIcon = document.querySelector(".main-icon");
var tempDisplay = document.querySelector(".main-temp");
var windDisplay = document.querySelector(".main-windspeed");
var humidityDisplay = document.querySelector(".main-humidity");
var uviDisplay = document.querySelector(".main-uvindex"); 

var future1 = document.querySelector(".future1");
var future1Date = document.querySelector(".future-1-date");
var future1Icon = document.querySelector(".future-1-icon");
var future1Temp = document.querySelector(".future-1-temp");
var future1Wind = document.querySelector(".future-1-windspeed");
var future1Humidity = document.querySelector(".future-1-humidity");

var future2 = document.querySelector(".future2");
var future2Date = document.querySelector(".future-2-date");
var future2Icon = document.querySelector(".future-2-icon");
var future2Temp = document.querySelector(".future-2-temp");
var future2Wind = document.querySelector(".future-2-windspeed");
var future2Humidity = document.querySelector(".future-2-humidity");

var future3 = document.querySelector(".future3");
var future3Date = document.querySelector(".future-3-date");
var future3Icon = document.querySelector(".future-3-icon");
var future3Temp = document.querySelector(".future-3-temp");
var future3Wind = document.querySelector(".future-3-windspeed");
var future3Humidity = document.querySelector(".future-3-humidity");

var future4 = document.querySelector(".future4");
var future4Date = document.querySelector(".future-4-date");
var future4Icon = document.querySelector(".future-4-icon");
var future4Temp = document.querySelector(".future-4-temp");
var future4Wind = document.querySelector(".future-4-windspeed");
var future4Humidity = document.querySelector(".future-4-humidity");

var future5 = document.querySelector(".future5");
var future5Date = document.querySelector(".future-5-date");
var future5Icon = document.querySelector(".future-5-icon");
var future5Temp = document.querySelector(".future-5-temp");
var future5Wind = document.querySelector(".future-5-windspeed");
var future5Humidity = document.querySelector(".future-5-humidity");

var cityInputEl = document.querySelector("#query");
var mainDateContainer = document.getElementById("main-date-container");
var searchList = document.getElementById("search-list");

var fiveDayHeadline = document.getElementById("five-day-headline");

histButton.addEventListener ("click", function (event) {
    localStorage.setItem("searchItem", cityInputEl.value.trim());
    event.preventDefault();
    var queryName = cityInputEl.value.trim();
    console.log(queryName);
    var geocodeURL = "https://api.openweathermap.org/geo/1.0/direct?q=" + queryName + "&limit=5&appid=a914282a4259cce175b4a3f34d3738fb";
    if (queryName) {
        cityInputEl.value = " ";
    } else {
        alert("Please enter a valid city");
        return;
    }
    fetch(geocodeURL)
    .then(function (response) {
        return response.json();
    })
    .then (function (data){
        var geocodeLat = JSON.stringify(data[0].lat);
        console.log(geocodeLat);
        var geocodeLon = JSON.stringify(data[0].lon);
        console.log(geocodeLon);
        queryURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + geocodeLat + "&lon=" + geocodeLon+ "&appid=a914282a4259cce175b4a3f34d3738fb&units=imperial";
        fetch(queryURL)
        .then (function (response){
            return response.json();
        })
        .then (function (data1){
            console.log(data1);
            //main display
            var mainHead = document.createElement("h3");
            mainHead.textContent = queryName + " " + today; 
            mainDate.appendChild(mainHead);
            var img = document.createElement("img");
            var iconCode = data1.current.weather[0].icon;
            var iconURL = "https://openweathermap.org/img/wn/" + iconCode + "@2x.png";
            img.setAttribute("src", iconURL);
            mainIcon.appendChild(img);
            tempDisplay.textContent = "Temperature: " + JSON.stringify(data1.current.temp) + " Fahrenheit";
            windDisplay.textContent = "Windspeed: " + JSON.stringify(data1.current.wind_speed) + " mph";
            humidityDisplay.textContent = "Humidity: " + JSON.stringify(data1.current.humidity) + "%";
            uviDisplay.textContent = "UVI: " + JSON.stringify(data1.current.uvi);
            var fiveDay = document.createElement("h3");
            fiveDay.textContent = "Five Day Forecast:";
            fiveDayHeadline.appendChild(fiveDay);
            //forecasted day 1 display
            var future1Head = document.createElement("h5");
            future1Head.textContent= nextDay1;
            future1Date.appendChild(future1Head);
            var future1Img = document.createElement("img");
            var future1IconRef= data1.daily[0].weather[0].icon;
            var icon1URL = "https://openweathermap.org/img/wn/" + future1IconRef + ".png";
            future1Img.setAttribute("src", icon1URL);
            future1Icon.appendChild(future1Img);
            future1Temp.textContent= "Temp: " + JSON.stringify(data1.daily[0].temp.day) + " Fahrenheit";
            future1Wind.textContent= "Windspeed: " + JSON.stringify(data1.daily[0].wind_speed) + " mph";
            future1Humidity.textContent= "Humidity: " + JSON.stringify(data1.daily[0].humidity) + "%";
            //forecasted day 2 display
            var future2Head = document.createElement("h5");
            future2Head.textContent= nextDay2;
            future2Date.appendChild(future2Head);
            var future2Img = document.createElement("img");
            var future2IconRef= data1.daily[1].weather[0].icon;
            var icon2URL = "https://openweathermap.org/img/wn/" + future2IconRef + ".png";
            future2Img.setAttribute("src", icon2URL);
            future2Icon.appendChild(future2Img);
            future2Temp.textContent= "Temp: " + JSON.stringify(data1.daily[1].temp.day) + " Fahrenheit";
            future2Wind.textContent= "Windspeed: " + JSON.stringify(data1.daily[1].wind_speed) + " mph";
            future2Humidity.textContent= "Humidity: " + JSON.stringify(data1.daily[1].humidity) + "%";
            //forecasted day 3 display
            var future3Head = document.createElement("h5");
            future3Head.textContent= nextDay3;
            future3Date.appendChild(future3Head);
            var future3Img = document.createElement("img");
            var future3IconRef= data1.daily[2].weather[0].icon;
            var icon3URL = "https://openweathermap.org/img/wn/" + future3IconRef + ".png";
            future3Img.setAttribute("src", icon3URL);
            future3Icon.appendChild(future3Img);
            future3Temp.textContent= "Temp: " + JSON.stringify(data1.daily[2].temp.day) + " Fahrenheit";
            future3Wind.textContent= "Windspeed: " + JSON.stringify(data1.daily[2].wind_speed) + " mph";
            future3Humidity.textContent= "Humidity: " + JSON.stringify(data1.daily[2].humidity) + "%";
            //forecasted day 4 display
            var future4Head = document.createElement("h5");
            future4Head.textContent= nextDay4;
            future4Date.appendChild(future4Head);
            var future4Img = document.createElement("img");
            var future4IconRef= data1.daily[3].weather[0].icon;
            var icon4URL = "https://openweathermap.org/img/wn/" + future4IconRef + ".png";
            future4Img.setAttribute("src", icon4URL);
            future4Icon.appendChild(future4Img);
            future4Temp.textContent= "Temp: " + JSON.stringify(data1.daily[3].temp.day) + " Fahrenheit";
            future4Wind.textContent= "Windspeed: " + JSON.stringify(data1.daily[3].wind_speed) + " mph";
            future4Humidity.textContent= "Humidity: " + JSON.stringify(data1.daily[3].humidity) + "%";
            //forecasted day 5 display
            var future5Head = document.createElement("h5");
            future5Head.textContent= nextDay5;
            future5Date.appendChild(future5Head);
            var future5Img = document.createElement("img");
            var future5IconRef= data1.daily[4].weather[0].icon;
            var icon5URL = "https://openweathermap.org/img/wn/" + future5IconRef + ".png";
            future5Img.setAttribute("src", icon5URL);
            future5Icon.appendChild(future5Img);
            future5Temp.textContent= "Temp: " + JSON.stringify(data1.daily[4].temp.day) + " Fahrenheit";
            future5Wind.textContent= "Windspeed: " + JSON.stringify(data1.daily[4].wind_speed) + " mph";
            future5Humidity.textContent= "Humidity: " + JSON.stringify(data1.daily[4].humidity) + "%";
        })
    })   
    function addButton() {
    var histButton = document.createElement("button");
    histButton.textContent = queryName;
    histButton.addClass = (".center-buttons");
    histButton.addClass = ("width: 100%;");
    searchList.classList.add("block");
    searchList.appendChild(histButton);
    localStorage.setItem("search-record", histButton);
} 
addButton();
})

// function init(){
//      var storedSearch = JSON.parse(localStorage.getItem("searchItem"));
//      console.log(storedSearch);
//      if (storedSearch){
//          searchList = storedSearch;
//      }

// }


// function init(){
//     var storedSearch = JSON.parse(localStorage.getItem("history"));
//     console.log(storedSearch);
// }

// function renderSearchList() {
//     searchList.innerHTML = "";
  
//     for (var i = 0; i < searches.length; i++) {
//       var searches = searches[i];
  
//       var historyButton = document.createElement("button");
//       historyButton.textContent = (storedSearch);
//       historyButton.setAttribute("data-index", i);
  
//       searchList.appendChild(historyButton);
//     }
//   }
// init()
// renderSearchList()