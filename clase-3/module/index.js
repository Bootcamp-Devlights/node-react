const Comun = require("./comun");
const constants = require("./constants");

async function init() {
  const resultado = Comun.suma(4);

  console.log("resultado es", resultado);

  Comun.mensaje();

  console.log("el proyecto es", constants.project);

  const apiData = await Comun.fetchAPI();

  console.log("mi api data es", apiData)
}

init();