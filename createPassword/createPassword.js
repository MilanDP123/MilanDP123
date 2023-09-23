const generatePasswordButton = document.getElementById('generatePasswordButton');
const passwordLabel = document.getElementById('passwordLabel');
const letters = "ABCDEFGHIJKLMNOPQRSTUabcdefghijklmnopqrstuvxyz1234567890";
const max = letters.length
const passwordLenght = document.getElementById('passwordLenght');
const kopieButton = document.getElementById('kopieButton');
var password;



function onload() {
    kopieButton.style.display = "none";
}


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function generateNewPassword(lenght){
    let max = letters.length
    let newPassword = "";
    for (let i = 0; i < lenght; i++) {
        newPassword += letters[getRandomInt(max)];
    }

    return newPassword;
}

function kopieButtonAppear() {
    kopieButton.style.display = "block";
}


function generatePassword() {
    password = generateNewPassword(passwordLenght.value);
    passwordLabel.innerHTML = "Your randomly generated password is: " + password;
    kopieButtonAppear();
}

function copyToClipboard() {
    // Get the text field
    let text = password;
    navigator.clipboard.writeText(text);
  
    // Alert the copied text
    alert("Copied the text: " + text);
}