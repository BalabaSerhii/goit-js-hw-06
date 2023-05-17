const minusNumber = document.querySelector('[data-action="decrement');
const addNumber = document.querySelector('[data-action="increment');
const result = document.querySelector("#value");

let counterValue = 0;

minusNumber.addEventListener("click", () => {
	counterValue -= 1;
	result.textContent = counterValue;
})

addNumber.addEventListener("click", () => {
	counterValue += 1;
	result.textContent = counterValue;
})


