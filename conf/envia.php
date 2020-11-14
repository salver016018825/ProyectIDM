<?php
    $destinatario = 'salver.osorio@gmail.com';

    $nombre = $_POST['nombre'];
    $correo = $_POST['correo'];
    $asunto = $_POST['asunto'];
    $mensaje = $_POST['mensaje'];
    

    $header = "Mensaje Enviado";
    $mensajeCompleto = $mensaje."\nAtentamente. $nombre." \n".$correo;
    mail($destinatario,$asunto,$mensajeCompleto,$header);
    echo"<script>alert('correo enviado exitosamente')</script>";
    echo"<script> setTimeout(\"location.href='index.html'\",1000)</script>";

?>