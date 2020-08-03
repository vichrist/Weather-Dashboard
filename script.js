//Create variable that holds emtpy array 
let history = []; 

let userInput = document.getElementById('city').value; 

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

//Adding event listener and passing through the function addCity
document.addEventListener('DOMContentLoaded', ()=> {
    document.getElementById('btn1').addEventListener('click', addCity);
});

//button click event to execute API call 

$('#btn1').on('click', function () {
        var userAPI = $("#city").val();      
        searchWeatherTrips(userAPI); 
        console.log(userAPI);
    });

//Function to execute the API call 
function searchWeatherTrips(userAPI) {
  $('.API-container').empty(); 
    var queryURL = 'http://api.openweathermap.org/data/2.5/weather?q=' + userAPI + '&appid=ce3b9593e61b336933f1777b5554991c';


$.ajax ({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    console.log('City Name:', response.name);
    console.log('Temperature: ', response.main.temp);
    console.log('Humidity:', response.main.humidity); 
    console.log('Wind Speed: ', response.wind.speed);

//Create variables that are assigned to specific API data being called 

    var h3 = $('<h3>').addClass('API-container').text(userInput);
    console.log(h3);

    var temp = $('<p>').addClass('API-container').text("Temperature: " + response.main.temp); 
    console.log(temp);

    var humidity = $('<p>').addClass('API-container').text("Humidity: " + response.main.humidity); 
    console.log(humidity);

    var wind = $('<p>').addClass('API-container').text("Wind Speed: " + response.wind.speed); 
    console.log(wind);  

    var uvIndex = $('<p>').addClass('API-container').text("UV Index: "); 
    console.log(uvIndex);  



//Append everything

    $('.API-container').append(h3, temp, humidity, wind, uvIndex);

    $('.API-container').slideDown('slow');

    $("#city").text(JSON.stringify(response)); 
  }).catch(function(error){
    console.log(error)
  })
};
















