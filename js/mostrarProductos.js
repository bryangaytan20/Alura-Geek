import { conexionAPI } from "./conexionAPI.js";

const lista = document.querySelector("[data-lista]");


function crearCard(name,price,image){
    const producto = document.createElement("div");
    producto.className="card";
    producto.innerHTML=`<img src="${image}" class="imagenProducto" alt="Producto 1">
                        <h3>${name}</h3>
                        <p>$${price}</p>
                        <button class="delete-btn"><img src="../assets/contenedor-de-basura.png" alt="Icono de basura"></button>`;
                        

   return producto; 
}

async function listarProductos(){
    const listaAPI = await conexionAPI.listarProductos()
    
    listaAPI.forEach(producto=>lista.appendChild(crearCard(producto.name, producto.price, producto.image, producto.id)))
}

listarProductos();