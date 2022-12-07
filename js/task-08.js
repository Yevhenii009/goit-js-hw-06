const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const { email, password } =
    event.currentTarget.elements
    
    if (email.value === '') {
        alert('Error')
    } else
        console.log('email', email.value, 'password', password.value);

    form.reset(); 
}
    
















// const formData = new FormData(event.currentTarget);
    // formData.forEach((value, name) => {
    //     console.log(value, name);
    // })