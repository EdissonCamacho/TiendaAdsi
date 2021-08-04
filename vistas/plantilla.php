<?php

include_once "vistas/modulos/cabecera.php";

if (isset($_GET["ruta"])){
    if($_GET["ruta"] == "inicio" ||
       $_GET["ruta"] == "productos" ||
       $_GET["ruta"] == "contactanos" ||
       $_GET["ruta"] == "carrito"){
           
       include_once "vistas/modulos/".$_GET["ruta"].".php"; 
    }
}else{


}





include_once "vistas/modulos/pie.php";
