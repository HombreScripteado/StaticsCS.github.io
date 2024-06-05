let asideChecklist = document.getElementById("generarChecklist");
const imgChecklist = document.querySelectorAll(".generarChecklist");
const divContenedorTotalChecklist = document.querySelector(".divContenedorTotalChecklist");

let nombreSuper="";





imgChecklist.forEach(img => {
    img.addEventListener("click", () => {
        
        divContenedorTotalChecklist.appendChild(ordenarThead())
        divContenedorTotalChecklist.appendChild(ordenarBody())
        
        asideChecklist.appendChild(divContenedorTotalChecklist)
        tachar()
    })
})

function generarMapa(nombreSuper){

    const spanEnlace=document.createElement("span");
    const textoSpan="📌"
    const enlace = document.createElement('a');
        spanEnlace.classList.add("enlace");
    enlace.textContent = `${nombreSuper}`; // Establecer el texto del enlace como el nombre del supermercado
    enlace.href = `https://www.google.com/maps/search/${encodeURIComponent(nombreSuper)}`;
    enlace.target = '_blank'; // Abrir en una nueva pestaña

    spanEnlace.textContent=textoSpan;
    spanEnlace.appendChild(enlace)
    return spanEnlace
}

// ------------------------------------Ordenamos thead------------------------------------
function ordenarThead(){
    // console.clear()
        


    const divContenedorResultadoChecklist = document.createElement("div")
        divContenedorResultadoChecklist.classList.add("contenedorResultadoChecklist")



    // console.log(asideChecklist);
    // console.log(tablaChecklist);
    
// -----------------------------------------imagen Resultado-----------------------
    const thead = tablaChecklist.querySelector('.resultados');
    // console.log(thead);
        const divImagen = document.createElement("div")

            const imgSrc = thead.querySelector('th:nth-child(1) img').src;
                const imgElement = document.createElement("img");
                    imgElement.src = imgSrc;
        divImagen.appendChild(imgElement)
        divImagen.classList.add("imagenResultadoChecklist")

        // ---------------------------Variable para busqueda en maps---------------------
        const parts = imgSrc.split('/');
        const filename = parts[parts.length - 1];
             nombreSuper = filename.split('.')[0].slice(4); // Eliminar "Logo" del nombre
                // console.log(nombreSuper);


        

        const enlace=generarMapa(nombreSuper);
        


        // console.log(enlace)


// -----------------------------------------Precios Resultado-----------------------
    const preciosResultado = document.createElement("div");
        preciosResultado.classList.add("divTextoPrecio")

        const spanPrecioMin= document.createElement("span");
            spanPrecioMin.classList.add("preciosResultadoChecklist")
                spanPrecioMin.appendChild(thead.querySelector('th:nth-child(2)'))

        const spanPrecioMax= document.createElement("span");
            spanPrecioMax.classList.add("preciosResultadoChecklist")
                spanPrecioMax.appendChild(thead.querySelector('th:nth-child(2)'));

                const textoPrecioMin = spanPrecioMin.textContent;
                const textoPrecioMax = spanPrecioMax.textContent;

                // Crear nodos de texto para el texto que deseas agregar
            const divTexto=document.createElement("div");
                const nodoTextoPrecio = document.createTextNode(`Costo Aproximado: `);
                    divTexto.appendChild(nodoTextoPrecio);

            const divPrecios=document.createElement("div");
                const nodoPrecios = document.createTextNode(` ${textoPrecioMin} - ${textoPrecioMax}`);
                    divPrecios.appendChild(nodoPrecios)


                // Adjuntar los nodos de texto al elemento preciosResultado
                preciosResultado.appendChild(divTexto);
                preciosResultado.appendChild(divPrecios);



    divContenedorResultadoChecklist.appendChild(imgElement);
    divContenedorResultadoChecklist.appendChild(enlace);
    divContenedorResultadoChecklist.appendChild(preciosResultado);

    return divContenedorResultadoChecklist
}

// ------------------------------------Ordenamos Body------------------------------------

function ordenarBody(){
    const divContenedorDetallesChecklist = document.createElement("div")
        divContenedorDetallesChecklist.classList.add("contenedorDetallesChecklist")
    
    const tbody = tablaChecklist.querySelector('.desglose');
        tbody.classList.replace("desglose","detalleChecklist")
        
        tbody.style.display = '';

        const tr=tbody.querySelectorAll("tr")
        
        tbody.innerHTML="";

        
        tr.forEach(fila =>{
            const tds=fila.querySelectorAll("td")
            tds.forEach(td=>{
                td.style.removeProperty('width')
            })

            console.log(fila);
            const trNuevo=document.createElement("tr");
            
// ------------------------------------ordenamos las imagenes y descripciones----------------------------
                const divImagenDetalle=document.createElement("div");
                    const imgNombre=fila.querySelector('td:nth-child(1)');                    
                    console.log(imgNombre);
                    const imgNombreClonado= imgNombre.cloneNode(true);
                        trNuevo.appendChild(imgNombreClonado);
                
// ------------------------------------ordenamos los precios----------------------------
                const trDetalles=document.createElement("td");
                    const divPreciosDetalle=document.createElement("div");
                        const precioMin=fila.querySelector('td:nth-child(2)').textContent;
                        const precioMax=fila.querySelector('td:nth-child(3)').textContent;

                    divPreciosDetalle.textContent = `${precioMin} - ${precioMax}`
            
                trDetalles.appendChild(divPreciosDetalle)

            trNuevo.appendChild(trDetalles);
            
// ------------------------------------Agrego a imagen de tachado a fila----------------------------

            const divcontenedorBoton= document.createElement("span")
                divcontenedorBoton.classList.add("botonTachar");

                const checkbox=document.createElement("input");
                    checkbox.type="checkbox";
                    checkbox.classList.add("checkboxTachar");
                
                    const label = document.createElement('label');
                    label.htmlFor = 'checkbox'
                    label.className = 'customCheckbox';
                    
                    const divLineaTachado= document.createElement("div");
                        divLineaTachado.classList.add("lineaTachado")

                    
                    divcontenedorBoton.appendChild(checkbox)
                    divcontenedorBoton.appendChild(label)
            
            trNuevo.appendChild(divcontenedorBoton);
            trNuevo.appendChild(divLineaTachado);

// ------------------------------------Agrego a TbodyNuevo----------------------------
    tbody.appendChild(trNuevo);
        })



    divContenedorDetallesChecklist.appendChild(tbody)
            console.log(tbody)

return divContenedorDetallesChecklist
}

// ------------------------------------Funcion animaciones------------------------------------