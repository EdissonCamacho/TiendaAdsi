<?php
require_once "conexion.php";

class modeloInventario
{

    public static function mdlActualizarInventario($lista)
    {
        $mensaje = "";
        foreach ($lista as $key => $value) {
            $id = $value->idProducto;
            $nombre = $value->nombre;
            $cantidadStock = $value->cantidadStock;
            $cantidadCompra = $value->catidadCompra;
            $nuevaCantidad = $cantidadStock - $cantidadCompra;
            try {
                $objRespuesta = Conexion::conectar()->prepare("UPDATE productos SET cantidadStock='$nuevaCantidad' where idProducto='$id' ");
                if ($objRespuesta->execute()) {
                    $mensaje = "ok";
                } else {
                    $mensaje = "error al modificar stock";
                }
            } catch (Exception $th) {
                $mensaje = $th;
            }
            $objRespuesta = null;


            if ($mensaje != "ok") {
                break; // rompe ciclos 
            }
        }

        return $mensaje;
    }
}
