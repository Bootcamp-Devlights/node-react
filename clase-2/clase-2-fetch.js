function obtenerApiDataSync() {
  return fetch("https://api.publicapis.org/entries")
    .then((data) => data.json())
    .then((json) => console.log("Este es el json:", json))
    .catch((error) => console.log("Hubo un error", error))
    .finally(() => console.log("fetch finalizado"));
}

// obtenerApiDataSync();

async function obtenerApiDataASync() {
  try {
    const data = await fetch("https://api.publicapis.org/entries");
    const json = await data.json();

    console.log("Este es el json:", json);
  } catch (error) {
    console.log("Hubo un error", error)
  } finally {
    console.log("fetch finalizado")
  }
}

obtenerApiDataASync();