const bodyObject = document.querySelector('body');
const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
let timer = 0;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btnStart.addEventListener('click', evt => {
  evt.target.setAttribute('disabled', '');
  btnStop.removeAttribute('disabled');

  timer = setInterval(() => {
    bodyObject.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

btnStop.addEventListener('click', evt => {
  evt.target.setAttribute('disabled', '');
  btnStart.removeAttribute('disabled');

  clearInterval(timer);
});
