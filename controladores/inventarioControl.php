<?php
require_once "../modelos/inventarioModelo.php";
class controladorInventario{
    public $lista;

    public function actualizarInvenutario(){
        $objRespuesta = modeloInventario::mdlActualizarInventario($this->lista);
        echo json_encode($objRespuesta);

    }




}
if(isset($_POST["listaCarrito"])){
$objActualizar = new controladorInventario();
$objActualizar->lista=json_decode($_POST["listaCarrito"]); // decodifica un jsonstrinfy y lo convierte en array
$objActualizar->actualizarInvenutario();

}