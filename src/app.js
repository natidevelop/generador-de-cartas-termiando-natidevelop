/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  generadorCarta();
};
function generadorCarta() {
  const palo = ["♦", "♥", "♠", "♣"];
  const numeros = [2, 3, 4, 5, 6, 7, 8, 9, "A", "J", "Q", "K"];
  let numeroAleatorio = numeros[Math.floor(Math.random() * numeros.length)];
  let paloAleatorio = palo[Math.floor(Math.random() * palo.length)];
  console.log(numeroAleatorio, paloAleatorio);
  document.getElementById("numero").innerHTML = numeroAleatorio;
  document.getElementById("paloArriba").innerHTML = paloAleatorio;
  document.getElementById("paloAbajo").innerHTML = paloAleatorio;
  if (paloAleatorio == "♥" || paloAleatorio == "♦") {
    document.getElementById("paloAbajo").style.color = "red";
    document.getElementById("paloArriba").style.color = "red";
  } else {
    document.getElementById("paloAbajo").style.color = "black";
    document.getElementById("paloArriba").style.color = "black";
  }
}
