const sectionIsActive = 'projects__box--is-active';
const buttonIsActive = 'projects__button--is-active';

//sections
const all = document.querySelector('.projects__box--all');
const sites = document.querySelector('.projects__box--sites');
const graphic = document.querySelector('.projects__box--graphic');
const photos = document.querySelector('.projects__box--photos');

//buttons
const allButton = document.querySelector('.button--all');
const sitesButton = document.querySelector('.button--site');
const graphicButton = document.querySelector('.button--graphic');
const photosButton = document.querySelector('.button--photos');

const buttonMap = new Map();

buttonMap.set(allButton, all);
buttonMap.set(sitesButton, sites);
buttonMap.set(graphicButton, graphic);
buttonMap.set(photosButton, photos);

for(const button of buttonMap.keys()) {
    button.addEventListener('click', changeSection)
}

function changeSection() {
    const section = buttonMap.get(this);
    changeButtonStyle(this)
    hideSection();
    showSection(section);
}

function changeButtonStyle(currentButton) {
    buttonMap.forEach((section, button) => {
        if(button.classList.contains(buttonIsActive))
            button.classList.remove(buttonIsActive);

        currentButton.classList.add(buttonIsActive)
    })
}

function hideSection() {
    buttonMap.forEach(element => {
        if (element.classList.contains(sectionIsActive)) {
            hideAnimation(element);

            setTimeout(function() {
                element.classList.remove(sectionIsActive)
            }, 390)
        }
    })
}

function hideAnimation(section) {
    section.style.setProperty('transition', 'all 400ms ease');
    section.style.setProperty('transform', 'scale(0)');
}

function showSection(section) {
    if (!section.classList.contains(sectionIsActive)) {
        showAnimation(section);
        
        setTimeout(function () {
            section.classList.add(sectionIsActive)
        }, 400)
    }
}

function showAnimation(section) {
    section.style.setProperty('transition', 'all 400ms ease');
    section.style.setProperty('transform', 'scale(1)');
}