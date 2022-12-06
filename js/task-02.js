const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');

const elements = ingredients.map(element => {
const ingredientEl = document.createElement('li');
ingredientEl.classList.add('item');
ingredientEl.textContent = element;
    
    return ingredientEl
})

console.log(elements)
ingredientsEl.append(...elements);