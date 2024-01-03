alert("Bienvenido");

var vid, rep, bar, pro;
var maximo = 600;

function comenzar() {
    
    vid = document.getElementById("vid");
    rep = document.getElementById("rep");
    bar = document.getElementById("bar");
    pro = document.getElementById("pro");
    
    rep.addEventListener("click", play_pause, false);
    bar.addEventListener("click", adelante_atras, false);
    
}

function play_pause() {
    
    if((!vid.paused) && (!vid.ended)) {
        
        vid.pause();
        rep.innerHTML = "Play";
        
    } else {
        
        vid.play();
        rep.innerHTML = "Pause"; //Hace referencia al texto entre las etiquetas
        bucle = setInterval(estado, 30); //Se llama a la función una vez por segundo
    
    }
    
}

function estado() {
    
    if(!vid.ended) {
        
        var total = parseInt(vid.currentTime*maximo/vid.duration);
        pro.style.width = total + "px";
        
    }
    
}

function adelante_atras(posicion) {
    
    if(!vid.paused && !vid.ended) {
        
        var mouseX = posicion.pageX - bar.offsetLeft;
        var nuevoTiempo = mouseX * vid.duration / maximo;
        vid.currentTime = nuevoTiempo;
        pro.style.width = mouseX + "px";
        
    }
    
}

window.addEventListener("load", comenzar, false);