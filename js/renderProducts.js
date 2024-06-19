// scripts/renderProducts.js

function renderProductos(productos) {
    const productosContainer = document.querySelector(".productos-container");
    const noProductosMsg = document.querySelector(".mensaje-no-productos");

    if (productos.length === 0) {
        noProductosMsg.style.display = "block";
    } else {
        noProductosMsg.style.display = "none";
        productos.forEach(producto => {
            const card = document.createElement("div");
            card.className = "card";
            
            const img = document.createElement("img");
            img.src = producto.imagen;
            img.alt = producto.nombre;

            const nombre = document.createElement("h3");
            nombre.textContent = producto.nombre;

            const precio = document.createElement("p");
            precio.textContent = `$${producto.precio}`;

            card.appendChild(img);
            card.appendChild(nombre);
            card.appendChild(precio);
            productosContainer.appendChild(card);
        });
    }
}
