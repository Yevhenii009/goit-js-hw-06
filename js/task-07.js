const fontSize = document.querySelector('#font-size-control');
const textSize = document.querySelector('#text');

fontSize.addEventListener('input', check);

function check() {
    textSize.style.fontSize = fontSize.value + 'px';
}
