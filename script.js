const botonesAgregar = document.querySelectorAll(".btn-agregar");
const contadorCarrito = document.getElementById("contadorCarrito");
const botonCarrito = document.getElementById("abrirCarrito");
const toastElement = document.getElementById("toastCompra");
const toastMensaje = document.getElementById("toastMensaje");

let toastBootstrap = null;

if (toastElement) {
    toastBootstrap = new bootstrap.Toast(toastElement);
}

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

actualizarContador();

botonesAgregar.forEach((boton) => {
    boton.addEventListener("click", () => {
        const producto = {
            id: boton.dataset.id,
            nombre: boton.dataset.nombre,
            precio: parseInt(boton.dataset.precio),
            imagen: boton.dataset.imagen,
            cantidad: 1
        };

        const productoExistente = carrito.find(item => item.id === producto.id);

        if (productoExistente) {
            productoExistente.cantidad += 1;
        } else {
            carrito.push(producto);
        }

        localStorage.setItem("carrito", JSON.stringify(carrito));
        actualizarContador();

        if (toastMensaje) {
            toastMensaje.textContent = `${producto.nombre} agregado al carrito`;
        }

        if (toastBootstrap) {
            toastBootstrap.show();
        }
    });
});

if (botonCarrito) {
    botonCarrito.addEventListener("click", () => {
        window.location.href = "tienda.html";
    });
}

function actualizarContador() {
    let totalProductos = 0;

    carrito.forEach((producto) => {
        totalProductos += producto.cantidad;
    });

    if (contadorCarrito) {
        contadorCarrito.textContent = totalProductos;
    }
}