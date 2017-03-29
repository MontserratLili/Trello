nuevaLista=[];
function crearTarjeta(){
  var titulo = document.getElementById("agregarTarjeta").value;
  var nombreLista = document.createElement("tr") + document.getElementById("agregarTarjeta").value;

  var pendientesLista = document.createElement("td");


  nuevaTarjeta.innerHTML=titulo + "<br>" +nombreLista + "<br>"+ pendientesLista +"<br>";


}
