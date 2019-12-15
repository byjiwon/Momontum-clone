const span = document.querySelector(".daily"),
  array = ["photo", "style", "confidence"];
let i = 1;

function getWords() {
  if (i < array.length) {
    span.innerText = array[i];
    i++;
  } else {
    span.innerText = array[0];
    i = 1;
  }
}

function init() {
  span.innerText = array[0];
  setInterval(getWords, 2000);
}

init();
