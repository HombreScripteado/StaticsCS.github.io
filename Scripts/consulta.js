const tablaProductos = document.querySelector(".tablaProductos");

let matrizConsulta = [];

tablaProductos.addEventListener("click", actualizarMatrizConsulta);

let elementosResultados = document.querySelectorAll('.resultados thead');

let tablaChecklist="";

function actualizarMatrizConsulta() {
    matrizConsulta = [];
    // console.clear();
    let elementosTablaProducto = document.querySelectorAll(".tablaProductos tr");

    // console.log("ENTRA EN FUNCION actualizarMatrizConsulta")

    elementosTablaProducto.forEach(fila => {

        const celdas = fila.querySelectorAll("td");
        let productoParte = celdas[1].innerHTML.split("<br>")

        let producto = productoParte[0].trim();
        let cantidad = fila.querySelector(".cantidadInput").value

        matrizConsulta.push([producto, cantidad]);
    })

    console.log(`matriz \n ${matrizConsulta}`)
    return matrizConsulta
};




// ----------------------------------------filtro los supermercados por matriz y agrego cantidades------------------------------

function obtenerProductosSeleccionados(matrizConsulta, baseDatosProductos) {

    const productosSeleccionados = [];

    // Recorrer la matriz de consulta
    for (let i = 0; i < matrizConsulta.length; i++) {
        const nombreProducto = matrizConsulta[i][0];
        const cantidadProducto = matrizConsulta[i][1];

        // console.log(`nombre Prod \n ${nombreProducto}`)
        // console.log(`cantidad Prod \n ${cantidadProducto}`)
        // console.log("check")
        // Buscar el producto en la base de datos
        const productoEncontrado = baseDatosProductos.find(producto => producto.nombre.includes(nombreProducto));
        // console.log(productoEncontrado)
        productoEncontrado.cantidad = cantidadProducto;
        // Si se encuentra el producto, añadirlo a la lista de seleccionados con la cantidad correspondiente
        productosSeleccionados.push({
            producto: productoEncontrado,
        });

    }

    // console.log(`matriz dentro de funcion obtenerProductosSeleccionados \n ${matrizConsulta}`)
    return productosSeleccionados;
}




// console.log(`FILTRADO Carrefour ${productosCarrefourFiltrados}`)

imgElegirSuper.forEach(imagen => {
    imagen.addEventListener("click", () => {
        contenedorResultadoSupermercado.innerHTML = "";
        divContenedorTotalChecklist.innerHTML="";

        const productosCarrefourFiltrados = obtenerProductosSeleccionados(matrizConsulta, productosCarrefour);
        // console.log(`prod Carrefour Filtrado \n ${productosCarrefourFiltrados}`);

        const productosCotoFiltrados = obtenerProductosSeleccionados(matrizConsulta, productosCoto);
        // console.log(`prod Coto Filtrado \n ${productosCotoFiltrados}`);

        const productosJumboFiltrados = obtenerProductosSeleccionados(matrizConsulta, productosJumbo);
        // console.log(`prod Jumbo Filtrado \n ${productosJumboFiltrados}`);

        const productosDiaFiltrados = obtenerProductosSeleccionados(matrizConsulta, productosDia);
        // console.log(`prod dia% Filtrado \n ${productosDiaFiltrados}`);

        // -----------------------------------------------------------------------Ordeno las tablas Segun el precio----------------------------------------------------

        contenedorResultadoSupermercado.innerHTML = "";

        // Genera las tablas y las almacena en un arreglo
        const tablas = [generarTabla(productosCarrefourFiltrados),
        generarTabla(productosCotoFiltrados),
        generarTabla(productosJumboFiltrados),
        generarTabla(productosDiaFiltrados)];

        // Encuentra la tabla ganadora
        const tablasOrdenadas = ordenarTablasPorPrecioMaximo(tablas);
        // tablasOrdenadas[0].classList.add("ganador");
        tablasOrdenadas[0].classList.add("superSeleccionado");
        tablasOrdenadas[0].classList.add("ganador");
        tablaChecklist=tablasOrdenadas[0];
        console.log(tablaChecklist);

        // Asigna la clase "ganador" a la tabla ganadora

        // Inserta la tabla ganadora al principio del contenedor
        tablasOrdenadas.forEach(tabla => {
            contenedorResultadoSupermercado.appendChild(tabla);
        });

    })
})

// -----------------------------------------Aca arranca el codigo Post-Cagada------------------------------------------

imgElegirSuper.forEach(imagen => {
    imagen.addEventListener("click", () => {
        console.log("se hizo click en coso de imagen")
        elementosResultados = document.querySelectorAll('.resultados thead');
        console.log(elementosResultados)
        desplegar()
        return elementosResultados
    })


})

// console.log(`ELEMENTOS ${matrizConsulta[1][0]}`)



