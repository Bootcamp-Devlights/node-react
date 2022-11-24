// Tipos de datos

/*
  Comentario
  Largo
  con varias lineas
*/

let nombre = "Agustin";
const soyMujer = false;
let edad = 30;
function mayorQue30() {

}
const casa = {
  color: "blanco",
  m2: 200,
  externo: false,
  direccion: {
    calle: "Cerrito",
    altura: 18
  }
}
const arreglo = ["item1", "item2"];
const indefinido = undefined;
const nulo = null;
const simbolos = Symbol();

nombre = "Pepito";

// console.log("Mi nombre es:", nombre);
// console.log("Mi edad es:", edad);
// console.log("Tipo nombre:", typeof nombre);
// console.log("Tipo soyMujer:", typeof soyMujer);
// console.log("Tipo mayorQue30:", typeof mayorQue30);
// console.log("Tipo casa:", typeof casa);
// console.log("Tipo nulo:", typeof nulo);
// console.log("Tipo array:", typeof []);
// console.log("Tipo indefinido:", typeof indefinido);
// console.log("Tipo simbolos:", typeof simbolos);

// Comparaciones

// console.log(2 == "2")
// console.log(2 === 2)
// console.log(2 != "2")
// console.log(2 !== "2")
// console.log(2 >= 2)
// console.log(2 <= 2)

// Conversiones
// console.log("Mi edad es de tipo:", typeof edad);

// Condicionales

if (2 == 1) {
  console.log("2 es igual a 2")
} else {
  console.log("2 no es igual a 1")
}

const operador = 5;

switch (operador) {
  case 2:
    console.log("operador es igual a 2");
    break;
  case 3:
    console.log("operador es igual a 2");
    break;
  default:
    console.log("operador no matcheaa con ningun case");
    break;
}

let ternario = 2 > 2 ? "es mayor a 2" : "es menor o igual a 2";
// ternario = 2 > 2 ? "es mayor a 2" : 2 < 2 ? "es menor 2" : "es igual a 2";

if (2 > 2) {
  ternario = "es mayor a 2";
} else if (2 < 2) {
  ternario = "es menor 2"
} else {
  ternario = "es igual a 2"
}


if (2 === 2 && typeof 2 === "number") {
  ternario = "es mayor a 2 y es numero";
} else {
 
}

console.log(ternario);
