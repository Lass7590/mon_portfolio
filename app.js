const nav = document.querySelector('.nav-gauche');
const btnRondMenu = document.querySelector('.btn-rond-menu');
const containerLigne = document.querySelector('.container-ligne');
const ligne = document.querySelector('.ligne');
const navItems = document.querySelectorAll('.nav-gauche .blocs-menu');

btnRondMenu.addEventListener('click', () => {
   containerLigne.classList.toggle('active');
   nav.classList.toggle('nav-visible');
});

navItems.forEach(item => {
   item.addEventListener('click', ()=>{
      containerLigne.classList.remove('active');
      nav.classList.remove('nav-visible');
   })
})
