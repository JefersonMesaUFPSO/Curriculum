
function loadPage() {
    hora_inicial = new Date();
    document.getElementById('entrada').innerText = hora_inicial;
}

function salida() {
    let hora_salida = new Date();
    document.getElementById('salida').innerText = new Date();
    let diferencia = hora_salida - hora_inicial;
    let dif_seg = Math.floor(diferencia/1000);
    let dif_min = Math.floor(dif_seg/60);
    let dif_hor = Math.floor(dif_min/60);


    let seg_restantes = dif_seg % 60;
    let min_restantes = dif_min % 60;

    let resultado = "Diferencia: " + dif_hor + ":" + min_restantes + ":" + seg_restantes;
    Swal.fire(""+resultado);
}


$(document).ready(function () {
    $("#form-validate").validate({
        rules: {
            name: { required: true, minlength: 3 },
            apellido: { required: true, minlength: 3 },
            correo: {required: true, email: true},
            telefono: {required: true,number: true, minlength: 10, maxlength: 10}
        },
        messages: {
            name: {
                required: "El campo es requerido",
                minlength: "Minimo escriba 3 caracteres"
            },
            apellidos: {
                required: "El campo es requerido",
                minlength: "Minimo escriba 3 caracteres"
            },
            correo: {
                required: "El campo es requerido",
                email: "El campo debe ser: ejemplo@campo.com"
            },
            telefono: {
                required: "El campo es requerido",
                minlength: "El tamaño debe ser de 10 caracteres",
                maxlength: "El tamaño debe ser de 10 caracteres",
                number: "Digite solo numeros"
            }
        }

    });
    $("#enviar").click(function () {
        if ($("#form-validate").valid()) {
            alert("Los campos están BIEN");
        } else {
            // Swal.fire({
            //     title: "Hay campos por diligenciar",
            //     icon: "error",
            //     time: 1500, 
            //     showConfirmButton: false
                
            // });
        }
    });
});



