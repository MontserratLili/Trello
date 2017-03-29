function Tarjeta(titulo, pendiente){
  this.titulo = titulo;
  this.pendiente = pendiente;
}
var nuevaTarjeta=[];
var nuevoPendiente=[];

function guardarTitulo(){
  var titulo = document.getElementById("agregarTarjeta").value;
  var nueva = new Tarjeta(titulo);
  document.getElementById("nuevaTarjeta").innerText= titulo;
}

var boton = document.createElement("BUTTON");
var texto = document.createTextNode("Agregar Pendiente");
var entrada = document.createElement("input");

function crearPendiente(){
  boton.appendChild(texto);
  boton.setAttribute("value", "agregarPendiente");
  entrada.setAttribute("value", "");
  boton.setAttribute("onclick", "guardarPendiente()");
  boton.setAttribute("onclick", "segundoInput()");
  document.body.appendChild(boton);
}

function segundoInput(){
 document.body.appendChild(entrada);
}


function guardarPendiente(){
  var pendiente = document.getElementById("entrada");
  var nueva = new Tarjeta(pendiente);
  nuevoPendiente.push(pendiente);
  var lista = document.createElement("ul");
  var lista2 = document.createElement("li");
      lista.innerText = pendiente;
      lista.appendChild(lista2);
  document.getElementById("nuevaTarjeta").appendChild(lista);
  lista2.innerText = nuevoPendiente;
}
