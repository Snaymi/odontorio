const btnMenu = document.getElementById('btn-menu');
const menu = document.getElementById('menu');
const backgroundPopoup = document.querySelector ('.backgorund-popoup')

btnMenu.addEventListener('click', function() {
    console.log('clicado')
    menu.classList.toggle('show');
});