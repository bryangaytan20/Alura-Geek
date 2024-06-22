async function listarProductos(){
    const conexion = fetch("http://localhost:3001/products");

    const conexionConvertida = (await conexion).json();

    return conexionConvertida;
}

export const conexionAPI={
    listarProductos
}