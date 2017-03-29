//Se crea la clase tarjeta para con ella crear nuestras tarjetas de Trello
function Tarjeta(titulo, pendiente){
  this.titulo = titulo;
  this.pendiente = pendiente;
}

var nuevaTarjeta=[];
var nuevoPendiente=[];

//Se crea una tarjeta con título
function guardarTitulo(){
  var titulo = document.getElementById("agregarTarjeta").value;
  var nueva = new Tarjeta(titulo);
  document.getElementById("nuevaTarjeta").innerText= titulo;
}

//Al almacenar nuestra nueva tarjeta solo con el título, se crea un nuevo boton para agregar pendientes
var boton = document.createElement("BUTTON");
var texto = document.createTextNode("Agregar Pendiente");
var entrada = document.createElement("input");

//Se le da funcionalidad a dicho boton
function crearPendiente(){
  boton.appendChild(texto);
  boton.setAttribute("value", "agregarPendiente");
  entrada.setAttribute("value", "");
  boton.setAttribute("onclick", "guardarPendiente()");
  boton.setAttribute("onclick", "masPendientes()");
  document.body.appendChild(boton);
}

//Se crea una lista que ordena el título
var lista;
function guardarPendiente(){
  var pendiente = document.getElementById("entrada");
  lista = document.createElement("ul");
  document.getElementById("nuevaTarjeta").appendChild(lista);
}

//Se agregan los pendientes como elementos de la lista
function masPendientes(){
  var pendiente = document.getElementById("masTarjetas").value;
  var lista2 = document.createElement("li");
  lista2.innerText=pendiente;
  lista.appendChild(lista2);
}

//Se muestra la tarjeta en pantalla y se da paso a la creación de nuevas tarjetas
function imprimirTarjeta(){
  var comentario = document.getElementById("nuevaTarjeta").value;
  var clone = comentario.cloneNode(true);
  document.getElementById("tarjeta").appendChild(clone);
}
