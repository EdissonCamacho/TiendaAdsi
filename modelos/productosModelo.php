<?php
require_once "conexion.php";

class modeloProductos{

    public static function mdlListarProductos(){
        $ObjRespuesta = Conexion::conectar()->prepare("SELECT * FROM productos ORDER BY categoria");
        $ObjRespuesta->execute();
        $objListaProductos = $ObjRespuesta->fetchAll();
        $ObjRespuesta = null;
        return $objListaProductos;
    }
}
