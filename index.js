import { methods } from './scripts/methods.js'

console.log('Mi archivo o módulo index.js principal'); 
//const one_methohds = require('./scripts/methods');

methods(); 

// document.addEventListener("DOMContentLoaded", function(){});
// document.addEventListener("DOMContentLoaded", function(){
//     // Cargar y mostrar el contenido de form.html en algún contenedor
//     loadAndShowHtmlContent('form.html', '#container-form')
// });

// function loadAndShowHtmlContent( htmlFile, containerSelector ){

//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function(){
//         if (this.readyState == 4 && this.status == 200 ){
//             document.querySelector(containerSelector.innerHTML = this.responseText);
//         }
//     };
//     xhttp.open("GET", htmlFile, true);
//     xhttp.send();
// }

// Lógica para mostrar un mensaje de alerta al hacer clic en el botón
document.addEventListener("DOMContentLoaded", function () {
    // Selecciona el botón por su ID
    var myButton = document.getElementById('myButton');

    // Agrega un event listener para el clic
    myButton.addEventListener('click', function () {
        // Muestra un mensaje de alerta
        alert('¡Hola! Soy un mensaje de alerta.');
    });
});


 