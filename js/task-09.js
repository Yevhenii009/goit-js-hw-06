const changeBody = document.querySelector('body');
const spanColor = document.querySelector('.color');
const newColor = document.querySelector('.change-color');

newColor.addEventListener('click', getRandomHexColor);

function getRandomHexColor() {
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  spanColor.textContent = randomColor;
  changeBody.style.backgroundColor = randomColor;
}

















// function colores() {
//   spanColor.textContent = getRandomHexColor()
//   changeBody.style.backgroundColor = getRandomHexColor()
// }

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }


 // changeBody.style.backgroundColor = getRandomHexColor()