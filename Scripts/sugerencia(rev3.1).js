const contenedorSugerencia = document.querySelector(".main");
const barraBusqueda = contenedorSugerencia.querySelector("input[type='text']");
const divSugerencia = document.querySelector(".sugerencias");
const displaySugerencia = divSugerencia.querySelector("ul");
const listaIndividuals = displaySugerencia.querySelectorAll("li");



let coincidencia=[];
let arrayProductos=[];

barraBusqueda.onkeyup = (inputUsuario) => {
    let palabra=inputUsuario.target.value.toLowerCase().trim();   

    if (palabra.length>0) {
        // busco coincidencia y coinicidencia = array con productos cuyo nombre coincida
        coincidencia= productosMasComprados.filter(producto=>{
            return producto.nombre.toLowerCase().startsWith(palabra);
        })

        arrayProductos=coincidencia;

        // convierte array de productos a array de nombres correspondiente
        //            del array         cada elemento extraigo el nombre
        coincidencia= coincidencia.map(producto => {
            return producto.nombre
        })

        // llamo a la funcion mostrar sugerencia
        mostrarSugerencia(coincidencia)
        }
    else {
        displaySugerencia.innerHTML = '';   
    }

}


const mostrarSugerencia = (coincidencia) => {
    let sugerencia_a_mostrar = document.createDocumentFragment();

    if (coincidencia.length > 0) {
        arrayProductos.forEach((producto,indice) => {
            // console.clear
            // console.log(arrayProductos)
            // console.log(coincidencia)

            let nuevoLi = document.createElement('li');
            nuevoLi.textContent = `${producto.nombre}`;

            // Crear un botón, establecer su tipo, valor y asocio producto en su linea
            let botonAgregar = document.createElement('input');
            botonAgregar.type = 'button';
            botonAgregar.value = '+';
            botonAgregar.setAttribute("data-indice", indice);
            botonAgregar.classList.add("botonAgregar");
            // llamo a la funcion manejarClicBoton que devuelve objeto asociado a boton
            botonAgregar.addEventListener("click", manejarClicBoton);
            botonAgregar.addEventListener("click", actualizarMatrizConsulta);

            // Agregar el botón como hijo del elemento li
            nuevoLi.appendChild(botonAgregar);

            // Agregar el elemento li al DocumentFragment
            sugerencia_a_mostrar.appendChild(nuevoLi);

        });
    } else {
        let nuevoLi1 = document.createElement('li');
        nuevoLi1.innerHTML = '<li><p class="sugerenciaNoExiste">No existe en nuestra Base de Datos <br> 😥 <br> ¿Está bien escrito? <br> Sino probá con otro producto</p></li>';
        sugerencia_a_mostrar.appendChild(nuevoLi1);
        
        let nuevoLi2 = document.createElement('li');
        nuevoLi2.innerHTML = '<li><p class="sugerenciaNoExiste">Si crees que deberiamos agregarlo, hacenos saber 😉</p></li>';
        sugerencia_a_mostrar.appendChild(nuevoLi2);
    }


    // Limpiar el contenido anterior
    displaySugerencia.innerHTML = '';

    // Agregar el DocumentFragment al displaySugerencia
    displaySugerencia.appendChild(sugerencia_a_mostrar);
}


