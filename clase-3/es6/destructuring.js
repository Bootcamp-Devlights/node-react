const arreglo = [1, 2, 3, 4, 5, 6];

// const segundoElemento = arreglo[1];

const [, segundoElemento ] = arreglo;


console.log("segundo elemento:", segundoElemento);

const cadena = 'hola';

const [, cualquier] = cadena;

console.log("segundo elemento de cadena:", cualquier);


const persona = {
  nombre: "Agustin",
  apellido: "Ramirez"
}

const { apellido: apell } = persona;

console.log("apellido es", apell)

const arregloConElementosVacios = [1, 2, 6, 4];

const [, , tercerElemento = "3"] = arregloConElementosVacios;

console.log("tercer elemento es", tercerElemento)