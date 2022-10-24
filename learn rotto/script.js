const numbers = document.querySelector(".numbers");
const drawBtn = document.querySelector("#draw");
const resetBtn = document.querySelector("#reset");

const lottoNumbers = [];
const colors = ["#f2b720", "#4072ac", "#de4c0e", "#9195a4", "#13be4b"];

function paintNum(number) {
  const eachNum = document.createElement("div");
  let colorIndex = Math.floor(number / 10);
  eachNum.classList.add("eachNum");
  eachNum.style.backgroundColor = colors[colorIndex];
  eachNum.textContent = number;
  numbers.appendChild(eachNum);
}

drawBtn.addEventListener("click", function () {
  while (lottoNumbers.length < 6) {
    let ran = Math.floor(Math.random() * 45) + 1;
    if (lottoNumbers.indexOf(ran) === -1) {
      lottoNumbers.push(ran);
      paintNum(ran);
    }
  }
});

resetBtn.addEventListener("click", function () {
  lottoNumbers.splice(0, 6);
  numbers.innerHTML = "";
});
