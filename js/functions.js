// 4 formas de impresión 

// alert("Primera forma de impresión");
// console.log("Segunda forma de impresión");
// document.write("Tercera forma de impresión");   
// Swal.fire({
//     title: "The Internet?",
//     text: "That thing is still around?",
//     icon: "error"
//   });

// VARIABLES Y TIPOS DE DATOS //

const pi  = 3.14; //Decimal
const pul = 2.54; 

var name  = "Jeferson Mesa"; //String 

let edad  = 20; //Entero

var ver   = true; //Boolean
let fal   = false;

// OPERADORES LOGICOS

var suma = 5+2;
console.log(suma);
var var_uno = 10;
var var_dos = 5;
console.log(var_uno - var_dos);
console.log(var_uno * var_dos);
console.log(var_uno / var_dos);
console.log(var_uno % var_dos);


console.log("Mi edad es: " + edad);


function load_page() {
    Swal.fire({
        imageUrl: "https://ufpso.edu.co/administradoru15/ventana/banner%20Admitidos_Mesa%20de%20trabajo%201%20(3)%20(1).jpg",
        //imageHeight: 1500,
        imageAlt: "A tall image",
        showConfirmButton: false,
        timer: 2000,
      });
      
    document.getElementById('name_search').value = nombre_form;
    console.log("Hola");
}



function send_form() {
    let name = document.getElementById('name').value;
    let last_name = document.getElementById('last_name').value;
    let pass_one = document.getElementById('pass_one').value;
    let pass_two = document.getElementById('pass_two').value;
    
    if ( name.length == 0 || last_name.length == 0 || pass_one.length == 0 || pass_two.length == 0) {
        Swal.fire({
        title: "ERROR",
        text: "El formulario está vacio",
        icon: "error"
        });
    //     if(name.length == 0){
    //         document.getElementById('name').style.border = "2px solid red";
    //     } else {
    //         document.getElementById('name').style.border = "2px solid green";
    //     }
    //     if(last_name.length == 0){
    //         document.getElementById('last_name').style.border = "2px solid red";
    //     } else {
    //         document.getElementById('last_name').style.border = "2px solid green";
    //     }
    // } else {
    //     
    } else if (pass_one != pass_two) {
        Swal.fire({
            title: "Sus contraseñas no son iguales",
            text: "Por favor valide sus credenciales",
            icon: "error"
            });
    } else {
        document.getElementById('print').innerText = "Su nombre es: " + name+ " y su apellido es: " +last_name;
    }

}

var array_numerico = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function agregar() {
    let num = document.getElementById("num").value;
    let array_add = array_numerico.push(num);
    console.log(array_add);
    console.log(array_numerico);
    document.getElementById("impresion").value = array_numerico
}
function eliminar() {
    let = array_delete = array_numerico.pop();
    console.log(array_delete);
    console.log(array_numerico);
    document.getElementById("impresion").value = array_numerico
}
function reves() {
    document.getElementById("impresion").value= array_numerico.reverse();

}
function prim(){
    let num = document.getElementById("num2").value;
    let array_add = array_numerico.unshift(num);
    document.getElementById("impresion").value = array_numerico;
    
}
function limpiar() {
    document.getElementById("num").value = "";
    document.getElementById("name").value = "";
    document.getElementById("last_name").value = "";
    document.getElementById("result").innerText = "";
}

function eliminarprim(){
    let array_delete = array_numerico.shift();
    document.getElementById("impresion").value=array_numerico;
}


var nombre_form = "Jeferson Sebastian Mesa Moreno";

function search() {
    let nombre_buscar = document.getElementById("name_search").value;
    // Swal.fire(nombre_buscar.toLowerCase());
    // Swal.fire({
    //     title: "Sus contraseñas no son iguales",
    //     text: nombre_buscar.toLowerCase(),
    //     icon: "error"
//  })
    let word = nombre_buscar.split("");
    Swal.fire(word+"");

    let word_com = word.join("");
    console.log(word_com);
}