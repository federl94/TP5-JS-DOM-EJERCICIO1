let numGenerado = parseInt(Math.random()* (10 - 1) + 1);

function numDelUsuario(){
    let seccionPadre = document.querySelector("#seccionPadre")
    let numUsuario = document.getElementById('inputNumUsuario')
    if (numUsuario > 0 && numUsuario <= 10){
        let numUserX = document.createElement("h4");
        numUserX.innerHTML = `El número elegido es: ${numUsuario.value}`;
        seccionPadre.insertBefore(numUserX, btnNumPc);
    }
    else {
        alert('Ingrese un número válido')
    }
}
function generarNumAleatorio(){
    let seccionPadre = document.querySelector("#seccionPadre")
    let numPc = document.createElement("h4");
        numPc.innerHTML = `El número generado es: ${numGenerado}`;
        seccionPadre.insertBefore(numPc, btnResultado);
}


function verResultado(){
    let seccionPadre = document.querySelector("#seccionPadre")
    let a = numDelUsuario.numUsuario;
    let b = numGenerado;
    console.log(a)
    console.log(b)
    if(a === b){
        let resultado = document.createElement("h4");
        resultado.innerHTML = 'GANASTE';
        seccionPadre.append(resultado);
        
    }
    else if (a < b){
        let resultado = document.createElement("h4");
        resultado.innerHTML = 'EL NUMERO QUE ELEGISTE ES MENOR'
        seccionPadre.append(resultado);
    }
    else {
        let resultado = document.createElement("h4");
        resultado.innerHTML = 'EL NUMERO QUE ELEGISTE ES MAYOR'
        seccionPadre.append(resultado);
    }
}