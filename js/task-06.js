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

// Напиши скрипт, который при потере фокуса на инпуте(событие blur), проверяет его содержимое на правильное количество введённых символов.



// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.

// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.

// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.