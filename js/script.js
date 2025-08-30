const btnMenu = document.getElementById('btn-menu');
const menu = document.getElementById('menu');

btnMenu.addEventListener('click', () => {
    console.log('clicado')
    menu.classList.toggle('show');
});