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
// const red = document.getElementById("red");
// const blue = document.getElementById("blue");
// const redNumber = document.getElementById("redNum");
// const blueNumber = document.getElementById("blueNum");
// const resetButton = document.getElementById("reset");
// const playbutton = document.getElementById("playButton");
// const randomNumber = document.getElementById("random");
// const modal = document.getElementById("winner");

// redNumber.innerText = 50;
// blueNumber.innerText = 50;

// const activeModal = (value, side) => {
//   if (Number(value) === 100) {
//     modal.style.display = "flex";
//     modal.children[0].innerHTML = `${side} is winner`;
//   }
// };

// red.addEventListener("click", (event) => {
//   redNumber.innerText++;
//   if (redNumber.innerText < 100) {
//     blueNumber.innerText = 100 - redNumber.innerText;

//     red.style.width = `${redNumber.innerText}%`;
//     blue.style.width = `${blueNumber.innerText}%`;

//     activeModal(redNumber.innerText, "Red");
//   }
// });

// blue.addEventListener("click", () => {
//   if (blueNumber.innerText < 100) {
//     blueNumber.innerText++;
//     redNumber.innerText = 100 - blueNumber.innerText;

//     red.style.width = `${redNumber.innerText}%`;
//     blue.style.width = `${blueNumber.innerText}%`;

//     activeModal(blueNumber.innerText, "Blue");
//   }
// });

// resetButton.addEventListener("click", () => {
//   redNumber.innerText = 50;
//   blueNumber.innerText = 50;

//   red.style.width = `${redNumber.innerText}%`;
//   blue.style.width = `${blueNumber.innerText}%`;
// });

// document.addEventListener("keyup", (event) => {
//   if (event.key === "q") {
//     if (redNumber.innerText < 100) {
//       redNumber.innerText++;
//       blueNumber.innerText = 100 - redNumber.innerText;

//       red.style.width = `${redNumber.innerText}%`;
//       blue.style.width = `${blueNumber.innerText}%`;

//       activeModal(redNumber.innerText, "Red");
//     }
//   } else {
//     if (event.key === "p") {
//       if (blueNumber.innerText < 100) {
//         blueNumber.innerText++;
//         redNumber.innerText = 100 - blueNumber.innerText;

//         red.style.width = `${redNumber.innerText}%`;
//         blue.style.width = `${blueNumber.innerText}%`;

//         activeModal(blueNumber.innerText, "Blue");
//       }
//     }
//   }
// });
// window.addEventListener("keyup", (event) => {
//   if (event.key === "Escape") {
//     redNumber.innerText = 50;
//     blueNumber.innerText = 50;

//     red.style.width = `${redNumber.innerText}%`;
//     blue.style.width = `${blueNumber.innerText}%`;
//     modal.style.display = "none";
//   }
// });

// bodlogo3
const playButton1 = document.getElementById("player1");
const playButton2 = document.getElementById("player2");
const randomNumber = document.getElementById("random");
const randomNumber2 = document.getElementById("random2");

playButton1.addEventListener("click", () => {
  let random = Math.floor(Math.random() * 6 + 1);
  randomNumber.style.fontSize = "30px";
  randomNumber.innerText = random;
});

playButton2.addEventListener("click", () => {
  let random2 = Math.floor(Math.random() * 6 + 1);
  randomNumber2.style.fontSize = "30px";
  randomNumber2.innerText = random2;
});
