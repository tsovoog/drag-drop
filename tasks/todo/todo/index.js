const boards = document.getElementById("boards");
const options = ["To do", "In progress", "Stuck", "Done"];

options.forEach((element, index) => {
  boards.innerHTML += `<div class="board" ondragover="dragover(event)" ondrop="drop(event, ${index})">
            <div class="title"> ${element} <span id="count"></span></div>
                <div id="tasks-${index}" class="innerContainer"></div>
                <div id="add-${index}" class="addCard">+Add card</div>
        
          </div>`;
});

const tasks = document.getElementById("tasks-0");
const tasks1 = document.getElementById("tasks-1");
const task2 = document.getElementById("tasks-2");
const tasks3 = document.getElementById("tasks-3");

const add = document.getElementById("add-0");
const add1 = document.getElementById("add-1");
const add2 = document.getElementById("add-2");
const add3 = document.getElementById("add-3");

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
  return `<div class="card" id="${num}" draggable="true" ondragstart="drag(event)">
<input type="checkbox"/>
<div class="details">
  <h4>${title.value}</h4>
  <p>${description.value}</p>
  <div class="priority">${priority.value}</div>
</div>
<div class="actions">
  <i onclick="remove(event)" id="x" class="fa-solid fa-x"></i>
  <i id="pen" class="fa-solid fa-pen-to-square"></i>
</div>
</div>`;
};
let num = 1;
const remove = (event) => {
  const deleteCard = document.getElementById(
    event.currentTarget.parentNode.parentNode.id
  );
  console.log(deleteCard);
  const parent = document.getElementById(deleteCard.parentNode.id);
  console.log(parent);
  parent.removeChild(deleteCard);
};

const a = document.getElementById("text1");
const b = document.getElementById("text2");

addTask.addEventListener("click", () => {
  if (title.value == "" && description.value == "") {
    a.style.display = "block";
    b.style.display = "block";
  } else if (description.value == "") {
    b.style.display = "block";
    a.style.display = "none";
  } else if (title.value == "") {
    b.style.display = "none";
    a.style.display = "block";
  } else {
    taskStatus.value === "In progress"
      ? (tasks1.innerHTML += createNewTask())
      : taskStatus.value === "Todo"
      ? (tasks.innerHTML += createNewTask())
      : taskStatus.value === "Stuck"
      ? (task2.innerHTML += createNewTask())
      : (tasks3.innerHTML += createNewTask());
    modalSection.style.display = "none";
    a.style.display = "none";
    b.style.display = "none";
    num += 1;
  }
});
const drag = (event) => {
  event.dataTransfer.setData("text/plain", event.target.id);
};

const dragover = (event) => {
  event.preventDefault();
};

const drop = (event, index) => {
  const draggedItemId = event.dataTransfer.getData("text/plain");
  const draggedItem = document.getElementById(draggedItemId);

  const check = draggedItem.getElementsByTagName("input");

  if (index === 0) {
    check[0].checked = false;
    tasks.appendChild(draggedItem);
  } else if (index === 1) {
    check[0].checked = false;
    tasks1.appendChild(draggedItem);
  } else if (index === 2) {
    check[0].checked = false;
    task2.appendChild(draggedItem);
  } else if (index === 3) {
    check[0].checked = true;
    tasks3.appendChild(draggedItem);
  }
};
