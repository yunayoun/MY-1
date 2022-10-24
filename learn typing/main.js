const GAME_TIME = 10;
let score = 0;
let time = GAME_TIME;
let isPlaying = false;
let timeInterval;
let checkInterval;
let words = [];
const wordInput = document.querySelector(".word-input");
const wordDisplay = document.querySelector(".word-display");
const scoreDisplay = document.querySelector(".score");
const timeDisplay = document.querySelector(".time");
const button = document.querySelector(".loading");

init();

function init() {
  getWords();
  wordInput.addEventListener("keypress", (e) => {
    if (e.key == "Enter") checkMatch();
  });
}

//게임실행
function run() {
  isPlaying = true;
  time = GAME_TIME;
  wordInput.focus();
  scoreDisplay.innerText = "";
  timeInterval = setInterval(countDown, 1000);
  checkInterval = setInterval(checkStatus, 50);
  buttonChange("게임중");
}

function checkStatus() {
  if (!isPlaying && time === 0) {
    buttonChange("게임시작");
    clearInterval(checkInterval);
  }
}

//단어불러오기
function getWords() {
  words = [
    " 고수머리 : 곱슬머리",
    " 고타야 : 안동의 순우리말",
    " 구다라 : 백제",
    " 그루잠 : 깨었다가 다시든 잠",
    " 그린내 : 연인의 우리말",
    " 그린비 : 그리운 남자",
    " 그미 : 그 여자",
    " 꼬꼬지 : 아주 오랜 옛날",
    "소담하다 : 생김새가 탐스럽다",
    "마 : 오줌을 점잖게 이르는 말",
    "마소마 : 조마조마",
    "피아 : 숲의 요정",
    "슈룹 : 우산의 옛말",
    "미쁘다 : 믿음성이 있다, 진실하다",
    " 미르 : 용을 뜻하는 순우리말",
    " 마루 : 하늘의 순우리말",
    " 미리내 : 은하수",
    " 맛조이 : 마중하는 사람",
  ];

  buttonChange("게임시작");
}

//단어일치체크
function checkMatch() {
  if (wordInput.value === wordDisplay.innerText) {
    if (!isPlaying) {
      return;
    }
    score++;
    scoreDisplay.innerText = score;
    time = GAME_TIME;
    const randomIndex = Math.floor(Math.random() * words.length);
    wordDisplay.innerText = words[randomIndex];
    wordInput.value = "";
  }
}

function countDown() {
  //조건 ? 참일경우:거짓일경우
  time > 0 ? time-- : (isPlaying = false);
  if (!isPlaying) {
    clearInterval(timeInterval);
  }
  timeDisplay.innerText = time;
}

function buttonChange(text) {
  button.innerText = text;
  text === "게임시작"
    ? button.classList.remove("loading")
    : button.classList.add("loading");
}
