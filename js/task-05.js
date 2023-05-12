// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".



const inputUser = document.querySelector("#name-input");
let outputUser = document.querySelector("#name-output");






inputUser.addEventListener('input', event => {
	const result = event.target.value.trim() || 'Anonymous';
	outputUser.textContent = result;
});






