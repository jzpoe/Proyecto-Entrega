// Array para almacenar los productos añadidos al carrito
let carrito = [];

// Función para agregar un producto al carrito
function agregarAlCarrito(titulo, precio) {
  const producto = { titulo, precio };
  carrito.push(producto);
  actualizarCarrito();
}

// Función para actualizar la visualización del carrito
function actualizarCarrito() {
  const carritoContainer = document.getElementById("carrito");
  carritoContainer.innerHTML = ""; // Limpiar contenido anterior

  let total = 0;

  carrito.forEach((producto, index) => {
    const item = document.createElement("div");
    item.className = "carrito-item";
    item.innerHTML = `
      <span>${producto.titulo} - $${producto.precio}</span>
      <button class="btn btn-danger btn-sm" onclick="eliminarDelCarrito(${index})">Eliminar</button>
    `;
    carritoContainer.appendChild(item);

    total += producto.precio;
  });

  // Mostrar el total
  const totalElement = document.getElementById("total");
  totalElement.textContent = `Total: $${total}`;
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  actualizarCarrito();
}

// Añadir evento a los botones de las tarjetas
document.addEventListener("DOMContentLoaded", () => {
  const botones = document.querySelectorAll(".agregar-carrito");

  botones.forEach((boton) => {
    boton.addEventListener("click", (event) => {
      event.preventDefault(); // Evita que el enlace recargue la página
      const titulo = boton.getAttribute("data-titulo");
      const precio = parseFloat(boton.getAttribute("data-precio"));
      agregarAlCarrito(titulo, precio);
    });
  });
});