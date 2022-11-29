const primerArreglo = [1, "string", {}];
const segundoArreglo = [1, 2, 3];

console.log(primerArreglo[0]);

const mapeo = segundoArreglo.map(elemento => elemento * 2)

console.log("arreglo", segundoArreglo)
console.log("mapeo", mapeo)

const arregloConcatenado = primerArreglo.concat(["concat string", "array"])

console.log(arregloConcatenado)

arregloConcatenado.push("nuevoo elemento")

console.log(arregloConcatenado)

const ultimoElement = arregloConcatenado.pop()

console.log(arregloConcatenado)
console.log(ultimoElement)

// Copiar elementos de un arreglo sin eliminarlos de su origen (Inmutar arreglo)
arregloConcatenado.slice(0, 1);
// Eliminar elementos de un arreglo (Mutar arreglo)
arregloConcatenado.splice(0, 1);

console.log(arregloConcatenado);
// console.log(resultado);

// Filtrar un arreglo (obtener solo los elementos numericos)
const filtrado = arregloConcatenado.filter(elemento => typeof  elemento  === "number")

console.log("filtrado:", filtrado);
console.log("arregloConcatenado", arregloConcatenado);

const multidimensional = [[5, 3], [5, 1], 3];

// Convertir un arreglo de varias dimensiones a uno de una sola dimension
const multidimensionalFlat = multidimensional.flat();

console.log(multidimensional[1])
console.log("multidimensionalFlat", multidimensionalFlat)
console.log("multidimensionalFlat", multidimensionalFlat[1])

// Ordenar un arreglo
console.log("multidimensionalFlat sort", multidimensionalFlat.sort())

// Iterar un arreglo
multidimensionalFlat.forEach((elemento) => {
  console.log(elemento)
})

for (const elemento of multidimensionalFlat) {
  console.log(elemento);
}

// Verificar si tiene un elemento un arreglo
console.log(multidimensionalFlat.includes(6))

// Convertir a string todos los elementos de un arreglo agregando separador
console.log(multidimensionalFlat.join(" | "))

// Convertir un string en un arreglo, separando por el separador indicado ","
console.log("Agustin,Ramirez".split(","))

// Obtener el primer indice de un elemento buscado
// En caso de no encontrarse, devuelve -1
console.log(multidimensionalFlat.indexOf(9))

// Obtener el ultimo indice de un elemento buscado
// En caso de no encontrarse, devuelve -1S
console.log(multidimensionalFlat.lastIndexOf(3))