// Variable de control para verificar si la animación ya se activó
let animacionActivada = false;
let estado = false;

window.addEventListener("scroll", function () {
  let animacion = document.getElementById("scroll__leo");
  let posicion1 = animacion.getBoundingClientRect().top;

  let animacion2 = document.getElementsByClassName("scroll__salida");

  console.log(posicion1);
  let TamañoPantalla = window.innerHeight / 2;

  if (posicion1 >= 550 && posicion1 <= 710) {
    animacion.style.opacity = 0;
    estado = false;
  }

  if (estado == false && posicion1 >= 300 && posicion1 <= 550) {
    animacion.style.animation = "mover 1s ease-out";
    animacion.style.opacity = 1;
    setTimeout(function () {
      estado = true;
      animacion.style.animation = "";
    }, 1000);
  }

  // if (estado == true && posicion1 >= 300 && posicion1 <= 450) {
  //   animacion.style.animation = "moverreverso 1.5s ease-out";
  //   animacion.style.opacity = 1;

  //   estado = false;
  // }

  // ok

  // Verificar si la animación ya se activó y si la posición es menor que el valor deseado

  // if ((!animacionActivada && posicion1 < 550) || posicion1 < 120) {
  //   animacion.style.animation = "mover 1s ease-out";
  //   animacion.style.opacity = 1;
  //   // Marcar la animación como activada
  //   animacionActivada = true;
  // }

  // if (animacionActivada && posicion1 >= 550) {

  //   animacion.style.animation = "moverreverso 1.5s ease-out";

  //   setTimeout(function () {
  //     if (posicion1 < 250) {
  //       animacionActivada = false;
  //       animacion.style.opacity = 1;
  //       return;
  //     }
  //     if (posicion1 >= 550) {
  //       animacion.style.opacity = 0;
  //       animacionActivada = false;
  //     }
  //   }, 1000);
  // }

  // if (animacionActivada == false && posicion1 >= 550) {
  //   animacion.style.opacity = 0;
  // }

  // if (
  //   (animacionActivada && posicion1 > 550) ||
  //   (animacionActivada && posicion1 < 800)
  // ) {
  //   animacion.style.animation = "moverreverso 1s ease-out";
  //   animacionActivada = false;
  //   // animacionActivada = true;
  // }

  // Restablecer la animación cuando vuelvas a la parte superior de la página
  // if (posicion1 >= 600) {
  //   animacionActivada = false;
  //   animacion2.style.animation = "";
  //   animacion2.style.opacity = 0;
  // }
});

document.addEventListener("DOMContentLoaded", function () {
  // Obtener el elemento que deseas animar
  let animacion = document.getElementById("scroll__leo");

  // Establecer la propiedad opacity en 0
  animacion.style.opacity = "0";
});
