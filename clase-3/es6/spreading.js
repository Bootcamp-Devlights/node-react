const arreglo = [1, 2, 3, 4, 5, 6];

const [, segundoElemento, ...rest ] = arreglo;

console.log("segundo elemento  es", segundoElemento);
console.log("el resto de los elementos son", rest)

const persona = {
  nombre: "Agustin",
  apellido: "Ramirez",
  edad: 30
}

const { apellido, ...restProperties } = persona;

console.log("resto de propiedades", restProperties)

const persona2 = { ...persona };

const arreglo1 = [1, 2];
const arreglo2 = [3, 4];
const nuevoArreglo = [...arreglo1, ...arreglo2];

console.log("nuevo arreglo", nuevoArreglo)



















// console.log("segundo elemento:", segundoElemento);

// const cadena = 'hola';

// const [, cualquier] = cadena;

// console.log("segundo elemento de cadena:", cualquier);


// const persona = {
//   nombre: "Agustin",
//   apellido: "Ramirez"
// }

// const { apellido: apell } = persona;

// console.log("apellido es", apell)

// const arregloConElementosVacios = [1, 2, 6, 4];

// const [, , tercerElemento = "3"] = arregloConElementosVacios;

// console.log("tercer elemento es", tercerElemento)