async function listarProductos(){
    const conexion = fetch("http://localhost:3001/products");

    const conexionConvertida = (await conexion).json();

    return conexionConvertida;
}

async function enviarProducto(name,price,image){
    const conexion = await fetch("http://localhost:3001/products", {
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({
            name:name,
            price:price,
            image:image
        })
    })
    const conexionConvertida = conexion.json();

    return conexionConvertida;
}

export const conexionAPI={
    listarProductos,enviarProducto
}