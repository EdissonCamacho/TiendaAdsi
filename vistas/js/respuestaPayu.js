$(document).ready(function(){
    var parametros=new URLSearchParams(location.search);
    var respuesta=parametros.get('lapTransactionState');
    if(respuesta=="APPROVED"){
        if(localStorage.getItem("carrito")!=null){
            var listaCarrito=localStorage.getItem("carrito");
            var objData = new FormData();

            objData.append("listaCarrito",listaCarrito);
            $.ajax({
                url:"controladores/inventarioControl.php",
                type:"post",
                dataType:"json",
                data:objData,
                cache:false,
                contentType: false,
                processData:false,
                success:function(respuesta){
                    localStorage,removeItem("carrito");
                }

            })

        }
        



    }

















})