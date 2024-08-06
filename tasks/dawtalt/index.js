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

const testobject = {
  sunny: {
    icon: `<i class="fa-solid fa-snowflake"></i>`,
    dayBackground: "./",
    nightBackground: "./",
  },
  cloudy: { icon: "ddd", dayBackground: "./", nightBackground: "./" },
  rainy: { icon: "ddd", dayBackground: "./", nightBackground: "./" },
  snowy: { icon: "ddd", dayBackground: "./", nightBackground: "./" },
};
// card component
const cardComponent = () => {
  weathers.forEach(({ city, temperature, weather, time, day, icon }) => {
    const result = iconComponent(icon);
    const boards = document.getElementById("main");
    // let bgimage;
    // if (day === "day") {

    //   }
    //   bgimage = "./img/sky-sunny-clouds-cloudy.webp";
    // } else if (day === "night") {
    //   bgimage = "./img/pexels-photo-10317078.webp";
    // }

    boards.innerHTML += `
    <div class="mainWeather">
      <div id="location" style="background-image: url(${
        day == "day"
          ? testobject[day].dayBackground
          : testobject[day].nightBackground
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
            ${testobject[day].icon}
          </div>
        </div>
      </div>
    </div>`;
  });
};
cardComponent();
