let weather = {
  apikey: "d85ceab3b1ff914765662929bd511fe9",
  fetchWeather: function(city){
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" 
      + city 
      + "&units=metric&appid=" 
      + this.apikey
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function(data){

    const { name } = data;
    const { icon,description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    console.log(name,icon,description,temp,humidity,speed);  
    document.querySelector(".city").innerText = name;
    document.querySelector(".icon").src =
    "https://openweathermap.org/img/wn/" + icon +".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + " 도"
    document.querySelector(".humidity").innerText = "humidity: " + humidity + " %";
    document.querySelector(".wind").innerText = "wind speed: " +  speed + " km/h";

  },
    search: function(){
      this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

document
.querySelector(".search button").addEventListener("click",function(){
    weather.search();

});
  weather.fetchWeather("seoul");
  


