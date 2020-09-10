const content = document.querySelector('.content');
const header = document.querySelector('.header');
const about = document.querySelector('.about');
const services = document.querySelector('.services');
const projects = document.querySelector('.projects');
const isVisibleClass = 'is--visible';


const linkMap = new Map();

document.querySelectorAll('.home-link').forEach(e => linkMap.set(e, header))
document.querySelectorAll('.about-link').forEach(e => linkMap.set(e, about));
document.querySelectorAll('.services-link').forEach(e => linkMap.set(e, services));
document.querySelectorAll('.projects-link').forEach(e => linkMap.set(e, projects));

for (const link of linkMap.keys()) {
    link.addEventListener('click', setSection)
}

function setSection() { 
    const section = linkMap.get(this);
    const offsetTop = section.offsetTop;

    content.style.setProperty('transition', 'all 700ms ease');
    content.style.setProperty('transform', 'translate3d(0,' + -offsetTop + 'px' + ', 0)');
}

