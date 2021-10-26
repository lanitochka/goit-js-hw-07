import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryContainer = document.querySelector('.gallery');


function createGalleryMarkup(items) {
    return items.map(({ preview, original, description }) => {
        return `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
        </a>
    </div>
    `
    })
    
    .join('');
}

galleryContainer.insertAdjacentHTML('beforeend', createGalleryMarkup(galleryItems));

galleryContainer.addEventListener('click', onImageClick);


function onImageClick(e) {

    e.preventDefault();

    // console.log(e.target.nodeName)
    if (e.target.nodeName !== 'IMG') {
        return;
    }

    const onLargeImage = e.target.dataset.source;
    // console.log(onLargeImage);

    const instance = basicLightbox.create(`
    <img src="${onLargeImage}" width="800" height="600">
    `
    );

    instance.show(() => {

        const onOpenImage = document.querySelector('.basicLightbox--visible');
        onOpenImage.addEventListener('click', () => {
            window.removeEventListener('keydown', onEscape);
        });
    });
     

    window.addEventListener('keydown', onEscape);

    function onEscape(e) {
        // console.log(e);
        if (e.code === 'Escape') {
            instance.close();
            window.removeEventListener('keydown', onEscape);
        }
    };
    
};
