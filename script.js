const pages = document.querySelector('.pages');
const cancel = document.querySelector('.cancel-icon');
const menu = document.querySelector('.menu-icon');

function openMenu() {
    pages.classList.add('active');
    cancel.classList.add('active');
}
  
function closeMenu() {
    pages.classList.remove('active');
    cancel.classList.remove('active');
}
  
menu.addEventListener('click', () => {
    openMenu();
});
  
cancel.addEventListener('click', () => {
    closeMenu();
});