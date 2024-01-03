function ejecuta() {
	
    //document.getElementsByTagName("p")[0].onclick = saluda;

    //document.getElementById("con_id").onclick = saluda;

    //document.getElementsByClassName("importante")[1].onclick = saluda;

    for(var i=0; i<2; i++) {

        var v = document.getElementsByClassName("importante")[i].onclick = saluda; //Ciclo para ponerle el evento a todos los elementos

    }
	
}

function saluda() {
    
    alert("Hola");
	
}

//window.onload = saluda;

window.onload = ejecuta;