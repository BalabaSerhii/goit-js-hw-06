const inputUser = document.querySelector("#name-input");
let outputUser = document.querySelector("#name-output");

inputUser.addEventListener('input', event => {
	const result = event.target.value.trim() || 'Anonymous';
	outputUser.textContent = result;
});






