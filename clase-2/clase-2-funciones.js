// Funcion literal

function myFunction({ param1, param2, param3, param4 }) {
  // do
  console.log("params", param1);
}

/*
 * Recomendacion cuando la funcion recibe mas de 3 parametros, pasar
 * como un objeto
*/
myFunction({ param4: 1, param3: 2, param1: 2, param2: "string" })

// Arrow function
const myFunction2 = () => {
  // ejecutar
}