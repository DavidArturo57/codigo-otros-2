// Selección del formulario y lista de invitados
const formulario = document.getElementById('form');
const guestList = document.getElementById('guest-list');

// Función para manejar el envío del formulario
formulario.onsubmit = function(e) {
  e.preventDefault(); // Prevenir el comportamiento por defecto de recargar la página

  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const nationality = document.getElementById('nationality').value;

  // Validación de campos
  if (name === '' || age === '') {
    alert('Por favor, complete todos los campos');
    return;
  }

  // Crear un nuevo invitado
  const invitadoDiv = document.createElement('div');
  invitadoDiv.classList.add('invitado');

  // Añadir los datos del invitado
  invitadoDiv.innerHTML = `
    <p><strong>Nombre:</strong> ${name}</p>
    <p><strong>Edad:</strong> ${age}</p>
    <p><strong>Nacionalidad:</strong> ${getNationalityName(nationality)}</p>
    <button class="remove-btn">Eliminar invitado</button>
  `;

  // Añadir el invitado a la lista
  guestList.appendChild(invitadoDiv);

  // Limpiar el formulario
  formulario.reset();

  // Asignar la función para eliminar el invitado
  const removeButton = invitadoDiv.querySelector('.remove-btn');
  removeButton.onclick = function() {
    guestList.removeChild(invitadoDiv);
  };
};

// Función para obtener el nombre de la nacionalidad
function getNationalityName(code) {
  switch (code) {
    case 'ar': return 'Argentina';
    case 'mx': return 'Mexicana';
    case 'per': return 'Peruana';
    case 'vnzl': return 'Venezolana';
    default: return 'Desconocida';
  }
}
