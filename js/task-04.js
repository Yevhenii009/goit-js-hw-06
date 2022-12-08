const newValues = document.querySelector('#value');
const addClick = document.querySelectorAll('#counter button');

let counterValue = 0;

addClick[0].addEventListener('click', removeClick);

function removeClick() {
    counterValue -= 1;
    newValues.innerHTML = counterValue;
};

addClick[1].addEventListener('click', adClick);

function adClick() {
    counterValue += 1;
    newValues.innerHTML = counterValue;
}






































// const allClicks = document.querySelectorAll('#counter button');


// const counterValues = document.querySelector('#value');

// allClicks[0].addEventListener('click', onAddClick);

// function onAddClick() {
//     counterValues.textContent -= 1;
// }

// allClicks[1].addEventListener('click', onRemoveClick);

// function onRemoveClick() {
//     counterValues.textContent += 1;
// }


















// const counterValue = [0];

// const counterValues = document.querySelector('#value');
// console.log(counterValues)

// const addClick = document.querySelector('#counter button');
// // const addClick = document.querySelector('.increment');
// console.log(addClick)

// addClick.addEventListener('click', onClick);

// function onClick(event) {
//     if (event.dataset === action.decremet) {
//         counterValue -= 1;
//     } else if (event.dataset === action.increment) {
//         counterValue += 1;
//     }
// }


// addClick.addEventListener('click', event => {
// return counterValues += 1;
// });





// addClick.addEventListener('click', event => {
//    return counterValues -= 1;
// });
// addClick.addEventListener('click', event => {
// return counterValues += 1;
// });

