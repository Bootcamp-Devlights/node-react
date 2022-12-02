function callback(resultado) {
  console.log("callback", resultado);
}

function operacion(a, b, cb) {
  let result = 0;

  // Callback async (asincrono)
  setTimeout(() => {
    result =  a + b;

    cb(result);
  }, 5000);

  console.log(result);
}

operacion(2, 3, callback)

// const arreglo = [1, 2 , 3];

// function filter(cb) {
//   // Callback sync (sincrono)
//   arreglo.forEach(elemento => cb(elemento))
// }

// filter((element) => console.log(element))