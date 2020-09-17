const viewer = document.querySelector('.viewer');
const imageContainer = viewer.querySelector(':scope .viewer__image-container');
const closeIcon = imageContainer.querySelector(':scope .fas.fa-times');

document.querySelectorAll('.projects__button-image').forEach(button => button.addEventListener('click', copyImage));

function copyImage() {
    const parent = this.parentNode;
    const image = parent.firstElementChild.cloneNode(true);

    pasteImage(image);
}

function pasteImage(image) {
    viewer.style.setProperty('display', 'flex')
    viewer.classList.add('viewer--is-active')
    imageContainer.appendChild(image)
}

closeIcon.addEventListener('click', closeViewer);

function closeViewer() {
    viewer.style.removeProperty('display');
    viewer.classList.remove('viewer--is-active')
    imageContainer.removeChild(imageContainer.childNodes[1]);
}