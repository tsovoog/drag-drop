const boards = document.getElementById("boards");
const options = ["In progress", "Stuck", "Done"];
options.forEach((element) => {
  boards.innerHTML += `<div class="board">
            <div class="title"> ${element} <span id="count"></span></div>
           
                <div class="addCard">+Add card</div>
        
          </div>`;
});
const addCard = document.querySelectorAll(".addCard");
const modal = document.getElementById("modal");
const modalSection = document.getElementById("modalSection");

addCard.forEach((item) => {
  item.addEventListener("click", () => {
    modalSection.style.display = "flex";
  });
});
