let numGenerado = parseInt(Math.random()* (10 - 1) + 1);

function pedirNumUsuario(){
    let seccionPadre = document.querySelector("#seccionPadre")

    let numUsuario = prompt('Ingrese un número entre el 1 y el 10')
    if (numUsuario > 0 && numUsuario <= 10){
        let numUserX = document.createElement("h4");
        numUserX.innerHTML = `El número elegido es: ${numUsuario}`;
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

    if(pedirNumUsuario.numUsuario == numGenerado){
        let resultado = document.createElement("h4");
        resultado.innerHTML = 'GANASTE';
        seccionPadre.append(resultado);
        
    }
    else if (pedirNumUsuario.numUsuario < numGenerado){
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