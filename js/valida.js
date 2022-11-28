
/* FUNCION EN JAVASCRIPT PERMITE VALIDAR EL INPUT FILE , CONTROLAMOS SUBIDAS UNICAMENTE IMGANES CON ESTAS REFERENCIAS */
function Exten(){
  var btn_enviar =document.getElementById('btn_enviar')
  var ruta =btn_enviar.value
  var extenciones= /(.jpg|.png|.jpeg)$/i

  if(!extenciones.exec(ruta)){
    swal( 'Archivo desconocido','Debes subir imagenes tipo png,jpg  o jpeg','error');
      btn_enviar.value=''
      return false
  }
  
  
}