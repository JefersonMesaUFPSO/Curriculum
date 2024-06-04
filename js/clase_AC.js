
function enviar(){
    let caja_uno = document.getElementById('caja_uno').value
    let caja_dos = document.getElementById('caja_dos').value
    document.getElementById('title').innerHTML = "ZONA DE IMPRESIÓN";
    let concat = caja_uno + caja_dos;
    var new_number = 0;
    let cadena = "";
    // document.getElementById('print_name').innerText = caja_uno+ " " + caja_dos;}
    let count = 0;
    document.getElementById('btn_limpíar').hidden = false;

    for (let i = 0; i < caja_uno.length; i++) {
        let number = caja_uno[i]
        if (number.includes(caja_dos)) {
            count++;
        } else {
            cadena += number;
        }
        document.getElementById('print').innerText = count;
        document.getElementById('print_name').innerText = cadena
    }


}


function load_page() {
    document.getElementById('btn_limpíar').hidden = true;
}

    

    
