//Se crea la clase tarjeta para con ella crear nuestras tarjetas de Trello
function Lista(id, titulo){
  this.titulo = titulo;
  this.id= id;
  this.pendiente = [];
}

function Pendiente(id, contenido){
  this.id=id;
  this.contenido=contenido;
}

var listas=[];

function crearLista(){
  var id = Date.now();
  var titulo = document.getElementById("agregarTarjeta").value;
  console.log(titulo);
  var lista = new Lista(id, titulo);
  listas.push(lista);
  mostrarLista(lista);
}

function mostrarLista(lista){
  console.log(lista);
  var sectionContainer = document.createElement("section");
  sectionContainer.id = lista.id;
  console.log(sectionContainer);
  var contenedorTarjeta = document.getElementById("contenedorTarjetas");
  var tituloTarjeta = document.createElement("section");
  console.log(tituloTarjeta);
    tituloTarjeta.innerText = lista.titulo;
    sectionContainer.appendChild(tituloTarjeta);
    contenedorTarjetas.appendChild(sectionContainer);
    document.getElementById("contenedorTarjetas").innerHTML=lista.titulo;



  var cajaPendiente = document.createElement("input");
  var texto = document.createTextNode("Agregar Pendiente");
  var salto = document.createElement("br");
  var botonPendiente = document.createElement("button");
  contenedorTarjeta.appendChild(cajaPendiente);
  contenedorTarjeta.appendChild(salto);
  contenedorTarjeta.appendChild(botonPendiente);

  cajaPendiente.type = "text";
  cajaPendiente.setAttribute = "data-lista-id, lista.id";
  botonPendiente.type = "submit";
  botonPendiente.value = "Enviar Pendiente";
  botonPendiente.onclick = "agregarPendiente()";
  botonPendiente.setAttribute = "data-lista-id, lista.id";
  botonPendiente.appendChild(texto);
}

function agregarPendiente(){
  var pendienteNuevo = document.getElementById("Date.now()");
  console.log(pendienteNuevo);

}
