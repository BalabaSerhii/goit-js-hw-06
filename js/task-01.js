const category = document.querySelector("#categories");
const items = category.querySelectorAll(".item");

console.log(`Number of categories: ${items.length}`);

items.forEach(item => {
	const head = item.querySelector('h2');
	const elements = item.querySelectorAll('li')
	console.log(`Category: ${head.textContent}`);
	console.log(`Elements: ${elements.length}`);
})
