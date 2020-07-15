let btnMenu = document.querySelector('.btn-menu');
let menu = document.querySelector('.list-container');
let containerMenu = document.querySelector('.menu');
let activador = true;

btnMenu.addEventListener('click', () => {

    document.querySelector('.btn-mennu i').classList.toggle('fa-times');

    if(activador){
        
        menu.style.left = "0";
        menu.style.transition = "0.5s";

        activador = false;
    }else{
        activador = false;
    
    menu.style.left = "-100%";
    menu.style.transition = "0.5s";

    activador = true;
    }
});

let enlaces = document.querySelectorAll('.lists li a');

    enlaces.forEach( (element) => {

        element.addEventListener('click', (event) => {

            enlaces.forEach( (link) => {
                link.classList.remove('activo');
                
            });

        });
        
    });