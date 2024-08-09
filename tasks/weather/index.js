// const weatherImages = {
//   sunny: {
//     icon: `<i class="fa-solid fa-sun"></i>`,
//     dayBackground: "./img/sky-sunny-clouds-cloudy.webp",
//   },
//   cloudy: {
//     icon: `<i class="fa-solid fa-cloud"></i>`,
//     dayBackground:
//       "./img/1000_F_828868638_LVMM4HOAigVpklAtNfMT8emWK3CWrPCV.jpg",
//     nightBackground:
//       "./img/1000_F_783391580_fz5bBIdKyZqWF93pMkag6nJjOAiB1rtW.jpg",
//   },
//   rainy: {
//     icon: `<i class="fa-solid fa-cloud-rain"></i>`,
//     dayBackground: "./img/ai-generated-beautiful-rain-day-view-photo.jpg",
//     nightBackground: "./img/Rain photography_രാത്രിമഴ ❤️.jpeg",
//   },
//   snowy: {
//     icon: `<i class="fa-solid fa-snowflake"></i>`,
//     dayBackground:
//       "./img/HD-wallpaper-snowy-day-stream-snow-winter-snowflakes.jpg",
//     nightBackground:
//       "./img/1000_F_308999044_MUVyur2zQEAe9AnkEQcQsXCN6QlTF2IR.jpg",
//   },
// };
// {
//   "coord": {
//     "lon": -0.1257,
//     "lat": 51.5085
//   },
//   "weather": [
//     {
//       "id": 804,
//       "main": "Clouds",
//       "description": "overcast clouds",
//       "icon": "04n"
//     }
//   ],
//   "base": "stations",
//   "main": {
//     "temp": 19.23,
//     "feels_like": 19.48,
//     "temp_min": 17.8,
//     "temp_max": 20,
//     "pressure": 1010,
//     "humidity": 87,
//     "sea_level": 1010,
//     "grnd_level": 1007
//   },
//   "visibility": 10000,
//   "wind": {
//     "speed": 6.17,
//     "deg": 230
//   },
//   "clouds": {
//     "all": 100
//   },
//   "dt": 1723173580,
//   "sys": {
//     "type": 2,
//     "id": 2075535,
//     "country": "GB",
//     "sunrise": 1723178226,
//     "sunset": 1723232096
//   },
//   "timezone": 3600,
//   "id": 2643743,
//   "name": "London",
//   "cod": 200
// }

const getWeatherData = async (locationToFind) => {
  const url = `
https://api.openweathermap.org/data/2.5/weather?q=${locationToFind}&units=Metric&appid=7c91776fb1267161889e298c3e7ceb4b
 `;
  const result = await fetch(url);
  return result.json();
};
const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("text");

searchButton.addEventListener("click", async () => {
  const main1 = document.getElementById("main");
  main1.innerHTML = "";
  const { weather, main, name, timezone } = await getWeatherData(
    searchInput.value
  );
  main1.innerHTML += `
  <div class="mainWeather">
    <div id="location" style="background-image: url();">
      <div class="left">
        <div>
          <h1>${name}</h1>
          <p class="time">${timezone}</p>
        </div>
        <div>
          <p>${weather[0].description}</p>
        </div>
      </div>
      <div class="right">
        <div class="gradus">${main.temp}<sup>o</sup></div>
        <div class="icon">
        </div>
      </div>
    </div>
  </div>`;
});
const weatherImages = {
  Clear: {
    icon: `<i class="fa-solid fa-sun"></i>`,
    dayBackground: "./img/sky-sunny-clouds-cloudy.webp",
  },
  clouds: {
    icon: `<i class="fa-solid fa-cloud"></i>`,
    dayBackground:
      "./img/1000_F_828868638_LVMM4HOAigVpklAtNfMT8emWK3CWrPCV.jpg",
    nightBackground:
      "./img/1000_F_783391580_fz5bBIdKyZqWF93pMkag6nJjOAiB1rtW.jpg",
  },
  rain: {
    icon: `<i class="fa-solid fa-cloud-rain"></i>`,
    dayBackground: "./img/ai-generated-beautiful-rain-day-view-photo.jpg",
    nightBackground: "./img/Rain photography_രാത്രിമഴ ❤️.jpeg",
  },
  snow: {
    icon: `<i class="fa-solid fa-snowflake"></i>`,
    dayBackground:
      "./img/HD-wallpaper-snowy-day-stream-snow-winter-snowflakes.jpg",
    nightBackground:
      "./img/1000_F_308999044_MUVyur2zQEAe9AnkEQcQsXCN6QlTF2IR.jpg",
  },
};
