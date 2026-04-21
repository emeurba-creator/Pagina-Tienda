const contenedorCarrito = document.getElementById("contenedorCarrito");
const totalCarrito = document.getElementById("totalCarrito");
const btnVaciar = document.getElementById("btnVaciar");
const btnComprar = document.getElementById("btnComprar");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

mostrarCarrito();

function mostrarCarrito() {
    contenedorCarrito.innerHTML = "";

    if (carrito.length === 0) {
        contenedorCarrito.innerHTML = '<p class="carrito-vacio">Tu carrito está vacío.</p>';
        totalCarrito.textContent = "$0";
        return;
    }

    let total = 0;

    carrito.forEach((producto, index) => {
        total += producto.precio * producto.cantidad;

        contenedorCarrito.innerHTML += `
            <div class="producto-carrito">
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <div class="info-producto">
                    <h3>${producto.nombre}</h3>
                    <p>Precio: $${producto.precio.toLocaleString("es-CL")}</p>
                    <p>Cantidad: ${producto.cantidad}</p>
                    <p>Subtotal: $${(producto.precio * producto.cantidad).toLocaleString("es-CL")}</p>
                    <button onclick="eliminarProducto(${index})">Eliminar</button>
                </div>
            </div>
        `;
    });

    totalCarrito.textContent = "$" + total.toLocaleString("es-CL");
}

function eliminarProducto(index) {
    carrito.splice(index, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
}

btnVaciar.addEventListener("click", () => {
    carrito = [];
    localStorage.removeItem("carrito");
    mostrarCarrito();
});

btnComprar.addEventListener("click", () => {
    if (carrito.length === 0) {
        alert("Tu carrito está vacío");
        return;
    }

    alert("Compra realizada con éxito");
    carrito = [];
    localStorage.removeItem("carrito");
    mostrarCarrito();
});