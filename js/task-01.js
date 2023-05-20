const categoriesList = document.querySelector('#categories');
const categoriesItems = categoriesList.children;

console.log('Number of categories:', categoriesItems.length);

for (let i = 0; i < categoriesItems.length; i++) {
  const item = categoriesItems[i];
  const categoryName = item.firstElementChild.textContent;
  const elementsCount = item.lastElementChild.children.length;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${elementsCount}`);
}