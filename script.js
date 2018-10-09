const menu = document.querySelector('section nav');
const botaoMenu = document.querySelector('#menu-hamburguer');

botaoMenu.onclick = () => {
  menu.style.display = 'flex';
}