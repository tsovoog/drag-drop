const weathers = [
  {
    city: "New York",
    temperature: 28,
    weather: "Sunny",
    icon: "sun",
    day: "day",
    time: new Date().toLocaleTimeString("en-US"),
  },
  {
    city: "London",
    temperature: 18,
    weather: "Cloudy",
    icon: "cloudy",
    day: "night",
    time: new Date().toLocaleTimeString("en-GB"),
  },
  {
    city: "Tokyo",
    temperature: 30,
    weather: "Rainy",
    icon: "rainy",
    day: "day",
    time: new Date().toLocaleTimeString("ja-JP"),
  },
  {
    city: "Sydney",
    temperature: 22,
    weather: "Partly Cloudy",
    icon: "cloudy",
    day: "day",
    time: new Date().toLocaleTimeString("en-AU"),
  },
  {
    city: "Paris",
    temperature: 25,
    weather: "Clear",
    icon: "moon",
    day: "night",
    time: new Date().toLocaleTimeString("fr-FR"),
  },
];

const weather = document.getElementById("main");

weathers.forEach((element, index) => {
  weather.innerHTML += `
          <div class="mainWeather">
            <div class="location">
              <div class="left">
                <div>
                  <h1>${element.city}</h1>
                  <p class="time">${element.time}</p>
                </div>
                <div>
                  <p>${weather}</p>
                </div>
              </div>
              <div class="right">
                <div class="gradus">${temperature}<sup>o</sup></div>
                <div class="icon">
                  <i class="fa-solid fa-sun"></i>
                  <i class="fa-solid fa-cloud"></i>
                </div>
              </div>
            </div>
          </div>`;
});
