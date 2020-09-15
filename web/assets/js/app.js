const content = document.querySelector('.content');
const header = document.querySelector('.header');
const about = document.querySelector('.about');
const services = document.querySelector('.services');
const projects = document.querySelector('.projects');
const pricing = document.querySelector('.pricing');
const contact = document.querySelector('.contact');

const isVisibleClass = 'is--visible';

const linkMap = new Map();
linkMap.set(document.querySelector('.home-link'), header);
linkMap.set(document.querySelector('.about-link'), about);
linkMap.set(document.querySelector('.services-link'), services);
linkMap.set(document.querySelector('.projects-link'), projects);
linkMap.set(document.querySelector('.pricing-link'), pricing);
linkMap.set(document.querySelector('.contact-link'), contact);

for (const link of linkMap.keys()) {
    link.addEventListener('click', setSection)
}

function setSection() {
    const section = linkMap.get(this);
    displaySection(section);
}

function displaySection(section) {
    const offsetTop = section.offsetTop;

    content.style.setProperty('transition', 'all 700ms ease');
    content.style.setProperty('transform', 'translateY(' + -offsetTop + 'px)');

    const previousSection = document.querySelector('.is--visible');
    setActiveSection(previousSection, section);
}

function setActiveSection(previous, current) {
    previous.classList.remove('is--visible');
    getLinkForSection(previous).classList.remove('navbar__link--is-active');

    current.classList.add('is--visible');
    getLinkForSection(current).classList.add('navbar__link--is-active');
}

function getLinkForSection(section) {
    for (const entry of linkMap.entries()) {
        if (entry[1] === section) {
            return entry[0];
        }
    }
    return null;
}


window.addEventListener('wheel', scrollSection);

function scrollSection(e) {
    const currentSection = document.querySelector('.is--visible');
    const currentSectionIndex = getCurrentSectionIndex(currentSection);

    var newSectionIndex = currentSectionIndex;
    if (e.deltaY > 0 && currentSectionIndex < linkMap.size - 1) {
        newSectionIndex = currentSectionIndex + 1;
    } else if (e.deltaY < 0 && currentSectionIndex > 0) {
        newSectionIndex = currentSectionIndex - 1;
    }

    const newSection = getMapEntryFromIndex(newSectionIndex)[1];
    displaySection(newSection);
}


function getCurrentSectionIndex(currentSection) {
    var index = 0;
    for (const section of linkMap.values()) {
        if (section === currentSection) {
            return index;
        }
        index++;
    }
    return linkMap.size - 1;
}

function getMapEntryFromIndex(index) {
    if (index >= linkMap.size)
        return null;

    var i = 0;
    for (const entry of linkMap.entries()) {
        if (i === index) {
            return entry;
        }
        i++;
    }
    return null;
}
