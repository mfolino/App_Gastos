var nombres = []
let monto = []
var cont = 0
var cont1 = 0
var total = 0
var par = 0
var pagar


function tot(){
    var nom = document.getElementById('ing_nom').value
    nombres[cont1] = nom;
    var mont = document.getElementById('ing_mont').value
    mont = parseInt(mont)
    total = parseInt(total)

    total = (parseInt(total) + parseInt(mont))

    console.log(nombres);
    cont++
    console.log(cont)
    console.log(total)
    pagar = total/cont;
    
    nombres.forEach(function(elemento, indice) {
        console.log(elemento, indice);
    })


    document.getElementById('mostrar_nom').innerHTML = (nombres)
    document.getElementById('mostrar_pag').innerHTML = pagar
    cont1++
}
