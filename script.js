const form = document.getElementById('form');
const username = document.getElementById('username');
const  lastname = document.getElementById('last-name');
const email = document.getElementById('email');
const pasword = document.getElementById('password');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();

});
function checkInputs(){
    const usernameValue = username.value.trim();
    const lastnameValue = lastname.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if(usernameValue === '') {
        setErrorFor(username, 'First Name cannot be empty');
    }
    else {
        setSuccessFor(username);
    }
    if(lastnameValue === '') {
        setErrorFor(lastname, 'Last Name cannot be empty');
    }
    else {
        setSuccessFor(lastname);
    }

    if(emailValue === '') {
        setErrorFor(email, 'Email cannot be empty')
    }
    else if(!isEmail(emailValue)) {
            setErrorFor(email, 'Look like this is not an email')
        }
        else {
            setSuccessFor(email);
        }
    
    if(passwordValue === '') {
        setErrorFor(password, 'Password cannot be empty');
    }
    else {
        setSuccessFor(password);
    }    
    
}
function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;
    formControl.className = `form-control error`;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = `form-control success`;

}
 function isEmail(email) {
     return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
 }