$(document).ready(function() {
    var ListaCarrito = [];
    cargarCarrito();
    totalCarrito();




    function cargarCarrito() {
        if (localStorage.getItem("carrito") != null) {
            ListaCarrito = JSON.parse(localStorage.getItem("carrito"));

            console.log(ListaCarrito);
            ListaCarrito.forEach(visualizarProductos);
            var interface = "";

            function visualizarProductos(item, index) {

                var objBotones = '<button id="btnEliminarProducto" class="btn btn-sm btn-danger" title="eliminar" idProducto="' + item.idProducto + '"><span class="glyphicon glyphicon-remove"></span></button> ';

                interface = '<tr>';
                interface += '<td id="columnaBtnEliminar">' + objBotones + '</td>';
                interface += '<td>' + item.nombre + '</td>';
                interface += '<td></td>';
                interface += '<td id="columnaCantidad"><input id="cantidad" type="number" value="' + item.catidadCompra + '" min="1" style="width:90px;"></td>';
                interface += '<td id="columnaPrecio">' + item.precio + '</td>';
                interface += '<td id="columnaPrecioTotal">' + (item.catidadCompra * item.precio) + '</td>';
                interface += '</tr>';

                $("#datos").append(interface);
            }
            var interface2 = '<tr id="totalPagar"></tr>';
            $("#datos").append(interface2);

        }
    }


    // capturar el foco de la caja numerica de cantidades
    $("#tablaCarrito").on("change", "#cantidad", function() {
        var cantidad = $(this).val();
        var precio = $(this).parent().parent().children("#columnaPrecio").html();
        var subtotal = $(this).parent().parent().children("#columnaPrecioTotal").html((cantidad * precio));
        var idProducto = $(this).parent().parent().children("#columnaBtnEliminar").children("#btnEliminarProducto").attr("idProducto");
        alert(idProducto);

        ListaCarrito.forEach(buscarProductosCarrito);

        function buscarProductosCarrito(item, index) {
            if (item.idProducto == idProducto) {
                item.catidadCompra = Number(cantidad);
            }
        }

        localStorage.removeItem("carrito");
        localStorage.setItem("carrito", JSON.stringify(ListaCarrito));
        totalCarrito();





    })

    $("#tablaCarrito").on("click", "#btnEliminarProducto", function() {

        idProducto = $(this).attr("idProducto");
        var listaTemporal = [];
        ListaCarrito.forEach(eliminarProducto);


        function eliminarProducto(item, index) {
            if (item.idProducto != idProducto) {
                listaTemporal.push({ "idProducto": item.idProducto, "nombre": item.nombre, "precio": item.precio, "cantidadStock": item.cantidadStock, "catidadCompra": item.catidadCompra });


            }

        }

        localStorage.removeItem("carrito");
        localStorage.setItem("carrito", JSON.stringify(listaTemporal));
        $("#datos").html("");
        cargarCarrito();
        totalCarrito();






    })


    function totalCarrito() {
        var pagar = 0;
        var precioTotalUnitario = 0;
        ListaCarrito.forEach(totalPagar);




        function totalPagar(item, index) {
            var cantidad = Number(item.catidadCompra);
            var precio = Number(item.precio);
            precioTotalUnitario += Number(item.precio);
            // alert(cantidad + " " + precio);
            var total = cantidad * precio;
            console.log(total);
            pagar += total;




        }
        var interfacetotal = "";
        var contador = 0;

        for (let index = 0; index < 1; index++) {

            for (let index = 0; index < 6; index++) {
                contador++;
                if (contador == 2) {
                    interfacetotal += '<td>' + "Total Pagar" + '</td>';

                } else if (contador == 6) {
                    interfacetotal += '<td id="valorTotal" valorPagar="' + pagar + '">' + "$" + pagar + '</td>';
                } else if (contador == 5) {
                    interfacetotal += '<td id="valorPrecio" valorUnitario="' + pagar + '">' + "$" + precioTotalUnitario + '</td>';
                } else {
                    interfacetotal += '<td></td>';
                }



            }





        }
        console.log(interfacetotal);
        $("#totalPagar").html(interfacetotal);








    }

    $("#btnPagos").click(function() {
        $("#listadoProductos").html("");
        var subtotalPagar = 0;
        var valorTotalEnvio = 0;
        var impuesto = 0;
        var descripcionFinal = [];
        var contador = 0;

        var listaCompra = JSON.parse(localStorage.getItem("carrito"));

        var concatenar = "";
        listaCompra.forEach(cargarTablaPago);

        function cargarTablaPago(item, index) {

            var subtotal = (item.catidadCompra * item.precio);
            var envio = (subtotal * 0.05);
            impuesto += (subtotal * 0.19);
            valorTotalEnvio += envio;
            subtotalPagar += subtotal;
            description[contador] = item.nombre;

            concatenar += '<tr>';
            concatenar += '<td>' + item.nombre + '</td>';
            concatenar += '<td>' + item.catidadCompra + '</td>';
            concatenar += '<td>' + subtotal + '</td>';
            concatenar += '</tr>';
            contador++;



        }
        $("#listadoProductos").html(concatenar);



        $("#colSubtotal").html("$" + " " + subtotalPagar);
        $("#colValorEnvio").html("$" + " " + valorTotalEnvio);
        $("#colValorImpuestos").html("$" + impuesto);
        $("#colTotalCompra").html(subtotalPagar + valorTotalEnvio + impuesto);

        EnviarDatos(descripcionFinal);


    })

    function EnviarDatos(descripcionFinal) { //crea el formalario de pago
        var listaCompra = JSON.parse(localStorage.getItem("carrito"));
        var concatenar = "";
        //listaCompra.forEach();
        var mensaje = "encyptacion";
        var merchantId = "508029";
        var APILogin = "pRRXKOl8ikMmt9u";
        var APIKey = "4Vj8eK4rloUd272L48hsrarnUA";
        var accountId = "512321";
        var lng = "es";






        var description = "";
        // var md5 = CryptoJS.MD5(APIKey + "~" + merchantId + "~" + codigo + "~" + monto + "~COP"); // encryptacion md5
        var subtotal = 0;




        var md5 = CryptoJS.MD5(APIKey + "~" + merchantId + "~" + "testPayu" + "~" + subtotal + "~COP"); // encryptacion md5
        concatenar += '<form method="post" action="https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu/">';
        concatenar += '<input name="merchantId"    type="hidden"  value="508029"   >';
        concatenar += '<input name="accountId"     type="hidden"  value="512321" >';
        concatenar += '  <input name="description"   type="hidden"  value="' + description + '"  >';
        concatenar += ' <input name="referenceCode" type="hidden"  value="' + "testPayu" + '" >';
        concatenar += '<input name="amount"        type="hidden"  value="' + subtotal + '"   >';
        concatenar += '<input name="tax"           type="hidden"  value="0"  >';
        concatenar += '<input name="taxReturnBase" type="hidden"  value="0" >';
        concatenar += '<input name="shipmentValue" type="hidden"  value="" >'; // el usuario ingresa los valores 

        concatenar += '<input name="currency"      type="hidden"  value="COP" >';
        concatenar += '<input name="lng"      type="hidden"  value="COP" >';
        concatenar += '<input name="signature"     type="hidden"  value="' + md5 + '"  >',
            concatenar += '<input name="test"          type="hidden"  value="1" >';
        concatenar += '<input name="responseUrl"    type="hidden"  value="" >';
        concatenar += '<input name="confirmationUrl"    type="hidden"  value="" >';
        concatenar += '<input name="displayShippingInformation" type="hidden" value="">';
        concatenar += '<input name="Submit"  class="btn btn-block btn-lg btn-primary"      type="submit"  value="Enviar" >';
        concatenar += '</form>';




        $("#pagar").html(concatenar);














    }











})