const buttonMenu = document.body.querySelector('.js_menu');
const body = document.body;

buttonMenu.addEventListener('click', function () {
    console.log("hola");
    body.classList.toggle('show-menu');
})