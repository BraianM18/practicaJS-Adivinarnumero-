let numerosSorteados = [];
let numeroMaximo = 10; 
let numeroSecreto = generarNumero();
let intentos = 1; 


function asignarTexto(elemento, texto){
    let elementoHTLM = document.querySelector(elemento);
    elementoHTLM.innerHTML = texto;
}


function generarNumero(){
    let numeroGenerado = Math.floor(Math.random()* numeroMaximo) +1;
    console.log("Numero sorteado:", numeroGenerado);
    console.log("Lista: ", numerosSorteados);
    
    if (numerosSorteados.length == numeroMaximo) {
        asignarTexto('p','Ya no hay mas numero para sortear');
    }else{   
        
        if (numerosSorteados.includes(numeroGenerado)) {
        //Basicamente esa instrucion dice que si existe una linea hacer lo que este adentro
            return generarNumero();//esto se llama recursividad,lo que hace es llamarse a si misma, para generar otro numero. 
            //si el numero ya existe en la lista entonces generamos otro con este return
        } else{
            numerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }  
}

function verificarNumero(){
    //Aqui lo que estoy haciendo es asignar a una variable lo que ingrese en el input
    let numeroUsuario = parseInt(document.getElementById('texto').value);

    if (isNaN(numeroUsuario)) {
        asignarTexto('p',"Debes ingresar un numero");
    }else if (numeroUsuario === numeroSecreto) {
        asignarTexto('p', `Acertaste Maestro Pokemon y tuviste: ${intentos} ${intentos === 1 ? 'intento' : 'intentos'}`); 
        document.getElementById('reiniciar').removeAttribute('disabled'); 
          
    }else {
        if (numeroUsuario > numeroSecreto) {
            asignarTexto('p', "El numero es menor");
        }else{
            asignarTexto('p', "El numero es mayor");
        }
        intentos ++; 
    }   
}

function reiniciar(){
    document.getElementById('texto').value="";
    asignarTexto('p', `Escoge un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumero();
    intentos = 1;  
    document.getElementById('reiniciar').setAttribute('disabled', true);
    console.log("nuevo numero secreto: ", numeroSecreto);
}



asignarTexto('h1',"Juego del número secreto");
asignarTexto('p',"Escoge un número del 1 al 10");















































































