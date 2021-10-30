const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let timerId = null;

const startButtonEl = document.querySelector('[data-action="start"]');
const stopButtonEl = document.querySelector('[data-action="stop"]');
const bodyEl = document.querySelector("body");

function bodyColorPicker() {
  let randomColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
  bodyEl.style.backgroundColor = randomColor;
}

function startChanger() {
  timerId = setInterval(bodyColorPicker, 1000);
  startButtonEl.disabled = true;
}

function stopChanger() {
  clearInterval(timerId);
  startButtonEl.disabled = false;
}
startButtonEl.addEventListener("click", startChanger);
stopButtonEl.addEventListener("click", stopChanger);
