const tabla = document.querySelector('.divTablaProductos table');
const filas = tabla.querySelectorAll('tbody tr');


// funcion que devuelve el objeto asocioado al boton que se le ha hecho click
function manejarClicBoton(evento) {
    let indiceProducto = evento.target.getAttribute('data-indice');
    let productoSeleccionado = arrayProductos[parseInt(indiceProducto)];

    console.log("productoSeleccionado", productoSeleccionado);

    actualizarMatrizConsulta();


    let productoExistente = matrizConsulta.find(producto => producto[0] === productoSeleccionado.nombre);

// -----------si el producto esta incluido, se suma como cantidad-----------------------

    if (productoExistente) {
        let filaExistente = Array.from(tabla.querySelectorAll('tr')).find(fila => {
            let celdas = fila.querySelectorAll('td');
                let celdaProducto = celdas[1];
                

            return celdaProducto && celdaProducto.textContent.includes(productoSeleccionado.nombre);
        } );


        if (filaExistente) {
            let cantidadInput = filaExistente.querySelector('.cantidadInput');
            let cantidad = parseInt(cantidadInput.value);
            cantidad++;
            cantidadInput.value = cantidad;

        }
    } else {
// --------------------------si no esta incluido se agrega como producto nuevo-----------------
    let filaNueva=document.createElement("tr")
        filaNueva.classList.add("contadorCantidad")
    let celdaImagen=document.createElement("td")
    let celdaProducto=document.createElement("td")
    let celdantidad=document.createElement("td")
        celdantidad.classList.add("inputImagenes")

    celdaImagen.innerHTML=`<img src="${productoSeleccionado.imagen}" alt="${productoSeleccionado.nombre}">`
    celdaProducto.innerHTML=`${productoSeleccionado.nombre} <br> [${productoSeleccionado.unidadMedida}]`
    celdantidad.innerHTML='<div class="botones"><img class="restarCantidad" src="menos.png"><input type="button" value="1" class="cantidadInput" disabled><img class="sumarCantidad" src="mas.png"</div>'

    filaNueva.appendChild(celdaImagen) 
    filaNueva.appendChild(celdaProducto)
    filaNueva.appendChild(celdantidad)
    // console.log(filaNueva)


    tabla.appendChild(filaNueva)
    }
    actualizarContador();



// ----------------------------------------Deteccion y asignacion de Variables a Botones nuevos--------------------------

    // Agrega un event listener para los botones de incrementar cantidad
    const botonesSumar = document.querySelectorAll('.sumarCantidad');
    botonesSumar.forEach(boton => {
        boton.addEventListener('click', incrementarCantidad);
    });

    // Agrega un event listener para los botones de restar cantidad
    const botonesRestar = document.querySelectorAll('.restarCantidad');
    botonesRestar.forEach(boton => {
        boton.addEventListener('click', restarCantidad);
    });

// --------------------------------------Elimina Filas si no tienen cantidades----------------------------
const botones=document.querySelectorAll(".botones");


    botones.forEach(boton => {
        boton.addEventListener('click', eliminarFila())
    });


}


// -------------------------------Actualizacion De Contador-----------------
function actualizarContador() {
    let totalCantidad = 0;


    // Selecciona todas las filas de la tabla
    const filas = document.querySelectorAll('.tablaProductos tr');



    // Recorre cada fila
    filas.forEach(fila => {
        // Encuentra el input de cantidad en la fila actual
        const cantidadInput = fila.querySelector('.cantidadInput');


        // Obtiene la cantidad del input y la convierte a un número
        const cantidad = parseInt(cantidadInput.value);

        // Si el valor es un número válido, lo suma al total
        if (!isNaN(cantidad)) {
            totalCantidad += cantidad;
        }
    });

    // console.log(totalCantidad)

    // Selecciona el elemento del contador y actualiza su texto con el total
    const contadorElement = document.querySelectorAll('.counter');

    contadorElement.forEach(contadorElement => {
    contadorElement.textContent = totalCantidad;
    contadorElement.style.display = totalCantidad > 0 ? 'inline-block'  : 'none' ;
    
})

    // Muestra u oculta el contador dependiendo del total de cantidad
    
}

// -------------------------------Agregar y Degregar Cantidades-----------------

function incrementarCantidad(evento) {
    const cargarCarrito=document.querySelectorAll(".cargarCarrito");
    const cantidadInput = evento.target.parentNode.querySelector('.cantidadInput');
    let cantidad = parseInt(cantidadInput.value);
        cantidad++;
            cantidadInput.value = cantidad;
    
    actualizarContador();

    cargarCarrito.forEach(div=>{
        div.style.display="block"
    })
}

function restarCantidad(evento) {
    // Obtiene el input de cantidad asociado al botón que se ha hecho clic
    const cantidadInput = evento.target.parentNode.querySelector('.cantidadInput');
    // Obtiene la cantidad actual y la decrementa en 1
    let cantidad = parseInt(cantidadInput.value);
    cantidad--;
    // Verifica que la cantidad no sea negativa
    if (cantidad < 0) {
        cantidad = 0;
    }
    // Actualiza el valor del input de cantidad
    cantidadInput.value = cantidad;
    // Actualiza el contador
    actualizarContador();

    const cargarCarrito = document.querySelectorAll(".cargarCarrito");
    cargarCarrito.forEach(div => {
        div.style.display = "block"
    })
}


function eliminarFila() {
    const botones = document.querySelectorAll(".botones");
    botones.forEach(boton => {
        boton.addEventListener("click", () => {
            let fila = boton.closest("tr");
            let cantidadInput = fila.querySelector(".cantidadInput");

            const cantidad = parseInt(cantidadInput.value);

            if (cantidad === 0) {
                fila.remove();
            }

        })
    })

}

