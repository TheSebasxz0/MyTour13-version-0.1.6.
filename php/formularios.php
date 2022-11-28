<?php

$nombre = $_POST['nombre'];
$gmail = $_POST['gmail'];
$pais = $_POST['pais'];
$numero_identificacion = $_POST['numero_identificacion'];
$tipo_usu = $_POST['tipo_usu'];

echo("BIENVENIDOS");
echo("<br><br>");
echo("El nombre ingresado es: $nombre");
echo("<br><br>");
echo("El correo ingresado es: $gmail");
echo("<br><br>");
echo("El pais ingresado es: $pais");
echo("<br><br>");
echo("El numero de identificacion es: $numero_identificacion");
echo("<br><br>");
echo("Y por ultimo, el tipo de usuario es: $tipo_usu");

?>