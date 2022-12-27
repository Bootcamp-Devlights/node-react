const express = require('express');
const apiRoutes = require("./routes");
const db = require("./models");

const app = express();

app.use(express.json());

app.use("/api", apiRoutes);

db.sync().then(() => {
  console.log("Conectado a SQLite")
}).catch(() => {
  console.log("Hubo un error al conectarse a SQLite")
})

app.listen(3000, 'localhost', () => {
  console.log("Servidor funcionando en puerto 3000");
});