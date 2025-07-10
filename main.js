import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

document.querySelectorAll('.dropdown[data-select="true"]').forEach((dropdown) => {
  const btn = dropdown.querySelector('.dropdown-toggle');
  const menu = dropdown.querySelector('.dropdown-menu');
  const menuItems = menu.querySelectorAll('.dropdown-item');

  menuItems.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      if (btn.textContent !== item.textContent) {
        btn.textContent = item.textContent;
      }
    });
  });
});
