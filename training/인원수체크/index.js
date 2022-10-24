let countEl = document.getElementById("El-count");
let saveEl = document.getElementById("save-el");
let count = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  let countStr = count + " - ";
  saveEl.innerText += countStr;
  countEl.textContent = 0;
  count = 0;
}
