$(document).ready(function() {

    //  seccion encargada de verificar el local storage y cargar la informacion en los vectores
    var ListaFavoritos = [];
    var ListaCarrito = [];

    if (localStorage.getItem("favoritos") != null) {
        var listaTemporalFavoritos = JSON.parse(localStorage.getItem("favoritos"));
        listaTemporalFavoritos.forEach(cargarVectorListaFavoritos);
    }

    function cargarVectorListaFavoritos(item, index) {
        ListaFavoritos.push({});
    }


    if (localStorage.getItem("carrito") != null) {
        var listaTemporalCarrito = JSON.parse(localStorage.getItem("carrito"));
        listaTemporalCarrito.forEach(cargarVectorListaCarrito);
    }

    function cargarVectorListaCarrito(item, index) {
        ListaCarrito.push({ "idProducto": item.idProducto, "nombre": item.nombre, "precio": item.precio, "cantidadStock": item.cantidadStock, "catidadCompra": item.catidadCompra });
    }

    $("#contenedorGeneral").on("click", "#btnFavoritos", function() {
        var id = $(this).attr("idProducto");
        var nombre = $(this).attr("nombre");
        var precio = $(this).attr("precio");
        var cantidadStock = $(this).attr("cantidad");

        alert(nombre);


    })

    $("#contenedorGeneral").on("click", "#btnCarrito", function() {
        var id = $(this).attr("idProducto");
        var nombre = $(this).attr("nombre");
        var precio = $(this).attr("precio");
        var cantidadStock = $(this).attr("cantidad");
        var cantidad = 1;
        var cantidadActual = 0;
        var hayProducto = false;

        ListaCarrito.forEach(buscarProductos);

        function buscarProductos(item, index) {
            if (item.idProducto == id) {
                hayProducto = true;
                cantidadActual = Number(item.catidadCompra);
                item.catidadCompra = cantidadActual + cantidad;
            }
        }

        if (!hayProducto) {
            ListaCarrito.push({ "idProducto": id, "nombre": nombre, "precio": precio, "cantidadStock": cantidadStock, "catidadCompra": cantidad });
            localStorage.setItem("carrito", JSON.stringify(ListaCarrito));
            swal({
                title: "Buen Trabajo!",
                text: "tu " + nombre + " ha sido agregado al carrito de compras correctamente",
                icon: "success",
                button: "Aceptar",
            });
        } else {
            localStorage.removeItem("carrito");
            localStorage.setItem("carrito", JSON.stringify(ListaCarrito));

            swal({
                title: "Buen Trabajo!",
                text: "has agregado nuevamente tu " + nombre + " correctamente",
                icon: "success",
                button: "Aceptar",
            });
        }
    })




})