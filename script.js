const menu = document.querySelector('section nav');
const botaoMenu = document.querySelector('#menu-hamburguer');

botaoMenu.onclick = () => {
  menu.classList.toggle('visible');
}