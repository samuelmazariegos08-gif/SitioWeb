const form = document.querySelector('#visitor-form');
form.addEventListener('submit', event => {
  event.preventDefault();
  const status = document.querySelector('#form-status');
  status.textContent = `¡Gracias, ${form.elements.nombre.value.trim()}! Completaste el formulario de práctica. Tus datos no se enviaron ni se guardaron.`;
  form.reset();
  status.focus();
});
