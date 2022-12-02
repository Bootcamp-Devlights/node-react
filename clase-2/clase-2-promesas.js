async function prueba() {
  const promesa = new Promise((resolve, reject) => {
    setTimeout(() => resolve(500), 5000);
  });

  /*
   * La promesa bloquea la ejecucion del programa y hasta que no termine
   * no va a ejecutar la proxima instruccion
   * En este caso, el console.log
   */
  const resultado = await promesa;

  console.log(resultado);
}

// prueba();

async function promesaDeError() {
  const promesa = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Hubo un error"), 5000);
  });

  try {
    const resultado = await promesa;

    // const resultado2 = await promesa2;
    // const resultado3 = await promesa3;

    console.log(resultado);
  } catch (error) {
    console.log("Error de promesa:", error);
  } finally {
    console.log("promesa finalizada");
  }
}

promesaDeError();

// promesaDeError()
//   .then((data) =>
//     promesa2()
//       .then(() => {
//         promesa3()
//         .then(() => {})
//         .catch((error) => console.log("error de promesa2"))
//         .finally(() => console.log("promesa2 finalizada"))
//       })
//       .catch((error) => console.log("error de promesa2"))
//       .finally(() => console.log("promesa2 finalizada"))
//   )
//   .catch((error) => console.log("Error de promesa:", error))
//   .finally(() => {
//     console.log("promesa finalizada");
//   });

// async function init() {
//   try {
//     await promesaDeError()
//   } catch (error) {
//     console.log("Error de promesa:", error)
//   } finally {
//     console.log("promesa finalizada");
//   }
// }

// init();
