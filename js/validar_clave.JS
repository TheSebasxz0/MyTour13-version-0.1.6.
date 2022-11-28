//función para ahorrar codigo [document.getElementById() = __()];
function __(id){
    return document.getElementById(id);
  }
  
  //Validar contraseña
  function validarContraseña() {
    var pass = __('pass').value,
        pass2 = __('pass2').value;
    if(pass != '' && pass2 != ''){
      if(pass != pass2){
        //si las contraseñas no coinciden
        __('resultado').innerHTML = '<p class="error"><strong>Error: </strong>¡Las contraseñas no coinciden!</p>';
        
      }else {
        //Si todo esta correcto 
        __('resultado').innerHTML = '<p class="correcto"><strong>✓ Correcto: </strong>Los datos son correctos :)</p>';
        
      }if (pass != 8 ) {
        __('resultado').innerHTML = '<p class="error"><strong>Error: </strong>¡Nota:Debe tener 8 digitos!</p>';
      }
    } else {
      //si los campos o uno, este vacio
      __('resultado').innerHTML = '<p class="error"><strong>Error: </strong>¡Los campos no deben estar vacios!</p>';
    }
  }
   //enviar formulario con la tecla ENTER
   function enterEnviar(event){
    if(event.keyCode == 13){
      validarContraseña()
    }
}