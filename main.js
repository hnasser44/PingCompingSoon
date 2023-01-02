const form = document.querySelector('form');
const emailInput = document.querySelector('#email');
const errorMsg = document.querySelector('.error-msg');
var isEmailValid = false;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (isEmailValid) form.submit();
  else {
    emailInput.style.borderColor = 'hsl(354, 100%, 66%)';
    errorMsg.classList.remove('hidden');

  }
});

// event listener for the input field
emailInput.addEventListener('input', () => {
  //toggle the error message according to the validate function
  if (ValidateEmailAddress(emailInput.value)) {
    errorMsg.classList.add('hidden');
    isEmailValid = true;
  }
  else {
    errorMsg.classList.remove('hidden');
    isEmailValid = false;
  }
});


function ValidateEmailAddress(email) {
  var regex = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  return regex.test(email);
}
