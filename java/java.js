var boton = document.getElementById("botoncito");

boton.addEventListener("click" , eventoBoton);

var imagen = new Image();
imagen.src= "imagenes/comandos.png";


function eventoBoton()
{
    document.body.appendChild(imagen);
    boton.disabled = true;
}