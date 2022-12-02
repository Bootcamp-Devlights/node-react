const http = require("http");


const server = http.createServer((request, response) => {
  response.writeHead(200, "Exito", { "Content-Type": "text/html" });

  console.log("request", request);

  console.log("Servidor esta funcionando");

  response.end("Respuesta finalizada");
})

server.listen(3000, "127.0.0.1", (error) => {
  if (error) {
    console.log("Hubo un error", error);
  }

  console.log("Servidor andando!");
})