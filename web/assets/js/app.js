const header = document.querySelector('.header');
const about = document.querySelector('.about');
const services = document.querySelector('.services');
const isVisibleClass = 'is--visible';

const buttonMap = new Map();

document.querySelectorAll('.home-link').forEach(e => buttonMap.set(e, header))
document.querySelectorAll('.about-link').forEach(e => buttonMap.set(e, about));
document.querySelectorAll('.services-link').forEach(e => buttonMap.set(e, services));

for(const button of buttonMap.keys()) {
    button.addEventListener('click', setSectionVisible)
}

function setSectionVisible() { 
    const section = buttonMap.get(this);
    sectionToHide();
    sectionToShow(section);
}

function sectionToHide() {
    const sectionToHideArray = document.querySelectorAll('.is--visible');
    
    for (let i = 0; i < sectionToHideArray.length; i++) {
        if (sectionToHideArray[i].classList.contains(isVisibleClass)) {
            sectionToHideArray[i].classList.remove(isVisibleClass);
            sectionToHideArray[i].style.setProperty('display', 'none');

            const section = sectionToHideArray[i];
            transition3D(section);
        }
    }
}

function sectionToShow(section) {
    section.classList.add(isVisibleClass);
}

function transition3D(hiddenSection) {
    hiddenSection.style.setProperty('transform3d', '0, 200%, 0')
}