// Leer el parámetro ID desde la URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// Buscar la persona correspondiente
const persona = personas.find(p => p.id === id);

// Obtener elementos del DOM
const nombre = document.getElementById("nombre");
const cargo = document.getElementById("cargo");
const documento = document.getElementById("documento");
const telefono = document.getElementById("telefono");
const sangre = document.getElementById("sangre");
const foto = document.getElementById("foto");
const info = document.getElementById("info");

// Mostrar datos si la persona existe
if (persona) {
  foto.src = persona.foto;
  nombre.textContent = persona.nombre;
  cargo.textContent = persona.cargo;
  documento.textContent = persona.documento;
  sangre.textContent = persona.tipoSangre;
  telefono.textContent = persona.telefono;
} else {
  nombre.textContent = "Perfil no encontrado";
  foto.style.display = "none";
  info.style.display = "none";
}
