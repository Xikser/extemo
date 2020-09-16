const navActiveIcon = document.querySelector('.mobilenav-menu-icon');
const navCloseIcon = document.querySelector('.navbar__close-icon');
const mobilenav = document.querySelector('.navbar');

navActiveIcon.addEventListener('click', activeNavbar);

function activeNavbar() {
    mobilenav.style.setProperty('display', 'flex');
    navActiveIcon.style.setProperty('display', 'none')
};

navCloseIcon.addEventListener('click', disableNavbar);

function disableNavbar() {
    mobilenav.style.removeProperty('display');
    navActiveIcon.style.removeProperty('display')
}