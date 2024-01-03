alert("Bienvenido");

var aud, rep, bar, pro;
var maximo = 600;

function comenzar() {
    
    aud = document.getElementById("aud");
    rep = document.getElementById("rep");
    bar = document.getElementById("bar");
    pro = document.getElementById("pro");
    
    rep.addEventListener("click", play_pause, false);
    bar.addEventListener("click", adelante_atras, false);
    
}

function play_pause() {
    
    if((!aud.paused) && (!aud.ended)) {
        
        aud.pause();
        rep.innerHTML = "Play";
        
    } else {
        
        aud.play();
        rep.innerHTML = "Pause"; //Hace referencia al texto entre las etiquetas
        bucle = setInterval(estado, 30); //Se llama a la función una vez por segundo
    
    }
    
}

function estado() {
    
    if(!aud.ended) {
        
        var total = parseInt(aud.currentTime*maximo/aud.duration);
        pro.style.width = total + "px";
        
    }
    
}

function adelante_atras(posicion) {
    
    if(!aud.paused && !aud.ended) {
        
        var mouseX = posicion.pageX - bar.offsetLeft;
        var nuevoTiempo = mouseX * aud.duration / maximo;
        aud.currentTime = nuevoTiempo;
        pro.style.width = mouseX + "px";
        
    }
    
}

window.addEventListener("load", comenzar, false);