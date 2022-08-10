'use strict';

const firstEntry = document.querySelector('#password');
const secondEntry = document.querySelector('#re-password');
const invalidPassword = document.querySelector('.invalid-password');
let firstPassword;
let secondPassword;

function checkPassword() {
  if (firstPassword === secondPassword) {
    invalidPassword.textContent = '';
  }
  if (firstPassword !== secondPassword) {
    invalidPassword.textContent = '* Passwords do not match';
  }
}

firstEntry.addEventListener('change', () => {
  firstPassword = firstEntry.value;
  checkPassword();
})

secondEntry.addEventListener('change', () => {
  secondPassword = secondEntry.value;
  checkPassword();
})

