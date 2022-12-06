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

const imagesGallery = document.querySelector('.gallery')

const imagesMarkup = images.map(({ url, alt }) => `<li class="images-style">
<img src="${url}"
alt="${alt}"
width="300px">
</li>`).join('');

imagesGallery.insertAdjacentHTML("afterbegin", imagesMarkup);













// const imagesEl = document.querySelector('.gallery');

// const image = document.createElement('img');
// image.src = "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
// image.alt = "White and Black Long Fur Cat";
// imagesEl.insertAdjacentHTML('afterbegin',





// const createImagesMarkup = elements => {
//   return `
//   imagesEl.insertAdjacentHTML('afterbegin',
//   '<li class="images-style">
//   <img src=""
//   alt="");
//   `
// };

// const createRow = images.map(createImagesMarkup);
// console.log(createImagesMarkup)