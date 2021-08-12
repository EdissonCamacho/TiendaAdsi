<?php


require_once "controladores/plantillaControlador.php";
require_once "controladores/productosControlador.php";

require_once "modelos/productosModelo.php";

$objPlantilla = new controlPlantilla();
$objPlantilla->ctrPlantilla();
