// const innerContainers = document.querySelectorAll(".layer");
// const numbers = document.querySelectorAll(".sqr");

// numbers.forEach((event, index) => {
//   event.setAttribute("id", `number-${index}`);
//   event.setAttribute("draggable", true);
// });

// numbers.forEach((number) => {
//   number.addEventListener("dragstart", (event) => {
//     event.target.style.backgroundColor = "yellow";
//     event.dataTransfer.setData("text/plain", event.target.id);
//   });
//   number.addEventListener("dragend", (event) => {
//     event.target.style.backgroundColor = "#c0c0c0";
//   });
// });

// innerContainers.forEach((inner) => {
//   inner.addEventListener("drop", (event) => {
//     if (inner.children.length === 0) {
//       const elementId = event.dataTransfer.getData("text/plain");
//       const element = document.getElementById(elementId);
//       event.target.appendChild(element);
//     }
//   });
//   inner.addEventListener("dragover", (event) => {
//     event.preventDefault();
//   });
// });

// bodlogo2
const red = document.getElementById("red");
const blue = document.getElementById("blue");
const redNumber = document.getElementById("redNum");
const blueNumber = document.getElementById("blueNum");
const resetButton = document.getElementById("reset");

redNumber.innerText = 50;
blueNumber.innerText = 50;

red.addEventListener("click", () => {
  redNumber.innerText++;
  blueNumber.innerText = 100 - redNumber.innerText;

  red.style.width = `${redNumber.innerText}%`;
  blue.style.width = `${blueNumber.innerText}%`;
});

blue.addEventListener("click", () => {
  blueNumber.innerText++;
  redNumber.innerText = 100 - blueNumber.innerText;

  red.style.width = `${redNumber.innerText}%`;
  blue.style.width = `${blueNumber.innerText}%`;
});
