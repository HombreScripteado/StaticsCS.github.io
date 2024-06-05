// class= "cargarCarrito"
// class="elegirSuper"
// class="generarChecklist"


// -------------------------------------------Cambio entre distintos divs---------------------------------
// Obtener todos los divs y todas las imágenes
const imagenes = document.querySelectorAll('.asideTop img');
const divs = document.querySelectorAll('.asideExpandido');
const divBotonDespliegue=document.querySelector(".divDespliegue");
const botonDespliegue=document.querySelector(".divDespliegue img");
const asideContenedorTotal=document.querySelector(".contenedorAsides")
let divWidht="";

const asideCarro=document.getElementById("cargarCarrito");
asideContenedorTotal.style.width=getFullWidth(asideCarro) + 'px';

// Agregar evento de clic a cada imagen dentro de .asideTop
imagenes.forEach(imagen => {

    imagen.addEventListener('click', () => {
        const claseImagen = imagen.classList[0]; // Obtener la clase de la imagen clickeada

        // Ocultar todos los divs
        divs.forEach(div => {
            div.style.display = 'none';
        });

        // Mostrar el div correspondiente a la clase de la imagen clickeada
        const divMostrar = document.getElementById(claseImagen);
        divMostrar.style.display = 'block';
            // ajusto tamaño de divcontenedor a div abierto
            divWidht = divMostrar.getBoundingClientRect().width 
                // asideContenedorTotal.style.width=divWidht + 'px';
                asideContenedorTotal.style.width=getFullWidth(divMostrar) + 'px';

        // Resetear los estilos en todas las imágenes dentro de .asideTop
        imagenes.forEach(img => {
            img.style.backgroundColor = ''; // Resetear el color de fondo
            img.style.boxShadow = ''; // Resetear la sombra
        });


        const imagen_a_cambiar=document.querySelectorAll(`.${claseImagen}`);

        imagen_a_cambiar.forEach(imagen =>{
        imagen.style.backgroundColor = '#AA6639'; 
        imagen.style.boxShadow = '#ff6600 0px 0px 10px'; 
        imagen.style.borderRadius="20%";

        });

        botonDespliegue.style.display="";
        botonDespliegue.style.backgroundColor="";
        botonDespliegue.style.boxShadow="";
        botonDespliegue.style.borderRadius="";
        divBotonDespliegue.style.display="";  
    

    });
});


// -------------------------------------------Cambio entre divs abiertos y colapsados---------------------------------
divBotonDespliegue.addEventListener("click", ()=>{
    const claseImagen = botonDespliegue.classList[0]; // Obtener la clase de la imagen clickeada
    // Ocultar todos los divs
    divs.forEach(div => {
        div.style.display = 'none';
    });

    const divMostrar = document.getElementById(claseImagen);
    divMostrar.style.display = 'block';

    botonDespliegue.style.display="none"
    divBotonDespliegue.style.display="none"
        // ajusto tamaño de divcontenedor a div abierto
        divWidht = divMostrar.getBoundingClientRect().width 
            // asideContenedorTotal.style.width=divWidht + 'px';
            asideContenedorTotal.style.width=getFullWidth(divMostrar) + 'px';

    
})



    // -------------------------------------------Colapsar divs cuando se toca body---------------------------------
    const contenedorPrincipal = document.querySelector("body");
    const sideBar = document.getElementById("sideBar");
    const section = document.querySelector(".main");
    
    // Verificar si el ancho de la ventana es menor que 768px (puedes ajustar este valor según sea necesario)
    const esDispositivoMovil = window.innerWidth < 768;
    
    // Verificar si es un dispositivo móvil antes de agregar el eventListener

    if (esDispositivoMovil) {
        contenedorPrincipal.addEventListener('click', function(evento) {
            const esAsideExpandido = evento.target.closest('.asideExpandido');
            if (!esAsideExpandido && (evento.target === section || section.contains(evento.target))) {
                // Ocultar divs y ajustar sideBar sólo si no es un evento en la tabla de productos
                const esTablaProductos = evento.target.closest('.divTablaProductos');
                if (!esTablaProductos) {
                    divs.forEach(div => {
                        div.style.display = "none";
                    });
    
                    sideBar.style.display = "block";
                    botonDespliegue.style.display = "none";
                    divBotonDespliegue.style.display = "none";
                    asideContenedorTotal.style.width = sideBar.getBoundingClientRect().width + 'px';
                }
            }
        });
    }


 // -------------------------------------------Ajustar ancho de DivContenedor para boton Colapsar---------------------------------    
function getFullWidth(element) {
    // Obtiene el ancho incluyendo padding y border
    const rect = element.getBoundingClientRect();
    const style = window.getComputedStyle(element);

    // Calcula los márgenes izquierdo y derecho
    const marginLeft = parseFloat(style.marginLeft);
    const marginRight = parseFloat(style.marginRight);

    // Suma el ancho del rectángulo y los márgenes
    const fullWidth = rect.width + marginLeft + marginRight;
    console.log(fullWidth)
    return fullWidth;
}




 // -------------------------------------------Colapsar divs cuando se toca body---------------------------------    
