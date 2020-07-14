let btnMenu = document.querySelector('.btn-menu');
let menu = document.querySelector('.list-container');
let menu = document.querySelector('');
let activador = true;

btnMenu.addEventListener('click', () => {
    if(activador){
        
        menu.style.left = "0";
        menu.style.transition = "0.5s";

        activador = false;
    }else{
        activador = false;
    
    menu.style.left = "-100%";
    menu.style.transition = "0.5s";

    activadro = true;
    }
});
