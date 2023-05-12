const form = document.querySelector('.login-form');

form.addEventListener('submit', e => {
e.preventDefault();

const { email, password } = e.target.elements;

if (!email.value || !password.value) {
alert('Ты забыл заполнить поля!');
return;
}

const userData = {
email: email.value,
password: password.value
};

console.log(userData);

form.reset();
});