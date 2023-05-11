//Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
const category = document.querySelector("#categories");
const items = category.querySelectorAll(".item");

console.log(`Number of categories: ${items.length}`);


//Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) 
//и количество элементов в категории(всех вложенных в него < li >).

items.forEach(item => {
	const head = item.querySelector('h2');
	const elements = item.querySelectorAll('li')
	console.log(`Category: ${head.textContent}`);
	console.log(`Elements: ${elements.length}`);
})






// const test = document.querySelectorAll("li.item");
// console.log("Number of categories:", test.length);


// const test1 = elem.childNodes("ul");
// console.log("test1:", test1)

// test1.forEach(function (category, elements) {
// 	console.log(`Category: ${category}, Elements: ${elements} `)
// })
