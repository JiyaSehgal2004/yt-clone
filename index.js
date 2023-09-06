const menu = document.querySelector('#menu');

const sidebar = document.querySelector('.sidebar');

menu.addEventListener('click', function(){
    console.log(sidebar.classList);
    sidebar.classList.toggle('show-sidebar');
});