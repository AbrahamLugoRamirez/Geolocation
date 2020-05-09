
function comenzar(){
	var miboton = document.getElementById("dame_ubicacion");
	miboton.addEventListener("click", obtener, false);

}

function obtener(){
	navigator.geolocation.getCurrentPosition(mostrar_posicion);
}

function mostrar_posicion(posicion){
	var ubicacion = document.getElementById("ubicacion");
	var miubicacion="";
	miubicacion+="latitud: " + posicion.coords.latitude + "<br>";
	miubicacion+="Longuitud: " + posicion.coords.longitude + "<br>";
	miubicacion+="Exactitud: " + posicion.coords.accuracy + "<br>";

	ubicacion.innerHTML=miubicacion;

lat=posicion.coords.latitude;
long = posicion.coords.longitude;
	iniciarMap(lat,long);
}
function iniciarMap(latt,longg){
    var coord = {lat:latt ,lng:longg};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom:16,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}
window.addEventListener("load",comenzar,false);