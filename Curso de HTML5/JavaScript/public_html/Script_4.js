function ejecuta() {
    
    //document.querySelector(".importante").onclick = saluda;
    //document.querySelector("#principal p:last-child").onclick = saluda; //Se le asigna la última p con la pseudoclase de CSS3
    
    var arreglo = document.querySelectorAll("#principal p, span"); //Todos los p dentro del selector y en la etiqueta
    
    /*array[0].onclick = saluda;
    array[3].onclick = saluda;*/
    
    for(var i=0; i<arreglo.length; i++) {
        
        arreglo[i].onclick = saluda;
        
    }
    
}

function saluda() {
    
    alert("Hola");
	
}

window.onload = ejecuta;