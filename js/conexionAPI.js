// conexionAPI.js

async function listarProductos() {
    const conexion = await fetch("http://localhost:3001/products");
    const conexionConvertida = await conexion.json();
    return conexionConvertida;
}

async function enviarProducto(name, price, image) {
    const conexion = await fetch("http://localhost:3001/products", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
            name: name,
            price: price,
            image: image
        })
    });
    const conexionConvertida = await conexion.json();

    if(!conexion.ok){
        throw new Error("Ha ocurrido un error al enviar el video");
    }

    return conexionConvertida;
}

async function eliminarProducto(id) {
    const conexion = await fetch(`http://localhost:3001/products/${id}`, {
        method: "DELETE",
    });
    return conexion.ok;
}

export const conexionAPI = {
    listarProductos,
    enviarProducto,
    eliminarProducto
};
