const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
    case "/home":
      fs.readFile("./index.html", (err, data) => {
        if (err) {
          console.log("Hubo un error");

          res.end("Error");
        }

        res.writeHead(200, "Exito", {
          "Content-Type": "text/html",
        });

        res.end(data);
      });
      break;
    case "/contact":
      fs.readFile("./contact.html", (err, data) => {
        if (err) {
          console.log("Hubo un error");

          res.end("Error");
        }

        res.writeHead(200, "Exito", {
          "Content-Type": "text/html",
        });

        res.end(data);
      });
      break;
    default:
      const json = {
        status: 400,
        data: "Hubo un inconveniente",
      };

      res.writeHead(200, "Exito", {
        "Content-Type": "application/json",
      });

      res.end(JSON.stringify(json));

      break;
  }
});

server.listen(3000);
