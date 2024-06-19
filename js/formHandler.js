// scripts/formHandler.js

function handleFormSubmit(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const precio = document.getElementById("precio").value;
    const imagen = document.getElementById("imagen").value;

    const nuevoProducto = {
        nombre,
        precio,
        imagen
    };

    productos.push(nuevoProducto);
    renderProductos([nuevoProducto]);
    document.getElementById("producto-form").reset();
}
