function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  if (taskInput.value.trim() === "") {
    return;
  }

  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <span>${taskInput.value}</span>
    <span class="delete" onclick="removeTask(this)">&#10005;</span>
  `;
  taskList.appendChild(card);

  taskInput.value = "";
}

function removeTask(element) {
  const card = element.parentElement;
  card.parentNode.removeChild(card);
}

function showAll() {
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => card.style.display = "flex");
}

function showPending() {
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    if (card.classList.contains("completed")) {
      card.style.display = "none";
    } else {
      card.style.display = "flex";
    }
  });
}

function showCompleted() {
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    if (card.classList.contains("completed")) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });
}

document.getElementById("taskList").addEventListener("click", function (event) {
  const clickedElement = event.target;
  if (clickedElement.classList.contains("card")) {
    clickedElement.classList.toggle("completed");
  }
});
