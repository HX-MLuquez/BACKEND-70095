console.log("IN CLIENT");

const userName = document.querySelector(".userName");

const socket = io();

const messages = [];
var nameUser = "";
// Mostrar el formulario de entrada de usuario
Swal.fire({
  title: "Ingrese su información",
  html: `
      <input type="text" id="swal-input-name" class="swal2-input" placeholder="Nombre">
      <input type="text" id="swal-input-id" class="swal2-input" placeholder="ID">
    `,
  focusConfirm: false,
  showCancelButton: true,
  confirmButtonText: "Ingresar",
  preConfirm: () => {
    const name = Swal.getPopup().querySelector("#swal-input-name").value;
    const id = Swal.getPopup().querySelector("#swal-input-id").value;
    if (!name || !id) {
      Swal.showValidationMessage(`Por favor ingrese ambos campos`);
    }
    return { name: name, id: id };
  },
});
