const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoute = require("./routes/user");
const log = require('./middlewares/log');
const authentication = require('./middlewares/authentication');

app.use(log);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hola mundo desde Express!")
})
app.use("/user", authentication, userRoute);

mongoose.connect("mongodb://127.0.0.1:27017/clase-10", (error) => {
  if (error) {
    console.log("Hubo un error en la conexion a MongoDB", error);
  } else {
    console.log("Conexion exitosa con MongoDB");
  }
})

app.listen(3000);