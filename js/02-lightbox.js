import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const items = [];

galleryItems.forEach(e => {
    const gallaryLink = document.createElement('a');
    gallaryLink.className = 'gallery__link';
    gallaryLink.href = e.original;

    const gallaryImage = document.createElement('img');
    gallaryImage.className = 'gallery__image';
    gallaryImage.src = e.preview;
    gallaryImage.alt = e.description;
    gallaryImage.title = e.description;

    gallaryLink.append(gallaryImage);
    items.push(gallaryLink);
})
gallery.append(...items);

new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    enableKeyboard: true,
    captionPosition: 'bottom'
})
