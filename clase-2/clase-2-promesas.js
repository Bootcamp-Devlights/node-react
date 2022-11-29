async function prueba() {
  const promesa = new Promise((resolve) => {
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

prueba()