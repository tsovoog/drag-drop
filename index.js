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
