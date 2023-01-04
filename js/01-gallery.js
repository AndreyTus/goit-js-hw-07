import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const items = [];

galleryItems.forEach(e => {
    const gallaryItem = document.createElement('div');
    gallaryItem.className = 'gallery__item';

    const gallaryLink = document.createElement('a');
    gallaryLink.className = 'gallery__link';
    gallaryLink.href = e.original;

    const gallaryImage = document.createElement('img');
    gallaryImage.className = 'gallery__image';
    gallaryImage.src = e.preview;
    gallaryImage.setAttribute('dataset', e.original);
    gallaryImage.alt = e.description;

    gallaryItem.append(gallaryLink);
    gallaryLink.append(gallaryImage);
    items.push(gallaryItem);
})
gallery.append(...items);
gallery.addEventListener('click', gallaryOnModal);

function gallaryOnModal(e) {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') {
        return;
    }
    const selectedImage = e.target.getAttribute('dataset');
    const instance = basicLightbox.create(`<img src="${selectedImage}" width="1200" height="800">`);

    instance.show();

    gallery.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            instance.close();
        }
    })
};