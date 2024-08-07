const weathers = [
  {
    city: "New York",
    temperature: 28,
    weather: "Sunny",
    icon: "sunny",
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
    icon: "snowy",
    day: "night",
    time: new Date().toLocaleTimeString("fr-FR"),
  },
  {
    city: "Ulaanbaatar",
    temperature: 25,
    weather: "Clear",
    icon: "sunny",
    day: "day",
    time: new Date().toLocaleTimeString("fr-FR"),
  },
];
//icon component

// const iconComponent = (icon) => {
//   if (icon === "sunny") {
//     return `<i class="fa-solid fa-sun"></i>`;
//   } else if (icon === "cloudy") {
//     return `<i class="fa-solid fa-cloud-sun"></i>`;
//   } else if (icon === "rainy") {
//     return `<i class="fa-solid fa-cloud-showers-heavy"></i>`;
//   } else if (icon === "snowy") {
//     return `<i class="fa-solid fa-snowflake"></i>`;
//   }
// };

const weatherImages = {
  sunny: {
    icon: `<i class="fa-solid fa-sun"></i>`,
    dayBackground: "./img/sky-sunny-clouds-cloudy.webp",
  },
  cloudy: {
    icon: `<i class="fa-solid fa-cloud"></i>`,
    dayBackground:
      "./img/1000_F_828868638_LVMM4HOAigVpklAtNfMT8emWK3CWrPCV.jpg",
    nightBackground:
      "./img/1000_F_783391580_fz5bBIdKyZqWF93pMkag6nJjOAiB1rtW.jpg",
  },
  rainy: {
    icon: `<i class="fa-solid fa-cloud-rain"></i>`,
    dayBackground: "./img/ai-generated-beautiful-rain-day-view-photo.jpg",
    nightBackground: "./img/Rain photography_രാത്രിമഴ ❤️.jpeg",
  },
  snowy: {
    icon: `<i class="fa-solid fa-snowflake"></i>`,
    dayBackground:
      "./img/HD-wallpaper-snowy-day-stream-snow-winter-snowflakes.jpg",
    nightBackground:
      "./img/1000_F_308999044_MUVyur2zQEAe9AnkEQcQsXCN6QlTF2IR.jpg",
  },
};
// card component

const cardComponent = ({ city, temperature, weather, time, day, icon }) => {
  return `
    <div class="mainWeather">
      <div id="location" style="background-image: url(${
        day == "day"
          ? weatherImages[icon].dayBackground
          : weatherImages[icon].nightBackground
      });">
        <div class="left">
          <div>
            <h1>${city}</h1>
            <p class="time">${time}</p>
          </div>
          <div>
            <p>${weather}</p>
          </div>
        </div>
        <div class="right">
          <div class="gradus">${temperature}<sup>o</sup></div>
          <div class="icon">
            ${weatherImages[icon].icon}
          </div>
        </div>
      </div>
    </div>`;
};

const render = (data) => {
  const boards = document.getElementById("main");
  boards.innerHTML = "";

  data.forEach((element) => {
    boards.innerHTML += cardComponent(element);
  });
};
render(weathers);

const textInput = document.getElementById("text");

textInput.addEventListener("keyup", () => {
  const filtered = weathers.filter(({ city }) =>
    city.toLowerCase().includes(textInput.value.toLowerCase())
  );
  render(filtered);
});
