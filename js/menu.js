// const hamburguer = document.querySelector('.hamburguer');
// const menu = document.querySelector('.menu-navegacion');

// console.log(hamburguer);
// console.log(menu);

// hamburguer.addEventListener('click', () => {
//     menu.classList.toggle('spread');
// } );
// window.addEventListener('click', (e) => {
//     if(menu.classList.contains('spread') && e.target != menu && e.target != hamburguer ){
//         menu.classList.toggle('spread');
       
//     }
// } );

function boton() {
    document.getElementById("formulario").style.display = "none";
   document.querySelector(".gracias").style.display = "block";
}
function volver() {
    document.querySelector(".gracias").style.display = "none";
    document.getElementById("formulario").style.display = "flex";
}
