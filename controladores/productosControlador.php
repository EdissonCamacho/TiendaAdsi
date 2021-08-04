<?php

class controladorProductos{
    public function ctrListarProductos(){
        $objRespuesta = modeloProductos::mdlListarProductos();
        return $objRespuesta;
    }
}
