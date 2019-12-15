const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const USER_TD = "USER_TD";
let toDos = [];

function saveToDos() {
  localStorage.setItem(USER_TD, JSON.stringify(toDos));
}

function delToDo(event) {
  const eventTarget = event.target;
  const delTarget = eventTarget.parentNode;
  toDoList.removeChild(delTarget);
  const newToDos = toDos.filter(function(toDo) {
    parseInt(toDo.id) != parseInt(delTarget.id);
  });
  toDos = newToDos;
  localStorage.setItem(USER_TD, JSON.stringify(toDos));
}

function showToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  delBtn.innerText = "⌫";
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  delBtn.addEventListener("click", delToDo);
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId
  };
  toDos.push(toDoObj);
  saveToDos();
}

function eventHandler(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  showToDo(currentValue);
  toDoInput.value = "";
}

function loadToDo() {
  const loadedToDo = localStorage.getItem(USER_TD);
  if (loadedToDo !== null) {
    const parseToDos = JSON.parse(loadedToDo);
    parseToDos.forEach(function(toDo) {
      showToDo(toDo.text);
    });
  }
}

function init() {
  loadToDo();
  toDoForm.addEventListener("submit", eventHandler);
}

init();
