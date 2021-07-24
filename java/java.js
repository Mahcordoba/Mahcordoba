var boton = document.getElementById("botoncito");
var boton2 = document.getElementById("boton");
var parrafo1 = document.getElementById("Parrafo1");
var parrafo2 = document.getElementById("Parrafo2");
boton.addEventListener("click" , eventoBoton);
boton2.addEventListener("click" , textoNext);

var imagen = new Image();
imagen.src= "imagenes/comandos.png";


function eventoBoton()
{
    document.body.appendChild(imagen);
    boton.disabled = true;
}

function textoNext()
{
    parrafo1.innerHTML =    "Ayer se vio lo del pull requests que lo que decia es que si uno trabaja con varias personas esto" + 
                            "<br /> esto se usa para evitar que se haga merge directamente al main si no que primero lo revisan" + 
                            "<br /> y si aceptan los cambios ellos hacen merge ojo esto solo funciona en git hub ya que esto es" +
                            "<br /> de la plataforma web y los que desarrollan normalmente este trabajo son los dep ops.";
    parrafo2.innerHTML =    "Tamabien se vio los del fork que es hacer una copia de un repositorio para poder trabajar en el" + 
                            "<br />y este estara conectado con el original lo que permite ver si hay cambios, cuando usas esta opcion puedes"+
                            "<br />hacer un merge a tu proyecto y con la plataforma de git hub escribir un comentario a los desarroladores para"+
                            "<br />que te tenga en cuenta para verificar tu proyecto." +
                            "<br />Tambien vimos sobre git page esto nos permite tener una pagina https gracias git pero esta solo funciona del area"+
                            "<br />fronter si es bakend esta pagina no funciona"+
                            "<br /><strong>Tambien se vio lo de gitignore</strong> "+
                            "<br /> Esto se hace para ignorar cosas y que estas no se envien al repositorio las imagenes no se envian al repositorio ya que estas suelen pesar mucho"+
                            "<br /> Por ultimo tambien nos mostraros un programa para ver como se hace un mejor readmi";

    boton2.disabled= true;
}