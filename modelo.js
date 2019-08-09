
function comenzar(){
	var miboton = document.getElementById("dame_ubicacion");
	miboton.addEventListener("click", obtener, false);
}

function obtener(){
	navigator.geolocation.getCurrentPosition(mostrar_posicion);
}

function mostrar_posicion(posicion){
	var ubicacion = document.getElementById("ubicacion");
	var latitud = "latitud: " + posicion.coords.latitude;
	ubicacion.innerHTML=latitud;
}

window.addEventListener("load",comenzar,false);