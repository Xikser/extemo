const navActiveIcon = document.querySelector('.mobilenav-menu-icon');
const navCloseIcon = document.querySelector('.mobilenav__close-icon');
const mobilenav = document.querySelector('.mobilenav');

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