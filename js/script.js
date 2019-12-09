var val =document.getElementById('Metro')
var elem = document.getElementById('IncNombre')
var NumeroJugadores;


function Nuevo() {// funcion para lanzar el primer popup
    document.getElementById ('overlay').classList.add('active');   
    document.getElementById('popup').classList.add('active');  
}
function cerrar(val1, val2) { // funcion para cerrar los PopUp
    document.getElementById (val1).classList.remove('active');
    document.getElementById(val2).classList.remove('active');

    
}
/*funcion para crear Jugadores */
function NombreJugadores(NumJug,Inc) {
    console.log(NumJug.value)
   
        longitudOnda =parseInt(NumJug.value)*0.666;               // Aqui validamos que el valor ingresado sea entre 2 y 4 jugadores
        Resultado = 340/longitudOnda

        console.log(longitudOnda)
        console.log(Resultado)
        
        cerrar('overlay','popup')                                            //cerramos el popup inicial    
        document.getElementById('overlay2').classList.add('overlay', 'active'); //Agregamos el style de el anterior pop
        document.getElementById('popup2').classList.add('popup','active');
                                                               //aqui creamos los cada uno de los inputs de los jugadores
            var o = document.createElement('p');
            o.type = "text";
            o.style.marginTop = '10px';
            o.innerHTML = Resultado.toFixed(2);
            Inc.appendChild(o);
}

function InicioJuego() {
    cerrar('overlay2','popup2')
    //document.getElementById('btn-Contenedor').classList.add('ocultar');
   // document.getElementById('Tablero').classList.remove('tabOcu');
    
  
}






