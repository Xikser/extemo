const content = document.querySelector('.content');
const header = document.querySelector('.header');
const about = document.querySelector('.about');
const services = document.querySelector('.services');
const projects = document.querySelector('.project');
const isVisibleClass = 'is--visible';


const buttonMap = new Map();

document.querySelectorAll('.home-link').forEach(e => buttonMap.set(e, header))
document.querySelectorAll('.about-link').forEach(e => buttonMap.set(e, about));
document.querySelectorAll('.services-link').forEach(e => buttonMap.set(e, services));
document.querySelectorAll('.projects-link').forEach(e => buttonMap.set(e, projects));

for (const button of buttonMap.keys()) {
    button.addEventListener('click', setSection)
}

function setSection() { 
    const section = buttonMap.get(this);
    const offsetTop = section.offsetTop;

    
    content.style.setProperty('transition', 'all 700ms ease');
    content.style.setProperty('transform', 'translate3d(0,' + -offsetTop + 'px' + ', 0)');
}

