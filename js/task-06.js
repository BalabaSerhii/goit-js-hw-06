const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', () => {
  const expectedLength = Number(inputEl.dataset.length);
  const inputLength = inputEl.value.length;

  if (inputLength === expectedLength) {
    inputEl.classList.remove('invalid');
    inputEl.classList.add('valid');
  } else {
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
  }
});