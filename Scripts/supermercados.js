class Producto {
    constructor(imagen, nombre, unidadMedida, cantidad, precioMaximo, precioMinimo, supermercado) {
        this.imagen = imagen;
        this.nombre = nombre;
        this.unidadMedida = unidadMedida;
        this.cantidad = cantidad;
        this.precioMaximo = precioMaximo;
        this.precioMinimo = precioMinimo;
        this.supermercado = supermercado;
    }
}

const productosCarrefour = [
    new Producto("Noe pelada.png", "Coca Cola 1.5L", "L", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Carrefour"),
    new Producto("Noe pelada.png", "Leche Entera 1L", "L", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Carrefour"),
    new Producto("Noe pelada.png", "Huevos Docena", "Un.", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Carrefour"),
    new Producto("Noe pelada.png", "Pan Blanco", "Un.", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Carrefour"),
    new Producto("Noe pelada.png", "Arroz 1kg", "kg", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Carrefour"),
    new Producto("Noe pelada.png", "Fideos 500g", "g", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Carrefour"),
    new Producto("Noe pelada.png", "Aceite de Oliva 500ml", "ml", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Carrefour"),
    new Producto("Noe pelada.png", "Azúcar 1kg", "kg", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Carrefour"),
    new Producto("Noe pelada.png", "Sal 500g", "g", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Carrefour"),
    new Producto("Noe pelada.png", "Atún enlatado", "Un.", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Carrefour"),
    new Producto("Noe pelada.png", "Papel Higiénico Pack 4 Un.", "Un.", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Carrefour"),
    new Producto("Noe pelada.png", "Pañales Talla M", "Un.", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Carrefour"),
    new Producto("Noe pelada.png", "Jabón en Barra", "Un.", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Carrefour"),
    new Producto("Noe pelada.png", "Detergente 1L", "L", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Carrefour"),
    new Producto("Noe pelada.png", "Tomate 1kg", "kg", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Carrefour"),
    new Producto("Noe pelada.png", "Cebolla 1kg", "kg", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Carrefour"),
    new Producto("Noe pelada.png", "Papa 1kg", "kg", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Carrefour"),
    new Producto("Noe pelada.png", "Zanahoria 1kg", "kg", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Carrefour"),
    new Producto("Noe pelada.png", "Manzanas 1kg", "kg", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Carrefour"),
    new Producto("Noe pelada.png", "Plátanos 1kg", "kg", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Carrefour"),
    new Producto("Noe pelada.png", "Naranjas 1kg", "kg", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Carrefour"),
    new Producto("Noe pelada.png", "Uvas 1kg", "kg", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Carrefour"),
    new Producto("Noe pelada.png", "Pollo Entero", "Un.", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Carrefour"),
    new Producto("Noe pelada.png", "Filete de Res 500g", "g", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Carrefour"),
    new Producto("Noe pelada.png", "Salchichas Pack 8 Un.", "Un.", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Carrefour"),
    new Producto("Noe pelada.png", "Queso Fresco 200g", "g", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Carrefour"),
    new Producto("Noe pelada.png", "Yogur Natural 1L", "L", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Carrefour"),
    new Producto("Noe pelada.png", "Mantequilla 250g", "g", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Carrefour"),
    new Producto("Noe pelada.png", "Mermelada 400g", "g", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Carrefour"),
    new Producto("Noe pelada.png", "Tostadas de Trigo 500g", "g", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Carrefour"),
    new Producto("Noe pelada.png", "Café Molido 250g", "g", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Carrefour"),
    new Producto("Noe pelada.png", "Té Negro 100g", "g", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Carrefour"),
    new Producto("Noe pelada.png", "Galletas Dulces Pack 12 Un.", "Un.", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Carrefour"),
    new Producto("Noe pelada.png", "Chocolate en Barra 200g", "g", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Carrefour"),
    new Producto("Noe pelada.png", "Miel 500g", "g", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Carrefour"),
    new Producto("Noe pelada.png", "Cereal de Avena 500g", "g", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Carrefour"),
    new Producto("Noe pelada.png", "Aceitunas 500g", "g", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Carrefour"),
    new Producto("Noe pelada.png", "Salsa de Tomate 500ml", "ml", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Carrefour"),
    new Producto("Noe pelada.png", "Mayonesa 500g", "g", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Carrefour"),
    new Producto("Noe pelada.png", "Mostaza 200g", "g", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Carrefour"),
    new Producto("Noe pelada.png", "Ketchup 500ml", "ml", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Carrefour"),
    new Producto("Noe pelada.png", "Vinagre 500ml", "ml", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Carrefour"),
    new Producto("Noe pelada.png", "Cerveza Pack 6 Un.", "Un.", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Carrefour"),
    new Producto("Noe pelada.png", "Vino Tinto 750ml", "ml", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Carrefour"),
    new Producto("Noe pelada.png", "Whisky 750ml", "ml", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Carrefour"),
    new Producto("Noe pelada.png", "Ron 750ml", "ml", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Carrefour"),
    new Producto("Noe pelada.png", "Vodka 750ml", "ml", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Carrefour"),
    new Producto("Noe pelada.png", "Ginebra 750ml", "ml", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Carrefour"),
    new Producto("Noe pelada.png", "Tequila 750ml", "ml", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Carrefour")
];
const productosCoto = [
    new Producto("Noe pelada.png", "Coca Cola 1.5L", "L", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Coto"),
    new Producto("Noe pelada.png", "Leche Entera 1L", "L", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Coto"),
    new Producto("Noe pelada.png", "Huevos Docena", "Un.", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Coto"),
    new Producto("Noe pelada.png", "Pan Blanco", "Un.", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Coto"),
    new Producto("Noe pelada.png", "Arroz 1kg", "kg", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Coto"),
    new Producto("Noe pelada.png", "Fideos 500g", "g", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Coto"),
    new Producto("Noe pelada.png", "Aceite de Oliva 500ml", "ml", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Coto"),
    new Producto("Noe pelada.png", "Azúcar 1kg", "kg", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Coto"),
    new Producto("Noe pelada.png", "Sal 500g", "g", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Coto"),
    new Producto("Noe pelada.png", "Atún enlatado", "Un.", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Coto"),
    new Producto("Noe pelada.png", "Papel Higiénico Pack 4 Un.", "Un.", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Coto"),
    new Producto("Noe pelada.png", "Pañales Talla M", "Un.", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Coto"),
    new Producto("Noe pelada.png", "Jabón en Barra", "Un.", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Coto"),
    new Producto("Noe pelada.png", "Detergente 1L", "L", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Coto"),
    new Producto("Noe pelada.png", "Tomate 1kg", "kg", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Coto"),
    new Producto("Noe pelada.png", "Cebolla 1kg", "kg", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Coto"),
    new Producto("Noe pelada.png", "Papa 1kg", "kg", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Coto"),
    new Producto("Noe pelada.png", "Zanahoria 1kg", "kg", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Coto"),
    new Producto("Noe pelada.png", "Manzanas 1kg", "kg", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Coto"),
    new Producto("Noe pelada.png", "Plátanos 1kg", "kg", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Coto"),
    new Producto("Noe pelada.png", "Naranjas 1kg", "kg", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Coto"),
    new Producto("Noe pelada.png", "Uvas 1kg", "kg", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Coto"),
    new Producto("Noe pelada.png", "Pollo Entero", "Un.", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Coto"),
    new Producto("Noe pelada.png", "Filete de Res 500g", "g", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Coto"),
    new Producto("Noe pelada.png", "Salchichas Pack 8 Un.", "Un.", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Coto"),
    new Producto("Noe pelada.png", "Queso Fresco 200g", "g", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Coto"),
    new Producto("Noe pelada.png", "Yogur Natural 1L", "L", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Coto"),
    new Producto("Noe pelada.png", "Mantequilla 250g", "g", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Coto"),
    new Producto("Noe pelada.png", "Mermelada 400g", "g", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Coto"),
    new Producto("Noe pelada.png", "Tostadas de Trigo 500g", "g", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Coto"),
    new Producto("Noe pelada.png", "Café Molido 250g", "g", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Coto"),
    new Producto("Noe pelada.png", "Té Negro 100g", "g", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Coto"),
    new Producto("Noe pelada.png", "Galletas Dulces Pack 12 Un.", "Un.", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Coto"),
    new Producto("Noe pelada.png", "Chocolate en Barra 200g", "g", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Coto"),
    new Producto("Noe pelada.png", "Miel 500g", "g", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Coto"),
    new Producto("Noe pelada.png", "Cereal de Avena 500g", "g", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Coto"),
    new Producto("Noe pelada.png", "Aceitunas 500g", "g", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Coto"),
    new Producto("Noe pelada.png", "Salsa de Tomate 500ml", "ml", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Coto"),
    new Producto("Noe pelada.png", "Mayonesa 500g", "g", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Coto"),
    new Producto("Noe pelada.png", "Mostaza 200g", "g", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Coto"),
    new Producto("Noe pelada.png", "Ketchup 500ml", "ml", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Coto"),
    new Producto("Noe pelada.png", "Vinagre 500ml", "ml", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Coto"),
    new Producto("Noe pelada.png", "Cerveza Pack 6 Un.", "Un.", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Coto"),
    new Producto("Noe pelada.png", "Vino Tinto 750ml", "ml", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Coto"),
    new Producto("Noe pelada.png", "Whisky 750ml", "ml", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Coto"),
    new Producto("Noe pelada.png", "Ron 750ml", "ml", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Coto"),
    new Producto("Noe pelada.png", "Vodka 750ml", "ml", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Coto"),
    new Producto("Noe pelada.png", "Ginebra 750ml", "ml", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Coto"),
    new Producto("Noe pelada.png", "Tequila 750ml", "ml", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Coto")
];
const productosJumbo = [
    new Producto("Noe pelada.png", "Coca Cola 1.5L", "L", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Jumbo"),
    new Producto("Noe pelada.png", "Leche Entera 1L", "L", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Jumbo"),
    new Producto("Noe pelada.png", "Huevos Docena", "Un.", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Jumbo"),
    new Producto("Noe pelada.png", "Pan Blanco", "Un.", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Jumbo"),
    new Producto("Noe pelada.png", "Arroz 1kg", "kg", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Jumbo"),
    new Producto("Noe pelada.png", "Fideos 500g", "g", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Jumbo"),
    new Producto("Noe pelada.png", "Aceite de Oliva 500ml", "ml", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Jumbo"),
    new Producto("Noe pelada.png", "Azúcar 1kg", "kg", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Jumbo"),
    new Producto("Noe pelada.png", "Sal 500g", "g", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Jumbo"),
    new Producto("Noe pelada.png", "Atún enlatado", "Un.", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Jumbo"),
    new Producto("Noe pelada.png", "Papel Higiénico Pack 4 Un.", "Un.", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Jumbo"),
    new Producto("Noe pelada.png", "Pañales Talla M", "Un.", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Jumbo"),
    new Producto("Noe pelada.png", "Jabón en Barra", "Un.", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Jumbo"),
    new Producto("Noe pelada.png", "Detergente 1L", "L", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Jumbo"),
    new Producto("Noe pelada.png", "Tomate 1kg", "kg", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Jumbo"),
    new Producto("Noe pelada.png", "Cebolla 1kg", "kg", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Jumbo"),
    new Producto("Noe pelada.png", "Papa 1kg", "kg", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Jumbo"),
    new Producto("Noe pelada.png", "Zanahoria 1kg", "kg", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Jumbo"),
    new Producto("Noe pelada.png", "Manzanas 1kg", "kg", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Jumbo"),
    new Producto("Noe pelada.png", "Plátanos 1kg", "kg", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Jumbo"),
    new Producto("Noe pelada.png", "Naranjas 1kg", "kg", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Jumbo"),
    new Producto("Noe pelada.png", "Uvas 1kg", "kg", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Jumbo"),
    new Producto("Noe pelada.png", "Pollo Entero", "Un.", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Jumbo"),
    new Producto("Noe pelada.png", "Filete de Res 500g", "g", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Jumbo"),
    new Producto("Noe pelada.png", "Salchichas Pack 8 Un.", "Un.", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Jumbo"),
    new Producto("Noe pelada.png", "Queso Fresco 200g", "g", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Jumbo"),
    new Producto("Noe pelada.png", "Yogur Natural 1L", "L", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Jumbo"),
    new Producto("Noe pelada.png", "Mantequilla 250g", "g", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Jumbo"),
    new Producto("Noe pelada.png", "Mermelada 400g", "g", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Jumbo"),
    new Producto("Noe pelada.png", "Tostadas de Trigo 500g", "g", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Jumbo"),
    new Producto("Noe pelada.png", "Café Molido 250g", "g", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Jumbo"),
    new Producto("Noe pelada.png", "Té Negro 100g", "g", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Jumbo"),
    new Producto("Noe pelada.png", "Galletas Dulces Pack 12 Un.", "Un.", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Jumbo"),
    new Producto("Noe pelada.png", "Chocolate en Barra 200g", "g", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Jumbo"),
    new Producto("Noe pelada.png", "Miel 500g", "g", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Jumbo"),
    new Producto("Noe pelada.png", "Cereal de Avena 500g", "g", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Jumbo"),
    new Producto("Noe pelada.png", "Aceitunas 500g", "g", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Jumbo"),
    new Producto("Noe pelada.png", "Salsa de Tomate 500ml", "ml", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Jumbo"),
    new Producto("Noe pelada.png", "Mayonesa 500g", "g", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Jumbo"),
    new Producto("Noe pelada.png", "Mostaza 200g", "g", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Jumbo"),
    new Producto("Noe pelada.png", "Ketchup 500ml", "ml", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Jumbo"),
    new Producto("Noe pelada.png", "Vinagre 500ml", "ml", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Jumbo"),
    new Producto("Noe pelada.png", "Cerveza Pack 6 Un.", "Un.", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Jumbo"),
    new Producto("Noe pelada.png", "Vino Tinto 750ml", "ml", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Jumbo"),
    new Producto("Noe pelada.png", "Whisky 750ml", "ml", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Jumbo"),
    new Producto("Noe pelada.png", "Ron 750ml", "ml", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Jumbo"),
    new Producto("Noe pelada.png", "Vodka 750ml", "ml", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Jumbo"),
    new Producto("Noe pelada.png", "Ginebra 750ml", "ml", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Jumbo"),
    new Producto("Noe pelada.png", "Tequila 750ml", "ml", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Jumbo")
];
const productosDia = [
    new Producto("Noe pelada.png", "Coca Cola 1.5L", "L", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Dia%"),
    new Producto("Noe pelada.png", "Leche Entera 1L", "L", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Dia%"),
    new Producto("Noe pelada.png", "Huevos Docena", "Un.", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Dia%"),
    new Producto("Noe pelada.png", "Pan Blanco", "Un.", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Dia%"),
    new Producto("Noe pelada.png", "Arroz 1kg", "kg", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Dia%"),
    new Producto("Noe pelada.png", "Fideos 500g", "g", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Dia%"),
    new Producto("Noe pelada.png", "Aceite de Oliva 500ml", "ml", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Dia%"),
    new Producto("Noe pelada.png", "Azúcar 1kg", "kg", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Dia%"),
    new Producto("Noe pelada.png", "Sal 500g", "g", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Dia%"),
    new Producto("Noe pelada.png", "Atún enlatado", "Un.", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Dia%"),
    new Producto("Noe pelada.png", "Papel Higiénico Pack 4 Un.", "Un.", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Dia%"),
    new Producto("Noe pelada.png", "Pañales Talla M", "Un.", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Dia%"),
    new Producto("Noe pelada.png", "Jabón en Barra", "Un.", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Dia%"),
    new Producto("Noe pelada.png", "Detergente 1L", "L", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Dia%"),
    new Producto("Noe pelada.png", "Tomate 1kg", "kg", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Dia%"),
    new Producto("Noe pelada.png", "Cebolla 1kg", "kg", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Dia%"),
    new Producto("Noe pelada.png", "Papa 1kg", "kg", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Dia%"),
    new Producto("Noe pelada.png", "Zanahoria 1kg", "kg", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Dia%"),
    new Producto("Noe pelada.png", "Manzanas 1kg", "kg", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Dia%"),
    new Producto("Noe pelada.png", "Plátanos 1kg", "kg", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Dia%"),
    new Producto("Noe pelada.png", "Naranjas 1kg", "kg", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Dia%"),
    new Producto("Noe pelada.png", "Uvas 1kg", "kg", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Dia%"),
    new Producto("Noe pelada.png", "Pollo Entero", "Un.", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Dia%"),
    new Producto("Noe pelada.png", "Filete de Res 500g", "g", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Dia%"),
    new Producto("Noe pelada.png", "Salchichas Pack 8 Un.", "Un.", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Dia%"),
    new Producto("Noe pelada.png", "Queso Fresco 200g", "g", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Dia%"),
    new Producto("Noe pelada.png", "Yogur Natural 1L", "L", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Dia%"),
    new Producto("Noe pelada.png", "Mantequilla 250g", "g", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Dia%"),
    new Producto("Noe pelada.png", "Mermelada 400g", "g", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Dia%"),
    new Producto("Noe pelada.png", "Tostadas de Trigo 500g", "g", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Dia%"),
    new Producto("Noe pelada.png", "Café Molido 250g", "g", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Dia%"),
    new Producto("Noe pelada.png", "Té Negro 100g", "g", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Dia%"),
    new Producto("Noe pelada.png", "Galletas Dulces Pack 12 Un.", "Un.", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Dia%"),
    new Producto("Noe pelada.png", "Chocolate en Barra 200g", "g", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Dia%"),
    new Producto("Noe pelada.png", "Miel 500g", "g", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Dia%"),
    new Producto("Noe pelada.png", "Cereal de Avena 500g", "g", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Dia%"),
    new Producto("Noe pelada.png", "Aceitunas 500g", "g", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Dia%"),
    new Producto("Noe pelada.png", "Salsa de Tomate 500ml", "ml", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Dia%"),
    new Producto("Noe pelada.png", "Mayonesa 500g", "g", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Dia%"),
    new Producto("Noe pelada.png", "Mostaza 200g", "g", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Dia%"),
    new Producto("Noe pelada.png", "Ketchup 500ml", "ml", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Dia%"),
    new Producto("Noe pelada.png", "Vinagre 500ml", "ml", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Dia%"),
    new Producto("Noe pelada.png", "Cerveza Pack 6 Un.", "Un.", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Dia%"),
    new Producto("Noe pelada.png", "Vino Tinto 750ml", "ml", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Dia%"),
    new Producto("Noe pelada.png", "Whisky 750ml", "ml", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Dia%"),
    new Producto("Noe pelada.png", "Ron 750ml", "ml", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Dia%"),
    new Producto("Noe pelada.png", "Vodka 750ml", "ml", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Dia%"),
    new Producto("Noe pelada.png", "Ginebra 750ml", "ml", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Dia%"),
    new Producto("Noe pelada.png", "Tequila 750ml", "ml", 1, generarPrecioAleatorio(50, 100), generarPrecioAleatorio(15, 49), "Dia%")
];
// Función para generar un número aleatorio entre un rango específico
function generarPrecioAleatorio(min, max) {
    return (Math.random() * (max - min) + min).toFixed(2);
}


