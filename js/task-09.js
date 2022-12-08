const changeBody = document.querySelector('body');
const spanColor = document.querySelector('.color');
const newColor = document.querySelector('.change-color');

newColor.addEventListener('click', colores);

function colores() {
  changeBody.style.backgroundColor = getRandomHexColor()
  spanColor.textContent = getRandomHexColor()
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


