const inputCheck = document.querySelector('#validation-input');

inputCheck.addEventListener('blur', onInputChange);

function onInputChange() {
  if (inputCheck.value.length < Number(inputCheck.dataset.length)) {
    inputCheck.classList.add('invalid');
  } else inputCheck.classList.replace('invalid', 'valid');
}






















// function onInputChange() {
//     console.log(event.currentTarget.value);
//     if (event === inputCheck.dataset.length) {
//         inputCheck = onCheck;
//     } else if (event === !inputCheck.dataset.length) {
//         inputCheck = offCheck;
//     }
// }
