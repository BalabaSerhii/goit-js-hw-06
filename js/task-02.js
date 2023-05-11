const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
  
];

// const ul = document.querySelector("#ingredients");

// const items = ingredients.map((ingredient) => {
//   const li = document.createElement("li");
//   li.textContent = ingredient;
//   li.classList.add("item");
//   return li;
// });

// ul.append(...items);


const ul = document.querySelector("#ingredients")

ingredients.forEach((ingredient) => {
  const li = document.createElement("li");
  li.classList.add("item");
  li.textContent = ingredient;
  ul.appendChild(li);
});


