const boards = document.getElementById("boards");
const options = ["To do", "In progress", "Stuck", "Done"];

options.forEach((element, index) => {
  boards.innerHTML += `<div class="board">
            <div class="title"> ${element} <span id="count"></span></div>
                <div id="tasks-${index}"></div>
                <div class="addCard">+Add card</div>
        
          </div>`;
});

const tasks = document.getElementById("tasks-0");
const tasks1 = document.getElementById("tasks-1");
const task2 = document.getElementById("tasks-2");
const tasks3 = document.getElementById("tasks-3");

const addCard = document.querySelectorAll(".addCard");
const modal = document.getElementById("modal");
const modalSection = document.getElementById("modalSection");
const addTask = document.getElementById("addTaskButton");
const title = document.getElementById("title");
const description = document.getElementById("Description");
const taskStatus = document.getElementById("Status");
const priority = document.getElementById("Priority");
const board = document.querySelectorAll(".board");
const doneIcon = document.getElementById("done");
const xIcon = document.getElementById("x");
const card = document.querySelectorAll(".card");
addCard.forEach((item) => {
  item.addEventListener("click", () => {
    modalSection.style.display = "flex";
  });
});

window.onclick = function (event) {
  if (event.target == modalSection) {
    modalSection.style.display = "none";
  }
};

const createNewTask = () => {
  return `<div class="card"  >
<div id="done"><i class="fa-solid fa-check"></i></div>
<div class="details">
  <h4>${title.value}</h4>
  <p>${description.value}</p>
  <div class="priority">${priority.value}</div>
</div>
<div class="actions">
  <i  id="x" class="fa-solid fa-x"></i>
  <i id="pen" class="fa-solid fa-pen-to-square"></i>
</div>
</div>`;
};

addTask.addEventListener("click", () => {
  if (title.value == "") {
    const anhaaruulga = document.getElementById("text1");
    anhaaruulga.style.display = "flex";
    modalSection.style.display = "flex";
    if (description.value == "") {
      const b = document.getElementById("text2");
      b.style.display = "flex";
      modalSection.style.display = "flex";
    }
  } else {
    taskStatus.value === "In progress"
      ? (tasks1.innerHTML += createNewTask())
      : taskStatus.value === "Todo"
      ? (tasks.innerHTML += createNewTask())
      : taskStatus.value === "Stuck"
      ? (task2.innerHTML += createNewTask())
      : (tasks3.innerHTML += createNewTask());
    modalSection.style.display = "none";
  }
});
