//Create variable that holds emtpy array 
let history = []; 

let userInput = document.getElementById('city').value; 

let dateToday = new Date(); 


//functionality of code 
let addCity = (ev) => {
  ev.preventDefault(); //prevents the form from submitting 
  userInput = document.getElementById('city').value; //variable set to user input value 
  history.push(userInput); //pushes user input value into empty array 
  document.querySelector('form').reset(); //resets the form "clears" for next input value

  console.log('added', history ); 
  let searchHistory = document.querySelector('.city-container'); //variable that is set to querySelect the city-container which pulls in on line 25 the text content 
  searchHistory.textContent = (history); 


//Locally storing history of user input values 
  localStorage.setItem('userSearchList', JSON.stringify(history) );
  }

// //Adding event listener and passing through the function addCity
document.addEventListener('DOMContentLoaded', ()=> {
    document.getElementById('btn1').addEventListener('click', addCity);
});

//button click event to execute API call 

$('#btn1').on('click', function () {
        var userAPI = $("#city").val();      
        searchWeather(userAPI); 
        console.log(userAPI);
    });

//Function to execute the API call 
function searchWeather(userAPI) {
  $('.API-container').empty(); 
  $('.container-time').empty(); 
    // var queryURL = 'http://api.openweathermap.org/data/2.5/weather?q=' + userAPI + '&appid=ce3b9593e61b336933f1777b5554991c';
    var queryURL = 'http://api.openweathermap.org/data/2.5/forecast?q=' + userAPI + '&appid=ce3b9593e61b336933f1777b5554991c';


$.ajax ({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    console.log('City Name:', response.city.name); //changed from console.log('City Name:', response.name)
    console.log('Temperature: ', response.list[0].main.temp); //Changed from console.log('Temperature: ', response.main.temp);
    console.log('Humidity:', response.list[0].main.humidity); //Changed from console.log('Humidity:', response.main.humidity); 
    console.log('Wind Speed: ', response.list[0].wind.speed); //Changed from console.log('Wind Speed: ', response.wind.speed);
    console.log('Current Date:', response.list[0].dt_txt);
  

//Create variables that are assigned to specific API data being called 
 
    var h2 = $('<h2>').addClass('API-container').text(userInput);
    console.log('h2', h2);

    // var tempDate = $('<h3>').addClass('API-container').text("Date:" + response.list[0].dt_txt); 
    // console.log("Current Date:", tempDate); 

    // var weatherIcon = `https://openweathermap.org/img/wn/${response.list[0].weather[0].icon}@2x.png`;
    // console.log('weathericon', weatherIcon); 

    var temp = $('<p>').addClass('API-container').text("Temperature:" + response.list[0].main.temp + " F"); //"Temperature:" + response.main.temp + " F"
    console.log('temp', temp);

    var humidity = $('<p>').addClass('API-container').text("Humidity:" + response.list[0].main.humidity + "%"); //"Humidity:" + response.main.humidity + "%"
    console.log("humidity", humidity);

    var wind = $('<p>').addClass('API-container').text("Wind Speed:" + response.list[0].wind.speed + " MPH"); //Wind Speed:" + response.wind.speed + " MPH
    console.log("wind", wind);  

    var tempDes = $('<p>').addClass('API-container').text("Description:" + response.list[0].weather[0].description);      
    console.log('desc:', tempDes);




    // var tempDate2 = $('<h4>').addClass('API-container').text("Date:" + response.list[5].dt_txt); 
    // console.log("Current Date2:", tempDate2); 

    // // var weatherIcon2 = `https://openweathermap.org/img/wn/${response.list[5].weather[0].icon}@2x.png`;
    // // console.log('weathericon2', weatherIcon2); 

    // var temp2 = $('<p>').addClass('API-container').text("Temperature:" + response.list[5].main.temp + " F"); //"Temperature:" + response.main.temp + " F"
    // console.log('temp2', temp2);

    // var humidity2 = $('<p>').addClass('API-container').text("Humidity:" + response.list[5].main.humidity + "%"); //"Humidity:" + response.main.humidity + "%"
    // console.log("humidity2", humidity2);

    // var wind2 = $('<p>').addClass('API-container').text("Wind Speed:" + response.list[5].wind.speed + " MPH"); //Wind Speed:" + response.wind.speed + " MPH
    // console.log("wind2", wind2);  

    // var tempDes2 = $('<p>').addClass('API-container').text("Description:" + response.list[5].weather[0].description);      
    // console.log('desc2:', tempDes2);










//Append everything
     
    $('.container-time').append(dateToday);
    
    $('.API-container').append(h2, tempDes, temp, humidity, wind); //add tempDate and icon
    // $('.API-container').append(h2, tempDes2, temp2, humidity2, wind2, tempDate2); //add tempDate and icon

    $("#city").text(JSON.stringify(response)); 
  }).catch(function(error){
    console.log(error)
  })
};


// function createWeatherCard (citySelected, id) {

//   // create ids for card elements
//   // const citySelected = `city-${id}`;
//   const tempDate = `date-${id}`;
//   const temp = `temp-${id}`;
//   const hum = `hum-${id}`;
//   const wind = `wind-${id}`;
//   const icon = `icon-${id}`;
 

//   let WeatherDiv = $("<div>");

//     // create card with city name and ids
//     WeatherDiv.html(`
//         <h2 style="text-align: center;">${citySelected} <img id="${icon}" height="70px"></h2>
//         <p id="${tempDate}" style="text-align: center;"></p>
//         <p id="${temp}" style="text-align: center;"></p>
//         <p id="${hum}" style="text-align: center;"></p>
//         <p id="${wind}"style="text-align: center;"></p>
//         <hr>
//          `
//     );

//   //add style to the cards
//   WeatherDiv.attr("style", "background-color: lightskyblue; margin: 15px; border-radius: 12px 12px 12px 12px;"); 

//   // append card to container
//   $(".API-container").append(WeatherDiv); 
// }}