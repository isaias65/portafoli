//alert("Hola este es mi Javascript");
// let nombre = "Isaias";
// console.log(nombre);

//otro
// let contenidoTitulo = "Nombre";
// let titulo = document.querySelector(".icon");
// titulo.innerHTML = contenidoTitulo;

// condicionales
// let textoTitulo = titulo.innerText;
// console.log(textoTitulo);
// if(textoTitulo == "Nombre"){
//     titulo.innerHTML = "Otro";
// }else{
//     console.log("no se cumple");
// }

//fin otro

//FUNCIONES
// let nombre1 = "Ani";
// let ciudad = "Bs As";
// let gusto = "chocolate"; 

// let parrafo = document.querySelector(".parrafo-2");


// function cambiarTexto(nombre, ciudad, gusto){
//     let contenido = `Me llamo ${nombre},nací en ${ciudad} y vivo en Caballito. Me gusta el ${gusto} y salir a pasear en días de sol. Me encantaría aprender a programar para poder ayudar a las personas a mostrar lo que HashChangeEvent.`; 
    
//     return contenido;
// } 

// parrafo.innerText = cambiarTexto(nombre1, ciudad, gusto);

//responsive el menu
let menu_responsive = document.querySelector(".checkbtn");
menu_responsive.onclick = function () {
  navBar = document.querySelector(".navbar");
  navBar.classList.toggle("active");
};
