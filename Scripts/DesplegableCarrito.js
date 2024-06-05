// ----------------------------Menu desplegable CarritoComparacion----------------



// function desplegar() {
//     elementosResultados.forEach(function (elemento) {
//         elemento.addEventListener('click', function () {
//             const desglose = elemento.nextElementSibling;
//             if (desglose) {
//                 if (desglose.style.display === 'none' || desglose.style.display === '') {
//                     desglose.style.display = 'table-row-group'; 
//                 } else {
//                     desglose.style.display = 'none';
//                 }
//             }
//         });
//     });
// }

function desplegar() {
    const elementosResultados = document.querySelectorAll('thead'); // Asegúrate de seleccionar correctamente los thead
    elementosResultados.forEach(function (elemento) {
        elemento.addEventListener('click', function () {
            const desglose = elemento.nextElementSibling;
            if (desglose) {
                if (desglose.classList.contains('visible')) {
                    desglose.classList.remove('visible');
                    setTimeout(() => {
                        desglose.style.display = 'none';
                    }, 500); // Ajusta este tiempo al mismo que la duración de la transición
                } else {
                    const rows = desglose.querySelectorAll('tr');
                    rows.forEach((row, index) => {
                        row.style.transitionDelay = `${index * 0.075}s`;
                    });
                    desglose.style.display = 'table-row-group';
                    setTimeout(() => {
                        desglose.classList.add('visible');
                    }, 10); // Pequeño retraso para asegurar que el display se haya aplicado antes de la transición
                }
            }
        });
    });
}
// -------------------------------------------CARGA DINAMICA DE LOS PRODUCTOS-----------------------

// productosCarrefourFiltrados
// productosCotoFiltrados
// productosJumboFiltrados
// productosDiaFiltrados
const imgCarrefour = "Imagenes/LogoCarrefour.jpg"
const imgCoto = "Imagenes/LogoCoto.jpg"
const imgDia = "Imagenes/LogoDia.jpg"
const imgJumbo = "Imagenes/LogoJumbo.jpg"

const contenedorResultadoSupermercado = document.querySelector(".contenedorResultadoSupermercado")
const imgElegirSuper = document.querySelectorAll(".elegirSuper")





