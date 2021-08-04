<div id="ListaCarrito">
    <div class="container">
        <div class="col-md-12">
            <table class="table" id="tablaCarrito">
                <thead>
                    <th></th>
                    <th>Nombre</th>
                    <th>Imagen</th>
                    <th>Cantidad Compra</th>
                    <th>Valor</th>
                    <th>Total</th>
                </thead>

                <tbody id="datos">
                    <tr>




                    </tr>

                </tbody>
            </table>

        </div>
    </div>
</div>

<br><br>
<div class="row">
    <div class="col-md-4">
        <button id="btnPagos" type="button" class="btn btn-info pull-right" data-toggle="modal" data-target="#modalPago">Realizar Pago</button>
    </div>
</div>

<!-- Modal Resumen de compra -->
<div class="modal fade" id="modalPago" role="dialog">
    <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Resumen de compra</h4>
            </div>
            <div class="modal-body">
                <div id="contenidoCheckOut">
                    <div class="row">
                        <h5 class="text-center well text-muted text-uppercase">informacion de Pago</h5>
                        <figure class="col-md-12">
                            <center>


                                <img src="vistas/imagenes/imagen.jpeg" class="img-thumbnail">
                            </center>

                        </figure>

                    </div>

                </div>
                <br>
                <div class="listaProductos row">
                <h5 class="text-center well text-muted text-uppercase">productos a comprar</h5>

                <table class="table table-striped tablaProductos">
                    <thead>
                        <tr>
                            <td>Producto</td>
                            <td>Cantidad</td>
                            <td>Subtotal</td>
                        </tr>
                    </thead>
                    <tbody id="listadoProductos">

                    </tbody>
                </table>

                <br><br>


                <div class="col-sm-6 col-xs12 pull-right">
                <table class="table table-striped tablaProductos">
                    
                    <tbody id="listadoProductos">
                        <tr>
                            <td>Subtotal:</td>
                            <td id="colSubtotal"></td>
                        </tr>
                        <tr>
                            <td>Envio:</td>
                            <td id="colValorEnvio"></td>
                        </tr>
                        <tr>
                            <td>Impuestos</td>
                            <td id="colValorImpuestos"></td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td id="colTotalCompra"></td>
                        </tr>

                    </tbody>
                </table>
                </div>


                </div>

                







            </div>
            <div class="modal-footer">
                

               <!-- <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>-->

                <div id="pagar"></div>
            </div>
        </div>

    </div>
</div>

</div>