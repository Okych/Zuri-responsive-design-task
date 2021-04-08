const burger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-links')

let showMenu = false;

burger.addEventListener('click', toggleMenu);

function toggleMenu(){
    if(!showMenu){
        burger.classList.add('open');
        nav.classList.add('open');

        showMenu = true;
    } else{
        burger.classList.remove('open');
        nav.classList.remove('open');
       
        showMenu = false;
    }
}