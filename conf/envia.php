<?php
    ini_set( 'display_errors', 1 );
    error_reporting( E_ALL );   
    $destinatario = 'idmetalmecanico@aol.com'; //contacto@idm-industrial.com
    $nombre = $_POST["nombre"];
    $correo = $_POST["correo"];
    $asunto = $_POST["asunto"];
    $mensaje = $_POST["mensaje"];
    $header = "Mensaje Enviado";
    $mensajeCompleto = "Hola IDM Industrial haz recibido un nuevo correo. "."\n\n\nDe: ".$nombre."\n"."E-Mail: ".$correo." \n"."\n\n".$mensaje;
    if(mail($destinatario,$asunto,$mensajeCompleto)){
        echo"<script>alert('correo enviado exitosamente')</script>";
        echo"<script> setTimeout(\"location.href='../index.html'\",1000)</script>";
    }

?>



