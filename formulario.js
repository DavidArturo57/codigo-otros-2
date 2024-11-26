var formulario = document.querySelector("#form")

formulario.onsubmit = function(e) {

  e.preventDefault();  // Corregido: 'e.prevent()' a 'e.preventDefault()'

  // Obtener valores de los campos del formulario
  var n = formulario.elements["name"];
  var e = formulario.elements["age"];
  var na = formulario.elements["nationality"];

  var nombre = n.value.trim(); // Usar trim() para eliminar espacios innecesarios
  var edad = parseInt(e.value); // Convertir la edad a número
  var nacionalidad = na.value;

  // Verificación de datos válidos
  if (nombre.length === 0) {
    n.classList.add("error");
  } else {
    n.classList.remove("error");
  }

  if (edad < 18 || edad > 120) {
    e.classList.add("error");
  } else {
    e.classList.remove("error");
  }

  // Si los datos son válidos, agregar el invitado a la lista
  if (nombre.length > 0 && edad >= 18 && edad <= 120) {
    agregarInvitado(nombre, edad, nacionalidad);
  }
};

// Función para agregar invitado a la lista
function agregarInvitado(nombre, edad, nacionalidad) {
  // Crear el elemento para la lista de invitados
  var lista = document.getElementById("lista-de-invitados");

  var elementoLista = document.createElement("div");
  elementoLista.classList.add("elemento-lista");  // Usar 'classList.add' para agregar clase CSS
  lista.appendChild(elementoLista);

  // Crear y agregar los campos de la información del invitado
  crearElemento("Nombre", nombre, elementoLista);
  crearElemento("Edad", edad, elementoLista);
  crearElemento("Nacionalidad", convertirNacionalidad(nacionalidad), elementoLista);

  // Crear el botón de eliminación
  var botonBorrar = document.createElement("button");
  botonBorrar.textContent = "Eliminar invitado";
  botonBorrar.classList.add("eliminar-invitado");
  elementoLista.appendChild(botonBorrar);

  // Eliminar el invitado al hacer clic en el botón
  botonBorrar.onclick = function() {
    elementoLista.remove(); // Eliminar el nodo del invitado
  };
}

// Función para crear un elemento de la lista de invitados
function crearElemento(descripcion, valor, contenedor) {
  var spanDescripcion = document.createElement("span");
  spanDescripcion.textContent = descripcion + ": ";
  var inputValor = document.createElement("input");
  inputValor.value = valor;
  inputValor.disabled = true;  // Deshabilitar el campo para que no sea editable
  contenedor.appendChild(spanDescripcion);
  contenedor.appendChild(inputValor);
  contenedor.appendChild(document.createElement("br"));
}

// Función para convertir la abreviatura de la nacionalidad en su nombre completo
function convertirNacionalidad(codigo) {
  switch (codigo) {
    case "ar":
      return "Argentina";
    case "mx":
      return "Mexicana";
    case "per":
      return "Peruana";
    case "vnzl":
      return "Venezolana";
    default:
      return "Desconocida";
  }
}