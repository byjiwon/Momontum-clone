const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greetings = document.querySelector(".js-greeting"),
  inputToDo = document.querySelector(".js-toDoForm"),
  mainColumn = document.querySelectorAll(".main__column")[1];

const USER = "currentUser",
  HIDE = "none";

function saveName(text) {
  localStorage.setItem(USER, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  showName(currentValue);
  saveName(currentValue);
}

function showName(text) {
  form.classList.add(HIDE);
  greetings.innerText = `Hello, ${text}!`;
  greetings.classList.remove(HIDE);
  inputToDo.classList.remove(HIDE);
  mainColumn.classList.add(HIDE);
}

function askForName() {
  form.addEventListener("submit", handleSubmit);
}

function loadName() {
  const currentUser = localStorage.getItem(USER);
  if (currentUser === null) {
    askForName();
  } else {
    showName(currentUser);
  }
}

function init() {
  loadName();
}

init();
