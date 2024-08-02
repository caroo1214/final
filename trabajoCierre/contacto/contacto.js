
"use strict";
// Obtener los elementos del formulario
const form = document.getElementById('form');
const nombre = document.getElementById('nombre');
const correo = document.getElementById('correo');
const celular = document.getElementById('celular');
const mensaje = document.getElementById('mensaje');
const botonEnviar = document.getElementById('botonEnviar');

// Agregar evento de envío al formulario
form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Crear el archivo con la información del formulario
  const informacion = [
    `Nombre: ${nombre.value}`,
    `Correo: ${correo.value}`,
    `Celular: ${celular.value}`,
    `Mensaje: ${mensaje.value}`,
  ];

  const blob = new Blob([informacion.join('\n')], { type: 'text/plain' });
  saveAs(blob, 'contacto.txt');
  return false;
});