function generarTabla(productos) {
    const tabla = document.createElement('table');
    let sumaPreciosMinimos = 0;
    let sumaPreciosMaximos = 0;
    let nombreSuper = "";

    if (productos.length < 1) {
        return tabla;
    } else {
        console.log(`productos dentro de funcion ${productos}`);
        productos.forEach(prod => {
            sumaPreciosMaximos += prod.producto.precioMaximo * prod.producto.cantidad;
            sumaPreciosMinimos += prod.producto.precioMinimo * prod.producto.cantidad;
            nombreSuper = prod.producto.supermercado;
        });

        // Cabecera de la tabla
        const cabecera = tabla.createTHead();
            cabecera.classList.add("resultados");
            cabecera.tabIndex = 0; // Hacer el th focusable
        const filaCabecera = cabecera.insertRow();

        // Crear la imagen correspondiente al supermercado
        let imgSrc = '';
        switch (nombreSuper) {
            case 'Carrefour':
                imgSrc = imgCarrefour;
                console.log("se eligio Carrefour")
                break;
            case 'Coto':
                imgSrc = imgCoto;
                console.log("se eligio Coto")
                break;
            case 'Dia%':
                imgSrc = imgDia;
                console.log("se eligio Dia")
                break;
            case 'Jumbo':
                imgSrc = imgJumbo;
                console.log("se eligio Jumbo")
                break;
            default:
                // Si no hay imagen para el supermercado, puedes asignar una imagen genérica o dejarlo en blanco
                imgSrc = ''; // o imgSrc = "Imagenes/default.jpg";
                break;
        }



        // Crear el th y asignar la imagen
        const th = document.createElement('th');
        const img = document.createElement('img');
        img.src = imgSrc;
        const thPunto=document.createElement("div")
        //     thPunto.classList.add("thPunto");
        // thPunto.textContent="•";
        // th.appendChild(thPunto);
        th.appendChild(img);
        filaCabecera.appendChild(th);

        // Agregar las columnas de precios
        const precioMinimo = document.createElement('th');
        precioMinimo.textContent = `$${sumaPreciosMinimos.toFixed(2)}`;
        filaCabecera.appendChild(precioMinimo);

        const precioMaximo = document.createElement('th');
        precioMaximo.textContent = `$${sumaPreciosMaximos.toFixed(2)}`;
        filaCabecera.appendChild(precioMaximo);


        // --------------------------------------------Cuerpo de la tabla con productos desglose ---------------------------------
        const cuerpo = tabla.createTBody();
        cuerpo.classList.add("desglose");
        productos.forEach(producto => {
            const filaProducto = cuerpo.insertRow();
            
            // Crear la celda para el nombre del producto
            const celdaNombre = document.createElement("td");
            const divContenedorCelda = document.createElement("div");
            divContenedorCelda.classList.add("celdaImgNombreProd");
        
            // Crear el contenedor para la imagen
            const divImagen = document.createElement("div");
            divImagen.classList.add("imagen");
            const imagenProducto = document.createElement("img");
            imagenProducto.src = producto.producto.imagen;
            divImagen.appendChild(imagenProducto);
        
            // Crear el contenedor para el texto del producto
            const divContenido = document.createElement("div");
            divContenido.classList.add("contenido");
        
            // Crear el div para el nombre del producto
            const divNombre = document.createElement("div");
            divNombre.classList.add("nombre");
            divNombre.textContent = producto.producto.nombre;
        
            // Crear el div para la cantidad y la unidad de medida
            const divDetalle = document.createElement("div");
            divDetalle.classList.add("detalle");
            const spanUnidad = document.createElement("span");
            spanUnidad.classList.add("unidad");
            spanUnidad.textContent = `[${producto.producto.unidadMedida}] x`;
            const spanCantidad = document.createElement("span");
            spanCantidad.classList.add("multiplicadorCantidad");
            spanCantidad.textContent = `${producto.producto.cantidad}`;
            divDetalle.appendChild(spanUnidad);
            divDetalle.appendChild(spanCantidad);
        
            divContenido.appendChild(divNombre);
            divContenido.appendChild(divDetalle);
        
            divContenedorCelda.appendChild(divImagen);
            divContenedorCelda.appendChild(divContenido);
        
            celdaNombre.appendChild(divContenedorCelda);
        
            // Crear las celdas para los precios mínimo y máximo
            const celdaPrecioMin = document.createElement("td");
            celdaPrecioMin.textContent = `$${producto.producto.precioMinimo}`;
            const celdaPrecioMax = document.createElement("td");
            celdaPrecioMax.textContent = `$${producto.producto.precioMaximo}`;
        
            // Agregar las celdas a la fila
            filaProducto.appendChild(celdaNombre);
            filaProducto.appendChild(celdaPrecioMin);
            filaProducto.appendChild(celdaPrecioMax);
// ------------------------------------------------------------Agrego clase "superSeleccionado"--------------------------------
            cabecera.addEventListener('focus', function() {

                const theadsContainer = document.querySelector(".contenedorResultadoSupermercado");
                    const theads=theadsContainer.querySelectorAll("table")

                theads.forEach(function(item) {
                    item.classList.remove("superSeleccionado");
                });

                tablaChecklist=tabla;
                tablaChecklist.classList.add("superSeleccionado")
                console.log(tablaChecklist)
            });

            cabecera.addEventListener('blur', function() {
                // Eliminar la clase al perder el foco
                tablaChecklist.classList.remove('superSeleccionado');
            });

        });

        //--------------------------------- Establecer el ancho de las celdas en el cuerpo de la tabla --------------------------
        const filaCabeceraThs = filaCabecera.getElementsByTagName("th");
        const numColumnas = filaCabeceraThs.length;
        const filasCuerpo = cuerpo.rows;
        for (let i = 0; i < filasCuerpo.length; i++) {
            const celdas = filasCuerpo[i].cells;
            for (let j = 0; j < celdas.length; j++) {
                celdas[j].style.width = `${filaCabeceraThs[j].clientWidth}px`;
            }
        }

        return tabla;
    }
}

// ------------------------------------------Ordeno las Tablas en Orden Ascendente-----------------------

function obtenerSumaPreciosMaximos(tabla) {
    
    const filas = tabla.querySelectorAll('tbody tr');
    let suma = 0;
    filas.forEach(fila => {
        const precioProducto = parseFloat(fila.cells[2].textContent.substring(1)); 
        const cantidadSeleccionada = parseFloat(fila.querySelector('.multiplicadorCantidad').textContent); 
        // console.log(precioProducto, cantidadSeleccionada);
        suma += precioProducto * cantidadSeleccionada; 
    });
    // console.log(`la suma es ${suma}`)
    return suma;
}

function ordenarTablasPorPrecioMaximo(tablas) {
    // Esta función ordena las tablas por su suma de precios máximos en orden ascendente
    return tablas.sort((tablaA, tablaB) => {
        const sumaPreciosMaximosA = obtenerSumaPreciosMaximos(tablaA);
        const sumaPreciosMaximosB = obtenerSumaPreciosMaximos(tablaB);
        return sumaPreciosMaximosA - sumaPreciosMaximosB;
    });
}

function focusTabla(tabla) {
    // Aquí puedes realizar acciones cuando el th recibe el foco
    tablaChecklist=tabla;
    tablaChecklist.classList.add("superSeleccionado")
    console.log(tablaChecklist)
};
function blurTabla(tabla) {
    tablaChecklist.classList.remove('superSeleccionado');
};
