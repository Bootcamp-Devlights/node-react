const express = require("express");

const server = express();

server.get("/", (req, res) => {
  res.send("Hello world!");
});

server.get("/:param1/:param2", (req, res) => {
  res.send(
    `Hello world! => mis url params son: ${JSON.stringify(
      req.params
    )}. Mis query params son: ${JSON.stringify(req.query)}`
  );
});

server.get("/about", (req, res) => {
  res.send("About");
});

server.get("/contact", (req, res) => {
  res.send("Contacto");
});

server.get("/test", (req, res) => {
  res.send("Test");
});

server.listen(3000);
