const menu = document.querySelector('section nav');
const botaoMenu = document.querySelector('#menu-hamburguer');
const tracinhos = document.querySelectorAll('.tracinho');

botaoMenu.onclick = () => {
  menu.classList.toggle('visible');
  
  for (const tracinho of tracinhos) {
    tracinho.classList.toggle('visible');
  }
}