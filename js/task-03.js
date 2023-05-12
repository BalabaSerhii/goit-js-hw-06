const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// Используй массив объектов images для создания элементов <img> вложенных в <li>. Для создания разметки используй шаблонные строки и метод insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через CSS классы.


// Получить ссылку на элемент списка ul.gallery в DOM.
// Создать переменную galleryMarkup для хранения строки разметки галереи.
// Используя метод forEach() для перебора элементов массива images, создать для каждого объекта элемент li, который будет содержать элемент img.
// В строку разметки галереи добавить шаблонную строку с элементами li и img, используя свойства объектов массива images.
// Добавить строку разметки галереи в элемент списка ul.gallery с помощью метода insertAdjacentHTML().

const gallery = document.querySelector('.gallery')

let galleryMarkup = "";

images.forEach((image) => {
  galleryMarkup += `
  <li class="gallery__item">
  <img src="${image.url}" alt="${image.alt}" class="gallery__image"></li>`;
});

gallery.insertAdjacentHTML("beforeend", galleryMarkup);


