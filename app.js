let numeroSecreto = 0
let intentos = 0;
let listaNumerosSorteados = [];
numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);//capturar lo que el usuario ingresó
    
    if(numeroDeUsuario==numeroSecreto){
        asignarTextoElemento('p', `acertaste el numero en ${intentos} ${(intentos===1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');//remover el atributo disbled del boton
    }
    else{
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p', 'el numero secreto es menor');
        }
        else{
            asignarTextoElemento('p', 'el numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){ //funcion para limpiar la caja blanca
    document.querySelector('#valorUsuario').value='';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;//numero secreto es variable o alcance de bloque
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'ya se sortearon todos los numeros posibles');
    }
        else{
    //si el numero generado está incluido en la lista
    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();//llama a la funcion generarNumeroSecreto para generar un nuevo numero
        }
        else{
        listaNumerosSorteados.push(numeroGenerado);//Si el nuero generado no estaba en la lista lo agrega con el push y sale.
        return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'indica un numero secreto');
    asignarTextoElemento('p', `indica un número de 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){//funcion para reiniciar el juego
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numero
    //generar el numero aleatorio
    //iniciar el numero de intentos
    condicionesIniciales();
    //deshabilitar el boton del nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');//son dos parametros: para setar el valor disabled con valor true en el boton
}
condicionesIniciales();
