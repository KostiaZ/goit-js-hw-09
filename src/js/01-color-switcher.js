const body = document.querySelector('body');
const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop');

body.style.backgroundColor = getRandomHexColor();

btnStart.addEventListener('click', getRandomHexColor);
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
