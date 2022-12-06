const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, "Success", {
    "Content-Type": "application/json"
  })

  const json = {
    status: 200,
    data: [{ name: "Agustin", lastname: "Ramirez" }],
  }

  res.end(JSON.stringify(json));
})

server.listen(3000, "127.0.0.1", (error) => {
  if (error) {
    console.log("Hubo un error", error);
  }

  console.log("Servidor andando!");
})