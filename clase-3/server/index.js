const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
  response.writeHead(200, "Exito", { "Content-Type": "text/html" });

  fs.readFile("./index-inexistente.html", (err, data) => {
    if (err) {
      fs.readFile("./index-error.html", (err2, data2) => {
        if (err2) {
          throw err2;
        }

        response.end(data2);
      })
    } else {
      response.end(data);
    }

  });
})

server.listen(3000, "127.0.0.1", (error) => {
  if (error) {
    console.log("Hubo un error", error);
  }

  console.log("Servidor andando!");
})