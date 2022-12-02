function suma(a = 4, b = 5) {
  return a + b;
}

function mensaje() {
  console.log("Hola");
}

async function fetchAPI() {
  const response = await fetch("https://api.publicapis.org/entries");
  const data = await response.json();

  // const resultado = await new Promise((resolve) => {
  //   setTimeout(() => resolve(100), 10000)
  // })

  return data;
}

module.exports = {
  suma,
  mensaje,
  fetchAPI
};