const menu = document.querySelector('section nav');
const botaoMenu = document.querySelector('#menu-hamburguer');
const tracinhos = document.querySelectorAll('.tracinho');
const section = document.querySelector('section');
const seta = document.querySelector('#seta');

botaoMenu.onclick = () => {
  menu.classList.toggle('visible');
  
  for (const tracinho of tracinhos) {
    tracinho.classList.toggle('visible');
  }
}

section.onmouseover = () => {
  section.classList.add('visible');
  seta.classList.add('visible');
}

section.onmouseleave = () => {
  section.classList.remove('visible');
  seta.classList.remove('visible');
}

//Cria um evento depois de X tempo
setTimeout(() => {
  console.log('Executar evento');
  alert('Olá mundo! o/');
}, 2000)

