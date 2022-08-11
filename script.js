'use strict';

const firstEntry = document.querySelector('#password');
const secondEntry = document.querySelector('#re-password');
const errorMsg = document.querySelector('.error-msg');
let firstPassword;
let secondPassword;

function checkPassword() {
  firstPassword === secondPassword ? errorMsg.textContent = '' : errorMsg.textContent = '*Passwords do not match';
}

firstEntry.addEventListener('input', () => {
  firstPassword = firstEntry.value;
  checkPassword();
})

secondEntry.addEventListener('input', () => {
  secondPassword = secondEntry.value;
  checkPassword();
})

