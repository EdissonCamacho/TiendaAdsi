<div id="contenedorGeneral">
<?php
    $objProductos = new controladorProductos();
    $ListaProductos = $objProductos->ctrListarProductos();
    $anteriorCategoria = "";
    $categoria = "";
    $interface = '';
    foreach ($ListaProductos as $key => $value) {
        $categoria = $value["categoria"];
        if (empty($anteriorCategoria)){
            $anteriorCategoria = $categoria;
            $interface = '<div id="panelProductos" class="row mc-margenes">';
            $interface .= '<h1>Productos Tecnologicos</h1>';
        }
        
        if ($anteriorCategoria != $categoria){
            $interface .= '</div>';
            echo $interface;

            $anteriorCategoria = $categoria;
            $interface = '<div id="panelProductos" class="row mc-margenes">';
            $interface .= '<h1>Cursos virtuales</h1>';
        }

        $ruta = "http://127.0.0.1/productoTienda/".$value["imagen"];

        $interface .= '<div class="col-sm-2">';
        $interface .= '<div class="panel panel-primary">';
        // cabecera
        $interface .= '<div class="panel-heading">'.$value["nombreProducto"].'</div>';

        // cuerpo
        $interface .= '<div class="panel-body"><img src="'.$ruta.'" class="img-responsive" style="width:100%" alt="Image"></div>';
        
        // pie
        $interface .= '<div class="panel-footer">';
        $interface .= '<p class="mc-contenedorPrecios">$ '.$value["precio"].'</p>';
        $interface .= '<a id="btnCarrito" class="mc_links pull-right" idProducto="'.$value["idProducto"].'" nombre="'.$value["nombreProducto"].'" precio="'.$value["precio"].'" cantidad="'.$value["cantidadStock"].'"><span class="mc-iconos glyphicon glyphicon-shopping-cart"></span></a>';
        $interface .= '<a id="btnFavoritos" class="mc_links pull-right"  idProducto="'.$value["idProducto"].'" nombre="'.$value["nombreProducto"].'" precio="'.$value["precio"].'" cantidad="'.$value["cantidadStock"].'"><span class="mc-iconos glyphicon glyphicon-heart"></span></a>';
        $interface .= '<a class="mc_links pull-right" ><span class="mc-iconos glyphicon glyphicon-eye-open"></span></a>';
        $interface .= '</div>';

        $interface .= '</div>';
        $interface .= '</div>';
    }

    $interface .= '</div>';
    echo $interface;
?>
</div>


