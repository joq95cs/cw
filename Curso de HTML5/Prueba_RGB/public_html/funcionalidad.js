var rojo, verde, azul, color, texto;

var valorRojo=0, valorVerde=0, valorAzul=0;

function iniciar() {
    
    alert("Bienvenido");
    
    rojo = document.getElementById("rojo");
    verde = document.getElementById("verde");
    azul = document.getElementById("azul");
    color = document.getElementById("color");
    texto = document.getElementById("texto");
    
    rojo.addEventListener("click", clicRojo, false);
    verde.addEventListener("click", clicVerde, false);
    azul.addEventListener("click", clicAzul, false);
    
}

function clicRojo() {
    
    if(valorRojo < 255) {
        
        valorRojo ++;
        
    } else {
        
        valorRojo = 0;
        
    }
    
    fijarColor();
    
}

function clicVerde() {
    
    if(valorVerde < 255) {
        
        valorVerde ++;
        
    } else {
        
        valorVerde = 0;
        
    }
    
    fijarColor();
    
}

function clicAzul() {
    
    if(valorAzul < 255) {
        
        valorAzul ++;
        
    } else {
        
        valorAzul = 0;
        
    }
    
    fijarColor();
    
}

function fijarColor() {
    
    texto.innerHTML = "RGB (" + valorRojo + ", " + valorVerde + ", " + valorAzul + ")";
    color.style.background = "rgb(" + valorRojo + ", " + valorVerde + ", " + valorAzul + ")";
    
}

window.addEventListener("load", iniciar, false);