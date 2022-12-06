// const categories = document.querySelectorAll('.item');
// console.log((categories.length));

const categories = document.querySelector('#categories');
console.log('Number of categories:', categories.children.length);

const category = [...categories.children];
category.forEach((element) => {
    console.log("Category:", element.firstElementChild.textContent);
    console.log("Elements:", element.lastElementChild.childElementCount);
  });











  
// const categorie = document.querySelectorAll('h2');
// console.log('Category:', categorie[0]);

// const category = document.querySelectorAll('h2');
// console.log('Category:', category[0].textContent);
// const elements = document.querySelectorAll('li.item')
// console.log('Elements:', elements.childNodes);

// console.log('Category:', category[1].textContent);
// console.log('Elements:', category[0].textContent);

// console.log('Category:', category[2].textContent);
// console.log('Elements:', category[0].textContent);

// const listEl = document.querySelector("#categories");
// console.log("Number of categories:", listEl.childElementCount);
