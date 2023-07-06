const menu = document.querySelector('.menu-icon');
const cancel = document.querySelector('.cancel-icon');

function openMenu() {
    pages.classList.add('active');
    cancel.classList.add('active');
    main.classList.add('blur');
    logo.classList.add('blur');
    menu.classList.add('blur');
  }
  
  function closeMenu() {
    pages.classList.remove('active');
    cancel.classList.remove('active');
    main.classList.remove('blur');
    logo.classList.remove('blur');
    menu.classList.remove('blur');
  }
  
  menu.addEventListener('click', () => {
    openMenu();
  });
  
  cancel.addEventListener('click', () => {
    closeMenu();
  });