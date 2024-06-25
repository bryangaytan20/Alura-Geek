// mostrarProductos.js

import { conexionAPI } from "./conexionAPI.js";

const lista = document.querySelector("[data-lista]");

function crearCard(name, price, image, id) {
    const producto = document.createElement("div");
    producto.className = "card";
    producto.innerHTML = `
        <img src="${image}" class="imagenProducto" alt="${name}">
        <h3>${name}</h3>
        <p>$${price}</p>
        <button class="delete-btn" data-id="${id}">
            <img src="../assets/contenedor-de-basura.png" alt="Icono de basura">
        </button>
    `;

    // Evento de eliminación de producto
    const deleteButton = producto.querySelector(".delete-btn");
    deleteButton.addEventListener("click", async () => {
        const productId = deleteButton.getAttribute("data-id");
        await conexionAPI.eliminarProducto(productId);
        producto.remove();  // Eliminar el elemento del DOM
    });

    return producto;
}

async function listarProductos(){

    try{
        const listaAPI = await conexionAPI.listarProductos();
    listaAPI.forEach(producto => {
        lista.appendChild(crearCard(producto.name, producto.price, producto.image, producto.id));
    });
    }catch{
        lista.innerHTML = '<h2>Ha ocurrido un problema con la conexion :(<h2>'
    }
    
}

listarProductos();
