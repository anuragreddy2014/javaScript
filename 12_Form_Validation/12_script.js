// Get the HTML elements
let usernameElement = document.querySelector('#username');
let emailElement = document.querySelector('#email');
let passwordElement = document.querySelector('#password');
let confirmPasswordElement = document.querySelector('#password_confirm');

// Error Elements
let userNameErrorElement = document.querySelector('#name_error');
let emailErrorElement = document.querySelector('#email_error');
let passwordErrorElement = document.querySelector('#password_error');
let message = '';

// Blur event on username field
usernameElement.addEventListener('blur',function() {
    clearErrorMessage(usernameElement,userNameErrorElement);
});

// Blur event on Email field
emailElement.addEventListener('blur',function() {
    clearErrorMessage(emailElement,emailErrorElement);
});

// Blur event on password field
passwordElement.addEventListener('blur',function() {
    clearErrorMessage(passwordElement,passwordErrorElement);
    clearErrorMessage(confirmPasswordElement,passwordErrorElement);
});

// Blur event on username field
confirmPasswordElement.addEventListener('blur',function() {
    clearErrorMessage(confirmPasswordElement,passwordErrorElement);
    clearErrorMessage(passwordElement,passwordErrorElement);
});

// validate
let validate = () => {
    let isvalid = true;

    // Required Username Validation
    if(usernameElement.value === ''){
        message = "Username is Required";
        displayErrorMessage(usernameElement,userNameErrorElement,message);
        isvalid = false;
        return false;
    }

    // Required Username Length Validation
    if(usernameElement.value.length < 5){
        message = "Required at least 5 letters";
        displayErrorMessage(usernameElement,userNameErrorElement,message);
        isvalid = false;
        return false;
    }

    // RegExp Validation
    if(!usernameElement.value.match(/^[A-Za-z0-9_]{1,15}$/)){
        message = "Pattern is not Matched";
        displayErrorMessage(usernameElement,userNameErrorElement,message);
        isvalid = false;
        return false;
    }

    // Required Email Validation
    if(emailElement.value === ''){
        message = "Email is Required";
        displayErrorMessage(emailElement,emailErrorElement,message);
        isvalid = false;
        return false;
    }

    // Required password Validation
    if(passwordElement.value === ''){
        message = "Password is Required";
        displayErrorMessage(passwordElement,passwordErrorElement,message);
        isvalid = false;
        return false;
    }

    // Required Confirm Password Validation
    if(confirmPasswordElement.value === ''){
        message = "Confirm Password is Required";
        displayErrorMessage(confirmPasswordElement,passwordErrorElement,message);
        isvalid = false;
        return false;
    }

    // Password Match Validation
    if(passwordElement.value !== confirmPasswordElement.value){
        message = "Passwords did't match";
        displayErrorMessage(confirmPasswordElement,passwordErrorElement,message);
        displayErrorMessage(passwordElement,passwordErrorElement,message);
        isvalid = false;
        return false;
    }


    if(isvalid){
        alert('Form Submitted Successfully');
        return true;
    }
    else{
        return false;
    }
};

// Display Error Messages
let displayErrorMessage = (inputElement,errorElement,message) => {
    inputElement.style.backgroundColor = 'lightsalmon';
    inputElement.style.borderColor = 'red';
    inputElement.style.boxShadow = '0 0 15px red';
    errorElement.textContent = message;
    errorElement.style.color = 'red';
};

// Clear Error Messages
let clearErrorMessage = (inputElement,errorElement) => {
    inputElement.style.backgroundColor = 'white';
    inputElement.style.borderColor = 'gray';
    inputElement.style.boxShadow = '0 0 0 white';
    errorElement.textContent = '';
};